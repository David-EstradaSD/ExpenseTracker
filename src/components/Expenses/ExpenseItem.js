import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => { // note that this is an Arrow Function syntax 
  const [title, setTitle] = useState(props.title); // hooks must be called inside the component function, at the class level

  const clickHandler = () => {
    setTitle('Updated'); // we assign a new value by calling useState through its 2nd arg, setTitle()
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card> // Card is now a custom component defined by us and its values are defined by the {props.children} in Card.js
  );
}

export default ExpenseItem;
