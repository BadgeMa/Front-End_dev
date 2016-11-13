import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {MemoList, MiniCard, Chart} from '../components';
import { totalReportRequest, getTotalReport } from '../actions/minicard';

class Dashboard extends React.Component {

	componentDidMount() {
		console.log("Start componentDidMount function of Room component");

		this.props.minicard.updateTotalReport();
		// this.props.minicardEvents.get();
		// this.handleTotalReport = this.handleTotalReport.bind(this);
	}





	handleTotalReport() {
		this.props.minicardEvents.get();
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

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <MiniCard cate={true} mode={true}
								totalReport={this.props.totalReport}
								onUpdate={this.handleTotalReport}/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <MiniCard cate={true} mode={false}
								value2st={this.props.mini2th}/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <MiniCard cate={false} mode={true}
								value3st={this.props.mini3th}/>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <MiniCard cate={false} mode={false}
								value4st={this.props.mini4th}/>
                        </div>
                    </div>
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<Chart title="연간 신고 건수"/>
						</div>
						<div className="col-lg-4 col-sm-6">
							<Chart title="월간 신고 건수"/>
						</div>
						<div className="col-lg-4 col-sm-6">
							<Chart title="주간 신고 건수"/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<Chart title="연간 상담 건수"/>
						</div>
						<div className="col-lg-4 col-sm-6">
							<Chart title="월간 상담 건수"/>
						</div>
						<div className="col-lg-4 col-sm-6">
							<Chart title="주간 상담 건수"/>
						</div>
					</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
		totalReport: state.minicard.totalReport,
		todayReport: state.minicard.todayReport,
		totalCouncel: state.minicard.totalCouncel,
		todayCouncel: state.minicard.todayCouncel
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
		minicard: {
			updateTotalReport: () => dispatch(totalReportRequest())
		},
		minicardEvents: {
            get: (payload) => dispatch(getTotalReport(payload))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
