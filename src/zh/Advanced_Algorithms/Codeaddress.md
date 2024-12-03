---
title: 高级算法代码定位
icon: python
date: 2024-11-27 14:59:29
author: XiaoXianYue
isOriginal: true
category: 
    - 大三上
    - 高级算法课件
tag:
    - 大三上
    - 高级算法大课件
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

## week 02

### Bogosort

有原代码！！

week 02 $P_{4}$



### Insertion

ppt 有原代码！！

[Insertion](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0203.html#_2-insertion-sort)



### bubble

ppt 有伪代码！！

[bubble](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0203.html#_3-bubble-sort)



### quick sort

有原代码！！

[quick sort](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0203.html#_4-quick-sort)



### merge sort

有伪代码！！

```python
def merge_sort(L):
    if len(L) <= 1:
        return L
    mid = len(L) // 2
    a = L[:mid]
    b = L[mid:]
    a = merge_sort(a)
    b = merge_sort(b)
    return merge(a,b)

def merge(a,b):
    a_d = len(a)
    b_d = len(b)
    res = []
    i = 0
    j = 0
    while i < a_d and j < b_d:
        if a[i] < b[j]:
            res.append(a[i])
            i += 1
        else:
            res.append(b[j])
            j +=1

    res.extend(a[i:])
    res.extend(b[j:])
    return res
```



[merge_sort](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0203.html#_5-merge-sort)





## week 03

### binary search

ppt 有伪代码 $P_{18}$

[binary search](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0203.html#_2-1-how-it-works)



### Interpolation search

ppt 伪代码 $P_{39}$ 

```python
def Interpolation_search(arr,val):
    start = 0
    end = len(arr) -1
    while arr[end] != arr[start] and val >=arr[start] and val <= arr[end]:
        pos = start + ((val - arr[start])*(end - start) // (arr[end] - arr[start]))
        if arr[pos] == val:
            return pos
        elif val < arr[pos]:
            end = pos -1
        else:
            start = pos +1
    return False

arr = [1,2,3,4,5,6,7,8]
print(Interpolation_search(arr,1))
```



### Heap

有伪代码

```python
def sift_down(arr, start, end):
    root = start
    while root * 2 + 1 <= end:  # While there is a left child
        child = root * 2 + 1  # Left child
        swap = root
        if arr[swap] < arr[child]:  # If the left child is larger
            swap = child
        if child + 1 <= end and arr[swap] < arr[child + 1]:  # If the right child is larger
            swap = child + 1
        if swap != root:
            arr[root], arr[swap] = arr[swap], arr[root]  # Swap and continue to sift down
            root = swap
        else:
            return

def heapify(arr):
    start = (len(arr) - 2) // 2  # Start with the last non-leaf node
    while start >= 0:
        sift_down(arr, start, len(arr) - 1)
        start -= 1

def heap_sort(arr):
    heapify(arr)  # Build the heap
    end = len(arr) - 1
    while end > 0:
        arr[0], arr[end] = arr[end], arr[0]  # Swap the root (max element) with the last element
        end -= 1
        sift_down(arr, 0, end)  # Reheapify the reduced heap

# Example usage:
arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
heap_sort(arr)
print(arr)  # The array should be sorted
```



## week 04

### Tree insert/delete

忽略。一个在文件包给了，一个是作业。



### 前中后序遍历（就是深度优先遍历 dfs）

Week 04 $P_{110}$ 



### 广度优先遍历 (标红)



[bfs](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0405.html#_3-%E5%B9%BF%E5%BA%A6%E9%81%8D%E5%8E%86%E5%92%8C%E6%B7%B1%E5%BA%A6%E9%81%8D%E5%8E%86)

```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def bfs(self):
        queue = [self.root]
        visited = []
        while queue:
            node = queue.pop(0)
            if node not in visited:
                visited.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return visited

if __name__ == '__main__':
    bst = BST()
    bst.root = TreeNode(1)
    bst.root.left = TreeNode(2)
    bst.root.right = TreeNode(3)
    bst.root.left.left = TreeNode(4)
    bst.root.left.right = TreeNode(5)
    bst.root.right.left = TreeNode(6)
    bst.root.right.right = TreeNode(7)
    print(bst.bfs())
```



### AVL （标红）



[AVL 树的旋转、插入和删除](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week04.html#_8-2-5-%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81)



## week 05

### Hash （标红）

[链式寻址](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week05.html#_1-%E9%93%BE%E5%BC%8F%E5%9C%B0%E5%9D%80)

[线性寻址](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week05.html#%E7%BA%BF%E6%80%A7%E6%8E%A2%E6%B5%8B)



### Queue

[队列的基本实现](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0405.html#_4-queues)



### stack

Week 05 `ppt` 上有 $P_{116}$



### List

Week 05 $P_{72-90}$



### Graph

**根据课件的伪代码写的**

::: code-tabs

@tab bfs

```python
class Graph:
    def __init__(self,vertices,edges):
        self.vertices = vertices
        self.edges = edges

    def bfs(self, v):
        ver_queue = []
        visited = []
        ver_queue.append(v)
        while ver_queue:
            node = ver_queue.pop(0)
            if node not in visited:
                visited.append(node)
                for edge in self.edges:
                    if edge[0] == node and edge[1] not in visited:
                        ver_queue.append(edge[1])
        return visited

vertices = [0, 1, 2, 3, 4]
edges = [[0, 1], [0, 2], [1, 3], [2, 4]]
g = Graph(vertices, edges)
print(g.bfs(0))
```

@tab dfs

```python
class Graph:
    def __init__(self,vertices,edges):
        self.vertices = vertices
        self.edges = edges

    def dfs(self, v):
        ver_stack = []
        visited = []
        ver_stack.append(v)
        while ver_queue:
            node = ver_queue.pop(-1)
            if node not in visited:
                visited.append(node)
                for edge in self.edges:
                    if edge[0] == node and edge[1] not in visited:
                        ver_stack.append(edge[1])
        return visited

vertices = [0, 1, 2, 3, 4]
edges = [[0, 1], [0, 2], [1, 3], [2, 4]]
g = Graph(vertices, edges)
print(g.bfs(0))
```

:::



## week 06

### dijkstra

有伪代码。 $P_{28}$

[dijkstra’s](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0607.html#%E4%BB%A3%E7%A0%81)



### Prim

也有伪代码。$P_{47}$

[prim’s](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0607.html#%E4%BB%A3%E7%A0%81-1)



### Kruskal

这个有部分伪代码

[kruskal’s](https://bougiemoonintaurus.com/zh/Advanced_Algorithms/Week0607.html#kruskal-s-algorithm)





## week 07

全在文件里。



## week 08

### TSP 穷举法

$P_{54}$

TSP 文件 0 7 10



### TSP Heuristics

只有伪代码！！！

::: details

```python
# 定义城市之间的距离
dists = [
    ['A', 'B', 20], ['A', 'C', 35], ['A', 'D', 42],
    ['B', 'A', 20], ['B', 'C', 34], ['B', 'D', 30],
    ['C', 'A', 35], ['C', 'B', 34], ['C', 'D', 12],
    ['D', 'A', 42], ['D', 'B', 30], ['D', 'C', 12]
]

# 定义一个函数，用于查找两个城市之间的距离
def find_distance(city1, city2, dists):
    for dist in dists:
        if dist[0] == city1 and dist[1] == city2:
            return dist[2]
    return float('inf')  # 如果没有找到对应的距离，返回无穷大

# 定义最近邻算法的主函数
def nearest_neighbour(start, dists):
    unvisited = ['A', 'B', 'C', 'D']  # 未访问的城市
    visited = []  # 已访问的城市
    connections = []  # 记录访问路径的连接

    u = start  # 从起始城市开始
    visited.append(u)  # 将起始城市添加到已访问列表
    unvisited.remove(u)  # 从未访问列表中移除起始城市

    # 当还有未访问的城市时，继续循环
    while unvisited:
        # 找到从当前城市到未访问城市的最小距离的边
        min_distance = float('inf')
        next_city = None

        for city in unvisited:
            distance = find_distance(u, city, dists)  # 查找距离
            if distance < min_distance:  # 如果找到更小的距离
                min_distance = distance
                next_city = city

        # 更新当前城市为找到的下一个城市
        u = next_city
        connections.append((visited[-1], u, min_distance))  # 添加边到连接列表
        visited.append(u)  # 将找到的城市添加到已访问列表
        unvisited.remove(u)  # 从未访问列表中移除该城市

    return connections  # 返回完整的访问路径和距离

# 调用函数，并输出结果
start_city = 'A'
route = nearest_neighbour(start_city, dists)

# 输出路径
print("访问路径及距离：")
for connection in route:
    print(f"从 {connection[0]} 到 {connection[1]} 的距离为 {connection[2]}")
```



:::



### local search

只有伪代码！！

::: details

```python
import random

# 定义城市之间的距离
dists = {
    ('A', 'B'): 20, ('A', 'C'): 35, ('A', 'D'): 42,
    ('B', 'A'): 20, ('B', 'C'): 34, ('B', 'D'): 30,
    ('C', 'A'): 35, ('C', 'B'): 34, ('C', 'D'): 12,
    ('D', 'A'): 42, ('D', 'B'): 30, ('D', 'C'): 12
}

# 定义计算路径总距离的函数
def distance(route, dists):
    total_distance = 0
    for i in range(len(route) - 1):
        total_distance += dists[(route[i], route[i+1])]
    total_distance += dists[(route[-1], route[0])]  # 回到起始点
    return total_distance

# 定义变异函数，用于2-opt交换
def mutate_2_opt(route):
    i, j = random.sample(range(1, len(route)), 2)
    if i > j:
        i, j = j, i
    # 执行2-opt交换
    new_route = route[:i] + route[i:j+1][::-1] + route[j+1:]
    return new_route

# 定义TSP的局部搜索算法
def local_search_tsp(startroute, dists, i_max=100):
    current_route = startroute  # 初始化为起始路径
    min_distance = distance(current_route, dists)  # 计算初始路径的总距离

    for i in range(i_max):
        new_route = mutate_2_opt(current_route)  # 生成一个新路径
        new_distance = distance(new_route, dists)  # 计算新路径的距离

        if new_distance < min_distance:  # 如果新路径更短，则更新最优解
            min_distance = new_distance
            current_route = new_route

    return current_route, min_distance  # 返回最优路径和最短距离

# 定义初始路径
start_route = ['A', 'B', 'C', 'D']

# 调用局部搜索算法并输出结果
best_route, best_distance = local_search_tsp(start_route, dists)

print("最优路径:", best_route)
print("最优路径的总距离:", best_distance)
```

:::



### 模拟退火方法

::: details

```python
import math
import random

# 定义城市之间的距离
dists = {
    ('A', 'B'): 20, ('A', 'C'): 35, ('A', 'D'): 42,
    ('B', 'A'): 20, ('B', 'C'): 34, ('B', 'D'): 30,
    ('C', 'A'): 35, ('C', 'B'): 34, ('C', 'D'): 12,
    ('D', 'A'): 42, ('D', 'B'): 30, ('D', 'C'): 12
}

# 定义计算路径总距离的函数
def distance(route, dists):
    total_distance = 0
    for i in range(len(route) - 1):
        # 累加相邻城市之间的距离
        total_distance += dists[(route[i], route[i + 1])]
    # 加上最后一个城市回到起始城市的距离
    total_distance += dists[(route[-1], route[0])]
    return total_distance

# 定义变异函数，用于2-opt交换
def mutate_2_opt(route):
    # 随机选择两个索引进行2-opt交换
    i, j = random.sample(range(1, len(route)), 2)
    if i > j:
        i, j = j, i
    # 生成新的路径，将i到j之间的部分反转
    new_route = route[:i] + route[j:i-1:-1] + route[j+1:]
    return new_route

# 模拟退火算法
def simulated_annealing(start_route, dists, initial_temp=1000, cooling_rate=0.995, min_temp=0.01):
    current_route = start_route  # 当前路径初始化为起始路径
    current_distance = distance(current_route, dists)  # 当前路径的总距离
    best_route = current_route  # 初始化最优路径
    best_distance = current_distance  # 初始化最优距离
    temperature = initial_temp  # 设置初始温度

    # 当温度高于最低温度时，持续迭代
    while temperature > min_temp:
        # 生成一个新的路径，并计算其距离
        new_route = mutate_2_opt(current_route)
        new_distance = distance(new_route, dists)
        
        # 判断是否接受新解：若新解更优则接受，若更差则以一定概率接受
        if new_distance < current_distance or random.random() < math.exp((current_distance - new_distance) / temperature):
            current_route = new_route  # 接受新解作为当前解
            current_distance = new_distance
            
            # 如果新解优于最优解，则更新最优解
            if new_distance < best_distance:
                best_route = new_route
                best_distance = new_distance
        
        # 按照冷却速率降低温度
        temperature *= cooling_rate
    
    return best_route, best_distance  # 返回最终的最优路径和最优距离

# 定义初始路径
start_route = ['A', 'B', 'C', 'D']

# 调用模拟退火算法并输出结果
best_route, best_distance = simulated_annealing(start_route, dists)

print("最优路径:", best_route)
print("最优路径的总距离:", best_distance)
```

:::



### GRAPH

::: details

```python
import random
import math


# 计算两个城市之间的欧几里得距离
def calculate_distance(city1, city2):
    """
    计算城市 city1 和 city2 之间的欧几里得距离。
    :param city1: 城市1的坐标 (x1, y1)
    :param city2: 城市2的坐标 (x2, y2)
    :return: 两个城市之间的距离
    """
    return math.sqrt((city1[0] - city2[0]) ** 2 + (city1[1] - city2[1]) ** 2)


# 计算路径的总距离
def total_distance(path, cities):
    """
    计算给定路径的总距离。
    :param path: 城市访问顺序的列表
    :param cities: 城市的坐标列表
    :return: 路径的总距离
    """
    distance = 0
    for i in range(len(path)):
        city1 = cities[path[i]]
        city2 = cities[path[(i + 1) % len(path)]]
        distance += calculate_distance(city1, city2)
    return distance


# 随机化贪心构造初始解
def greedy_construct_solution(cities):
    """
    使用随机化贪心算法构造一个初始解。
    :param cities: 城市的坐标列表
    :return: 构造出的初始解路径
    """
    num_cities = len(cities)
    unvisited = list(range(num_cities))  # 未访问的城市列表
    solution = []
    current_city = random.choice(unvisited)  # 随机选择一个起始城市
    solution.append(current_city)
    unvisited.remove(current_city)

    # 构造路径，直到所有城市都被访问
    while unvisited:
        # 构建候选列表，并按距离排序
        candidate_list = []
        for city in unvisited:
            distance = calculate_distance(cities[current_city], cities[city])
            candidate_list.append((city, distance))

        # 按距离排序，并构造受限候选列表 (RCL)
        candidate_list.sort(key=lambda x: x[1])
        rcl_size = max(1, len(candidate_list) // 3)  # 选择前 1/3 的较优解作为 RCL
        rcl = candidate_list[:rcl_size]

        # 从 RCL 中随机选择一个城市
        next_city = random.choice(rcl)[0]
        solution.append(next_city)
        unvisited.remove(next_city)
        current_city = next_city

    return solution


# 局部搜索优化解（2-opt 算法）
def local_search(solution, cities):
    """
    使用 2-opt 算法进行局部搜索优化。
    :param solution: 初始解路径
    :param cities: 城市的坐标列表
    :return: 优化后的路径
    """
    best_solution = solution[:]
    best_distance = total_distance(best_solution, cities)

    improved = True
    while improved:
        improved = False
        # 2-opt 搜索：交换路径中的两个边
        for i in range(1, len(solution) - 1):
            for j in range(i + 1, len(solution)):
                if j - i == 1:  # 相邻城市跳过
                    continue
                # 交换两个城市之间的路径
                new_solution = best_solution[:]
                new_solution[i:j] = best_solution[i:j][::-1]
                new_distance = total_distance(new_solution, cities)
                if new_distance < best_distance:
                    best_solution = new_solution[:]
                    best_distance = new_distance
                    improved = True

    return best_solution


# GRASP 主函数
def grasp_tsp(cities, max_iterations):
    """
    使用 GRASP 算法求解旅行商问题。
    :param cities: 城市的坐标列表
    :param max_iterations: 最大迭代次数
    :return: 最优路径和最短距离
    """
    best_solution = None
    best_distance = float('inf')

    for _ in range(max_iterations):
        # 构造初始解
        initial_solution = greedy_construct_solution(cities)
        # 局部搜索优化解
        improved_solution = local_search(initial_solution, cities)
        # 计算路径总距离
        current_distance = total_distance(improved_solution, cities)

        # 更新全局最优解
        if current_distance < best_distance:
            best_solution = improved_solution
            best_distance = current_distance

    return best_solution, best_distance


# 主程序
if __name__ == "__main__":
    # 定义城市的坐标 (x, y)
    cities = [
        (0, 0), (1, 5), (5, 2), (6, 6), (8, 3),
        (3, 7), (7, 9), (4, 4), (9, 1), (2, 8)
    ]

    # 最大迭代次数
    max_iterations = 100

    # 执行 GRASP 算法求解 TSP
    best_solution, best_distance = grasp_tsp(cities, max_iterations)

    # 输出最优路径和最短距离
    print("最优路径:", best_solution)
    print("最短距离:", best_distance)
```

:::
