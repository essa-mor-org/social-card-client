import React from 'react';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactions from './SocialCardReactions';
import SocialCardReact from './SocialCardReact';
import SocialCardComments from './comments/SocialCardComments';

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
			comments={2}
			shares={3}
		/>
		<SocialCardReact onLike={() => {}} onComment={() => {}} onShare={() => {}}/>
		<SocialCardComments
			onComment={()=>{}}
			profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p48x48/14572897_10209280775468762_3731006062202010506_n.jpg?_nc_cat=0&oh=41eba23bde8e0c43e709a6a9f9867c55&oe=5BDD6AD2"
			comments={[
				{ id:1, profileImage: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/c0.0.48.48/p48x48/30571266_10211755395060285_621329575565066240_n.jpg?_nc_cat=0&oh=755d9aa650987a5b1519cdbaeeedcd8c&oe=5BEA6497', profileName: 'Tyler Schmidt', comment: 'Written by Lady Gaga' },
				{ id:2, profileImage: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/c0.0.48.48/p48x48/30571266_10211755395060285_621329575565066240_n.jpg?_nc_cat=0&oh=755d9aa650987a5b1519cdbaeeedcd8c&oe=5BEA6497', profileName: 'Tyler Schmidt', comment: 'Man they confiscated my pages Have a great day' }
			]} />
	</div>);
}

export default SocialCard;