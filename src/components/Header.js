import React, {Component, PropTypes} from 'react';

const propTypes = {
    current: React.PropTypes.string,
    numOfNoti: React.PropTypes.number
};

const defaultProps = {
    current: "Menu Name",
    numOfNoti: 0
};

class Header extends React.Component {

    constructor(props) {
        super(props);

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
                        <a className="navbar-brand" href="#charts">Menu Name</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#home" className="dropdown-toggle btn-magnify">
                                    <i className="ti-home"></i>
                                    <p>Home</p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#notifications" className="dropdown-toggle btn-rotate" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <span className="notification">5</span>
                                    <p className="hidden-md hidden-lg">
                                        Notifications
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#not1">Notification 1</a>
                                    </li>
                                    <li>
                                        <a href="#not2">Notification 2</a>
                                    </li>
                                    <li>
                                        <a href="#not3">Notification 3</a>
                                    </li>
                                    <li>
                                        <a href="#not4">Notification 4</a>
                                    </li>
                                    <li>
                                        <a href="#another">Another notification</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#settings" className="btn-rotate">
                                    <i className="ti-settings"></i>
                                    <p className="hidden-md hidden-lg">
                                        Settings
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
