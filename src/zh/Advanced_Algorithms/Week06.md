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