---
title: 12-for循环
icon: python
date: 2024-8-14 10:00:58
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

## 1. for 循环——遍历

基本语法：

```python
lst = [1,2,3]
for i in lst:
    print(i)
#output
1
2
3
```

拓展：把列表里的数字都平方一遍，然后再放回列表：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
n = 0
for i in lst:
    lst[n] = i ** 2
    n += 1
print(lst)
#output
[1, 4, 9, 16, 25, 36, 49, 64, 81]
```



## 2. emerate

### 2.1 emerate 用法

```python
lst = ['shelley','python','java']
"""
enumerate 是 python 中的一个内置函数，非常实用，它用于遍历序列（比如：列表，元组或字符串），
同时获取每个元素的索引和值。这样做可以让循环中的迭代更加直观，也更易于处理。
使用 enumerate 函数可以替代传统的通过索引防问元素的方法。
它返回一个枚举对象，对这个对象生成一系列包含每个元素的索引和值的元组。
"""
fruits = ['apple','banana','cherry']
for index, fruit in enumerate(fruits):
    print(index, fruit)
#output
0 apple
1 banana
2 cherry
```

细化实现步骤：

```python
In [1]: fruit = ['apple','banana','cherry']

In [2]: enumerate(fruit)
Out[2]: <enumerate at 0x183d9b44f00>

In [3]: list(enumerate(fruit))
Out[3]: [(0, 'apple'), (1, 'banana'), (2, 'cherry')]

In [4]: fruit_list = list(enumerate(fruit))

In [5]: for fruits in fruit_list:
   ...:     print(fruits)
   ...:
(0, 'apple')
(1, 'banana')
(2, 'cherry')
```
元组里索引和值的一一映射：
```python
In [6]: index,fruit = (0,'apple')

In [7]: index
Out[7]: 0

In [8]: fruit
Out[8]: 'apple'
```

最终代码写法:

```python
In [10]: fruits = ['apple','banana','cherry']

In [11]: fruits_list = list(enumerate(fruits))

In [12]: for fruits in fruit_list:
    ...:     index,fruit = fruits
    ...:     print(index,fruit)
    ...:
0 apple
1 banana
2 cherry
```

可以从上面看到，`enumerate`的作用就是使索引一起与值显现。



### 2.2 拓展用法

输出这样的形式：

```python
{0: 'apple', 1: 'banana', 2: 'cherry'}
```

Solution:

第一版本：

```python
fruits = ['apple', 'banana', 'cherry']
fruits_list = list(enumerate(fruits))
dictionary = dict(fruits_list)
print(dictionary)
```

想到了字典的两种创建方法：`[(),(),()]`这种形式可以通过 `dict`强制转换成字典形式。

那我们能不能直接把 `enumerate`强制转换成字典？

```python
fruits = ['apple', 'banana', 'cherry']
dictionary = dict(enumerate(fruits))
print(dictionary)
#output
{0: 'apple', 1: 'banana', 2: 'cherry'}
```



::: info

索引可不可以从别的数字开始？

可以。

```python
fruits = ['apple', 'banana', 'cherry']
dictionary = dict(enumerate(fruits,start=1))
print(dictionary)
#output
{1: 'apple', 2: 'banana', 3: 'cherry'}
```

:::
