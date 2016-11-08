import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class UserCard extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(
			<div className="card card-user">
				<div className="image">
					<img src="../../assets/img/background.jpg" alt="..."/>
				</div>
				<div className="content">
					<div className="author">
					  <img className="avatar border-white" src="../../assets/img/faces/face-2.jpg" alt="..."/>
					  <h4 className="title">Username<br />
						 <a href="#"><small>userid</small></a>
					  </h4>
					</div>
					<p className="description text-center">
						School City State
					</p>
				</div>
				<hr/>
				<div className="text-center">
					<div className="row">
						<div className="col-md-3 col-md-offset-1">
							<h5>12<br /><small>신고</small></h5>
						</div>
						<div className="col-md-4">
							<h5>30<br /><small>상담</small></h5>
						</div>
						<div className="col-md-3">
							<h5>12<br /><small>레벨</small></h5>
						</div>
					</div>
				</div>
			</div>
        );
    }
}


UserCard.propTypes = propTypes;
UserCard.defaultProps = defaultProps;

export default UserCard;
