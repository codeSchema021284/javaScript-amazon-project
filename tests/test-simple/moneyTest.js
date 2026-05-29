import {formatCurrency, } from '../../scripts/utils/money.js';

console.log('testing suite: formatCurrency');

console.log('converting 2095 cents to dollars ');

if(formatCurrency(2095) === '20.95') {
    console.log('formatCurrency is working correctly');
} else {
    console.error('formatCurrency is not working correctly');
}

console.log('works with zero');

if(formatCurrency(0) === '0.00') {
    console.log('formatCurrency is working correctly for zero');
} else {
    console.error('formatCurrency is not working correctly for zero');
}

console.log('works with rounding');

if(formatCurrency(2000.5) === '20.01') {
    console.log('formatCurrency is working correctly for rounding');
} else {
    console.error('formatCurrency is not working correctly for rounding');
}