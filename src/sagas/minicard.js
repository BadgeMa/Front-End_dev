import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as ActionTypes from '../actions/ActionTypes';
import * as minicardApi from '../services/minicard';


function* get(action) {

    const { response, error } = yield call(minicardApi.get);

    if(response) {
        yield put({type: ActionTypes.GET_TOTAL_REPORT.SUCCESS, payload: { response }});
    } else {
        yield put({type: ActionTypes.GET_TOTAL_REPORT.ERROR, payload: { error }});
    }
}

function* watchGet() {
    yield* takeEvery(ActionTypes.GET_TOTAL_REPORT.REQUEST, get);
}


export default function* minicardSaga() {
  yield fork(watchGet);
}
