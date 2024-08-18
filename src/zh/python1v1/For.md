---
title: 12-for循环
icon: python
date: 2024-8-14 10:00:58
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

## 1. for 循环——遍历

基本语法：

```python
lst = [1,2,3]
for i in lst:
    print(i)
#output
1
2
3
```

拓展：把列表里的数字都平方一遍，然后再放回列表：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
n = 0
for i in lst:
    lst[n] = i ** 2
    n += 1
print(lst)
#output
[1, 4, 9, 16, 25, 36, 49, 64, 81]
```



## 2. `emerate`

### 2.1 `emerate` 用法

```python
lst = ['shelley','python','java']
"""
enumerate 是 python 中的一个内置函数，非常实用，它用于遍历序列（比如：列表，元组或字符串），
同时获取每个元素的索引和值。这样做可以让循环中的迭代更加直观，也更易于处理。
使用 enumerate 函数可以替代传统的通过索引防问元素的方法。
它返回一个枚举对象，对这个对象生成一系列包含每个元素的索引和值的元组。
"""
fruits = ['apple','banana','cherry']
for index, fruit in enumerate(fruits):
    print(index, fruit)
#output
0 apple
1 banana
2 cherry
```

细化实现步骤：

```python
In [1]: fruit = ['apple','banana','cherry']

In [2]: enumerate(fruit)
Out[2]: <enumerate at 0x183d9b44f00>

In [3]: list(enumerate(fruit))
Out[3]: [(0, 'apple'), (1, 'banana'), (2, 'cherry')]

In [4]: fruit_list = list(enumerate(fruit))

In [5]: for fruits in fruit_list:
   ...:     print(fruits)
   ...:
(0, 'apple')
(1, 'banana')
(2, 'cherry')
```
元组里索引和值的一一映射：
```python
In [6]: index,fruit = (0,'apple')

In [7]: index
Out[7]: 0

In [8]: fruit
Out[8]: 'apple'
```

最终代码写法:

```python
In [10]: fruits = ['apple','banana','cherry']

In [11]: fruits_list = list(enumerate(fruits))

In [12]: for fruits in fruit_list:
    ...:     index,fruit = fruits
    ...:     print(index,fruit)
    ...:
0 apple
1 banana
2 cherry
```

可以从上面看到，`enumerate`的作用就是使索引一起与值显现。



### 2.2 拓展用法

输出这样的形式：

```python
{0: 'apple', 1: 'banana', 2: 'cherry'}
```

Solution:

第一版本：

```python
fruits = ['apple', 'banana', 'cherry']
fruits_list = list(enumerate(fruits))
dictionary = dict(fruits_list)
print(dictionary)
```

想到了字典的两种创建方法：`[(),(),()]`这种形式可以通过 `dict`强制转换成字典形式。

那我们能不能直接把 `enumerate`强制转换成字典？

```python
fruits = ['apple', 'banana', 'cherry']
dictionary = dict(enumerate(fruits))
print(dictionary)
#output
{0: 'apple', 1: 'banana', 2: 'cherry'}
```



::: info

索引可不可以从别的数字开始？

可以。

```python
fruits = ['apple', 'banana', 'cherry']
dictionary = dict(enumerate(fruits,start=1))
print(dictionary)
#output
{1: 'apple', 2: 'banana', 3: 'cherry'}
```

:::



## 3. 课上作业

### Question 01

1.

<img src="./For.assets/007b4bbba020890868039849cab0e45.png" alt="007b4bbba020890868039849cab0e45" style="zoom:50%;" />

```python
lst = [10, 43, 5, 66, 2, 0, 99]
maxnum = lst[0]
for i in lst:
    if i > maxnum:
        maxnum = i
print(maxnum)
#output
99
```

**2.输出最大值的下标，并且不能用 `.index()`:**

```python
lst = [10, 43, 5, 66, 2, 100]
max_value = lst[0]
position = 0
for index, value in enumerate(lst):
    if value > max_value:
        max_value = value
        position = index
print(position)
```

**3.有多个最大数值时，返回所有最大值的下标：**

::: code-tabs

@tab 列表存储

```python
nums = [1, 24, 5, 56, 7, 78, 99, 111, 11, 111, 111]
max_value = nums[0]
max_tup = []
for num in nums:
    if num > max_value:
        max_value = num
position = 0
for i in nums:
    if i == max_value:
        max_tup.append(position)
        position += 1
    else:
        position += 1  # 只有在 for 循环中才能这么写
