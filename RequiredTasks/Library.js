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
    return this._isReturned;
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
  static books = [];
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.readerId = ++Reader.id;
    this._books = Reader.books;
  }
  //this._books
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  static getReadbooks(book) {
    if (book instanceof ReaderBook) {
      return Reader.books.push(book);
    }
    return Reader.books;
  }

  //borrowBook(){}
}

class Library {
  constructor() {
    this._books = Library.books;
    this._reader = Library.readers;
  }
  static books = [];
  static readers = [];

  static getLibBooks(book) {
    if (book instanceof LibraryBook) {
      Library.books.push(book);
      return Library.books;
    }
    return Library.books;
  }
  static getAllReaders(reader) {
    if (reader instanceof Reader) {
      return Library.readers.push(reader);
    }
    return Library.readers;
  }
}
