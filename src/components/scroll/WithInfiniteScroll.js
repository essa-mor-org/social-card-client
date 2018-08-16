import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

function withInfiniteScroll(List, { fetchMethodName, hasMoreName = 'hasMore' }) {
    return function (props) {
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={props[fetchMethodName]}
                hasMore={props[hasMoreName]}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <List {...props} />
            </InfiniteScroll>
        );
    }
}

export default withInfiniteScroll;