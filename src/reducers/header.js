import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
	menu: {
		currentMenu: 'Current Menu'
	}
}

export default function header(state, action) {
	if(typeof state === "undefined") {
		state = initialState;
	}

	switch(action.type) {
		/* MENU */
        case types.MENU_UPDATE:
            return update(state, {
                menu: {
                    currentMenu: { $set: action.menuname }
                }
            });
		default:
			return state;
	}
}
