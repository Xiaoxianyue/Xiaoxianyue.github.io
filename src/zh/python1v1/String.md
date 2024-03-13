---
title: 04-字符串
icon: alias
date: 2023-12-21 14:49:25
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

## 1. 字符串的定义

字符串是由字母，数字和特殊字符组成的序列。

![b91944bbe88c00190166f500a543104](./String.assets/b91944bbe88c00190166f500a543104.png)

## 2. 创建字符串

如何创建字符串？

——使用<span style="color:pink">单引号，双引号</span>和<span style="color:pink">三引号</span>

```python
name = 'shelly'
number = "110"
paragraph = '''hello, shelly!
hello, world'''
paragraph_two = """hello, shelly!
hello, world"""
```

### 2.1**为什么Python同时支持三种创建字符串的方法？**

**原因一：（单双引号混用）**

```python
string = 'I am a coconut'
print(string)
```

但是英文可以缩写如下:

```python
string = 'I'm a coconut'
print(string)
#output
 File "C:\Coder\Lesson\1.py", line 1
    string = 'I'm a coconut'
                           ^
SyntaxError: unterminated string literal (detected at line 1)
```

因为开头是单引号，所以python会寻找下一个出现的单引号进行匹配，而第一次出现的单引号不在字符串末尾，所以导致整个字符串异常。（没有完全包裹字符串内容）

如何解决上述内容？——使用双引号。

```python
string = "I'm a coconut"
print(string)

#output
I'm a coconut
```



**原因二：（三引号可以原样输出多行代码）**

```pythpn
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

我们要将其放入字符串：

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"
print(string)
#output
File "C:\Coder\Lesson\1.py", line 1
    string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
             ^
SyntaxError: unterminated string literal (detected at line 1)

进程已结束，退出代码为 1
```

多行代码放入双引号，输出会报错。

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\
\
浅者见浅，深者见深——黄家宝\
\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\
\
先实现功能，再去优化，否则一切会很乱。——AI悦创\
\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"
print(string)
#output
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

```

还是双引号的情况，行后打\，输出连成一行。

要想原样输出：

```python
string = '''我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东'''
print(string)

#output
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东

进程已结束，退出代码为 0
```

由此发现，三引号可以原样输出。

可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」

- **<span style="color:orange">三个单引号或者三个双引号，实现原样输出。</span>**
- **<span style="color:orange">多行注释</span>**
- **<span style="color:orange">单双三引号混用</span>**（代码略）
- ![23721ca8bc5620c4e9001d2ad1d0013](./String.assets/23721ca8bc5620c4e9001d2ad1d0013.png)





## 3.字符串长度

如何获取一个字符串长度——使用 len()

```python
p = "Hello,Coconut!"
print(len(p))
#output
14
```

在获取字符串长度时，从数字1开始数。



## 4.字符串中的字符获取

### 4.1 获取单个字符

输出c

```python
string = "coconut"
#获取单个字符
select = string[0]
print(select)

#output
c
```

三种输出t的方法

```python
string = "coconut"
select = string[-1]
print(select)

string = "coconut"
select = string[6]
print(select)

string = "coconut"
select = string[len(string) - 1]
print(select)
```



### 4.2 提取多个连续的字符串[子字符串]

```python
string = 'coconut'
"""
语法: string = "bornforthis"
select = string[start: end]
PS: end 记得 +1, 因为最后一个不算
"""
select = string[0:6]
print(select)

#output
coconu
```

### 4.3 获取多个不连续字符

```pythonstring = "0123456789"
string = 012345678
"""
语法: string = "0123456789"
select = string[start: end: sep]
PS: end 记得 +1
"""
select = string[0:10:2]
print(select)

#output
02468
```

这里我们把[0:10:2]换成[ : :2]，发现输出结果还一样。故可知，默认开头和结尾。



## 4.5 字符串倒序

#### 4.5.1 实现

字符串的第三个位置，控制的是字符提取的方向。默认为正数 1，如果我们改成 -1，则会变成反方向。

::: warning

正负控制方向，数字大小控制步长。

:::

```python
string = "bornforthis"
select = string[::-1]
print(select)

# 输出
sihtrofnrob
```

#### 4.5.2存在的问题

#### 4.5.2 存在的问题

::: info 思考🤔

上面代码 `string[::-1]` 前两位省略了什么数字？尝试填写上去。

:::

```python
string = "bornforthis"
select = string[0:11:-1]
print(select)
```

这样不会得到结果也不会报错。

why？

![90c25a8d38b54b7d64af82f7ac1366a](./String.assets/90c25a8d38b54b7d64af82f7ac1366a.png)

怎么解决？



#### 4.5.3 解决方法

##### 4.5.3.1 方法一：调换位置

- 能否解决：可以

- 存在什么问题?少一个字母。

    ```python
    string = "bornforthis"
    select = string[11:0:-1]
    print(select)
    #output
    sihtrofnro
    ```

为什么少一个字母？

——存在一个悖论，因为结束是0，但是0+1时是1，1又代表了从左往右数第二个字母。故而+1是无法解决和实现了。

但是，我们可以利用不写结尾，得到最后一个缺失的字符。 string[11::-1]。



#####  4.5.3.2 方法二：重新开始写结尾

想想字符串的有序性，从右到左。

为什么要纠结前面两个空的数字是多少？——为了之后的到某一部分的字符串倒序。

```python
string = "bornforthis"
select = string[-1:-12:-1]
print(select)
#output
sihtrofnrob
```

![6496cebcba5eb5321684ba37e3a0fda](./String.assets/6496cebcba5eb5321684ba37e3a0fda.png)

小试牛刀：获取rofn

```python
string = "bornforthis"
select = string[-5:-9:-1]
print(select)
```















