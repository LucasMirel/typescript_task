/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type book = {
    isbnNum: number;
    title: string;
    author: string;
    page: number;
    category: string;
    isAvailable: boolean;

}

const book1: book = {
    isbnNum: 9780132350884,
    title: "Clean Code",
    author: "Robert C. Martin",
    page: 464,
    category: "Programming",
    isAvailable: true
}

const book2: book = {
    isbnNum: 9780201633610,
    title: "Design Patterns",
    author: "Erich Gamma",
    page: 395,
    category: "Software Engineering",
    isAvailable: false
}

const book3: book = {
    isbnNum: 9781491950357,
    title: "Building Microservices",
    author: "Sam Newman",
    page: 280,
    category: "Software Architecture",
    isAvailable: true
}

console.log(book1);
console.log(book2);
console.log(book3);

