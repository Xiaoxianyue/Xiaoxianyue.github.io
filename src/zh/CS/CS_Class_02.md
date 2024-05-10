---
title: C#->more class
icon: c
date: 2024-4-18 13:11:28
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

## 1. 析构函数

### 1.1 析构函数

构造函数是在实例化类时使用的，而析构函数则是在对象被销毁或删除时自动调用。

析构函数具有以下属性：

- 一个类只能有一个析构函数。

- 析构函数只能被自动调用。

- 析构函数不带任何修饰符或参数。

- 析构函数的名称与类名完全相同，然后带上波浪号(`~`)前缀。

例如：

```cs
class Dog
{
  ~Dog() 
  {
    // 要操作的逻辑代码
  }
}
```

> 析构函数对于在退出程序之前释放资源是非常的有用的，比如关闭文件，释放内存等操作。

【填空】声明 Person 类的析构函数。

```cs
class Person {
__~Person()_ {
  }
}
```

> `~Person()`

### 1.2 构造函数和析构函数

让我们在类的析构函数和构造函数中使用 WriteLine 语句，看看他们在什么时候被执行：

```cs
class Dog
{
  public Dog() {
    Console.WriteLine("构造函数");
  }
  ~Dog() {
    Console.WriteLine("析构函数");
  }
}
static void Main(string[] args) {
  Dog d = new Dog();
}
/*输出:
构造函数
析构函数
/*
```



构造函数和析构函数其实是非常有用的，比如，当我们的类需要调用文件的时候，构造函数可以在类实例化的时候打开文件，而析构函数可以在执行结束以后关闭文件。

【单选题】析构函数是：

A. 当一个对象被删除时被调用✅

B. 只有在不调用构造函数的情况下才会被调用

C. 类的一个成员变量

## 2. Static 关键字

### 2.1 Static 关键字

现在是讨论 static 关键字的时候了。

你有没有在 Main 方法的声明中注意到它：

```cs
static void Main(string[] args)
```

类成员（变量，属性，方法）也可以声明为静态的。这使得这些成员属于类本身，而不是属于单个对象。无论创建多少个对象，只有一个静态成员的副本。例如：

```cs
class Cat {
  public static int count=0;
  public Cat() {
    count++;
  }
}
```

我们声明了一个公共成员变量 count，它是静态的。 该类的构造函数将 count 变量加 1。

> 不管有多少个 Cat 对象被实例化，总是只有一个属于 Cat 类的 count 变量，因为它被声明为静态的。

【填空】创建一个有效的 Main 函数

```cs
_static__ _void__ Main(string[] args)
```

> `static void Main(string[] args)`

### 2.2 静态变量的访问

由于 static 静态变量具有全局性，**可以使用类名直接访问静态成员，而无需使用对象。**例如：

```cs
class Cat {
  public static int count=0;
  public Cat() {
    count++;
  }
}
static void Main(string[] args)
{
  Cat c1 = new Cat();
  Cat c2 = new Cat();

  Console.WriteLine(Cat.count);
}
//输出2
```

如你所见，我们可以使用类名 `Cat.count` 访问静态变量。

count 变量在所有 Cat 对象之间共享。 对于这个类，每次创建一个对象时，静态值都会增加。 上面的程序在创建该类的两个对象后输出 2 说明了这一点。

> 你必须使用类名访问静态成员。 如果您尝试通过该类的对象访问它们，则会生成错误。

【填空】将 Math 类静态变量 PI 的值赋给 x。

```cs
double x = __Math_ . PI___;
```

> `double x = Math.PI;`

### 2.3 静态方法

静态方法跟静态变量是类似的：

```cs
class Dog
{
  public static void Bark() 
  {
    Console.WriteLine("Woof");
  }
}
static void Main(string[] args)
{
  Dog.Bark();
}
// 输出"Woof"
```

静态方法只能访问静态成员。

> Main 方法是静态方法，因为它是所有程序的入口，所以任何直接从 Main 调用的方法都必须是静态的。

【单选题】为了能够让 Main 方法直接调用，声明的方法必须是：

A. void

B. static✅

C. recursive

### 2.4 静态的常量成员

```cs
class MathClass {
  public const int ONE = 1;
}
static void Main(string[] args) {
  Console.Write(MathClass.ONE);
}
//输出1
```

正如您所看到的，我们使用类的名称访问属性 ONE，就像静态成员一样。 这是因为**所有的 const 成员默认是静态的。**

### 2.5 静态构造函数

构造函数也是可以声明为静态来初始化类的静态成员。

当我们访问类的静态成员时，静态构造函数会自动调用一次。

