import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
export const ExpenseDashboardPage = () => (
  <div>
    <h1>This is from the app dashboard page</h1>
    {<ExpenseListFilter />}
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
