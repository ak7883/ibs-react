
import { LOAD_PRODUCTS, ADD_NEW_REVIEW, BUY } from '../constants';

export function loadProducts() {
    //return { type: LOAD_PRODUCTS, products } // sync action
    return function (dispatch) {
        dispatch({ type: 'LOAD_PRODUCTS_BEGIN' });
        fetch('http://0.0.0.0:8080/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products })// Async Action
            }, () => {
                dispatch({ type: 'LOAD_PRODUCTS_FAILED' });
            });
    }
}

export function addNewReview(review) {
    return { type: ADD_NEW_REVIEW, review }
}

export function buy(item) {
    return { type: BUY, item }
}
