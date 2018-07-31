import React from 'react';
import PropTypes from 'prop-types';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactions from './SocialCardReactions';
import SocialCardReact from './SocialCardReact';
import SocialCardComments from './comments/SocialCardComments';

import './SocialCard.css';

function SocialCard({ image, profileText, time, text, postImage, likes, comments, shares, profileImage }) {
	return (<div className="Social_card">
		<SocialCardHeader
			image={image}
			profileText={profileText}
			time={time} />
		<SocialCardPost
			text={text}
			image={postImage}
		/>
		<SocialCardReactions
			likes={likes}
			comments={comments}
			shares={shares}
		/>
		<SocialCardReact onLike={() => { }} onComment={() => { }} onShare={() => { }} />
		<SocialCardComments
			onComment={() => { }}
			profileImage={profileImage}
			comments={[
				{ id: 1, profileImage: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/c0.0.48.48/p48x48/30571266_10211755395060285_621329575565066240_n.jpg?_nc_cat=0&oh=755d9aa650987a5b1519cdbaeeedcd8c&oe=5BEA6497', profileName: 'Tyler Schmidt', comment: 'Written by Lady Gaga' },
				{ id: 2, profileImage: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/c0.0.48.48/p48x48/30571266_10211755395060285_621329575565066240_n.jpg?_nc_cat=0&oh=755d9aa650987a5b1519cdbaeeedcd8c&oe=5BEA6497', profileName: 'Tyler Schmidt', comment: 'Man they confiscated my pages Have a great day' }
			]} />
	</div>);
}

SocialCard.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	profileText: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	postImage: PropTypes.string.isRequired,
	likes: PropTypes.number,
	comments: PropTypes.number,
	shares: PropTypes.number,
	profileImage: PropTypes.string.isRequired,
	postComments: PropTypes.arrayOf(PropTypes.shape({
		profileImage: PropTypes.string.isRequired,
		profileName: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	}))
};

export default SocialCard;