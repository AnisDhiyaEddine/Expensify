import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import { setStartDate, setEndDate } from "../actions/filters";

export class ExpenseListFilter extends React.Component {
  state = {
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
    focusedInput: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);

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

  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value);
  };

  onSortByChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={this.onTextChange}
        />

        <select
          defaultValue={this.props.filters.sortBy}
          onChange={this.onSortByChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          className="DateRangePicker"
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

const mapStateToProps = (state) => ({
  filters: state.filters,
});
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);
