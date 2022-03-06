const api = 'https://621d53b0806a09850a57b4ee.mockapi.io/api/'; 
var all_products = [];
if(!localStorage.cart){
    localStorage.setItem('cart',JSON.stringify([]));
} else {
    var cart = JSON.parse(localStorage.cart);
    if(cart.length > 0){
        document.getElementById('cart').setAttribute('counter',`${cart.length}`);
    }
}
function getProducts(){
    axios.get(api + 'products').then(response => {
         all_products = response.data;
         var products_template ='';
        for(let i = 0; i<all_products.length; i++){
            let product = all_products[i];
             products_template += 
            `<div class="product">
                    <img class="product-image" src="${product.image_url}" alt="Product image">
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <small>${product.category_name}</small>
                        <p>${product.price}$</p>
                    </div>
                    <div class="product-overlay">
                        <button onclick="addToCart(${i})">Add to cart</button>
                        <div class="share-like">
                            <i class="fas fa-share" onclick="goSingleProduct(${product.id})"> See more</i>
                            <i class="fas fa-heart"> Like</i>
                        </div>
                    </div>
                </div>`;
        }
        document.getElementById('productSection').innerHTML = products_template;
    }).catch(e => {
        console.log(e);
    })
}

getProducts();

function addToCart(index){
    var current_product = all_products[index];
    var storage_cart = [];
    var found_product = false;
    if(localStorage.cart){
        storage_cart = JSON.parse(localStorage.cart);
    }

    if(storage_cart.length > 0){
        for(let i =0; i< storage_cart.length; i++){
            if(storage_cart[i].id == current_product.id){
                found_product = true;
            }
        }
    }
    if(!found_product){
        storage_cart.push(current_product);
    }
    let cart_length = storage_cart.length;
    document.getElementById('cart').setAttribute('counter',`${cart_length}`)
    localStorage.cart = JSON.stringify(storage_cart);

}
function validateEmail(email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

function subscribe(){
    const email = document.getElementById('subscribeMail');
    var info_div = '';
    var stay_updated_info = document.getElementById('info')
    
    if(validateEmail(email.value)){
        email.style.border = '2px solid green';
        info_div = '<div style="color: green;">You`ve been successfully subscribed</div>';
        stay_updated_info.innerHTML = info_div;
        email.value = '';
    } else { 
        email.style.border = '2px solid red';
        info_div = '<div style="color: red;">Please give an valid email address!</div>';
        stay_updated_info.innerHTML = info_div;
        email.value = '';
    }
}

function goSingleProduct(id){
    localStorage.productId = id;
    location.replace("./single-product.html");
}

