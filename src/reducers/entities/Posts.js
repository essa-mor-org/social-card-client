import { fromJS } from 'immutable';
import empty from 'is-empty';

import { POSTS_LIKE_SUCCESS, POSTS_SHARE_SUCCESS } from '../../actions/Posts';

const INITIAL_STATE = fromJS({ byId: {} });

function likePost(state, action) {
	const { id, like, likes } = action.payload;
	return state.updateIn(['byId', id.toString(), 'likes'], _likes => likes)
		.updateIn(['byId', id.toString(), 'like'], _like => like);
}

function sharePost(state, action) {
	const { id, shares } = action.payload;
	return state.updateIn(['byId', id.toString(), 'shares'], _shares => shares);
}

function mergePosts(state, action) {
	const p = fromJS(action);
	const posts = p.getIn(['payload', 'entities', 'posts'], {});
	if (!empty(posts)) {
		return state.set('byId', posts);
	}
	return state;
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case POSTS_LIKE_SUCCESS:
			return likePost(state, action);
		case POSTS_SHARE_SUCCESS:
			return sharePost(state, action);
		default:
			return mergePosts(state, action);
	}
}