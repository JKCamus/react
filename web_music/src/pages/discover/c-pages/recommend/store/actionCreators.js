import * as actionTypes from "./constants";
// 引入自发送请求相关
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from "services/recommend";

const changeTopBannerAction = (res) => ({
  // 获取数据存入对应的state中
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

//请求数据action，在使用的组件中，通过mapDispatchToProps进行分发
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

export function getNewAlbumAction(limit) {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
}

export function getTopListAction(idx) {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));

          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
}
