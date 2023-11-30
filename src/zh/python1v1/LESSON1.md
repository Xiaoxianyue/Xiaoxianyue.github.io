---
title: 01-变量 Variable
icon: alias
date: 2023-11-30 20:22:40
author: XiaoXianYue
isOriginal: true
category: 
    - 课堂笔记
    - 课后回顾&练习
tag:
    - 课堂笔记
    - 课后回顾&练习
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

## 1. 如何创建笔记

- 文件取名：文件名不能空格，要用–或_代替

- 自动生成日期：[https://bornforthis.cn/python/#/](https://bornforthis.cn/python/#/)

- 在笔记上创建链接`[链接名称](链接)`

- 标题分级： 二级标题 ##+空格+（标题号）

    三级标题###+空格+（标题号)

    …..以此类推

## 2. 变量

### 2.1 从字面意思理解变量

- 变：变化
- 量：大小

#### 2.1.1 Austin 与 Jaden例子

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
Cup = Austin
Austin = Jaden
Jaden = Cup
print("Austin", Austin)
print("Jaden", Jaden)
```

### 2.2  如何创建变量

#### 2.2.1 程序的运行逻辑：从上到下，从右到左，最后才是赋值

#### 2.2.2 变量的赋值

```python
x = 1 #1赋值给x
x = x + 1 #x代表1， 所以x + 1 = 2 最后2赋值给x
print(x) #井号注释 快捷键：Ctrl键+/
#变量的覆盖：
name1 = "lilei"
name1 = "xiaoxianyue"
print(name1)
```

#### 2.2.3输出结果换行与不换

```python
a = 1
b = 1
c = 1
print(a)
print(b)
print(c)
#输出结果不换行
a = 1
b = 1
c = 1
print(a, b, c) #输出默认以空格间隔
```

### 2.2.4 end 与 sep

```python
#输出结果怎么手动换行？(end):
a = 1
b = 1
c = 1
print(a, end="\n") #end控制语句的结尾，\n表示 a new line
print(b)
print(c)
#(sep):
a = 1
b = 1
c = 1
print(a, b, c) #输出默认以空格间隔 怎么改空格？
print(a, b, c, sep= "okokok")#sep控制间隔
#end 与 sep可以同时使用
```



### 2.3进阶的赋值方法

#### 2.3.1 同时给多个变量赋予同一个内容

```python
a = b = c = 100
```



#### 2.3.2 同时给多个变量赋予不同的内容

```python
a, b, c = 1, 2, 3
```

##### 2.3.2.1接Austin 与 Jaden的例子

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
Jaden, Austin = Austin, Jaden
print("Austin", Austin)
print("Jaden", Jaden)
```



















