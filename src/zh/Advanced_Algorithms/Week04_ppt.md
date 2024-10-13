---
title: 高级算法——第四周ppt总结
icon: python
date: 2024-10-11 14:02:27
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

## 1. BST | Searching balanced and unbalanced trees

<img src="./Week04_ppt.assets/image-20241011165649894.png" alt="image-20241011165649894" style="zoom: 33%;" />

### 1.1 balanced or not?

<img src="./Week04_ppt.assets/image-20241011140828912.png" alt="image-20241011140828912" style="zoom: 67%;" />

### 1.2 Height

Node Height：**从距离该节点最远的叶节点到该节点所经过的边的数量。**

Tree Height：二叉树的层数。



### 1.3 AVL Tree

(平衡二叉树？？)

#### 1.3.1 基本特性

- AVL trees require heights of left and right children of every node to differ by at most ± 1
- AVL Trees are balanced
- Worst case is when one subtree has 1 more than the other for every node

::: note translation

- AVL 树要求每个节点的左右子节点高度最多相差 ± 1
- AVL 树是平衡的
- 最差的情况是一个子树的每个节点都比另一个子树多 1 个节点

:::

#### 1.3.2 Worst…

<img src="./Week04_ppt.assets/image-20241011143741388.png" alt="image-20241011143741388" style="zoom:67%;" />

## 2. 如何实现一个AVL树

- In theory it is possible to rebalance an existing tree
- But it makes more sense to balance as we build
- The simplest solution given an unbalanced tree is to flatten it and then reconstruct 
- Applying AVL on insertion means the tree can never be unbalanced
- This section explains how that happens

::: node translation

- 理论上可以重新平衡现有的树木
- 但更合理的做法是在构建过程中实现平衡
- 对于一棵不平衡的树，最简单的解决方法就是将其扁平化，然后重新构建 
- 在插入时应用 AVL 意味着树永远不会不平衡
- 本节将解释如何做到这一点

:::



### 2.1 Rotation

- **4 cases：**

    - Double left heavy

    - Double right heavy

    - Left-right heavy

    - Right-left heavy

#### 2.1.1 Double Left

<img src="./Week04_ppt.assets/image-20241011152614500.png" alt="image-20241011152614500" style="zoom: 33%;" />

##### **Single right Rotation**

Step 1：

<img src="./Week04_ppt.assets/image-20241011152747009.png" alt="image-20241011152747009" style="zoom:25%;" />

Step 2：

<img src="./Week04_ppt.assets/image-20241011152834749.png" alt="image-20241011152834749" style="zoom:25%;" />



#### 2.1.2 Double Left Heavy

<img src="./Week04_ppt.assets/image-20241011152921625.png" alt="image-20241011152921625" style="zoom:33%;" />

##### Let'try

<img src="./Week04_ppt.assets/image-20241011153020395.png" alt="image-20241011153020395" style="zoom:33%;" />

##### Solution

Step 1:

<img src="./Week04_ppt.assets/image-20241011153355377.png" alt="image-20241011153355377" style="zoom:25%;" />

Step 2:

<img src="./Week04_ppt.assets/image-20241011153412597.png" alt="image-20241011153412597" style="zoom:25%;" />

Step 3:

<img src="./Week04_ppt.assets/image-20241011153430174.png" alt="image-20241011153430174" style="zoom:25%;" />

#### 2.1.2 Pseudocode

![image-20241011153533715](./Week04_ppt.assets/image-20241011153533715.png)

## 3. Binary tree

### 3.1 前言及目录

#### 3.1.1 前言

- We have started to look at
    - Binary Trees
    - Heaps
- A heap is a type of binary tree
- Arrangement of data as trees speeds up search by reducing the number of operations necessary to find a target
- They allow efficient 
    - Search (finding a value)
    - Deleting
    - Inserting

#### 3.1.2 目录

- Expand your understanding of trees:		

    unbalanced trees | well-balanced trees | AVL trees

- Understand types of tree traversal:	pre-order | in-order | post-order

- Understand further searches:	breadth-first | depth-first



### 3.2 Terms

![image-20241011164453947](./Week04_ppt.assets/image-20241011164453947.png)



### 3.3 Rules

- For each node, the value of all nodes in its left subtree must be less
- For each node, the value of all nodes in its right subtree must be greater
- Any value on the right must be greater than any value on the left			

<img src="./Week04_ppt.assets/image-20241011165818464.png" alt="image-20241011165818464" style="zoom:50%;" />

### 3.4 Insertion

<img src="./Week04_ppt.assets/image-20241011170646705.png" alt="image-20241011170646705" style="zoom: 25%;" />

1. **Insert 9**

<img src="./Week04_ppt.assets/image-20241011170714878.png" alt="image-20241011170714878" style="zoom:25%;" />



<img src="./Week04_ppt.assets/image-20241011170723215.png" alt="image-20241011170723215" style="zoom:25%;" />



<img src="./Week04_ppt.assets/image-20241011170740036.png" alt="image-20241011170740036" style="zoom:25%;" />

