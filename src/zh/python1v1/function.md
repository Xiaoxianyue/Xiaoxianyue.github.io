---
title: 14-函数
icon: python
date: 2024-9-11 20:37:49
author: XiaoXianYue
isOriginal: true
category: 
    - 课堂笔记
tag:
    - 课堂笔记
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

## 1. 前言

### 1.1 函数的定义：

- 一段具有特定功能的、可以重复使用的代码
- 用函数名来表示并通过函数名完成功能调用

### 1.2 使用函数的意义：

- 代码的重复利用；
- 减少程序中的代码重复量，是代码更加容易被理解；
- 让代码更易于维护与更新

### 1.3 函数的优点

通过把一个计算过程写入函数，再不断重复的调用函数，在修改函数代码时只用修改一次便可以影响全局，大大减少了修改代码时的工程量，方便快捷。



### 1.4 分类

<img src="./function.assets/1fe2bc538494d80bc0d7813d28d60a6.png" alt="1fe2bc538494d80bc0d7813d28d60a6" style="zoom: 33%;" />

#### 1.4.1 常见的内置函数

1. 数据类型强制转换相关函数：

    - `int()`
    - `float()`

    

2. 数字相关函数：

    - `abs()`：返回一个数的绝对值
    - `round()`返回一个浮点数四舍五入后的值

    ```python
    a = abs(-1)
    print(a)
    
    b = int('12')
    c = 13
    print(b+c)
    ```

    

3. 内置库

    除了内置函数以外，Python还有内置的标准函数库。

    当我们把这些额外的函数库导入到我们的程序里时，我们可以用这些函数库中提供的方法。

    访问这些函数时需要以**库名.函数**的方式。

    - 开平方

        ```python
        import math
        
        a = math.sqrt(2)
        print(a)
        ```

    - 随机选取一个数字（整数）

        ```python
        import random
        
        a = random.randint(1,100) # 随机生成一个1~100（包含1和100）的整数
        print(a)
        ```

        



## 2. 用户自定义函数

### 2.1 定义一个函数

> def 是 define 的缩写，表示定义一个函数。

格式：

```python
def 函数名称():
    函数内的语句。
```

**当我们需要这个函数时，直接写“函数名称 + ()” 就可。**

::: warning

函数名称中间不要有空格，可以用下划线代替

:::

### 2.2 适当的使用函数便于协作

有了函数之后可以实现原本不能实现的功能，比如我们写了一个功能很复杂的代码（实现经纬度坐标距离的计算）：

::: code-tabs

@tab 用函数封装起来的代码

```python
import math

# 定义地球半径（单位：公里）
R = 6371.0

def haversine(lat1, lon1, lat2, lon2):
    # 将纬度和经度从度数转换为弧度
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    
    # Haversine公式
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    # 计算距离
    distance = R * c
    return distance

# 示例：计算洛杉矶到纽约的距离
lat1, lon1 = 34.052235, -118.243683  # 洛杉矶
lat2, lon2 = 40.712776, -74.005974   # 纽约

distance = haversine(lat1, lon1, lat2, lon2)
print(f"两个地点之间的距离为 {distance:.2f} 公里")
```

@tab 不用函数：

```python
import math

# 定义地球半径（单位：公里）
R = 6371.0

# 示例：计算洛杉矶到纽约的距离
lat1, lon1 = 34.052235, -118.243683  # 洛杉矶
lat2, lon2 = 40.712776, -74.005974  # 纽约


# 将纬度和经度从度数转换为弧度
lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])

# Haversine公式
dlat = lat2 - lat1
dlon = lon2 - lon1
a = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    # 计算距离
distance = R * c
print(f"两个地点之间的距离为 {distance:.2f} 公里")
```

:::



使用函数的优点：

如果你要将代码共享给别人，只需要把函数代码保存在文件 `haversine.py`打包好，而别人只需要在 `haversine.py`文件的同路径下创建一个新的文件夹，写入如下代码就可以实现对于函数的调用：

```python
import haversine

lat1, lon1 = 34.052235, -118.243683  # 洛杉矶
lat2, lon2 = 40.712776, -74.005974   # 纽约

distance = haversine(lat1, lon1, lat2, lon2)
print(f"两个地点之间的距离为 {distance:.2f} 公里")
```

完整代码如下：

![image-20240911213910027](./function.assets/image-20240911213910027.png)

::: tip

这里是更好地帮助理解函数的作用。

:::



### 2.3 利用参数向函数传递信息

#### 2.3.1 参数调用代码结构

![5d1e06a6487a04685a6ed7fbd186d39](./function.assets/5d1e06a6487a04685a6ed7fbd186d39.png)

#### 2.3.2 多个参数

```python
def TestGrade(name, grade):
    print(f'{name}的成绩是：{grade}分。')

TestGrade('Lily',99)
```



#### 2.3.3 关键字参数

上面实现了传入多个参数，但如果用户传入的参数位置不对，则导致得到的结果不对或出现报错。

一般发生于：用户不清楚函数具体参数功能或函数参数过多的情况下，则制定关键字参数即可。

1. 参数位置不对的情况

```python
def TestGrade(name, grade):
    print(f'{name}的成绩是：{grade}分。')

TestGrade(99,'Lily')

# output

99的成绩是：Lily分。
```

2. 位置不对的情况下报错

```python
def TestGrade(name, grade):
    print(name + '的成绩是：' + str(grade) + '分。')

TestGrade(99,'Lily')

#output

Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 4, in <module>
    TestGrade(99,'Lily')
  File "C:\Coder\Lesson\d.py", line 2, in TestGrade
    print(name + '的成绩是：' + str(grade) + '分。')
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```



怎么指定关键字让参数的传入不再出错？

==用’=‘符号相连==

```python
def TestGrade(name, grade):
    print(name + '的成绩是：' + str(grade) + '分。')


TestGrade(grade=99, name='Lily')
```









