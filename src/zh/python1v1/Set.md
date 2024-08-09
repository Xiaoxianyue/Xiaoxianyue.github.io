---
title: 08-集合
icon: python
date: 2024-8-09 10:53:47
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

## 1. 集合的创建

```python
set1 = {1,2,3,4,5,6,7,8,9}
print(set1)
#output
{1, 2, 3, 4, 5, 6, 7, 8, 9}
```

or

```python
set1 =set([1,2,3,4,5,6,7,8,9])
print(set1)
#output
{1, 2, 3, 4, 5, 6, 7, 8, 9}
```



## 2. 两个集合直接的关系

### 2.1 交集

```python
set1 = {1, 2, 3, 4}
set2 = {5, 2, 4, 8}
print(set1 & set2)
#output
{2, 4}
```



### 2.2 并集

```python
set1 = {1, 2, 3, 4}
set2 = {5, 2, 4, 8}
print(set1 | set2)
#output
{1, 2, 3, 4, 5, 8}
```



### 2.3 差集

```python
set1 = {1, 2, 3, 4}
set2 = {5, 2, 4, 8}
print(set1 - set2)
#output
{1, 3}
```



### 2.4 对称差集

```python
set1 = {1, 2, 3, 4}
set2 = {5, 2, 4, 8}
print(set1 ^ set2)
#output
{1, 3, 5, 8}
```



### 2.5 思考题

#### Question 01

对称差集可以用其他三种集合操作来实现吗？

```python
set1 = {1, 2, 3, 4}
set2 = {5, 2, 4, 8}
print((set1 | set2) - (set1 & set2))
#output
{8, 1, 3, 5}
```

#### Question 02 寻找不重复的单词数

题目描述

编写一个程序，接收用户输入的英文句子，计算并输出该句子中不重复的单词数量。程序应忽略单词的大小写，并且只考虑字母和数字，忽略标点符号和空格。

输入描述

- 用户输入的字符串，其中可能包含多个单词、空格、标点符号以及大小写字母。

输出描述

- 一个整数，表示该句子中不重复的单词数量。

示例 1

输入：

```
The quick brown fox jumps over the lazy dog.
```

输出：

```
8
```

解释：

去掉重复的单词后，剩下的单词有：`"the"`, `"quick"`, `"brown"`, `"fox"`, `"jumps"`, `"over"`, `"lazy"`, `"dog"`，共8个。

示例 2

输入：

```
Hello, hello! How are you? Are you doing well?
```

输出：

```
5
```

解释：

去掉重复的单词后，剩下的单词有：`"hello"`, `"how"`, `"are"`, `"you"`, `"doing"`，共5个。

### 9.5 注意事项

- 程序应忽略标点符号和大小写，确保在计算不重复单词数量时考虑这些因素。

```python
string = input('Enter a string: ').replace(',',' ').replace('.',' ').lower()
list_string = string.split()
s = set(list_string)
print(len(s))
#output
Enter a string: He would have voted for him,but he said no.
9
```













