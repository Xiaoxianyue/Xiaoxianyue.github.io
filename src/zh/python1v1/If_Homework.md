---
title: if条件判断课后练习
icon: python
date: 2024-8-16 20:28:23
author: XiaoXianYue
isOriginal: true
category: 
    - 课后回顾&练习
tag:
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

## Question 01

**奇数乘积问题**

- **题目描述**: 编写一个程序，判断给定的两个整数是否都是奇数，如果是，返回它们的乘积；如果不是，返回它们的和。
- **输入**: `num1, num2`
- **输出**: `num1 * num2` 或 `num1 + num2`

**Solution：**

```python
str = input('Enter two number: ')
r_str = str.replace(',','')
if not r_str.isdigit():
    print('Invalid input')
else:
    lst_str = str.split(',')
    lst = list(map(int, lst_str))
    num1 = float(lst[0])
    num2 = float(lst[1])
    if num1 % 2 != 0 and num2 % 2 != 0:
        print(num1 * num2)
    else:
        print(num1 + num2)
```



## Question 02

**字符串逆序回文检测**

- **题目描述**: 编写一个程序，检查给定的字符串是否为回文字符串的逆序形式。如果是，则返回"Palindrome Reversed"，否则返回字符串的长度。
- **输入**: `string`
- **输出**: `"Palindrome Reversed"` 或 `len(string)`

**Solution:**

```python
str = input('Enter a string: ').replace('',',').strip(',').split(',')
str_reverse = str[::-1]
if str == str_reverse:
    print('Palindrome reversed')
else:
    print(len(str))
```



## Question 03

**天气建议系统**

- 题目描述: 编写一个程序，根据给定的温度和湿度，建议穿什么衣服。如果温度低于15度且湿度高于60%，建议穿厚外套；否则建议穿轻便衣物。
- 输入: `temperature, humidity`
- 输出: `"Wear a heavy coat"` 或 `"Wear light clothes"`

```python
temperature = input(" Enter the temperature in Celsius: ").replace('℃', '')
humidity = input(" Enter the humidity in Celsius:").replace('%', '')
if not temperature.isdigit() or not humidity.isdigit():
    print("Invalid, please enter a positive integer")
else:
    temp = int(temperature)
    hum = int(humidity)
    if temp < 15 and hum > 60:
        print('Wear a heavy coat')
    else:
        print('Wear a light clothes')
```





## Question 04

**随机数平方**

- **题目描述**: 编写一个程序，生成一个随机数。如果随机数是偶数，则输出它的平方；如果是奇数，则输出该数字的立方根。
- **输入**: `random_number`
- **输出**: `random_number**2` 或 `random_number**(1/3)`

**Solution:**

```python
import random
random_num = random.randint(0, 100000000000000)
if random_num % 2 == 0:
    print(random_num ** 2)
else:
    print(random_num ** 1/3)
print(random_num)
```



## Question 05

**字母转换器**

- **题目描述**: 编写一个程序，将输入的字符串中所有的元音字母变为大写字母。如果字符串以元音字母结尾，则全部字母变为小写。
- **输入**: `string`
- **输出**: `modified_string`

**Solution:**

```python
str = input('Enter a string: ').replace('a','A').replace('e','E').replace('i','I').replace('o','O').replace('u','U')
if not str.isalpha():
    print('Invalid')
elif str.endswith('E') or str.endswith('I') or str.endswith('O') or str.endswith('U') or str.endswith('A'):
    lower_str = str.lower()
else:
    print(str)
```



## Question 06

**信用卡号码检测**

- **题目描述**: 编写一个程序，判断一个16位数字是否符合Luhn算法。如果是，则输出"Valid Card"，否则输出"Invalid Card"。
- **输入**: `credit_card_number`
- **输出**: `"Valid Card"` 或 `"Invalid Card"`

**Solution:**

```python
keyword = input("Enter your credit card number: ")
if not keyword.isdigit():
    print("Invalid inpute")
else:
    s = 0
    key_str = keyword.replace('',',').strip(',').split(',')
    key = list(map(int, key_str))
    key.reverse()
    if len(key) != 16:
        print("Invalid length")
    else:
        for i in range(1, len(key)):
            t = key[i-1]
            if i % 2 == 0:
                t *= 2
                if t >= 10:
                    t = t % 10 + t // 10
                s += t
            else:
                s += t
        if s % 10 == 0:
            print('Valid Card')
        else:
            print('Invalid Card')
```















