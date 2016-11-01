import React, { Component, PropTypes } from 'react';
import { MemoList, MiniCard } from '../components';


class CounselManager extends React.Component {

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
							<MemoList data={mockData} title="상담목록"/>
						</div>

						<div className="row">
							<div className="col-lg-3 col-sd-6">
								<MiniCard cate={false} mode={true}/>
							</div>
							<div className="col-lg-3 col-sd-6">
								<MiniCard cate={false} mode={false}/>
							</div>
							<div className="col-md-6">
								<MemoList data={mockData} title="상담완료"/>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}


export default CounselManager;
