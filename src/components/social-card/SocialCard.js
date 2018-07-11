import React from 'react';

import SocialCardHeader from './SocialCardHeader';

import './SocialCard.css';

function SocialCard() {
	return (<div className="Social_card">
		<SocialCardHeader
			image="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/19554009_10154562736535933_8492592550808364419_n.jpg?_nc_cat=0&oh=e2dcab39740d500b15ab15c33715c1cb&oe=5BEA19A5"
			profileText="Vevo"
			time="3 hrs" />
	</div>);
}

export default SocialCard;