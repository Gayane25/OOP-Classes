'use strict';

class Account {
  static id = 0;
  constructor(name, balance) {
    this._id = ++Account.id;
    this._name = name;
    this._balance = balance;
  }
  get name() {
    return this._name;
  }
  set name(onlyStr) {
    if (typeof onlyStr !== 'string') {
      throw new Error('this field must be String');
    }
    this._name = onlyStr;
  }
  get balance() {
    return this._balance;
  }
  set balance(onlyNum) {
    if (typeof onlyNum !== 'number') {
      throw new Error('this field must be only number');
    }
    this._balance = onlyNum;
  }
  credit(amount) {
    return (this._balance += amount);
  }
  debit(amount) {
    if (amount < this._balance) {
      return (this._balance -= amount);
    } else {
      throw new Error('Amount exceeded balance.');
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount < this._balance) {
      anotherAccount._balance += amount;
      this._balance -= amount;
      return anotherAccount._balance;
    }
    throw new Error('Amount exceeded balance.');
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id) {
      return true;
    }
  }
  toString() {
    return `${this._name}'s account balance is ${this._balance}`;
  }
}

let savingAcc = new Account('Saving account', 2000);
let cardAcc = new Account('Card account', 1000);
//console.log(savingAcc.balance);
console.log(savingAcc.credit(400));
console.log(savingAcc.balance);
console.log(savingAcc.debit(200));
console.log(savingAcc.transferTo(cardAcc, 1000));
console.log(savingAcc.balance);
console.log(cardAcc.balance);
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc));
console.log(savingAcc.toString());
