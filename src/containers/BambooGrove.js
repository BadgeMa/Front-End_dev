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
                "contents": "살려줘 찡찡"
            }, {
                "title": "Memo1",
                "contents": "문수야 어디있니"
            }, {
                "title": "Memo1",
                "contents": "애들아 어디갔어"
            }, {
                "title": "Memo1",
                "contents": "엄마가 보고싶어요"
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
