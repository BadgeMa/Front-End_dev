import React from 'react';

class Footer extends React.Component {

	render() {

        return(
				<footer className="footer">
					<div className="container-fluid">
						<nav className="pull-left">
							<ul>
								<li>
									<p>아이들의 행복한 미래를 찾아주는 뺏지마</p>
								</li>
							</ul>
						</nav>
						<div className="copyright pull-right">
							<p>2016, made with <i className="fa fa-heart heart"></i> by Badge-Ma Team</p>
						</div>
					</div>
				</footer>
        );
    }
}

export default Footer;
