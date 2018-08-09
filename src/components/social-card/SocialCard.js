import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactions from './SocialCardReactions';
import SocialCardReact from './SocialCardReact';
import SocialCardCommentsContainer from '../../containers/comments/SocialCardCommentsContainer';

import './SocialCard.css';

class SocialCard extends PureComponent {
	render() {
		const { id, image, profileText, time, text, postImage, like, likes, shares, profileImage, profileName,
			postComments, likeCallBack, shareCallBack } = this.props;
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
		<SocialCardCommentsContainer id={id} />
	</div>);
}
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
	profileName: PropTypes.string.isRequired,
	// postComments: PropTypes.arrayOf(PropTypes.number).isRequired,
	likeCallBack: PropTypes.func.isRequired,
	shareCallBack: PropTypes.func.isRequired
};

export default SocialCard;