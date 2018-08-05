import React from 'react';
import { connect } from 'react-redux';

import SocialCard from '../components/social-card/SocialCard';
import { makeGetPostCommentsSelector } from '../selectors/Comments';
import { likePost, sharePost } from '../actions/Posts';

export function SocialCardContainer({ id, image, profileText, time, text, postImage, like, likes, shares, profileImage, postComments, likePost, sharePost }) {
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
        profileImage={profileImage}
        postComments={postComments} 
        likeCallBack={likePost}
        shareCallBack={sharePost}/>);
}

const makeMapStateToProps = () => {
    const getPostCommentsSelector = makeGetPostCommentsSelector();
    const mapStateToProps = (state, ownProps) => (
        { postComments: getPostCommentsSelector(state, ownProps) }
    );
    return mapStateToProps
};



export default connect(makeMapStateToProps, { likePost, sharePost })(SocialCardContainer);