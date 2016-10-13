import React, { Component, PropTypes } from 'react';
import { Header, Authentication, Test } from '../components';

export default class App extends React.Component {

	render() {
        return(
            <div>
				<Header/>

				<div id="index-banner" className="parallax-container">
					<div className="section no-pad-bot">
						<div className="container">
							<br></br>
				          	<h1 className="header center teal-text text-lighten-2">학생들의 꿈 뺏지마</h1>
				          	<div className="row center">
				            	<h5 className="header col s12 light">혼자 가지고 있는 어려움들을 함께 나누고 공감하여 더 밝은 세상으로</h5>
				          	</div>
							<Authentication/>
							<br></br>
						</div>
					</div>
					<div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1"/></div>
				</div>

			</div>
        );
    }
}
