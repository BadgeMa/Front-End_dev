import authentication from './authentication';
import header from './header';
import minicard from './minicard';

import { combineReducers } from 'redux';

export default combineReducers({
	authentication,
	header,
	minicard
});
