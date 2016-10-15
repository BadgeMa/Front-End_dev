import React from 'react'
import { Header, IntroCover, Footer } from '../components';

class Intro extends React.Component {

	render () {
		return (
			<div>
				<Header/>
				<IntroCover/>
				<Footer/>
			</div>
		);
	}
}

export default Intro;
