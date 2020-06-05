import { takeLatest } from 'redux-saga/effects'

import * as topicsActionTypes from '../topics/actionTypes';
import {
    FetchTopics
} from './api';

function* rootSaga() {
    yield takeLatest(topicsActionTypes.FETCH_TOPICS, FetchTopics);
}

export default rootSaga;
