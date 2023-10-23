const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book) => {
  console.log(`${book.authorFirst} ${book.authorLast} wrote ${book.name} in ${book.publishDate}`)
})
//Sort books from oldest to most recent
console.log(
  "books sorted by age",
  books.sort((book1, book2) => book1.publishDate - book2.publishDate)
);
//sort books alphabetically
  titles.sort()
  console.log(titles)
//Find who wrote War and Peace
books.filter((book) => {
if (book.name == "War and Peace"){
  return console.log(book.authorFirst, book.authorLast)}})
//how many books were written before 1900?
const oldBooks = books.filter((book) => {return book.publishDate < 1900});
console.log(oldBooks.length);
//was there at least one book published within the last 100 years?
const date = new Date();
const year = date.getFullYear();
const veryNewbooks = books.filter((book) => {return book.publishDate > year - 100});
function test1() {
if (veryNewbooks.length = 0) {
  return false; }
else  {
  return true; } }
console.log(test1());
//was every book published within the last 100 years?
const veryOldbooks = books.filter((book) => {return book.publishDate < year - 100});
function test2() {
if (veryOldbooks.length = 0) {
  return true; }
else  {
  return false; } }
console.log(test2());

//print a list of books that "includes" the genre historical
const historicalBooks = books.filter((g) => g.genre.includes("historical"));
console.log(historicalBooks);