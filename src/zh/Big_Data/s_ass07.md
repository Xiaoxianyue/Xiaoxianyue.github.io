---
title: 大数据小作业 08
icon: alias
date: 2025-3-19 21:53:12
author: XiaoXianYue
isOriginal: true
category: 
    - 大三下
    - 大数据
tag:
    - 大三下
    - 大数据
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



### Task 01

> review

#### Q1

```python
nums = [100, 2, 3, 40, 99]
words = ["three", "two", "one"]

# Expressions and results
print(nums[-1])
print(words.index("two"))
print(nums[words.index("two")])
print(words[1])
print(words[1][1])
print(words[1][-2] * nums[2])
print(nums[:1] + words[:1])
print(", ".join(words))
print((", ".join(words))[4:7])
```

结果：

```python
D:\603\pythonProject\.venv\Scripts\python.exe D:\603\pythonProject\.venv\exel.py 
99
1
2
two
w
www
[100, 'three']
three, two, one
e, 

进程已结束，退出代码为 0
```

#### Q2

````python
rows = [
    ["Food Science", "24000", "0.049188446", "62000"],
    ["CS", "783000", "0.049518657", "78000"],
    ["Microbiology", "70000", "0.050880749", "60000"],
    ["Math", "433000", "0.05293608", "66000"]
]

hd = ["major", "students", "unemployed", "salary"]

# Expressions and results
print(rows[1][0])
print(rows[3][hd.index("students")])
print(len(hd) == len(rows[1]))
print(rows[0][1] + rows[2][1])
````

结果：

```python
D:\603\pythonProject\.venv\Scripts\python.exe D:\603\pythonProject\.venv\exel.py 
CS
433000
True
2400070000

进程已结束，退出代码为 0
```

#### Q3

```python
rows = [
    ["city", "state", "y14", "y15"],
    ["Chicago", "Illinois", "411", "478"],
    ["Milwaukee", "Wisconsin", "90", "145"],
    ["Detroit", "Michigan", "298", "295"]
]

hd = rows[0]
rows = rows[1:]

# Expressions and results
print(rows[2][hd.index("y14")] < rows[2][hd.index("y15")])
print(rows[0][hd.index("city")])
print(rows[0][hd.index("y14")])
print(", ".join(rows[-1][:2]))
```

结果：

```python
False
Chicago
411
Detroit, Michigan
```



### Task 02

#### 代码

```python
import csv


def read_csv_to_list(file_path):
    # Open the CSV file
    with open(file_path, mode='r', newline='') as file:
        reader = csv.reader(file)

        # Read the content into a list of lists
        content = [row for row in reader]

    return content

file_path = 'D:\pythonProject\.venv\Scripts\sales.csv'  # Replace with your CSV file path
csv_data = read_csv_to_list(file_path)
print(csv_data)
```



#### 输出文件内容

```python
D:\603\pythonProject\.venv\Scripts\python.exe D:\603\pythonProject\.venv\exel.py 
[['update_time', 'id', 'title', 'price', 'sale_count', 'comment_count', 'brand'], ['2016/11/14', 'A18177105952', 'CHANDO/自然堂凝时鲜颜肌活乳液120ml 淡化细纹补水滋润专柜正品', '194', '8122', '1575668', '自然堂'], ['2016/11/14', 'A18177226992', 'CHANDO/自然堂活泉保湿修护精华水（滋润型135ml 补水控油爽肤水', '99', '12668', '1254132', '自然堂'], ['2016/11/14', 'A18178033846', 'CHANDO/自然堂 男士劲爽控油洁面膏100g 深层清洁 男士洗面奶', '38', '25805', '980590', '自然堂'], ['2016/11/14', 'A18178045259', 'CHANDO/自然堂雪域精粹纯粹滋润霜（清爽型）50g 补水保湿滋润霜', '139', '5196', '722244', '自然堂'], ['2016/11/14', 'A18178129035', '自然堂 雪域纯粹滋润洗颜霜110g 补水保湿 洗面奶女 深层清洁', '88', '42858', '3771504', '自然堂']]

进程已结束，退出代码为 0
```

