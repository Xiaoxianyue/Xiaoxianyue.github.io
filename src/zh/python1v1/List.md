---
title: 05-列表
icon: python
date: 2024-7-30 10:21:23
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

## 1. 列表结构

- 利用中括号表示列表

- 列表内的元素使用逗号隔开

- 注意是英文输入法下的逗号

```python
student = ['lili' , 123, [2,3,4],{"xxy",4.56}]
print(student)
#output
['lili', 123, [2, 3, 4], {4.56, 'xxy'}]
```

列表的可变性：可以修改列表里的内容

- 字符串强制转换成列表

```python
string_to_list = list('Bornforthis')
print(string_to_list)
#output
['B', 'o', 'r', 'n', 'f', 'o', 'r', 't', 'h', 'i', 's']
```

## 2. 获取列表元素

列表下标与字符串一致

### 2.1 提取列表单个元素

```python
#1
lst = [98, 99, 95, 80]
a = lst[-1]
print(a)
#2
lst = [98, 99, 95, 80]
a = lst[3]
print(a)
#3
lst = [98, 99, 95, 80]
a = lst[len(lst)-1]
print(a)
#output
80
```

### 2.2 提取列表连续和特定区间的元素

```python
lst = [98, 99, 95, 80]
print(lst[::-1])
print(lst[0::2])
print(lst[1::2])
print(lst[0::3])
print(lst[1:4])
#output
[80, 95, 99, 98]
[98, 95]
[99, 80]
[98, 80]
[99, 95, 80]
```



## 3. 列表切片赋值

<img src="./List.assets/image-20240730211422293.png" alt="image-20240730211422293" style="zoom:80%;" />

- 来考虑下面这种情况

    <img src="./List.assets/image-20240730212108209.png" alt="image-20240730212108209" style="zoom:50%;" />

为什么？

首先第一个1指向列表中的数字5，第二个1指切片结尾的后一个位置，则代表这个切片结尾是1前面一个位置也就是0位，0位上是数字1，故第二个1指向的是数字1，像这样：

<img src="./List.assets/image-20240730212311081.png" alt="image-20240730212311081" style="zoom:50%;" />

而数字‘5’和‘1’之间是没有数字的。所以输出为空。

于是我们得到：

<img src="./List.assets/image-20240730212548520.png" alt="image-20240730212548520" style="zoom:50%;" />

相当于是[2,3,4]插进了1和5之间那段空白。



## 3. 获取列表长度和修改列表元素

### 3.1 获取列表长度

```python
student_list = ['John','韩梅梅' ,'马冬梅']
print(len(student_list))
#output
3
```

### 3.2 修改列表元素

可以修改的对象（元素）：

列表，元组，集合[不按集合原本的顺序]，字符串，字典[放进去的是key]

- 单个修改

    ```python
    student_list = ['John','韩梅梅' ,'马冬梅']
    student_list[0] = 'Taurus'
    print(student_list)
    
    ```
- 多个元素修改
```python
numbers = [0,1,2,3,4,5,6,7,8,9,10]
print(numbers)

numbers[1:5] = ['one', 'two', 'three', 'four']
print(numbers)
#output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[0, 'one', 'two', 'three', 'four', 5, 6, 7, 8, 9, 10]
```

1. 我们考虑下面这种情况：

```python
numbers = [0,1,2,3,4,5,6,7,8,9,10]
print(numbers)

numbers[1:5] = ['one', 'two', 'three', 'four','five']
print(numbers)
#output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[0, 'one', 'two', 'three', 'four','five', 5, 6, 7, 8, 9, 10]
```

可以发现，numbers[1:5]只是代表这一个区间，这个区间存在着无限个占位，没有数量限制。

2. 那么如果我们添加别的数据类型进去呢？

比方添加一个集合。已知集合具有无序性。

```python
numbers = [0,1,2,3,4,5,6,7,8,9,10]
print(numbers)

numbers[1:5] = {'taurus',3,4,5}
print(numbers)
```

```python
#output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[0, 4, 3, 'taurus', 5, 5, 6, 7, 8, 9, 10]
```

添加进去的结果是无序的。

那添加一个具有有序性的元组呢？

```python
numbers = [0,1,2,3,4,5,6,7,8,9,10]
print(numbers)

numbers[1:5] = ('taurus',3,4,5)
print(numbers)
```

无论运行多少次，结果都是有序的。

```python
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[0, 'taurus', 3, 4, 5, 5, 6, 7, 8, 9, 10]
```



## 4. 小试牛刀

获取用户输入两个值，一个是要插入的位置，一个是要插入这个位置的值。

给定下面列表

![image-20240731201953171](./List.assets/image-20240731201953171.png)

例子：

![image-20240731202008890](./List.assets/image-20240731202008890.png)

```python
numbers = [1,2,3,5,6]
a = int(input('Enter position:'))
b = int(input('Enter value:'))
numbers[a:a] = [b]
print(numbers)
#output
[1,2,3,4,5,6]
```



## 5. 在指定位置上插入元素[.insert(index,element)]

.insert(index,element)是列表的一个基本方法，用于在列表指定位置插入一个元素。

