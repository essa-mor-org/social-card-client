import { fromJS } from 'immutable';

const getPostsIds = state => state.getIn(['entities', 'posts', 'allIds'], fromJS([]));

const getPost = (state, { id }) => state.getIn(['entities', 'posts', 'byId', id.toString()], fromJS({}));

const getTotalCount = state => state.getIn(['entities', 'posts', 'totalCount']);

export { getPostsIds, getPost, getTotalCount };