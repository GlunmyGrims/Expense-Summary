const calculateTotal = (expense) => {
    return expense.reduce((total, expense) => {return total += expense.amount}, 0);
};

const calculateCategoryTotal = (expenses, category) => {
    let filter = expenses.filter(expense => expense.category === category);
    return filter.reduce((total, expense) => {return total += expense.amount}, 0)
}


const findLargestExpense = (expenses) => {
    let amount = expenses.map(expense => expense.amount);
    let maxAmount = Math.max(...amount)
    let idMaxAmount = amount.indexOf(maxAmount);

    return expenses[idMaxAmount]
}

const createExpenseSummary = (expenses) => {
    return summary = {
        total: calculateTotal(expenses),
        foodTotal: calculateCategoryTotal(expenses, 'food'),
        transportTotal: calculateCategoryTotal(expenses, 'transport'),
        largestExpense: findLargestExpense(expenses),
    }
}

//Usage Example:

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