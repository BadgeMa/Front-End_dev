import React, {Component, PropTypes} from 'react';
import { Memo } from '../components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const propTypes = {
    data: React.PropTypes.array,
	title: React.PropTypes.string
};

const defaultProps = {
    data: [],
	title: 'Memo List'
};

class MemoList extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const mapToComponents = data => {
            return data.map((memo, i) => {
                return (<Memo data={memo} index={i}/>);
            });
        };

        return (
			<div>
            <div className="card">
                <div className="header text-center">
                    <h4 className="title">{this.props.title}</h4>
                </div>
            </div>
			<div>
				<ReactCSSTransitionGroup transitionName="memo" transitionEnterTimeout={2000} transitionLeaveTimeout={1000}>
					{mapToComponents(this.props.data)}
				</ReactCSSTransitionGroup>
			</div>
			</div>
        );
    }
}

MemoList.propTypes = propTypes;
MemoList.defaultProps = defaultProps;

export default MemoList;
