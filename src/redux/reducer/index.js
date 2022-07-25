import { combineReducers } from "redux";
import countereducer from "./Reducer";


const rootreducer = combineReducers({
    counter : countereducer
})

export default rootreducer;