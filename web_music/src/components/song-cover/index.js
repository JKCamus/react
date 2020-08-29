import React, { memo } from "react";
import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-utils";

export default memo(function JKSongCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className=" cover-bottom text-nowrap">
        by {info.copywriter || info.create.nickname}
      </div>
    </SongsCoverWrapper>
  );
});
