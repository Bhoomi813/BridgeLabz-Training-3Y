"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullTransactionError extends Error {}

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new NullTransactionError("Null transaction");
        }

        if (
            !Object.hasOwn(transaction, "id") ||
            !Object.hasOwn(transaction, "amount")
        ) {
            throw new MissingFieldError("Missing id or amount");
        }

        if (
            !Number.isFinite(transaction.id) ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new MissingFieldError("Invalid id or amount");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative amount");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: SUCCESS`);
    } catch (error) {
        invalid.push({
            index: i + 1,
            type: error.constructor.name,
            message: error.message
        });

        console.log(`Transaction ${i + 1}: FAILED - ${error.message}`);
    }
}

console.log("\n========== TRANSACTION REPORT ==========");
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);