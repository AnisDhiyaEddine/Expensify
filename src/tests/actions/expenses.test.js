import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
import { TestScheduler } from "jest";

test("trigger removeExpense action", () => {
  let action = removeExpense({ id: "hello and welcome" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "hello and welcome",
  });
});

test("trigger editExpense action", () => {
  let action = editExpense("ID", { updateOne: "you're my love" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "ID",
    updates: {
      updateOne: "you're my love",
    },
  });
});

test("trigger addEcxpense without data", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String), //Mocking the id
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});

test("trigger addExpense with data", () => {
  let expenseData = {
    description: "hello dear",
    note: "notes for professional",
    amount: 1000,
    createdAt: 0,
  };

  let action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
