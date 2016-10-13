import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class Test extends React.Component {

	constructor(props) {
        super(props);

	}



	render() {
        return(
			<div>Hello</div>
        );
    }
}


Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
