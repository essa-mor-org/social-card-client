import React from 'react';
import SocialCardReactionPanel from './SocialCardReactionPanel';
import renderer from 'react-test-renderer';

describe('SocialCardReactionPanel test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardReactionPanel
                postComments={[]}
				id={1}
				like={true}
				likeCallBack={jest.fn()}
				shareCallBack={jest.fn()}
				likes={157}
				comments= {2}
				shares= {3} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
