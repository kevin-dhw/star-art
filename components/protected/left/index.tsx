"use client";

import React from "react";
import useLeftContentStore from "@/store/pretected/useLeftContentStore";

const LeftContent = () => {
  const { num } = useLeftContentStore();
  return (
    <div>
      <span></span>
      LeftContent
      {num}
    </div>
  );
};

export default LeftContent;
