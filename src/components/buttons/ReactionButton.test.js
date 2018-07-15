import React from 'react';
import ReactionButton from './ReactionButton';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ReactionButton test', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<ReactionButton text="Like" className="like_class"/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - click callback', () => {
		const callBack = jest.fn();
		const wrapper  = shallow(<ReactionButton text="Like" onClick={callBack} />);
		wrapper.simulate('click');
		expect(callBack).toHaveBeenCalledTimes(1);
	  });
});
