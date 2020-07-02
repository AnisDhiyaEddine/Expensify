import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";
let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();

  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      filters={filters}
    />
  );
});

test("render ExpenseListFilter with default filters", () => {
  expect(wrapper).toMatchSnapshot();
});

test("render ExpenseListFilter with custom filters", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

//handle on text change

test("test the text change filter", () => {
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: {
        value: "New text filter",
      },
    });
  expect(setTextFilter).toBeCalledWith("New text filter");
});

//sort by date
test("sortByDate", () => {
  wrapper.setProps({ filters: altFilters });

  wrapper.find("select").simulate("change", {
    target: {
      value: "date",
    },
  });
  expect(sortByDate).toHaveBeenCalled();
});

//sort by amount

test("sortByDate", () => {
  wrapper.find("select").simulate("change", {
    target: {
      value: "amount",
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

//handle date changes
test("handle date changes", () => {
  let startDate = moment(0).add(2, "days");
  let endDate = moment(0).add(5, "days");
  wrapper.find(".DateRangePicker").prop("onDatesChange")({
    startDate,
    endDate,
  });

  expect(setStartDate).toHaveBeenCalledWith(moment(0).add(2, "days"));
  expect(setEndDate).toHaveBeenCalledWith(moment(0).add(5, "days"));
});
//handle date focus changes

test("handle date changes", () => {
  wrapper.find(".DateRangePicker").prop("onFocusChange")("second");

  expect(wrapper.state("focusedInput")).toBe("second");
});
