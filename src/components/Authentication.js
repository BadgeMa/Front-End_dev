import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';


const propTypes = {
	onLogin: React.PropTypes.func,
	onRegister: React.PropTypes.func
};

const defaultProps = {
	onLogin: (id, pw) => { console.error("login function not defined")},
	onRegister: (id, pw) => { console.error("register function not defined")}
};

class Authentication extends React.Component {

	constructor(props) {
        super(props);
		this.state = {
			mode: true,
			username: "",
			password: ""
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleModal = this.handleModal.bind(this);
		this.handleMode = this.handleMode.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleChange(e) {
		let nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleModal() {
		$(document).ready(function(){
    		// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    		$('.modal-trigger').leanModal();
  		});
	}

	handleMode() {
		// mode handling
		if(this.state.mode) {
			this.setState({mode: false});
		}
		else {
			this.setState({mode: true});
		}
	}

	handleLogin() {
		let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
				else {
					$('#login').closeModal();
				}
            }
        );
    }

	handleRegister() {
		let id = this.state.username;
		let pw = this.state.password;

		this.props.onRegister(id, pw).then(
			(success) => {
				if(!success) {
					this.setState({
						password: ''
					});
				}
				else {
					this.setState({mode: true});

				}
			}
		);
	}




	render() {

		const inputBoxes = (
			<div>
				<div className="input-field col s12 username">
					<label>Username</label>
					<input
					name="username"
					type="text"
					className="validate"
					onChange={this.handleChange}
					value={this.state.usrname}/>
				</div>
				<div className="input-field col s12">
					<label>Password</label>
					<input
					name="password"
					type="password"
					className="validate"
					onChange={this.handleChange}
					value={this.state.password}/>
				</div>
			</div>
		);

		const loginView = (
			<div id="login" className="modal">
				<div className="modal-content">
					<h4>Welcom to Badge-Ma</h4>
					<p>뱃지마는 여러분의 소중한 제보를 기다립니당</p>
					{inputBoxes}
					<button
						className="modal-action waves-effect waves-green btn"
						onClick={this.handleLogin}>
						SUBMIT
					</button>
				</div>
				<div className="modal-footer">
					<div className="right" >
						New Here? <a onClick={this.handleMode}>Create an account</a>
					</div>
				</div>
			</div>
		);

		const registerView = (
			<div id="register" className="modal">
				<div className="modal-content">
					<h4>Badge-Ma</h4>
					<p>아이디를 새로 만드는 페이지</p>
					{inputBoxes}
					<button
						className="modal-action modal-close waves-effect waves-green btn"
						onClick={this.handleRegister}>
						REGISTER
					</button>
				</div>
			</div>
		);


        return(
			<div className="row center">
				<button data-target={this.state.mode ? "login" : "register"}
					className="waves-effect waves-light btn modal-trigger"
					onClick={this.handleModal}>
					Login
				</button>
				<div>{this.state.mode ? loginView : registerView}</div>
			</div>
        );
    }
}


Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;
Authentication.contestTypes = {
	router: propTypes.routerContext
};

export default Authentication;
