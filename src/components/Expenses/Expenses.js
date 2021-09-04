import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021"); // we can have 2-way-binding ensuring this year, 2021 is the default year displayed in the dropdown title
                                                          // this is passed in ExpensesFilter's <select> opening tag as the value attribute's value!
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear; // we compare the year of each item in the expenses array to the "filteredYear" which we set the value for with "filterChangeHandler"
  }); // we then use this new filtered list to execute .map() below!

  let expensesContent = <p>No expenses found.</p>; 
  // we create a local variable to avoid having complex ternary logic in our JSX code

  if (filteredExpenses.length > 0) { // this checks to see if our list is populated for a given year 
    expensesContent = filteredExpenses.map((expense) => ( // if it is, we map through the array
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
