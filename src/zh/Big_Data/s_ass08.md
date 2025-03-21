---
title: 大数据小作业 09
icon: alias
date: 2025-3-20 23:04:53
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

### 创建DataFrame数据

```python
import pandas as pd
import numpy as np

# 创建包含缺失值的字典
data_dict = {
    '姓名': ['张三', '李四', '王五', '张三', None],  # None 表示缺失值
    '年龄': [25, 30, None, 25, 40],  # None 代表缺失值
    '城市': ['北京', '上海', '广州', None, '北京'],  # None 代表缺失值
    '工资': [7000, 8000, 9000, 7000, None]  # None 代表缺失值
}

# 将字典转换为 DataFrame
df = pd.DataFrame(data_dict)
```



### isnull

```python
# 发现缺失值（True 表示该值缺失）
missing_values = df.isnull()

# 统计每列的缺失值数量
missing_count_per_column = df.isnull().sum()

# 返回包含缺失值的行（至少有一个缺失值的行）
rows_with_missing_values = df[df.isnull().any(axis=1)]

# 返回包含缺失值的列（至少有一个缺失值的列）
columns_with_missing_values = df.loc[:, df.isnull().any()]

# 输出结果
print("=== DataFrame ===")
print(df)
print("\n=== 缺失值情况 ===")
print(missing_values)
print("\n=== 每列缺失值统计 ===")
print(missing_count_per_column)
print("\n=== 包含缺失值的行 ===")
print(rows_with_missing_values)
print("\n=== 包含缺失值的列 ===")
print(columns_with_missing_values)
```

结果：

```python
D:\603\pythonProject\.venv\Scripts\python.exe
D:\603\pythonProject\.venv\exel.py 
=== DataFrame ===
     姓名    年龄    城市      工资
0    张三  25.0    北京  7000.0
1    李四  30.0    上海  8000.0
2    王五   NaN    广州  9000.0
3    张三  25.0  None  7000.0
4  None  40.0    北京     NaN

=== 缺失值情况 ===
      姓名     年龄     城市     工资
0  False  False  False  False
1  False  False  False  False
2  False   True  False  False
3  False  False   True  False
4   True  False  False   True

=== 每列缺失值统计 ===
姓名    1
年龄    1
城市    1
工资    1
dtype: int64

=== 包含缺失值的行 ===
     姓名    年龄    城市      工资
2    王五   NaN    广州  9000.0
3    张三  25.0  None  7000.0
4  None  40.0    北京     NaN

=== 包含缺失值的列 ===
     姓名    年龄    城市      工资
0    张三  25.0    北京  7000.0
1    李四  30.0    上海  8000.0
2    王五   NaN    广州  9000.0
3    张三  25.0  None  7000.0
4  None  40.0    北京     NaN

进程已结束，退出代码为 0
```



### dropna

```python
# 删除包含缺失值的行
df_cleaned = df.dropna()

# 输出结果
print("=== 原始 DataFrame ===")
print(df)

print("\n=== 删除缺失值后的 DataFrame ===")
print(df_cleaned)
```

结果：

```python
D:\603\pythonProject\.venv\Scripts\python.exe D:\603\pythonProject\.venv\exel.py 
=== 原始 DataFrame ===
     姓名    年龄    城市      工资
0    张三  25.0    北京  7000.0
1    李四  30.0    上海  8000.0
2    王五   NaN    广州  9000.0
3    张三  25.0  None  7000.0
4  None  40.0    北京     NaN

=== 删除缺失值后的 DataFrame ===
   姓名    年龄  城市      工资
0  张三  25.0  北京  7000.0
1  李四  30.0  上海  8000.0

进程已结束，退出代码为 0
```



### fillna

```python
# 删除包含缺失值的行
df_dropped = df.dropna()

df_filled = df.copy()
df_filled['姓名'].fillna('肖羡月', inplace=True)
df_filled['年龄'].fillna(df_filled['年龄'].mean(), inplace=True)  # 这里修正
df_filled['城市'].fillna('武汉', inplace=True)
df_filled['工资'].fillna(df_filled['工资'].mean(), inplace=True)  # 这里修正

# 输出结果
print("=== 原始 DataFrame ===")
print(df)

print("\n=== 删除缺失值后的 DataFrame ===")
print(df_dropped)

print("\n=== 填充缺失值后的 DataFrame ===")
print(df_filled)
```

运行结果：

