import React, { useState, useEffect, useContext, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form, Icon } from "antd";
function ViceTable() {
  return (
    <>
      {/* <Button
        type={'primary'}
        onClick={() => {
          handleATModal()
        }}
        style={{ margin: '10px 0' }}
      >
        新增关联表
      </Button> */}
      <Table dataSource={aTables}>
        <Column
          title="表名"
          dataIndex="tableName"
          key="tableName"
          width={150}
        />
        <Column
          title="字段"
          dataIndex="tableFields"
          key="tableFields"
          render={(tags, record, index) => (
            <span>
              {tags &&
                tags.map((tag) => {
                  const color = tag.length > 5 ? 'geekblue' : 'green'
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  )
                })}
            </span>
          )}
        />
        <ColumnGroup title="关联关系">
          <Column
            title="关联方向"
            align={'center'}
            dataIndex="connection"
            key="connection"
            render={(name) => {
              return <Tag color={'blue'}>{name}</Tag>
            }}
          />
          <Column
            title="字段关系"
            align={'center'}
            dataIndex="lr"
            key="lr"
            render={(obj) => {
              return (
                <>
                  <Tag color={'#52BE80'}>{obj ? obj.left : ''}</Tag>={' '}
                  <Tag color={'#9B59B6'}>{obj ? obj.right : ''}</Tag>
                </>
              )
            }}
          />
        </ColumnGroup>
        <Column
          title="操作"
          key="operation"
          align={'center'}
          render={(text, record, index) => {
            return (
              <span>
                <a onClick={() => handleATEdit(index)}>编辑</a>
                <Divider type="vertical" />
                <Popconfirm
                  title="所有关联表的数据也会丢失 ,确认删除?"
                  onConfirm={() => {
                    handleATDelete(index)
                  }}
                  okText="确定"
                  cancelText="取消"
                >
                  <a href="#">删除</a>
                </Popconfirm>
              </span>
            )
          }}
        />
      </Table>
    </>
  )
}

export default ViceTable
