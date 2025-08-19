import { all, takeEvery } from "redux-saga/effects";
import all from "./user/saga";

export default function* rootSaga() {
    return yield all([
        user,
    ]);
}