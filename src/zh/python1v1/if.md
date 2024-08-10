---
title: 10-条件判断
icon: python
date: 2024-8-10 22:42:31
author: XiaoXianYue
isOriginal: true
category: 
    - 课堂笔记
tag:
    - 课堂笔记
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 1. 代码的缩进

用==四个空格==或者==一个 tab==来表示缩进。不要混用。

相同的缩进位置表示一个代码块。

例子：

```python
user_gender = input("Enter your gender(F/M):")
if user_gender == "F":
    print("pink")
elif user_gender == "M":
    print("blue")
else:
    print("blank")
```

::: info

else 后面不可以跟条件。

:::



