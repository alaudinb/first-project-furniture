
const api = 'https://621d53b0806a09850a57b4ee.mockapi.io/api/'; 

function getProducts(){
    axios.get(api + 'products').then(response => {
        console.log(response)
    }).catch(e => {
        console.log(e);
    })
}

getProducts();
