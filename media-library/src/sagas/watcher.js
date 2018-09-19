import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import * as type from '../constants/actionTypes';

//Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchMedia() {
    yield takeLatest(type.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}