import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPosts, likePost, sharePost } from '../actions/Posts';
import { getPostsSelector } from '../selectors/Posts';
// import SocialCardContainer from './SocialCardContainer';
import SocialCard from '../components/social-card/SocialCard';

export class SocialCardsContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts, likePost, sharePost } = this.props;
		const postItems = posts.valueSeq().map(post => (<SocialCard
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
			profileName={post.get('profileName')}
			postComments={post.get('postComments').toJS()} 
			likeCallBack={likePost}
        	shareCallBack={sharePost} />));
		return (<div>{postItems}</div>);
	}
}

const mapStateToProps = (state) => ({
	posts: getPostsSelector(state)
});

export default connect(mapStateToProps, { fetchPosts, likePost, sharePost })(SocialCardsContainer);