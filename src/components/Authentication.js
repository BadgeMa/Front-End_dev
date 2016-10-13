import React, { Component, PropTypes } from 'react';

const propTypes = {
	mode: React.PropTypes.bool,
	onLogin: React.PropTypes.func,
	onRegister: React.PropTypes.func
};

const defaultProps = {
	mode: true,
	onLogin: (id, pw) => { console.error("login function not defined")},
	onRegister: (id, pw) => { console.error("register function not defined")}
};

class Authentication extends React.Component {

	constructor(props) {
        super(props);
		this. state = {
			username: "",
			password: ""
		}
		this.handleModal = this.handleModal.bind(this);
	}

	handleModal() {
		$(document).ready(function(){
    		// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    		$('.modal-trigger').leanModal();
  		});
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

        return(
			<div className="row center">
				<button data-target="login"
					className="waves-effect waves-light btn modal-trigger"
					onClick={this.handleModal}>
					Login
				</button>
				<div id="login" className="modal">
					<div className="modal-content">
						<h4>Welcom to Badge-Ma</h4>
						<p>뱃지마는 여러분의 소중한 제보를 기다립니당</p>
						{inputBoxes}
					</div>
					<div className="modal-footer">
						<a href="#!" className=" modal-action modal-close waves-effect waves-green btn">Login</a>
					</div>
				</div>
			</div>
        );
    }
}


Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;

export default Authentication;
