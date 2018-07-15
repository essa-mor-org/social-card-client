import React from 'react';
import PropTypes from 'prop-types';
import empty from 'is-empty';

import Comment from './Comment';
import './SocialCardComments.css';

function keyPress(onComment) {
	return function(event){
		if (event.key === 'Enter') {
			onComment(event.target.value);
		}
	};
}

function SocialCardComments({ profileImage, comments, onComment }) {
	return (<React.Fragment>
		<div className="Social_comments_input_panel">
			<img className="Social_comments_image" src={profileImage} alt="" />
			<input className="Social_comments_input" type="text" placeholder="Write a comment..." onKeyPress={keyPress(onComment)} />
		</div>
		{!empty(comments) && comments.map(({ id, profileImage, profileName, comment }) =>
			<Comment key={id} profileImage={profileImage} profileName={profileName} comment={comment} />)}
	</React.Fragment>);
}

SocialCardComments.propTypes = {
	profileImage: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(PropTypes.shape({
		profileImage: PropTypes.string.isRequired,
		profileName: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	})),
	onComment: PropTypes.func.isRequired
};

export default SocialCardComments;