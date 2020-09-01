import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from 'antd';
import JKThemeHeaderRCM from "@/components/theme-header-rcm";

export default memo(function JKAlbum() {
  const newAlbums = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <div>
      <JKThemeHeaderRCM title="新碟上架"></JKThemeHeaderRCM>
      <div className="content">
          {/* <button className="arrow arrow-left sprite_02"></button>
          
          <button className="arrow arrow-right sprite_02"></button> */}
      </div>
      <br />
    </div>
  );
});
