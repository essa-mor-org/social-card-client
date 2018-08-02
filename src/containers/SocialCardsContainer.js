import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/Posts';
import { postsSelector } from '../selectors/Posts';
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
			likes={post.get('likes')}
			shares={post.get('shares')}
			profileImage={post.get('profileImage')} />));
		return (<div>{postItems}</div>);
	}
}

const mapStateToProps = (state) => ({
	posts: postsSelector(state)
});

export default connect(mapStateToProps, { fetchPosts })(SocialCardsContainer);