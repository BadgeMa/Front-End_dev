import React, {Component, PropTypes} from 'react';

const propTypes = {};

const defaultProps = {};

class Memo extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container memo">
				</div>
				<div className="card">
					<div className="info">

					</div>
					<div className="card-content">
						card-content
					</div>
					<div className="footer">
						footer
					</div>
				</div>
            </div>
        );
    }
}

Memo.propTypes = propTypes;
Memo.defaultProps = defaultProps;

export default Memo;
