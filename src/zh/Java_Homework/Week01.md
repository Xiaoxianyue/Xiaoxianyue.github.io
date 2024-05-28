---
title: Java 01
icon: java
date: 2024-5-20 11:18:25
author: XiaoXianYue
isOriginal: true
category: 
    - Java
    - 大二下
tag:
    - Java
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
backToTop:
---

**题目1（选择）:**

下列关于java变量声明那个是错误的：

A. int x = 5;

B. double d = 3.14;

C. char grade = ‘C’;

D. String name = ‘我是小红’;

答案：D. String name = ‘我是小红’;（错误，应该使用双引号）



**题目2（看代码说结果）:**

看代码说结果，不要去运行。

```java
double money = 10.0;
money = money + 5;
money -= 2.5;
money = money + 10;
money = money - 3;
System.out.println(money);
```

答案：20.5



**题目3:（代码题）:**

请用代码描述下列银行流水变化过程：

小明账户bankBalance初始值有500.00元

存入250元

支出100元

打印剩余存款

```java
public class BankAccount {
    public static void main(String[] args) {
        double bankBalance = 500.00;
        
        bankBalance += 250; // 存入250元
        bankBalance -= 100; // 支出100元
        
        System.out.println("剩余存款: " + bankBalance);
    }
}
```



**题目4：（选择题）:**

变量名是一个单词或者是一组单词，用来描述一个数据的含义，方便人理解，变量名不能有空格。下面的名字哪些可以是变量名?

A. mybirthday

B. myname

C. my name

D. my birthday

E. 2024.

F. ”中国传媒大学”

答案：A. mybirthday, B. myname, E. 2024.



**题目5：（选择题）:**

关于变量的说法哪些是对的?

A. 一个变量-一次就可以存储很多种不同的数据

B. 变量是值的容器,定义变量可以存放值

C. 变量可以随时修改存储数据的类型

D. 定义变量可以帮我们存储信息方便后面使用

答案：B. 变量是值的容器,定义变量可以存放值, D. 定义变量可以帮我们存储信息方便后面使用



**题目6：（选择题）:**

下面代码哪些是创建一个变量?

A. int myAge = 18;

B. myName='小红”;

C. myAge = 16;

D. String myName ;

答案：A. int myAge = 18;



**题目7：（选择题）:**

int和float的区别是什么?

A. 区别是没有区别

B. int是变量, float是方法

C. int是用来存放整数数据的变量类型，float是存放小数的

D. int类型的数据要用”， 引号引起来

答案：C. int是用来存放整数数据的变量类型，float是存放小数的



**题目8：（代码题）**

```java
String name; // 声明字符串型变量name
String birthday; // 声明字符串型变量birthday
int age; // 声明整数类型变量age
float money; // 声明float类型变量money
```



**题目9（代码题）**

```java
public class Test03 {
    public static void main(String[] args) {
        byte b = 1;
        short s = 2;
        int i = 3;
        long l = 4L;
        float f = 5.0f;
        double d = 6.0;
        char c = '7';
        boolean bool = true;
        
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);
    }
}
```



**题目10（代码题）**

```java
public class Test04 {
    public static void main(String[] args) {
        int studentNumber = 100;
        double price = 55.55;
        long earthAge = 4600000000L;
        boolean isEven = false;
        
        System.out.println(studentNumber);
        System.out.println(price);
        System.out.println(earthAge);
        System.out.println(isEven);
    }
}
```



**题目11（代码题）**

```java
public class Test03 {
    public static void main(String[] args) {
        String name = "张三";
        String gender = "男";
        int age = 18;
        String address = "xx省xx市";
        double balance = 55.55;
        
        System.out.println("************************");
        System.out.println("我的姓名是：" + name);
        System.out.println("我的性别是：" + gender);
        System.out.println("我的年龄是：" + age);
        System.out.println("我的地址是：" + address);
        System.out.println("我的饭卡余额是：" + balance + "元");
        System.out.println("************************");
    }
}
```