import { take, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    GET_CURRENT_USER_INFO,
    setCurrentUser
} from './../actions'

export function* currentUserSaga() {
    const { id } = yield take(GET_CURRENT_USER_INFO);
    const response = yield fetch(`http://localhost:8081/user/${id}`);
    const data = yield response.json();
    yield put(setCurrentUser(data));
}