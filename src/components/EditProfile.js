import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class EditProfile extends React.Component {

	constructor(props) {
        super(props);

	}

	render() {
        return(
			<div className="card">
				<div className="header">
					<h4 className="title">Edit Profile</h4>
				</div>
				<div className="content">
					<form>
						<div className="row">
							<div className="col-md-5">
								<div className="form-group">
									<label>계정 아이디</label>
									<input type="text" className="form-control border-input" placeholder="Username" value="sw-maestro-07"/>
								</div>
							</div>
							<div className="col-md-7">
								<div className="form-group">
									<label>이메일</label>
									<input type="email" className="form-control border-input" placeholder="Email" value="mangogj08@gmail.com"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>이름</label>
									<input type="text" className="form-control border-input" placeholder="Company" value="규정"/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>성</label>
									<input type="text" className="form-control border-input" placeholder="Last Name" value="황"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="form-group">
									<label>학교</label>
									<input type="text" className="form-control border-input" placeholder="School" value="청주신흥고등학교"/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>도시</label>
									<input type="text" className="form-control border-input" placeholder="City" value="청주"/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
									<label>지역(도)</label>
									<input type="text" className="form-control border-input" placeholder="State" value="충청북도"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<label>About me</label>
									<textarea rows="5" className="form-control border-input" placeholder="Here can be your description" value="Mike">
Oh so, your weak rhyme
You doubt I'll bother, reading into it
I'll probably won't, left to my own devices
But that's the difference in our opinions.
									</textarea>
								</div>
							</div>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-info btn-fill btn-wd">Update Profile</button>
						</div>
						<div className="clearfix"></div>
					</form>
				</div>
			</div>
        );
    }
}


EditProfile.propTypes = propTypes;
EditProfile.defaultProps = defaultProps;

export default EditProfile;
