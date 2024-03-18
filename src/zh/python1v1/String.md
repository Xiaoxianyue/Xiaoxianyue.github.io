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





## 5 字符串的内置方法



### 5.1 .upper（）

将字符串内容全部转成大写。

```python
string = "taurus"
upper_string = string.upper()
print(upper_string)
#output
TAURUS
```



### 5.2 .lower()

将字符串内容全部转成小写。

```python
string = "SHERRY"
lower_string = string.lower()
print(lower_string)
#output
sherry
```



### 5.3 .capitalize()

将字符串首字母，转化成大写。【只对第一个字母大写，其他的不变】

```python
string = "moon in taurus"
capitalize_string = string.capitalize()
print(capitalize_string)
#output
Moon in taurus
```



### 5.4 .title()

将字符串中的每个单词的首字母，转换成大写。

```python
string = "moon in taurus"
title_string = string.title()
print(title_string)
#output
Moon In Taurus

#不管是什么间隔，都会转成首字母大写。
string = "moon-in-taurus"
title_string = string.title()
print(title_string)
#output
Moon-In-Taurus
```





### 5.5 .startswith()

检测字符串是不是以特定字符或单词开头，返回布尔值。

```python
string = "sherry"
startswith_string = string.startswith("s")
print(startswith_string)
#output
True

string = "sherry"
startswith_string = string.startswith("a")
print(startswith_string)
#output
False

string = "sherry"
startswith_string = string.startswith("sw")
print(startswith_string)
#output
False
```



### 5.6 .endswith()

检测字符串是不就是以特定单词或字符结尾，返回布尔值。

```python
string = "taurus"
endswith_string = string.endswith("s")
print(endswith_string)
#output
True

string = "taurus"
endswith_string = string.endswith("us")
print(endswith_string)
#output
True

string = "taurus"
endswith_string = string.endswith("u")
print(endswith_string)
#output
False
```



### 5.7 .count()

计算特定字符或单词在目标字符串中存在的次数

```python
string = "taurus"
count_string = string.count("u")
print(count_string)
#output
2

string = "taurus"
count_string = string.count("au")
print(count_string)
#output
1

string = "taurus"
count_string = string.count("d")
print(count_string)
#output
0
```



### 5.8 .find()

寻找目标字符或单词在特定字符串中，第一次出现的下标。「也就是出现重复，也只是返回第一次出现的下标」如果是查找单词，那么 find() 返回目标单词的第一个字符的下标。

如果，查询的字符或单词不存在，则返回 -1。

```python
string = "taurus"
find_string = string.find("t")
print(find_string)
#output
0

string = "taurus"
find_string = string.find("b")
print(find_string)
#output
-1

string = "moonintaurus"
find_string = string.find("in")
print(find_string)
#output
4

string = "moonintaurus"
find_string = string.find("for")
print(find_string)
#output
-1
```





### 5.9 .index()

寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 index() 返回目标单词的第一个字符的下标。

如果，查询的字符或单词不存在，则报错。

```python
string = "moonintaurus"
index_string = string.index("i")
print(index_string)
#output
4

string = "moonintaurus"
index_string = string.index("b")
print(index_string)
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\1.py", line 2, in <module>
    index_string = string.index("b")
ValueError: substring not found

string = "moonintaurus"
index_string = string.index("moon")
print(index_string)
#output
0

string = "moonintaurus"
index_string = string.index("sza")
print(index_string)
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\1.py", line 2, in <module>
    index_string = string.index("sza")
ValueError: substring not found
```



### 5.10 .isdigit()

判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回False

```python
string = "20040518"
isdigit_string = string.isdigit()
print(isdigit_string)
#output
True

string = "2004 0518"
isdigit_string = string.isdigit()
print(isdigit_string)
#output
False
```



### 5.11 .isalpha()

判断字符串是不是纯字母字符串，字符串中但凡有一个非字母的，则返回False

```python
string = "taurus"
isalpha_string = string.isalpha()
print(isalpha_string)
#output
True

string = " taurus"
isalpha_string = string.isalpha()
print(isalpha_string)
#output
False
```





### 5.12 .isalnum()

判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中但凡出现非数字、字母元素，则返回 False。

```python
string = "1234567"
isalnum_string = string.isalnum()
print(isalnum_string)
#output
True

string = "moon"
isalnum_string = string.isalnum()
print(isalnum_string)
#output
True

string = "moon20040518"
isalnum_string = string.isalnum()
print(isalnum_string)
#output
True

string = "moon 20040518"
isalnum_string = string.isalnum()
print(isalnum_string)
#output
False
```



