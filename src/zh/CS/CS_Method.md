---
title: C#->Method
icon: c
date: 2024-4-29 09:05:26
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

## 1. 方法介绍

### 1.1 什么是方法？

方法是执行特定需求的一组代码语句。

C# 内置了许多方法,当然,你也可以自定义方法。

方法有很多优点,包括:

- 代码可以被重复使用。
- 方便测试。
- 方法相对独立,修改方法的时候不会影响其他已经调试好的程序。
- 一个方法可以有多种不同的参数输入。

> 每个 C# 程序都至少有一个方法: `Main()`。

【单选题】C# 程序都是从哪个方法开始的  A.                                                  

A. Main

B. using

C. Start

D. Console

### 1.2 方法的声明

方法使用前必须先声明,您需要声明该方法，然后才能调用它。

方法的声明包括：

- 方法的返回类型

- 方法的名称
- 一个可选的参数列表。

```cs
<return type> name(type1 par1, type2 par2, … , typeN parN)
{
    List of statements
}
```

例如，下面的例子，声明了一个名字为 Sqr 的方法用于求出入参数的平方值，返回类型为 int，允许传入的参数类型为 int：

```cs
int Sqr(int x)
{
  int result = x*x;
  return result;
}
```

方法的返回类型在上面的例子中，返回类型是 int，表示该方法返回一个整数值。 当一个方法返回一个值时，它必须包含一个 return 语句。 在赋值语句中经常使用返回值的方法。

> 有时候,我们会遇到一个方法只要执行一些操作，却不需要返回值，这时候，我们可以声明方法的返回类型为 void。当方法的返回值类型为 void 的时候，该方法不能作为赋值语句被使用。

【填空题】如果你需要声明一个没有返回值的方法，则方法的返回值类型为？

### 1.3 方法的调用

参数其实是可选的,也就是说,你完全可以定义一个不需要参数的方法。

下面举个例子，我们定义一个没有参数，没有返回值的方法，该方法的作用是在屏幕上打印一行文本。

```cs
static void SayHi()
{
  Console.WriteLine("Hello");
}
```

我们定义了一个名称为 SayHi 的方法，不需要参数，也没有返回值。

要使用一个方法，只需要在语句中使用该方法的名称和该方法所需要的参数即可，如：

```cs
static void SayHi()
{
  Console.WriteLine("Hello");
}

static void Main(string[] args)
{
  SayHi();
}
//输出"Hello"
```

因为 SayHi 方法不需要参数，所以在调用的时候不需要赋予相应的参数。

static 关键字将在后面讨论，它的主要作用是让该方法更便于 Main 函数调用。

【填空题】填空，声明一个没有返回值的方法

```cs
static void Greet()
{
    Console.WriteLine("Welcome");
}
```

方法的其中一个优点就是可复用性，比如下面的例子：

```cs
static void SayHi()
{
  Console.WriteLine("Hello");
}

static void Main(string[] args)
{
  SayHi();
  SayHi();
  SayHi();
}
/* 输出:
Hello
Hello
Hello 
*/
```

我们在 Main 方法中，多次调用 SayHi 方法，SayHi 执行了多次。

选择填空，声明一个有效的方法，并在 Main 中调用它：

```cs
static void Func() 
{
  Console.Write("test");
}
static void Main(string[] args)
{
   Func();
}

```

## 2. 方法参数

### 2.1 参数

方法声明的时候可以自定义要使用的参数。参数是在调用该方法时需要传入的变量。例如：

```cs
void Print(int x) 
{
  Console.WriteLine(x);
}
```

上面的例子定义了一个名为 Prin t的方法,它可以接受一个 int 类型的值,并且打印该值。

> 参数的变量跟局部变量有点类似，参数的变量在该方法被调用的时候创建，并且在方法结束以后被注销。

【填空题】填空，创建一个方法,传入一个int类型的参数,显示该参数除以2以后的计算结果

【填空题】填空，创建一个方法，传入一个 int 类型的参数，显示该参数除以 2 以后的计算结果

```cs
void MyFunc(___ x) 
{
  int result = x ___ 2;
  Console.WriteLine(___);
}
```

### 2.2 调用带参数的方法

现在你可以在 Main 中调用带参数的方法，并传递参数：

```cs
static void Print(int x) 
{
  Console.WriteLine(x);
}
static void Main(string[] args)
{
  Print(42);
}
//输出42
```

42 作为参数传递给方法，并分配给形式参数 x。

【填空题】创建一个带参数的方法，并在 Mian 函数中调用它，参数值为 88:

```cs
___ void func(int x) 
{
  Console.WriteLine(x/2);
}
static void Main(string[] args)
{
    ___(___);
}
```

### 2.3 参数类型

我们在声明方法的时候指定了相应的参数类型，所以只要是符合该类型的值，都可以作为参数传递给方法：

