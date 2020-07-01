import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocus: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description,
    }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value.toString();
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      e.target.value = amount;

      this.setState(() => ({
        amount: parseFloat(amount) || 0,
      }));
    } else {
      this.setState(() => ({
        error: "invalid amount data",
      }));
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({
      createdAt,
    }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocus: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.description && this.state.amount) {
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
      this.setState(() => ({
        error: "",
      }));
    } else {
      this.setState(() => ({
        error: "Please provide the description and the amount",
      }));
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount"
          />
          <SingleDatePicker className="singleDatePicker"
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (Optional"
            defaultValue={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
