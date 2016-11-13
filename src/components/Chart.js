import React, {Component, PropTypes} from 'react';
import ChartistGraph from 'react-chartist';


const propTypes = {
	title: React.PropTypes.string,
	data: React.PropTypes.object,
	options: React.PropTypes.object
};

const defaultProps = {
	title: "chart title",
	data: {
		labels: ['Jan','Feb','Mar', 'April', 'May', 'June'],
	  	series: [
			[230, 340, 400, 300, 570, 500, 800]
		]
  	},
	options: {
		showPoint: false,
		lineSmooth: true,
		height: "210px",
		axisX: {
		  showGrid: false,
		  showLabel: true
		},
		axisY: {
		  offset: 40,
		  showGrid: false
		},
		low: 0,
		high: 'auto',
		classNames: {
			line: 'ct-line ct-green'
		}
	}
};

class Chart extends React.Component {

    constructor(props) {
        super(props);

    }

	componentDidMount() {
		Chartist.Line('#chart', this.props.data, this.props.options);
	}

    render() {

        return (
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-7">
                            <div className="numbers pull-left">
                                $34,657
                            </div>
                        </div>
                        <div className="col-xs-5">
                            <div className="pull-right">
                                <span className="label label-success">
                                    +18%
                                </span>
                            </div>
                        </div>
                    </div>
                    <h6 className="big-title">total earnings
                        <span className="text-muted">in last</span>
                        ten
                        <span className="text-muted">quarters</span>
                    </h6>
					<div>
						<div id="chart"></div>
					</div>
	                <div className="card-footer">
	                    <hr/>
	                    <div className="footer-title">
							{this.props.title}
		                </div>
		            </div>
		        </div>
			</div>
		);
	}
}

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default Chart;
