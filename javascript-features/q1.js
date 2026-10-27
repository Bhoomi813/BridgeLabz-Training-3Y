"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ", "100px",
    "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nOriginal Value: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: "${stringValue}"`);

    // Reject NaN, whitespace-only strings, and values such as "100px".
    // null and undefined are also excluded from numeric data.
    const isValid =
        value !== null &&
        value !== undefined &&
        !(typeof value === "string" && value.trim() === "") &&
        !Number.isNaN(numberValue) &&
        !(typeof value === "string" && value.trim() === "NaN");

    if (isValid) {
        validNumbers.push(numberValue);
        console.log("Status: VALID");
    } else {
        invalidNumbers.push(value);
        console.log("Status: INVALID");
    }
}

console.log("\n========== FINAL REPORT ==========");
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);