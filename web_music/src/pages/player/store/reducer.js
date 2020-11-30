/* 转成不可变对象 */
import {Map} from "immutable";
/* 默认数据 */
import * as actionTypes from './constants';
import {changeCurrentSongAction} from './actionCreators';

const defaultState = Map({
  currentSong: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong",action.currentSong)
    default:
      return state;
  }
}
export default reducer;
