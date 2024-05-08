---
title: C#->string & array
icon: c
date: 2024-5-08 15:52:19
author: XiaoXianYue
isOriginal: true
category: 
    - C#
    - 大二下
tag:
    - C#
    - 大二下
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

## 1. 数组

### 1.1 数组

C# 提供了许多内置的类来存储和操作数据。

数组(Array)就是其中的一种。

数组是一种用于存储数据集合的数据结构。你可以把它看作是一个同类型变量的集合。

例如，需要存储 100 个号码的情况，你可以考虑声明一个能存储 100 个元素的数组对象，而不是声明一百个变量。

数组的声明格式如下：`数字类型[] 数组名称`

```cs
int[ ] myArray;
```

这个语句声明了一个整型数组。由于数组是对象，我们需要用 new 关键字来实例化它们：

```cs
int[ ] myArray = new int[5]; 
```

实例化一个名为 myArray 的数组，其中 5 为数组的长度，可以存放 5 个整型的数值。

【填空题】实例化一个能存放 42 个 double 类型数值的数组：

```cs
_double__ [ ] a = __new_ double[_42__];
```

> double ; new ; 42

### 1.2 数组的索引

创建数组后，您可以使用索引的方式将值分配给数组：

```cs
int[ ] myArray = new int[5];
myArray[0] = 23;
```

这会将 23 分配给数组的第一个元素。

> C# 中数组的索引是从 0 开始的,即数组的第一个值索引号为 0，第二个值的索引号为 1，依此类推。

【填空题】数组第三个值的索引号是？「2」

### 1.3 数组的初始值

使用大括号声明时，我们可以向数组提供初始值，例如：

```cs
string[ ] names = new string[3] {"John", "Mary", "Jessica"};
double[ ] prices = new double[4] {3.6, 9.8, 6.4, 5.9};
```

但其实，在有设置初始值的数值时，我们可以省略数组的大小，上面的数组定义，也可以写成：

```cs
string[ ] names = new string[ ] {"John", "Mary", "Jessica"};
double[ ] prices = new double[ ] {3.6, 9.8, 6.4, 5.9};
```

甚至，可以省略实例化的关键字：

```cs
string[ ] names = {"John", "Mary", "Jessica"};
double[ ] prices = {3.6, 9.8, 6.4, 5.9};
```

【填空题】实例化一个带初始值的数组：

```cs
int[ ] a = __{_ 1, 2, 3 _}__;
```

> int[ ] a = {1, 2, 3} ;

### 1.4 通过索引访问数组

之前我们有提到过，数组中的每个元素都有一个索引号。

例如，我们来一下下面的数组：

```cs
int[ ] b = {11, 45, 62, 70, 88};
```

数组 b 有如下索引：

![9ded97eec60bb3c601418f1044a4c7f](./CS_array_string.assets/9ded97eec60bb3c601418f1044a4c7f.png)

所以，当我们要访问 b 数组中的某个元素时，只要通过数组的索引号就能获取某个元素：

```cs
Console.WriteLine(b[2]);
//输出62

Console.WriteLine(b[3]);
//输出70
```

要注意的是，C# 的数组索引号是从 **0** 开始的。

【填空题】执行以下代码后 x 的值是？

```cs
int[ ] a = {4, 7, 2};
int x = a[0]+a[2];
//x = 6
```

## 2. 数组的遍历

### 2.1 数组的遍历

有时候,我们会需要对数组进行遍历，为数组赋值。使用循环，可以很方便的对数组进行遍历。

例如，可以声明一个由 10 个整数组成的数组，并用下面的循环为每个元素赋一个偶数值：

```cs
int[ ] a = new int[10];
for (int k = 0; k < 10; k++) {
  a[k] = k*2;
}
```

我们也可以使用循环来读取数组的值。

例如，我们可以显示刚刚创建的数组的内容：

```cs
for (int k = 0; k < 10; k++) {
  Console.WriteLine(a[k]);
}
```

变量 k 用于访问每个数组元素。数组中的最后一个索引是 9，所以 fo r循环条件是 `k <10` 。

【填空题】使用 for 循环打印数组全部元素

```cs
int[ ] arr = new int[7];
__for_(int k=0;k< __7_;k++) {
  Console.WriteLine(__arr_[k]);
}
```

> for ； 7 ；arr

题目·：编写一个 C# 程序，使用 for 循环遍历一个整数数组并计算该数组的所有元素的总和。

```c#
int[] numbers = { 1, 2, 3, 4, 5 };
int total = 0;
for (int i = 0;i < 5; i++)
{
    
    total+= numbers[i];   
}
Console.WriteLine(total);
```

### 2.2 foreach 遍历

foreach 循环提供了一种更简单的方法来对数组进行遍历。

例如前面数组我们也可以使用 foreach 循环来遍历：

```cs
foreach (int k in a) {
  Console.WriteLine(k);
}
```

foreach 循环遍历数组 a,并在循环的每次迭代中将当前元素的值赋给变量 k。因此，在第一次迭代中，`k = a [0]`，第二次 `k = a [1]`，以此类推。

> foreach 循环中，变量的数据类型应该匹配数组的类型。
>
> 关键字 var 也经常用作变量的类型，如：`foreach(var k in a)`。关于 var 关键词，我们会在后面的章节中进行阐述。

【填空题】创建一个有效的 foreach 循环，显示数组中所有的偶数元素。

```cs
int[ ] nums = {5, 2, 3, 4, 7};
_foreach__(var n __in_ nums) {
  if(n%2 == 0)
    Console.WriteLine(__n_);
}
```

> foreach in n

### 2.3 实践：使用循环计算数组总和

下面，让我们使用 foreach 循环来计算数组中所有元素的总和：

int[ ] arr = {11, 35, 62, 555, 989};

```c#
int[] arr = { 11, 35, 62, 555, 989 };
int total = 0;
foreach (int i in arr)
{
    total += i;
}
Console.WriteLine(total);
```

