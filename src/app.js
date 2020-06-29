import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
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
import getVisibleExpenses from "./selectors/expenses";
let store = configureStore();
store.subscribe(() => {
  //  console.log(store.getState());
});
store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("Water"));

let visibleExpenses = getVisibleExpenses(store);
console.log(visibleExpenses);
ReactDOM.render(AppRouter, document.getElementById("app"));
