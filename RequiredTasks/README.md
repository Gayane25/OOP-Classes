# Tasks

- [Code Requirement List](https://docs.google.com/document/d/1ruDwdOAXNmJ1WVu5gevdJzh9nbjchpPxpOtAEBbqdrs/edit)

## Required Tasks

_Note, `setters` in all tasks should do some validations_

### Task1

Create an `Author class` and a `Book class`.
`Author` should have:

- fields
  - `name`
  - `email`
  - `gender`
- methods
  - `getters` for fields
  - ```javascript
    toString();
    ```

`Book` should have:

- fields:
  - `title`
  - `author(Author)`
  - `price`
  - `quantity`
- methods:
  - `getters` for fields
  - `setters` for fields
  - `getProfit() `- which calculates the profit from the book based on the `price` and `quantity`.
  - `toString()`

[click to see the solution](https://github.com/Gayane25/OOP-Classes/blob/master/RequiredTasks/AuthorBook.js)

### Task 2

Create an `Account` class. `Account` should have:

- fields
  - `id`
  - `name`
  - `balance`
- `getters` for fields
- `setters` - for `name` and `balance`
- `credit(amount)` - which should add `amount` to `balance` and return the updated `balance`.
- `debit(amount)` - which should subtract the `amount` from the `balance`, if `amount` is less than the `balance`, otherwise output “Amount exceeded balance.”
- `transferTo(anotherAccount, amount)` - which should subtract the amount from the account
  `balance` and add it to the given anotherAccount and return the updated `balance`, if amount is less than the `balance`, otherwise output “Amount exceeded balance.”
- **static** method: `identifyAccounts(accountFirst, accountSecond)` - which gets two accounts and identifies if they are the same or not comparing all fields.
- `toString()`

Example

```javascript
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
$1400.

```

[click to see the solution](https://github.com/Gayane25/OOP-Classes/blob/master/RequiredTasks/Account.js)

### Task3

Write classes: `Person` class and `Student` class. `Person` should have:

- fields
  - `firstName`
  - `lastName`
  - `gender`
  - `age`
- methods:
  - `getters`
  - `setters`
  - `toString`

```javascript
let user1 = new Person('Name', 'Surname', 'female', 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```

`Student` is inherited from `Person`. It should have:

- fields
  - `year`
  - `fee`
  - `program(array of { programName, grade })`
- methods

  - `getters`
  - `setters`
  - `passExam(programName, grade)`
  - `isAllPassed()`
  - `toString()`

  `Student` should contain the data about its programs and exams.

  - `passExam` will update that data, so if student passed all the `exams(grade is great or equal to 50)`, its `year` should be increased by one.
  - It should have a method `isAllPassed()`.

  Example of program array:

  ```javascript
  [
    { programName: 'math', grade: 10 },
    { programName: 'english', grade: undefined },
  ];
  ```

  [click to see the solution](https://github.com/Gayane25/OOP-Classes/blob/master/RequiredTasks/Student.js)
