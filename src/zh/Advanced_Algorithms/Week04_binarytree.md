---
title: 高级算法——第4周ppt——二叉树
icon: python
date: 2024-9-26 21:18:12
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

## 1. 二叉树基本信息

二叉树（Binary Tree）是一种非线性数据结构，代表“祖先”和“后代”的派生关系，体现了“一分为二”的分治逻辑。与链表类似，二叉树的基本单元是节点，每个节点包含值，左子结点引用和右子节点引用。

```python
class TreeNode:
    def __init__(self, val:int):
        self.val = val   # 节点值
        self.left = None   # 左子节点
        self.right = None  # 右子节点
```

每个节点都有两个引用（指针）。分别指向左子结点（left-child node）和右子节点（right-child node），该节点被称为这两个子节点的父节点（parent node）。当给定一个二叉树的节点时，我们将该节点的左子结点及其以下节点形成的数称为该节点的左子树（left-subtree），同理可得右子树（right-subtree)。

在二叉树中，除叶节点外，其他所有节点都包含子节点和非空子树。如图所示，如果讲“节点2”视作父节点，则其左子节点和右子节点分别是“节点4”和“节点5”，左子树是“节点4及其以下节点形成的树”，右子树是“节点5及其以下节点形成的树”。

![IMG_2445(20240926-214838)](./Week04_binarytree.assets/IMG_2445(20240926-214838).PNG)

常用术语：

- 根结点（root node）：位于二叉树顶层的节点，没有父节点。
- 叶节点（leaf node）：没有子节点的节点，其两个指针均指向 `None`
- 边（edge）：连接两个节点的线段，即节点引用（指针）。
- 节点所在的层（level）：从顶至底递增，根结点所在层为 1.
- 二叉树的高度（height）：从根节点到最远叶节点所经过的边的数量。
- 节点的度（degree）：节点的子节点的数量，在二叉树中，度的取值范围是0、1、2。
- 节点的深度（depth）：从根结点到该节点所经历边的数量。
- 节点的高度（height）：从距离该节点最远的叶节点到该节点所经过的边的数量。

![IMG_2446(20240926-221113)](./Week04_binarytree.assets/IMG_2446(20240926-221113).PNG)

::: warning

请注意，我们通常将“高度”和“深度”定义为“经过的边的数量”，但有些题目或教材可能会将其定义为“经过的节点的数量”。在这种情况下，高度和深度都需要加 1 。

:::



## 2. 二叉树基本操作

### 2.1 初始化二叉树

与链表类似，首先初始化节点。

```python
class TreeNode:
    def __init__(self, val: int):
        self.val = val  # 节点值
        self.left = None  # 左子节点
        self.right = None  # 右子节点


n1 = TreeNode(val=1)
n2 = TreeNode(val=2)
n3 = TreeNode(val=3)
n4 = TreeNode(val=4)
n5 = TreeNode(val=5)
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
```

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=class%20TreeNode%3A%0A%20%20%20%20def%20__init__%28self,%20val%3A%20int%29%3A%0A%20%20%20%20%20%20%20%20self.val%20%3D%20val%20%20%23%20%E8%8A%82%E7%82%B9%E5%80%BC%0A%20%20%20%20%20%20%20%20self.left%20%3D%20None%20%20%23%20%E5%B7%A6%E5%AD%90%E8%8A%82%E7%82%B9%0A%20%20%20%20%20%20%20%20self.right%20%3D%20None%20%20%23%20%E5%8F%B3%E5%AD%90%E8%8A%82%E7%82%B9%0A%0A%0An1%20%3D%20TreeNode%28val%3D1%29%0An2%20%3D%20TreeNode%28val%3D2%29%0An3%20%3D%20TreeNode%28val%3D3%29%0An4%20%3D%20TreeNode%28val%3D4%29%0An5%20%3D%20TreeNode%28val%3D5%29%0An1.left%20%3D%20n2%0An1.right%20%3D%20n3%0An2.left%20%3D%20n4%0An2.right%20%3D%20n5&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=35&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>



由 [](https://pythontutor.com) 可知以上代码的运行逻辑，即先建立所有节点的子节点并初始化为None，再把相应的子节点一一对应放入。



### 2.2 插入与删除节点

与链表类似，在二叉树中插入与删除节点可以通过修改指针来实现。







