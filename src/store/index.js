import { createStore, combineReducers } from "redux";
import AppReducer from "./App.reducer";

const reducers = combineReducers({
  App: AppReducer,
});

const store = createStore(reducers);

export default store;
