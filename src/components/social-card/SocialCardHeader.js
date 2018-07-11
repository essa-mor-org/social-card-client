import React from 'react';

import './SocialCardHeader.css';

function SocialCardHeader() {
	return (<div className="Social_header">
		<div className="Social_header_column1">
			<a className="Social_header_image_link" href="#">
				<img className="Social_header_image" src="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/19554009_10154562736535933_8492592550808364419_n.jpg?_nc_cat=0&oh=e2dcab39740d500b15ab15c33715c1cb&oe=5BEA19A5" />
			</a>
			<a className="Social_header_name" href="#">Vevo</a>
			<a className="Social_header_time" href="#">3 hrs</a>
			<span className="Social_header_saperator">.</span>
			<a className="Social_header_world" href="#"></a>
		</div>
		<a className="Social_header_toggle" href="#"></a>
	</div>);
}

export default SocialCardHeader;