```cs
class SomeClass {
  public static int X { get; set; }
  public static int Y { get; set; }
 
  static SomeClass() {
    X = 10;
    Y = 20;
  }
}
```

当我们尝试访问 `SomeClass.X` 或 `SomeClass.Y` 时，构造函数将被调用一次。

【填空】使用静态构造函数初始化 Person 类的静态属性 Age：

```cs
_class__ Person {
  public _static__ int Age { get; set; }
  static _Person__ {
    Age = 0;
  }
}
```

::: details

```cs
class Person {
  public static int Age { get; set; }
  static Person() {
    Age = 0;
  }
}
```

:::

## 3. 静态类

### 3.1 静态类

整个类可以声明为静态的。

静态类只能包含静态成员。

您不能实例化一个静态类的对象，因为程序中只能存在一个静态类的实例。

静态类对于组合逻辑属性和方法很有用。 数学类是一个很好的例子。

它包含了数学运算的各种有用的属性和方法。

例如，Pow 方法提供了次方的运算：

```cs
Console.WriteLine(Math.Pow(2, 3));
//输出8
```

你可以使用类名访问 Math 类的所有成员，而无需声明对象。

【单选题】一个静态类包括

A. 至少有一个静态成员

B. 只能有静态成员✅

### 3.2 Math 静态类

Math 是一个非常实用的静态类

- `Math.PI`: 常量 PI。

- `Math.E`: 代表自然对数基 e。

- `Math.Max()`: 返回两个参数中较大的一个。

- `Math.Min()`: 返回两个参数中较小的一个。

- `Math.Abs()`: 返回参数的绝对值。

- `Math.Sin()`: 返回指定角度的正弦值。

- `Math.Cos()`: 返回指定角度的余弦。

- `Math.Pow()`: 返回次方计算结果。

- `Math.Round()`: 将十进制数四舍五入到最接近的整数值。

- `Math.Sqrt()`: 返回指定数字的平方根。

Array 静态类也包含了一些常用的方法：

```cs
int[] arr = {1, 2, 3, 4};

Array.Reverse(arr);
//arr = {4, 3, 2, 1}

Array.Sort(arr);// 从小到大排序的意思
//arr = {1, 2, 3, 4}
```

String

```cs
string s1 = "some text";
string s2 = "another text";

String.Concat(s1, s2); // 合并两个字符串

String.Equals(s1, s2); // return false
```

DateTime

```cs
DateTime.Now; //表示当前的日期和时间
DateTime.Today; //代表当天

DateTime.DaysInMonth（2016，2）;
//返回指定月份的天数
```

【填空题】执行以下代码,最后输出的结果是？

```cs
int[] arr = { 9, 4, 10, 42 };
Array.Sort(arr);//{4，9，10，42}
double x = Math.Sqrt(arr[1]);
Console.WriteLine(x);//3
```

> `int[] arr = { 9, 4, 10, 42 };`
>
> `Array.Sort(arr);` //对数组 arr 进行排序，现在的顺序是 4,9,10,42
>
> `double x = Math.Sqrt(arr[1]);` //取数组的第二个数（9），并求其平方根（结果为3）
>
> `Console.WriteLine(x);`

## 4. this 关键字

### 4.1 this 关键字

this 关键字在类中使用，并引用当前类的实例，这意味着它指向的是当前对象。

this 关键字其中一个常见用途是将类成员与其他数据（如方法的本地或正式参数）区分开来，如以下示例所示：

```cs
class Person {
  private string name;
  public Person(string name) {
    this.name = name;
  }
}
```

这里，`this.name` 代表类的成员，而 name 代表构造函数的参数。

> 另一个常见用法是将当前实例作为参数传递给方法：`ShowPersonInfo(this);`

【填空题】使用 this 关键字打印 Person 类的年龄变量。

```cs
___ Person {
  private int age;
  public void Print() {
    Console.Write(___ age);
  }
}
```

> class this.

### 4.2 readonly(只读) 修饰符

readonly 修饰符防止类的成员在构造之后被修改。 这意味着声明为只读的字段只能在声明它或从构造函数中修改。

```cs
class Person {
  private readonly string name = "John"; 
  public Person(string name) {
    this.name = name; 
  }
}
```

如果我们试图在其他地方修改名称字段，系统会报错。

readonly 和 const 字段之间有三个主要区别。

首先，一个常量字段在声明时必须被初始化，而一个只读字段可以在没有初始化的情况下声明，如下所示：

```javascript
readonly string name; // 正确
const double PI; // 报错
```

其次，只读字段值可以在构造函数中更改，但常量值不能。

第三，只读字段可以被分配一个计算结果的值，但常量不能，如：

```cs
readonly double a = Math.Sin(60); // 正确
const double b = Math.Sin(60); // 报错
```

