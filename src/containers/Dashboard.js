import React, { Component, PropTypes } from 'react';
import { ShowBox } from '../components'

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
            <div>
				<ShowBox/>
            </div>
        );
    }
}


Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;

export default Dashboard;
