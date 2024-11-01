---
title: 高级算法——第七周ppt总结
icon: python
date: 2024-10-30 11:28:41
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

## 1. Scheduling

### 1.1 Scheduling problem

| i     | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   |
| ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| $s_i$ | 2    | 4    | 1    | 6    | 4    | 6    | 7    | 9    | 9    | 3    | 13   |
| $f_i$ | 5    | 6    | 7    | 9    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |

- We can only perform one activity after another has finished
- What is the maximum number of activities that can be completed? 
- Note that activities are sorted according to finish times (earliest first)

### 1.2 Coding

```python
s = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]  # s_i 代表第 i 个活动开始时间
f = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]  # f_i 代表第 i 个活动结束时间

count = 1
last_finish_time = f[0]

print(f"选择活动 1：开始时间={s[0]},结束时间={f[0]}")

for i in range(1, len(s)):
    if s[i] >= last_finish_time:
        count += 1
        print(f"选择活动{i + 1}：开始时间{s[i]},结束时间{f[i]}")
        last_finish_time = f[i]

print("最多可以完成的活动数量：", count)
```



### 1.3 伪代码

```python
activities ← [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 		// activity numbers
start_times ← [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]		// start times
finish_times ← [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]	// end times

GREEDY-ACTIVITY-SELECTOR(a, s, f)
	n ← LENGTH a
	solution ← []
	solution ← solution + a[0]				// add first activity to solution
	k ← 1							// counter
	FOR m ← 2 TO n					// iterate from 2 to length a
		IF s[m] >=  f[k]				// if start time of lower activity is greater than
 										//or equal to end time of higher activity
			solution ← solution + a[m] 	// add lower activity to solution 
			k ← m							
	RETURN solution

GREEDY-ACTIVITY-SELECTOR(activities, start_times, finish_times)		// call
```

代码实现：

::: code-tabs

@tab

```python
activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
start_times = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]
finish_times = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]

def greedy(activities, start_times, finish_times):
    n = len(activities)
    solution = []
    solution.append(activities[0])
    count = 0
    k = 1

    for i in range(n):
            if start_times[i] >= finish_times[k]:
                solution.append(activities[i])
                k = i
    return solution

print(greedy(activities, start_times, finish_times))
```

@tab 注释版

```python
def greedy_activity_selector(activities, start_times, finish_times):
    """
    根据活动的开始时间和结束时间，使用贪心算法选择最大数量的互不冲突的活动。
    
    参数:
    activities (list): 活动编号的列表。
    start_times (list): 每个活动的开始时间列表，与活动编号对应。
    finish_times (list): 每个活动的结束时间列表，与活动编号对应。

    返回:
    list: 被选择的活动编号列表，按选择顺序排列。
    """
    
    n = len(activities)  # 获取活动的数量
    solution = [activities[0]]  # 初始化解集，先将第一个活动添加进解集
    k = 0  # 记录当前选择的活动的索引，初始化为第一个活动

    # 从第二个活动（索引1）开始遍历，逐个检查每个活动
    for m in range(1, n):
        # 检查当前活动的开始时间是否在上一个选择的活动结束之后
        # 如果满足条件，则当前活动可以选择
        if start_times[m] >= finish_times[k]:
            solution.append(activities[m])  # 将当前活动添加到解集中
            k = m  # 更新 k 为当前选择的活动索引，作为下次选择的基础

    return solution  # 返回最终选择的活动列表

# 定义活动编号、每个活动的开始时间和结束时间
activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
start_times = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]
finish_times = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]

# 调用贪心活动选择器函数，计算并输出被选择的活动列表
selected_activities = greedy_activity_selector(activities, start_times, finish_times)
print("被选择的活动:", selected_activities)  # 输出被选择的活动编号
```



## 2. Knapsack problem

<img src="./Week07.assets/image-20241101112039730.png" alt="image-20241101112039730" style="zoom:50%;" />

- A thief robbing a store finds 3 items: 
    - Item 1, 10 lbs, £60
    - Item 2, 20 lbs, £100
    - Item 3, 30 lbs, £120

- The thief wants to take as valuable load as possible but he can carry at most 50 lbs in his knapsack.
- Which items should he take?

### 2.1 思路

两种方法：贪心算法和动态规划。

- 方法一：贪心算法（按单位重量价值排序）

    - 计算每件物品单位重量价值。
        - Item 1: 60/10 = 6
        - Item 2: 100/20 = 5
        - Item 3: 120/30 = 4
    - 按单位重量价值从高到低排序，优先选择单位价值高的物品。
    - 依次放入背包中，直到重量达到限制。
    - 选择过程：
        - 选择 Item 1, 10 lbs, 价值 60$
        - 选择 Item 2, 20 lbs, 价值 100$
        - 选择 Item 3, 30 lbs，会超重，因此不选 3
        - 总价值 60 + 100 = 160$

- 方法二：动态规划

    对于更复杂的背包问题或当哪个物品可以部分选取时，可以使用动态规划。然而，对于这种小规模的 0/1 的背包问题，贪心算法已经足够。











