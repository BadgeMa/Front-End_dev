import React from 'react';
import { connect } from 'react-redux';

import { Header, Footer, Sidebar } from '../components';
import { updateMenu } from '../actions/header';



class App extends React.Component {




	render() {

		return (
			<div>
				{this.props.status.isLoggedIn ? <Sidebar onUpdate={this.props.updateMenu}/> : undefined}
				{this.props.status.isLoggedIn ?
				<div>
					<div className="wrapper">
						<div className="main-panel">
							<Header currentMenu={this.props.menu.currentMenu}
								onUpdate={this.props.updateMenu}/>
							{this.props.children}
							<Footer/>
						</div>
					</div>
				</div>
				: this.props.children }
			</div>

		)
	}
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status,
		menu: state.header.menu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
		updateMenu: (menuname) => {
			return dispatch(updateMenu(menuname));
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
