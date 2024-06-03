---
title: Java 03
icon: java
date: 2024-6-01 10:58:25
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



### 题目1

**要求**: 定义数组存储3部汽车对象。汽车的属性：品牌，价格，颜色。创建三个汽车对象，数据通过键盘录入而来，并把数据存入到数组当中。

```java
import java.util.Scanner;

class Car {
    private String brand;
    private double price;
    private String color;

    // Constructors, getters, and setters
    public Car(String brand, double price, String color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Car [brand=" + brand + ", price=" + price + ", color=" + color + "]";
    }
}

class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Car[] cars = new Car[3];

        for (int i = 0; i < cars.length; i++) {
            System.out.println("Enter details for car " + (i + 1));
            System.out.print("Brand: ");
            String brand = scanner.nextLine();
            System.out.print("Price: ");
            double price = scanner.nextDouble();
            System.out.print("Color: ");
            scanner.nextLine();  // Consume newline
            String color = scanner.nextLine();

            cars[i] = new Car(brand, price, color);
        }

        System.out.println("Cars entered:");
        for (Car car : cars) {
            System.out.println(car);
        }
    }
}
```

### 题目2

**要求**: 定义数组存储3部手机对象。手机的属性：品牌，价格，颜色。要求计算出三部手机的平均价格。

```java
import java.util.Scanner;

class Phone {
    private String brand;
    private double price;
    private String color;

    // Constructors, getters, and setters
    public Phone(String brand, double price, String color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Phone [brand=" + brand + ", price=" + price + ", color=" + color + "]";
    }
}

class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Phone[] phones = new Phone[3];
        double total = 0.0;

        for (int i = 0; i < phones.length; i++) {
            System.out.println("Enter details for phone " + (i + 1));
            System.out.print("Brand: ");
            String brand = scanner.nextLine();
            System.out.print("Price: ");
            double price = scanner.nextDouble();
            System.out.print("Color: ");
            scanner.nextLine();  // Consume newline
            String color = scanner.nextLine();

            phones[i] = new Phone(brand, price, color);
            total += price;
        }

        double averagePrice = total / phones.length;
        System.out.println("Average price of the phones: " + averagePrice);
    }
}
```

### 题目3

**要求**: 定义数组存储4个老师对象。老师的属性：姓名、年龄、性别、爱好。计算出四个老师的平均年龄；统计年龄比平均值低的老师有几个，并打印他们的信息。

```java
import java.util.Scanner;

class Teacher {
    private String name;
    private int age;
    private String gender;
    private String hobby;

    // Constructors, getters, and setters
    public Teacher(String name, int age, String gender, String hobby) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobby = hobby;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    @Override
    public String toString() {
        return "Teacher [name=" + name + ", age=" + age + ", gender=" + gender + ", hobby=" + hobby + "]";
    }
}

class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Teacher[] teachers = new Teacher[4];
        int totalAge = 0;

        for (int i = 0; i < teachers.length; i++) {
            System.out.println("Enter details for teacher " + (i + 1));
            System.out.print("Name: ");
            String name = scanner.nextLine();
            System.out.print("Age: ");
            int age = scanner.nextInt();
            System.out.print("Gender: ");
            scanner.nextLine();  // Consume newline
            String gender = scanner.nextLine();
            System.out.print("Hobby: ");
            String hobby = scanner.nextLine();

            teachers[i] = new Teacher(name, age, gender, hobby);
            totalAge += age;
        }

        double averageAge = (double) totalAge / teachers.length;
        System.out.println("Average age of the teachers: " + averageAge);

        System.out.println("Teachers younger than average age:");
        for (Teacher teacher : teachers) {
            if (teacher.getAge() < averageAge) {
                System.out.println(teacher);
            }
        }
    }
}
```

### 题目4

**要求**: 定义数组存储3个学生对象。学生的属性：学号，姓名，年龄。添加时进行学号的唯一性判断，遍历学生信息，通过id删除学生信息，id为2的学生年龄+1岁。

```java
import java.util.Scanner;

class Student {
    private int id;
    private String name;
    private int age;

    // Constructors, getters, and setters
    public Student(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + ", age=" + age + "]";
    }
}

class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Student[] students = new Student[3];
        int index = 0;

        while (index < students.length) {
            System.out.println("Enter details for student " + (index + 1));
            System.out.print("ID: ");
            int id = scanner.nextInt();
            boolean idExists = false;

            for (Student student : students) {
                if (student != null && student.getId() == id) {
                    idExists = true;
                    break;
                }
            }

            if (idExists) {
                System.out.println("ID already exists. Enter a unique ID.");
                continue;
            }

            System.out.print("Name: ");
            scanner.nextLine();  // Consume newline
            String name = scanner.nextLine();
            System.out.print("Age: ");
            int age = scanner.nextInt();

            students[index] = new Student(id, name, age);
            index++;
        }

        System.out.println("All students:");
        for (Student student : students) {
            System.out.println(student);
        }

        System.out.print("Enter ID of student to delete: ");
        int deleteId = scanner.nextInt();
        boolean found = false;

        for (int i = 0; i < students.length; i++) {
            if (students[i] != null && students[i].getId() == deleteId) {
                students[i] = null;
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Deletion failed. Student not found.");
        } else {
            System.out.println("Student deleted.");
        }

        System.out.println("All students
```

### 题目5

**要求**: 定义一个方法用于判断一个字符串是否是对称的字符串，并在主方法中测试方法。例如："abcba"、"上海自来水来自海上"均为对称字符串。

下面是解决方案和代码：

```java
public class PalindromeTest {

    // 定义一个方法用于判断字符串是否为对称字符串
    public static boolean isPalindrome(String str) {
        // 将字符串转换为StringBuilder类型
        StringBuilder sb = new StringBuilder(str);
        // 调用reverse()方法将字符串反转
        sb.reverse();
        // 将反转后的字符串再转回String类型，并与原字符串比较
        return str.equals(sb.toString());
    }

    public static void main(String[] args) {
        // 定义一些测试字符串
        String[] testStrings = { "abcba", "上海自来水来自海上", "hello", "radar", "level" };

        // 逐个测试并输出结果
        for (String str : testStrings) {
            System.out.println("The string \"" + str + "\" is a palindrome: " + isPalindrome(str));
        }
    }
}
```

### 测试输出

运行以上代码，会得到如下输出：
```
The string "abcba" is a palindrome: true
The string "上海自来水来自海上" is a palindrome: true
The string "hello" is a palindrome: false
The string "radar" is a palindrome: true
The string "level" is a palindrome: true
```

