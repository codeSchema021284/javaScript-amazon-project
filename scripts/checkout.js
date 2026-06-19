import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/renderCheckoutHeader.js";
// import '../data/cart-class.js';
import '../data/backend-practice.js';
import {loadProductsFetch} from '../data/products.js';
import { loadCart } from "../data/cart.js";

   
async function loadPages(){

try {
  //throw 'Error occurred1';

 await loadProductsFetch();

 const result = await new Promise((resolve, reject) => {
    
    //throw 'Error occurred2';

        loadCart(() => {
            resolve('value2');
            //reject('Error occurred3');
        });
    });

    console.log('result', result);
}catch (error) {
    console.error('Error occurred:', error);
}
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();

}

loadPages();

      
/*
async function checkoutpage(){

try {


await Promise.all([
    loadProductsFetch(),
new Promise((resolve, reject) => {
        loadCart(() => {
            resolve();
            
        });
    }),



]);
}catch (error) {
    console.error('Error occurred:', error);
}
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
  

}
checkoutpage();
*/


/*
new Promise((resolve) => {
  
    loadProducts(() => {
      
        resolve('value1');
    });
}).then((value) => {
     console.log('value', value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    

}).then((value) => {
   

        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
  
});

*/


/*
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();

    });
});
*/

