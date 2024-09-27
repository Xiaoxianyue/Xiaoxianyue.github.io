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

1. 下图示意的是插入节点的过程。

![5217dda2d00603619c9fd8cd8629436](./Week04_binarytree.assets/5217dda2d00603619c9fd8cd8629436.jpg)

插入节点的代码：

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
p = TreeNode(val=0)
n1.left = n1
n1.right = n3
n2.left = n4
n2.right = n5
n1.left = p
p.left = n2
```

去掉刚刚添加的节点？

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
p = TreeNode(val=0)
n1.left = n1
n1.right = n3
n2.left = n4
n2.right = n5

n1.left = p
p.left = n2

n1.left = n2
```





可视化输出二叉树：

::: tabs

@tab 

原二叉树

```python
class TreeNode:
    """二叉树节点类"""
    def __init__(self, val: int):
        self.val: int = val                # 节点值
        self.left: 'TreeNode' | None = None  # 左子节点引用
        self.right: 'TreeNode' | None = None # 右子节点引用

def display(root):
    """打印二叉树为字符树"""
    lines, *_ = _display_aux(root)
    for line in lines:
        print(line)

def _display_aux(node):
    """返回包含当前子树所有行的列表，以及子树宽度、高度和水平坐标"""
    if node is None:
        return [" "], 0, 0, 0

    line = f'{node.val}'
    width = len(line)
    height = 1
    middle = width // 2

    # 只有左子树
    if node.left and not node.right:
        l_lines, l_width, l_height, l_middle = _display_aux(node.left)
        first_line = ' ' * (l_middle + 1) + '_' * (l_width - l_middle - 1) + line
        second_line = ' ' * l_middle + '/' + ' ' * (l_width - l_middle - 1 + width)
        shifted_lines = [line + ' ' * width for line in l_lines]
        return [first_line, second_line] + shifted_lines, l_width + width, l_height + 2, l_width + width // 2

    # 只有右子树
    if not node.left and node.right:
        r_lines, r_width, r_height, r_middle = _display_aux(node.right)
        first_line = line + '_' * r_middle + ' ' * (r_width - r_middle)
        second_line = ' ' * (width + r_middle) + '\\' + ' ' * (r_width - r_middle - 1)
        shifted_lines = [' ' * width + line for line in r_lines]
        return [first_line, second_line] + shifted_lines, width + r_width, r_height + 2, width // 2

    # 同时有左右子树
    if node.left and node.right:
        l_lines, l_width, l_height, l_middle = _display_aux(node.left)
        r_lines, r_width, r_height, r_middle = _display_aux(node.right)
        first_line = ' ' * (l_middle + 1) + '_' * (l_width - l_middle - 1) + line + '_' * r_middle + ' ' * (r_width - r_middle)
        second_line = ' ' * l_middle + '/' + ' ' * (l_width - l_middle - 1 + width + r_middle) + '\\' + ' ' * (r_width - r_middle - 1)
        # 对齐高度
        if l_height < r_height:
            l_lines += [' ' * l_width] * (r_height - l_height)
        elif r_height < l_height:
            r_lines += [' ' * r_width] * (l_height - r_height)
        merged_lines = [a + ' ' * width + b for a, b in zip(l_lines, r_lines)]
        return [first_line, second_line] + merged_lines, l_width + width + r_width, max(l_height, r_height) + 2, l_width + width // 2

    # 叶子节点
    return [line], width, height, middle

# 示例：创建二叉树并打印
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.right = TreeNode(6)

display(root)
```

/ output

```python
  _1 
 /  \
 2  3
/ \  
4 5 
```



@tab 二叉树添加节点p后

