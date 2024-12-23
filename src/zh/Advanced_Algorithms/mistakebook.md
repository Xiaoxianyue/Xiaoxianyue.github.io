---
title: 错误总结
icon: python
date: 2024-12-09 16:42:21
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



## Binary Iterative

```python
def binary_search(arr, val):
    middle = len(arr) // 2
    while arr[middle] != val:
        if len(arr) > 1:
            if arr[middle] < val:
                arr = arr[middle + 1:]  # X
            else:
                arr = arr[:middle]
        else:
            if arr[middle] != val:
                return False
        middle = len(arr) // 2
    return True


print(binary_search([0, 2, 3, 4, 5, 6], 7))

# output
IndexError: list index out of range
```



应该是：

```python
def binary_search(arr, val):
    middle = len(arr) // 2  # 一般左半部分会大一些。
    while arr[middle] != val:
        if len(arr) > 1:
            if arr[middle] < val:
                arr = arr[middle:]   # 这里容易列表为空。
            else:
                arr = arr[:middle] # 所以不担心这里列表为空了。
        else:
            if arr[middle] != val:
                return False
        middle = len(arr) // 2
    return True


print(binary_search([0, 2, 3, 4, 5, 6], 7))
```





## Heap_sort Recursive

```python
def sift_down(arr, start, end):
    swap = start
    left = start * 2 + 1
    right = start * 2 + 2
    if arr[left] > arr[swap] and left < end:
        swap = left
    if arr[right] > arr[swap] and right < end:
        swap = right
    if start != swap:
        arr[start], arr[swap] = arr[swap], arr[start]
        sift_down(arr, swap, end)


def heap_sort(arr):
    for i in range(len(arr) // 2, 0, -1): # X
        sift_down(arr, i, len(arr))


    for i in range(len(arr)-1, 1, -1): # X
        arr[i], arr[0] = arr[0], arr[i]
        sift_down(arr, 0, i)
```



应该是：

```python
def sift_down(arr, start, end):
    swap = start
    left = start * 2 + 1
    right = start * 2 + 2
    if arr[left] > arr[swap] and left < end:
        swap = left
    if arr[right] > arr[swap] and right < end:
        swap = right
    if start != swap:
        arr[start], arr[swap] = arr[swap], arr[start]
        sift_down(arr, swap, end)


def heap_sort(arr):
    for i in range(len(arr) // 2 - 1, -1, -1): # 到顶点也要 sift down 啊亲
        sift_down(arr, i, len(arr))

    for i in range(len(arr) - 1, 0, -1): # 一直交换到堆只剩1个节点。
        arr[i], arr[0] = arr[0], arr[i]
        sift_down(arr, 0, i)
```



## BST bfs

```python
    def bfs(self):
        queue = [self.root]
        visited = []
        while queue:
            node = queue.pop(0)
            if node not in visited:
                visited.append(node)
                queue.append(node.left)  # X
                queue.append(node.right)
        return visited
```



应该是：

```python
    def bfs(self):
        queue = [self.root]
        visited = []
        while queue:
            node = queue.pop(0)
            if node not in visited:
                visited.append(node.val)
                if node.left:   # 必须要判断左右节点是否存在呀
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return visited
```





## kruskal’s algorithm

```python
class Graph:
    def __init__(self, vertices):
        self.V = vertices  # 图的节点数
        self.edges = []  # 图的边集（格式：[权重, 起点, 终点]）

    # 添加边
    def add_edge(self, u, v, weight):
        self.edges.append([weight, u, v])

    def find(self, parent, vertex):
        if parent[vertex] == vertex:
            return vertex
        return self.find(parent, parent[vertex])

    def union(self, parent, rank, x, y):
        x_root = self.find(parent, x)
        y_root = self.find(parent, y)
        if x_root == y_root:
            return False

        if rank[x_root] < rank[y_root]:
            parent[x_root] = y_root
        elif rank[x_root] > rank[y_root]:
            parent[y_root] = x_root
        else:
            parent[x_root] = y_root
            rank[y_root] += 1

    def kruskal(self):
        result = []

        self.edges = sorted(self.edges, key=lambda item: item[0])  # 首先，记得排序边列表。然后，熟悉lambda用法（冒号！）

        parent = []
        rank = []
        for i in range(self.V):
            parent.append(i)
            rank.append(0)

        e = 0
        i = 0
        while e <= self.V - 1:  # NO!!
            u, v, weight = self.edges[i]
            i += 1

            if self.union(parent, rank, u, v) == False:
                continue

            self.union(parent, rank, u, v)
            result.append([weight, u, v])
            e += 1
        return result

g = Graph(5)
g.add_edge(0, 1, 1)
g.add_edge(0, 2, 2)
g.add_edge(1, 3, 3)
g.add_edge(3, 4, 4)
g.add_edge(2, 4, 8)

mst = g.kruskal()
print("最小生成树的边集:")
for u, v, weight in mst:
    print(f"边 {u}-{v}, 权重: {weight}")
```

