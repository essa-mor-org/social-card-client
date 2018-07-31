import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/Posts';
import { postsSelector } from '../selectors/Posts';
import SocialCard from '../components/social-card/SocialCard';

export class Feed extends PureComponent {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts } = this.props;
		const postItems = posts.valueSeq().map(post => (<SocialCard
			key={post.get('id')}
			id={post.get('id')}
			image={post.get('image')}
			profileText={post.get('profileText')}
			time={post.get('time')}
			text={post.get('text')}
			postImage={post.get('postImage')}
			likes={post.get('likes')}
			comments={post.get('comments')}
			shares={post.get('shares')}
			profileImage={post.get('profileImage')} />));
		return (<div>{postItems}</div>);
	}
}

const mapStateToProps = (state) => ({
	posts: postsSelector(state)
});

export default connect(mapStateToProps, { fetchPosts })(Feed);