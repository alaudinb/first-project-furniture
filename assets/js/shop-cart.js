if(localStorage.cart){
    var cart = JSON.parse(localStorage.cart);
    document.getElementById('cart').setAttribute('counter',`${cart.length}`)
}

function deleteFromCart(idx){
    cart.splice(idx,1);
    localStorage.cart =  JSON.stringify(cart);

    if(cart.length != 0){
        document.getElementById('cart').setAttribute('counter',`${cart.length}`)
    } else { 
        document.getElementById('cart').removeAttribute('counter');
    }
}
