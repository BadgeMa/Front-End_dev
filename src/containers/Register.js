import React, {Component, PropTypes} from 'react';
import { Authentication } from '../components';

const propTypes = {};

const defaultProps = {};

export default class Register extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-transparent navbar-absolute">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Badge-Ma</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="register.html">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="wrapper wrapper-full-page">
                    <div className="full-page login-page" data-color="" data-image="../../assets/img/background/background-2.jpg">

                        <div className="content">
                            <div className="container">
                                <div className="row">
									<Authentication/>
                                </div>
                            </div>
                        </div>

                        <footer className="footer footer-transparent">
                            <div className="container">
                                <div className="copyright">
                                    2016 made with
                                    <i className="fa fa-heart heart"></i>
                                    <a> by Badge-Ma</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;