应该是：

```python
class Graph:
    def __init__(self, vertices):
        self.V = vertices  # 图的节点数
        self.edges = []  # 图的边集（格式：[权重, 起点, 终点]）

    # 添加边
    def add_edge(self, u, v, weight):
        self.edges.append([weight, u, v])

    def find(self, parent, vertex):
        if parent[vertex] == vertex:
            return vertex
        return self.find(parent, parent[vertex])

    def union(self, parent, rank, x, y):
        x_root = self.find(parent, x)
        y_root = self.find(parent, y)
        if x_root == y_root:
            return False

        if rank[x_root] < rank[y_root]:
            parent[x_root] = y_root
        elif rank[x_root] > rank[y_root]:
            parent[y_root] = x_root
        else:
            parent[x_root] = y_root
            rank[y_root] += 1

    def kruskal(self):
        result = []

        self.edges = sorted(self.edges, key=lambda item: item[0])  # 首先，记得排序边列表。然后，熟悉lambda用法（冒号！）

        parent = []
        rank = []
        for i in range(self.V):
            parent.append(i)
            rank.append(0)

        e = 0
        i = 0
        while e < self.V - 1:
            u, v, weight = self.edges[i]
            i += 1

            if self.union(parent, rank, u, v) == False:
                continue

            self.union(parent, rank, u, v)
            result.append([weight, u, v])
            e += 1
        return result

g = Graph(5)
g.add_edge(0, 1, 1)
g.add_edge(0, 2, 2)
g.add_edge(1, 3, 3)
g.add_edge(3, 4, 4)
g.add_edge(2, 4, 8)

mst = g.kruskal()
print("最小生成树的边集:")
for u, v, weight in mst:
    print(f"边 {u}-{v}, 权重: {weight}")
```



## heuristic TSP

```python
def heuristic(vertices, edges):
    unvisited = vertices[:]
    visited = []
    connection = []

    u = unvisited[0]
    visited.append(u)
    unvisited.remove(u)

    while unvisited:
        min_cost = float('inf')
        next_vertex = None
        for edge in edges:
            if edge[0] == u and edge[1] not in visited:
                cost = edge[2]
                if cost < min_cost:
                    min_cost = cost
                    next_vertex = edge[1]
        if next_vertex:
            connection.append([u, next_vertex, min_cost])
            visited.append(next_vertex)
            unvisited.remove(next_vertex)
            u = next_vertex  # 把下一个设为其起始城市
        else:  # 这个并没有连贯的想到
            break
        if len(visited) == len(vertices):
            for item in edges:
                if item[0] == visited[-1] and item[1] == visited[0]:
                    connection.append(item)

    return connection


edges = [
    ['A', 'B', 20], ['A', 'C', 35], ['A', 'D', 42],
    ['B', 'A', 20], ['B', 'C', 34], ['B', 'D', 30],
    ['C', 'A', 35], ['C', 'B', 34], ['C', 'D', 12],
    ['D', 'A', 42], ['D', 'B', 30], ['D', 'C', 12]
]
vertices = ['A', 'B', 'C', 'D']
route = heuristic(vertices, edges)
print(route)
```



## local search TSP

```python
import random

dists = {
    ('A', 'B'): 20, ('A', 'C'): 35, ('A', 'D'): 42,
    ('B', 'A'): 20, ('B', 'C'): 34, ('B', 'D'): 30,
    ('C', 'A'): 35, ('C', 'B'): 34, ('C', 'D'): 12,
    ('D', 'A'): 42, ('D', 'B'): 30, ('D', 'C'): 12
}


def distance(route, dists):
    total_distance = 0
    for i in range(len(route) - 1):
        for key, value in dists.items():                              # !!
            if route[i] == key[0] and route[i + 1] == key[1]:
                total_distance += value
    total_distance += dists[(route[-1], route[0])]
    return total_distance


def change(route, dists):
    i, j = random.sample(range(1, len(route)), 2)
    if i > j:
        i, j = j, i
    new_route = route[:i] + route[i:j+1][::-1] + route[j+1:]
    return new_route

def local_search(dists, i_max=100):
    current_route = ['A','B','C','D']
    current_distance = distance(current_route, dists)

    for _ in range(i_max):
        new_route = change(current_route, dists)
        new_distance = distance(new_route, dists)
        if new_distance < current_distance:
            current_route = new_route
            current_distance = new_distance

    return current_route, current_distance

best_route, best_distance = local_search(dists)

print("最优路径:", best_route)
print("最优路径的总距离:", best_distance)
```



