---
title: 高级算法——第六周ppt总结
icon: python
date: 2024-10-25 11:15:3、12
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

## 1. Dijkstra’s algorithm

算法目标和使用场景
使用 Dijkstra 算法，可以寻找图中节点之间的最短路径。特别是，可以在图中寻找一个节点（称为“源节点”）到所有其它节点的最短路径，生成一个最短路径树。

GPS 设备使用这个算法来寻找当前位置到目标位置的最短路径。Dijkstra 算法被广泛应用在工业上，尤其是需要建模网络的领域。

### 1.1 基础知识

1. Dijkstra‘s 算法从指定的节点（源节点）出发，寻找它与图中所有其他节点之间的最短路径。
2. Dijkstra’s 算法会记录当前已知最短路径，并在寻找更短的路径时更新。
3. 一旦找到源节点与其他节点之间的最短路径，那个节点会被标记为“已访问”并添加到路径中。
4. 重复寻找过程，直到图中所有节点都已经添加到路径中，这样就可以得到从源节点出发访问所有其他节点的最短路径方案。

必要条件：

Dijkstra’s  只能用在权重为正的图中，因为计算过程中需要权重相加来寻找最短路径。

如果图中有负权重的边，这个算法就无法正常工作。

一旦一个节点被标记为已访问，当前访问它的路径就被标记为访问它的最小路径。

如果存在负权重，则可能在之后的计算中得到总权重更小的路径，从而影响之前的结果（TIPs：即可能出现多绕路反而路线更短的情况，不合实际）





### 1.2 完整代码

```python
import heapq


def dijkstra(graph, start):
    # 初始化距离表，将所有节点的初始距离设为无限大
    # 意思是开始时假定所有节点都不可达
    distances = {node: float('inf') for node in graph}
    distances[start] = 0  # 起始点回到自身的距离为0

    # 创建一个优先级队列，存放待处理的点
    priority_queue = [(0, start)]

    # 循环处理优先级队列中的节点
    while priority_queue:
        # 弹出距离最小的节点
        current_distance, current_node = heapq.heappop(priority_queue)

        # 如果弹出的节点距离大于已知最短距离，则跳过该节点（已经找到更短路径）
        if current_distance > distances[current_node]:
            continue

        # 遍历当前节点的所有邻居节点
        for neighbor, weight in graph[current_node].items():
            # 计算从当前节点到邻居节点的距离
            distance = current_distance + weight

            # 如果找到到达邻居节点的更短路径，更新距离表
            if distance < distances[neighbor]:
                distances[neighbor] = distance  # 更新距离表
                # 将邻居节点和新的距离加入优先队列
                heapq.heappush(priority_queue, (distance, neighbor))

        # 返回从起点到各节点的最短距离
    return distances


# 示例图
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

# 从起点A运行 Dikjkatra 算法，计算到所有其他节点的最短路径
start_node = 'A'
shortest_path = dijkstra(graph, start_node)

# 输出从起点到其他所有结点的最短距离
print(f'从节点{start_node}到其他节点的最短距离为：')
for node, distance in shortest_path.items():
    print(f"{start_node}->{node}: {distance}")
```



### 1.3 图示说明

<img src="./Week06.assets/e562381f303733f11fcb3c19105da6a.jpg" alt="e562381f303733f11fcb3c19105da6a" style="zoom:50%;" />



1. 初始点：A，对自己的初始距离为 0 ，与其他所有顶点的距离都是无穷大。
2. A ——> B
    - 直接路径：A -> B  距离：1
    - 其他路径：
        - 1. A -> C -> B 距离：6
        - 2. A -> C -> D -> B 距离：10
    - 选择：直接路径
3. A ——> C
    - 直接路径：A -> C 距离：4
    - 其他路径：
        - 1. A -> B -> C 距离：3
        - 2. A -> B -> D -> C 距离：7
    - 选择：其他路径1
4. A ——> D
    - 1. A  -> C -> D 距离5
        2. A -> B -> D 距离6
        3. A -> C -> B -> D 距离11
        4. A -> B -> C -> D 距离4
    - 选择：路径 4



