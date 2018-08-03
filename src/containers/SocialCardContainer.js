import React from 'react';
import { connect } from 'react-redux';

import SocialCard from '../components/social-card/SocialCard';
import { makeGetPostCommentsSelector } from '../selectors/Comments';
import { likePost } from '../actions/Posts';

export function SocialCardContainer({ id, image, profileText, time, text, postImage, like, likes, shares, profileImage, postComments, likePost }) {
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
        likeCallBack={likePost}/>);
}

const makeMapStateToProps = () => {
    const getPostCommentsSelector = makeGetPostCommentsSelector();
    const mapStateToProps = (state, ownProps) => (
        { postComments: getPostCommentsSelector(state, ownProps) }
    );
    return mapStateToProps
};



export default connect(makeMapStateToProps, { likePost })(SocialCardContainer);