const books = [
  {
    title: "Adventures in a cave",
    author: "Joe Dundee",
    numberOfPages: "125",
    publisher: "Self Publised",
    id: 0
  }
];

function getAllBooks() {
  return books;
}

function insertBook(book) {
  book.id = books.length;
  books.push(book);
}

function modifyBook(id, book) {
  books[id] = book;
}

function removeBook(id) {
  books.splice(id, 1);
  for (let index = id; index < books.length; index++) {
    books[index].id = books[index].id - 1;
  }
}

exports.getAllBooks = getAllBooks;
exports.insertBook = insertBook;
exports.modifyBook = modifyBook;
exports.removeBook = removeBook;
