import { combineReducers } from 'redux';
import PostsReducer from './Posts';

export default combineReducers({ posts: PostsReducer });