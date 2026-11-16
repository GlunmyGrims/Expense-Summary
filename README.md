# Expense Summary

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
[![roadmap.sh](https://img.shields.io/badge/roadmap.sh-Project%20Idea-blue?style=for-the-badge&logo=roadmapdotsh)](https://roadmap.sh/projects/js-expense-summary)

A lightweight, scalable expense summary utility designed for web developers and e-commerce creators seeking efficient, zero-dependency solutions without building features from scratch.

---

## Features

- **Modular architecture:** Built with independent, single-responsibility utilities that can be imported and integrated into any part of your project.
- **Clean and readable code:** Follows functional programming principles with reusable functions and clear data pipelines.
- **Extensible core logic:** Easy to build upon and adapt, serving as a solid foundation for both small scripts and larger applications.
- **Efficient data handling:** Processes diverse expense categories quickly and reliably.

---

## Technologies Used

- **Vanilla JavaScript (ES6+):** Selected for maximum performance, universal compatibility, and a zero-dependency footprint.

---

## Challenges Overcome

- **Complex Array Transformations:** Refactoring native methods (`reduce`, `map`, and `filter`) to handle nested and aggregated data structures cleanly.
- **Designing `findLargestExpense`:** Implementing a robust and scalable solution to parse, compare, and extract maximum values accurately regardless of incoming data variations.

---

## How to Use

1. Clone or download the source code into your project directory.
2. Import the main functions or individual utilities into your module.

### Example Usage

```javascript
const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));

// Output:
/*
{
  total: 97,
  foodTotal: 42,
  transportTotal: 15,
  largestExpense: { id: 4, category: 'books', amount: 40 }
}
42
0
{ id: 4, category: 'books', amount: 40 }
*/

```

## License

This project is licensed under the MIT License.

## Links & Resources

- **Roadmap Project Specification:** [JavaScript Expense Summary](https://roadmap.sh/projects/js-expense-summary)                                       