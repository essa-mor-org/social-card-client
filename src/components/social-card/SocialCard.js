import React from 'react';
import PropTypes from 'prop-types';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactions from './SocialCardReactions';
import SocialCardReact from './SocialCardReact';
import SocialCardComments from './comments/SocialCardComments';

import './SocialCard.css';

function onComment(id, commentCallBack, comment){
	//commentCallBack({id, comment});
}

function SocialCard({ id, image, profileText, time, text, postImage, like, likes, shares, profileImage,
	postComments, likeCallBack, shareCallBack, commentCallBack }) {
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
			comments={postComments.length}
			shares={shares}
		/>
		<SocialCardReact id={id} like={like} likes={likes} shares={shares} onLike={likeCallBack} onComment={() => { }} onShare={shareCallBack} />
		<SocialCardComments
			onComment={onComment.bind(this,id,commentCallBack)}
			profileImage={profileImage}
			comments={postComments} />
	</div>);
}

SocialCard.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	profileText: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	postImage: PropTypes.string.isRequired,
	like: PropTypes.bool,
	likes: PropTypes.number,
	shares: PropTypes.number,
	profileImage: PropTypes.string.isRequired,
	postComments: PropTypes.arrayOf(PropTypes.shape({
		profileImage: PropTypes.string.isRequired,
		profileName: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	})),
	likeCallBack: PropTypes.func.isRequired,
	shareCallBack: PropTypes.func.isRequired,
	commentCallBack: PropTypes.func.isRequired
};

export default SocialCard;