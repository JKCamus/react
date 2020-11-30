import React, { useState, memo, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSongDetailAction } from "../store/actionCreators";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";

import { Slider } from "antd";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function Player(props) {
  // props&&state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  /* 正在调整进度条，停止歌曲播放标志位 */
  const [isChange, setIsChange] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // redux hooks
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["player", "currentSong"]),
  }));

  // other hooks
  const dispatch = useDispatch();
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  const changeSequence = (params) => {};
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  /* other handle */
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  /* handle func */
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChange) {
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }
  };
  const sliderChange = useCallback(
    (value) => {
      setIsChange(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
      // console.log("value", value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      // const currentTime = ((value / 100) * duration) / 1000;
      // audioRef.current.currentTime = currentTime;
      // setCurrentTime(currentTime * 1000);
      setIsChange(false);
      // console.log("value", value);
    },
    [duration]
  );
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider"></span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)}></audio>
    </PlaybarWrapper>
  );
});
