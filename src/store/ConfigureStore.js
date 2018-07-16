import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers/index';

const configureStore = preloadedState => {
	const store = createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleware(apiMiddleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;