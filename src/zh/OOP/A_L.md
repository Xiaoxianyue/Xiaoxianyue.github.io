---
title:  Anonymous Methods and Lambda Expressions
icon: c
date: 2024-5-07 09:35:42
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

## 1. 匿名方法

- 匿名方法与委托密切相关。 
- 匿名方法用于创建委托的副本 
- 匿名方法不能独立存在 
- 匿名方法的定义以委托关键字开始：

### 1.1 委托匿名方法的两种实现：

1. 声明委托类型并声明具有匹配签名的方法：

```c#
MessageHandler handler = delegate(string mes)
{
    Console.WriteLine(mes)
}
handler("hello Sherry!")
delegate void MessageHandler(string message)
```



2. 匿名方法的另一个例子是将委托所代表的参数作为参数进行转移

```c#
showmessage("hello", delegate (string mes)
{
    Console.WriteLine(mes);
});
static void showmessage(string message , MessageHandler handler)
{
   handler($"showmessage: {message}");
}
delegate void MessageHandler(string mes);
```

### 1.2 参数

匿名方法 -如果匿名方法使用参数，这些参数必须与委托的参数相匹配。如果匿名方法不需要参数，则带参数的括号会降低：

```c#
 MessageHandler handler = delegate 
 {
      Console.WriteLine("Anonymous method");
 };
 handler("hello world!"); // Anonymous method
 delegate void MessageHandler(string message);
```

与传统方法一样，匿名也可以返回结果：

```c#
Operation operation = delegate(int x, int y)
{
    return x + y;
}
int result = operation(4,5);
Console.WriteLine(result);
delegate int Operation(int x,int y)
```

匿名方法可以访问外部定义的所有变量。

```c#
int z = 8;
Operation operation = delegate(int x, int y)
{
    return x + y + z;
}
int result = operation(4,5);
Console.WriteLine(result);
delegate int Operation(int x,int y)
```



下面这个代码详细展现了使用命名方法调用委托和使用匿名方法调用委托：

```c#
using System;

delegate void NumberChanger(int n);
namespace DelegateAppl
{
    class TestDelegate
    {
        static int num = 10;
        public static void AddNum(int p)
        {
            num += p;
            Console.WriteLine("Named Method: {0}", num);
        }

        public static void MultNum(int q)
        {
            num *= q;
            Console.WriteLine("Named Method: {0}", num);
        }

        static void Main(string[] args)
        {
            // 使用匿名方法创建委托实例
            NumberChanger nc = delegate(int x)
            {
               Console.WriteLine("Anonymous Method: {0}", x);
            };
            
            // 使用匿名方法调用委托
            nc(10);

            // 使用命名方法实例化委托
            nc =  new NumberChanger(AddNum);
            
            // 使用命名方法调用委托
            nc(5);

            // 使用另一个命名方法实例化委托
            nc =  new NumberChanger(MultNum);
            
            // 使用命名方法调用委托
            nc(2);
            Console.ReadKey();
        }
    }
}
```

### 1.3 Microsoft

以下两个使用匿名方法来实现委托的例子，可以看到，方法在类里面，创建一个类的实例，再调用委托等于类中实例化的方法，是委托重要的使用方法。

```c#
// Declare a delegate
delegate void MultiplyCallback(int i, double j);

class MathClass
{
    static void Main()
    {
        MathClass m = new MathClass();

        // Delegate instantiation using "MultiplyNumbers"
        MultiplyCallback d = m.MultiplyNumbers;

        // Invoke the delegate object.
        Console.WriteLine("Invoking the delegate using 'MultiplyNumbers':");
        for (int i = 1; i <= 5; i++)
        {
            d(i, 2);
        }

        // Keep the console window open in debug mode.
        Console.WriteLine("Press any key to exit.");
        Console.ReadKey();
    }

    // Declare the associated method.
    void MultiplyNumbers(int m, double n)
    {
        Console.Write(m * n + " ");
    }
}
/* Output:
    Invoking the delegate using 'MultiplyNumbers':
    2 4 6 8 10
*/
```

