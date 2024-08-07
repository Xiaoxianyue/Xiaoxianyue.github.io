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
print(type(tup),tup)
#output
<class 'str'> moon

tup = (1)
print(type(tup),tup)
#output
<class 'int'> 1

tup = ([1,2,3])
print(type(tup),tup)
#output
<class 'list'> [1, 2, 3]
```

- 怎么解决这个问题?

```python
tup = (1,)
print(type(tup),tup)
#output
<class 'tuple'> (1,)
```

- 为啥逗号能解决这个问题？？



::: note 小tips

系统会把只有一个元素的元组两边的小括号看成算术表达式的小括号。又因为没有算数优先级，系统会自动忽略掉！！

:::



## 2. 元组元素提取

```python
tup = ('moon', 'in','taurus')
print(tup[0],tup[1],tup[2],tup[0::2],tup[1:])
print(tup[::-1])
#output
moon in taurus ('moon', 'taurus') ('in', 'taurus')
('taurus', 'in', 'moon')
```



## 3. 元组的拼接

```python
tup1 = (1,2,3,4,5,6,7,8)
tup2 = (1,2,3,4,5,6,7,8,9)
print(tup1 + tup2)
#output
(1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```



## 4. 小试牛刀

「利用现有的知识排序」 对以下元组进行排序：

`tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)`



```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
tup_new = sorted(tup)
print(tup_new)
#output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

这样会输出一个列表。为什么？



::: info sorted所做的工作

sorted实际上是吧`tup`转化成了一个列表，再来排序，这样实现它的可变性。

:::



那我们还要把它转化回元组。

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
tup_new = tuple(sorted(tup))
print(tup_new)
#output
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```





## 5. zip

**zip()**是一个内置函数。用于将多个可迭代对象（如列表，元组，字符串等等）的相应元素配对并返回一个元组的迭代器。

如果你有两个或更多的列表，并且想要根据它们的相应元素创建一个新的迭代器，那么zip()非常有用。

### 5.1 zip用法演示：

```python
list1 = [1,2,3,4]
list2 = ['a','b','c']
# 可以使用 zip 来配对这些列表的元素
zipped = zip(list1,list2)
print(zipped) # 是一个 zip 对象，迭代器地址
print(list(zipped)) # 转化成列表查看，也可以转换成元组
#output
<zip object at 0x00000257387B4100>
[(1, 'a'), (2, 'b'), (3, 'c')]
```

### 5.2 计算列的和：

```python
lst = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
zipdata = zip(lst[0], lst[1], lst[2])
print(zipdata)
r = list(zipdata) # 强制转换，解包。
print(r)
col1 = sum(r[0])
col2 = sum(r[1])
col3 = sum(r[2])
print(col1, col2, col3)
#output
<zip object at 0x000001FED78EFAC0>
[(1, 4, 7), (2, 5, 8), (3, 6, 9)]
12 15 18
```

::: tip zip的映射功能

这个zip相当于分别读取了所有子列表的0号位，1号位，2号位。把其转化成列表，子列表中的同一列的元素就被分在同一个元组中。（映射）

:::



还有一点，zip只能强制转化一次数据类型。如下就会返回空元组(数据不见了)：

```python
lst = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
zipdata = zip(lst[0], lst[1], lst[2])
print(zipdata)
r = list(zipdata) 
print(tuple(zipdata))
# col1 = sum(r[0])
# col2 = sum(r[1])
# col3 = sum(r[2])
# print(col1, col2, col3)
#output
<zip object at 0x00000233AB6FF840>
()
12 15 18
```



第二种解包：

```python
lst = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
zipdata = zip(lst[0], lst[1], lst[2])
print(*zipdata)
#output
(1, 4, 7) (2, 5, 8) (3, 6, 9)
```





for循环也可以对zip结果进行输出

```python
lst1 = [1, 2, 3]
lst2 = ['a', 'b', 'c']
zipped = zip(lst1, lst2)
for num, letter in zipped:
    print(f'Number:{num}, Letter:{letter}')
#output
Number:1, Letter:a
Number:2, Letter:b
Number:3, Letter:c
```







