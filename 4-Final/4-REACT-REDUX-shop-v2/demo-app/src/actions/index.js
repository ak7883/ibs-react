
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

export function loadReviews(productId) {
    return function (dispatch) {
        fetch(`http://0.0.0.0:8080/api/products/${productId}/reviews`)
            .then(response => {
                return response.json();
            })
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS', reviews, productId })// Async Action
            });
    }
}

export function addNewReview(review, productId) {
    return function (dispatch) {
        let url = `http://0.0.0.0:8080/api/products/${productId}/reviews`;
        fetch(url, { method: 'POST', body: JSON.stringify(review), headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                return response.json();
            })
            .then(review => {
                dispatch({ type: ADD_NEW_REVIEW, review, productId })// Async Action
            });
    }
}

export function buy(item) {
    return { type: BUY, item }
}
