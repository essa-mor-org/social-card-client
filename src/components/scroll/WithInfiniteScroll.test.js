import React, { Component } from 'react';
import withInfiniteScroll from './WithInfiniteScroll';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

class MockListComponent extends Component {
    render() {
        return (<div>Fake List</div>);
    }
}

let InfiniteScrollComponent = withInfiniteScroll(MockListComponent, { fetchMethodName: 'fetch' });

describe('withInfiniteScroll test', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<InfiniteScrollComponent hasMore={false} fetch={jest.fn()} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
