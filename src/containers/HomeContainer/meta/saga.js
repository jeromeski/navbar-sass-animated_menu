import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetHome(action) {
    try {
        yield put(actions.getHomeSuccess())
    } catch(error) {
        yield put(actions.getHomeError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_HOME, handleGetHome),
    ]);
}
