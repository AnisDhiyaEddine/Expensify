import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm
          className="ExpenseForm"
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={(e) => {
            this.props.removeExpense(this.props.expense.id);
            this.props.history.push("/");
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
  id: props.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (id) => dispatch(removeExpense({id})),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
