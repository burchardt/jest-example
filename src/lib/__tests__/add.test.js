import { add } from '../add.js';

describe('add()', () => {
    it ('adds two numbers', () => {
        expect(add(3, 4)).toEqual(7);
    });

    it ('adds two strings', () => {
        expect(add("Ali", "baba")).toEqual('Alibaba');
    });

    it ('add string and number', () => {
        const result = add('Counter=', 3);
        expect(result).toEqual('Counter=3');
        expect(typeof result).toEqual('string');
    });
});