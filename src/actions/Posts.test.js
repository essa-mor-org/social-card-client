import { RSAA } from 'redux-api-middleware';
import { fetchPosts, likePost } from './Posts';
import {
	POSTS_GET_REQUEST,
	POSTS_GET_SUCCESS,
	POSTS_GET_FAILURE,
	endpoint,
	POSTS_LIKE_REQUEST,
	POSTS_LIKE_SUCCESS,
	POSTS_LIKE_FAILURE
} from './Posts';

describe('Posts actions', () => {
	it('should create an action to fetch posts', () => {
		const expectedAction = {
			[RSAA]: {
				types: [POSTS_GET_REQUEST, {
					payload: () => { },
					type: POSTS_GET_SUCCESS,
				}, POSTS_GET_FAILURE],
				endpoint: endpoint,
				method: 'GET'
			}
		};
		expect(JSON.stringify(fetchPosts())).toEqual(JSON.stringify(expectedAction));
	});

	it('should create an action to like posts', () => {
		const expectedAction = {
			[RSAA]: {
				types: [POSTS_LIKE_REQUEST,
					POSTS_LIKE_SUCCESS,
					POSTS_LIKE_FAILURE],
				endpoint: `${endpoint}/1`,
				body: JSON.stringify({ likes: 2, id: 1, like: true}),
				method: 'PATCH',
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				}
			}
		};
		expect(likePost({ id: 1, likes: 1, like: false })).toEqual(expectedAction);
	});

	it('should create an action to dislike posts', () => {
		const expectedAction = {
			[RSAA]: {
				types: [POSTS_LIKE_REQUEST,
					POSTS_LIKE_SUCCESS,
					POSTS_LIKE_FAILURE],
				endpoint: `${endpoint}/1`,
				body: JSON.stringify({ likes: 0, id: 1, like: false}),
				method: 'PATCH',
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				}
			}
		};
		expect(likePost({ id: 1, likes: 1, like: true })).toEqual(expectedAction);
	});
});