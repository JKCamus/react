/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-22 14:07:40
 * @LastEditors: camus
 * @LastEditTime: 2021-02-22 17:07:16
 */
import React from "react";
import { Redirect } from "react-router-dom";
const CustomHook = React.lazy(() => import("../pages/old/myHook"));
const Review = React.lazy(() => import("../pages/review"));
// import CustomHook from '../pages/old/myHook';
// import moduleName from '../pages/old/myHook'
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/custom-hook"></Redirect>,
  },
  {
    path: "/custom-hook",
    component: CustomHook,
  },
  {
    path: "/review",
    component: Review,
  },
];

export default routes;
