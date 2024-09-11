---
title: 高级算法——第2周ppt——排序算法
icon: python
date: 2024-9-08 19:26:19
author: XiaoXianYue
isOriginal: true
category: 
    - 大三上
    - 高级算法
tag:
    - 大三上
    - 高级算法
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

## 0. 目录

- bogosort
- insertion sort
- bubble sort
- merge sort
- quick sort



## 1. Bogosort

- 这是一个笑话算法，随机洗牌一个列表； 
- 如果洗牌没有按正确顺序排列，就再洗一次  
- 继续洗牌，直到得到一个排序列表！
- 查看 python 代码

### 1.1 前置知识

- 随机库：`random`
    - `random.randint(a, b)`
- 内置函数：
    - `len()`    
    - `range()`
- 语法：
    - `for`
    - `function`
    - 比较运算符
    - 多个变量同时赋予不同值 | 引入多一个变量

### 1.2 前置知识查漏补缺

1. 随机库：

`random.randint(a, b)`用于随机生成一个从 a 到 b 的数字，==包含 a 和 b==。

### 1.3 排序原理

随机打乱列表，判断列表是否有序。无序则继续打乱，继续判断。

### 1.4 功能拆解

#### 1.4.1 如何判断一个列表是否有序？

> 思考一下，类似之前讲到，如何判断用户输入是否为浮点数？
>
> - Solution 1：首先，用内置函数 `count()`算出输入中有几个小数点（.），再 `replace()`小数点判断其是否为纯数字。
> - Solution 2：直接 `replace('.', '', 1)`,控制替换次数为1，然后判断其是否为纯数字。

**Solution 01：（不使用函数的方法）**

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
is_sorted = True
former = lst[0]
for i in lst:
    if i >= former:
        former = i
    else:
        is_sorted = False
        break
print(is_sorted)
```



**Solution 02：（使用函数的方法）**

```python
lst = [1, 2, 4, 5, 6, 3]
def is_sorted(lst):
    former = lst[0]
    for i in lst:
        if i >= former:
            former = i
        else:
            return False
    return True
```

::: details 实现原理

使用了函数遇到 `return`即停止的特性。

:::



**Solution 03：（优化的方法）**

非函数：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
is_sorted = True
for i in range(len(lst) - 1):
    if lst[i] <= lst[i + 1]:
        is_sorted = True
    else:
        is_sorted = False
        break
print(is_sorted)
```

or

函数：

```python
def is_sorted(lst):
    # 从第二个元素开始遍历，因为第一个元素没有前一个元素可以比较
    for i in range(1, len(lst)):
        # 如果前一个元素大于当前元素，说明不是升序排列
        if lst[i - 1] > lst[i]:
            return False
    # 如果没有发现任何不符合升序的情况，返回True
    return True
```



#### 1.4.2 如何打乱列表

::: tabs

@tab 使用 `random.shuffle()`（推荐）

这是最直接的方法，Python 自带的 `random`模块已经实现了对列表的就地随机打乱

```python
import random

mylist = [1, 2, 4, 6, 8]
random.shuffle(mylist)
print(mylist)
```

**特点：**

- 这是 Python 的内置函数方法。简单快捷
- 原地打乱，不返回新列表，直接修改原始列表。



@tab 使用 `random.sample()`（不修改列表）

如果不想修改原列表想建立一个新的打乱顺序的列表，可以使用 `random.sample()`。

```python
import random

mylist = [1, 2, 4, 6, 8]
shuffle_list = random.sample(mylist, len(mylist))
print(shuffle_list)
```



@tab 使用 Fisher-Yates 洗牌算法 （手动实现）

##### 1. **Fisher-Yates 洗牌算法简介**:

Fisher-Yates 洗牌算法，也称为 Knuth 洗牌算法，是一种用于随机打乱一个列表或数组的经典算法。它通过将每个元素与未打乱部分的元素随机交换，确保每个元素在打乱后的列表中有相同的概率出现在任何位置。

```python
import random
def fisher_yates_shuffle(mylist):
    n = len(mylist)
    for i in range(n-1, 0, -1):
        # 在索引范围 0 到 i 之间随机选择一个索引 j
        j = random.randint(0, i)
        # 交换位置： 将索引 i 与索引 j 处的元素交换
        mylist[i], mylist[j] = mylist[j], mylist[i]
        # 第二种交换方法：
        # change_num = mylist[i]
        # mylist[i] = mylist[j]
        # mylist[j] = change_num
    # 返回洗牌后的列表
    return mylist

```

**特点：**

- 这种方法可以手动控制打乱过程， 理解 shuffle 的逻辑。
- 与 `random.shuffle()`效果一致。

##### 2. 算法的原理

Fisher-Yates 算法的核心思想是，从未打乱的部分中随机选取一个元素与当前元素进行交换，并逐步缩小未打乱的范围，直到整个列表都被随机打乱。

**步骤如下：**

1. 从后向前遍历：从列表的最后一个元素开始，遍历到列表的第一个元素。
2. 随机选择一个索引：在当前未打乱的部分中随机选择一个索引，范围是从 0 到当前元素的索引。
3. 交换元素：将当前元素与随机选择的索引对应的元素交换位置。
4. 继续遍历：然后继续向前移动，直到所有元素都被遍历并交换过。
5. 这种方式可以保证每个元素被选择和交换的概率是均匀的，因此打乱后的列表是完全随机的。

##### 3. 步骤详解：

假设我们有一个包含五个元素的列表 `mylist = [1, 2, 3, 4, 5]`，我们打乱它。

1. **初始列表：**

```python
mylist = [1, 2, 3, 4, 5]
```

2. **从后往前遍历**

