
import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { reviewsReducer } from './reviews';
import { statusReducer } from './status';

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    status: statusReducer
});

export default rootReducer;