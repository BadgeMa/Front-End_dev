import React, {Component, PropTypes} from 'react';
import ChartistGraph from 'react-chartist';


const propTypes = {
	title: React.PropTypes.string
};

const defaultProps = {
	title: "chart title",
};

class Chart extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

		var dataPrice = {
		  labels: ['Jan','Feb','Mar', 'April', 'May', 'June'],
		  series: [
			[230, 340, 400, 300, 570, 500, 800]
		  ]
		};

		var optionsPrice = {
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
		};

		var data = {
	      labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015'],
	      series: [
	        [200, 300, 400, 800, 600, 500, 700]
	      ]
	    };

	    var options = {
  		  	low: 0,
			high: 1000,
			height: "210px",
			showPoint: false,
			lineSmooth: true,
	        axisX: {
	        	labelInterpolationFnc: function(value, index) {
	        		return index % 2 === 0 ? value : null;
				},
				showGrid: false
			},
			classNames: {
				line: 'ct-line ct-red'
			}
		};

	    var type = 'Line'


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
						<ChartistGraph data={data} options={options} type={type} className="ct-line ct-red" />
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
