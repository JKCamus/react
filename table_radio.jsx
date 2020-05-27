import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Divider, Tag, Radio } from "antd";

class FromRadio extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  sayLog = () => {
    console.log();
  };
  componentWillMounte() {}
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
    // render: a => <a>{a}</a>,
  },

  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <span>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </span>
  //   ),
  // },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    )
  },
  {
    title: "woca",
    key: "wocao",
    dataIndex: "age",
    render: (text, record) => {
      //  return <span>{record.age}</span>
      return (
        <Radio.Group
          size="small"
          value={Math.floor(Math.random(0, 1)+0.5)}
          onChange={() => {
            console.log(Math.floor(Math.random(0, 1)+0.5));
          }}
                >
          <Radio value={0}>{record.age}</Radio>
          <Radio value={1}>显示</Radio>
        </Radio.Group>
      );
    }
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

ReactDOM.render(
  <Table columns={columns} dataSource={data} />,
  document.getElementById("container")
);
