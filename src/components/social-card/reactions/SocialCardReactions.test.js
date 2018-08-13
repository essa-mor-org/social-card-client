import React from 'react';
import SocialCardReactions from './SocialCardReactions';
import renderer from 'react-test-renderer';

describe('SocialCardReactions test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardReactions
				likes={157}
				comments= {2}
				shares= {3} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - no likes', () => {
		const tree = renderer
			.create(<SocialCardReactions
				likes={0}
				comments= {2}
				shares= {3} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - no comments', () => {
		const tree = renderer
			.create(<SocialCardReactions
				likes={157}
				comments= {0}
				shares= {3} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - no shares', () => {
		const tree = renderer
			.create(<SocialCardReactions
				likes={157}
				comments= {2}
				shares= {0} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - empty', () => {
		const tree = renderer
			.create(<SocialCardReactions/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
