import { add } from '../add.js';

describe('add()', () => {
    it ('adds two numbers', () => {
        expect(add(2, 3)).toEqual(5);
    });

    it ('does not add third number', () => {
        expect(add(2, 3, 4)).toEqual(add(2, 3));
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