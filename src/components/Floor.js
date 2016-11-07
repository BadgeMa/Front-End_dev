import React, { Component, PropTypes } from 'react';
import { Room } from '../components'

const propTypes = {
	floorName: React.PropTypes.string,
	floorNum: React.PropTypes.number
};

const defaultProps = {
	floorName: "floor",
	floorNum: 0
};

class Floor extends React.Component {

	constructor(props) {
        super(props);
	}

	render() {

		var styleFloor = {
			verticalAlign: "middle"
		}

		var styleFloorName = {
			textAlign: "center"
		}

		var roomName = new Array(3);
		roomName[0] = new Array("1-1", "1-2", "1-3", "1-4", "화장실1");
		roomName[1] = new Array("2-1", "2-2", "2-3", "2-4", "화장실2");
		roomName[2] = new Array("3-1", "3-2", "3-3", "3-4", "화장실3");


        return(
            <div className="row">
					<div className="col-md-2">
						<div style={styleFloorName}>
							<h4>{this.props.floorName}</h4>
						</div>
					</div>
					<div className="col-md-2">
						<Room roomName={roomName[this.props.floorNum][0]}/>
					</div>
					<div className="col-md-2">
						<Room roomName={roomName[this.props.floorNum][1]}/>
					</div>
					<div className="col-md-2">
						<Room roomName={roomName[this.props.floorNum][2]}/>
					</div>
					<div className="col-md-2">
						<Room roomName={roomName[this.props.floorNum][3]}/>
					</div>
					<div className="col-md-2">
						<Room roomName={roomName[this.props.floorNum][4]}/>
					</div>
            </div>
        );
    }
}


Floor.propTypes = propTypes;
Floor.defaultProps = defaultProps;

export default Floor;
