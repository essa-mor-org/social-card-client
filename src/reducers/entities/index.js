import { combineReducers } from 'redux-immutable';

import posts from './Posts';
import postComments from './Comments';

export default combineReducers({
	entities: combineReducers({ posts, postComments })
});
