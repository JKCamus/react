import React, { useState } from "react";
import { Select, Button, Divider, Modal, Form, Checkbox, message } from "antd";
const { Option } = Select;
interface optionT {
  key: string;
  label: string;
}
// FormComponentProps
const SelectAll = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const { form } = props;
  const { getFieldDecorator, setFieldsValue, validateFields } = form;
  const children: optionT[] = [];
  for (let i = 10; i < 36; i++) {
    const value = {
      key: i.toString(36) + i,
      label: i.toString(36) + i,
    };
    children.push(value);
  }
  const handleOk = () => {
    validateFields((err, value) => {
      if (err) {
        return;
      } else {
        /* selectAll可以定为最后提交数据的那个字段需做处理获得其value */
        // console.log("这里是表单所有数据", value);
        setFormVisible(false);
        message.info(`这里是表单所有数据：${JSON.stringify(value)}`, 3);
      }
    });
  };
  return (
    <>
      <Divider style={{ marginBottom: "10px" }}></Divider>
      <Button onClick={() => setFormVisible(true)}> 表单弹出</Button>
      <Modal
        visible={formVisible}
        title={"全选"}
        onCancel={() => setFormVisible(false)}
        onOk={() => handleOk()}
      >
        <Form.Item label="selectAll" key={"selectAll"}>
          {getFieldDecorator("selectAll", {
            rules: [{ required: true, message: "Choose what you like" }],
          })(
            <Select
              mode="multiple"
              labelInValue={true}
              placeholder="Please select"
              style={{ width: "80%" }}
              dropdownRender={(menu) => {
                return (
                  <div>
                    <div
                      style={{ padding: "4px 8px 8px 8px", cursor: "pointer" }}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked === true) {
                            /* outValues为自己请求所得数据，注意，key为字符串否则不会回填和打钩
                            容易造成key值重复，所以表单获得的数据的key也为字符串
                             */
                            // const realValues = outValues.map((item) => {
                            //   return {
                            //     key: `${item.id}`,
                            //     label: item.value,
                            //   };
                            // });
                            setFieldsValue({
                              selectAll: children,
                            });
                          } else {
                            setFieldsValue({
                              selectAll: [],
                            });
                          }
                        }}
                      >
                        全选
                      </Checkbox>
                    </div>
                    <Divider style={{ margin: "2px 0" }} />
                    {menu}
                  </div>
                );
              }}
            >
              {children.map((item) => {
                return <Option key={item.key}>{item.label}</Option>;
              })}
            </Select>
          )}
        </Form.Item>
      </Modal>
    </>
  );
};

export default Form.create()(SelectAll);
