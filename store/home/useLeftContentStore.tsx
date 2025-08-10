import { create } from "zustand";
import { tabList, TabItemType } from "./data";

export interface State {
  num: number;
  tabList: TabItemType[];
}
export interface Action {
  handleClickAdd: (num: number) => void;
  changeOutActive: (idx: number) => void;
  changeInnerActive: (idx1: number, idx2: number) => void;
}

const useLeftContentStore = create<State & Action>((set) => ({
  num: 100,
  tabList,
  handleClickAdd: (num: number) => {
    return set((state) => {
      return { num: state.num + num };
    });
  },
  changeOutActive: (idx: number) => {
    return set((state) => {
      state.tabList.forEach((item, index) => {
        if (idx === index) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        // all inner tab should remove the active color
        item.children?.forEach((ele, idx) => {
          if (idx === 0) {
            ele.isActive = true;
          } else {
            ele.isActive = false;
          }
        });
      });
      return { tabList: state.tabList };
    });
  },
  changeInnerActive: (idx1: number, idx2: number) => {
    return set((state) => {
      state.tabList.forEach((item, index1) => {
        item.children?.forEach((ele, index2) => {
          if (index1 === idx1) {
            if (idx2 === index2) {
              ele.isActive = true;
            } else {
              ele.isActive = false;
            }
          } else {
            ele.isActive = false;
          }
        });
      });
      return { tabList: state.tabList };
    });
  },
}));

export default useLeftContentStore;
