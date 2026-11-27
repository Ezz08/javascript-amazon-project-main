import { formatCurrency } from '../js/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts 2095 cents to dollars');

if(formatCurrency(2095) === '20.95'){
    console.log('formatCurrency test passed');
} else{
    console.error('formatCurrency test failed');
}

console.log('converts 0 cents to dollars');
if(formatCurrency(0) === '0.00'){
    console.log('formatCurrency test passed');
} else{
    console.error('formatCurrency test failed');
}

console.log('converts 2000.5 cents to dollars');
if(formatCurrency(2000.5) === '20.01'){
    console.log('formatCurrency test passed');
} else{
    console.error('formatCurrency test failed');
}