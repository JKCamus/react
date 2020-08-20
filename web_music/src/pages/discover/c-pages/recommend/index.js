import React, { memo, useEffect } from "react";
import { connect} from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";
import { getTopBanners } from '@/services/recommend';

const JKRecommend = (props) => {
  const {topBanners,getBanners}=props
useEffect(() => {
  getBanners()
  
}, [])
  return (
    <div>
      <h1>recommend1111</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});
const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(JKRecommend));
