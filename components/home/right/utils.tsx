// get curent active component
import { TabItemType } from "@/store/home/data";

export const getCurComponent = (tabList: TabItemType[]) => {
  let res: string | undefined = "";
  for (let i = 0; i < tabList.length; i++) {
    const curItem = tabList[i];
    if (curItem.isActive && !curItem.children?.length) {
      res = curItem.component;
      break;
    }
    if (curItem.isActive && curItem.children?.length) {
      for (let j = 0; j < curItem.children.length; j++) {
        const temp = curItem.children[j];
        if (temp.isActive) {
          res = temp.component;
          break;
        }
      }
    }
  }
  return res;
};
