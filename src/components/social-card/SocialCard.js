import React from 'react';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactions from './SocialCardReactions';
import SocialCardReact from './SocialCardReact';

import './SocialCard.css';

function SocialCard() {
	return (<div className="Social_card">
		<SocialCardHeader
			image="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/19554009_10154562736535933_8492592550808364419_n.jpg?_nc_cat=0&oh=e2dcab39740d500b15ab15c33715c1cb&oe=5BEA19A5"
			profileText="Vevo"
			time="3 hrs" />
		<SocialCardPost
			text="Calling all Guns N' Roses fans! Here's your chance to win the Appetite For Destruction Super Deluxe Box Set‼️ Enter now for your chance to win!"
			image="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-9/36907526_10155523573880933_4550184912837148672_n.jpg?_nc_cat=0&oh=907c9bbce64ffe2808a821fb673f140d&oe=5BA005E7"
		/>
		<SocialCardReactions 
			likes={157}
			comments= {2}
			shares= {3}
		/>
		<SocialCardReact/>
	</div>);
}

export default SocialCard;