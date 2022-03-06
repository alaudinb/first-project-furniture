const product_id = localStorage.productId; 
const api = 'https://621d53b0806a09850a57b4ee.mockapi.io/api/'; 

if(localStorage.cart){
    var cart = JSON.parse(localStorage.cart);
    if(cart.length > 0){
        document.getElementById('cart').setAttribute('counter',`${cart.length}`);
    }
}
function getProduct(){
    axios.get(api + `products/${product_id}`).then(response => {
         var product = response.data;
         console.log(product)
         var template = 
         `
        <div class="product-image col-8 d-flex justify-content-center">
             <img width="600" height="400" src="${product.image_url}" alt="">
        </div>

        <div class="product-details col-4 p-5 d-flex flex-column shadow">
                <h2 class="p-0">${product.name}</h2>
                <h5 class="text-secondary mt-3 ms-2 mb-5">${product.category_name}</h5>
                <div class="select-quantity">
                    <Label for="#selectQuantity">Select quantity: </Label>
                    <select id="selectQuantity" class="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div class="price-button d-flex justify-content-between align-items-center mt-5">
                    <h5>${product.price}$</h5>
                    <button class="btn btn-success py-2 px-5" type="button">Buy</button>
                </div>
        </div>
         `;
         document.getElementById('singleProduct').innerHTML = template;
    });
}
getProduct();