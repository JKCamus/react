import React, { useState, useEffect, useContext, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form, Icon } from "antd";

function ChildTable() {
  const       dataSource=[
    { role: '演示角色', area1: 'area1', area2: 'area2' },
    { role: '测试角色', area1: 'area3', area2: 'area4' }
  ]
 const columns= [
    {
      title: '角色',
      dataIndex: 'role'
    },
    {
      title: '变量值设置',
      children: [
        {
          title: 'area-1',
          dataIndex: `area1`,
          key: 'area-1'
        },
        {
          title: 'area-2',
          dataIndex: `area2`,
          key: 'area-2'
        }
      ]
    },
    {
      title: '可见字段',
      render() {
        return <Tag>全部可见</Tag>
      }
    }
  ],
  return (
    <div>
              <Table
          bordered
          rowKey="roleId"
          pagination={false}
          columns={columns}
          // scroll={authScroll}
          dataSource={dataSource}
          // components={components}
          // rowClassName={() => 'editable-row'}
          // bordered
          // dataSource={dataSource}
          // columns={columns}
        />
    </div>
  )
}

export default ChildTable
