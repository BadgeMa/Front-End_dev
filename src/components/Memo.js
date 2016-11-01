import React, { Component, PropTypes } from 'react';


class Memo extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {

		const bambooMemo = (
			<div className="col-md-6">
				<div className="card">
					<div className="header">
						<span className="label label-success">Bamboo Title</span>
						<p className="category">Backend development</p>
					</div>
					<div className="content">
						<p>Memo Context</p>
					</div>
					<div className="card-footer">
						<hr/>
							<i className="ti-time"></i>
							11 hours ago via Twitter
					</div>
				</div>
			</div>
		)

		const reportMemo = (
			<div className="col-md-6">
	            <div className="card">
	            	<div className="header">
						<span className="label label-danger">Emergency Report</span>
	                    <p className="category">Backend development</p>
                    </div>
	            	<div className="content">
						<p>Memo Context</p>
					</div>
					<div className="card-footer">
						<hr/>
							<i className="ti-time"></i>
							11 hours ago via Twitter
					</div>
				</div>
			</div>
		);

		const counselMemo = (
			<div className="col-md-6">
	            <div className="card">
	            	<div className="header">
						<span className="label label-info">Counseling</span>
	                    <p className="category">Backend development</p>
                    </div>
	            	<div className="content">
						<p>Memo Context</p>
					</div>
					<div className="card-footer">
						<hr/>
							<i className="ti-time"></i>
							11 hours ago via Twitter
					</div>
				</div>
			</div>
		);

        return(
			<div>
				{bambooMemo}
				{reportMemo}
				{counselMemo}
			</div>

        );
    }
}


export default Memo;
