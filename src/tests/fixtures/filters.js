import moment from "moment";

export let filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

export let altFilters = {
  text: "darling",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add(5, "days"),
};
