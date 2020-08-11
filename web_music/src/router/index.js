import JKDiscover from "pages/discover";
import JKMine from "pages/mine";
import JKFriend from "pages/friend";

const routes = [
  {
    path: "/",
    exact: true,
    component: JKDiscover,
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
