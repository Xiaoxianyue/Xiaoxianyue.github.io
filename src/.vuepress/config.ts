import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "an istj's zone",
      description: "cheese cheese cheese!",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "an istj's zone",
      description: "哥们要进化成程序猿",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
