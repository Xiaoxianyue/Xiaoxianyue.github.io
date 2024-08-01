---
title: 字符串课后练习
icon: python
date: 2024-8-01 10:00:46
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

Write a program that asks for the user's name, their age and prints a personalized welcome message for them.

For example, an execution could look like this:

```python
Please enter your name: Aika
Please enter your age: 29
Aika, 29, is taking CS-UY 1114.
```

The format of your output need not look exactly the same as ours, but it must still ask the user for their name and age, and print them out as part of some sort of sentence.



```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"{name},{age:.2f},is taking CS-UY 114")

name = input("Enter your name: ")
age = int(input("Enter your age: "))
string = '{},{:.2f},is taking CS-UY 1114'.format(name,age)
print(string)

name = input("Enter your name: ")
age = int(input("Enter your age: "))
string = '%s,%.2f,is taking CS-UY 1114'%(name,age)
print(string)

#output
Enter your name: sherry
Enter your age: 20
sherry,20.00,is taking CS-UY 1114
```





## Question 02

The U.S. Census provides information on its [web page Census.gov](https://www.census.gov/) about the current U.S. population as well as approximate rates of change. Four rates of change are provided:

- There is a birth every 7 seconds.
- There is a death every 15 seconds.
- There is a new immigrant every 42 seconds.
- There is a new emigration (i.e. somebody moves out of the country) every 1.25 minutes.

These are, naturally, approximations of birth, death, and immigration rates, but they can assist in providing population estimates in the near term.

Write a program that takes a year as input (an integer—you may assume that this will value will always be greater than or equal to 2023) and prints out an estimated population (as an integer). Assume that the current population is 330,109,174, and assume that there are always exactly 365 days in a year.

Sample execution:



```
Please enter a year greater than 2023:
2042
The population in year 2042 will be 382038453
```

The format of your output need not look exactly the same as ours, but it must still ask the user to enter an integer representing a year, and it must always output the estimated population of that year.



```python
s = 60 * 60 * 24 * 365
birth_numbers = s/7
death_numbers = s/15
new_immigration = s/42
new_emigration = s/(1.25 * 60)
change_a_year = birth_numbers - death_numbers + new_immigration - new_emigration
years = int(input("Please enter a year greater than 2023: "))
change = (years-2023) * change_a_year + 330109174
print (f"The population in year {years} will be {change}")
#output
Please enter a year greater than 2023: 2042
The population in year 2042 will be 382038454.0
```





## Question 03

Write a program that asks the user to enter a number of quarters, dimes, nickels and pennies and then outputs the monetary value of the coins in the format of dollars and remaining cents.

Your program should interact with the user, and output its results, **exactly** as it is shown in the following example:



```python
Please enter number of coins:
Number of quarters: 13
Number of dimes: 4
Number of nickels: 11
Number of pennies: 17
The total is 4 dollar(s) and 37 cent(s)
```

solution:

```python
quarters = int(input())
dimes = int(input())
nickels = int(input())
pennies = int(input())
dollars = (quarters * 25 + dimes * 10 + nickels * 5 + pennies) // 100
cents = (quarters * 25 + dimes * 10 + nickels * 5 + pennies) % 100
print(f"The total is {dollars} dollar(s) and {cents} cent(s)")
#output
13
4
11
17
The total is 4 dollar(s) and 37 cent(s)
```



## Question 04

Write a program that asks the user to enter an amount of money in the format of dollars and remaining cents. The program should calculate and print the minimum number of coins (quarters, dimes, nickels and pennies) that are equivalent to the amount input by the user.

Your program should interact with the user, and display its results, **exactly** as it shows in the following example:

```python
Please enter your amount of dollars and cents, in two separate lines.
4
37
4 dollars and 37 cents are: 17 quarters, 1 dimes, 0 nickels and 2 pennies
```

**Hint**: In order to find the minimum number of coins, first find the maximum number of quarters that fit within the amount of money input by the user, then find the maximum number of dimes that fit in the remaining amount, and so on.l

solution:

```python
dollars = int(input('Please enter your amount of dollars and cents, in two separate lines.'))
cents = int(input())
total_cents = dollars * 100 + cents
quarters = total_cents // 25
dimes = total_cents % 25 //10
nickels = (total_cents - quarters * 25 - dimes * 10) // 5
pennies = total_cents - quarters * 25 - dimes * 10 - nickels * 5
print(f'{dollars} dollars and {cents} cents are: {quarters} quarters and {dimes} dimes and {nickels} nickels and {pennies} pennies')
#output
Please enter your amount of dollars and cents, in two separate lines.4//怎么换行？？
37
4 dollars and 37 cents are: 17 quarters and 1 dimes and 0 nickels and 2 pennies
```





## Question 05

In certain video games, you can spend either in-game currency or real money to get a series of often-random items to "improve" your gameplay experience. These mechanics are commonly referred to as **[gacha](https://en.wikipedia.org/wiki/Gacha_game)**, or **[loot boxes](https://en.wikipedia.org/wiki/Loot_box)**, and are some of the most **[controversial](https://www.theverge.com/2019/2/19/18226852/loot-boxes-gaming-regulation-gambling-free-to-play)** topics in video game development.

Let's pretend that the chances of getting a rare item in a video game are from **0% to 100%**, and our video game has a player start at level 1 and end at level 5 . At level 1 , the player has an **100%** chance of getting a rare item. At level 2 the player has an **80%** chance of getting a rare item. At level 3 , **60%**. At level 4 , **40%**, and at level 5 , only **20%**.

Write a program that asks the user for their current level in the video game, determines whether they have received a rare item in a loot box, and lets them know in a message.

```python
What is your level? 1
Your loot box contains a rare item: True

What is your level? 2
Your loot box contains a rare item: False

What is your level? 3
Your loot box contains a rare item: True

What is your level? 4
Your loot box contains a rare item: False

What is your level? 5
Your loot box contains a rare item: False

```

**Note**: random

```python
random_num = random(1, 100)
```





## Question 06

Suppose Semi and Ollie worked for some time, and we want to calculate the total time both of them worked.

Write a program that reads a number of days, hours, and minutes minutes each of them worked,and prints the total time both of them worked together as days, hours, and minutes.

For example, an execution could look like this:

```
Please enter the number of days Semi has worked: 2
Please enter the number of hours Semi has worked: 12
Please enter the number of minutes Semi has worked: 15
Please enter the number of days Ollie has worked: 3
Please enter the number of hours Ollie has worked: 15
Please enter the number of minutes Ollie has worked: 20
The total time both of them worked together is: 6 days, 3 hours and 35 minutes.
```

**Note**: There are 24 hours in a day and 60 minutes in an hour.

Solution:

```python
semi_day = int(input('Please enter the number of days Semi has worked:'))
semi_hour = int(input('Please enter the number of hours Semi has worked:'))
semi_minute = int(input('Please enter the number of minutes Semi has worked:'))
ollie_day = int(input('Please enter the number of days ollie has worked:'))
ollie_hour = int(input('Please enter the number of hours ollie has worked:'))
ollie_minute = int(input('Please enter the number of minutes ollie has worked:'))
total_minutes = (ollie_minute + semi_minute) % 60
total_hours = ((ollie_hour + semi_hour) + (ollie_minute + semi_minute) // 60) % 24
total_days = (semi_day + ollie_day) + ((ollie_hour + semi_hour) + (ollie_minute + semi_minute) // 60) // 24
print('The total time both of them worked together is:{} days and {} hours and {} minutes.'.format(total_days, total_hours, total_minutes))
```

