import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // note that this is an Arrow Function syntax

  return (
    <li> {/* We rap this Card in a <li> tag since our ExpenseList.js component is wrapped inside a <ul> tag and this is the parent component to that */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card> {/* Card is now a custom component defined by us and its values are defined by the {props.children} in Card.js */}
    </li>
  );
};

export default ExpenseItem;
