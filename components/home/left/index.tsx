"use client";

import React from "react";
import classnames from "classnames";
import useLeftContentStore from "@/store/home/useLeftContentStore";

const LeftContent = () => {
  const { tabList, changeOutActive, changeInnerActive } = useLeftContentStore();

  return (
    <div className=" w-[200px] bg-white h-full">
      <div className="">
        {tabList.map((item, idx) => {
          return (
            <div key={idx}>
              <div
                onClick={() => {
                  changeOutActive(idx);
                }}
                className={classnames(
                  " text-[18px] mp-[10px] font-bold flex justify-between py-[10px]",
                  item.isActive && " text-blue-400"
                )}
              >
                <div className=" ml-[10px]">{item.lable}</div>
                {item.children?.length !== 0 && (
                  <div className=" mr-[10px]">{item.isActive ? "+" : "-"}</div>
                )}
              </div>
              {item.isActive && (
                <div className=" bg-white">
                  {item.children?.map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className={classnames(
                          "pl-[14px] py-[6px] mx-[10px]",
                          ele.isActive && "bg-blue-300 text-white"
                        )}
                        onClick={() => {
                          changeInnerActive(idx, index);
                        }}
                      >
                        {ele.lable}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftContent;
