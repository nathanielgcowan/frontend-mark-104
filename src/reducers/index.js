import { combineReducers } from "redux";
import bandsReducer from './bandReducer';

export default combineReducers({
    bands: bandsReducer
})