```cs
static void Func(int x)
{
  Console.WriteLine(x*2);
}
static void Main(string[] args)
{
  Func(5);
  //输出10
  
  Func(12);
  //输出24

  Func(42);
  //输出84
}
```

【单选题】方法可以被不同的参数调用几次？ C.

A. 不可被调用

B. 一次

C. 任意次数

## 3. 多个参数

### 3.1 多个参数

通过逗号的分隔，你可以根据需要，为方法定义多个参数。

我们来创建一个返回两个参数之和的简单方法：

```cs
int Sum(int x, int y)
{
   return x+y;
}
```

Sum 方法接受两个 int 类型的参数，并返回这两个参数的和。

> 因为该方法有返回值，所以定义该方法的时候，参数也不再是 void 类型，而是 int 类型。
>
> 方法使用 return 返回需要返回的值。

【填空题】填空定义一个接受两个参数，并且返回值为 int 类型的方法

```cs
___ Test(int a ___ int b)
{
 // some code
}
```

### 3.2 多参数方法的调用

多个参数在定义的时候使用逗号分隔参数，在调用仍然是使用逗号进行参数的分隔，例如：我们调用刚才创建的 Sum 方法：

```cs
static void Main(string[] args)
{
  Console.WriteLine(Sum(8, 6));
  // 输出14
}
```

在上面的调用中，返回值直接显示在控制台窗口中。或者我们可以将返回值分配给一个变量，如下面的代码所示：

```cs
static void Main(string[] args)
{
  int res = Sum(11, 42);
  Console.WriteLine(res);
  //输出53
}
```

> 你可以根据需要将任意数量的参数添加到方法中。 如果您有多个参数，请记住在声明它们和调用方法的时候，用逗号对它们进行分隔。

【填空题】填空声明一个方法，它返回两个参数中较大的值：

```cs
int Max(int a ___ int b)
{
  if(a > b)
      ___ a;
  else
    return ___;
}
```

## 4. 可选参数和命名参数

### 4.1 可选参数

定义方法时，可以为可选参数指定一个默认值。需要注意的是，可选参数必须在需要的参数之后定义。

比如我们将参数 y 设为可选参数，并为它指定一个值：

```cs
static int Pow(int x, int y=2)
{
  int result = 1;
  for (int i = 0; i < y; i++)
  {
    result *= x;
  }
  return result;
}
```

Pow 方法为 y 参数分配一个默认值 2。 如果我们调用方法时没有为 y 指定值，则 y 默认为 2。

下面使用一下 Pow 方法，看一下可选参数的调用以及对结果的影响：

```cs
static void Main(string[] args)
{
  Console.WriteLine(Pow(6));
  //输出36

  Console.WriteLine(Pow(3, 4));
  //输出81
}
```

从上面的示例可以看出，使用可选参数可以在更复杂的情况下调用相同的方法而不需要为方法指定对应的参数。

值得注意的是,在定义可选参数的时候，必须放在需要的参数后面。

【填空题】运行该方法以后最终的输出结果是？

```cs
static int Vol(int x, int y=3, int z=1) {
  return x*y*z;
}
static void Main(string[] args) {
  Console.WriteLine(Vol(2, 4));
}
```

### 4.2 命名参数

有时候，太多的参数，我们在调用的时候，会忘记参数的具体顺序，命名参数的作用就是使你无需记住参数的具体顺序，每个参数都可以通过指定的参数名称来匹配，例如：

```cs
static int Area(int h, int w)
{
  return h * w;
}
```

当我们调用上面的参数的时候，可以这样使用：

```cs
static void Main(string[] args)
{
  int res = Area(w: 5, h: 8);
  Console.WriteLine(res);
  //输出40
}
```

> 命名参数调用的时候,用冒号分隔参数名称和值。

【填空题】填空调用一个命名参数，参数名称 from 的值为 5，to 的值为 99，step 的值为 2

```cs
static int calc(int from, int to, int step=1) {
  int res=0;
  for(int i=from;i<to;i+=step) {
    res += i;
  }
  return res;
}
static void Main(string[] args)
{
  int res = ___(___2, ___99,___5);
  Console.WriteLine(res);
}
```

## 5. 参数的传递

### 5.1 按值传递参数

当方法被调用时，有三种方法可以将参数传递给方法：按值，按引用和按输出。是不是很难理解？我们下面将会详细介绍三种参数传递方式的区别。

我们首先来说说按值传递，按值传递是通过形式参数将值传递到方法中，在方法中，我们可以对传递的值进行修改而不会影响原先变量的值，例如：

```cs
static void Sqr(int x)
{
  x = x * x;
}
static void Main()
{
  int a = 3;
  Sqr(a);

  Console.WriteLine(a); // 输出后可以发现,a的值仍为3
}
```

