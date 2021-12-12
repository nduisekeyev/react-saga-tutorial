import { call, put, takeEvery, all } from "redux-saga/effects";
// put is one example of what we call an Effect

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* incrementAsync() {
  // use the call Effect
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
