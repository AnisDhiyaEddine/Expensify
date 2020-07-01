import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpences from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expense found</p>
    ) : (
      props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    )}
    {}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpences(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