```c#
// Declare a delegate
delegate void Callback();M

class SampleClass
{
    public void InstanceMethod()
    {
        Console.WriteLine("A message from the instance method.");
    }

    static public void StaticMethod()
    {
        Console.WriteLine("A message from the static method.");
    }
}

class TestSampleClass
{
    static void Main()
    {
        var sc = new SampleClass();

        // Map the delegate to the instance method:
        Callback d = sc.InstanceMethod;
        d();

        // Map to the static method:
        d = SampleClass.StaticMethod;
        d();
    }
}
/* Output:
    A message from the instance method.
    A message from the static method.
*/
```



## 2. Lambda

### 2.1 Lambda 表达式

- Lambda 表达式代表匿名方法的简化记录 
- Lambda 表达式允许创建简洁的简洁方法，这些方法可以返回一些值，并可以作为参数传递给其他方法 
- 要创建一个 lambda 表达式，你需要在 lambda 运算符 => 的左侧指定输入参数（如果有的话），并将表达式或语句块放在另一侧：

```c#
(list_parameters) => expression
```

```c#
Message hello = () => Console.WriteLine("Hello");
 hello();       // Hello
 delegate void Message();
```

### 2.2 参数

#### 2.2.1 参数类型

不需要定义类型：

```c#
 Operation sum = (x, y) => Console.WriteLine($"{x} + {y} = {x + y}");
 sum(22, 14);    // 22 + 14 = 36
 delegate void Operation(int x, int y);
```

**在隐式类型 var 的情况下：**

```c#
var sum = (int x,int y) => Console.WriteLine($"{x} + {y} = {x + y}");   //Error!
 sum(22, 14);    // 22 + 14 = 36
 delegate void Operation(int x, int y);
//如果是var sum = (x,y)=>...不行！因为隐式类型必须明确类型。
```



#### 2.2.2 参数个数和设置默认参数

当 Lambda 是唯一参数时，省略括号：

```c#
printHandler print = message=>Console.WriteLine(message);
print("Hello")
print("sherry")
delegate void printHandler(string message)
```

我们也可以设置一个默认参数值：

```c#
var welcome = (string message = "hello") => Console.WriteLine(message);
welcome("hello world"); // hello world printed 
welcome();              // hello printed
```

#### 2.2.3 Lambda 参数返回

Lambda 表达式可返回结果 -返回的结果可在 lambda 操作符后指定：

```c#
var sum = (int x, int y) => x + y;
int result1 = sum(4, 5);
Console.WriteLine(result1);

Operation muliple = (x , y)=> x * y;
int result2 = muliple(4, 5);
Console.WriteLine(result2);

delegate int Operation(int x, int y);
```

-当 Lambda 有多个表达式或 {} 内有一个表达式时，使用运算符 return：

```c#
var substract = (int x, int y) =>
{
    if (x > y) return x - y;
    else return y - x;
};
int result1 = substract(7, 3);
int result2 = substract(-16, 4);
Console.WriteLine(result1); 
Console.WriteLine(result2);
```



### 2.3 action adding & removing

Lambda 代表一个委托，因此功能与添加/删除操作相同：

```c#
 var hello = () => Console.WriteLine("the CUC");
 var message = () => Console.Write("Hello ");
 message += () => Console.WriteLine("World"); //add anonymous 
//lambda expression
 message += hello;   // add lambda expression fromhello
 message += Print;   // add method
 message?.Invoke();// if nothing more to add /remove
```

Lambda代表一个委托，所以参数传递是一致的

```c#
 int Sum(int[] numbers, IsEqual func) 
 {
     int result = 0;
     foreach(int i in numbers)     
     {
         if (func(i))
         result += i;
     }
     return result;
 }
 delegate bool IsEqual(int x);
```

•方法的返回类型是委托                                                
•Lambda表达式对应于该委托：

```c#
Operation SelectOperation(OperationType opType)
{
    switch(opType)
    {
        case OperationType.Add: return(x,y)=> x + y;
        case OperationType.subtract: return(x,y)=> x - y;
        default:return (x, y) => x * y;

    }

        
}
enum OperationType
{
    Add, subtract,multiple
}
delegate int Operation (int x, int y);
```



## 3. 怎么声明一个委托的总结

1. 声明委托类型并声明具有匹配签名的方法：