- 第一次，`i = 4`（列表的最后一个元素 `5`），我们在 `[0, 4]` 范围内随机选择一个索引，比如 `j = 2`，然后交换 `mylist[4]` 和 `mylist[2]`：

    ```python
    mylist = [1, 2, 5, 4, 3]  # 交换 5 和 3
    ```

- 第二次，`i = 3`（元素 `4`），我们在 `[0, 3]` 范围内随机选择一个索引，比如 `j = 0`，然后交换 `mylist[3]` 和 `mylist[0]`：

    ```python
    mylist = [4, 2, 5, 1, 3]  # 交换 4 和 1
    ```

- 第三次，`i = 2`（元素 `5`），我们在 `[0, 2]` 范围内随机选择一个索引，比如 `j = 1`，然后交换 `mylist[2]` 和 `mylist[1]`：

    ```python
    mylist = [4, 5, 2, 1, 3]  # 交换 5 和 2
    ```

- 第四次，`i = 1`（元素 `5`），我们在 `[0, 1]` 范围内随机选择一个索引，比如 `j = 0`，然后交换 `mylist[1]` 和 `mylist[0]`：

    ```python
    mylist = [5, 4, 2, 1, 3]  # 交换 5 和 4
    ```

到此为止，列表已经被打乱。

3. **最终打乱的列表**

```python
mylist = [5, 4, 2, 1, 3]
```



@tab 使用 `sorted()` + 随机键

通过给 `sorted()`函数传入一个随机排序键，可以打乱列表顺序.

```python
import random

mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
shuffled_list = sorted(mylist, key=lambda x: random.random()) # 根据随机键排列
print(shuffled_list)
```

**特点：**

- 使用 `sorted()`函数通过随机键进行打乱，

- 虽然能实现，但效率较低。因为 `sorted()`的复杂度为 $O(n \space log \space n)$,而 `shuffle`操作的复杂度应该是 $O(n)$



@tab 使用 Numpy 的 `np.random.shuffle()`

如果在处理的是 Numpy 数组， 也可以使用 Numpy 提供的 `shuffle`方法。

```python
import numpy
import numpy as np

myarray = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
np.random.shuffle(myarray) # 就地打乱 Numpy 数组
print(myarray)
```

**特点：**

- 适合处理大规模的数值型数据，尤其是在科学计算中常用。
- 原地打乱 Numpy 数组，操作与 `random.shuffle()`类似。

:::

**汇总：**

- `random.shuffle()`：推荐，最常用原地打乱列表的方法。
- `random.sample()`: 返回一个打乱后的新列表，不修改原列表
- Fisher-Yates 洗牌算法： 手动实现打乱列表
- `sorted()` + 随机键：通过随机键打乱列表，效率不高
- Numpy 的 `np.random.shuffle()`：适合打乱 Numpy 数组，用于大规模计算。

在一般情况下，使用 `random.shuffle()`是最推荐的方式，它简洁高效，如果要保留原列表可以选择 `random.sample()`。



### 1.5 完整代码

**自己总结的方法：**

::: code-tabs

@tab 1.**自动打乱的完整代码：**

```python
import random


def is_sorted(lst):
    # 从第二个元素开始遍历，因为第一个元素没有前一个元素可以比较
    for i in range(1, len(lst)):
        # 如果前一个元素大于当前元素，说明不是升序排列
        if lst[i - 1] > lst[i]:
            return False
    # 如果没有发现任何不符合升序的情况，返回True
    return True


def is_shuffle():
    lst = [1, 0, 4, 6, 2, 4, 3, 7, 9]
    while not is_sorted(lst):
        random.shuffle(lst)
    print(lst)


is_shuffle()
```



@tab 2.**手动打乱的完整代码：**

```python
import random


def is_sorted(lst):
    # 从第二个元素开始遍历，因为第一个元素没有前一个元素可以比较
    for i in range(1, len(lst)):
        # 如果前一个元素大于当前元素，说明不是升序排列
        if lst[i - 1] > lst[i]:
            return False
    # 如果没有发现任何不符合升序的情况，返回True
    return True

def fisher_yates_shuffle(mylist):
    n = len(mylist)
    for i in range(n-1, 0, -1):
        # 在索引范围 0 到 i 之间随机选择一个索引 j
        j = random.randint(0, i)
        # 交换位置： 将索引 i 与索引 j 处的元素交换
        mylist[i], mylist[j] = mylist[j], mylist[i]
    # 返回洗牌后的列表
    return mylist
def is_shuffle():
    lst = [1, 0, 4, 6, 2, 4, 3, 7, 9]
    while not is_sorted(lst):
        fisher_yates_shuffle(lst)
    print(lst)


is_shuffle()
```

:::

**学校方法：**

```python
import random


def bogoSort(mylist):
    while (is_sorted(mylist) == False):  # if the list is not sorted...
        shuffle(mylist)  # ...shuffle again
    return (mylist)  # if sorted, return


# check if list is sorted
def is_sorted(mylist):
    n = len(mylist)
    for i in range(0, n - 1):  # iterate through list
        if (mylist[i] > mylist[i + 1]):  # if number is bigger than the number to the right
            return False  # list is not sorted so return False


# shuffle the list
def shuffle(mylist):
    n = len(mylist)
    for i in range(0, n):
        r = random.randint(0, n - 1)  # go through list, swapping each
        mylist[i], mylist[r] = mylist[r], mylist[i]  # item with another randomly chosen
    # item


mylist = [3, 2, 4, 1, 0, 5]  # define a list to sort
print(bogoSort(mylist))  # function call

```



**对比：**

自己总结的方法2与学校方法类似。只是学校手动打乱的方法效率较低，我们的方法避免了打乱的时候可能同一个元素自己与自己交换位置的情况。









