import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  return (
    <div>
      <NavLink to={`/edit/${id}`}>
        <h3>{description}</h3>
      </NavLink>
      <p>Amount : {amount}</p>
      <p>CreatedAt : {createdAt}</p>
    </div>
  );
};

export default connect()(ExpenseListItem);
