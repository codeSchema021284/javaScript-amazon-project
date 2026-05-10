export function getDeliveryOption(deliveryOptionId) {
   
    let deliveryOption = deliveryOptions.find(
        (option) => String(option.id) === String(deliveryOptionId)
    );
    
    // Fallback to the first delivery option if no match is found to prevent errors
    if (!deliveryOption) {
        deliveryOption = deliveryOptions[0];
    }
    return deliveryOption;
    
}

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0,
},{
    id: '2',
    deliveryDays: 3,
    priceCents: 499,

},{
    id:'3',
    deliveryDays: 1,
    priceCents: 999,
}];