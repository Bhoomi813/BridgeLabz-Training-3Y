// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inheriting Person prototype
Student.prototype = Object.create(Person.prototype);

// Restoring constructor reference
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

// Creating student object
let student1 = new Student("Bhoomi", "AI & Data Science");

student1.showName();
student1.showBranch();