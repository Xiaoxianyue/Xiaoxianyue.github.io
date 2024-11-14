---
title: 高级算法——第7周ppt总结
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

:::

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

```python
# 定义物品的重量和价值
items = [
    {"item": 1, "weight": 10, "value": 60},
    {"item": 2, "weight": 20, "value": 100},
    {"item": 3, "weight": 30, "value": 120}

]

# 定义背包的最大重量
max_weight = 50

# 计算每个物品的单位重量价值并添加到字典
for i in items:
    i["per_value"] = i["value"]/i["weight"]

# 按单位重量价值从高到低对比物品排序
items.sort(key=lambda x:x['per_value'], reverse=True)

# 初始化变量
total_value = 0
current_weight = 0
selected_item = []

for i in items:

    if current_weight + i["weight"] <= max_weight:
        selected_item.append(i["item"])
        current_weight += i["weight"]
        total_value += i["value"]



# 输出结果
print("选择物品编号：", selected_item)
print("总价值：", total_value)
print("总重量：", current_weight)
```



## 3. Max root to leaf ：Greedy

### 3.1 中文带注释版代码：

```python
class TreeNode:
    def __init__(self, data, left=None, right=None):
        # 初始化二叉树节点，包含数据data，左子节点left和右子节点right
        self.data = data
        self.left = left
        self.right = right


def greedy_max_sum(root):
    # 定义贪心算法函数，用于在二叉树中找到一个从根节点到叶子节点的最大和路径
    current_node = root  # 当前节点初始化为根节点
    solution = []  # 存储路径的列表
    total_sum = root.data  # 初始化总和为根节点的数据值
    solution.append(root.data)  # 将根节点的数据添加到路径solution中

    # 循环条件：只要当前节点有左子节点或右子节点，继续循环
    while current_node.left is not None or current_node.right is not None:
        # 如果当前节点既有左子节点也有右子节点
        if current_node.left is not None and current_node.right is not None:
            # 比较左子节点和右子节点的数据值
            if current_node.left.data > current_node.right.data:
                # 如果左子节点的值大于右子节点，则选择左子节点
                solution.append(current_node.left.data)  # 将左子节点的值添加到路径solution中
                total_sum += current_node.left.data  # 将左子节点的值累加到总和total_sum中
                current_node = current_node.left  # 当前节点更新为左子节点
            else:
                # 如果右子节点的值大于或等于左子节点，则选择右子节点
                solution.append(current_node.right.data)  # 将右子节点的值添加到路径solution中
                total_sum += current_node.right.data  # 将右子节点的值累加到总和total_sum中
                current_node = current_node.right  # 当前节点更新为右子节点
        # 如果当前节点只有左子节点
        elif current_node.left is not None:
            solution.append(current_node.left.data)  # 将左子节点的值添加到路径solution中
            total_sum += current_node.left.data  # 将左子节点的值累加到总和total_sum中
            current_node = current_node.left  # 当前节点更新为左子节点
        # 如果当前节点只有右子节点
        else:
            solution.append(current_node.right.data)  # 将右子节点的值添加到路径solution中
            total_sum += current_node.right.data  # 将右子节点的值累加到总和total_sum中
            current_node = current_node.right  # 当前节点更新为右子节点

    return solution, total_sum  # 返回路径solution和路径上的总和total_sum

# 测试代码
if __name__ == "__main__":
    # 创建一个测试的二叉树
    root = TreeNode(10)
    root.left = TreeNode(8)
    root.right = TreeNode(15)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(9)
    root.right.left = TreeNode(12)
    root.right.right = TreeNode(20)
    root.right.right.right = TreeNode(25)

    # 调用greedy_max_sum函数并输出结果
    path, path_sum = greedy_max_sum(root)
    print("路径:", path)  # 输出最大路径
    print("路径和:", path_sum)  # 输出最大路径和
```



### 3.2 原理

在一个二叉树中先从根节点开始计算最大权重的路径，比较根结点的左右节点，再比较每一个算入路径的节点的左右节点，选取大的那一个，直到叶节点。





## 4. Max root to leaf: Optimal

这样实现可以用于需要计算路径和长度，比如决策树中找到最高收益的路径，游戏中的路径选择，树状结构中的最优选择路径等。代码的整体功能是计算二叉树中从根到叶的最大路径和，并找出并打印出对应路径。这在树结构中是一种典型的问题，用于路径和的计算和路径的追踪。

### 4.1 注释代码

::: code-tabs

@tab PPT 伪代码

```python
class TreeNode:
    def __init__(self, data=0, left=None, right=None):
        # 初始化一个树节点，包含数据（data）、左子节点（left）和右子节点（right）
        self.data = data
        self.left = left
        self.right = right

def max_sum_root_to_leaf(cur_node):
    # 如果当前节点为空，则返回0，表示没有路径可走
    if not cur_node:
        return 0
    
    # 递归计算左子树的最大路径和
    if cur_node.left is None:
        # 如果左子节点不存在，将左侧最大和设为0
        max_sum_left = 0
    else:
        # 如果左子节点存在，则递归调用函数计算左子树的最大路径和
        max_sum_left = max_sum_root_to_leaf(cur_node.left)

    # 递归计算右子树的最大路径和
    if cur_node.right is None:
        # 如果右子节点不存在，将右侧最大和设为0
        max_sum_right = 0
    else:
        # 如果右子节点存在，则递归调用函数计算右子树的最大路径和
        max_sum_right = max_sum_root_to_leaf(cur_node.right)
    
    # 比较左右子树的最大路径和，选择其中较大的值并加上当前节点的值
    if max_sum_left > max_sum_right:
        # 如果左子树的路径和较大，返回左子树路径和加上当前节点的数据值
        return max_sum_left + cur_node.data
    else:
        # 如果右子树的路径和较大或相等，返回右子树路径和加上当前节点的数据值
        return max_sum_right + cur_node.data
```

@tab 文件代码

```python
class Node:
    # 定义一个二叉树节点类

    def __init__(self, data):
        # 初始化节点，接收一个数据参数 data，并将其赋值给当前节点的 data 属性
        # 同时初始化左右子节点为 None
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self):
        # 定义当节点对象被打印或转换为字符串时的表示，返回节点的数据
        return str(self.data)

'''
        尝试每一个从根节点到叶节点的路径，只有路径和等于目标和时才是正确的路径
'''

result = []
# 用于存储符合条件的路径的全局变量

# 查找给定的路径和，并将结果保存到全局变量 'result' 中
def print_max_sum_tree_path(root, summ):
    # 如果目标和为 0，说明已经找到一条路径，返回 True
    if summ == 0:
        return True

    # 如果当前节点为空，返回 False，表示没有找到路径
    if root is None:
        return False

    # 递归调用左子节点，将当前节点的数据值从目标和中减去
    left = print_max_sum_tree_path(root.left, summ - root.data)
    
    # 递归调用右子节点，将当前节点的数据值从目标和中减去
    right = print_max_sum_tree_path(root.right, summ - root.data)

    # 如果左子树或右子树中有满足条件的路径，将当前节点数据插入到路径列表的开头
    if left or right:
        result.insert(0, root.data)
    
    # 返回左或右子树的递归结果，以确定是否存在一条符合条件的路径
    return left or right
```

:::
