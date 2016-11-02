import {
	MENU_UPDATE
} from './ActionTypes';

export function updateMenu(menuname) {
    return {
        type: MENU_UPDATE,
		menuname
    };
}
