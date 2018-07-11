import React from 'react';
import PropTypes from 'prop-types';
import empty from 'is-empty';

import './SocialCardPost.css';

function SocialCardPost({ text, image }) {
	return (<div>
		{!empty(text) && <div className="Social_post_text">
			{text}
		</div>}
		<a href="#">
			<img className="Social_post_image" src={image} />
		</a>
	</div>);
}

SocialCardPost.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string.isRequired
};

export default SocialCardPost;