print(tuple(max_tup))
#output
(7, 9, 10)
```

@tab 元组存储

```python
nums = [1, 24, 5, 56, 7, 78, 99, 111, 11, 111, 111]
max_value = nums[0]
max_tup = tuple()
for num in nums:
    if num > max_value:
        max_value = num
position = 0
for i in nums:
    if i == max_value:
        max_tup += (position,)
    position += 1 
print(max_tup)
#output
(7, 9, 10)
```

:::

用一个 for 循环也能实现：

```python
nums = [1, 24, 5, 56, 7, 78, 99, 111, 11, 111, 111]
max_value = nums[0]
max_indices = []
n = 0
for num in nums:
    if max_value < num:
        max_value = num
        max_indices = [n]
    elif num == max_value:
        max_indices.append(n)
    n += 1
max_indices_tuple = tuple(max_indices)
print(max_indices_tuple)
```





### Question 02

编写一个程序，使用 for 循环统计给定字符串中元音字母（a, e, i, o, u）的数量，并输出结果。

**Solution：**

```python
str = input('Enter a string: ').lower()
lst = str.replace('',',').strip(',').split(',')
print(lst)
if not str.isalpha():
    print('Invalid')
else:
    n = 0
    for i in lst:
        if i == 'a' or i == 'e' or i == 'u' or i == 'i' or i == 'o':
           n += 1
    print(n)
```

**答案：**

1. 不忽略大小写

```python
vowels = 'aeiouAEIOU'
str = input('Enter a string: ')
count = 0
for char in str:
    if char in vowels:
        count += 1
print("numer of vowels: ", count)
```

2. 忽略大小写

```python
vowels = 'aeiou'
str = input('Enter a string: ').lower()
count = 0
for char in str:
    if char in vowels:
        count += 1
print("numer of vowels: ", count)
```





### Question 03

编写一个程序，使用 `for` 循环反转一个给定的字符串并输出。例如，输入 `hello`，输出 `olleh`。

@cade-tabs



```python
lst = input('Enter a string: ').replace('',',').strip(',').split(',')
lst.reverse()
string = ''
for num in lst:
    string += num
print(string)
```



## 4. range

**在 Python 中，range 函数是一个非常实用的工具，用于生成一个不可变的数字序列。通常，在循环中用来进行迭代，尤其在 for 循环中。**

### 4.1 基本用法

range 函数可以有三个参数，start，stop，step

- start ：序列开始的值，默认为 0。
- stop：序列结束的值，不包括这个值。
- step ：序列中每个值之间的差（步长），默认为 1。

```python
for i in range(5):  # range(5) 表示 [0,5)
    print(i)
#output
0
1
2
3
4
```

```python
for i in range(2, 5): # 表示 [2,5)
    print(i)
#output
2
3
4
```

```python
for i in range(2, 11, 2):
    print(i)
2
4
6
8
10
```

`range()`只能接受**整数。**

### 4.2 特性和注意事项

- `range`生成一个惰性序列，这意味着它只在需要时才生成数字，这有助于节约内存。

- `range`对象不支持任意切片，但可以强制转换成列表（如：`list(range(10))`）来获得更多操作能力。

- 在 Python 3中，`range`替代了 Python 2中的 xrange ，后者在旧版本中生成大的数字序列，因为它更节省内存。

    `range`这些特性使其在处理循环和其他需要数字序列的场景中非常有用。

### 4.3 示例



#### 求0-100的总和

```python
sum = 0
for i in range(101):
    sum += i
print(sum)
# output
5050
```



#### 获取特定和

获取用户输入一组以空格间隔的数据，第一个整数代表开始，第二个整数代表结束，求出两整数区间的总和。「包含这两个整数」

```python
lst_str = input('Enter two numbers separated by space: ').split(' ')
lst = list(map(int, lst_str))
sta = lst[0]
en = lst[1]
sum = 0
for i in range(sta, en + 1):
    sum += i
print(sum)
```



#### 开始数字大于结束数字，程序停止

上面的程序，需要结束整数大于开始整数才可以执行计算，否则输出提示：输入不合法，程序停止～。

```python
lst_str = input('Enter two numbers separated by space: ').split(' ')
lst = list(map(int, lst_str))
sta = lst[0]
en = lst[1]
sum = 0
if sta > en:
    print('输入不合法，程序停止')
else:
    for i in range(sta, en + 1):
        sum += i
    print(sum)
