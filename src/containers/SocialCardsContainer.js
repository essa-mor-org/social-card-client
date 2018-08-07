import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/Posts';
import { getPostsSelector } from '../selectors/Posts';
import SocialCardContainer from './SocialCardContainer';

export class SocialCardsContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts } = this.props;
		const postItems = posts.valueSeq().map(post => (<SocialCardContainer
			key={post.get('id')}
			id={post.get('id')}
			image={post.get('image')}
			profileText={post.get('profileText')}
			time={post.get('time')}
			text={post.get('text')}
			postImage={post.get('postImage')}
			like={post.get('like')}
			likes={post.get('likes')}
			shares={post.get('shares')}
			profileImage={post.get('profileImage')}
			profileName={post.get('profileName')} />));
		return (<div>{postItems}</div>);
	}
}

const mapStateToProps = (state) => ({
	posts: getPostsSelector(state)
});

export default connect(mapStateToProps, { fetchPosts })(SocialCardsContainer);