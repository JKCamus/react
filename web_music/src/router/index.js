import React from "react";

import JKDiscover from "pages/discover";
import JKMine from "pages/mine";
import JKFriend from "pages/friend";
/* discover子路由 */
import JKRecommend from "pages/discover/c-pages/recommend";
import JKRanking from "../pages/discover/c-pages/ranking";
import JKSongs from "../pages/discover/c-pages/songs";
import JKDjRadio from "../pages/discover/c-pages/djradio";
import JKArtist from "../pages/discover/c-pages/artist";
import JKAlbum from "../pages/discover/c-pages/album";

import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    // component: JKDiscover,
    render: () => (
      <Redirect to="/discover" /> //刚进入时，重定向，到discover，需要引入react
    ),
  },
  {
    path:"/discover",
    component: JKDiscover,
    routes:[
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: JKRecommend,
      },
      {
        path: "/discover/ranking",
        component: JKRanking,
      },
      {
        path: "/discover/songs",
        component: JKSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: JKDjRadio,
      },
      {
        path: "/discover/artist",
        component: JKArtist,
      },
      {
        path: "/discover/album",
        component: JKAlbum,
      },
    ],
  },
  {
    path: "/mine",
    exact: true,
    component: JKMine,
  },
  {
    path: "/friend",
    exact: true,
    component: JKFriend,
  },
];
export default routes;
