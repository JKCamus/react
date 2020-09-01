import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends:[],
  newAlbums:[]
});
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // 配合存入数据
      // return { ...state, topBanners: action.topBanners };
      // 更改为immutable
      return state.set("topBanners",action.topBanners);
      case actionTypes.CHANGE_HOT_RECOMMEND:
        console.log('res',action.hotRecommends )
      return  state.set("hotRecommends",action.hotRecommends)
      case actionTypes.CHANGE_NEW_ALBUM:
      return  state.set("newAlbums",action.newAlbums)
    default:
      return state;
  }
}
export default reducer;