```python
=== 原始 DataFrame ===
     姓名    年龄    城市      工资
0    张三  25.0    北京  7000.0
1    李四  30.0    上海  8000.0
2    王五   NaN    广州  9000.0
3    张三  25.0  None  7000.0
4  None  40.0    北京     NaN

=== 删除缺失值后的 DataFrame ===
   姓名    年龄  城市      工资
0  张三  25.0  北京  7000.0
1  李四  30.0  上海  8000.0

=== 填充缺失值后的 DataFrame ===
    姓名    年龄  城市      工资
0   张三  25.0  北京  7000.0
1   李四  30.0  上海  8000.0
2   王五  30.0  广州  9000.0
3   张三  25.0  武汉  7000.0
4  肖羡月  40.0  北京  7750.0
```



### duplicated

```python
import pandas as pd
import numpy as np

# 创建包含整行重复数据的字典
data_dict = {
    '姓名': ['张三', '李四', '王五', '张三', '李四', '王五', '张三'],  # 存在重复值
    '年龄': [25, 30, 35, 25, 30, 35, 25],  # 存在重复值
    '城市': ['北京', '上海', '广州', '北京', '上海', '广州', '北京'],  # 存在重复值
    '工资': [7000, 8000, 9000, 7000, 8000, 9000, 7000]  # 存在重复值
}

# 将字典转换为 DataFrame
df = pd.DataFrame(data_dict)

# 判断是否有重复数据（整行相同才算重复）
has_duplicates = df.duplicated().any()

# 统计重复数据的数量
duplicate_count = df.duplicated().sum()

# 查看重复的行
duplicate_rows = df[df.duplicated()]

# 输出结果
print("=== 原始 DataFrame ===")
print(df)

print("\n=== 是否存在重复值 ===")
print(has_duplicates)

print("\n=== 统计重复数据数量 ===")
print(duplicate_count)

print("\n=== 查看重复记录 ===")
print(duplicate_rows)

# 使用 drop_duplicates() 去除重复数据
df_deduplicated = df.drop_duplicates()

print("\n=== 去重后的 DataFrame ===")
print(df_deduplicated)
```

运行结果：

```python
D:\603\pythonProject\.venv\Scripts\python.exe D:\603\pythonProject\.venv\exel.py 
=== 原始 DataFrame ===
   姓名  年龄  城市    工资
0  张三  25  北京  7000
1  李四  30  上海  8000
2  王五  35  广州  9000
3  张三  25  北京  7000
4  李四  30  上海  8000
5  王五  35  广州  9000
6  张三  25  北京  7000

=== 是否存在重复值 ===
True

=== 统计重复数据数量 ===
4

=== 查看重复记录 ===
   姓名  年龄  城市    工资
3  张三  25  北京  7000
4  李四  30  上海  8000
5  王五  35  广州  9000
6  张三  25  北京  7000

=== 去重后的 DataFrame ===
   姓名  年龄  城市    工资
0  张三  25  北京  7000
1  李四  30  上海  8000
2  王五  35  广州  9000

进程已结束，退出代码为 0
```



### drop_duplicates

```python
import pandas as pd
import numpy as np

# 创建包含重复值和缺失值的字典
data_dict = {
    '姓名': ['张三', '李四', '王五', '张三', '李四', '王五', '张三'],  # 存在重复值
    '年龄': [25, 30, 35, 25, 30, 35, 25],  # 存在重复值
    '城市': ['北京', '上海', '广州', '北京', '上海', '广州', None],  # 存在缺失值和重复值
    '工资': [7000, 8000, 9000, 7000, 8000, 9000, 7500]  # 存在重复值和新的数据
}

# 将字典转换为 DataFrame
df = pd.DataFrame(data_dict)

# 使用 drop_duplicates() 去除重复数据
df_deduplicated = df.drop_duplicates()

# 输出结果
print("=== 原始 DataFrame ===")
print(df)

print("\n=== 去重后的 DataFrame ===")
print(df_deduplicated)
```

运行结果：

```python
D:\603\pythonProject\.venv\Scripts\python.exe D:\603\pythonProject\.venv\exel.py 
=== 原始 DataFrame ===
   姓名  年龄    城市    工资
0  张三  25    北京  7000
1  李四  30    上海  8000
2  王五  35    广州  9000
3  张三  25    北京  7000
4  李四  30    上海  8000
5  王五  35    广州  9000
6  张三  25  None  7500

=== 去重后的 DataFrame ===
   姓名  年龄    城市    工资
0  张三  25    北京  7000
1  李四  30    上海  8000
2  王五  35    广州  9000
6  张三  25  None  7500

进程已结束，退出代码为 0
```

