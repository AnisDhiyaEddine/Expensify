import moment from "moment";

export default [
  {
    id: "1",
    description: "Hello",
    note: "",
    amount: 10,
    createdAt: 0,
  },
  {
    id: "2",
    description: "high tech",
    note: "",
    amount: 0,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "yepp",
    note: "",
    amount: 200,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
