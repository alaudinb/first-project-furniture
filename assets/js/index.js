
const api = 'https://621d53b0806a09850a57b4ee.mockapi.io/api/'; 
var all_products = [];
localStorage.setItem('cart',JSON.stringify([]));
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
                        <p>${product.price}</p>
                    </div>
                    <div class="product-overlay">
                        <button onclick="addToCart(${i})">Add to cart</button>
                        <div class="share-like">
                            <i class="fas fa-share"> Share</i>
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
    var storage_cart = JSON.parse(localStorage.cart);
    if(storage_cart.length){
        storage_cart.forEach(e =>{
            if(e.id != current_product.id){
                storage_cart.push(current_product);
            }
        })
    } else { 
        storage_cart.push(current_product);
    }
    let cart_length = storage_cart.length;
    document.getElementById('cart').setAttribute('counter',`${cart_length}`)
    localStorage.cart = JSON.stringify(storage_cart);

}
