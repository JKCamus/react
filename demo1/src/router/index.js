/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-22 14:07:40
 * @LastEditors: camus
 * @LastEditTime: 2021-02-22 15:52:51
 */
import React from "react";
import { Redirect } from "react-router-dom";
// const CustomHook = React.lazy(() => import("@/pages"));
import CustomHook from '../pages/old/myHook';
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
];

export default routes;
