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





