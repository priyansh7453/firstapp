import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const [amount, setamount] = useState(props.amount);

  const Changeamt = () => {
    setamount(amount + 100);
    console.log(amount);
  };

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button>
      <button onClick={Changeamt}>Change amount</button> */}
    </Card>
  );
};

export default ExpenseItem;
