import { create } from "zustand";

export interface State {
  num: number;
  //   tabList:
}
export interface Action {
  handleClickAdd: (num: number) => void;
}

const useLeftContentStore = create<State & Action>((set) => ({
  num: 100,
  handleClickAdd: (num: number) => {
    return set((state) => {
      return { num: state.num + num };
    });
  },
}));

export default useLeftContentStore;
