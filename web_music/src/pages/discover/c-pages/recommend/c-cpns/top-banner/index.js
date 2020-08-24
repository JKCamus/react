import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { Carousel } from "antd";

export default memo(function TopBanner() {
  // state相关代码
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgLocal, setImgLocal] = useState([
    "@/assets/img/1.jpg",
    "@/assets/img/2.jpg",
    "@/assets/img/3.jpg",
    "@/assets/img/4.jpg",
  ]);

  // redux相关代码，状态
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  //   其他hooks
  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getTopBannerAction());
    // getBanners()
  }, [dispatch]);
  //   如果将函数作为参数传递到下一个组件，中需要包裹useCallBack，对当前进行缓存，记忆,类似memories,使用后，当前函数永远指向同一个引用,
  //   useCallBack第一个参数是传入的函数，第二个为dev
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  //   其他业务逻辑
  //其实请求来的图片，加上地址后缀就会形成高斯模糊的效果 //imageView&blur=40x20普通网站图片也生效
  //   实际中，可能会碰到已经高斯模糊或者别的，需要进行indexOf判断是否有做拼接
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";
  // const bgImage = imgLocal + "?imageView&blur=40x20";
  //


  // 返回render
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay ref={bannerRef} beforeChange={bannerChange}>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    // src={`${require("@/assets/img/" + (index + 1) + ".jpg")}`}
                    alt
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