它的基本语法是：

```PYTHON
list.insert(index,element)
```

`index`:指定要插入元素的位置。索引从0开始。如果指定索引超出了列表的当前长度【不会报错】，则元素将被添加到列表的末尾。

`element`：这是你想要插入列表的元素。

```python
numbers = [1,2,3,5,6]
a = int(input('Enter position:'))
b = int(input('Enter value:'))
numbers.insert(a,b)
print(numbers)
#output
[1,2,3,4,5,6]
```



## 6. 在指定位置添加元素[.append]

```python
lst = ['John', 'Smith']
print('before:',lst)
lst.append('boogie')
print('after',lst)
#output
before: ['John', 'Smith']
after ['John', 'Smith', 'boogie']

lst = [1,2,3,4,5,6,7,8,9]
print(lst)
lst.append([10,11,12,13,14,15])
print(lst)
#output
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12, 13, 14, 15]]
```

.append()只能在列表末尾添加

```python
lst = [1,2,3,4,5,6,7,8,9]
print(lst)
lst.extend([10,11,12,13,14,15])
print(lst)
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

观察,append()和.extend()添加元素类型的不同



## 6. 删除指定位置的元素（del)

```python
student_list = ['Echo','Leon','Sherry']
del student_list[0]
print(student_list)
#output
['Leon', 'Sherry']

student_list = ['Echo','Leon','Sherry']
del student_list[0:2]
print(student_list)
#output
['Sherry']

student_list = ['Echo','Leon','Sherry']
del student_list
print(student_list)
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 3, in <module>
    print(student_list)
NameError: name 'student_list' is not defined
//可以看到，不指定位置会把整个变量删掉
```



## 7. 移除最后一个元素[.pop()]

```python
student_list = ['Echo','Leon','Mary']
student_list.pop()
print(student_list)
student_list.pop(0)
print(student_list)
#output
['Echo', 'Leon']
['Leon']
```

pop和del的区别就是，在不指定下标的情况下，pop删除最后一位元素，del删掉整个变量。

相同之处是，他们都可以删除指定位置元素。



## 8. 指定元素本体进行删除[.remove()]

```python
student_list = ['Echo','Leon','Mary']
student_list.remove('Echo')
print(student_list)
#output
['Leon', 'Mary']
```

.remove()与上面两个都不一样，不是指定下标而是元素。

```python
student_list = ['Echo','Leon','Mary','Echo']
student_list.remove('Echo')
print(student_list)
#output
['Leon', 'Mary', 'Echo']
```

多个一样的元素，删除第一个。



## 9. 列表相加

```python
lst1 = [1,2,3,4,5,6,7,8,9]
lst2 = [1,2,3,4,5,6,7,8,9]
print(lst1+lst2)
#output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```



## 10. 判断列表有没有指定元素（inventory）

```python
inventory = ['moon','in','taurus']
print('moon' in inventory)
print('in' in inventory)
#output
True 
True
```

注意这里inventory只是变量名不是代表内置函数（操作）。

## 11. 元素出现次数[.count(1)]

```python
inventory = ['moon','in','taurus',3,[1,2],3]
print(inventory.count(3))
#output
2
```



## 12. 获取列表指定元素第一次出现的位置[.index()]

```python
inventory = ['moon','in','taurus',3,[1,2],3]
print(inventory.index([1,2]))
#output
4

numbers = [1,2,4,3,2,1]
print(numbers.index(2))
#output
2

numbers = [1,2,4,3,2,1]
print(numbers.index(5))
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 2, in <module>
    print(numbers.index(5))
ValueError: 5 is not in list
```



## 13. 列表排序[.sort()]

正序：

```python
numbers = [1,2,4,3,2,1]
numbers.sort()
print(numbers)
#output
[1, 1, 2, 2, 3, 4]
```

```python
numbers = ['symbol','motto','versus',1]
numbers.sort()
print(numbers)
#output
['motto', 'symbol', 'versus']
```



不可以这样：（因为是直接修改列表）

```python
numbers = [1,2,4,3,2,1]
print(numbers.sort())
#output
None
```

倒序：

```python
numbers = [1,2,4,3,2,1]
numbers.sort(reverse=True)
print(numbers)
#output
[4, 3, 2, 2, 1, 1]
```

这时要求列表里都是一样的数据类型，否则报错





### 4.1 sorted(list,reverse=False)

`sorted(list,reverse=False/True)`将列表进行小到大排序，排序后原列表不变，返回新列表。reverse默认为False，如果手动设置成True则返回降序排列。

```python
numbers = [3,2,1,7,4,9,0]
new_numbers = sorted(numbers)
print(new_numbers)
#output
[0, 1, 2, 3, 4, 7, 9]
```

.sorted()必须有一个新变量来存储排序后的内容。



### 4.2 [.reverse()]翻转列表

```python
numbers = [3,2,1,7,4,9,0]
numbers.reverse()
print(numbers)
#output
[0, 9, 4, 7, 1, 2, 3]
```

与sort一样，reverse也是一个操作不返回任何值，所以不能直接放进print里面。























