import React from 'react';

import { Header, Footer, Sidebar } from '../components';

import { connect } from 'react-redux';


class App extends React.Component {




	render() {

		return (
			<div>
				{this.props.status.isLoggedIn ? <Sidebar/> : undefined}
				{this.props.status.isLoggedIn ?
				<div>
					<div className="wrapper">
						<div className="main-panel">
							<Header/>	
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
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
