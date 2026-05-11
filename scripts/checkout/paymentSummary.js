import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
    
export function renderPaymentSummary() {
  let productCentsTotal = 0;
  let shippingCentsTotal = 0;
  let cartQuantityTotal = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productCentsTotal += product.priceCents * cartItem.quantity;
        cartQuantityTotal += cartItem.quantity;

     
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingCentsTotal += deliveryOption.priceCents;
        
    });
 const totalBeforeTaxCents = productCentsTotal + shippingCentsTotal;
 const taxCents = Math.round(totalBeforeTaxCents * 0.1);
 const totalCents = totalBeforeTaxCents + taxCents;


const paymentSumaryHTML = `
    <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${cartQuantityTotal}):</div>
        <div class="payment-summary-money">$${formatCurrency(productCentsTotal)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatCurrency(shippingCentsTotal)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(taxCents)}}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    </div>
    </div>
  `;

document.querySelector('.js-payment-summary').innerHTML = paymentSumaryHTML;
}
