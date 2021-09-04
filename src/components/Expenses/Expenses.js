import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021"); // we can have 2-way-binding ensuring this year, 2021 is the default year displayed in the dropdown title
                                                          // this is passed in ExpensesFilter's <select> opening tag as the value attribute's value!
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear; // we compare the year of each item in the expenses array to the "filteredYear" which we set the value for with "filterChangeHandler"
  }); // we then use this new filtered list to execute .map() below!

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
