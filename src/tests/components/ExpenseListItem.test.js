import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("render item with the right data", () => {
  let expense = expenses[0];
  let wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
