import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Dummy_Expenses = [ // this array's data is pointed at using the "props" name "items" below in the Expenses component call
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() { // note that this is the standard JS function syntax
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  

  const addExpenseHandler = expense => { // expense is our SINGLE parameter, thus needs no parantheses
    setExpenses(prevExpenses => { // note that we have to use "function form" since we are using previous state to build our new state!
      return [expense, ...prevExpenses]; // we are creating a new Array every time we add a new expense dynamically, by adding it to the array, then using the spread operator to bring the existing data
    }); 
  };

  // This next block of code is the more cumbersome code that get's created under the hood
  // by JSX and requires to import React from package.json. The syntax is as such bc
  // createElement() creates a single element and so we have to add it's child elements, etc.
  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
