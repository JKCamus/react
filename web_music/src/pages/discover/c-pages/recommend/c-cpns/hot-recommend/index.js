import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import JKThemeHeaderRCM from "@/components/theme-header-rcm";
import SongCover from '@/components/song-cover';

import { HotRecommendWrapper } from "./style";

import { getHotRecommendsAction } from "../../store/actionCreators";

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
    <HotRecommendWrapper>
      <JKThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></JKThemeHeaderRCM>
      <div className="recommend-list"> 
        {
          hotRecommends.map((item,index)=>{
          return <SongCover  key={item.id} info={item}></SongCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  );
});
