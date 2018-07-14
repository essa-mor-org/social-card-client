import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

function Comment({profileImage ,profileName, comment}) {
	return (<div className="Comment_panel">
		<img className="Social_comments_image" src={profileImage} alt="" />
		<div className="Comment_comment_panel">
			<a className="Comment_profile" href="#">{profileName}</a>
			<span className="Comment_comment">{comment}</span>
		</div>
	</div>);
}

Comment.propTypes = {
	profileImage: PropTypes.string,
	profileName: PropTypes.string,
	comment: PropTypes.string
};
export default Comment;