```python
class TreeNode:
    """二叉树节点类"""
    def __init__(self, val: int):
        self.val: int = val                # 节点值
        self.left: 'TreeNode' | None = None  # 左子节点引用
        self.right: 'TreeNode' | None = None # 右子节点引用

def display(root):
    """打印二叉树为字符树"""
    lines, *_ = _display_aux(root)
    for line in lines:
        print(line)

def _display_aux(node):
    """返回包含当前子树所有行的列表，以及子树宽度、高度和水平坐标"""
    if node is None:
        return [" "], 0, 0, 0

    line = f'{node.val}'
    width = len(line)
    height = 1
    middle = width // 2

    # 只有左子树
    if node.left and not node.right:
        l_lines, l_width, l_height, l_middle = _display_aux(node.left)
        first_line = ' ' * (l_middle + 1) + '_' * (l_width - l_middle - 1) + line
        second_line = ' ' * l_middle + '/' + ' ' * (l_width - l_middle - 1 + width)
        shifted_lines = [line + ' ' * width for line in l_lines]
        return [first_line, second_line] + shifted_lines, l_width + width, l_height + 2, l_width + width // 2

    # 只有右子树
    if not node.left and node.right:
        r_lines, r_width, r_height, r_middle = _display_aux(node.right)
        first_line = line + '_' * r_middle + ' ' * (r_width - r_middle)
        second_line = ' ' * (width + r_middle) + '\\' + ' ' * (r_width - r_middle - 1)
        shifted_lines = [' ' * width + line for line in r_lines]
        return [first_line, second_line] + shifted_lines, width + r_width, r_height + 2, width // 2

    # 同时有左右子树
    if node.left and node.right:
        l_lines, l_width, l_height, l_middle = _display_aux(node.left)
        r_lines, r_width, r_height, r_middle = _display_aux(node.right)
        first_line = ' ' * (l_middle + 1) + '_' * (l_width - l_middle - 1) + line + '_' * r_middle + ' ' * (r_width - r_middle)
        second_line = ' ' * l_middle + '/' + ' ' * (l_width - l_middle - 1 + width + r_middle) + '\\' + ' ' * (r_width - r_middle - 1)
        # 对齐高度
        if l_height < r_height:
            l_lines += [' ' * l_width] * (r_height - l_height)
        elif r_height < l_height:
            r_lines += [' ' * r_width] * (l_height - r_height)
        merged_lines = [a + ' ' * width + b for a, b in zip(l_lines, r_lines)]
        return [first_line, second_line] + merged_lines, l_width + width + r_width, max(l_height, r_height) + 2, l_width + width // 2

    # 叶子节点
    return [line], width, height, middle

# 示例：创建二叉树并打印
# root = TreeNode(1)
# root.left = TreeNode(2)
# root.right = TreeNode(3)
# root.left.left = TreeNode(4)
# root.left.right = TreeNode(5)
# root.right.right = TreeNode(6)

n1 = TreeNode(val=1)
n2 = TreeNode(val=2)
n3 = TreeNode(val=3)
n4 = TreeNode(val=4)
n5 = TreeNode(val=5)
p = TreeNode(val=0)
n1.left = n1
n1.right = n3
n2.left = n4
n2.right = n5
n1.left = p
p.left = n2

display(n1)
```

/ output

```python
    1 
   / \
  _0 3
 /    
 2    
/ \   
4 5   
```



@tab 

二叉树再删除节点p

```python
class TreeNode:
    """二叉树节点类"""
    def __init__(self, val: int):
        self.val: int = val                # 节点值
        self.left: 'TreeNode' | None = None  # 左子节点引用
        self.right: 'TreeNode' | None = None # 右子节点引用

def display(root):
    """打印二叉树为字符树"""
    lines, *_ = _display_aux(root)
    for line in lines:
        print(line)

def _display_aux(node):
    """返回包含当前子树所有行的列表，以及子树宽度、高度和水平坐标"""
    if node is None:
        return [" "], 0, 0, 0

    line = f'{node.val}'
    width = len(line)
    height = 1
    middle = width // 2

    # 只有左子树
    if node.left and not node.right:
        l_lines, l_width, l_height, l_middle = _display_aux(node.left)
        first_line = ' ' * (l_middle + 1) + '_' * (l_width - l_middle - 1) + line
        second_line = ' ' * l_middle + '/' + ' ' * (l_width - l_middle - 1 + width)
        shifted_lines = [line + ' ' * width for line in l_lines]
        return [first_line, second_line] + shifted_lines, l_width + width, l_height + 2, l_width + width // 2

    # 只有右子树
    if not node.left and node.right:
        r_lines, r_width, r_height, r_middle = _display_aux(node.right)
        first_line = line + '_' * r_middle + ' ' * (r_width - r_middle)
        second_line = ' ' * (width + r_middle) + '\\' + ' ' * (r_width - r_middle - 1)
        shifted_lines = [' ' * width + line for line in r_lines]
        return [first_line, second_line] + shifted_lines, width + r_width, r_height + 2, width // 2

    # 同时有左右子树
    if node.left and node.right:
        l_lines, l_width, l_height, l_middle = _display_aux(node.left)
        r_lines, r_width, r_height, r_middle = _display_aux(node.right)
        first_line = ' ' * (l_middle + 1) + '_' * (l_width - l_middle - 1) + line + '_' * r_middle + ' ' * (r_width - r_middle)
        second_line = ' ' * l_middle + '/' + ' ' * (l_width - l_middle - 1 + width + r_middle) + '\\' + ' ' * (r_width - r_middle - 1)
        # 对齐高度
        if l_height < r_height:
            l_lines += [' ' * l_width] * (r_height - l_height)
        elif r_height < l_height:
            r_lines += [' ' * r_width] * (l_height - r_height)
        merged_lines = [a + ' ' * width + b for a, b in zip(l_lines, r_lines)]
        return [first_line, second_line] + merged_lines, l_width + width + r_width, max(l_height, r_height) + 2, l_width + width // 2

    # 叶子节点
    return [line], width, height, middle

# 示例：创建二叉树并打印
# root = TreeNode(1)
# root.left = TreeNode(2)
# root.right = TreeNode(3)
# root.left.left = TreeNode(4)
# root.left.right = TreeNode(5)
# root.right.right = TreeNode(6)

n1 = TreeNode(val=1)
n2 = TreeNode(val=2)
n3 = TreeNode(val=3)
n4 = TreeNode(val=4)
n5 = TreeNode(val=5)
p = TreeNode(val=0)
n1.left = n1
n1.right = n3
n2.left = n4
n2.right = n5
n1.left = p
p.left = n2
n1.left = n2

display(n1)
```

