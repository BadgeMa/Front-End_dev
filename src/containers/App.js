import React from 'react';
import { Footer, Sidebar } from '../components';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="wrapper">
					<Sidebar/>
					<div className="main-panel">
						<Footer/>
					</div>
				</div>
			</div>

		)
	}
}
