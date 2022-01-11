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

const Rowling = new Author('J.K.Rowling', 'anc@gmail.com', 'female');
console.log(Rowling.toString());
console.log(Rowling.name);
console.log(Rowling.gender);
