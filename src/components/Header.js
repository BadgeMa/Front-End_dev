import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';


const propTypes = {
    currentMenu: React.PropTypes.string,
	onUpdate: React.PropTypes.func
};

const defaultProps = {
    currentMenu: "Menu Name",
	onUpdate: (menuname) => { console.error("onUpdate not defined"); }
};

class Header extends React.Component {

    constructor(props) {
        super(props);

		this.handleHome = this.handleHome.bind(this);
    }

	handleHome() {
		this.props.onUpdate('Home');
	}

    render() {


        return (
			<nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-minimize">
                        <button id="minimizeSidebar" className="btn btn-fill btn-icon">
                            <i className="ti-more-alt"></i>
                        </button>
                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"></span>
                            <span className="icon-bar bar2"></span>
                            <span className="icon-bar bar3"></span>
                        </button>
                        <Link to={this.props.currentMenu} className="navbar-brand">{this.props.currentMenu}</Link>
                    </div>

                </div>
            </nav>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
