import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import appReducer from "./reducers";
import thunk from "redux-thunk";

const middleWares = [logger, thunk];
const store = createStore(appReducer, applyMiddleware(...middleWares));

export default store;
