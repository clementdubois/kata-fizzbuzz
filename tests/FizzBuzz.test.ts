import {FizzBuzz} from "../src/FizzBuzz";

describe('Fizzbuzz', () => {
    it.each([[1, "1"], [2, "2"], [4, "4"]])('Should return %d as "%s"', (input, expected) => {
        let fizzbuzz = new FizzBuzz();
        let result = fizzbuzz.execute(input);
        expect(result).toBe(expected);
    });

    it.each([3, 6, 9, 12, 18])('Should return "Fizz" for multiple of 3', (input) => {
        let fizzbuzz = new FizzBuzz();
        let result = fizzbuzz.execute(input);
        expect(result).toBe("Fizz");
    });

    it.each([5, 10, 20, 50])('Should return "Buzz" for multiple of 5', (input) => {
        let fizzbuzz = new FizzBuzz();
        let result = fizzbuzz.execute(input);
        expect(result).toBe("Buzz");
    })

    it.each([15, 30, 45, 150])('Should return "FizzBuzz" for multiple of 15', (input) => {
        let fizzbuzz = new FizzBuzz();
        let result = fizzbuzz.execute(input);
        expect(result).toBe("FizzBuzz");
    });

});