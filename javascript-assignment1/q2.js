// Declare variables of different data types
let userName = "Bhoomi";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Python", "Java"];
let userDetails = { city: "Mathura", course: "B.Tech" };
let middleName = null;
let address;

// Identify each variable's type
// Array.isArray() is used to correctly identify arrays
let report = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "Age",
        value: age,
        type: typeof age
    },
    {
        label: "Student",
        value: isStudent,
        type: typeof isStudent
    },
    {
        label: "Subjects",
        value: subjects.join(", "),
        type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        label: "User Details",
        value: JSON.stringify(userDetails),
        type: typeof userDetails
    },
    {
        label: "Middle Name",
        value: String(middleName),
        type: typeof middleName
    },
    {
        label: "Address",
        value: String(address),
        type: typeof address
    }
];

// Print the complete report using one console.table()
console.table(report);