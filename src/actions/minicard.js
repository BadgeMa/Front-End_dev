import {
	MINI_UPDATE_1TH,
	MINI_UPDATE_2TH,
	MINI_UPDATE_3TH,
	MINI_UPDATE_4TH
} from './ActionTypes.js'

export function updateMini1st(value) {
    return {
        type: MENU_UPDATE_1TH,
		value
    };
}

export function updateMini2st(value) {
    return {
        type: MENU_UPDATE_2TH,
		value
    };
}

export function updateMini3st(value) {
    return {
        type: MENU_UPDATE_3TH,
		value
    };
}

export function updateMini4st(value) {
    return {
        type: MENU_UPDATE_4TH,
		value
    };
}
