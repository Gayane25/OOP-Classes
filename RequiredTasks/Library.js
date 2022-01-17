'use strict';
class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }
  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  toString() {
    return `${this.title} by ${this.author}`;
  }
  isTheSameBook(book) {
    if (
      book instanceof Book &&
      book.name === this.name &&
      book.author === this.author
    ) {
      return true;
    }
  }
}

class LibraryBookBase extends Book {
  static id = 0;
  constructor(title, author) {
    super(title, author);
    this._bookId = ++LibraryBookBase.id;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this._quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(onlyNum) {
    if (typeof onlyNum !== 'number') {
      throw new Error('this field must be only number');
    }
    this._quantity = onlyNum;
  }
  increaseQuantityBy(amount) {
    if (typeof amount !== 'number') {
      throw new Error('only number');
    }
    this._quantity += amount;
    return this._quantity;
  }
  decreaseQuantityBy(amount) {
    if (typeof amount !== 'number') {
      throw new Error('only number');
    }
    if (amount > this._quantity) {
      throw new Error('amount must be less than quantity');
    }
    this._quantity -= amount;
    return this._quantity;
  }
}
class ReaderBook extends LibraryBookBase {
  constructor(title, author, bookId, expirationDate) {
    super(title, author, bookId);
    this._expirationDate = expirationDate;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(val) {
    if (Object.prototype.toString.call(val) === '[object Date]') {
      this._expirationDate = val;
      return this._expirationDate;
    }
    throw new Error('only string');
  }
  isReturned(date) {
    date = new Date();
    let diff = date - this._expirationDate > 0;
    return diff > 0 ? true : false;
  }
}

class Reader {
  static id = 0;
  constructor(firstName, lastName, books) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.readerId = ++Reader.id;
    this._books = books;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
}
// let readerBook1 = new ReaderBook('Harry Potter', 'Rawling', '22-05-2022');
// let readerBook2 = new ReaderBook('Harry', 'Rawling', ' 22-05-2022');
// let readerBooks = [readerBook1, readerBook2];
// let reader1 = new Reader('Gayane', 'Babayan', readerBooks);
// console.log(reader1);

class Library {
  constructor(books, readers) {
    // array of Library books // array of Readers
    this._books = books;
    this._readers = readers;
  }
  doHaveBook(requestedBook) {
    if (requestedBook instanceof LibraryBook) {
      return this._books.some(el => {
        return (
          el.title === requestedBook.title && el.author === requestedBook.author
        );
      });
    } else {
      return 'Invalid book';
    }
  }
  addBook(newBook) {
    if (newBook instanceof LibraryBook) {
      newBook.quantity += 1;
      return this_.books;
    } else {
      this._books.push(newBook);
    }
  }
  addBooks(newBooks) {
    const isValidBooks = newBooks.every(el => el instanceof LibraryBook);
    if (isValidBooks) {
      this._books = [...this._books, ...newBooks];
      return this._books;
    }
    return this._books;
  }
  checkReaderId(readerId) {
    this._readers.some(el => {
      if (el.readerId === readerId) {
        return true;
      } else {
        return false;
      }
    });
  }

  // static checkReaderId(readeId) {
  //   const reead = new Reader();
  //   for (let i of Library.readers) {
  //     if (reead.readerId === readeId) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
}

const Gayane = new Reader('Gayane', 'Babayan');
const Harut = new Reader('Harut', 'Harutyunyan');
const Arev = new Reader('Arevik', 'Arzumanian');

const Rawling = new LibraryBook('Harry Potter', 'John Rawling', 1);
const Markes = new LibraryBook('100 years of Loneliness', 'Garcia Markes', 3);
const Sartre = new LibraryBook('No Exit', 'Jean Paul Sartre', 4);
const Joyce = new LibraryBook('ULYSS', 'James Joyce', 3);

const libBooks = [Rawling, Markes, Sartre, Joyce];
const libReaders = [Gayane, Harut, Arev];

// console.log(libReaders);
const myLibrary = new Library(libBooks, libReaders);
console.log(myLibrary.checkReaderId(3));

// console.log(myLibrary);
// console.log(myLibrary.doHaveBook('100 years of Loneliness', 'Garcia Markes'));
