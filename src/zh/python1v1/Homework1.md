---
title: my_python
icon: alias
date: 2023-12-03 16:16:12
author: XiaoXianYue
isOriginal: true
category: 
    - 课堂笔记
    - 课后回顾&练习
tag:
    - 课堂笔记
    - 课后回顾&练习
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

## 1,概念题

**在 Python 中，`print` 函数是用来做什么的？**

输出

**如何在 Python 中声明一个变量？请给出一个例子。**

a = 1

**如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。**

a, b, c = 1

**如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。**

a, b, c = 1, 2, 3

**在 Python 中，如果我们想要在一行中打印多个变量，应该怎么做？请给出一个例子。**

print(a, b, c)

**什么是 Python 中的注释？怎么写注释？**

#注释  注释用来解释代码语句

**在 Python 中，我们如何改变 `print` 函数中的 `sep` 参数，以改变多个变量的输出间隔？请给出一个例子。**

print(a, b, c, sep= “oioioi”)

**在 Python 中 print 的 end 作用是什么？编写个代码示例。**

作用于输出语句的结尾 可修改语句结尾 print（a, b, end = “Hello”)

**在 Python 中，如果我们要覆盖一个变量的值，应该怎么做？请给出一个例子。**

```python
a = 1
a = 2
print(a)
#output
2
```

**在 Python 中，我们怎么样才能让计算机“看不见”一行代码？**

注释掉

**当我们用 `print` 函数同时输出多个变量时，默认的间隔符是什么？**

空格

**在 Python 中，一个变量可以存储什么样的数据？请给出至少三个例子。**

Python中所有的数据类型，如字符串，数字，列表

**在编写代码中，为什么要适当的加上空格？空格对代码有影响吗？**

为了美观，没有影响

**变量命名为什么推荐：“见名知意”？**

方便在写冗长的代码时区分不同的变量







## 2. 选择题

Python 变量的命名规则中，以下哪一项是错误的？   C

a) 变量名可以由字母、数字和下划线组成

b) 变量名不能以数字开头

c) 变量名可以以特殊字符，如@或#，开头

d) 变量名可以包含大写和小写字母

在 Python 中，如何使用 print 函数打印字符串 "`Hello, World!`"？   B

a) `print "Hello, World!"`

b) `print("Hello, World!")`

c) `echo("Hello, World!")`

d) `print[Hello, World!]`

print 函数中的 end 参数用于什么？    B

a) 确定是否结束程序

b) 在输出的末尾添加指定字符

c) 控制输出的数量

d) 确定输出的顺序

如果我想在 print 函数中，用"`,`"作为分隔符，应该如何操作？    A

a) 使用参数 `sep = ","`

b) 使用参数 `end = ","`

c) 使用参数 `print = ","`

d) 使用参数 `divide = ","`

如果我想在不换行的情况下输出两个变量 a 和 b，以下哪个是正确的？    A

a) `print(a, b, end = ' ')`

b) `print(a, b, sep = ' ')`

c) `print(a; b)`

d) `print(a, b, end = '\n')`

在 Python 中，以下哪种方法可以用来删除变量？    C

a) `drop(variable)`

b) `remove(variable)`

c) `del variable`

d) `delete variable`

在 Python 中，以下哪个语句是错误的？    D

a) `x, y, z = "Orange", "Banana", "Cherry"`

b) `x = y = z = "Orange"`

c) `x = "Orange" = y`

d) `x, y = y, x`

在 Python 中，以下哪个声明不是合法的变量名？    C

a) `_myvar`

b) `myVar`

c) `9var`

d) `varName9`

下列哪个 print 函数的使用方式是正确的？    A

a) `print(a, b, c, sep = ' ', end = ' ')`

b) `print(a b c sep = ' ', end = ' ')`

c) `print[a, b, c, sep = ' ', end = ' ']`

d) `print{a, b, c, sep = ' ', end = ' '}`

