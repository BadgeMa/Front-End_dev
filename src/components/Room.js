import React, { Component, PropTypes } from 'react';
import SweetAlert from 'sweetalert-react';

const propTypes = {
	roomName: React.PropTypes.string
};

const defaultProps = {
	roomName: "Room"
};

class Room extends React.Component {

	constructor(props) {
        super(props);

		this.state = {
			show: false
		};
	}

	render() {

		var styleRoom = {

		}
		var stylePhoto = {
			width: "80px",
			height: "80px",
			overflow: "hidden",
			borderRadius: "50%",
			margin: "0 auto",
			border: "4px solid rgba(0, 0, 0, 0.15)"
		}
		var stylePhotoImg = {
			 width: "100%"
		}
		var styleInfo = {
			textAlign: "center"
		}

        return(
			<div>
				<div style={stylePhoto}>
					<img style={stylePhotoImg}
						src="./assets/img/faces/face-2.jpg"
						onClick={ () => this.setState({ show: true }) } />
					<SweetAlert
					    show={this.state.show}
					    title="Demo"
				        text="SweetAlert in React"
				    	onConfirm={ () => this.setState({ show: false }) }
					/>
				</div>
				<div style={styleInfo}>
					<p>{this.props.roomName}</p>
				</div>
			</div>

        );
    }
}


Room.propTypes = propTypes;
Room.defaultProps = defaultProps;

export default Room;
