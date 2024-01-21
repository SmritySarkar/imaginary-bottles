const getStoredCart = () =>{

    // Checking if there is any item named cart in localstorage
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

// Save to local Storage 
const savedToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// Add to local storage
const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // Save to local storage
    savedToLocalStorage(cart);
}

// remove from local storage
const removeFromLS = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining  = cart.filter(idx => idx !== id);
    savedToLocalStorage(remaining);
}

export {addToLS, getStoredCart, removeFromLS}