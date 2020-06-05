import { call, put } from "@redux-saga/core/effects";

import * as topicsActionTypes from '../topics/actionTypes';
import { topicsService } from '../../services';

export function* FetchTopics() {
    try {
        const result = yield call(topicsService.fetchTopics);
        yield put({
            type: topicsActionTypes.FETCH_TOPICS_SUCCESS, 
            payload: result.data
        });
    } catch (error) {
        yield put({
            type: topicsActionTypes.FETCH_FAILURE, 
            payload: error
        });
    }
}