### 5.13 .isupper()

判断字符串中的字符否全大写，全大写则返回 True，否则返回 False。

```python
string = "MOON"
isupper_string = string.isupper()
print(isupper_string)
#output
True

string = "MOON123[]"
isupper_string = string.isupper()
print(isupper_string)
#output
True

string = "MOOn123[]"
isupper_string = string.isupper()
print(isupper_string)
#output
False

string = "moon123[]"
isupper_string = string.isupper()
print(isupper_string)
#output
False
```



### 5.14 .islower()

判断字符串是不分全小写，全小写则返回 True，否则返回 False。

```python
string = "moon"
islower_string = string.islower()
print(islower_string)
#output
True

string = "moon123#@"
islower_string = string.islower()
print(islower_string)
#output
True

string = "moon123#@IN"
islower_string = string.islower()
print(islower_string)
#output
False
```



### 5.15 .isspace()

判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。

```python
string = "     "
isspace_string = string.isspace()
print(isspace_string)
#output
True

string = ""
isspace_string = string.isspace()
print(isspace_string)
#output
False
```



### 5.16 .strip

默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。

```python
string = "  moonintaurus   "
strip_string = string.strip()
print("原本的字符串",string)
print("去掉前后空格的字符串",strip_string)
#output
原本的字符串   moonintaurus   
去掉前后空格的字符串 moonintaurus


string = "---moonintaurus---"
strip_string = string.strip("-")
print("原本的字符串",string)
print("去掉前后空格的字符串",strip_string)
#output
原本的字符串 ---moonintaurus---
去掉前后空格的字符串 moonintaurus


string = "--- --moonintaurus-- ---"
strip_string = string.strip("-")
print("原本的字符串",string)
print("去掉前后空格的字符串",strip_string)
#output
原本的字符串 --- --moonintaurus-- ---
去掉前后空格的字符串  --moonintaurus-- #可以看到，只能去掉连续的减号


#如果想要去掉减号和空格呢
string = "--- --moonintaurus-- ---"
strip_string = string.strip("- ")
print("原本的字符串",string)
print("去掉前后空格的字符串",strip_string)
#output
原本的字符串 --- --moonintaurus-- ---
去掉前后空格的字符串 moonintaurus
```



### 5.17 .lstrip()

默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。

```python
string = "   moonintaurus-- ---"
lstrip_string = string.lstrip()
print("原本的字符串",string)
print("去掉前后空格的字符串",lstrip_string)
#output
原本的字符串    moonintaurus-- ---
去掉前后空格的字符串 moonintaurus-- ---


string = "-----moonintaurus-----"
lstrip_string = string.lstrip("-")
print("原本的字符串",string)
print("去掉前后空格的字符串",lstrip_string)
#output
原本的字符串 -----moonintaurus-----
去掉前后空格的字符串 moonintaurus-----


string = "--- --moonintaurus-- ---"
lstrip_string = string.lstrip("- ")
print("原本的字符串",string)
print("去掉前后空格的字符串",lstrip_string)
#output
原本的字符串 --- --moonintaurus-- ---
去掉前后空格的字符串 moonintaurus-- ---
```



### 5.18 .rstrip()

默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。

```python
string = "   bornforthis   "
rstrip_string = string.rstrip()
print("原本的字符串:", string)
print("去掉右边空白字符后:", rstrip_string)

# ---output---
原本的字符串:    bornforthis   
去掉右边空白字符后:    bornforthis


string = "----bornforthis----"
rstrip_string = string.rstrip('-')
print("原本的字符串:", string)
print("去掉右边 '-' 后:", rstrip_string)

# ---output---
原本的字符串: ----bornforthis----
去掉右边 '-' 后: ----bornforthis


string = "----bornforthis-- --"
rstrip_string = string.rstrip('- ')  # 不分先后顺序
print("原本的字符串:", string)
print("去掉右边 '- ' 后:", rstrip_string)

# ---output---
原本的字符串: ----bornforthis-- --
去掉右边 '- ' 后: ----bornforthis
```



### 5.19 .replace()

.replace(old,new,count)第一个位置传入待替换得旧字符，第二个位置传入要替换的新字符，默认替换全部，count控制替换次数。

```python
string = "   moonintaurus   "
replace_string = string.replace(' ', '*')
print("原本的字符串",string)
print("去掉前后空格的字符串",replace_string)
#output
原本的字符串    moonintaurus   
去掉前后空格的字符串 ***moonintaurus***  #默认全都替换掉


string = "aiaiai"
replace_string = string.replace('ai', 'love',1)  #count不用加引号
print("原本的字符串",string)
print("去掉前后空格的字符串",replace_string)
#output
原本的字符串 aiaiai
去掉前后空格的字符串 loveaiai
```



