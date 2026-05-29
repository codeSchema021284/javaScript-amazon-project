import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage,cart} from '../../data/cart.js';

describe('test suite: renderOrderSummary', () => {
      const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
      const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
      afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
      });

    beforeEach( () => {

          document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>
        <div class="js-payment-summary"></div> 
        <div class="js-checkout-header"></div> 
        `; 
        
        spyOn(localStorage,'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([{
    productId: productId1,
    quantity: 2,
    deliveryOptionId:'1'
},{
    productId: productId2,
    quantity: 1,
    deliveryOptionId: '2'
}]));
                
        
        loadFromStorage();

        renderOrderSummary();
    }
    );

    it('displays the cart', () => {
     
        
       expect(
        document.querySelectorAll('.js-cart-item-container').length
       ).toEqual(2);
       
       expect(
        document.querySelector(`.js-product-quantity-${productId1}`).textContent
       ).toContain('Quantity: 2');

       expect(
        document.querySelector(`.js-product-quantity-${productId2}`).textContent
       ).toContain('Quantity: 1'); 
       
     
 
    });

    it('removes  a product from the cart', () => {
      
      
        const deleteLink = document.querySelector(`.js-delete-link[data-product-id="${productId1}"]`);
        deleteLink.click();
        expect(document.querySelectorAll('.js-cart-item-container').length
       ).toEqual(1);
       expect(
        document.querySelector(`.js-product-quantity-${productId1}`)
       ).toBeNull();
       expect(
        document.querySelector(`.js-product-quantity-${productId2}`).textContent
       ).toContain('Quantity: 1');
       expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toBeNull();

       expect(cart.length).toEqual(1);
       expect(cart[0].productId).toEqual(productId2);  
    });
});