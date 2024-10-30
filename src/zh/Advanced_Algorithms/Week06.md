---
title: 高级算法——第六周ppt总结
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



## 2. Prim’s algorithm

prim’s algorithm 是一个常用的最小生成树算法。

### 2.1 什么是生成树？

在图论中，一个生成树是包含了图中所有顶点并连接在一起的子图。最小生成树（Minimum Spanning Tree）是一种生成树，且它的边的权值总和最小。简单来说，最小生成树是找到连接所有节点的最低成本路径。

举个例子：假设我们有一些城市，城市之间有道路连接，每条路的建设成本不同。我们希望以最小的建设成本连接所有城市，这时就可以用最小生成树算法来找到最低成本的连接方案。



### 2.2 Prim's algorithm 是什么？

Prim's 算法是一种贪心算法，用来求解加权无向连接图的最小生成树。Prim‘s 算法每次都从已经连接的节点中选择一条最短的边来进行扩张，直到所有节点都被包括在内。



### 2.3 Prim's 算法的基本思想

- 开始，选择一个起点，并把它加入到生成树当中
- 逐步扩展：每次从当前生成树中找出一个连接到树外界点的权重边，将该边和该节点加入生成树。
- 重复这个过程，直到所有节点都加入到生成树中。



### 2.4 Prim 算法的步骤

假设我们有一个图 $G = (V, E)$，其中 $V$ 是节点集合，$E$ 是边集合，边的权重用 $w$ 表示。

1. **初始化**：从任意一个节点开始，记为节点 $v_0$。
2. **选择边**：找到一个**连接生成树**和**未连接节点**的最小权重边，将该边和对应的节点加入生成树。
3. **重复选择**：重复上一步，直到所有节点都在生成树中。





### 2.5 举个例子

<img src="./Week06.assets/942be49dcef642a79a698dd4e2ccb7a.jpg" alt="942be49dcef642a79a698dd4e2ccb7a" style="zoom:50%;" />

- Step 1：初始化
    - 起始节点，选择节点A ，加入生成树。
    - 已加入节点：{A}
    - 候选边：
        - A – B(1) ; 
        - A – C(3) ; 
        - A – D(4)

- Step 2：选择最小权重边
    - 从候选边中选择权重最小的边 A – B
    - 加入生成树：边 A – B ；节点 B
    - 已加入节点：{A, B}
    - 更新后选边：
        - A – C(3) ;
        - A – D(4) ;
        - B – C(2) ;
        - B – D(5) ;
- Step 3：继续选择最小边
    - 选择权重最小的候选边：B – C
    - 加入最小生成树：边 B – C；节点 C
    - 已加入的节点：{A，B，C}
    - 更新后的选边
        - C – D(6) ;
        - A – D(4) ;
        - B – D(5) ;

- Step 4 :
    - 选择权重最小的边 A – D
    - 加入最小生成树：边 A – D；节点 D
    - 已加入的节点：{A，B，C，D}
    - 所有节点都加入，结束。

- 总结：

    现在最小生成树里的节点和边有：

    - A – B   1
    - B – C   2
    - A – D   4
    - 总长度：7



### 2.6 例子实现

