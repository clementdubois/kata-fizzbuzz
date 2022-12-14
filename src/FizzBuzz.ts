export class FizzBuzz {
    private fizz = "Fizz";
    private buzz = "Buzz";
    private fizzBuzz = this.fizz + this.buzz;

    private fizzBuzzMultiplier = 15;
    private fizzMultiplier = 3;
    private buzzMultiplier = 5;

    execute(number: number) {
        if (this.isFizzBuzz(number)) return this.fizzBuzz
        if (this.isFizz(number)) return this.fizz;
        if (this.isBuzz(number)) return this.buzz;
        return String(number);
    }

    private isBuzz(number: number) {
        return this.isMultipleOf(number, this.buzzMultiplier);
    }

    private isFizz(number: number) {
        return this.isMultipleOf(number, this.fizzMultiplier);
    }

    private isFizzBuzz(number: number) {
        return this.isMultipleOf(number, this.fizzBuzzMultiplier);
    }

    private isMultipleOf(number, multiplier) {
        return number % multiplier === 0;
    }
}