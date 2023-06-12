import { combineReducers } from "redux";
import ReducerData from "./reducerData";




const rootReducer=combineReducers({
    Posts:ReducerData,
})
export default rootReducer