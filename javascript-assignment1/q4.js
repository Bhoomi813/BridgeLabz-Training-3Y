// Store marks of five subjects
let marks = [90, 88, 78, 85, 92];

// Calculate total marks
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

// Calculate average and percentage
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
let failedSubject = marks.some(mark => mark < 35);

// Evaluate the student's result
if (failedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}

// Display academic details
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);