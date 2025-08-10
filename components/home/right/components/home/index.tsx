import React, { useEffect } from "react";
import { getUser, createUser } from "@/app/api/home";
import dayjs from "dayjs";

const Home: React.FC = () => {
  const getTeacherData = async () => {
    const teachers = await getUser();
    console.log(teachers, "getUser");
  };
  const handleCreateUser = async () => {
    const param = {
      name: "344",
      id: Math.floor(Math.random()).toString(),
      phone: "12345656",
    };
    await createUser(param);
  };

  console.log(dayjs().format("YYYY/DD/MM"));

  useEffect(() => {
    getTeacherData();
  }, []);
  return (
    <div>
      <span></span>
      Home
      <div
        onClick={() => {
          handleCreateUser();
        }}
      >
        创建数据
      </div>
    </div>
  );
};

export default Home;
