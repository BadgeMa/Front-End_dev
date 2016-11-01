import React, {Component, PropTypes} from 'react';
import {MemoList, MiniCard} from '../components';

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
                        <div className="col-md-6">
                            <MemoList data={mockData} title="신고목록"/>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-sd-6">
                                <MiniCard cate={true} mode={true}/>
                            </div>
                            <div className="col-lg-3 col-sd-6">
                                <MiniCard cate={true} mode={false}/>
                            </div>
							<div className="col-md-6">
								<MemoList data={mockData} title="신고완료"/>
							</div>
                    	</div>
                	</div>
				</div>
            </div>
        );
    }
}

export default ReportManager;
