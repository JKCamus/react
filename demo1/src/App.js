import React, { Component, createContext, Suspense } from "react";

import TestTable from "./pages/old/father";
import MyHook from "./pages/old/myHook";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { HashRouter, NavLink } from "react-router-dom";
// import FormTable from './UpdateForm'

export const UserContext = createContext();
export const TokenContext = createContext();

export const ThemeContext = createContext();

export class App extends Component {
  render() {
    return (
      <div>
        <h1>hello everyone!</h1>

        {/* <HOCEnhance></HOCEnhance>
        <EditorTable></EditorTable>
        <AssociationModal></AssociationModal>
        <DroDown></DroDown> */}

        {/* <NavLink exact to="/about/culture" activeClassName="about-active">
          企业文化
        </NavLink> */}
        <HashRouter>
        <NavLink exact to="/custom-hook" >
          自定义hook
        </NavLink>
          <Suspense fallback={<div>page loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
        </HashRouter>
        {/* <TestTable></TestTable> */}
        {/* <MyHook></MyHook> */}
        {/* <UserContext.Provider value={}>
          <TokenContext.Consumer value={}>
            <MakeContextHook></MakeContextHook>
          </TokenContext.Consumer>
        </UserContext.Provider> */}
      </div>
    );
  }
}

export default App;
