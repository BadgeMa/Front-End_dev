import React from 'react';

import { Intro, Home } from '../containers'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import { Header, Footer } from '../components';


class App extends React.Component {

	render() {
		console.log(this.props.status.isLoggedIn);
		return (
			<Router>
				<div>
					<Header/>
					<Match exactly pattern='/' component={Intro}/>
					<Match pattern='/home' component={Home}/>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		status: state.authentication.status
	};
};

export default connect(mapStateToProps)(App);
