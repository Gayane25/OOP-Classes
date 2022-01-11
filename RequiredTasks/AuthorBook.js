'use strict';

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(stringOnly) {
    if (typeof stringOnly !== 'string') {
      throw new Error('the value must be string');
    } else {
      return this._name;
    }
  }
  get gender() {
    return this._gender;
  }
  toString() {
    if (this._gender === 'female') {
      return `Ms ${this._name}`;
    } else {
      return `Mr ${this._name}`;
    }
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this.price = price;
    this.quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(newTitle) {
    this._title = newTitle;
    return this._title;
  }
  get author() {
    return this._author;
  }
  set author(val) {
    this._author = val;
    return this._author;
  }
  getProfit() {
    if ((typeof this.price && typeof this.quantity) !== 'number') {
      throw new Error('Only Numbers!!');
    }
    return this.price * this.quantity;
  }
}

const Rowling = new Author('J.K.Rowling', 'anc@gmail.com', 'female');
console.log(Rowling.toString());
console.log(Rowling.name);
console.log(Rowling.gender);
const Dambldore = new Book(
  'The Secrets of Dambledore',
  'J.K.Rowling',
  6000,
  10000
);
console.log(Dambldore.title);
console.log(Dambldore.quantity);
console.log(Dambldore.getProfit());
