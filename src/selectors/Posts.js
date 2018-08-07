import { createSelectorCreator, defaultMemoize } from 'reselect';
import { fromJS } from 'immutable';

const getPosts = state => state.getIn(['entities', 'posts'], fromJS({}));

const postEqualityCheck = (previousVal, currentVal) => {
    const normlizePrevVal = previousVal.get('byId').map(post => post.delete('postComments'));
    const normlizeCurVal = currentVal.get('byId').map(post => post.delete('postComments'));
    return normlizePrevVal.equals(normlizeCurVal);
}

const postsSelectorCreator = createSelectorCreator(defaultMemoize, postEqualityCheck);
const getPostsSelector = postsSelectorCreator(
    [getPosts],
    (posts) => posts.get('allIds').map(id => posts.get('byId').get(id.toString()))
)
export { getPostsSelector };