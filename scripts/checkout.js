import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/renderCheckoutHeader.js";
// import '../data/cart-class.js';
import '../data/backend-practice.js';
import {loadProducts,loadProductsFetch} from '../data/products.js';
import { loadCart } from "../data/cart.js";

Promise.all([
    loadProductsFetch(),

new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }),



]).then((value) => {
    console.log('value', value);
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
  

});

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

