import React, { useState } from "react";

import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
};

export default ExpenseItems;
