---
title: 大数据笔记
icon: alias
date: 2025-3-11 10:28:21
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

## etree

### etree.HTML()

解析 HTML

- `etree.HTML(text)` 用于解析 HTML 字符串、文件对象或 URL 中的 HTML 内容。
- 解析后的 HTML 结构会被转换为 ****ElementTree****（元素树），供进一步操作。

转换 HTML 为 `ElementTree`

- 解析后，整个 HTML 文档会转换成 树形结构。
- 在 树形结构 中，每个 HTML 元素都是 **节点**，可以 **遍历、查找、修改**。

支持 XPath 解析

- 解析后的 `ElementTree` 支持 XPath 选择器，可以快速定位 HTML 元素

```python
from lxml import etree

# 示例 HTML 文本
html_text = """
<html>
    <body>
        <div class="content">
            <h2>Python 爬虫教程</h2>
            <p>使用 lxml 解析 HTML</p>
        </div>
    </body>
</html>
"""

# 解析 HTML
html_tree = etree.HTML(html_text)

# 使用 XPath 选择 h2 标签
title = html_tree.xpath("//h2/text()")[0]
print(title)  # 输出：Python 爬虫教程
```

### etree.parse()

**1️⃣`etree.parse()` 介绍**

- `etree.parse()` 用于 **从文件解析 HTML/XML**，转换成 **ElementTree** 结构。
- 解析后的 **树结构** 可用于 **XPath 查询**。

**2️⃣ `etree.parse()` 语法**

```
python


复制编辑
etree.parse(source, parser=None, base_url=None)
```

- `source`：HTML/XML 文件路径、URL 或字符串。
- `parser`：指定 **HTML 或 XML 解析器**，默认为 `None`，可用 `etree.HTMLParser()` 解析 HTML。
- `base_url`：用于解析 **相对 URL**。

#### **📌 `etree.parse()` 解析 HTML**

**示例 HTML 结构**

```
html复制编辑<div>
    <ul>
        <li class="item-0"><a href="link1.html">first news</a></li>
        <li class="item-1"><a href="link2.html">second news</a></li>
        <li class="item-inactive"><a href="link3.html">third news</a></li>
        <li class="item-1"><a href="link4.html">fourth news</a></li>
        <li class="item-0"><a href="link5.html">fifth news</a></li>
    </ul>
</div>
```

**3️⃣ `etree.parse()` 读取 HTML**

```
python复制编辑from lxml import etree

# 解析 HTML 文件
html = etree.parse("test.html", etree.HTMLParser())

# 使用 XPath 提取所有 <li> 标签
result = html.xpath("//li")

# 打印 <li> 标签数量
print(len(result))  # 输出：5
```

- **读取 `test.html`** 并解析为 **ElementTree**。
- **`//li`** 使用 **XPath** 查找所有 `<li>` 标签。
- **`print(len(result))`** 输出 **li 标签个数**（5）。



### vs

| **功能**     | `etree.parse()`    | `etree.HTML()`       |
| ------------ | ------------------ | -------------------- |
| **数据来源** | 本地文件 / URL     | HTML 字符串          |
| **适用场景** | 解析 HTML 文件     | 解析爬虫返回的 HTML  |
| **输入数据** | 文件路径或文件对象 | 直接传入 HTML 字符串 |
| **推荐用途** | 处理本地 HTML 文档 | 解析网页源码         |



## xpath

### 使用例子

####  1. `xpath('//li/@class')`

 **✅ 代码**

```
python复制编辑from lxml import etree

html = etree.parse('test.html', etree.HTMLParser())
result = html.xpath('//li/@class')
print(result)
```

**✅ 解析**

- **`//li`** ：选择所有 `<li>` 标签。
- **`@class`** ：获取 `<li>` 标签的 `class` 属性值。

#### 2. `xpath('//li/a[@href="link1.html"]')`

**✅ 代码**

```
python复制编辑from lxml import etree

html = etree.parse('test.html', etree.HTMLParser())
result = html.xpath('//li/a[@href="link1.html"]')
print(result)
```

**✅ 解析**

- **`//li/a`** ：选择 **`<li>` 内的 `<a>` 标签**。
- **`[@href="link1.html"]`** ：筛选 **`href="link1.html"`** 的 `<a>` 标签。

**✅ 作用**

✔ 该 XPath 选择 **所有 `<a>` 标签**，但 **仅限 `href="link1.html"`** 的元素。



### **XPath Expression 查找方法**

该图片介绍了 如何在浏览器中定位 XPath 搜索框 以及 **获取 **XPath 路径的具体步骤。

#### **✅ 操作步骤**

1. 打开开发者工具
    - 点击 Elements 面板 进入 元素检查模式。
2. 选择网页元素
    - 点击箭头图标（🡆）或使用快捷键 **`Ctrl+Shift+C`** 进入 元素选择模式。
3. 定位目标元素
    - 在网页上点击目标元素，它将在 Elements 面板 中高亮显示。
4. 查找 XPath
    - 在 Elements 面板 中找到目标元素在 HTML 代码中的位置。
5. 搜索 XPath
    - 按 **`Ctrl+F`** 打开 XPath 搜索框，输入 XPath 表达式进行查找。
6. 复制 XPath
    - 如果是单个元素，可以直接 右键复制 XPath 并输入搜索框。
    - 如果是多个元素，建议 手动输入优化的 XPath 以提高准确性。