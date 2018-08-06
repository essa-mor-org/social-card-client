import { fromJS } from 'immutable';

import { POSTS_COMMENT_SUCCESS } from '../../actions/Posts';

const INITIAL_STATE = fromJS({});

function addComment(state, action) {
    const { payload } = action;
    const { id, postId, profileImage, profileName, comment } = payload;
    const commentMap = fromJS({ id, postId, profileImage, profileName, comment });

    let newState = state.updateIn(['entities', 'posts', 'byId', postId.toString(), 'postComments'],
        postComments => postComments.push(id));

    return newState.updateIn(['entities', 'postComments', 'byId'],postComments => postComments.set(id.toString(), commentMap));
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case POSTS_COMMENT_SUCCESS:
            return addComment(state, action);
        default:
            return state;
    }
}