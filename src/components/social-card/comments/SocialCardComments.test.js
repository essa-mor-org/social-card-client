import React from 'react';
import SocialCardComments from './SocialCardComments';
import renderer from 'react-test-renderer';

describe('SocialCardComments test', () => {
	it('renders correctly - no comments', () => {
		const tree = renderer
			.create(<SocialCardComments
				profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - with comments', () => {
		const tree = renderer
			.create(<SocialCardComments
				profileImage="https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg"
				comments={[{
					id:1,
					profileImage: 'https://scontent.ftlv4-1.fna.fbcdn.net/v/t1.0-1/p80x80/n.jpg',
					profileName: 'Vevo',
					comment: 'Hi'
				}]} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
