import { combineReducers } from "redux-immutable";
// import {combineReducers} from 'redux';
// 设置别名，避免重复
import { reducer as recommendReducer } from "pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});

export default cReducer;
