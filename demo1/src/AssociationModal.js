import React, { useState, useEffect, useContext, useRef } from "react";
import EditorTable from "./EditorTable";
import {
  Table,
  Input,
  Button,
  Popconfirm,
  Form,
  Icon,
  Modal,
  Card,
  Row,
  Col,
  Select,
} from "antd";
import "antd/dist/antd.css";
const { Option } = Select;
// interface AssociationModalProps {}

const AssociationModal/* : React.FC<AssociationModalProps>  */= (props) => {
  const [associationModalVisible, setAssociationModalVisible] = useState(false);
  const handleAssociationModal = (props) => {
    setAssociationModalVisible(true);
  };
  const handleAssociationModalOk = (props) => {
    setAssociationModalVisible(false);
  };
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
const colSize=6
  return (
    <div>
      <h1>我是modal</h1>
      <Button
        onClick={handleAssociationModal}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        点击modal
      </Button>
      <Modal
        title="创建关联表"
        visible={associationModalVisible}
        width={666}
        onCancel={() => {
          setAssociationModalVisible(false);
        }}
        onOk={handleAssociationModalOk}
      >
        <Row gutter={[0,24]}>
          <Col span={colSize}>
            <p style={{ marginBottom: "5px" }}>关联表名</p>
            <Select
              showSearch
              style={{ width: 100 }}
              placeholder="选择关联表"
              optionFilterProp="children"
              // 需要做类型修改
              // defaultValue={newSubModal ? undefined : backfill.tableName}
              onChange={(value) => {}}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {children}
            </Select>
          </Col>
          <Col span={colSize}>
            <p style={{ marginBottom: "5px" }}>关联方式</p>
            <Select
              showSearch
              style={{ width: 100 }}
              placeholder="选择关联表"
              optionFilterProp="children"
              // 需要做类型修改
              // defaultValue={newSubModal ? undefined : backfill.tableName}
              onChange={(value) => {}}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {children}
            </Select>
          </Col>
          <Col span={colSize}>
            <p style={{ marginBottom: "5px" }}>基准表字段</p>
            <Select
              showSearch
              style={{ width: 100 }}
              placeholder="选择关联表"
              optionFilterProp="children"
              // 需要做类型修改
              // defaultValue={newSubModal ? undefined : backfill.tableName}
              onChange={(value) => {}}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {children}
            </Select>
          </Col>
          <Col span={colSize}>
            <p style={{ marginBottom: "5px" }}>关联表字段</p>
            <Select
              showSearch
              style={{ width: 100 }}
              placeholder="选择关联表"
              optionFilterProp="children"
              // 需要做类型修改
              // defaultValue={newSubModal ? undefined : backfill.tableName}
              onChange={(value) => {}}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {children}
            </Select>
          </Col>
        </Row>
        <Row >
          <EditorTable />
        </Row>
      </Modal>
    </div>
  );
};

export default AssociationModal;
