import React, { useState, useEffect } from "react";
import { Input, Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const columns: TableColumnsType<DataType> = [
  {
    title: "名字",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  { title: "手机号", dataIndex: "address", key: "1" },
  { title: "绩效", dataIndex: "address", key: "2" },
  { title: "课时", dataIndex: "address", key: "3" },
  { title: "职位", dataIndex: "address", key: "4" },
  { title: "总工资", dataIndex: "address", key: "5" },
  { title: "入职日期", dataIndex: "address", key: "6" },
  { title: "转正日期", dataIndex: "address", key: "7" },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => (
      <div className=" flex gap-2">
        <Button
          onClick={() => {
            console.log("delete");
          }}
          danger
        >
          删除
        </Button>
        <Button
          onClick={() => {
            console.log("delete");
          }}
          type="primary"
        >
          编辑
        </Button>
        <Button
          onClick={() => {
            console.log("detail");
          }}
          type="primary"
        >
          详情
        </Button>
      </div>
    ),
  },
];

const dataSource: DataType[] = [
  { key: "1", name: "Olivia", age: 32, address: "New York Park" },
  { key: "2", name: "Ethan", age: 40, address: "London Park" },
  { key: "3", name: "Olivia", age: 32, address: "New York Park" },
  { key: "4", name: "Ethan", age: 40, address: "London Park" },
  { key: "5", name: "Olivia", age: 32, address: "New York Park" },
  { key: "6", name: "Ethan", age: 40, address: "London Park" },
  { key: "7", name: "Olivia", age: 32, address: "New York Park" },
];

const User = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
  });
  const { styles } = useStyle();

  useEffect(() => {
    console.log(inputValue, "inputValue11");
  }, []);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((state) => {
      return { ...state, name: e.target.value };
    });
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((state) => {
      return { ...state, phone: e.target.value };
    });
  };
  return (
    <div className=" p-[14px]">
      <div>首页</div>
      <div className=" pt-[20px] flex gap-5">
        <div className=" flex items-center">
          <div className=" w-[70px]">姓名</div>
          <Input onChange={onChangeName} placeholder="请输入姓名" />
        </div>
        <div className=" flex items-center">
          <div className=" w-[200px]">请输入手机号码</div>
          <Input onChange={onChangePhone} placeholder="请输入手机号码" />
        </div>
        <div className="  flex-1"></div>
        <div className=" flex items-center">
          <Button
            type="primary"
            onClick={() => {
              const param = inputValue;
              console.log(param, "查询");
            }}
            style={{ marginRight: "10px" }}
          >
            查询
          </Button>
          <Button
            onClick={() => {
              console.log("导出");
            }}
            type="primary"
          >
            导出
          </Button>
        </div>
      </div>
      <div className=" pt-[30px] w-full">
        <Table<DataType>
          className={styles.customTable}
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default User;
