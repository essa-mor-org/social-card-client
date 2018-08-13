import React from 'react';
import PropTypes from 'prop-types';

import './SocialCardReactions.css';

function shouldDisplay({ likes, comments, shares }) {
	return likes > 0 ||
		comments > 0 ||
		shares > 0;
}

function SocialCardReactions({ likes, comments, shares }) {
	return (shouldDisplay({ likes, comments, shares }) && <div className="Social_reaction">
		{likes > 0 && <a href="#" className="Social_reaction_fixed"><span className="Social_reaction_like" /></a>}
		{likes > 0 && <span className="Social_reaction_strech"><a className="Social_reaction_number" href="#">{likes}</a></span>}
		{comments > 0 && <a className="Social_reaction_number Social_reaction_fixed" href="#">{comments} Comments</a>}
		{shares > 0 && <a className="Social_reaction_number Social_reaction_fixed" href="#">{shares} Shares</a>}
	</div>);
}

SocialCardReactions.propTypes = {
	likes: PropTypes.number,
	comments: PropTypes.number,
	shares: PropTypes.number
};

export default SocialCardReactions;