```



#### 不是纯数字，报错

上面的代码运行后，用户输入不是纯数字，则报错。需要解决不能报错，不是纯数字则输出：输入不合法，需要输入纯数字～。（Invalid input）（只考虑正整数，小数不考虑）

```python
lst_str = input('Enter two numbers separated by space: ')
lst_check = lst_str.replace(' ', '')
if not lst_check.isdigit():
    print('输入不是纯数字，报错。')
else:
    lst = list(map(int,lst_str.split(' ')))
    sta = lst[0]
    en = lst[1]
    sum = 0
    if sta > en:
        print('输入不合法，程序停止')
    else:
        for i in range(sta, en + 1):
            sum += i
        print(sum)
```



#### 输入格式不符合要求，重试

如没有用空格间隔，输入多个数字等。

::: code-tabs

@tab code 01

```python
num_check = False
while not num_check:
    lst_str = input('Enter two numbers separated by space: ').strip()
    if lst_str.count(' ') != 1:
        print('输入空格数目不为1，请重新输入。')
    else:
        lst_check = lst_str.replace(' ', '')
        if not lst_check.isnumeric():
            print('输入不符合要求，请查看是否用空格间隔。')
        else:
            if not lst_check.isdigit():
                print('输入不是纯数字，报错。')
            else:
                lst = list(map(int, lst_str.split(' ')))
                sta = lst[0]
                en = lst[1]
                sum = 0
                if len(lst) != 2: # != 常常用于一些特定条件中，使用不够灵活。
                    print('输入数字个数不符合要求，重新输入。')
                else:
                    if sta > en:
                        print('起始数字大于结束数字，重新输入。')
                    else:
                        for i in range(sta, en + 1):
                            sum += i
                        print(sum)
                        num_check = True
```



@tab code 02

```python
num_check = False
while not num_check:
    lst_str = input('Enter two numbers separated by space: ').strip()
    if lst_str.count(' ') != 1:   # 包含了输入多个数字的情况如：1 2 3，后面就不用再条件判断一次是否个数为2了
        print('输入空格数目不为1，请重新输入。')
    else:
        lst_check = lst_str.replace(' ', '')
        if not lst_check.isnumeric():
            print('输入不符合要求，请查看是否用空格间隔。')
        else:
            if not lst_check.isdigit():
                print('输入不是纯数字，报错。')
            else:
                lst = list(map(int, lst_str.split(' ')))
                sta = lst[0]
                en = lst[1]
                sum = 0
                if sta > en:
                    print('起始数字大于结束数字，重新输入。')
                else:
                    for i in range(sta, en + 1):
                        sum += i
                    print(sum)
                    num_check = True
```

:::

code 02（修改之后代码）分析：

**缺点**：

- 嵌套层数过多，导致逻辑变得复杂；
- 同时使用了 while 与 for 循环；

**优点：**

- 处理了用户可能输入的多种错误数据情况，而产生的报错，并实现错误输入后的重新输入。[试错机会]

**怎么尽可能避免多层嵌套？**

- 利用整组的 `if...elif...elif...else`,只会执行其中一个的特性。

**需要 get 到的点：**

- 程序的开发流程，是一步步实现所要解决的需求和目的，不是一次性完成。先写框架和功能，再一步步 debug，把目标问题一步步拆解，大问题拆解为小问题，一步步解决。

**推荐思考方式：**

- 明确要解决的问题
- 计算区间总和：使用 for 。【关键词：区间，用 range 生成一系列数据】

- 用户重复输入： while 循环。

代码优化后：

```python
num_check = False
while not num_check:
    lst_str = input('Enter two numbers separated by space: ').strip()
    lst_check = lst_str.replace(' ', '')
    if lst_str.count(' ') != 1:   # 包含了输入多个数字的情况如：1 2 3，后面就不用再条件判断一次是否个数为2了
        print('输入空格数目不为1，请重新输入。')
        continue
    elif not lst_check.isnumeric():
        print('输入不符合要求，请查看是否用空格间隔。')
        continue
    elif not lst_check.isdigit():
        print('输入不是纯数字，报错。')
    lst = list(map(int, lst_str.split(' ')))
    sta = lst[0]
    en = lst[1]
    sum = 0
    if sta > en:
        print('起始数字大于结束数字，重新输入。')
        continue
    else:
        for i in range(sta, en + 1):
            sum += i
        print(sum)
        num_check = True
```



## 5. while 和 for

**while 使用场景：**

- 如果不知道一个程序要执行多少次，但已知程序需要在==某种情况下暂停循环==，则推荐使用 while 循环。

**for 使用场景：**

- 如果==明确程序需要执行的次数==，使用 for 循环。

注意：所有的 for 循环都可以写成 while 循环