【多选题】下面哪些陈述是正确的？

A. 常量应在声明时初始化✅

B. 只读字段只能在声明时初始化

C. 只读字段可以由构造函数初始化✅

D. 常量可以由构造函数初始化

## 5. 索引

### 5.1 索引

索引器允许对象像数组一样被索引。

如前所述，字符串变量实际上是 String 类的一个对象。 而且，String 类实际上是一个 Char 对象的数组。 这样，字符串类实现了一个索引器，所以我们可以通过它的索引来访问任何字符（Char 对象）：

```cs
string str = "Hello World";
char x = str[4];
Console.WriteLine(x);
//输出"o"
```

数组使用整数索引，但索引器可以使用任何类型的索引，如字符串，字符等。

【填空题】执行以下代码，最后输出的结果是？

```cs
string str = "I know C#";
char x = str[3];
Console.WriteLine(x);
```

## 6. 操作符重载

### 6.1 操作符重载

C# 中的大多数运算符都可以被重载，这意味着它们可以被重新定义为自定义的操作。

例如，您可以重新定义类中的加号（`+`）运算符的操作。

考虑具有高度和宽度属性的 Box 类：

```cs
class Box {
  public int Height {get; set;}
  public int Width {get; set;}
  public Box(int h, int w) {
    Height = h;
    Width = w;
  }
}
static void Main(string[] args) {
  Box b1 = new Box(14, 3);
  Box b2 = new Box(5, 7);
}
```

我们想合并这两个 Box 对象，让它变成一个更大的 Box。

所以，我们需要下面的代码：

```cs
Box b3 = b1 + b2;
```

对象 b3 的高度和宽度属性应等于 b1 和 b2 对象的相应属性之和。

> 这是通过运算符重载来实现的。 

【单选题】运算符重载意味着

A. 定义构造函数

B. 定义一个类的常量成员

C. 给运算符自定义操作✅

### 6.2 如何重载操作符

类似于任何其他方法，重载操作符具有返回类型和参数列表。

例如，对于我们的 Box 类，我们重载了`+`运算符：

```cs
public static Box operator+ (Box a, Box b) {
  int h = a.Height + b.Height;
  int w = a.Width + b.Width;
  Box res = new Box(h, w);
  return res;
}
```

上面的方法定义了一个带有两个 Box 对象参数的重载操作符 `+`，并返回一个新的 Box 对象，其高度和宽度属性等于其参数相应属性的总和。

另外，重载的操作符必须是静态的。

把它放在一起：

```cs
class Box {
  public int Height { get; set; }
  public int Width { get; set; }
  public Box(int h, int w) {
    Height = h;
    Width = w;
  }
  public static Box operator+(Box a, Box b) {
    int h = a.Height + b.Height;
    int w = a.Width + b.Width;
    Box res = new Box(h, w);
    return res;
  }
}
static void Main(string[] args) {
  Box b1 = new Box(14, 3);
  Box b2 = new Box(5, 7);
  Box b3 = b1 + b2;

  Console.WriteLine(b3.Height); //19
  Console.WriteLine(b3.Width); //10
}
```

> 所有的算术运算符和比较运算符都可以重载。 例如，你可以定义大于和小于运算符来比较盒子的大小,并返回一个布尔结果。 请记住，当重载大于运算符时，还应该定义小于运算符。

【填空题】重载 Box 类的大于运算符

```cs
public static ___ operator ___ (Box a, Box b) {
  if (a.Height*a.Width > b.Height*b.Width)
      ___ true;
  else
    return false;
}
```

> bool ; > ; return

## 7. 模块六测验

1. 【填空题】为类 Book 声明一个析构函数。

```cs
___ Book {
___ Book() {
    //要执行的代码 
  }
}
```

> `class Book { ~ Book() { } }`

2. 【填空题】执行以下代码,最后输出的结果是？

```cs
class Temp {
  public int num = 2;
  public Temp() { num++;}
  ~Temp() { num++; }
}
static void Main(string[] args) {
  Temp t = new Temp();
  Console.WriteLine(t.num);
}
```

3. 【填空题】将下面代码补充完成：

```cs
___ void Func ___ {
  Console.Write("Hi there");
} 
static void Main(string[] args) {
  Func();
}
```

> static ; ()

4. 【填空题】执行以下代码，最后输出的结果是？

```cs
int[] arr = {8, 5, 4};
Array.Reverse(arr);
double x = Math.Pow(arr[0], 2);
```

5. 【填空题】重载 T 类的 `minus(减法)` 操作符

```cs
public ___ T ___ - (T a, T b) {
  T res = new T(a.num - b.num);
    ___ res;
}
```

> static ; operator ; return