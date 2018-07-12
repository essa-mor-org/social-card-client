import React from 'react';

import ReactionButton from '../buttons/ReactionButton';

import './SocialCardReact.css';

function SocialCardReact(){
	return (<div className="Social_react">
		<ReactionButton text="Like" className="Reaction_like" />
		<ReactionButton text="Comment" className="Reaction_comment" />
		<ReactionButton text="Share" className="Reaction_share" />
	</div>);
}

export default SocialCardReact;