### 5.20 .split（）

`.split(sep,maxsplit)`以特定字符进行分割，默认空壳分割。 如果传入参数sep ，则以参数进行分割。返回分割后的列表，maxsplit用于控制分割几次。

```PYTHON
string = "moon in taurus"
split_string = string.split()
print("原本的字符串",string)
print("去掉前后空格的字符串",split_string
#output
原本的字符串 moon in taurus
去掉前后空格的字符串 ['moon', 'in', 'taurus']    #默认空格分割


string = "moon-in-taurus"
split_string = string.split('-')    #以-分割
print("原本的字符串",string)
print("去掉前后空格的字符串",split_string)
#output
原本的字符串 moon-in-taurus
去掉前后空格的字符串 ['moon', 'in', 'taurus']

string = "moon-in-taurus"
split_string = string.split('-',1)
print("原本的字符串",string)
print("去掉前后空格的字符串",split_string)     
#output
原本的字符串 moon-in-taurus
去掉前后空格的字符串 ['moon', 'in-taurus']
      
```



### 5.21 .rsplit()

`.rsplit(sep, maxsplit)` 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。

```python
string = "moon-in-taurus"
rsplit_string = string.rsplit('-')
print("原本的字符串",string)
print("去掉前后空格的字符串",rsplit_string)
#output
原本的字符串 moon in taurus
去掉前后空格的字符串 ['moon', 'in', 'taurus']  


string = "moon-in-taurus"
rsplit_string = string.rsplit('-',1)
print("原本的字符串",string)
print("去掉前后空格的字符串",rsplit_string
#output
原本的字符串 moon-in-taurus
去掉前后空格的字符串 ['moon-in', 'taurus']
```



### 5.22 .join()

以特定字符是字符串间隔。

```python
string = "moonintaurus"
join_string = '-'.join(string)
print("原本的字符串：",string)
print("加上间隔的字符串：",join_string)
#output
原本的字符串： moonintaurus
加上间隔的字符串： m-o-o-n-i-n-t-a-u-r-u-s
```



## 6. 字符串格式化

```python
string = "Hi Xiaoxianyue,Welcome to Haikou"
print(string)

#---output---
Hi Xiaoxianyue,Welcome to Haikou
```

- 所存在的问题：需要换一个人名或者地区，就需要重新创建一个全新的字符串。
- 我们希望有类似模版，让我们把不同人名，地区填写进去。而不是每个人都从头创建一个新的字符串。

当然可以使用字符串的加法，大过于复杂冗长。

```python
str1 = "Hi "
str2 = ",Welcome to "
str3 = "."
string = str1 + "Billkin" + str2 + "Fuzhou" + str3
print(string)
#output
Hi Billkin,Welcome to Fuzhou.
```

这时存在一个问题：由于Python中不同的数据类型不可以直接相加，除非强制转换类型为字符串。

```python
string = "money is" + 190
print(string)
#output
Traceback (most recent call last):
  File "C:\Coder\Lesson\1.py", line 7, in <module>
    string = "money is" + 190
TypeError: can only concatenate str (not "int") to str


#转换后：
string = "money is " + str(190)
print(string)
#output
money is 190
```

——format 就应运而生。



### 6.1 .format

1.单个花括号{}

```python
string = "Hi {},Welcome to Beijing".format("XiaoXianyue")
print(string)
#output
Hi XiaoXianyue,Welcome to Beijing

template_string = "Hi {},Welcome to Beijing"
print(template_string.format("XiaoXianyue"))
#output
Hi XiaoXianyue,Welcome to Beijing
```



2.一个花括号以上 [按顺序填入]

```python
template_string = "Hi {},Welcome to {}"
print(template_string.format("XiaoXianyue","Beijing"))
#output
Hi XiaoXianyue,Welcome to Beijing

string = "Hi {},Welcome to {}".format("Xiaoxianyue","Beijing")
print(string)
#output
Hi XiaoXianyue,Welcome to Beijing
```



3.多个花括号指定位置

```python
string = "Hi {1},Welcome to {0}".format("Beijing","Xiaoxianyue")
print(string)
#output
Hi XiaoXianyue,Welcome to Beijing


string = "Hi {1},Welcome to {0}"
print(string.format("Beijing","Xiaoxianyue"))
#output
Hi XiaoXianyue,Welcome to Beijing
```



























