import { RSAA } from 'redux-api-middleware';

export const getApi = (types, endpoint) => ({
	[RSAA]: { types, endpoint, method: 'GET' }
});