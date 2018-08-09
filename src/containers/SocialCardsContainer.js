import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/Posts';
import { getPostsIds } from '../selectors/Posts';
import SocialCardContainer from './SocialCardContainer';

export class SocialCardsContainer extends PureComponent {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { postsIds } = this.props;
		const postItems = postsIds.map(id => (<SocialCardContainer
			key={id}
			id={id} />));
		return (<div>{postItems}</div>);
	}
}

const mapStateToProps = (state) => ({
	postsIds: getPostsIds(state)
});

export default connect(mapStateToProps, { fetchPosts })(SocialCardsContainer);