/ output

```python
  _1 
 /  \
 2  3
/ \  
4 5 
```

:::



::: info

需要注意的是，插入节点可能会改变二叉树的原有逻辑结构，而删除节点通常意味着删除该节点及其所有子树。因此，在二叉树中，插入与删除通常是由一套操作配合完成的，以实现有实际意义的操作。

:::









## 3. 常见二叉树类型

### 3.1 完美二叉树

完美二叉树(perfect binary tree)所有层的节点都被完全填满。在完美二叉树中，叶节点的度为0，其余所有节点的度都为2；若树的高度为h，则总节点数为$2^{h+1} - 1$，呈现标准的指数级关系，反映了自然界中常见的细胞分裂现象。

::: tips

请注意，在中文社区中，完美二叉树又可以称为满二叉树

:::

### 3.2 完全二叉树

完全二叉树（complete binary tree）只有最底层的节点未被填满，且最底层节点尽量靠左填充。

<img src="./Week04_binarytree.assets/f836df0e315d62fd3e13984f8a56eda.jpg" alt="f836df0e315d62fd3e13984f8a56eda" style="zoom:33%;" />

### 3.3 完满二叉树

完满二叉树（full binary tree）除了叶节点之外，其余所有节点都有两个子节点。

<img src="./Week04_binarytree.assets/11996f9f3adbf474c69e91208810879.jpg" alt="11996f9f3adbf474c69e91208810879" style="zoom: 25%;" />

### 3.4 平衡二叉树

平衡二叉树（balanced binary tree）中任意节点的左子树和右子树的高度差的绝对值不超过1。

<img src="./Week04_binarytree.assets/06a59b571390daafe4e082fe8608c12.jpg" alt="06a59b571390daafe4e082fe8608c12" style="zoom:33%;" />

### 3.5 二叉树退化

当二叉树的每层节点都被填满时，达到“完美二叉树”；当所有节点都偏向一侧时，二叉树退化为“链表”。

- 完美二叉树是理想情况，可以充分发挥二叉树“分治”的优势。
- 链表则是另一个极端，所有操作都变为线性操作，时间复杂度退化至 O(n)。

<img src="./Week04_binarytree.assets/56eaf3705c725e54d4666ef0f01d78a.jpg" alt="56eaf3705c725e54d4666ef0f01d78a" style="zoom:33%;" />



::: details

<img src="./Week04_binarytree.assets/8ee88391a9bfff5c4614774a753065a.jpg" alt="8ee88391a9bfff5c4614774a753065a" style="zoom:33%;" />

——chatgpt:

是的，您所上传的图片确实是一个二叉树的形式，虽然从它的结构上看更像是个“退化”的形式。通常情况下，如果二叉树的某些节点只有一个子节点（左子节点或者右子节点），而另一个子节点为空，这样的二叉树被称为“退化二叉树”（或“病态二叉树”）。这会使得树的形状接近于一条线，而不是理想的完全平衡的形状。

从图片来看，这个树的结构比较简洁，每个节点只有一个或者两个子节点，但并没有形成完全的平衡形状。如果这表示一种数据结构，通常会导致某些操作的效率下降，如查找、插入等。

如果您有更多关于二叉树结构的问题，或者需要分析具体的二叉树实现，欢迎进一步探讨。

不完全是一个退化二叉树。

:::



::: center

表7-1 二叉树的最佳结构和最差结构

:::

|                             | 完美二叉树         | 链表    |
| --------------------------- | ------------------ | ------- |
| 第 $i$ 层的节点数量         | $2^{i-1}$          | $1$     |
| 高度为 $h$ 的树的叶节点数量 | $2^h$              | $1$     |
| 高度为 $h$ 的树的节点总数   | $2^{h+1} - 1$      | $h + 1$ |
| 节点总数为 $n$ 的树的高度   | $\log_2 (n+1) - 1$ | $n - 1$ |





















