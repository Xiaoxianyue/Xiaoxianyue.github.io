---

title: Coventry-Summary
icon: c
date: 2024-5-11 10:19:07
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

## 1. Method

### 1.1 Coventry

知识点：

1. 怎么创建一个方法？返回类型？

2. 参数按值传递？按引用传递？（ref out in）

3. Recursion？

4. 变量作用域？

### 1.2 AIYC

1. 方法的声明？调用？

2. 怎么在方法里添加参数？调用带参数的方法？多参数方法？

3. 可选参数（为参数设置默认值的情况）？

4. 命名参数？
5. 参数的传递。同Coventry
6. 方法的重载，以及重载调用（能不能返回值类型不同参数类型相同？）

7. 递归



## 2. Class

### 1.1 Coventry

1. enum？调用enum里的值？
2. Structure。创建一个Structure？结构的初始值怎么赋？调用结构实例里的值？

3. Class。创建一个Class？类的构造函数和实例化？
4. 怎么调用private变量？
5. static关键字
6. Default constructor长什么样子
7. 重载（overloading）
8. access modifier。

### 1.2 AIYC

1. 什么是类什么是对象
2. heap and stack
3. 创建一个类？实例化一个对象？
4. 封装。
5. 不带参数的构造方法。（类的实例一被创造出来的时候就会调用并实现构造方法）代码记得吗？
6. 带参数的构造方法。与上面的分别举例。

下面输出什么?

```csharp
class Dog
{
  public Dog()
  { Console.WriteLine(1); }

  public Dog(string name)
  { Console.WriteLine(name); }
}
static void Main(string[] args)
{
  Dog d = new Dog("2");
}
```

7. get set用法.赋值和读取？好处？自动创建？



## 3. Intheritance

### 3.1 Coventry

1. 继承实现的代码。
2. 子类实现父类的代码（base）
3. 子类override父类的代码
4. 抽象方法



## 4. Interface

1. upcasting downcasting
2. as & is

## 5. Generics

1. Boxing and Unboxing

2. 完成一个多态的代码
3. 在数组中的应用
4. 在继承中的运用

5. where 关键字



## 6. 练习：ATM机

请设定您的初始账户余额: 9999999
请输入您的PIN码以继续：1314
PIN码错误，请重试。
请输入您的PIN码以继续：1234

欢迎使用ATM机系统

1. 查看余额
2. 存款
3. 取款
4. 退出
    请输入您的选择（1-4）：1
    您的账户余额为：$9999999.00

欢迎使用ATM机系统

1. 查看余额
2. 存款
3. 取款
4. 退出
    请输入您的选择（1-4）：2
    请输入存款金额：1
    存款成功！您的新余额为：$10000000.00

欢迎使用ATM机系统

1. 查看余额
2. 存款
3. 取款
4. 退出
    请输入您的选择（1-4）：3
    请输入取款金额：1
    取款成功！您的新余额为：$9999999.00

欢迎使用ATM机系统

1. 查看余额
2. 存款
3. 取款
4. 退出
    请输入您的选择（1-4）：4
    感谢使用我们的ATM服务，再见！

Process finished with exit code 0

```c#
using System;

class Account
{
    public int balance;
    public string pin;

    public Account(int balance)
    {
        this.balance = balance;
    }
    public bool Checkpin(string pin)
    {
        return pin == "123";
    }

    public int Deposit()
    {
        Console.WriteLine("请输入存款金额：");
        int position = Convert.ToInt32(Console.ReadLine());
        balance += position;
        return balance;
    }

    public int Withdrawal()
    {
        Console.WriteLine("请输入取款金额：");
        int negation = Convert.ToInt32(Console.ReadLine());
        if (negation > balance)
        {
            Console.WriteLine("余额不足！");
            return balance;
        }
        balance -= negation;
        return balance;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Account account = new Account(999999);
        Console.WriteLine("请输入你的密码：");
        account.pin = Console.ReadLine();

        if (account.Checkpin(account.pin))
        {
            bool exit = false;

            while (!exit)
            {
                Console.WriteLine("欢迎使用ATM机！");
                Console.WriteLine("1.查看余额");
                Console.WriteLine("2.存款");
                Console.WriteLine("3.取款");
                Console.WriteLine("4.退出");
                Console.WriteLine("请选择需要的服务的序号：");
                int n = Convert.ToInt32(Console.ReadLine());

                switch (n)
                {
                    case 1:
                        Console.WriteLine("当前余额：" + account.balance);
                        break;
                    case 2:
                        Console.WriteLine("存款后余额：" + account.Deposit());
                        break;
                    case 3:
                        Console.WriteLine("取款后余额：" + account.Withdrawal());
                        break;
                    case 4:
                        Console.WriteLine("感谢使用我们的ATM服务，再见！");
                        exit = true;
                        break;
                    default:
                        Console.WriteLine("无效的选项，请重新选择！");
                        break;
                }
            }
        }
        else
        {
            Console.WriteLine("密码错误");
        }
    }
}
```





## 7. 题目名称：温度监控系统

