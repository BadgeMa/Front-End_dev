import authentication from './authentication';
import header from './header';

import { combineReducers } from 'redux';

export default combineReducers({
	authentication,
	header
});
