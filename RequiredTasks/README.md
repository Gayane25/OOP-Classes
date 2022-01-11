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
