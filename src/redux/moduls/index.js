import { combineReducers } from "redux";
import reducerIsActiveM from "./toglerMenu/reducer/index";
import reducerLang from "./language/reducer";

const rootReducer = combineReducers({ reducerIsActiveM, reducerLang });
export default rootReducer;
