import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
	username: React.PropTypes.string,
	onUpdate: React.PropTypes.func
};

const defaultProps = {
	username: '',
	onUpdate: (menuname) => { console.error("onUpdate not defined"); }
};

class Sidebar extends React.Component {

	constructor(props) {
        super(props);

		this.handleDashboard = this.handleDashboard.bind(this);
		this.handleReport = this.handleReport.bind(this);
		this.handleCounsel = this.handleCounsel.bind(this);
		this.handleBamboo = this.handleBamboo.bind(this);
	}

	handleDashboard() {
		this.props.onUpdate('Dashboard');
	}

	handleReport() {
		this.props.onUpdate('Report Manager');
	}

	handleCounsel() {
		this.props.onUpdate('Counsel Manager');
	}

	handleBamboo() {
		this.props.onUpdate('BambooGrove Manager');
	}

	render() {

		const logoView = (
			<div>
				<div className="logo">
					<a className="simple-text">
						Badge-Ma
					</a>
				</div>
				<div className="logo logo-mini">
					<a className="simple-text">
						BM
					</a>
				</div>
			</div>
		);

		const profileView = (
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
		);

		const menuDashboard = (
			<li>
				<a href="#componentsDashboard" data-toggle="collapse">
					<i className="ti-panel"></i>
					<p onClick={this.handleDashboard}>
						대시보드
					</p>
					<div className="collapse" id="componentsDashboard">
						<ul className="nav">
							<li>
								<Link to="/dashboard">
									Overview
								</Link>
							</li>
							<li>
								<Link to="/seatingchart">
									장비배치도
								</Link>
							</li>
						</ul>
					</div>
				</a>
			</li>
		);

		const menuReport = (
			<li>
				<Link to="/reportmanager">
					<i className="ti-signal"></i>
					<p onClick={this.handleReport}>
						신고관리
					</p>
				</Link>
			</li>
		);

		const menuCounsel = (
			<li>
				<Link to="/counselmanager">
					<i className="ti-comments"></i>
					<p onClick={this.handleCounsel}>
						상담관리
					</p>
				</Link>
			</li>
		);

		const menuBamboo = (
			<li>
				<Link to="/bamboogrove">
					<i className="ti-book"></i>
					<p onClick={this.handleBamboo}>
						대숲관리
					</p>
				</Link>
			</li>
		);

        return(

			<div className="sidebar" data-background-color="white" data-active-color="danger">
				{logoView}
				<div className="sidebar-wrapper">
					{profileView}
					<ul className="nav">
						{menuDashboard}
						{menuReport}
						{menuCounsel}
						{menuBamboo}
					</ul>
				</div>
			</div>
        );
    }
}


Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
