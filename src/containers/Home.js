import React, { Component, PropTypes } from 'react';
import { Header, Footer, Sidebar, Dashboard } from '../components';


const propTypes = {

};

const defaultProps = {

};

class Home extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(
			<div>
				<div className="wrapper">
					<Sidebar/>
					<div className="main-panel">
						<Header/>
						<Dashboard/>
						<Footer/>
					</div>
				</div>
			</div>
        );
    }
}


Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