```c#
delegate int Operation(int x, int y);
class Progarm
{
    static void Main(string[] args)
    {
        Operation operation1 = Add;
        int x = operation1(4, 5);
        Console.WriteLine(x);

        Operation operation2 = new Operation(Multiple);
        int y = operation(4, 5);
        Console.WriteLine(y);

        int Add(int x, int y) => x + y;
        int Multiple(int x, int y) => x * y;

    }
}
```

2. 声明一个匿名方法

```c#
Operation operation = delegate (int x, int y)
{
    return x * y;
};
operation(4,5);
delegate int Operation(int x,int y);
```

3. 使用Lamber

```c#
// Instantiate NotifyCallback by using a lambda expression.
NotifyCallback del4 = name =>  { Console.WriteLine($"Notification received for: {name}"); };
```



### 3.1 例子

观察下面的例子

```c#
// A set of classes for handling a bookstore:
namespace Bookstore
{
    using System.Collections;

    // Describes a book in the book list:
    public struct Book
    {
        public string Title;        // Title of the book.
        public string Author;       // Author of the book.
        public decimal Price;       // Price of the book.
        public bool Paperback;      // Is it paperback?

        public Book(string title, string author, decimal price, bool paperBack)
        {
            Title = title;
            Author = author;
            Price = price;
            Paperback = paperBack;
        }
    }

    // Declare a delegate type for processing a book:
    public delegate void ProcessBookCallback(Book book);

    // Maintains a book database.
    public class BookDB
    {
        // List of all books in the database:
        ArrayList list = new ArrayList();

        // Add a book to the database:
        public void AddBook(string title, string author, decimal price, bool paperBack)
        {
            list.Add(new Book(title, author, price, paperBack));
        }

        // Call a passed-in delegate on each paperback book to process it:
        public void ProcessPaperbackBooks(ProcessBookCallback processBook)
        {
            foreach (Book b in list)
            {
                if (b.Paperback)
                    // Calling the delegate:
                    processBook(b);
            }
        }
    }
}

// Using the Bookstore classes:
namespace BookTestClient
{
    using Bookstore;

    // Class to total and average prices of books:
    class PriceTotaller
    {
        int countBooks = 0;
        decimal priceBooks = 0.0m;

        internal void AddBookToTotal(Book book)
        {
            countBooks += 1;
            priceBooks += book.Price;
        }

        internal decimal AveragePrice()
        {
            return priceBooks / countBooks;
        }
    }

    // Class to test the book database:
    class Test
    {
        // Print the title of the book.
        static void PrintTitle(Book b)
        {
            Console.WriteLine($"   {b.Title}");
        }

        // Execution starts here.
        static void Main()
        {
            BookDB bookDB = new BookDB();

            // Initialize the database with some books:
            AddBooks(bookDB);

            // Print all the titles of paperbacks:
            Console.WriteLine("Paperback Book Titles:");

            // Create a new delegate object associated with the static
            // method Test.PrintTitle:
            bookDB.ProcessPaperbackBooks(PrintTitle);

            // Get the average price of a paperback by using
            // a PriceTotaller object:
            PriceTotaller totaller = new PriceTotaller();

            // Create a new delegate object associated with the nonstatic
            // method AddBookToTotal on the object totaller:
            bookDB.ProcessPaperbackBooks(totaller.AddBookToTotal);

            Console.WriteLine("Average Paperback Book Price: ${0:#.##}",
                    totaller.AveragePrice());
        }

        // Initialize the book database with some test books:
        static void AddBooks(BookDB bookDB)
        {
            bookDB.AddBook("The C Programming Language", "Brian W. Kernighan and Dennis M. Ritchie", 19.95m, true);
            bookDB.AddBook("The Unicode Standard 2.0", "The Unicode Consortium", 39.95m, true);
            bookDB.AddBook("The MS-DOS Encyclopedia", "Ray Duncan", 129.95m, false);
            bookDB.AddBook("Dogbert's Clues for the Clueless", "Scott Adams", 12.00m, true);
        }
    }
}
/* Output:
Paperback Book Titles:
   The C Programming Language
   The Unicode Standard 2.0
   Dogbert's Clues for the Clueless
Average Paperback Book Price: $23.97
*/
```





















