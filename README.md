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

[click to see the solution](https://github.com/Gayane25/OOP-Classes/blob/master/AuthorBook.js)
