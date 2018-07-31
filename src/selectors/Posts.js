import { fromJS } from 'immutable';
const postsSelector = state => state.getIn(['entities', 'posts', 'byId'], fromJS({}));

export { postsSelector };