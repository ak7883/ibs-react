

import { ADD_NEW_REVIEW } from '../constants';

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_REVIEWS':
            return Object.assign({}, state, { [action.productId]: action.reviews })
        case ADD_NEW_REVIEW:
            console.log('add-new review');
            return Object.assign({}, state, { [action.productId]: [...state[action.productId], action.review] });
        default:
            return state;
    }
}