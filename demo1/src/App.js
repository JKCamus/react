import React, { Component, createContext } from "react";
import HOCEnhance from "./HOC_enhance_props";
import EditorTable from "./EditorTable.js";
import AssociationModal from "./AssociationModal.js";
import DroDown from "./DroDown.js";
import TestTable from "./father";
import MyHook from "./myHook";
import MakeContextHook from "./MakeContextHook.js";
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
        <TestTable></TestTable>
        {/* <FormTable></FormTable> */}
        <MyHook></MyHook>
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
