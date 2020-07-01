import selector from "../../selectors/expenses";
import moment from "moment";
import expences from "../fixtures/expenses";

test("filter by text", () => {
  let filters = {
    text: "h",
    sortBy: "date",
    startDate: moment(0).subtract(10, "days").valueOf(),
    endDate: moment(0).add(10, "days").valueOf(),
  };
  let result = selector(expences, filters);
  expect(result).toEqual([expences[0], expences[1]]);
});

test("filter by startDate", () => {
  let filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).subtract(2, "days").valueOf(),
    endDate: moment(0).add(10, "days").valueOf(),
  };

  let result = selector(expences, filters);
  expect(result).toEqual([expences[2], expences[0]]);
});

test("filter by EndDate", () => {
  let filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).subtract(10, "days").valueOf(),
    endDate: moment(0).add(2, "days").valueOf(),
  };

  let result = selector(expences, filters);
  expect(result).toEqual([expences[0], expences[1]]);
});

test("filter by all filters", () => {
  let filters = {
    text: "h",
    sortBy: "date",
    startDate: moment(0).subtract(2, "days").valueOf(),
    endDate: moment(0).add(2, "days").valueOf(),
  };

  let result = selector(expences, filters);
  expect(result).toEqual([expences[0]]);
});

test("sort by amount", () => {
  let filters = {
    text: "",
    sortBy: "amount",
    startDate: moment(0).subtract(10, "days").valueOf(),
    endDate: moment(0).add(10, "days").valueOf(),
  };

  let result = selector(expences, filters);
  expect(result).toEqual([expences[2], expences[0], expences[1]]);
});
