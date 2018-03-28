

export function statusReducer(state = { message: '' }, action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS_BEGIN':
            return Object.assign({}, state, { message: 'Loading products...' })
        case 'load_products':
            return Object.assign({}, state, { message: '' })
        default:
            return state
    }

}