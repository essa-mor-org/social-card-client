import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SocialCardComments from '../../components/social-card/comments/SocialCardComments';
import { makeGetPostCommentsSelector } from '../../selectors/Comments';
import { commentOnPost } from '../../actions/Posts';

export class SocialCardCommentsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.onComment = this.onComment.bind(this);
    }

    onComment(comment) {
        const { id, commentOnPost, profileName, profileImage } = this.props;
        commentOnPost({ postId: id, profileName, profileImage, comment });
    }

    render() {
        const { postComments, profileImage } = this.props;
        return <SocialCardComments
            onComment={this.onComment}
            profileImage={profileImage}
            comments={postComments} />;
    }
}

const makeMapStateToProps = () => {
    const getPostCommentsSelector = makeGetPostCommentsSelector();
    const mapStateToProps = (state, ownProps) => (
        {
            postComments: getPostCommentsSelector(state, ownProps),
            profileName: state.getIn(['entities', 'posts', 'byId', ownProps.id.toString(), 'profileName']),
            profileImage: state.getIn(['entities', 'posts', 'byId', ownProps.id.toString(), 'profileImage'])
        }
    );
    return mapStateToProps
};



export default connect(makeMapStateToProps, { commentOnPost })(SocialCardCommentsContainer);