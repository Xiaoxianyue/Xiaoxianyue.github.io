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

::: warning

看到上面的代码进行一个思考：什么样的格式的代码 可以强制转换成集合类型？？

`([1,3,2,4,3,6,7,5])`

这里的举例是列表的类型。

:::

## 2. 集合的操作

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



### 2.5 .add()

```python
set1 = {1,2,4,5,8}
set1.add(10)
print(set1)

#output
{1,2,4,5,8,10}
```

### 2.6 创建空白集合

```python
set1 = set()
```

### 2.7 .remove()

```python
set1 = {1,2,3,4,5}
```



### 2.6 思考题

#### Question 01

对称差集可以用其他三种集合操作来实现吗？

```python
set1 = {1, 2, 3, 4}
set2 = {5, 2, 4, 8}
print((set1 | set2) - (set1 & set2))
#output
{8, 1, 3, 5}
```

#### Question 02 

寻找不重复的单词数:编写一个程序，接收用户输入的英文句子，计算并输出该句子中不重复的单词数量。程序应忽略单词的大小写，并且只考虑字母和数字，忽略标点符号和空格。

输入要求：用户输入的字符串，其中可能包含多个单词、空格、标点符号以及大小写字母。

输出描述：一个整数，表示该句子中不重复的单词数量。



::: details

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

:::

Solution:

```python
string = input('Enter a string: ').replace(',',' ').replace('.',' ').lower()
list_string = string.split()
s = set(list_string)
print(len(s))
#output
Enter a string: He would have voted for him,but he said no.
9
```





#### Question 03

**描述**：获取用户输入两个序列，转换成集合后，输出：只存在于集合 `A` 而不在 `B` 中的元素集合。

**示例输入**：

```python
Enter set1: 1, 2, 3, 4, 5
Enter set2: 4, 5, 6, 7
```

**示例输出**：

```python
{1, 2, 3}
```

**答案：**

```python
lst1 = input('Enter a set: ').split(',')
lst2 = input('Enter another set:').split(',')
set1 = set(map(int,lst1))
set2 = set(map(int,lst2))
print(set1-set2)
#output
Enter a set: 1,2,3,4,5,6
Enter another set: 2,3,4
{1, 5, 6}
```



#### Question 04

**描述**：获取用户输入的一个字符串，输出字符串中出现的唯一字符的集合（即每个字符只出现一次）。

**示例输入**：

```python
string = "programming"
```

**示例输出**：

```python
{'p', 'o', 'a', 'i', 'n', 'g'}
```

**答案：**

```python
seen_once = set()      #创建一个集合，用于存储只出现一次的字符
seen_multiple = set()  #创建一个集合，用于存储出现多次的字符
string = "notation"
for char in string:
    #如果字符在 seen_once 集合中，说明它不是唯一的
    if char in seen_once:
        # 从 seen_one 集合中移除字符
        seen_once.remove(char)
        seen_multiple.add(char)
    elif char not in seen_multiple:
        seen_multiple.add(char)
print(seen_once)
#output
```





