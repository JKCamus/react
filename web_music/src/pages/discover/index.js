import React, { memo, useEffect } from "react";
import { logRoles } from "@testing-library/react";
import { renderRoutes } from "react-router-config";
import request from "@/services/request";

import { discoverMenu } from "common/local-data";
import { NavLink } from "react-router-dom";
import { DiscoverWrapper, TopMenu } from "./style";

export default memo(function JKDiscover(props) {
  useEffect(() => {}, []);
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {/* 挂载路由映射，route来自于props，同时需要引入renderRoutes，类似router-view */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});
