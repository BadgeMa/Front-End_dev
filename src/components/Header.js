import React from 'react';
import { Home } from '../containers';
import { Link, Match } from 'react-router';


class Header extends React.Component {

	render() {
        return(

			<nav className="white" role="navigation">

			  <div className="nav-wrapper container">
				<a id="logo-container" href="#" className="brand-logo">Badge-Ma</a>
				<ul className="right hide-on-med-and-down">
				  <li><Link to='/home'>SW Maestro</Link></li>
				</ul>
				<ul id="nav-mobile" className="side-nav">
				  <li><Link to='/home'>SW Maestro</Link></li>
				</ul>

				<Match pattern='/home' component={Home}/>

			  </div>

			</nav>

        );
    }
}

export default Header;
