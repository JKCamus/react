import React, { Component } from 'react'
import HOCEnhance from './HOC_enhance_props'
import EditorTable from './EditorTable.js'
import AssociationModal from './AssociationModal.js'
import DroDown from './DroDown.js'
import TestTable from './father'
import MyHook from './myHook'
// import FormTable from './UpdateForm'

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
      </div>
    )
  }
}

export default App
