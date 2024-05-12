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

```c#
using System;
class Account
{
    public int Id { get; set; }
    public Account(int id)
    { this.Id = id; }
}
class Bank<T> where T:Account
{
    T[] account;
    public Bank(T[] accs)
    {
        this .account = accs;
    }
    public void AccountInfo()
    {
        foreach(Account acc in account)
        {
            Console.WriteLine(acc);
        }
    }

}
class Program
{
    static void Main(string[] args)
    {
        Account[] a = new Account[] { new Account(234),new Account(342),new Account(345) };
        Bank<Account> b = new Bank<Account>(a);
        b.AccountInfo();
        Console.ReadLine();
    }
}
```









