import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

import moment from "moment";

test("trigger setStartDate action", () => {
  let action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("trigger setEndDate action", () => {
  let action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("trigger setTextFilter action with no data", () => {
  let action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("trigger setTextFilter action", () => {
  let action = setTextFilter("textFilter");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "textFilter",
  });
});

test("trigger sortByDate action", () => {
  let action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("trigger sortByAmount action", () => {
  let action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
