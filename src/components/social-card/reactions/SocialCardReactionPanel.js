import React from 'react';
import PropTypes from 'prop-types';

import SocialCardReactions from './SocialCardReactions';
import SocialCardReact from './SocialCardReact';

function SocialCardReactionPanel({ id, like, likes, shares, postComments, likeCallBack, shareCallBack }) {
    return (<React.Fragment>
        <SocialCardReactions
            likes={likes}
            comments={postComments.length}
            shares={shares}
        />
        <SocialCardReact id={id} like={like} likes={likes} shares={shares} onLike={likeCallBack} onShare={shareCallBack} />
    </React.Fragment>);
}

SocialCardReactionPanel.propTypes = {
    id: PropTypes.number.isRequired,
    like: PropTypes.bool,
    likes: PropTypes.number,
    shares: PropTypes.number,
    postComments: PropTypes.arrayOf(PropTypes.number).isRequired,
    likeCallBack: PropTypes.func.isRequired,
    shareCallBack: PropTypes.func.isRequired
};


export default SocialCardReactionPanel;