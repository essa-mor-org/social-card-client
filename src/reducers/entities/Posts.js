import { fromJS } from 'immutable';
import empty from 'is-empty';

import { POSTS_LIKE_SUCCESS } from '../../actions/Posts';

const INITIAL_STATE = fromJS({ byId: {} });

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case POSTS_LIKE_SUCCESS:
			const { id, like, likes } = action.payload;
			return state.updateIn(['byId', id.toString(), 'likes'], _likes => likes )
				.updateIn(['byId', id.toString(), 'like'], _like => like );
		default: {
			const p = fromJS(action);
			const posts = p.getIn(['payload', 'entities', 'posts'], {});
			if (!empty(posts)) {
				return state.set('byId', posts);
			}
			return state;
		}
	}
}