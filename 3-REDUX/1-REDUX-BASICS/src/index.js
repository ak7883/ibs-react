
import { combineReducers, createStore } from 'redux';

console.log('-index.js-');

//-----------------------------------------------
// Action(s)
const INCREMENT = "increment";
const DECREMENT = "decrement";

const BUY = "buy";
const NEW_REVIEW = "new_review";

//-----------------------------------------------
// Action Creator(s)
function increment(value) {
    return { type: INCREMENT, value };
}

function decrement(value) {
    return { type: DECREMENT, value }
}
function buy(item) {
    return { type: BUY, item }
}
function addNewReview(review) {
    return { type: NEW_REVIEW, review }
}
//-------------------------------------------------------------

// Reducer(s)  ==> state change logic with immutable operations

function counterReducer(state = { count: 0 }, action) {
    console.log('counter-reducer');
    switch (action.type) {
        case INCREMENT:
        case BUY:
            return Object.assign({}, state, { count: state.count + (action.value ? action.value : 1) })
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value })
        default:
            return state;
    }
}
function cartReducer(state = [], action) {
    console.log('cart-reducer');
    switch (action.type) {
        case BUY:
            return [...state, action.item];
        default:
            return state;
    }
}

function reviewsReducer(state = [], action) {
    switch (action.type) {
        case NEW_REVIEW:
            return [...state, action.review];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
    reviews: reviewsReducer
});

//-------------------------------------------------------------
// store
const preloadedState = {
    counter: {
        count: 0,
    },
    cart: [],
    reviews: [
        { stars: 5, author: 'nag@email.com', comment: 'i love it' }
    ]
};
// one place where complete application state
const store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//-------------------------------------------------------------

// View Library  ( plain-js or React )

let incBtn = document.querySelector('.btn-primary');
let decBtn = document.querySelector('.btn-danger');
let countDisplay = document.querySelector('#count-display');
let buyBtn = document.querySelector('#buy');
let newReviewBtn = document.querySelector('#newReview');

store.subscribe(function () {
    const state = store.getState();
    //console.log(state.counter.count);
    countDisplay.innerHTML = `<h1>${state.counter.count}</h1>`;
});


incBtn.addEventListener('click', function (e) {
    store.dispatch(increment(10));
});

decBtn.addEventListener('click', function (e) {
    store.dispatch(decrement(10));
});

buyBtn.addEventListener('click', function () {
    store.dispatch(buy('some-item'));
})

newReviewBtn.addEventListener('click', function () {
    store.dispatch(addNewReview({ stars: 2, author: 'who@email.com', comment: 'bla bla' }));
});