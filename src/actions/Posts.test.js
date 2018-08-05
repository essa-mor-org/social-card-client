import { RSAA } from 'redux-api-middleware';
import { fetchPosts, likePost, sharePost } from './Posts';
import {
	POSTS_GET_REQUEST,
	POSTS_GET_SUCCESS,
	POSTS_GET_FAILURE,
	endpoint,
	POSTS_LIKE_REQUEST,
	POSTS_LIKE_SUCCESS,
	POSTS_LIKE_FAILURE,
	POSTS_SHARE_REQUEST,
	POSTS_SHARE_SUCCESS,
	POSTS_SHARE_FAILURE
} from './Posts';

const getOutput = () => ({
	[RSAA]: {
		types: [POSTS_GET_REQUEST, {
			payload: () => { },
			type: POSTS_GET_SUCCESS,
		}, POSTS_GET_FAILURE],
		endpoint: endpoint,
		method: 'GET'
	}
});

const patchOutput = (types, endpoint, body) => ({
	[RSAA]: {
		types,
		endpoint,
		body: JSON.stringify(body),
		method: 'PATCH',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
		}
	}
});

describe('Posts actions', () => {
	it('should create an action to fetch posts', () => {
		const expectedAction = getOutput();
		expect(JSON.stringify(fetchPosts())).toEqual(JSON.stringify(expectedAction));
	});

	it('should create an action to like posts', () => {
		const expectedAction = patchOutput([POSTS_LIKE_REQUEST, POSTS_LIKE_SUCCESS, POSTS_LIKE_FAILURE], `${endpoint}/1`,
			{ likes: 2, id: 1, like: true });
		expect(likePost({ id: 1, likes: 1, like: false })).toEqual(expectedAction);
	});

	it('should create an action to dislike posts', () => {
		const expectedAction = patchOutput([POSTS_LIKE_REQUEST, POSTS_LIKE_SUCCESS, POSTS_LIKE_FAILURE], `${endpoint}/1`,
			{ likes: 0, id: 1, like: false });
		expect(likePost({ id: 1, likes: 1, like: true })).toEqual(expectedAction);
	});

	it('should create an action to share posts', () => {
		const expectedAction = patchOutput([POSTS_SHARE_REQUEST, POSTS_SHARE_SUCCESS, POSTS_SHARE_FAILURE], `${endpoint}/1`,
			{ shares: 2, id: 1 });
		expect(sharePost({ id: 1, shares: 1 })).toEqual(expectedAction);
	});
});