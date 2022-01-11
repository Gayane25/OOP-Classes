'use strict';

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(val) {
    if (typeof val !== 'string') {
      throw new Error('this field must be string');
    }
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(val) {
    if (typeof val !== 'string') {
      throw new Error('this field must be string');
    }
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  set gender(val) {
    if (typeof val !== 'string') {
      throw new Error('gender must be string');
    }
    return this._gender;
  }
  get age() {
    return this._age;
  }
  set age(val) {
    if (typeof val !== 'number') {
      throw new Error('please input a number');
    }
    return this._age;
  }

  toString() {
    return ` ${this._firstName}, ${this._lastName}, ${this._gender}, ${this._age} years old `;
  }
}

let pers = new Person('Gayane', 'Babayan', 'female', 26);
console.log(pers);
console.log(pers.toString());

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  get year() {
    return this._year;
  }
  set year(val) {
    if (typeof val !== 'number') {
      throw new Error('the value must be a number');
    }
    return this._year;
  }
  get fee() {
    return this._fee;
  }
  set fee(val) {
    if (typeof val !== 'number') {
      throw new Error('the input must be a number');
    }
    return this._fee;
  }
  get program() {
    return this._program;
  }
  set program(arrProg) {
    if (!ArrayIsArray(arrProg)) {
      throw new Error('only arr');
    }
    return this._program;
  }
  toString() {
    return `${this._firstName}, ${this._lastName}, ${this._gender}, ${
      this._age
    }, ${this._year}, ${this._fee}, ${JSON.stringify(this._program)}`;
  }

  passExam(programName, grade) {
    this._program.map(el => {
      if (el.programName === programName) {
        el.grade = grade;
      }
      return el;
    });
    this._program.every(el => {
      if (el.grade > 50) {
        this._year += 1;
      }
    });
  }
  isAllPassed() {
    return this._program.every(item => item.grade >= 50);
  }
}

let student1 = new Student('Gayane', 'Babayan', 'female', 26, 2021, 500, [
  { programName: 'Math', grade: 52 },
  { programName: 'phisics', grade: 40 },
]);

console.log(student1);
console.log(student1.toString());
