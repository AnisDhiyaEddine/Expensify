import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpences from "../selectors/expenses";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpenseList = (props) => (
  <div>
    {<ExpenseListFilter />}
    <h1> Expenses list</h1>
    {props.expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpences(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
