import { formatCurrency } from '../../../js/utils/money.js';

describe('test suite: formatCurrency', () =>{
    it('converts 2095 cents to dollars', () =>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('converts 0 cents to dollars', () =>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('converts 2000.5 cents to dollars', () =>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});