import React, { Component, PropTypes } from 'react';

import { Authentication } from '../components';
import { loginRequest, registerRequest } from '../actions/authentication'

import { connect } from 'react-redux';



class IntroCover extends React.Component {

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

			<div className="container">
			  <div className="section">

				<div className="row">
				  <div className="col s12 m4">
					<div className="icon-block">
					  <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
					  <h5 className="center">Speeds up development</h5>

					  <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
					</div>
				  </div>

				  <div className="col s12 m4">
					<div className="icon-block">
					  <h2 className="center brown-text"><i className="material-icons">group</i></h2>
					  <h5 className="center">User Experience Focused</h5>

					  <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
					</div>
				  </div>

				  <div className="col s12 m4">
					<div className="icon-block">
					  <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
					  <h5 className="center">Easy to work with</h5>

					  <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
					</div>
				  </div>
				</div>
			  </div>
			</div>


			<div className="parallax-container valign-wrapper">
			  <div className="section no-pad-bot">
				<div className="container">
				  <div className="row center">
					<h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
				  </div>
				</div>
			  </div>
			  <div className="parallax"><img src="background2.jpg" alt="Unsplashed background img 2"/></div>
			</div>

			<div className="container">
			  <div className="section">

				<div className="row">
				  <div className="col s12 center">
					<h3><i className="mdi-content-send brown-text"></i></h3>
					<h4>Contact Us</h4>
					<p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
				  </div>
				</div>

			  </div>
			</div>


			<div className="parallax-container valign-wrapper">
			  <div className="section no-pad-bot">
				<div className="container">
				  <div className="row center">
					<h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
				  </div>
				</div>
			  </div>
			  <div className="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"/></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroCover);