## 退火

```python
import random
import math

dists = {
    ('A', 'B'): 20, ('A', 'C'): 35, ('A', 'D'): 42,
    ('B', 'A'): 20, ('B', 'C'): 34, ('B', 'D'): 30,
    ('C', 'A'): 35, ('C', 'B'): 34, ('C', 'D'): 12,
    ('D', 'A'): 42, ('D', 'B'): 30, ('D', 'C'): 12
}


def distance(route, dists):
    total_distance = 0
    for i in range(len(route) - 1):
        for key, value in dists.items():
            if route[i] == key[0] and route[i + 1] == key[1]:
                total_distance += value
    total_distance += dists[(route[-1], route[0])]
    return total_distance


def change(route, dists):
    i, j = random.sample(range(1, len(route)), 2)
    if i > j:
        i, j = j, i
    new_route = route[:i] + route[i:j + 1][::-1] + route[j + 1:]
    return new_route


def simulate(dists, inital_tem=1000, cooling_rate=0.995, end_tem=0.01):
    cur_route = ['A', 'B', 'C', 'D']
    cur_dis = distance(cur_route, dists)
    min_route = None
    min_dis = float('inf')
    tem = inital_tem
    while tem > end_tem:
        new_route = change(cur_route, dists)
        new_dis = distance(new_route, dists)
        if new_dis < cur_dis or random.random() <= math.exp((cur_dis - new_dis) / tem): # 指数。
            cur_route = new_route
            cur_dis = new_dis

        if cur_dis < min_dis:
            min_dis = cur_dis
            min_route = cur_route
        tem *= cooling_rate
    return min_route, min_dis


best_route, best_distance = simulate(dists)

print("最优路径:", best_route)
print("最优路径的总距离:", best_distance)
```





## prim

```python
def prim(graph,start):
    visited = {start}
    unvisited = set(graph.keys()) - visited  # !!
    spanning_tree = []
    total_value = 0

    while unvisited:
        min_edge = float('inf')
        next_city = None
        for city,weight in graph[start].items():
            if weight < min_edge and city in unvisited:
                min_edge = weight
                next_city = city
        if next_city:  # !!
            spanning_tree.append([start, next_city, min_edge])
            start = next_city
            visited.add(next_city)
            unvisited.remove(next_city)
            total_value += min_edge
    return spanning_tree, total_value

graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

# 运行算法
start_node = 'A'
spanning_tree, total_cost = prim(graph, start_node)

# 输出结果
print("最小生成树的边:", spanning_tree)
print("最小生成树的总权重:", total_cost)
```



## dijkstra

```python
def dijkstra(graph, origin, destination):
    # 初始化数据
    dist = {vertex: float('inf') for vertex in graph}  # 距离初始化为无穷大
    previous = {vertex: None for vertex in graph}  # 前置节点初始化为 None
    dist[origin] = 0  # 起点到起点的距离为 0
    Q = set(graph.keys())  # 所有节点加入集合  #!!

    while Q:
        # 找到 Q 中距离最小的节点
        u = min(Q, key=lambda vertex: dist[vertex]) #!!

        if dist[u] == float('inf'):
            break  # 如果最小距离是无穷大，说明没有到达目的地的路径

        if u == destination:
            break  # 到达目的地，停止循环

        Q.remove(u)  # 从 Q 中移除节点

        # 更新邻居节点的距离
        for neighbor, cost in graph[u].items():  
            alt = dist[u] + cost  # 计算新的可能距离
            if alt < dist[neighbor]:  # 如果新的距离小于当前记录的距离
                dist[neighbor] = alt  # 更新距离
                previous[neighbor] = u  # 更新前置节点

    # 构造最短路径
    S = []
    u = destination
    while previous[u] is not None:
        S.insert(0, u)  # 插入路径
        u = previous[u]
    if u == origin:
        S.insert(0, u)  # 将起点加入路径
    return S


# 示例用法
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

origin = 'A'
destination = 'D'
shortest_path = dijkstra(graph, origin, destination)
print("Shortest Path:", shortest_path)
```

