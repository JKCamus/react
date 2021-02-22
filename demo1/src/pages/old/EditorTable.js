import React, { useState, useEffect, useContext, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form, Icon } from "antd";

// interface EditableCellProps {
//   form: any;
//   record: {};
//   dataIndex: string;
//   title: string;
//   editable: boolean;
//   handleSave: (value) => void;
// }
// interface EditableTableState {
//   dataSource: any[];
//   count: number;
// }

const EditableContext = React.createContext(null);

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = (e) => {
    const { record, handleSave } = this.props;
    console.log(this.props);

    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = (form) => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(
          <Input
            ref={(node) => (this.input = node)}
            onPressEnter={this.save}
            onBlur={this.save}
          />
        )}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      // index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

class EditableTable extends React.Component {


  constructor(props) {
    super(props);
    this.state={
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          age: "32",
          address: "London, Park Lane no. 0",
        },
        {
          key: "1",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1",
        },
      ],
      count: 2,
    }
    this.columns = [
      {
        title: "描述",
        dataIndex: "age",
      },
      {
        title: "字段名",
        dataIndex: "address",
      },
      {
        title: "别名",
        dataIndex: "name",
        width: "30%",
        editable: true,
        render: (text, record) => {
          return (
            <span>
              <Icon
                type="smile"
                theme="twoTone"
                style={{ marginRight: "10px" }}
              />
              <span>{text}</span>
            </span>
          );
        },
      },
      // {
      //   title: "operation",
      //   dataIndex: "operation",
      //   render: (text, record) =>
      //     this.state.dataSource.length >= 1 ? (
      //       <Popconfirm
      //         title="Sure to delete?"
      //         onConfirm={() => this.handleDelete(record.key)}
      //       >
      //         <a>Delete</a>
      //       </Popconfirm>
      //     ) : null,
      // },
    ];
  }
  // handleDelete = (key) => {
  //   const dataSource = [...this.state.dataSource];
  //   this.setState({
  //     dataSource: dataSource.filter((item) => item.key !== key),
  //   });
  // };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User", // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          bordered={false}
          pagination={false}
          components={components}
          rowClassName={() => "editable-row"}
          dataSource={dataSource}
          columns={columns}
          scroll={{ y: 240 }}
        />
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
      </div>
    );
  }
}
export default EditableTable;
