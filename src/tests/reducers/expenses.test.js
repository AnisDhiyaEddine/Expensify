import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";
import moment from "moment";
test("test default case", () => {
  let state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("test addExpense case", () => {
  let expense = {
    id: 100,
    description: "Hello",
    amount: 10,
  };
  let state = expensesReducer(expenses, { type: "ADD_EXPENSE", expense });

  expect(state).toEqual([...expenses, expense]);
});

test("test removeExpense case", () => {
  let action = {
    type: "REMOVE_EXPENSE",
    id: "2",
  };
  let state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("test editExpense case", () => {
  let action = {
    type: "EDIT_EXPENSE",
    id: "2",
    updates: {
      description: "hello world",
      amount: 1000,
    },
  };
  let state = expensesReducer(expenses, action);
  expenses[1] = {
    id: "2",
    description: "hello world",
    note: "",
    amount: 1000,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  };
  expect(state).toEqual(expenses);
});

//Basic test cases
