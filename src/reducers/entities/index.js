import { combineReducers } from 'redux';

import posts from './Posts';
import postComments from './Comments';

export default combineReducers({
	entities: combineReducers({ posts, postComments })
});
