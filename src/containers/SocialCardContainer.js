import React from 'react';
import { connect } from 'react-redux';

import SocialCard from '../components/social-card/SocialCard';

export function SocialCardContainer({ id, image, profileText, time, text, postImage, likes, comments, shares, profileImage, postComments }) {
    return (<SocialCard
        id={id}
        image={image}
        profileText={profileText}
        time={time}
        text={text}
        postImage={postImage}
        likes={likes}
        comments={comments}
        shares={shares}
        profileImage={profileImage} />);
}

const mapStateToProps = (state) => ({ postComments: state });

export default connect(mapStateToProps)(SocialCardContainer);