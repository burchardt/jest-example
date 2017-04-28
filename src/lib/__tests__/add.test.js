import { add } from '../add.js';

describe('add()', () => {
    it ('adds two numbers', () => {
        expect(add(3, 4)).toEqual(7);
        expect(add(0, 0)).not.toBeGreaterThan(0);
        expect(add(3.1415926, 2.78)).toBeCloseTo(5.9, 1);
    });

    it ('adds two strings', () => {
        expect(add("Ali", "baba")).toEqual('Alibaba');
        expect(add("Mona", "lisa")).toMatch(/ali/);
    });

    it ('add string and number', () => {
        expect(add).not.toThrow();
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        expect(typeof result).toEqual('string');
    });
});
