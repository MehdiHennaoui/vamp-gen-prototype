import { createStore, combineReducers } from "redux";
import visibleExplanations from "./reducers";

const reducers = combineReducers({ visibleExplanations });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
