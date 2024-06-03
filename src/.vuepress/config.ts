import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "CHEESE",
      description: "cheese cheese cheese!",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "奶酪奶酪",
      description: "CS我跟你爆了",
    },
  },

  theme,
  markdown: {
    headers: {
      level: [1, 2, 3, 4, 5, 6],
    }
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
