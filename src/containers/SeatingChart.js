import React, { Component, PropTypes } from 'react';
import { Floor } from '../components';

const propTypes = {

};

const defaultProps = {

};

class SeatingChart extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(
			<div className="content">
                <div className="container-fluid">
                    <div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="header">
									<h4 className="title">반별 배치 상황</h4>
									<p className="category">실시간 작동 감시</p>
									<br />
								</div>
								<div className="content">
									<hr />
									<Floor floorName="1층" floorNum={0}/>
									<hr />
									<Floor floorName="2층" floorNum={1}/>
									<hr />
									<Floor floorName="3층" floorNum={2}/>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}


SeatingChart.propTypes = propTypes;
SeatingChart.defaultProps = defaultProps;

export default SeatingChart;
