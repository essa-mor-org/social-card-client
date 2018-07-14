import React from 'react';
import PropTypes from 'prop-types';
import empty from 'is-empty';

import Comment from './Comment';
import './SocialCardComments.css';

function SocialCardComments({ profileImage, comments }) {
	return (<div>
		<div className="Social_comments_input_panel">
			<img className="Social_comments_image" src={profileImage} alt="" />
			<input className="Social_comments_input" type="text" placeholder="Write a comment..." />
		</div>
		{!empty(comments) && comments.map(({ profileImage, profileName, comment }) => 
			<Comment profileImage={profileImage} profileName={profileName} comment={comment} />)}
	</div>);
}

SocialCardComments.propTypes = {
	profileImage: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(PropTypes.shape({
		profileImage: PropTypes.string,
		profileName: PropTypes.string,
		comment: PropTypes.string
	}))
};

export default SocialCardComments;