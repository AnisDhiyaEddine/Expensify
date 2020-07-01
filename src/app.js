import ReactDOM from "react-dom";
import React from "react";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";

import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

import configureStore from "./store/storeConfiguration";

import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
} from "./actions/filters";
let store = configureStore();
store.subscribe(() => {
  //  console.log(store.getState());
});
store.dispatch(addExpense({ description: "Water bill", amount: 20 }));
store.dispatch(
  addExpense({ description: "Gas bill", amount: 1000, createdAt: 100 })
);

let jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
