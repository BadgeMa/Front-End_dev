import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    count: {
        mini1th: -1,
        mini2th: -1,
        mini3th: -1,
        mini4th: -1
    }
}

export default function header(state, action) {
    if (typeof state === "undefined") {
        state = initialState;
    }

    switch (action.type) {
            /* MINI CARD */
        case types.MINI_UPDATE_1TH:
            return update(state, {
                mini1th: {
                    $set: action.value
                }
            });
        case types.MINI_UPDATE_2TH:
            return update(state, {
                mini2th: {
                    $set: action.value
                }
            });
        case types.MINI_UPDATE_3TH:
            return update(state, {
                mini3th: {
                    $set: action.value
                }
            });
        case types.MINI_UPDATE_4TH:
            return update(state, {
                mini4th: {
                    $set: action.value
                }
            });
        default:
            return state;
    }
}
