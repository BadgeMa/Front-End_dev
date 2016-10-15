import React from 'react';


class Header extends React.Component {

	render() {
        return(

			<nav className="white" role="navigation">

			  <div className="nav-wrapper container">
				<a id="logo-container" href="#" className="brand-logo">Badge-Ma</a>
				<ul className="right hide-on-med-and-down">
				  <li><a>SW Maestro</a></li>
				</ul>
				<ul id="nav-mobile" className="side-nav">
				  <li><a>SW Maestro</a></li>
				</ul>
			  </div>

			</nav>

        );
    }
}

export default Header;
