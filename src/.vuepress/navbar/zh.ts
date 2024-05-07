import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "学校科目",
    icon: "style",
    link: "#",
  },
  {
    text: "编程语言",
    icon: "editor",
    children: [
      { 
        text: "Python", 
        icon: "",
        children: [
          {text:"课堂笔记", icon: "", link:""}
        ]
      
      },
      {
        text: "c#",
        icon: "xxx",
        children: [
          { text: "oop", icon: "xxx", link: "#"},
          
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
