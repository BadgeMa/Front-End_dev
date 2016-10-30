import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class Dashboard extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(

			<div className="content">
				<div className="container-fluid">
					<div className="row">

						<div>Dashboard</div>

					</div>
				</div>
			</div>

        );
    }
}


Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
