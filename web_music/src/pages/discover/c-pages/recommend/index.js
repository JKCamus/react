import React, { memo, useEffect } from "react";
import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

const JKRecommend = (props) => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={require("@/assets/img/七夕.png")}
              alt=""
              style={{ height: "80vh" }}
            />
          </div> */}
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
};

export default memo(JKRecommend);
