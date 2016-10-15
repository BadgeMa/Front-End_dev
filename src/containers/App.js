import React from 'react';

import { Intro, Home } from '../containers'
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';


class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Match exactly pattern='/' component={Intro}/>
					<Match pattern='/home' component={Home}/>
				</div>
			</Router>
		);
	}
}

export default App;
