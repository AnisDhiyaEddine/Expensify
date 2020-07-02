import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>his is from the add expense page</h1>
        <ExpenseForm className="ExpenseForm" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
