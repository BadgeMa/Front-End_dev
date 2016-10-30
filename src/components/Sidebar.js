import React, { Component, PropTypes } from 'react';

const propTypes = {
	username: React.PropTypes.string
};

const defaultProps = {
	username: ''
};

class Sidebar extends React.Component {

	constructor(props) {
        super(props);
	}

	render() {
        return(
			<div className="sidebar" data-background-color="white" data-active-color="danger">

				<div className="logo">
					<a className="simple-text">
						Badge-Ma
					</a>
				</div>
				<div className="logo logo-mini">
					<a href="http://www.creative-tim.com" className="simple-text">
						Ct
					</a>
				</div>

				<div className="sidebar-wrapper">

					<div className="user">
						<div className="photo">
							<img src="./assets/img/faces/face-2.jpg" />
						</div>
						<div className="info">
							<a data-toggle="collapse" href="#collapseExample" className="collapsed">
								{this.props.username}
								<b className="caret"></b>
							</a>
							<div className="collapse" id="collapseExample">
								<ul className="nav">
									<li><a href="#profile">My Profile</a></li>
									<li><a href="#edit">Edit Profile</a></li>
									<li><a href="#settings">Settings</a></li>
								</ul>
							</div>
						</div>
					</div>

					<ul className="nav">
						<li>
							<a href="#dashboard">
								<i className="ti-panel"></i>
								<p>대시보드
								</p>
							</a>
						</li>
						<li>
							<a href="#reportmanager">
								<i className="ti-signal"></i>
								<p>신고관리</p>
							</a>
						</li>
						<li>
							<a href="#counselmanager">
								<i className="ti-comments"></i>
								<p>상담관리</p>
							</a>
						</li>
						<li>
							<a href="#storyboard">
								<i className="ti-book"></i>
								<p>대숲관리</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
        );
    }
}


Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
