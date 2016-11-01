import React, {Component, PropTypes} from 'react';

const propTypes = {
    data: React.PropTypes.object
};

const defaultProps = {
    data: {
        title: 'Memo title',
        contents: 'Contents'
    }
};

class Memo extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const bambooMemo = (
            <div className="card">
                <div className="header">
                    <span className="label label-success">Bamboo Memo</span>
                    <p className="category">{this.props.data.title}</p>
                </div>
                <div className="content">
                    <p>{this.props.data.contents}</p>
                </div>
                <div className="card-footer">
                    <hr/>
                    <i className="ti-time"></i>
                    11 hours ago via Twitter
                </div>
            </div>
        )

        const reportMemo = (

            <div className="card">
                <div className="header">
                    <span className="label label-danger">Emergency Report</span>
                    <p className="category">{this.props.data.title}</p>
                </div>
                <div className="content">
                    <p>{this.props.data.contents}</p>
                </div>
                <div className="card-footer">
                    <hr/>
                    <i className="ti-time"></i>
                    11 hours ago via Twitter
                </div>
            </div>

        );

        const counselMemo = (

            <div className="card">
                <div className="header">
                    <span className="label label-info">Counseling</span>
                    <p className="category">{this.props.data.title}</p>
                </div>
                <div className="content">
                    <p>{this.props.data.contents}</p>
                </div>
                <div className="card-footer">
                    <hr/>
                    <i className="ti-time"></i>
                    11 hours ago via Twitter
                </div>
            </div>
        );

        return (
            <div>
                {bambooMemo}
                {reportMemo}
                {counselMemo}
            </div>

        );
    }
}

export default Memo;
