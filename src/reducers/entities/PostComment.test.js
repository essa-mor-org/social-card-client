import reducer from './PostComment';
import { fromJS } from 'immutable';

import { POSTS_COMMENT_SUCCESS } from '../../actions/Posts';

describe('PostComment reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}).toJS()).toEqual({});
    });

    it('comment action update reducer', () => {
        const initialState = {
            entities: {
                posts: { byId: { '2': { postComments: [] } } },
                postComments: { byId: {} }
            }
        };
        const action = {
            type: POSTS_COMMENT_SUCCESS, payload: {
                id: 1, postId: 2, profileImage: 'profileImage',
                profileName: 'profileName', comment: 'comment'
            }
        };
        const expectedResult = {
            "entities": {
                "postComments": {
                    "byId": {
                        "1": {
                            "comment": "comment",
                            "id": 1,
                            "postId": 2,
                            "profileImage": "profileImage",
                            "profileName": "profileName",
                        },
                    },
                },
                "posts": {
                    "byId": {
                        "2": {
                            "postComments": [
                                1
                            ],
                        },
                    },
                }
            }
        };
        expect(reducer(fromJS(initialState), action).toJS()).toEqual(expectedResult);
    });
});