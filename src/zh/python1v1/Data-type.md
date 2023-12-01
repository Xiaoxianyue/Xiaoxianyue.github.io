---
title: 初识数据类型
icon: alias
date: 2023-12-01 20:07:38
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

![46714d20f0d9b1d503a18e12c17a3d7](./Data-type.assets/46714d20f0d9b1d503a18e12c17a3d7.png)

## 1.数字型

### 1.1代码示例

1.整型

```python
int_num = 1
t = type(int_num)
print(int_num)
print("int num type is:>>>", t)
print("直接检测数据类型，并输出:>>>",type(int_num))

#output
1
int num type is:>>> <class 'int'>
直接检测数据类型，并输出:>>> <class 'int'>
```

2.浮点数

```python
float_num = 1.5
t = type(float_num)
print(float_num)
print("int float type is:>>>", t)
print("直接检测数据类型，并输出:>>>",type(float_num))

#output
1.5
float num type is:>>> <class 'float'>
直接检测数据类型，并输出:>>> <class 'float'>
```

### 2.字符串

#### 2.1 代码示例

```python
string = "Hello"
t = type(string)
print(string)
print("string type is:>>>", t)
print("直接检测数据类型，并输出:>>>",type(string))

#output
Hello
string type is:>>> <class 'str'>
直接检测数据类型，并输出:>>> <class 'str'>
```

#### 2.2 三大特性

1.有序性

​      1.从左到右，下标是从0开始

​      2.从右到左，下标是从-1开始

​      3.引号里出现的都要算一个下标

2.不可变性

​      1.字符串被创建出来后就不允许被改变；

​      2.我们说的不可变，指在代码运行的过程中，不能有对字符串的修改，添加，删除之类的操作

3.任意字符：

​      1.键盘上可以输入的字符，都可以是字符串的元素

​      2.字符放到字符串里，都将成为字符串类型。也就是：里面的每一个元素都可以称为：子字符；

## 3.列表

### 3.1 代码示例

```python
lst = ["Hello LCY", 1, 1.1, ("look", "book", 11), [12, "汉堡包"], True, False]
t = type(lst)

print(lst)
print("lst type is:>>>", t)

print("直接诶监测数据类型，并输出：>>>", type(lst))

#output
['Hello LCY', 1, 1.1, ('look', 'book', 11), [12, '汉堡包'], True, False]
lst type is:>>> <class 'list'>
直接诶监测数据类型，并输出：>>> <class 'list'>
```

### 3.2 三大特性

1.有序性

​      1.从左到右，下标是从0开始

​      2.从右到左，下标是从-1开始

​      3.列表里每个元素都要算一个下标

​            1.比如：`lst = ["aiyuechuang",12];`

​            2.`12`是下标1（从左到右），也是-1（从右到左）；

2.可变性：在程序运行·中，l列表可以改变[添加，删除，修改]

3.任意数据类型：这里说的任意数据类型，指的是Python中所有数据类型





::: details Python 所拥有的数据类型

![46714d20f0d9b1d503a18e12c17a3d7](./Data-type.assets/46714d20f0d9b1d503a18e12c17a3d7-1701435892120-11.png)



:::















