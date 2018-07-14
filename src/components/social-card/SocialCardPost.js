import React from 'react';
import PropTypes from 'prop-types';
import empty from 'is-empty';

import './SocialCardPost.css';

function SocialCardPost({ text, image }) {
	return (<React.Fragment>
		{!empty(text) && <div className="Social_post_text">
			{text}
		</div>}
		<a href="#">
			<img className="Social_post_image" src={image} alt=""/>
		</a>
	</React.Fragment>);
}

SocialCardPost.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string.isRequired
};

export default SocialCardPost;