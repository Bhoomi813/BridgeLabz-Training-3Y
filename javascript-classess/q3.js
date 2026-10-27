"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }

        this.isIssued = true;
        console.log(`"${this.title}" has been issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
            return false;
        }

        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
        return true;
    }
}

const books = [
    new Book("JavaScript Basics", "John Smith", "ISBN101"),
    new Book("Python Programming", "Alex Brown", "ISBN102"),
    new Book("Web Development", "Sara Lee", "ISBN103")
];

function displayAvailableBooks() {
    console.log("\nAvailable Books:");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(`${book.title} | ${book.author} | ${book.ISBN}`);
    });
}

function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

displayAvailableBooks();

issueBookByISBN("ISBN102");

displayAvailableBooks();