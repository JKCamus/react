import React, { useState, useMemo, useEffect } from "react";
import { Button } from "antd";
import CreateForm from "./UpdateForm";
import SelectAll from './SelectAll'

const TableList = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <CreateForm></CreateForm>
      {/* {current === 0 ? <div><W2></W2></div> : undefined} */}
      <div style={{ visibility: current === 0 ? `visible` : `hidden` }}></div>
      <button onClick={(e) => setCurrent(1)}>消失</button>
      <button onClick={(e) => setCurrent(0)}>出现</button>
      <SelectAll></SelectAll>

      {/* 
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>show切换</button> */}
    </div>
  );
};

export default TableList;
