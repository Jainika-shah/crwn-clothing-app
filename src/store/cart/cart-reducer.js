const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: []
}

export const cartReducer = (state=INITIAL_STATE, action={}) => {
    const { type, payload } = action;
    switch(type){
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            } 
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems: payload
            }
        default: 
            return state;
    }
}
