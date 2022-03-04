if(localStorage.cart){
    var cart = JSON.parse(localStorage.cart);
    if(cart.length > 0){
        document.getElementById('cart').setAttribute('counter',`${cart.length}`);
        document.getElementById('cartDetails').style.display = "flex";
       appendCartDetails();
    }
}

function appendCart(){
    var allProducts_template = '';
    for(let i =0; i<cart.length; i++){
        var current_product = cart[i];
        var product_template =
        `<div class="d-flex border mb-4 p-3 ms-5 align-items-start justify-content-between">
            <div class="d-flex">
                <img width="220" height="150" src="${current_product.image_url}" alt="">
                <div class="product-details p-3">
                    <h2 class="p-0">${current_product.name}</h2>
                    <h6 class="text-secondary">${current_product.category_name}</h6>
                    <h3>${current_product.price}$</h3>
                </div>
            </div>
            <button class="delete-btn" onclick="deleteFromCart(${i})"><i style="font-size:24px" class="fa">&#xf00d;</i></button>
        </div>`;
        allProducts_template += product_template;
    }
    document.getElementById('cartProducts').innerHTML = allProducts_template;
}

appendCart();

function deleteFromCart(idx){
    cart.splice(idx,1);
    localStorage.cart = JSON.stringify(cart);
    appendCart();
    if(cart.length != 0){
        document.getElementById('cart').setAttribute('counter',`${cart.length}`)
        appendCartDetails();
    } else { 
        document.getElementById('cart').removeAttribute('counter');
        document.getElementById('cartDetails').remove();
    }
}

function appendCartDetails(){
    var total_price = 0;
    cart.forEach(item => {
        total_price += item.price;
    });
    document.getElementById('totalPrice').innerText = `Total price: ${total_price}$`
    document.getElementById('totalProducts').innerText = `Total products: ${cart.length}x`

}
