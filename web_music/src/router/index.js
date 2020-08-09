import JKDiscover from "pages/discover";
import JKFriend from "pages/friend";
import JKMine from "pages/mine";

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
