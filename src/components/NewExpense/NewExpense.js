import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // this is not a perfect unique ID, but for this project, it's fine
        };
        props.onAddExpense(expenseData); // Again, this is executable bc we're passing a pointer at it through onAddExpenseData in App.js
    };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
    </div>
  );
};

export default NewExpense;
