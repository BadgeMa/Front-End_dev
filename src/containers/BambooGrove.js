import React, { Component, PropTypes } from 'react';
import { MemoList, MiniCard } from '../components';

class BambooGrove extends React.Component {

	constructor(props) {
        super(props);

	}

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

        return(
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<MemoList data={mockData} title="대나무숲"/>
						</div>

						<div className="col-md-6">
							<MemoList data={mockData} title="새로운글"/>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default BambooGrove;
