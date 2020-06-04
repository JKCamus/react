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


 //   console.log("1",...mainInfo[mainTable]);
      //   console.log("222",subInfo[tableName]);
      // console.log("2",...subInfo[tableName]);
      // debugger
      let sameTags = [],
        res = []
      // debugger
      if (columnNumber === 1) {
        setCompareTable([
          ...new Set([...mainInfo[mainTable], ...subInfo[tableName]])
        ])
        console.log('compareTab', compareTable)
        sameTags = mainInfo[mainTable].filter((tags) =>
          subInfo[tableName].includes(tags)
        )
        // console.log("sameTags",sameTags);
        // console.log(columnNumber);
        sameTags.map((tag) =>
          res.push(mainTable + '.' + tag, tableName + '.' + tag)
        )
        // console.log('运行了1')
      } else {
        setCompareTable([
          ...new Set([...[compareTable], ...subInfo[tableName]])
        ])
        // compareTable=[...new Set([...[compareTable],...subInfo[tableName]])]
        console.log('运行了2compareTable', compareTable)

        sameTags = subInfo[tableName].filter((tags) =>
          compareTable.includes(tags)
        )
        sameTags.map((tag) => res.push(tableName + '.' + tag))
        console.log('运行了2', sameTags)
      }
      setColumn((column) => [...column, ...res])