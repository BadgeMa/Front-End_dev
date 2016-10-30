import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class Authentication extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(
			<div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
				<form method="#" action="#">
					<div className="card" data-background="color" data-color="blue">
						<div className="header">
							<h3 className="title">Login</h3>
						</div>
						<div className="content">
							<div className="form-group">
								<label>Email address</label>
								<input type="email" placeholder="Enter email" className="form-control input-no-border"/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="password" placeholder="Password" className="form-control input-no-border"/>
							</div>
						</div>
						<div className="footer text-center">
							<button type="submit" className="btn btn-fill btn-wd ">Let's go</button>
							<div className="forgot">
								<a href="#pablo">Register new account!</a>
							</div>
						</div>
					</div>
				</form>
			</div>
        );
    }
}


Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;

export default Authentication;
