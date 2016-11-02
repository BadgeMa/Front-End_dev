import React from 'react';

class Footer extends React.Component {

	render() {

        return(
				<footer className="footer">
					<div className="container-fluid">
						<nav className="pull-left">
							<ul>
								<li>
									<p>학생들의 소중한 꿈을 학교폭력으로 뻇지마세요</p>
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
