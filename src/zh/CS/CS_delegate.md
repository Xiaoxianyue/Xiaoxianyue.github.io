---
title: C#->委托和事件
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

你好，我是悦创。

在 C# 中，**委托（Delegate）**和**事件（Event）**是两个密切相关的概念。它们通常用于实现事件驱动编程。以下是它们的定义和区别：

## 1. 委托

委托是一个数据结构，它定义了一种类型，可以存储一个或多个方法的引用。委托类似于 C++ 中的函数指针，但更安全。它允许你将方法作为参数传递，并且可以动态调用这些方法。使用委托的主要步骤如下：

1. 定义委托类型：

    ```csharp
    public delegate void MyDelegate(string message);
    ```

2. 创建委托实例：

    ```csharp
    MyDelegate del = new MyDelegate(SomeMethod);
    ```

3. 调用委托：

    ```csharp
    del("Hello, World!");
    ```

## 2. 事件

事件是基于委托的更高级别的抽象。它用于在一个对象中发布消息，而另一个对象中订阅该消息。当事件被触发时，所有订阅者都会被通知。事件通常有三个主要组成部分：

1. **事件声明：**通常以 `event` 关键字和委托类型声明一个事件。

    ```csharp
    public event MyDelegate MyEvent;
    ```

2. **事件订阅：**订阅事件以添加一个或多个事件处理程序。事件处理程序是与事件关联的方法，当事件发生时，这些方法会被调用。

    ```csharp
    myObject.MyEvent += new MyDelegate(EventHandlerMethod);
    ```

3. **触发事件：**通过调用事件，触发所有已订阅的处理程序。

    ```csharp
    MyEvent?.Invoke("Event triggered!");
    ```

## 3. 区别

- **语法和使用：**委托可以直接被实例化和调用，而事件通常在类中声明，并且只能在类的内部进行触发。
- **访问权限：**委托可以被任何人调用，但事件只能在它们所声明的类中被触发。
- **目的：**委托通常用于传递函数引用或作为回调，而事件用于在对象之间进行异步通知。

通过了解委托和事件，你可以在 C# 中实现灵活的事件驱动编程模式。

在 C# 中，委托和事件是非常重要的功能，它们在应用程序开发中扮演着关键角色。下面是它们的主要作用：

### 委托的作用
1. **方法引用：**委托允许将方法作为参数传递给其他方法。通过使用委托，你可以将不同的方法绑定到同一委托变量中，使它们可以被动态调用。
2. **回调机制：**在异步编程中，委托经常用于定义回调函数。一个方法可以在执行结束后通过委托调用另一个方法，实现异步编程。
3. **可插拔性：**委托使代码更加灵活和模块化。通过允许外部设置方法，委托使得组件之间的耦合度降低。
4. **多播能力：**委托允许将多个方法绑定到一个委托实例中，以实现多播。当调用多播委托时，会依次调用所有绑定的方法。

### 事件的作用
1. **事件驱动编程：**事件是实现事件驱动编程的重要机制。它使得对象之间可以在某个事件发生时进行通信。通过事件，组件之间可以发布和订阅事件，实现松耦合。
2. **封装逻辑：**事件将发布和订阅逻辑封装在一起，使得订阅者只需关注事件的结果，而不必关心事件的触发细节。
3. **通知机制：**事件提供了一种标准化的方式，将状态变化通知给多个订阅者。当某个事件触发时，所有订阅者都会收到通知。
4. **降低耦合：**事件提供了发布者和订阅者之间的松散耦合。这使得代码更加模块化，便于维护和扩展。

### 区别
1. **触发权限：**委托可以由任何代码调用，而事件只能由它们的声明者触发。
2. **使用目的：**委托主要用于传递方法引用和实现回调，而事件用于实现事件驱动的通知机制。

### 总结
委托和事件在 C# 中用于实现灵活的事件驱动编程模式。它们在异步编程、组件之间的通信、通知机制等方面具有重要作用。

```c#
using System;

// 声明一个委托类型，可引用接受字符串参数并返回void的方法
public delegate void Notify(string message);

// 发布者类，负责声明并触发事件
class Publisher
{
    // 使用 Notify 委托类型声明一个事件
    public event Notify OnProcessCompleted;

    // 模拟处理过程的方法
    public void Process()
    {
        Console.WriteLine("Processing started...");
        
        // 模拟一些工作
        System.Threading.Thread.Sleep(1000);
        
        // 检查事件是否有订阅者并触发事件，将消息传递给订阅者
        OnProcessCompleted?.Invoke("Processing completed!");
    }
}

// 订阅者类，负责订阅事件并处理事件
class Subscriber
{
    // 订阅事件，将事件与处理方法关联
    public void Subscribe(Publisher pub)
    {
        pub.OnProcessCompleted += HandleProcessCompleted;
    }

    // 与 Notify 委托类型匹配的方法，当事件被触发时会调用这个方法
    void HandleProcessCompleted(string message)
    {
        Console.WriteLine(message);
    }
}

class EventExample
{
    static void Main()
    {
        // 创建发布者和订阅者对象
        Publisher pub = new Publisher();
        Subscriber sub = new Subscriber();
        
        // 订阅发布者的事件
        sub.Subscribe(pub);

        // 开始处理，触发事件
        pub.Process();
    }
}
```

