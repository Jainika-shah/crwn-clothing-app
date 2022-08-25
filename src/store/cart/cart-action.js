
  const addNewItem = (cartItems, productToAdd) => {
    const product = cartItems.find(item => item.id === productToAdd.id)

    if (product) {
      return cartItems.map(item => {
        if (item.id === productToAdd.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      })
    } else {
      return [...cartItems, { ...productToAdd, quantity: 1 }]
    }
  }

  const removeItem = (cartItems, productToRemove) => {
    const product = cartItems.find(item => item.id === productToRemove.id)

    if (product && productToRemove.quantity > 1) {
      return cartItems.map(item => {
        if (item.id === productToRemove.id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item;
      })
    }

    return cartItems.filter(item => item.id !== productToRemove.id);
  }

export const setIsCartOpen = (boolValue) => {
    return {type: 'TOGGLE_CART', payload: boolValue}
}


export const removeItemFromCart = (cartItems, productToRemove) => {
    let items = removeItem(cartItems, productToRemove)
    return {type: 'SET_CART_ITEMS', payload: items}
}

export const addItemToCart = (cartItems, productToAdd) => {
    let items = addNewItem(cartItems, productToAdd)
    return {type: 'SET_CART_ITEMS', payload: items}
}