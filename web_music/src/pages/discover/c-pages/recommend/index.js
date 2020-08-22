import React, { memo, useEffect } from "react";
import TopBanner from "./c-cpns/top-banner";

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
    </RecommendWrapper>
  );
};

export default memo(JKRecommend);
