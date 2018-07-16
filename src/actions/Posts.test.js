import { RSAA } from 'redux-api-middleware';
import {fetchPosts} from './Posts';
import {POSTS_GET_REQUEST , POSTS_GET_SUCCESS , POSTS_GET_FAILURE ,endpoint} from './Posts';

describe('Posts actions', () => {
	it('should create an action to fetch posts', () => {
	  const expectedAction = {
			[RSAA]: {
				types: [POSTS_GET_REQUEST, POSTS_GET_SUCCESS, POSTS_GET_FAILURE],
				endpoint: endpoint,
				method: 'GET'
			}
	  };
	  expect(fetchPosts()).toEqual(expectedAction);
	});
});