```python
# 导入 heapq 模块，用于实现最小堆（优先队列）
import heapq

def prim(graph, start):
    """
    使用 Prim 算法计算最小生成树（MST）

    参数：
    graph - 图的邻接表表示，格式为 {节点: [(邻居节点, 边的权重), ...]}
    start - 起始节点

    返回：
    mst - 最小生成树的边集合，格式为 [(节点1, 节点2, 权重), ...]
    total_weight - 最小生成树的总权重
    """

    # 初始化最小生成树的边集合为空列表
    mst = []
    # 初始化最小生成树的总权重为 0
    total_weight = 0

    # 创建一个集合来存储已访问过的节点，初始时只包含起始节点
    visited = set([start])

    # 创建一个最小堆（优先队列）来存储候选边，初始为空
    min_heap = []

    # 将起始节点的所有边加入最小堆
    # 遍历起始节点的所有邻居节点
    for neighbor, weight in graph[start]:
        # 将边的信息作为元组 (权重, 起始节点, 目标节点) 加入最小堆
        heapq.heappush(min_heap, (weight,start, neighbor))

    # 当最小堆不为空时，继续循环
    while min_heap:
        # 从最小堆中弹出权重最小的边
        weight, frm, to = heapq.heappop(min_heap)


        # 如果目标节点已经被访问过，跳过该边（避免形成环）
        if to in visited:
            continue


        # 将该边加入最小生成树的边集合
        mst.append((frm, to, weight))
        # 更新最小生成树的总权重
        total_weight += weight
        # 将目标节点标记为已访问
        visited.add(to)

        # 遍历目标节点的所有邻居节点
        for neighbor, w in graph[to]:
            # 如果邻居节点未被访问过，将边加入最小堆
            if neighbor not in visited:
                heapq.heappush(min_heap, (w, to, neighbor))

    # 返回最小生成树的边集合和总权重
    return mst, total_weight

# 测试代码
if __name__ == "__main__":
    # 定义图，使用邻接表表示，每个节点对应一个列表，列表中包含其邻居节点和边的权重
    graph = {
        'A': [('B', 1), ('C', 3), ('D', 4)],
        'B': [('A', 1), ('C', 2), ('D', 5)],
        'C': [('A', 3), ('B', 2), ('D', 6)],
        'D': [('A', 4), ('B', 5), ('C', 6)],
    }

    # 调用 prim 函数，指定起始节点为 'A'
    mst, total_weight = prim(graph, 'A')

    # 输出最小生成树的边
    print("最小生成树的边：")
    # 遍历最小生成树的边集合
    for edge in mst:
        # edge 是一个包含 (起始节点, 目标节点, 权重) 的元组
        print(f"{edge[0]} - {edge[1]} 权重: {edge[2]}")

    # 输出最小生成树的总权重
    print(f"最小生成树的总权重: {total_weight}")
```







## 3. Kruskal 算法

最小生成树算法（MST）贪心算法。简单来说，最小生成树就是一个连接所有顶点的无环子图，且边的权重和最小。

### 3.1 基本步骤

1. 对边排序：将图中所有边按权重（比如：距离，费用）从小到大排序
2. 初始化一个森林：每个顶点看作一个单独的集合（森林）
3. 逐条添加边：从最小权重的边开始，依次尝试加入生成树中。
    - 如果假如这条边不会形成环，就把他加入生成树
    - 如果加入这条边会形成环，就跳过他
4. 重复步骤 3 ，直到生成树中 n - 1 条边（n 为图中顶点数）

最终结果是包含所有顶点，权重和最小的生成树。



步骤详细解：

- 第一步，对边排序

    首先，将所有边按大小排序，这一步可以帮助我们找到权重最小的边，举一个例子：

    - 边（A，B），权重 3
    - 边（B，C），权重 1
    - 边（A，C），权重 2
    - 我们按权重大小排序 （B，C） （A，C） （A，B）

    

- 第二步，初始化森林

    假设图中有三个顶点 A，B，C。我们开始时将每个顶点当作一个单独的集合，也就是说现在有三个集合{A}, {B}, {C}.

    

- 第三步，逐步添加边

    1. 选择权重最小的边 （B，C）
        - 检查这条边是否会形成环。因为 B 和 C 属于不同的集合，所以不会形成环，可以加入生成树
        - 将 B 和 C 合并到一个集合里，更新森林为 {B，C} 和 {A}。
    2. 选取下一个最小边（A，C），权重 2
        - 检查添加边是否会形成环，因为 A 和 C 属于不同的集合，所以不会形成环，可以加入生成树。
        - 将 A 集合加入，更新森林为 {A，B，C}
    3. 继续选择下一条边（A，B），权重3
        - 检查 A 和 B 是否在同一个集合里，此时 A，B 同在集合{A，B，C} 里，因此加入这条边会形成环，不可加入。



### 3.2  Kruskal 算法的关键概念

- **并查集（Union-Find）**：用于跟踪顶点属于哪个集合，并帮助检测是否形成环。这个数据结构可以让合并集合和查找集合变得快速高效。
- **贪心策略**：Kruskal 算法选择权重最小的边开始添加，这是贪心算法的一种特性。它保证每一步都选择当前最优的边，从而达到全局最优。

### 3.3 Kruskal  算法的复杂度

Kruskal 算法的时间复杂度取决于排序和并查集的操作，通常为 $O(E \log E + E \alpha(V))$，其中 $E$ 是边的数量，$V$ 是顶点的数量，$\alpha$ 是极小的阿克曼函数，几乎可以视为常数。因此，Kruskal  算法适用于边较少的稀疏图。

