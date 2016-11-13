import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class CircleChart extends React.Component {

	constructor(props) {
        super(props);

	}

	componentDidMount() {
		$('#chartDashboard, #chartOrders, #chartNewVisitors, #chartSubscriptions').easyPieChart({
			lineWidth: 6,
			size: 160,
			scaleColor: false,
			trackColor: 'rgba(255,255,255,.25)',
			barColor: '#FFFFFF',
			animate: ({duration: 5000, enabled: true})

		});
	}

	render() {
        return(
			<div className="card card-circle-chart" data-background="color" data-color="blue">
				<div className="header text-center">
	                <h5 className="title">Dashboard</h5>
	                <p className="description">Monthly sales target</p>
	            </div>
				<div className="content">
					<div id="chartDashboard" className="chart-circle" data-percent="70">70%</div>
				</div>
			</div>
        );
    }
}


CircleChart.propTypes = propTypes;
CircleChart.defaultProps = defaultProps;

export default CircleChart;
