import React from 'react';
import renderer from 'react-test-renderer';

import { SocialCardReactionPanelContainer } from './SocialCardReactionPanelContainer';
import { fromJS } from '../../../node_modules/immutable';

describe('SocialCardReactionPanelContainer test', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SocialCardReactionPanelContainer
                id={1}
                like={true}
                likes={10}
                shares={11}
                postComments={fromJS([])}
                likePost={jest.fn()}
                sharePost={jest.fn()} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
