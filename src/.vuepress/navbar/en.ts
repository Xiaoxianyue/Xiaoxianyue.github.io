import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "fooddd",
    icon: "style",
    link: "#",
  },
  {
    text: "learninggg",
    icon: "editor",
    children: [
      { 
        text: "English", 
        icon: "",
        children: [
          {text:"IELTS", icon: "", link:""}
        ]
      
      },
      {
        text: "math",
        icon: "xxx",
        children: [
          { text: "Probability theory", icon: "xxx", link: "#"},
        ]
      }
    ]
  },
  {
    text:"kittyyy",
    icon:"github",
    link:"",

  }
]);
