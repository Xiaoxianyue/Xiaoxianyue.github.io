import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "吃了啥",
    icon: "style",
    link: "#",
  },
  {
    text: "学了啥",
    icon: "editor",
    children: [
      { 
        text: "英语", 
        icon: "",
        children: [
          {text:"雅思", icon: "", link:""}
        ]
      
      },
      {
        text: "数学",
        icon: "xxx",
        children: [
          { text: "概率论", icon: "xxx", link: "#"},
          { text: "概率论", icon: "xxx", link: "#"},
        ]
      }
    ]
  },
  {
    text:"小猫",
    icon:"github",
    link:"",

  }
]);
