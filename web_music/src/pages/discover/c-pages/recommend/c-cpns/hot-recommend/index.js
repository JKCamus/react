import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import JKThemeHeaderRCM from "@/components/theme-header-rcm";
import moduleName from '@/components/song-cover';

import { getHotRecommendsAction } from "../../store/actionCreators";

import { RankingWrapper } from "./style";
export default memo(function JKHotRecommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <JKThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></JKThemeHeaderRCM>
      <div className="recommend-list"> 
        {
          hotRecommends.map((item,index)=>{
          return <div  key={item.id}>{item.name}</div>
          })
        }
      </div>
    </RankingWrapper>
  );
});