**总结**：Kruskal 算法通过逐步添加最小权重的边来构建最小生成树，确保不会形成环。



### 3.4 例子

边的表：

| 边    | 权重 |
| ----- | ---- |
| A — B | 4    |
| A — F | 2    |
| B — C | 6    |
| B — F | 5    |
| C — D | 3    |
| C — E | 7    |
| D — E | 8    |
| D — F | 4    |
| E — F | 1    |



- 步骤 1 ：对所有边按照权重进行升序排序。
    - E — F   1
    - A — F   2
    - C — D  3
    - A — B   4
    - D — F   4
    - B — F    5
    - B — C   6
    - C — E   7
    - D — E   8



- 步骤 2：

    把每个顶点放入单独的集合里。{A} {B} {C} {D} {E} {F}



- 步骤 3：
    1.  E — F，权重 1，{E} 和 {F} 不在一个集合内。加入边，更新森林{E，F}
    2.  A — F，权重 2，{**A**} 和 {E，**F**} 显然不在一个集合。加入边，更新森林为{A，E，F}
    3. C — D，权重 3，{C} 和 {D} 不在一个集合内。加入边，更新森林{C，D}
    4. A — B，权重 4，{**B**} 和 {**A**，E，F} 不在一个集合内。加入边，更新森林{A，B，E，F}
    5. D — F，权重 4，{C，**D**}和{A，B，E，**F**}不在一个集合内。加入边，更新森林为{A，B，C，D，E，F}
    6. B — F，权重 5，{A，B，C，D，E，F}，B 和 F 在同一个集合里，跳过边
    7. B — C，权重 6，{A，B，C，D，E，F}，B 和 C 在同一个集合里，跳过边
    8. C — E，权重 7，{A，B，C，D，E，F}，C 和 E 在同一个集合里，跳过边
    9. D — E，权重 8，{A，B，C，D，E，F}，D 和 E 在同一个集合里，跳过边

最后的生成树里的边有：{（E，F），（A，F），（C，D），（A，B），（D，F）}，总权重为 14



### 3.5 代码

```python
# 定义一个Edge类来表示图中的边
class Edge:
    def __init__(self, u, v, weight):
        """定义了一个边的数据结构，包含两个顶点和一个权重。"""
        self.u = u              # 边的一个顶点 u / 边的起始顶点
        self.v = v              # 边的另一个顶点v
        self.weight = weight    # 边的权重weight

# 定义并查集类（Union-Find），用于检测环
class UnionFind:
    def __init__(self, vertices):
        # 初始化每个顶点的父节点为其自身，表示每个顶点都是一个独立的集合
        self.parent = {vertex: vertex for vertex in vertices}

    # 查找操作，找到顶点的根节点，并进行路径压缩
    def find(self, vertex):
        # 如果当前顶点的父节点不是自己，递归寻找父节点，直到找到根节点
        if self.parent[vertex] != vertex:
            # 递归调用find，路径压缩，将当前节点直接连接到根节点
            self.parent[vertex] = self.find(self.parent[vertex])
        # 返回根节点
        return self.parent[vertex]

    # 合并操作，将两个顶点所在的集合合并为一个集合
    def union(self, u, v):
        # 分别找到u和v的根节点
        root_u = self.find(u)
        root_v = self.find(v)
        # 如果u和v的根节点相同，说明它们已经连通，合并会形成环，返回False
        if root_u == root_v:
            return False
        # 否则，将v的根节点的父节点指向u的根节点，合并两个集合
        self.parent[root_v] = root_u
        return True  # 合并成功，返回True

# Kruskal算法的主体函数
def kruskal(vertices, edges):
    # 初始化并查集，传入所有顶点
    uf = UnionFind(vertices)
    # 将所有边按照权重从小到大排序，使用lambda函数作为排序的键
    sorted_edges = sorted(edges, key=lambda edge: edge.wight)
    # 初始化最小生成树的边集合为空列表
    mst = []

    # 遍历排序后的边集合
    for edge in sorted_edges:
        # 尝试将当前边的两个顶点合并
        if uf.union(edge.u, edge.v):
            # 如果合并成功，说明没有形成环，将该边加入最小生成树
            mst.append(edge)
            # 如果最小生成树的边数等于顶点数减一，生成树构建完成，退出循环
            if len(mst) == len(vertices) - 1:
                break
        else:
            # 合并失败，说明加入该边会形成环，跳过该边
            continue

    # 返回构建好的最小生成树的边集合
    return mst

# 主程序入口，测试代码
if __name__ == "__main__":
    # 定义图的顶点集合
    vertices = ['A', 'B', 'C', 'D', 'E', 'F']
    # 定义图的边集合，创建Edge实例，传入两个顶点和边的权重
    edges = [
        Edge('A', 'B', 4),
        Edge('A', 'F', 2),
        Edge('B', 'C', 6),
        Edge('B', 'F', 5),
        Edge('C', 'D', 3),
        Edge('C', 'E', 7),
        Edge('D', 'E', 8),
        Edge('D', 'F', 4),
        Edge('E', 'F', 1)
    ]

    # 调用kruskal函数，传入顶点和边集合，获取最小生成树的边集合
    mst = kruskal(vertices, edges)
    # 输出最小生成树的边和总权重
    print("最小生成树的边为：")
    total_weight = 0  # 初始化总权重
    # 遍历最小生成树的边集合
    for edge in mst:
        # 输出每条边的两个顶点和权重
        print(f"{edge.u} - {edge.v}, 权重: {edge.weight}")
        # 累加总权重
        total_weight += edge.weight
    # 输出最小生成树的总权重
    print(f"最小生成树的总权重为：{total_weight}")
```







