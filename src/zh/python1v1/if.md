---
title: 10-条件判断
icon: python
date: 2024-8-10 22:42:31
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

## 1. 代码的缩进

用==四个空格==或者==一个 tab==来表示缩进。不要混用。

相同的缩进位置表示一个代码块。

例子：

```python
user_gender = input("Enter your gender(F/M):")
if user_gender == "F":
    print("pink")
elif user_gender == "M":
    print("blue")
else:
    print("blank")
```





## 2. 多个 if

```python
number = int(input('Enter a number: ：'))

if number < 0:
    print('negative')
elif number > 0 and number <= 10:
    print('positive, between 0 and 10')
elif number > 10 and number <= 20:
    print('positive, between 10 and 20')
elif number == 0:
    print('zero')
else:
    print('positive, bigger than 20')
#output
Enter a number: 19
positive, between 10 and 20
```

不管有多少组条件，只执行其中一个。



## 3. else

::: info

else 后面不可以跟条件。

:::

删掉 else 输入22，会返回什么？

```python
number = int(input('Enter a number: '))

if number < 0:
    print('negative')
elif number > 0 and number <= 10:
    print('positive, between 0 and 10')
elif number > 10 and number <= 20:
    print('positive, between 10 and 20')
elif number == 0:              # 双等号判断相等
    print('zero')
#output
Enter a number: 22

进程已结束，退出代码为 0
```

什么也不返回。





## 4.嵌套

示例：

```python
user_gender = input("Enter your gender(F/M): ")
user_stu = input("Whether you are a student(Y/N): ")
if user_gender == "F":
    if user_stu == "Y":
        print("You are a girl student")
    elif user_stu == "N":
        print("You are a girl")
    else:
        print("?")
elif user_gender == "M":
    if user_stu == "Y":
        print("You are a boy student")
    elif user_stu == "N":
        print("You are a boy")
    else:
        print("?")
else:
    print("Please enter a correct gender (LGBT should quit)")
```



## 5. 课堂练习

### Question 01

判断用户输入的数据是否是奇数 or 偶数:

```python
num = int(input('Enter a number: '))
if num % 2 == 0:
    print('even number')
elif num % 2 != 0:
    print('odd number')
#output
Enter a number: -21
odd number
```

上面不是纯数字字符串会报错，我们如何优化代码呢？

```python
string = input('Enter a number: ')
string_type = string.isdigit()
if string_type:
    num = int(string)
    if num % 2 == 0:
        print('even number')
    elif num % 2 != 0:
        print('odd number')
else:
    print('not a number')
```

嵌套会使程序逻辑变得复杂～

```python
string = input('Enter a number: ')
if not string.isdigit():
    print('Not a number')
elif int(string) % 2 == 0:
    print('even number')
elif int(string) % 2 != 0:
    print('odd number')
```

上面的代码通过利用条件判断只执行一个分支的特性。

如果输入是非数字，执行完 if 后，后面的 `elif` 就与之无关了。如果把后面的 `int(string)` 放在前面第一个，进行条件判断的时候就会报错。所以要把 `if not string.isdigit():` 放在第一个的位置。

还可以进行简化：

```python
string = input('Enter a number: ')
if not string.isdigit():
    print('Not a number')
elif int(string) % 2 == 0:
    print('even number')
else:
    print('odd number')
```



### Question 02

编写一个程序，接收三个整数作为输入，并输出其中的最大值。

```python
num1 = int(input())
num2 = int(input())
num3 = int(input())
if num1 >= num2 and num1 >= num3:
    print(num1)
elif num2 >= num1 and num2 >= num3:
    print(num2)
else:
    print(num3)
```



### Question 03

设计一个程序，要求用户输入用户名和密码。如果用户名是 `admin` 且密码是 123456，则打印“登录成功”，否则打印“用户名或密码错误”。

```python
user_name = input("Enter your username: ")
user_key = input("Enter your key: ")
if user_name == 'admin' and user_key == '123456':
    print("Access granted")
else:
    print("Access denied")
```



## Question 04

分数等级判定编写一个程序，根据用户输入的分数（0-100），输出他们的等级。等级判定标准如下：分数大于等于 90：输出："A"分数在 80 到 89 之间：输出："B"分数在 70 到 79 之间：输出："C"分数在 60 到 69 之间：输出："D"分数小于 60：输出："F".

```python
your_grade = float(input('Please enter your grade: '))
if your_grade >= 0 and your_grade <= 100:
    if your_grade >= 90:
        print('A')
    elif your_grade >= 80:
        print('B')
    elif your_grade >= 70:
        print('C')
    elif your_grade >= 60:
        print('D')
    elif your_grade < 60:
        print('F')
else:
    print('incorrect garde')
```



## Quetstion 05

编写一个程序，根据用户输入的年份，判断该年份是平年还是闰年。闰年的条件如下：如果年份能被 4 整除但不能被 100 整除，或者能被 400 整除，则是闰年。如果是闰年，程序还需要进一步判断该年份是不是一个世纪年（即是否能被 100 整除）。输出应包括年份是平年、闰年还是世纪闰年。

```python
years = int(input('请输入一个年份：'))
if (years % 400 == 0) or (years % 4 == 0 and years % 100 != 0):
    if years % 100 == 0:
        print('今年是世纪闰年！')
    else:
        print('今年是闰年！')
else:
    print('今年是平年！')
```

