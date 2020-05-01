import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
/* 通过控制radio控制tables的显示 */
import {
  Table,
  Input,
  Button,
  Popconfirm,
  Form,
  Select,
  Icon,
  Radio
} from "antd";

class Selection1 extends React.Component {
  state = {
    value: 1
  };
  onChange = value => {
    console.log(`selected ${value}`);
  };

  onBlur() {
    console.log("blur");
  }

  onFocus() {
    console.log("focus");
  }

  onSearch(val) {
    console.log("search:", val);
  }
  /* 设置默认props */
  static defaultProps = {
    data: { list: [] }
  };
  render() {
    // let list=[]
    let list = this.props.data.list;
    // console.log(list[0]);
    return (
      <Select
        showSearch
        style={{ width: 100 }}
        defaultValue={list[0]}
        placeholder={this.props.placeholder}
        optionFilterProp="children"
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {list.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    );
  }
}

/* table */
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`
            }
          ],
          initialValue: record[dataIndex]
        })(
          <Input
            ref={node => (this.input = node)}
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
      index,
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

class EditableTable1 extends React.Component {
  constructor(props) {
    super(props);

    /*表头设置 */
    this.columns = [
      {
        title: "name",
        dataIndex: "name",
        /* 宽度设置 */
        width: 100,
        /* 是否可编辑 */
        editable: false
      },
      {
        title: "NumCondition",
        dataIndex: "NumCondition",
        width: 100
      },
      {
        title: "tabName",
        dataIndex: "tabName",
        width: 100
      },
      {
        title: "colName",
        dataIndex: "colName",
        width: 100
      },
      {
        title: "range",
        dataIndex: "range",
        width: 100
      },
      {
        title: "value",
        dataIndex: "value",
        editable: false,
        width: 150
      },
      {
        title: "operation",

        // render: (text, record) => console.log(record),
        dataIndex: "operation"

        //     this.state.dataSource.length <= 1 ? (
        //       <div>
        //  <Button
        //       onClick={this.handleAdd}
        //       type="primary"
        //       style={{ marginBottom: 16 }}
        //     >
        //       Add a row
        //     </Button>
        //       </div>
        //     ) :
        //     (     <Popconfirm
        //       title="Sure to delete?"
        //       onConfirm={() => this.handleDelete(record.key)}
        //     >
        //       <a>Delete
        //       </a>
        //     </Popconfirm>  )
      }
    ];

    this.state = {
      /* radio */
      value: 1,
      dataSource: [
        {
          key: "0",
          name: <Selection1 data={{ list: ["AND", "OR"] }} />,
          NumCondition: (
            <Selection1
              data={{ list: ["数值条件", "字符条件", "自定义条件"] }}
            />
          ),
          tabName: <Selection1 placeholder={"表名"} />,
          colName: <Selection1 placeholder={"列名"} />,
          range: (
            <Selection1
              data={{
                list: [
                  "小于(<)",
                  "小于等于(<=)",
                  "等于=",
                  "不等于(!=)",
                  "大于(>)",
                  "大于等于(>=)"
                ]
              }}
            />
          ),
          value: (
            <Input
              // width="100"
              // minLength='100'
              placeholder="值"
              suffix={
                <Icon type="profile" style={{ color: "rgba(0,0,0,.25)" }} />
              }
            />
          ),
          operation: (
            <Button
              onClick={this.handleAdd}
              type="primary"
              style={{ marginBottom: 16 }}
            >
              Add a row
            </Button>
          )
        }
        // {
        //   key: "1",
        //   name: <Selection1 data={{ list: ["AND", "OR"] }} />,
        //   NumCondition: "32",
        //   address: <Selection1 data={{ list: ["大于"] }} />
        // }
      ],
      count: 1
    };
  }
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;

    const newData = {
      key: count,
      name: <Selection1 data={{ list: ["AND", "OR"] }} />,
      NumCondition: (
        <Selection1 data={{ list: ["数值条件", "字符条件", "自定义条件"] }} />
      ),
      tabName: <Selection1 placeholder={"表名"} />,
      colName: <Selection1 placeholder={"列名"} />,
      range: (
        <Selection1
          data={{
            list: [
              "小于(<)",
              "小于等于(<=)",
              "等于=",
              "不等于(!=)",
              "大于(>)",
              "大于等于(>=)"
            ]
          }}
        />
      ),
      value: (
        <Input
          width="100"
          placeholder="值"
          suffix={<Icon type="profile" style={{ color: "rgba(0,0,0,.25)" }} />}
        />
      ),
      operation: (
        /* 点击确认删除后，执行删除，当前key值通过count拿到 */
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => this.handleDelete(count)}
          // onConfirm={() => console.log(this.state)}
        >
          <a>Delete</a>
        </Popconfirm>
      )
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>是</Radio>
          <Radio value={2}>否</Radio>
        </Radio.Group>
        {/* <Button
          onClick={this.handleAdd}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Add a row
        </Button> */}
        {this.state.value == 1 ? (
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
            // width={100}
            showHeader={false}
            pagination={false}
          />
        ) : null}
      </div>
    );
  }
}

export default EditableTable1;

// ReactDOM.render(<EditableTable />, mountNode);

// ReactDOM.render(<EditableTable />, document.getElementById("container"));
// NumCondition
