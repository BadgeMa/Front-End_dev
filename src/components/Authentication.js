import React, { Component, PropTypes } from 'react';

const propTypes = {
	mode: React.PropTypes.bool,
	onLogin: React.PropTypes.func,
	onRegister: React.PropTypes.func
};

const defaultProps = {
	mode: true,
	onLogin: (id, pw) => { console.error("onLogin not defined"); },
    onRegister: (id, pw) => { console.error("onRegister not defined"); }
};

class Authentication extends React.Component {

	constructor(props) {
        super(props);
		this.state = {
			username: "",
			password: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);

	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleLogin() {
		// let id = this.state.username;
		// let pw = this.state.password;
		let id = 'admin';
		let pw = '1234';

		this.props.onLogin(id, pw).then(
			(success) => {
				if(!success) {
                    this.setState({
                        password: ''
                    });
                }
			}
		);
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
								<label>Username</label>
								<input id="username"
									type="text"
									placeholder="Username"
									required="true"
									className="form-control input-no-border"
									value={this.state.username}
									onChange={this.handleChange}/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input id="username"
									type="password"
									placeholder="Password"
									className="form-control input-no-border"
									value={this.state.password}
									onChange={this.handleChange}/>
							</div>
						</div>
						<div className="footer text-center">
							<button type="submit"
								className="btn btn-fill btn-wd "
								onClick={this.handleLogin}>
								Let's go
							</button>
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
