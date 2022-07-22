import { combineReducers } from "redux";
import Countereducer from "./Reducer";



const Rootreducer = combineReducers({
    counter : Countereducer 
})
export default Rootreducer;