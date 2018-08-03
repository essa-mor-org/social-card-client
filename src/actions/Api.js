import { RSAA } from 'redux-api-middleware';

export const getApi = (types, endpoint) => ({
	[RSAA]: { types, endpoint, method: 'GET' }
});

export const patchApi = (types, endpoint, body) => ({
	[RSAA]: {
		types, endpoint, body, method: 'PATCH', headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}
});