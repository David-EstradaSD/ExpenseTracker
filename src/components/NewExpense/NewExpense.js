import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  // in our JSX code below, we'll use JS shortcut syntax to execute button click if they're NOT adding expense yet
  // and vise-versa if they ARE indeed adding an expense through the form and display each accordingly

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // this is not a perfect unique ID, but for this project, it's fine
    };
    props.onAddExpense(expenseData); // Again, this is executable bc we're passing a pointer at it through onAddExpenseData in App.js
    setIsAddingExpense(false); // set this to false so that when we click Submit, the adding form view goes away
  };

  const startAddingFormHandler = () => {
    setIsAddingExpense(true); // we want to set the isAddingExpense boolean to true if they are indeed adding a new expense
  };

  const stopAddingFormHandler = () => {
    setIsAddingExpense(false); // we will call this in ExpenseForm.js component for the Cancel button
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={startAddingFormHandler}>Add New Expense</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddingExpense={stopAddingFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
