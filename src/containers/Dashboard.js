import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {MemoList, MiniCard, Chart} from '../components';
import {updateMini1st, updateMini2st, updateMini3st, updateMini4st} from '../actions/minicard';

class Dashboard extends React.Component {

    render() {

        var mockData = [
            {
                "title": "Memo1",
                "contents": "Testing"
            }, {
                "title": "Memo1",
                "contents": "Testing"
            }, {
                "title": "Memo1",
                "contents": "Testing"
            }, {
                "title": "Memo1",
                "contents": "Testing"
            }
        ];

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <MiniCard cate={true} mode={true}
								value1st={this.props.mini1th}/>
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
		mini1th: state.minicard.count.mini1th,
		mini2th: state.minicard.count.mini2th,
		mini3th: state.minicard.count.mini3th,
		mini4th: state.minicard.count.mini4th
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMini1st: (value) => {
            return dispatch(updateMini1st(value));
        },
		updateMini2st: (value) => {
			return dispatch(updateMini2st(value));
		},
		updateMini3st: (value) => {
			return dispatch(updateMini3st(value));
		},
		updateMini4st: (value) => {
			return dispatch(updateMini4st(value));
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
