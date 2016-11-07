import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Authentication } from '../components';

import { loginRequest } from '../actions/authentication';
import { browserHistory, Link } from 'react-router';

class Login extends React.Component {

    constructor(props) {
        super(props);

		this.handleLogin = this.handleLogin.bind(this);

    }

	handleLogin(id, pw) {
		return this.props.loginRequest(id, pw).then(
			() => {
				if(this.props.status === "SUCCESS") {
					let loginData = {
						isLoggedId: true,
						username: id
					};

					console.log("Login Success!");
					browserHistory.push('/home');


					return true;
				}
				else {
					console.log("Login failure");
					return false;
				}
			}
		)
	}

    render() {
        return (
            <div>
				<nav className="navbar navbar-transparent navbar-absolute">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Badge-Ma</a>
						</div>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<Link to="/register">
										Register
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>

                <div className="wrapper wrapper-full-page">
                    <div className="full-page login-page" data-color="" data-image="../../assets/img/background/background-2.jpg">

                        <div className="content">
                            <div className="container">
                                <div className="row">
									<Authentication mode={true}
										onLogin={this.handleLogin}/>
                                </div>
                            </div>
                        </div>

                        <footer className="footer footer-transparent">
                            <div className="container">
                                <div className="copyright">
                                    2016 made with
                                    <i className="fa fa-heart heart"></i>
                                    <a> by Badge-Ma</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id,pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
