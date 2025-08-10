export interface TabItemType {
  lable: string;
  isSelected: boolean;
  isActive?: boolean;
  component?: string;
  children?: TabItemType[];
}

export const tabList: TabItemType[] = [
  {
    lable: "首页",
    isSelected: true,
    isActive: true,
    component: "Home",
    children: [],
  },
  {
    lable: "概览",
    isSelected: false,
    isActive: false,
    component: "Summary",
    children: [],
  },
  {
    lable: "用户",
    isSelected: false,
    isActive: false,
    component: "User",
    children: [],
  },
  {
    lable: "九中校区",
    isSelected: false,
    isActive: false,
    children: [
      {
        lable: "素描",
        isSelected: false,
        isActive: true,
        component: "SchoolNineSketch",
      },
      {
        lable: "漫画",
        isSelected: false,
        isActive: false,
        component: "SchoolNineCartoon",
      },
      {
        lable: "少儿美术",
        isSelected: false,
        isActive: false,
        component: "SchoolNineChildArt",
      },
      {
        lable: "书法",
        isSelected: false,
        isActive: false,
        component: "SchoolNineWrite",
      },
    ],
  },
  {
    lable: "浮梁校区",
    isSelected: false,
    isActive: false,
    children: [
      {
        lable: "素描",
        isSelected: false,
        isActive: true,
        component: "FuLiangSketch",
      },
      {
        lable: "漫画",
        isSelected: false,
        isActive: false,
        component: "FuLiangCartoon",
      },
      {
        lable: "少儿美术",
        isSelected: false,
        isActive: false,
        component: "FuLiangChildArt",
      },
      {
        lable: "书法",
        isSelected: false,
        isActive: false,
        component: "FuLiangWrite",
      },
    ],
  },
];
