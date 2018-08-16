import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/Posts';
import { getPostsIds, getTotalCount } from '../selectors/Posts';
import SocialCardContainer from './SocialCardContainer';
import withInfiniteScroll from '../components/scroll/WithInfiniteScroll';

export class SocialCardsContainer extends PureComponent {
	render() {
		const { postsIds } = this.props;
		const postItems = postsIds.map(id => (<SocialCardContainer
			key={id}
			id={id} />));
		return (<div>{postItems}</div>);
	}
}

const mapStateToProps = (state) => {
	const postsIds = getPostsIds(state);
	const totalCount = getTotalCount(state);
	const hasMore = totalCount == null || postsIds.size < totalCount;
	return { postsIds, hasMore };
};

export default connect(mapStateToProps, { fetchPosts })(withInfiniteScroll(SocialCardsContainer, { fetchMethodName: 'fetchPosts' }));