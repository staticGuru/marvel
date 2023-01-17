import { combineReducers } from "redux";

import characterReducer from "./Character/Character.reducers";

const rootReducer = combineReducers({
  marvel: characterReducer,
});

export default rootReducer;