a 是要传递给方法的一个变量，称为实际参数，a 的值为 3。在方法 Sqr 中，我们对 x 的值进行修改，x 称为形式参数，它的值是传递过来实际参数 a 的值，也为 3。我们在 Sqr 方法中对 x 的值进行任意修改，但是这并不会影响 a 的值，这就有区别于按引用传递了，按引用传递我们下一节讲。

> C# 默认的传递方式是按值传递。
>
> 正如你所看到的, Sqr 方法不会改变原先变量的值，这意味着它是对传递进来的值而不是对实际变量进行操作。

【填空题】以下代码运行后的最终输出结果是？

```cs
static void Test(int x) {
  x = 8;
}
static void Main() {
  int a = 5;
  Test(a);
  Console.WriteLine(a); 
}
// 5
```

### 5.2 按引用传递参数

按引用传递参数的时候，实际是把内存地址传递到方法中，在方法内部，对参数进行操作，会直接访问内存地址中的变量，这也意味着，在方法中对形式参数进行操作，会影响实际参数的值。

要按引用传递值，需要在调用和方法定义中都使用 ref 关键字：

```cs
static void Sqr(ref int x)
{
  x = x * x;
}
static void Main()
{
  int a = 3;
  Sqr(ref a);

  Console.WriteLine(a); // 输出的结果为:9
}
```

通过上面的例子和上一节的例子对比我们可以发现,按引用传递参数，在 Sqr 中对 x 进行操作，会直接影响实际参数。a 的值。

> ref 关键字将内存地址传递给方法，该参数允许方法对实际变量进行操作。

> 按引用传递参数，在定义方法和调用方法时都需要使用 ref 关键字。

【填空题】填空创建一个按引用传递参数的方法，该方法交换两个参数的值：

```cs
void Swap(__ref_ int x, _ref__ int y)
{
  int temp;
  temp = x;
  x = y;
  y = __temp_ ;
}
```

> ref ref  temp

### 5.3 按输出传递参数

按输出传递参数和按引用传递参数有点类似，都会直接修改实际参数的值,不同之处在于，按输出传递参数是从方法中输出参数，而不是接受参数传入。按输出传递参数需要使用 out 关键字,如下例子所示:

```cs
static void GetValues(out int x, out int y)
{
  x = 5;
  y = 42;
}
static void Main(string[] args)
{
  int a, b;
  GetValues(out a, out b);
  //此时,a的值为5,b的值为42
}
```

> 类似于 ref 关键字，需要使用按输出传递参数时，在定义方法和调用方法时都需要使用 out 关键字。

【填空题】填空，构建一个使用按输出传递参数的方法来获取用户的输入值

```cs
static void Ask(out string name)
{
    __name_ = Console.ReadLine();
}
static void Main(string[] args)
{
  string nm;
  Ask(out nm);
}
```

## 6. 方法的重载

### 6.1 方法的重载

方法重载是指多个方法具有相同的名称，但参数不同。

例如，你可能有一个将参数输出到控制台窗口的方法 Print：

```cs
void Print(int a)
{
  Console.WriteLine("Value: "+a);
}
```

示例中，"+"运算符用于连接值。如 a 等于 3，则最终控制台的输出文本为“Value:3”。

但是这个方法只接受一个整数参数，如果我们需要传入一个浮点型变量怎么办?

我们可以重载这个方法，使它允许传入一个浮点类型的参数:

```cs
void Print(double a)
{
  Console.WriteLine("Value: "+a);
}
```

现在 Print 方法不但可以接受一个整形变量，也可以接受一个浮点型变量了。

【单选题】方法的重载意味着？C.

A. 打印参数

B. 相同的参数，不同的方法名称

C. 相同的方法名称，不同的参数

### 6.2 重载方法的调用

当定义重载方法时，方法的参数根据类型或者数量而不同。

当有重载的方法时，所调用的方法是基于参数的。 整型参数将调用接受整型参数的方法，浮点型参数将调用接受浮点型参数的方法，多个参数将调用接受相同数量参数的方法。

```cs
static void Print(int a) {
  Console.WriteLine("Value: " + a);
}
static void Print(double a) {
  Console.WriteLine("Value: " + a);
}
static void Print(string label, double a) {
  Console.WriteLine(label + a);
}

static void Main(string[] args) {
  Print(11);
  Print(4.13);
  Print("Average: ", 7.57);
}
```

> 重载必须是参数不同的方法,不能重载只有返回类型不同的方法声明。
>
> 以下声明导致错误。
>
> `int PrintName（int a）{}`
>
> `float PrintName（int b）{}`
>
> `double PrintName（int c）{}`

以下代码运行后最终输出的结果是:

```cs
static void Print(int a) {
  Console.WriteLine(a*a);
}
static void Print(double a) {
  Console.WriteLine(a+a);
}
static void Main(string[] args) {
  Print(3);
}
//output 9
```

