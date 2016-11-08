import React, { Component, PropTypes } from 'react';

import { EditProfile, UserCard } from '../components';

const propTypes = {

};

const defaultProps = {

};

class User extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(
			<div className="content">
	            <div className="container-fluid">
	                <div className="row">
	                    <div className="col-lg-4 col-md-5">
							<UserCard/>
						</div>
						<div className="col-lg-8 col-md-7">
							<EditProfile/>
						</div>
					</div>
				</div>
			</div>
        );
    }
}


User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;
