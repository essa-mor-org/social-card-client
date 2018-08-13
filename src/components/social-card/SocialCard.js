import React from 'react';
import PropTypes from 'prop-types';

import SocialCardHeader from './SocialCardHeader';
import SocialCardPost from './SocialCardPost';
import SocialCardReactionPanelContainer from '../../containers/reactions/SocialCardReactionPanelContainer';
import SocialCardCommentsContainer from '../../containers/comments/SocialCardCommentsContainer';

import './SocialCard.css';

function SocialCard({ id, image, profileText, time, text, postImage }) {
	return (<div className="Social_card">
		<SocialCardHeader
			image={image}
			profileText={profileText}
			time={time} />
		<SocialCardPost
			text={text}
			image={postImage}
		/>
		<SocialCardReactionPanelContainer id={id} />
		<SocialCardCommentsContainer id={id} />
	</div>);
}

SocialCard.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	profileText: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	postImage: PropTypes.string.isRequired
};

export default SocialCard;