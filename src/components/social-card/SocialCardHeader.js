import React from 'react';
import PropTypes from 'prop-types';

import './SocialCardHeader.css';

function SocialCardHeader({ image, profileText, time }) {
	return (<div className="Social_header">
		<div className="Social_header_column1">
			<a className="Social_header_image_link" href="#">
				<img className="Social_header_image" src={image} alt=""/>
			</a>
			<a className="Social_header_name" href="#">{profileText}</a>
			<a className="Social_header_time" href="#">{time}</a>
			<span className="Social_header_saperator">.</span>
			<a className="Social_header_world" href="#"></a>
		</div>
		<a className="Social_header_toggle" href="#"></a>
	</div>);
}

SocialCardHeader.propTypes = {
	image: PropTypes.string.isRequired,
	profileText: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired
};

export default SocialCardHeader;