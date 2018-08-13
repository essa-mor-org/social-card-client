import React from 'react';
import { connect } from 'react-redux';

import SocialCard from '../components/social-card/SocialCard';
import { getPost } from '../selectors/Posts';

export function SocialCardContainer({ id, image, profileText, time, text, postImage }) {
    return (<SocialCard
        id={id}
        image={image}
        profileText={profileText}
        time={time}
        text={text}
        postImage={postImage} />);
}

const mapStateToProps = (state, ownProps) => {
    const post = getPost(state, ownProps);
    return {
        image: post.get('image'),
        profileText: post.get('profileText'),
        time: post.get('time'),
        text: post.get('text'),
        postImage: post.get('postImage')
    };
};



export default connect(mapStateToProps)(SocialCardContainer);