## 4. Kruskal 和 Prim 区别

Kruskal 算法和 Prim 算法都是解决最小生成树（MST）问题的贪心算法，但它们在实现上有一些关键的区别。这些区别主要体现在选择边的方式、适用的图类型以及底层的数据结构上。

### 1. 主要区别

| 区别           | Kruskal算法                                 | Prim算法                       |
| -------------- | ------------------------------------------- | ------------------------------ |
| **算法类型**   | 基于边的选择                                | 基于顶点的扩展                 |
| **执行方式**   | 按权重对所有边排序，然后依次选取边来构建MST | 从一个起点开始，逐步扩展MST    |
| **适用图类型** | 更适合**稀疏图**（边较少的图）              | 更适合**稠密图**（边较多的图） |
| **数据结构**   | 并查集（Union-Find）                        | 最小堆（优先队列）             |

### 2. 详细解释

#### 选择边的方式

- **Kruskal算法**：选择**权重最小**的边，逐步将这些边添加到最小生成树中，前提是不形成环。Kruskal是**基于边的选择**，所以它从全局的角度出发，先对所有边排序，再从权重最小的边开始。

- **Prim算法**：从一个**起始顶点**出发，不断选择与已选顶点连接的**权重最小的边**扩展MST。因此，Prim是**基于顶点的扩展**，每次只考虑与当前生成树连接的边。它逐步扩展MST，直到所有顶点都被包括。

#### 执行方式

- **Kruskal算法**：算法先对边按权重排序，然后从权重最小的边开始，逐条检查并加入MST，直到所有顶点连接在一起。对于每条边，都用并查集检查是否会形成环。

- **Prim算法**：Prim算法从一个顶点开始，将与当前生成树相连的最小权重边加入生成树。通过最小堆存储边的权重并逐步扩展，直到生成树覆盖所有顶点。

#### 适用图类型

- **Kruskal算法**：因为Kruskal算法是基于边的选择和排序，对边较少的**稀疏图**效率更高。边的数量较少，排序和边选择过程会更快。

- **Prim算法**：Prim算法适合边较多的**稠密图**，因为它从一个顶点逐步扩展，只需要维护与当前生成树相连的边集合。特别是用邻接矩阵或优先队列实现时，效率较高。

#### 数据结构

- **Kruskal算法**：通常使用并查集来管理生成树的连接状态，以便快速合并集合和检测环。

- **Prim算法**：用最小堆或优先队列来维护与当前生成树相连的边，以便快速找到权重最小的边进行扩展。

### 3. 适用场景举例

- **Kruskal算法适合场景**：适合边较少、图不连通的情况。例如，将一些点连接成网络，而这些点可能分布在较大的区域且连接稀疏。

- **Prim算法适合场景**：适合边较多的连通图。例如，电网、城市道路等密集连接的网络。

### 4. 总结

- **Kruskal** 是通过从所有边中选择权重最小的边来逐步构建MST，适合稀疏图。
- **Prim** 是通过从起始顶点逐步扩展最小生成树，适合稠密图。



