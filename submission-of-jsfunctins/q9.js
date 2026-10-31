// Parent class
class Person {

    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

// Child class
class Student extends Person {

    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Creating object
let student1 = new Student("Bhoomi", "AI & Data Science");

student1.showName();
student1.showBranch();