<img src="./Week04_ppt.assets/image-20241011170808027.png" alt="image-20241011170808027" style="zoom:25%;" />

2. **Insert 2**

<img src="./Week04_ppt.assets/image-20241011171049448.png" alt="image-20241011171049448" style="zoom:25%;" />

<img src="./Week04_ppt.assets/image-20241011171059638.png" alt="image-20241011171059638" style="zoom:25%;" />

<img src="./Week04_ppt.assets/image-20241011171113201.png" alt="image-20241011171113201" style="zoom:25%;" />

<img src="./Week04_ppt.assets/image-20241011171127900.png" alt="image-20241011171127900" style="zoom:25%;" />

### 3.5 Delete

#### 3.5.1 if we wanna delete a leaf node, we just move it.

#### 3.5.2 One Child

Here’s the BST with inserted 9. Now we want to delete 12. How? This BST is different; 12 has a child (9)

<img src="./Week04_ppt.assets/image-20241011171600658.png" alt="image-20241011171600658" style="zoom:50%;" />

**Step:**

1. We need to attach what will be thnew parent of 9, to 9

    <img src="./Week04_ppt.assets/image-20241011172209351.png" alt="image-20241011172209351" style="zoom:50%;" />

2. and remove 12

    <img src="./Week04_ppt.assets/image-20241011172241147.png" alt="image-20241011172241147" style="zoom:50%;" />

#### 3.5.3 Two Children?

- Now, looking again at the original BST
- We now want to delete 8
- But hold on – it has TWO children, 6 and 12

**Step:**

So what we need to do is not remove the node…… but remove its data

<img src="./Week04_ppt.assets/image-20241011173054300.png" alt="image-20241011173054300" style="zoom:25%;" />

We need to look for the minimum value in the right subtree of the node…… which is 12 (there is no other value)



<img src="./Week04_ppt.assets/image-20241011173109809.png" alt="image-20241011173109809" style="zoom:25%;" />



<img src="./Week04_ppt.assets/image-20241011173121346.png" alt="image-20241011173121346" style="zoom:25%;" />

Copy the data to the empty node…… and delete the leaf

<img src="./Week04_ppt.assets/image-20241011173131857.png" alt="image-20241011173131857" style="zoom:25%;" />

::: info

有两个孩子时可以怎么选择替换的节点？

如果从右边选，选最小的；从左边选，选最大的！

如这里：

<img src="./Week04_ppt.assets/image-20241011174139380.png" alt="image-20241011174139380" style="zoom:25%;" />

可以选 7 或者 11

:::





### 3.6 Traversal

#### 3.6.1 three kinds

Pre order   |   In order   |   Post order

#### 3.6.2 Pre Order

- 定义

<img src="./Week04_ppt.assets/image-20241011204546188.png" alt="image-20241011204546188" style="zoom: 50%;" />

- 伪代码

    <img src="./Week04_ppt.assets/image-20241011204628955.png" alt="image-20241011204628955" style="zoom:50%;" />

#### 3.6.3 In Order

- 定义

    <img src="./Week04_ppt.assets/image-20241011205125380.png" alt="image-20241011205125380" style="zoom: 50%;" />

- 伪代码

    <img src="./Week04_ppt.assets/image-20241011205201534.png" alt="image-20241011205201534" style="zoom:50%;" />

#### 3.6.4 Post Order

- 定义

    <img src="./Week04_ppt.assets/image-20241011205230536.png" alt="image-20241011205230536" style="zoom:50%;" />

- 伪代码

    <img src="./Week04_ppt.assets/image-20241011205247170.png" alt="image-20241011205247170" style="zoom:50%;" />



### 3.7 深度和广度遍历

- **Breadth First Search**

<img src="./Week04_ppt.assets/image-20241011205501314.png" alt="image-20241011205501314" style="zoom:50%;" />

- Depth First Search

<img src="./Week04_ppt.assets/image-20241011205608134.png" alt="image-20241011205608134" style="zoom:50%;" />

- 什么时候使用 Breadth First 什么时候使用 Depth First？
    - BFS is good for balanced trees
    - DFS is good for unbalanced trees
    - We’ll come back to that shortly
    - BUT – there’s a better way: binary search trees





## 4. BST —— Binary Search Trees

回顾：在二叉搜索树中，左节点的值 < 根结点的值 < 右节点的值，我们可以利用这一特性来搜索我们想要的值。

### 4.1 Balanced and Unbalanced Trees —— BFS or DFS

<img src="./Week04_ppt.assets/image-20241011235041096.png" alt="image-20241011235041096" style="zoom:50%;" />

<img src="./Week04_ppt.assets/image-20241011235112471.png" alt="image-20241011235112471" style="zoom:50%;" />

<img src="./Week04_ppt.assets/image-20241011235136675.png" alt="image-20241011235136675" style="zoom:50%;" />

<img src="./Week04_ppt.assets/image-20241011235324606.png" alt="image-20241011235324606" style="zoom:50%;" />



### 4.2 AVL Tree









