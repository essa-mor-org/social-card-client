import { normalize } from 'normalizr';
import { getJSON } from 'redux-api-middleware';

import { responseSchema } from '../schemas';
import { getApi, patchApi , postApi} from './Api';

export const endpoint = 'http://localhost:3004';
export const POSTS_GET_REQUEST = 'posts/POSTS_GET_REQUEST';
export const POSTS_GET_SUCCESS = 'posts/POSTS_GET_SUCCESS';
export const POSTS_GET_FAILURE = 'posts/POSTS_GET_FAILURE';

export const POSTS_LIKE_REQUEST = 'posts/POSTS_LIKE_REQUEST';
export const POSTS_LIKE_SUCCESS = 'posts/POSTS_LIKE_SUCCESS';
export const POSTS_LIKE_FAILURE = 'posts/POSTS_LIKE_FAILURE';

export const POSTS_SHARE_REQUEST = 'posts/POSTS_SHARE_REQUEST';
export const POSTS_SHARE_SUCCESS = 'posts/POSTS_SHARE_SUCCESS';
export const POSTS_SHARE_FAILURE = 'posts/POSTS_SHARE_FAILURE';

export const POSTS_COMMENT_REQUEST = 'posts/POSTS_COMMENT_REQUEST';
export const POSTS_COMMENT_SUCCESS = 'posts/POSTS_COMMENT_SUCCESS';
export const POSTS_COMMENT_FAILURE = 'posts/POSTS_COMMENT_FAILURE';

export const fetchPosts = (page) => {
	return getApi(
		[POSTS_GET_REQUEST, {
			type: POSTS_GET_SUCCESS,
			payload: (action, state, res) => {
				const totalCount = res.headers.get('X-Total-Count');
				return getJSON(res).then((json) => normalize({posts: json, totalCount}, responseSchema));
			}
		}, POSTS_GET_FAILURE]
		, `${endpoint}/posts?_embed=postComments&_page=${page}&_limit=2`);
};

export const likePost = ({ id, likes, like }) => {
	const likesResult = like ? --likes : ++likes;
	return patchApi(
		[POSTS_LIKE_REQUEST, POSTS_LIKE_SUCCESS, POSTS_LIKE_FAILURE]
		, `${endpoint}/posts/${id}`,
		JSON.stringify({ likes: likesResult, id, like: !like }));
};

export const sharePost = ({ id, shares }) => {
	return patchApi(
		[POSTS_SHARE_REQUEST, POSTS_SHARE_SUCCESS, POSTS_SHARE_FAILURE]
		, `${endpoint}/posts/${id}`,
		JSON.stringify({ shares: ++shares, id }));
};

export const commentOnPost = ({postId, profileName, profileImage, comment}) => {
	return postApi(
		[POSTS_COMMENT_REQUEST, POSTS_COMMENT_SUCCESS, POSTS_COMMENT_FAILURE]
		, `${endpoint}/postComments`,
		JSON.stringify({postId, profileImage, profileName, comment}));
};