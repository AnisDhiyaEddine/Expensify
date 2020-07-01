import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
test("render expense form with no data", () => {
  let wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("render expense form with data", () => {
  let expense = {
    description: "hello world",
    note: "notes for professionals",
    amount: 0,
    sortBy: "amount",
  };
  let wrapper = shallow(<ExpenseForm expense={expense} />);
  expect(wrapper).toMatchSnapshot();
});

test("render error for invalid form submission", () => {
  let wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault() {},
  });

  expect(wrapper.state("error")).toBe(
    "Please provide the description and the amount"
  );

  expect(wrapper).toMatchSnapshot();
});

test("set description on input change", () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = "hello dear";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
});

test("set note on textArea change", () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = "hello dear";
  wrapper.find("textarea").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("note")).toBe(value);
});

test("set amount with valid input", () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = 20.25;

  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });

  expect(wrapper.state("amount")).toBe(value);
});

test("expect an error while passing an invalid input", () => {
  let wrapper = shallow(<ExpenseForm />);
  let value = 20.202;
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("error")).toBe("invalid amount data");
});

test("test the onSubmit function", () => {
  let onSubmitSpy = jest.fn();
  let wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault() {},
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("test set new date onDateChange", () => {
  let wrapper = shallow(<ExpenseForm />);
  let now = moment().valueOf();
  wrapper.find(".singleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("set onCalendarFocus on onFocusChange", () => {
  let wrapper = shallow(<ExpenseForm />);
  wrapper.find(".singleDatePicker").prop("onFocusChange")({ focused: true });
  expect(wrapper.state("calendarFocus")).toBe(true);
});
