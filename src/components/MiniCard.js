import React, {Component, PropTypes} from 'react';

const propTypes = {
	cate: React.PropTypes.bool,
	mode: React.PropTypes.bool,
	value1st: React.PropTypes.number,
	value2st: React.PropTypes.number,
	value3st: React.PropTypes.number,
	value4st: React.PropTypes.number
};

const defaultProps = {
	cate: true,
	mode: true,
	value1st: -1,
	value2st: -1,
	value3st: -1,
	value4st: -1
};

class MiniCard extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const totalReport = (
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big icon-warning text-center">
                                <i className="ti-server"></i>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>A버튼 건수</p>
                                {this.props.value1st}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <hr/>
                    <div className="stats">
                        <i className="ti-reload"></i>
                        Updated now
                    </div>
                </div>
            </div>
        );

        const progressReport = (
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big icon-success text-center">
                                <i className="ti-wallet"></i>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>A버튼 처리</p>
                                {this.props.value2st}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <hr/>
                    <div className="stats">
                        <i className="ti-calendar"></i>
                        Last day
                    </div>
                </div>
            </div>
        );

        const totalCounsel = (
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big icon-danger text-center">
                                <i className="ti-pulse"></i>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>B버튼 신고</p>
                                {this.props.value3st}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <hr/>
                    <div className="stats">
                        <i className="ti-timer"></i>
                        In the last hour
                    </div>
                </div>
            </div>
        );

        const progressCounsel = (
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big icon-info text-center">
                                <i className="ti-twitter-alt"></i>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>B버튼 처리</p>
                                {this.props.value4st}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <hr/>
                    <div className="stats">
                        <i className="ti-reload"></i>
                        Updated now
                    </div>
                </div>
            </div>
        );

        return (
			<div>
				{ this.props.cate
					? <div>
						{this.props.mode ? totalReport : progressReport}
					 </div>
					: <div>
						{this.props.mode ? totalCounsel : progressCounsel}
					</div>
				}
			</div>

        );
    }
}

MiniCard.propTypes = propTypes;
MiniCard.defaultProps = defaultProps;

export default MiniCard;