**问题描述：**
设计一个温度监控系统，当温度超出设定的安全范围时，系统应自动发送警报。你需要使用C#来实现这个功能。

**基本要求：**

1. 创建一个名为`TemperatureSensor`的类，它包含一个名为`CurrentTemperature`的属性和一个名为`TemperatureChanged`的事件。
2. `CurrentTemperature`的设值器中应触发`TemperatureChanged`事件，只有在温度与上次读数不同时才触发。
3. 创建一个名为`Alarm`的类，该类订阅`TemperatureSensor`的`TemperatureChanged`事件，并在温度超过100度或低于-10度时发出警报。

**进阶要求：**

- 添加一个功能，允许`Alarm`类在警报时记录日志到一个文件中。
- 提供一个用户界面（可以是命令行界面），允许用户输入温度值并显示警报状态。

**评估标准：**

- 代码的清晰度和可读性。
- 事件处理机制的正确实现。
- 进阶功能的完整性。



```C#
using System;
using System.IO;

// 温度传感器类
public class TemperatureSensor
{
    private int _currentTemperature;

    // 温度变化时触发的事件
    public event EventHandler<int> TemperatureChanged;

    // 当前温度的属性
    public int CurrentTemperature
    {
        get { return _currentTemperature; }
        set
        {
            // 当温度发生变化时，触发事件
            if (_currentTemperature != value)
            {
                _currentTemperature = value;
                TemperatureChanged?.Invoke(this, _currentTemperature);
            }
        }
    }
}

// 警报系统类
public class Alarm
{
    public Alarm(TemperatureSensor sensor)
    {
        // 订阅温度变化事件
        sensor.TemperatureChanged += OnTemperatureChanged;
    }

    private void OnTemperatureChanged(object sender, int newTemperature)
    {
        // 温度超出设定范围时，触发警报
        if (newTemperature > 100 || newTemperature < -10)
        {
            Console.WriteLine($"警报: 温度异常！当前温度为 {newTemperature} 度。");
            LogTemperature(newTemperature);
        }
        else
        {
            Console.WriteLine($"当前温度为 {newTemperature} 度。一切正常。");
        }
    }

    // 记录温度异常到日志文件
    private void LogTemperature(int temperature)
    {
        string path = "TemperatureLog.txt";
        using (StreamWriter writer = new StreamWriter(path, true))
        {
            writer.WriteLine($"警报时间: {DateTime.Now}, 温度: {temperature}");
        }
    }
}

// 主程序
class Program
{
    static void Main()
    {
        TemperatureSensor sensor = new TemperatureSensor();
        Alarm alarm = new Alarm(sensor);

        // 循环获取用户输入的温度并更新传感器状态
        while (true)
        {
            Console.WriteLine("请输入新的温度值 (整数)：");
            int newTemperature;
            if (int.TryParse(Console.ReadLine(), out newTemperature))
            {
                sensor.CurrentTemperature = newTemperature;
            }
            else
            {
                Console.WriteLine("请输入有效的整数温度值！");
            }
        }
    }
}
```

- **事件声明：** `public event EventHandler<int> TemperatureChanged;`

    在 `TemperatureSensor`  类中，声明了一个名为`TemperatureChanged`的事件。这里使用了系统提供的泛型委托`EventHandler<T>`，其定义为一个接受两个参数（一个 `object` 和一个泛型参数 `T`  ）的方法。在这个例子中，`T` 被指定为 `int` 类型，对应温度值。

- **事件的订阅**: `sensor.TemperatureChanged += OnTemperatureChanged;`

    在 `Alarm` 类的构造函数中，将 `OnTemperatureChanged` 方法绑定到 `TemperatureSensor` 的 `TemperatureChanged` 事件。这里的 `+=` 操作符用于添加一个事件处理器，即把 `OnTemperatureChanged` 方法作为委托绑定到 `TemperatureChanged` 事件。

- **事件处理方法**: `private void OnTemperatureChanged(object sender, int newTemperature)`

    `OnTemperatureChanged` 是 `Alarm` 类定义的一个方法，用来响应温度变化的事件。此方法的签名与 `EventHandler<int>` 委托的要求一致（接受一个 `object` 和一个 `int` 作为参数），因此它可以作为事件的处理方法。

- `TemperatureChanged?.Invoke(this, _currentTemperature);`：

    - Invoke：触发事件
    - **this**: 关键字 `this` 代表当前类的实例，也就是 `TemperatureSensor` 类的一个对象。在事件触发时，传递 `this` 作为事件的发送者或来源。这是事件模式中常见的做法，允许事件的接收者知道事件是从哪个对象发出的。
    - **_currentTemperature**: 这个是 `TemperatureSensor` 类中的私有字段，存储当前的温度值。当温度值发生变化时，这个新的温度值通过事件参数传递给事件的处理方法。在这个案例中，`_currentTemperature` 是一个整数（int），代表当前的温度。



## 8. 泛型

### 8.1

C# 中的泛型是一种非常强大的特性，它允许你编写代码时使用占位符代替具体的数据类型。使用泛型可以增强代码的可重用性、类型安全和性能。下面是关于C# 泛型的一些基础概念和使用方式：