Python 中的哪个函数可以用来获取变量的类型？    B

a) `typeof(variable)`

b) `type(variable)`

c) `getType(variable)`

d) `variable.type()`







## 3. 填空题

1. 在 Python 中，__print___ 关键字用于打印一个变量的值。
2. Python 中的变量可以是字符串、整数、浮点数或布尔类型。例如，`my_str = "Hello World"` 使 my_str 成为一个 _____。
3. 在 Python 中，我们可以通过 _____print(my_var) 来打印变量 my_var。
4. 在 Python 中，我们可以使用 my_var =  10_____ 来创建一个值为 10 的变量 my_var。
5. 如果我们有两个变量 `a = 5` 和 `b = 10`，我们可以使用 print(a,  b_____) 来打印这两个变量的值。
6. 在 Python 中，变量名可以包含字母、数字和下划线，但不能以数字开头。例如，1my_var 是一个无效的变量名，但 ___my_var1_ 是有效的。
7. 如果我有一个整数变量 `my_int = 50`，我可以通过在打印语句中添加 _____ 来打印 "The value of my integer is 50"。
8. 在 Python 中，通过使用 __=___ 关键字，我们可以将一个变量的值分配给另一个变量。例如，如果 `a = 10` 和 `b = a`，那么 `b` 的值也会变为10。
9. 在 Python 中，我可以通过编写 my_str = “Hello World” _____ 来创建一个包含字符串 "Hello, Python!" 的变量 my_str。
10. 如果我有一个浮点型变量 `my_float = 5.67`，我可以使用 `print(_my_float____ + " is my floating point number")` 来打印 "5.67 is my floating point number"。







##  编程题

### [#](#_4-1-定义和输出变量) 4.1 定义和输出变量

要求：定义一个变量，名字为 greeting，并将它的值设置为 `"Hello, World!"`。然后使用 print 函数将此变量的值打印出来。

```python
greeting = "Hello world!"
print(greeting)
```

### [#](#_4-2-变量的赋值) 4.2 变量的赋值

要求：定义一个变量，名字为 number，并将它的值设置为 10。然后定义一个新的变量，名字为 copy_number，并将它的值设置为变量 number 的值。使用 print 函数分别打印这两个变量的值。

```python
number = 10
copy_number = number
print(number, copy_number)
```

### [#](#_4-3-变量的覆盖) 4.3 变量的覆盖

要求：定义一个变量，名字为 food，并将它的值设置为 `"apple"`。然后将变量 food 的值改为 `"banana"`。使用 print 函数打印变量 food 的值，然后解释为什么打印的结果是 `"banana"` 而不是 `"apple"`。

```python
food = "apple"
food = "banana"
print(food)
```

### [#](#_4-4-使用-sep-和-end-参数) 4.4 使用 sep 和 end 参数

要求：定义三个变量 a、 b、c，分别赋值为 1，2，3。使用 print 函数打印这三个变量，使得输出的结果是 `1-2-3`，并且在输出之后不换行。

```python
a, b, c = 1, 2, 3
print(a, b, c, sep = "-")
```

### [#](#_4-5-同时输出多个变量) 4.5 同时输出多个变量

要求：定义四个变量 name、age、job、hobby，并分别赋值为你的名字、年龄、职业和爱好。使用一次 print 函数将这四个变量的值同时打印出来，每个值之间用逗号隔开。

```python
name = "Xiaoxianyue"
age = 19
job = "student"
hobby = "sleeping"
print(name, age, job, hobby, sep = ",")
```



### [#](#_4-6-多个变量赋予不同值和相同值) 4.6 多个变量赋予不同值和相同值

要求：定义三个变量 x、y、z，并且同时为它们赋予值 10。然后将 x 的值改为 20，y 的值改为30。使用 print 函数分别打印 x、y、z 的值。

------

著作权归黄家宝|AI悦创所有 原文链接：https://bornforthis.cn/column/py/Lab/Lab01.html