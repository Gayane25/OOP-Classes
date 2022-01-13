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
    /*if (book.title === this._title && book.author === this._author) {
      return true;
    }*/
    return (
      book instanceof Book &&
      book.name === this.name &&
      book.author === this.author
    );
  }
}
class LibraryBookBase extends Book {
  constructor(title, author) {
    super(title, author);
  }
}
class LibraryBook extends Book {
  static id = 0;
  constructor(title, author) {
    super(title, author);
    this._bookId = ++LibraryBook.id;
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

  toString() {
    return `${this._title}, ${this._author}, ${this._bookId}, ${this._quantity}`;
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

class ReaderBook extends Book {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author);
    this._bookId = bookId;
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }
  get bookId() {
    return this._bookId;
  }
  set bookId(onlyNum) {
    if (typeof onlyNum !== 'number') {
      throw new Error('this field must be only number');
    }
    this._bookId = onlyNum;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(onlystr) {
    if (typeof onlystr !== 'string') {
      throw new Error('this field must be String');
    }
    this._expirationDate = onlystr;
  }
  get isReturned() {
    return this._isReturned;
  }
  set isReturned(checking) {
    if (this.isReturned === true || this.isReturned === 'returned') {
      this._isReturned = true;
      return this._isReturned;
    }
    if (this.isReturned === false || this.isReturned === 'isNotReturned') {
      this._isReturned = false;
      return this._isReturned;
    }
  }
  toString() {
    return `${this._title}, ${this._author}, ${this._bookId}, ${this._expirationDate}, ${this._isReturned}`;
  }
}

class Reader {
  static id = 0;
  constructor(firstName, lastName, books) {
    this._id = ++Reader.id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._books = books;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(strOnly) {
    if (typeof strOnly !== 'string') {
      throw new Error('this field must be string');
    }
    this._firstName = strOnly;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(strOnly) {
    if (typeof strOnly !== 'string') {
      throw new Error('this field must be string');
    }
    this._lastName = strOnly;
  }
  get books() {
    return this._books;
  }
  set books(checkArr) {
    if (!Array.isArray(checkArr)) {
      throw new Error('this field type must be array');
    }
    this._books = checkArr;
  }
  toString() {
    return `${this._firstName}, ${this._lastName}, ${this._books}`;
  }

  borrowBook(book, library) {
    if (library.includes(book) && book instanceof ReaderBook) {
      this._books.push(book);
    }
  }
}

class Library {}
