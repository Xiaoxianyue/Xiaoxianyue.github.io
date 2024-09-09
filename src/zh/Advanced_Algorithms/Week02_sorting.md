---
title: 高级算法——第2周ppt——排序算法
icon: python
date: 2024-9-08 19:26:19
author: XiaoXianYue
isOriginal: true
category: 
    - 大三上
    - 高级算法
tag:
    - 大三上
    - 高级算法
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

## 0. 目录

- bogosort
- insertion sort
- bubble sort
- merge sort
- quick sort



## 1. Bogosort

- 这是一个笑话算法，随机洗牌一个列表； 
- 如果洗牌没有按正确顺序排列，就再洗一次  
- 继续洗牌，直到得到一个排序列表！
- 查看 python 代码

### 1.1 前置知识

- 随机库：`random`
    - `random.randint(a, b)`
- 内置函数：
    - `len()`    
    - `range()`
- 语法：
    - `for`
    - `function`
    - 比较运算符
    - 多个变量同时赋予不同值 | 引入多一个变量

### 1.2 前置知识查漏补缺

1. 随机库：

`random.randint(a, b)`用于随机生成一个从 a 到 b 的数字，==包含 a 和 b==。

### 1.3 排序原理

随机打乱列表，判断列表是否有序。无序则继续打乱，继续判断。

### 1.4 功能拆解

#### 1.4.1 如何判断一个列表是否有序？

> 思考一下，类似之前讲到，如何判断用户输入是否为浮点数？
>
> - Solution 1：首先，用内置函数 `count()`算出输入中有几个小数点（.），再 `replace()`小数点判断其是否为纯数字。
> - Solution 2：直接 `replace('.', '', 1)`,控制替换次数为1，然后判断其是否为纯数字。

**Solution 01：（不使用函数的方法）**

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
is_sorted = True
former = lst[0]
for i in lst:
    if i >= former:
        former = i
    else:
        is_sorted = False
        break
print(is_sorted)
```



**Solution 02：（使用函数的方法）**

```python
lst = [1, 2, 4, 5, 6, 3]
def is_sorted(lst):
    former = lst[0]
    for i in lst:
        if i >= former:
            former = i
        else:
            return False
    return True
```

::: details 实现原理

使用了函数遇到 `return`即停止的特性。

:::



**Solution 03：（优化的方法）**

非函数：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
is_sorted = True
for i in range(len(lst) - 1):
    if lst[i] <= lst[i + 1]:
        is_sorted = True
    else:
        is_sorted = False
        break
print(is_sorted)
```

or

函数：

```python
def is_sorted(lst):
    # 从第二个元素开始遍历，因为第一个元素没有前一个元素可以比较
    for i in range(1, len(lst)):
        # 如果前一个元素大于当前元素，说明不是升序排列
        if lst[i - 1] > lst[i]:
            return False
    # 如果没有发现任何不符合升序的情况，返回True
    return True
```



#### 1.4.2 如何打乱列表

::: code-tabs

@tab 使用 `random.shuffle()`（推荐）

这是最直接的方法，Python 自带的 `random`模块已经实现了对列表的就地随机打乱

```python
import random

mylist = [1, 2, 4, 6, 8]
random.shuffle(mylist)
print(mylist)
```

**特点：**

- 这是 Python 的内置函数方法。简单快捷
- 原地打乱，不返回新列表，直接修改原始列表。



@tab 使用 `random.sample()`（不修改列表）

如果不想修改原列表想建立一个新的打乱顺序的列表，可以使用 `random.sample()`。

```python
import random

mylist = [1, 2, 4, 6, 8]
shuffle_list = random.sample(mylist, len(mylist))
print(shuffle_list)
```

:::











