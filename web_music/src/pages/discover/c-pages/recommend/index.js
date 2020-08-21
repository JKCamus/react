import React, { memo, useEffect } from "react";
import { connect} from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";
import {useSelector,useDispatch,shallowEqual} from 'react-redux'

const JKRecommend = (props) => {
const {topBanners}=useSelector(state=>({
  topBanners:state.getIn(["recommend","topBanners"])
}),shallowEqual)
const dispatch=useDispatch()

useEffect(() => {
  dispatch(getTopBannerAction())
  // getBanners()
  
}, [dispatch])
  return (
    <div>
      <h1>{topBanners.length}</h1>
    </div>
  );
};



export default memo(JKRecommend);
