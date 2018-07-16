import React, { Component } from 'react';
import { connect } from 'react-redux';

import SocialCard from './components/social-card/SocialCard';
import { fetchPosts } from './actions/Posts';
import './App.css';

export class App extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<SocialCard />
		);
	}
}

export default connect(()=>({}), { fetchPosts })(App);
