---
title: 06-元组
icon: python
date: 2024-8-05 11:46:21
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



## 1. 创建元组

- 使用小括号创建
- 里面的元素用英文逗号隔开

```python
tup = ('moon', 'in','taurus')
print(tup,type(tup))
#output
('moon', 'in', 'taurus') <class 'tuple'>
```

与列表区别：

- 列表用[]包裹，列表中元素可以被修改，添加，删除。
- 元组用()，元组中元素不可以被改变。

```python
tup = ('moon', 'in','taurus')
tup[0] = 1
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 2, in <module>
    tup[0] = 1
TypeError: 'tuple' object does not support item assignment
```



- 当元组只有一个元素：

```python
tup = ('moon')
print(type(tup))
#output
<class 'str'>

Solution
tup = tuple('moon')
print(type(tup))
#output
<class 'tuple'>
```



## 2. 列表元素提取

```python
tup = ('moon', 'in','taurus')
print(tup[0],tup[1],tup[2],tup[0::2],tup[1:])
print(tup[::-1])
#output
moon in taurus ('moon', 'taurus') ('in', 'taurus')
('taurus', 'in', 'moon')
```

















