const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartTotal: 0
}

export const cartReducer = (state=INITIAL_STATE, action={}) => {
    const { type, payload } = action;
    // console.log("cartReducer")
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
        case 'SET_CART_TOTAL':
            return{
                ...state,
                cartTotal: payload
            } 
        default: 
            return state;
    }
}
