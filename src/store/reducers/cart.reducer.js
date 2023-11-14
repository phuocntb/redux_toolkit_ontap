const addToCart = "ADD_TO_CART"
const updateCart = "UPDATE_CART"
export const cartReducer = (state = {
    data: [{
        id: Date.now(),
        productId: 1,
        quantity: 1
    }]
}, action) => {
    switch(action.type) {
        case addToCart:
            let productExist = state.data.find(item => item.productId == action.payload.productId);
            if(productExist) {
                // sp da ton tai, + don so luong
                return {
                    ...state,
                    data: state.data.map(item => {
                        if(item.productId == action.payload.productId) {
                            return {
                                ...item,
                                quantity: item.quantity + action.payload.quantity
                            }
                        }
                        return item
                    })
                }
            }else {
                // sp chua tung ton tai
                return {
                    ...state,
                    data: [...state.data, action.payload]
                }
            }
        case updateCart:
            return {
                ...state,
                data: state.data.map(item => {
                    if(item.productId == action.payload.productId) {
                        return {
                            ...item,
                            quantity: action.payload.quantity
                        }
                    }
                    return item
                })
            }
        default:
            return state;
    }
}


export const cartAction = {
    addToCart: function(item) {
        return {
            type: addToCart,
            payload: item
        }
    },
    updateCart: function(item) {
        return {
            type: updateCart,
            payload: item
        }
    }
}