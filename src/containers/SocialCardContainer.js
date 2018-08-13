import React from 'react';
import { connect } from 'react-redux';

import SocialCard from '../components/social-card/SocialCard';
import { getPost } from '../selectors/Posts';
import { likePost, sharePost, commentOnPost } from '../actions/Posts';

export function SocialCardContainer({ post, likePost, sharePost, commentOnPost }) {
    const { id, image, profileText, time, text, postImage, like, likes, shares, postComments } = post.toJS();

    return (<SocialCard
        id={id}
        image={image}
        profileText={profileText}
        time={time}
        text={text}
        postImage={postImage}
        like={like}
        likes={likes}
        shares={shares}
        postComments={postComments}
        likeCallBack={likePost}
        shareCallBack={sharePost}
        commentCallBack={commentOnPost} />);
}

const mapStateToProps = (state, ownProps) => (
    { post: getPost(state, ownProps) }
);



export default connect(mapStateToProps, { likePost, sharePost, commentOnPost })(SocialCardContainer);