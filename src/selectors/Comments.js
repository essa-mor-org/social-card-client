import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const getPostCommentsIds = (state, { id }) => state.getIn(['entities', 'posts', 'byId', new String(id), 'postComments'], fromJS([]));

const getComments = (state) => state.getIn(['entities', 'postComments', 'byId'], fromJS({}));

const makeGetPostCommentsSelector = () => {
    return createSelector(
        [getPostCommentsIds, getComments],
        (postCommentsIds, comments) => {
            return comments
                .filter(comment => postCommentsIds.includes(comment.get('id')))
                .valueSeq()
                .map(comment => ({
                    profileImage: comment.get('profileImage'),
                    profileName: comment.get('profileName'),
                    comment: comment.get('comment'),
                    id: comment.get('id')
                }))
                .toJS();
        }
    );
}

export { makeGetPostCommentsSelector };