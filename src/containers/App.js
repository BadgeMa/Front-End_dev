import React, { Component, PropTypes } from 'react';
import { Header, Authentication, Test } from '../components';
import { loginRequest, registerRequest } from '../actions/authentication'

import { connect } from 'react-redux';


class App extends React.Component {

	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleRegister(id, pw) {
		return this.props.registerRequest(id, pw).then(
			() => {
				if(this.props.registerStatus === "SUCCESS") {
					Materialize.toast('Success! Please login!', 2000);
					return true;
				} else {
					let $toastContent = $('<span style="color: #FFB4BA">' + "error" + '</span>');
 					Materialize.toast($toastContent, 2000);
 					return false;
				}
			}
		);
	}

	handleLogin(id, pw) {
		return this.props.loginRequest(id, pw).then(
			() => {
				if(this.props.loginStatus === "SUCCESS") {
					let loginData = {
						isLoggedIn: true,
						username: id
					};
					Materialize.toast('Welcom ' + id + '!', 2000);
					return true;
				} else {
					let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
					Materialize.toast($toastContent, 2000);
					return false;
				}
			}
		);
	}

	render() {
        return(
            <div>
				<Header/>

				<div id="index-banner" className="parallax-container">
					<div className="section no-pad-bot">
						<div className="container">
							<br></br>
				          	<h1 className="header center teal-text text-lighten-2">학생들의 꿈 뺏지마</h1>
				          	<div className="row center">
				            	<h5 className="header col s12 light">혼자 가지고 있는 어려움들을 함께 나누고 공감하여 더 밝은 세상으로</h5>
				          	</div>
							<Authentication onLogin={this.handleLogin}
								onRegister={this.handleRegister}/>
							<br></br>
						</div>
					</div>
					<div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1"/></div>
				</div>

			</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.authentication.login.status,
		registerStatus: state.authentication.register.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id,pw));
        },
		registerRequest: (id, pw) => {
            return dispatch(registerRequest(id,pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
