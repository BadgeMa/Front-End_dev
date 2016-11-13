import React, {Component, PropTypes} from 'react';
import {MemoList, MiniCard, CircleChart} from '../components';

class ReportManager extends React.Component {

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

        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-6">
									<MiniCard cate={true} mode={true}/>
								</div>
								<div className="col-md-6">
									<MiniCard cate={true} mode={false}/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<MemoList data={mockData} title="전체목록"/>
								</div>
								<div className="col-md-6">
									<MemoList data={mockData} title="진행목록"/>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<CircleChart/>
							<MemoList data={mockData} title="진행목록"/>
						</div>
                	</div>
				</div>
            </div>
        );
    }
}

export default ReportManager;
