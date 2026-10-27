"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}
class DivisionByZeroError extends Error {}
class NegativeRootError extends Error {}

for (const operation of operations) {
    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new DivisionByZeroError(
                        "Cannot divide by zero"
                    );
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new NegativeRootError(
                        "Cannot calculate real square root of a negative number"
                    );
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(
                    "Operation not recognized"
                );
        }

        console.log(
            `${operation}: ${result}`
        );
    } catch (error) {
        console.log(`${operation}: ERROR - ${error.message}`);
    }
}