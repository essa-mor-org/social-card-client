import React from 'react';
import { connect } from 'react-redux';

import SocialCard from '../components/social-card/SocialCard';
import { makeGetPostCommentsSelector } from '../selectors/Comments';

export function SocialCardContainer({ id, image, profileText, time, text, postImage, likes, shares, profileImage, postComments }) {
    return (<SocialCard
        id={id}
        image={image}
        profileText={profileText}
        time={time}
        text={text}
        postImage={postImage}
        likes={likes}
        shares={shares}
        profileImage={profileImage}
        postComments={postComments} />);
}

const makeMapStateToProps = () => {
    const getPostCommentsSelector = makeGetPostCommentsSelector();
    const mapStateToProps = (state, ownProps) => (
        { postComments: getPostCommentsSelector(state, ownProps) }
    );
    return mapStateToProps
};



export default connect(makeMapStateToProps)(SocialCardContainer);