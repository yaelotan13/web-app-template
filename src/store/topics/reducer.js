import * as actionTypes from './actionTypes';

const initialState = {
    topics: [],
    loading: false,
    hasError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOPICS: {
            return {
                ...state,
                loading: true,
                hasError: false
            }
        }
        case actionTypes.FETCH_TOPICS_SUCCESS: {
            return {
                ...state,
                loading: false,
                hasError: false,
                topics: action.payload
            }
        }
        case actionTypes.FETCH_FAILURE: {
            return {
                ...state,
                loading: false,
                hasError: true
            }
        }
        default: {
            return state;
        }
    }
};

export default reducer;
