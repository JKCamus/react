import React, { memo } from "react";

import JKThemeHeaderRCM from "@/components/theme-header-rcm";

import {RankingWrapper} from "./style";
export default memo(function JKHotRecommend() {
  return (
    <RankingWrapper>
      <JKThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      ></JKThemeHeaderRCM>
    </RankingWrapper>
  );
});
