import React from 'react';
import { Header, Footer, Sidebar } from '../components';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="wrapper">
					<Sidebar/>
					<div className="main-panel">
						<Header/>
						<Footer/>
					</div>
				</div>
			</div>

		)
	}
}
