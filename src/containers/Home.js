import React, { Component, PropTypes } from 'react';
import { Header, Footer, Sidebar, Dashboard, Memo } from '../components';


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
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div>Home</div>
						<Memo/>
					</div>
				</div>
			</div>
        );
    }
}


Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
