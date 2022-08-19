import { createContext, useState } from "react";

const addNewItem = (cartItems, productToAdd) => {
    const product = cartItems.find(item => item.id === productToAdd.id)

    if(product){
        return cartItems.map(item => {
            if(item.id === productToAdd.id){
               return { ...item, quantity : item.quantity + 1}
            }
            return item;
        })    
    }else{
        return [...cartItems, {...productToAdd, quantity: 1}]
    }   
}

const removeItem = (cartItems, productToRemove) => {
    const product = cartItems.find(item => item.id === productToRemove.id)

    if(product && productToRemove.quantity > 1){
        return cartItems.map(item => {
            if(item.id === productToRemove.id){
                return { ...item, quantity: item.quantity -1 }
            }
            return item;
        })
    }

    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemFromCart: () => null
})

export const DropdownProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addNewItem(cartItems, productToAdd))
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems, productToRemove))
    }
    const value = {
        isCartOpen, setIsCartOpen, addItemToCart, cartItems, removeItemFromCart
    }
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


// Why we are creating new object or new array everytime and not making changes on the same argument?
// Its because react needs a new memory location to re-render the components thats using that single object or array. If we make changes in the same one, it will think that its the same object, just different value, and just becuase of that, react doesnt re-render the component. Hence, we have to create a new one, using spread operators or something like that.