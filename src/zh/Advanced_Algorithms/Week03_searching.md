---
title: 高级算法——第2周ppt——排序算法
icon: python
date: 2024-9-21 21:13:31
author: XiaoXianYue
isOriginal: true
category: 
    - 大三上
    - 高级算法课件
tag:
    - 大三上
    - 高级算法课件
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

## 1. 线性查找

### 1.1 步骤

1. 从第一个元素开始，将其与目标值进行比较。
2. 如果找到目标值，则返回该元素所在的索引。
3. 如果没有找到目标，继续比较列表下一个元素
4. 如果遍历完整个列表都没有目标值，则目标值不存在于列表中。（一般返回 -1）



### 1.2 完整代码

只考虑列表中只有一个目标值的情况：

```python
def linear(lst, goal_num):
    for i in range(len(lst)):
        if lst[i] == goal_num:
            return i
    else:
        return -1


print(linear([1, 2, 3, 4, 5], 2))
```





### 1.3 练习

::: tabs

@tab 题目1：森林里的隐藏宝藏

你被困在一片神秘的森林里，传说森林里隐藏着一块能指引方向的宝藏石。森林被划分为一系列的区域，每个区域都有一块石头，但只有一块是真正的宝藏石。每块石头上都有一个刻印编号。已知这些编号的列表 `stones`，你的任务是通过线性查找找到宝藏石的编号 `treasure_stone`。

**要求：**

1. 编写一个线性查找算法，找到宝藏石的编号位置。
2. 输出宝藏石所在区域的索引。

**输入：**

一个列表 `stones`，包含区域的石头编号；一个整数 `treasure_stone` 表示宝藏石的编号。

**输出：**

找到宝藏石编号的位置，或者输出“未找到”。

**示例：**

```python
stones = [14, 52, 89, 33, 71, 26]
treasure_stone = 71
```

**期望输出：**

```
宝藏石位于区域 4
```



==**Solution:**==

```python
def treasure_searching(stones, treasure_stone):
    index_ = []
    if treasure_stone in stones:
        for i in range(len(stones)):
            if stones[i] == treasure_stone:
                index_.append(i)
        return index_


treasure = treasure_searching(stones=[14, 52, 89, 33, 71, 26], treasure_stone=71)


def print_treasure(treasure):
    for i in range(len(treasure)):
        return treasure[i]


print(f'宝藏石位于区域{print_treasure(treasure)}')

```



@tab 题目2：机器人迷宫寻路

一个机器人在迷宫中迷路了，迷宫由一系列格子组成。格子用一个列表表示，每个格子可以是空的（用0表示）或有障碍物（用1表示）。机器人需要从起点找到终点，并穿越最短的无障碍路径。你的任务是通过线性查找找到连续的、没有障碍物的最长路径，并返回该路径的起始和结束索引。

**要求：**

1. 使用线性查找算法找到迷宫中最长的连续无障碍路径。
2. 返回最长路径的起始索引和结束索引。

**输入：**

一个列表 `maze`，由 0 和 1 组成，0 代表空格，1 代表障碍物。

**输出：**

返回最长连续无障碍路径的起始和结束索引。

**示例：**

```python
maze = [1, 0, 0, 1, 0, 0, 0, 1, 0]
```

**期望输出：**

```
最长无障碍路径的起点为 4，终点为 6
```



==**Solution:**==

代码修改前：

```python
def treasure_searching(maze, blank):
    consistant_i = []
    count_i = []
    for i in range(len(maze)):
        if maze[i] == blank:
            consistant_i.append(i)

        else:
            if len(consistant_i) > 0:
                count_i.append(consistant_i.copy())
                consistant_i.clear()

    max_lst = count_i[0]
    for lst in count_i:
        if len(lst) > len(max_lst):
            max_lst = lst
    return max_lst


max_len_lst = treasure_searching([1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], 0)
print(f'最长无障碍路径的起点为 {max_len_lst[0]}，终点为 {max_len_lst[-1]}')

# output
最长无障碍路径的起点为 4，终点为 6
```

代码修改后：

```python
def treasure_searching(maze, blank):
    consistant_i = []   # 用于存储值为0时的列表下标
    count_i = []  # 用于存储所有值为0，且连续出现的下标的列表（存储子列表）           
    for i in range(len(maze)):
        if maze[i] == blank:
            consistant_i.append(i)  

        else:
            if len(consistant_i) > 0:  # 空数组不会被存入
                count_i.append(consistant_i.copy()) # 拷贝数组然后存入，不可以直接存入。
                consistant_i.clear()  # 清空数组，进行新一轮的存储。
    if len(consistant_i) > 0:
        count_i.append(consistant_i.copy())
        consistant_i.clear()

    max_lst = count_i[0]     # 找到存储在count_i中长度最大的数组，就是最长连续无障碍路径的包含所有下标的数组
    for lst in count_i:
        if len(lst) > len(max_lst):
            max_lst = lst
    return max_lst


max_len_lst = treasure_searching([1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], 0)
print(f'最长无障碍路径的起点为 {max_len_lst[0]}，终点为 {max_len_lst[-1]}')

# output 
最长无障碍路径的起点为 8，终点为 12
```

::: info

- 为什么要添加12-14行？

    答：当我们的 maze 以 0 结尾时，代码的结果就错了。原代码里，我们是根据==是否出现 1==来判断我们是否要把 `consistant_i` 存进 `count_i` 中，再把 `consistant_i` 清空的，但是当**我们最后一个数不为 1 时，最后几个 0 就无法存进**。

- 这么修改的逻辑？

    答：加上了一个条件判断，当运行遍历到 maze 里最后一个元素时（假设为 0，如测试例子所示），这时 `consistant_i`里的值没被存入也没被清空，显然 `len(consistant_i)>0`，**满足条件判断，进入13-14的条件判断的代码。**这样就能顺利存入最后几个 0 了。

:::

@tab 题目3：寻找怪兽足迹

在一个幻想世界中，猎人们正在追踪怪兽的足迹。猎人手里有一张记录足迹的纸条 `tracks`，上面显示了每个时间点怪兽的出现位置（以编号表示）。你的任务是找到怪兽第一次和最后一次出现的位置。你需要编写一个线性查找算法，分别查找出怪兽在列表 `tracks` 中首次和最后一次出现的索引。

**要求：**

1. 使用线性查找分别找到怪兽首次和最后一次出现的位置。
2. 输出首次和最后一次出现的索引。

**输入：**

一个列表 `tracks`，表示怪兽在不同时间点的出现位置。

**输出：**

首次和最后一次出现的索引。

**示例：**

```python
tracks = [5, 2, 7, 8, 5, 7, 2, 5]
```

**期望输出：**

```
怪兽首次出现的位置是 0，最后一次出现的位置是 7
```

**Solution:**

```python
```



:::