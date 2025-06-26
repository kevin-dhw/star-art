"use client";

import React from "react";
import useLeftContentStore from "@/store/pretected/useLeftContentStore";
import Home from "@/components/protected/right/components/home";
import Summary from "@/components/protected/right/components/summary";
import User from "@/components/protected/right/components/user";
import SchoolNineCartoon from "@/components/protected/right/components/schoolNine/cartoon";
import SchoolNineChildArt from "@/components/protected/right/components/schoolNine/childArt";
import SchoolNineSketch from "@/components/protected/right/components/schoolNine/sketch";
import SchoolNineWrite from "@/components/protected/right/components/schoolNine/write";
import { getCurComponent } from "./utils";

const RightContent = () => {
  const { tabList } = useLeftContentStore();
  const component = getCurComponent(tabList);

  return (
    <div className=" bg-white h-full">
      {component === "Home" && <Home />}
      {component === "Summary" && <Summary />}
      {component === "User" && <User />}
      {component === "SchoolNineCartoon" && <SchoolNineCartoon />}
      {component === "SchoolNineChildArt" && <SchoolNineChildArt />}
      {component === "SchoolNineSketch" && <SchoolNineSketch />}
      {component === "SchoolNineWrite" && <SchoolNineWrite />}
    </div>
  );
};

export default RightContent;