1. 什么是泛型？

泛型允许你定义一个类、接口或方法时延迟指定一个或多个类型。这些类型将在创建类的实例或调用方法时指定。通过这种方式，你可以使用一个类或方法处理多种数据类型，而不需要为每种数据类型编写重复的代码。

2. 泛型类和接口

泛型类是在定义类时不指定具体类型的类。泛型接口类似。它们都使用类型参数，通常用尖括号（`<>`）表示。例如，定义一个可以存储任何类型的简单泛型类 `Box`：

```csharp
public class Box<T>
{
    private T content;

    public void Pack(T item)
    {
        content = item;
    }

    public T Unpack()
    {
        return content;
    }
}
```

在这个例子中，`T` 是一个占位符，代表将来某个具体的数据类型。使用这个类时，你可以指定任何类型：

```csharp
Box<int> intBox = new Box<int>();
intBox.Pack(123);

Box<string> stringBox = new Box<string>();
stringBox.Pack("hello");
```

3. 泛型方法

泛型也可以用于方法。泛型方法允许在调用方法时指定一个或多个类型参数。例如：

```csharp
public void Swap<T>(ref T a, ref T b)
{
    T temp = a;
    a = b;
    b = temp;
}
```

这个 `Swap` 方法可以用于交换任何类型的两个值：

```csharp
int x = 1, y = 2;
Swap(ref x, ref y); // x = 2, y = 1

string first = "first", second = "second";
Swap(ref first, ref second); // first = "second", second = "first"
```

4. 泛型约束

泛型约束用于限制泛型类型参数可以表示的数据类型。这可以通过 `where` 关键字实现。例如，你可能只希望某个泛型类能用于实现了某个接口的类型：

```csharp
public class Box<T> where T : IComparable
{
    private T content;

    public bool IsGreaterThan(T other)
    {
        return content.CompareTo(other) > 0;
    }
}
```

这个例子中的 `Box` 类只接受实现了 `IComparable` 接口的类型作为泛型参数。

5. 泛型和性能

使用泛型可以提高应用程序的性能。泛型在编译时就已经确定了类型，因此执行时不需要进行额外的类型检查或装箱操作（将值类型转换为引用类型）。这使得泛型版本的代码通常比它们的非泛型对应版本更快、更高效。



### 8.2 题目描述

创建一个泛型类 `Repository<T>`，该类将用作数据存储的简单泛型仓库。你需要实现以下功能：

1. **添加元素**：通过一个 `Add` 方法添加新元素到仓库中。
2. **检索元素**：通过 `GetAt` 方法根据索引检索仓库中的元素。
3. **获取总数**：一个属性 `Count` 用来获取仓库中元素的总数。

### 要求

1. 使用泛型类 `Repository<T>` 来实现存储机制，内部可以使用 `List<T>` 来存储数据。
2. 确保类中的方法和属性正确使用泛型类型 `T`。

```c#
using System;
using System.Collections.Generic;

// 定义一个泛型类 Repository<T>，其中 T 是泛型类型参数
public class Repository<T>
{
    // 使用 List<T> 来存储数据，这里的 T 将代表任意指定的数据类型
    private List<T> items = new List<T>();

    // Add 方法允许向仓库中添加新元素
    public void Add(T item)
    {
        items.Add(item); // 将元素添加到 List<T> 的尾部
    }

    // GetAt 方法根据索引返回仓库中的元素
    public T GetAt(int index)
    {
        if (index >= 0 && index < items.Count) // 检查索引是否有效
        {
            return items[index]; // 返回指定索引的元素
        }
        // 如果索引无效，抛出异常
        throw new ArgumentOutOfRangeException(nameof(index), "Index is out of range.");
    }

    // Count 属性返回仓库中元素的总数
    public int Count
    {
        get { return items.Count; } // 直接返回内部 List 的 Count 属性
    }
}

// 主程序入口
public class Program
{
    public static void Main()
    {
        // 创建一个用于存储字符串的 Repository 实例
        Repository<string> stringRepository = new Repository<string>();
        stringRepository.Add("Hello"); // 添加字符串 "Hello"
        stringRepository.Add("World"); // 添加字符串 "World"

        // 输出存储的字符串和仓库中的元素总数
        Console.WriteLine(stringRepository.GetAt(0)); // 输出: Hello
        Console.WriteLine(stringRepository.GetAt(1)); // 输出: World
        Console.WriteLine("Total Items: " + stringRepository.Count); // 输出: Total Items: 2

        // 创建一个用于存储整数的 Repository 实例
        Repository<int> intRepository = new Repository<int>();
        intRepository.Add(1); // 添加整数 1
        intRepository.Add(2); // 添加整数 2

        // 输出存储的整数和仓库中的元素总数
        Console.WriteLine(intRepository.GetAt(0)); // 输出: 1
        Console.WriteLine(intRepository.GetAt(1)); // 输出: 2
        Console.WriteLine("Total Items: " + intRepository.Count); // 输出: Total Items: 2
    }
}
```

