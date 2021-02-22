import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, Icon, message } from "antd";
const DroDown = () => {

  const handleButtonClick = (params) => {};

  const handleMenuClick = (params) => {

    console.log("点击",params);
    
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        图形化配置
      </Menu.Item>
      <Menu.Item key="2">
        SQL配置
      </Menu.Item>
      <Menu.Item key="3">
       还有一个即将...
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button type="primary">
          <Icon type="plus" />
          Button
        </Button>
      </Dropdown>
    </div>
  );
};

export default DroDown;
