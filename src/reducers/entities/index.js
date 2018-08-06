import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import reduceReducers from "reduce-reducers";

import posts from './Posts';
import postComments from './Comments';
import PostComment from './PostComment';

const entities = combineReducers({
	entities: combineReducers({ posts, postComments })
});

export default reduceReducers(
	entities, PostComment
);
