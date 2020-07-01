import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("setup default state based on default action", () => {
  let state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  });
});

test("test the setTextFilter case", () => {
  let state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "Hello world",
  });

  expect(state).toEqual({
    text: "Hello world",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  });
});

test("test the sortByAmount case", () => {
  let state = filtersReducer(undefined, {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });

  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  });
});

test("test the sortByDate case", () => {
  let defaultState = {
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
    text: "",
  };
  let state = filtersReducer(defaultState, {
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  });
});

test("test the setStartDate case", () => {
  let state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0).valueOf(),
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment(0).valueOf(),
    endDate: undefined,
  });
});

test("test the setEndDate case", () => {
  let state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0).valueOf(),
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).valueOf(),
  });
});
