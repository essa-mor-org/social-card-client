import React from 'react';
import { connect } from 'react-redux';

import { likePost, sharePost } from '../../actions/Posts';
import SocialCardReactionPanel from '../../components/social-card/reactions/SocialCardReactionPanel';
import { getPost } from '../../selectors/Posts';

export function SocialCardReactionPanelContainer({ id, like, likes, shares, postComments, likePost, sharePost }) {
    return <SocialCardReactionPanel
        id={id}
        like={like}
        likes={likes}
        shares={shares}
        postComments={postComments.toArray()}
        likeCallBack={likePost}
        shareCallBack={sharePost}
    />;
}

const mapStateToProps = (state, ownProps) => {
    const post = getPost(state, ownProps);
    return {
        like: post.get('like'),
        likes: post.get('likes'),
        shares: post.get('shares'),
        postComments: post.get('postComments')
    };
};

export default connect(mapStateToProps, { likePost, sharePost })(SocialCardReactionPanelContainer);
