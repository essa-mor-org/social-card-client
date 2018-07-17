import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers/index';

const configureStore = preloadedState => {
	const middlewares = [apiMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const enhancers = [middlewareEnhancer];
	const composedEnhancers = compose(...enhancers);
	const store = createStore(
		rootReducer,
		preloadedState,
		composedEnhancers
	);

	return store;
};

export default configureStore;