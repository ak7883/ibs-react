

import { ADD_NEW_REVIEW } from '../constants';

export function reviewsReducer(state = [], action) {
    switch (action.type) {
        case ADD_NEW_REVIEW:
            return [...state, action.review];
        default:
            return state;
    }
}