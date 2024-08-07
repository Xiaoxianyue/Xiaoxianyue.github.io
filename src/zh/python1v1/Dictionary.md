---
title: 07-字典
icon: python
date: 2024-8-07 10:24:21
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

## 如何创建一个电话簿

<img src="./Dictionary.assets/f6b36bf3cf1903eb3156497ed846a42.png" alt="f6b36bf3cf1903eb3156497ed846a42" style="zoom: 50%;" />

::: code-tabs

@tab Solution 1:

```python
lst1 = ['李雷', '韩梅梅', '大卫', 'Mr.liu', 'Bornforthis', 'Alexa']
lst2 = ['123456', '132456', '154389', '131452', '180595', '131559']
a = input('请输入你要查询的人的名称：')
num = lst1.index(a)
phone_num = lst2[num]
print(phone_num)
```

@tab Solution 2:

```python
lst1 = ['李雷','123456', '韩梅梅', '132456','大卫', '154389','Mr.liu','131452', 'Bornforthis', '180595','Alexa','131559']
a = input('请输入你要查询的人的名称：')
num = lst1.index(a)
phone_num = lst1[num+1]
print(phone_num)
```

:::

**我们能不能用字典简单快捷地实现这个功能？**

```python
telephone_number = { '李雷':'123456', '韩梅梅': '132456','大卫':'154389','Mr.liu':'131452', 'Bornforthis':'180595','Alexa':'131559'}
search_name = input('Enter your name: ')
phone_num = telephone_number[search_name]
print(phone_num)
```



**引出了我们今天要学习的内容：字典**



## 1. 字典结构

- 用`{}`表示字典

- 字典内每个元素由两个元素组成： key 和 value：`{key1: value1, key2: value2, …}`

- 各项用逗号隔开

```python
telephone_number = { '李雷':'123456', '韩梅梅': '132456','大卫':'154389','Mr.liu':'131452'}
```



- key 和 value 是一一对应的。同一个键只有一个对应的值。
- 键的类型是不可变的。
- value 的类型是任意的。

观察下列代码：

```python
names = {['name']: '李雷', 'numbers': '1234', 'name': 'Shelly', True: 'bool', 2: 'int'}
print(names)
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 1, in <module>
    names = {['name']: '李雷', 'numbers': '1234', 'name': 'Shelly', True: 'bool', 2: 'int'}
TypeError: unhashable type: 'list'
```

::: info

这里第一个 key ([‘name’])是列表（可变元素），而字典的键是不可变的，所以会报错。

:::



观察下列代码：

```python
names = {'name': '李雷', 'numbers': '1234', 'name': 'Shelly', True: 'bool', 2: 'int'}
print(names)
#output
{'name': 'Shelly', 'numbers': '1234', True: 'bool', 2: 'int'}
```

::: warning 

如果有几个名称类型一模一样的 key 则默认输出最后一个 key 

可以理解为覆盖。

:::



## 2. 字典的创建方法

### 2.1 方法一

根据其他序列创建新字典。

```python
message = [('lilei',98),('hanmeimei',99)]
list_to_list = dict(message)
print(list_to_list)
#output
{'lilei': 98, 'hanmeimei': 99}
```

### 2.2 方法二

根据关键字参数创建新字典

```python
d = dict(lilei = 98, hanmeimei = 99)
print(d)
#output
{'lilei': 98, 'hanmeimei': 99}
```

缺点：key 只能是字符串，不能是数字，元组等等。局限了字典的功能。



## 3. 访问字典数据



```python
grade = {'leon': '98', 'shelly': '99'}
print(grade['leon'])
#output
98
```

但是当 key 不存在时

```python
grade = {'leon': '98', 'shelly': '99', 2: 'int'}
print(grade['Mary'])
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 2, in <module>
    print(grade['Mary'])
KeyError: 'Mary'
```

会报错。

我们不希望报错，而希望返回空。



### 3.1 .get()

当使用 get 方法时，需要提供一个 key ，方法会返回与该键关联的值。如果键在字典中不存在，get 方法将返回 None，或者你可以指定一个默认值，如果键不存在返回这个默认值。

```python
value = dictionary.get(key, default_value)
```

- key: 你想检索的键
- default_value ：如果键不存在时返回的值。不提供则默认为None。

如下：

```python
grade = {'leon': '98', 'shelly': '99', 2: 'int'}
print(grade.get('Jack', 'ahho'))
#output
ahho
```





## 4. 更新字典数据

字典修改或添加的原则：有则改之，无则加勉 [无则添加]

```python
grade = {'leon': '98', 'shelly': '99', 2: 'int'}
grade['leon'] = '99'
print(grade)
grade['shy'] = 100
print(grade)
#output
{'leon': '99', 'shelly': '99', 2: 'int'}
{'leon': '99', 'shelly': '99', 2: 'int', 'shy': 100}
```





## 5. 字典的删除

元素的删除：

```python
grade = {'leon': '98', 'shelly': '99', 2: 'int'}
del grade['shelly']
print(grade)
#output
{'leon': '98', 2: 'int'}
```

字典的清空（空字典）：

```python
grade = {'leon': '98', 'shelly': '99', 2: 'int'}
grade.clear()
print(grade)
#output
{}
```

字典的消除：

```python
grade = {'leon': '98', 'shelly': '99', 2: 'int'}
del grade
print(grade)
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\d.py", line 3, in <module>
    print(grade)
NameError: name 'grade' is not defined
```



## 6. 字典的结构

### 6.1 嵌套

将一系列字典存储在列表中，或将列表作为值存储在字典中。

- 字典列表
- 在字典中存储列表
- 在字典中存储字典

::: code-tabs

@tab 字典列表

```python
student1 = {'name1':'John', 'age1':18, 'grade1':99}
student2 = {'name2':'Hank', 'age2':20, 'grade2':100}
student3 = {'name3':'shelly', 'age3':20, 'grade3':120}
students = [student1, student2, student3]
shelly_grade = students[2]['grade3']
print(shelly_grade)
print(students)
#output
120
[{'name1': 'John', 'age1': 18, 'grade1': 99}, {'name2': 'Hank', 'age2': 20, 'grade2': 100}, {'name3': 'shelly', 'age3': 20, 'grade3': 120}]
```



@tab 在字典中存储列表

```python
f_class = {
    'Leon': ['math', 'physics'],
    'shelly': ['biology'],
    'Hank': ['English', 'chemicals']
}
print(f_class)
Leon_favorite = f_class['Leon'][0]
print(Leon_favorite)
```











