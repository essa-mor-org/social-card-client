import React from 'react';
import PropTypes from 'prop-types';

import ReactionButton from '../buttons/ReactionButton';

import './SocialCardReact.css';

function SocialCardReact({onLike, onComment, onShare}){
	return (<div className="Social_react">
		<ReactionButton text="Like" className="Reaction_like" onClick={onLike} />
		<ReactionButton text="Comment" className="Reaction_comment" onClick={onComment}/>
		<ReactionButton text="Share" className="Reaction_share" onClick={onShare}/>
	</div>);
}

SocialCardReact.propTypes = {
	onLike: PropTypes.func.isRequired,
	onComment: PropTypes.func.isRequired,
	onShare: PropTypes.func.isRequired
};

export default SocialCardReact;