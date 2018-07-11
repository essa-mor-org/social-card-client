import React from 'react';
import SocialCardHeader from './SocialCardHeader';
import renderer from 'react-test-renderer';

describe('SocialCardHeader test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialCardHeader
				image="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg"
				profileText="Vevo"
				time="3 hrs" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});	
});