## 7. 递归

### 7.1 递归

递归方法是一种自我调用的方法。

通过递归很容易解决的一个经典任务就是计算一个数的阶乘。

在数学中，阶乘是指所有小于或等于特定的非负整数（n）的正整数的乘积。 n 的阶乘表示为 `n!`

例如：

> 4! = 4 * 3 * 2 * 1 = 24

### 7.2 递归的算法

通过分析前面的示例跟习题我们可以发现，阶乘的算法可以归纳为重复 `num*num-1`，直到 `num=1`。

基于这个想法，我们实现阶乘的计算方法:

```cs
static int Fact(int num) {
  if (num == 1) {
    return 1;
  }
  return num * Fact(num - 1);
}
```

在 Fact 递归方法中，if 语句定义了退出条件，这是因为 1 是一个不需要递归的情况。在这种情况下，当 num 等于 1 时，解决方案就是简单地返回 1（1的阶乘是1）。

递归调用放在退出条件之后，并返回乘以 n-1 阶乘的 num。

例如，如果您使用参数 4 调用 Fact 方法，它将执行如下：

返回 `4 *Fact(3)`，即 `4 * 3 *Fact(2)`，即 `4 * 3 * 2 *Fact(1)`，即 `4 * 3 * 2 * 1`。

如果在 Main 函数中调用 Fact 方法:

```cs
static void Main(string[] args)
{
  Console.WriteLine(Fact(6));
  //输出720
}
```

> 当参数 num 不为 1 的时候，Fact 不断的调用自己，直到 num 等于 1 的时候停止，这样我们得到了阶乘的最终计算结果了。当然，如果没有退出条件，Fact 会一直执行下去，即无线循环，也称为死循环。

【单选题】如何阻止递归方法永远调用自己？B.

A. 静态关键字

B. 退出条件

C. Main 函数

## 8. 实践：输出一个金字塔

### 8.1 打印一个金字塔

现在，让我们创建一个方法，使用星号"`*`"将任何高度的金字塔显示到控制台窗口中。

基于这个需求，我们需要定义一个参数来控制金字塔的行数(即金字塔的高度)。

首先，让我们开始声明方法：

```cs
static void DrawPyramid(int n)
{
   //循环控制*号的输出
}
```

DrawPyramid 不需要返回值，但是需要一个参数来控制金字塔的高度：

在编程过程中，解决问题所需的逐步逻辑称为算法。 MakePyramid 的算法是：

1. 第一行应包含金字塔顶部中心的一颗星。中心是根据金字塔中的行数计算的。

2. 第一行之后的每行应包含奇数个星号（1,3,5 等），直到达到行数。

基于该算法，代码将使用 for 循环来显示每行的空格和星号：

第一排中心*：（n-1）/2

```c#
using System;

class Program
{
    // 定义一个方法来绘制金字塔
    // static void DrawPyramid(int n)
    // {
    //     // 循环每一层 i 从 1 到 n
    //     for (int i = 1; i <= n; i++)
    //     {
    //         // 打印空格，为了金字塔形状向右对齐
    //         for (int j = i; j <= n; j++)
    //         {
    //             Console.Write("  "); // 每层前的空格数量与层数成反比
    //         }
    //         // 打印星号，当前层 i 的星号数量为 2 * i - 1
    //         for (int k = 1; k <= 2 * i - 1; k++)
    //         {
    //             Console.Write("* "); // 在星号后面加一个空格以形成更清晰的金字塔形状
    //         }
    //         // 每打印完一层后换行
    //         Console.WriteLine();
    //     }
    // }
    static void DrawPyramid(int n)
    {
        for (int i = 1; i <= n; i++)
        {
            for (int j = i; j <= n; j++)
            {
                Console.Write("  ");
            }
            for (int k = 1; k <= 2 * i - 1; k++)
            {
                Console.Write("*" + " ");
            }
            Console.WriteLine();
        }
    }

    // 主函数
    static void Main()
    {
        // 提示用户输入金字塔的高度
        Console.Write("请输入金字塔的高度：");
        int n;

        // 读取用户输入并尝试转换为整数
        while (!int.TryParse(Console.ReadLine(), out n) || n <= 0)
        {
            Console.WriteLine("输入无效，请输入一个正整数：");
        }

        // 调用 DrawPyramid 方法绘制金字塔
        DrawPyramid(n);
    }
}
```

4. 【填空题】如果一个方法没有返回值,你应该定义方法的返回类型为？void

5. 以下代码运行后最终输出的结果是：

```cs
static int Test(out int x, int y=4) {
  x = 6;
  return x * y;
}
static void Main(string[] args) {
  int a;
  int z = Test(out a);
  Console.WriteLine(a + z);
}
//output
30
```

