import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect';
import { fromJS } from 'immutable';

const getPostCommentsIds = (state, { id }) => state.getIn(['entities', 'posts', 'byId', new String(id), 'postComments'], fromJS([]));

const getComments = (state) => state.getIn(['entities', 'postComments', 'byId'], fromJS({}));

const getPostCommentsSelector = createSelector(
    [getPostCommentsIds, getComments],
    (postCommentsIds, comments) => comments.filter(comment => postCommentsIds.includes(comment.get('id')))
);

const postCommentsEqualityCheck = (previousVal, currentVal) => {
    return currentVal.equals(previousVal);
}

const postCommentsSelectorCreator = createSelectorCreator(defaultMemoize, postCommentsEqualityCheck);

const makeGetPostCommentsSelector = () => {
    return postCommentsSelectorCreator(
        [getPostCommentsSelector],
        (comments) => comments.valueSeq()
            .map(comment => ({
                profileImage: comment.get('profileImage'),
                profileName: comment.get('profileName'),
                comment: comment.get('comment'),
                id: comment.get('id')
            })).toJS()
    );
}

export { makeGetPostCommentsSelector };