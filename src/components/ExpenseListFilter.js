import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import { setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilter extends React.Component {
  state = {
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
    focusedInput: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));

    this.setState(() => ({
      startDate,
      endDate,
    }));
  };

  onFocusChange = (focusedInput) => {
    this.setState(() => ({
      focusedInput,
    }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={(event) => {
            this.props.dispatch(setTextFilter(event.target.value));
          }}
        />

        <select
          defaultValue={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          endDateId={v4()}
          startDateId={v4()}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
