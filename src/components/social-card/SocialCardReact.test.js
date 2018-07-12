import React from 'react';
import SocialCardReact from './SocialCardReact';
import renderer from 'react-test-renderer';

describe('SocialCardReact test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardReact />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
