import { fromJS } from 'immutable';

const getPostsIds = state => state.getIn(['entities', 'posts', 'allIds'], fromJS([]));

const getPost = (state, { id }) => state.getIn(['entities', 'posts', 'byId', id.toString()], fromJS({}));

export { getPostsIds, getPost };