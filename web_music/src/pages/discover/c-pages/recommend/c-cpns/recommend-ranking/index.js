import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import JKThemeHeaderRCM from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

import { getTopListAction } from "../../store/actionCreators";

export default memo(function JKRecommendRanking() {
  const { originRanking, upRanking, newRanking } = useSelector((state) => ({
    originRanking: state.getIn(["recommend", "originRanking"]),
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <JKThemeHeaderRCM title="榜单"></JKThemeHeaderRCM>
      <div className="tops">
        <TopRanking info={newRanking}></TopRanking>
        <TopRanking info={upRanking}></TopRanking>
        <TopRanking info={originRanking}></TopRanking>
      </div>
    </RankingWrapper>
  );
});
