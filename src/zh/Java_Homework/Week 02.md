---
title: Java 02
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

以下是每道题目的参考答案：

### 题目1
```java
int[] arr = {1, 2, 3, 4, 5, 6};
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i] + " ");
}
```

### 题目2
```java
double[] arr = {12.9, 53.54, 75.0, 99.1, 3.14};
double min = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
System.out.println("最小值为: " + min);
```

### 题目3
```java
int[] arr = new int[6];
Random random = new Random();
int sum = 0;
for (int i = 0; i < arr.length; i++) {
    arr[i] = random.nextInt(100); // 0-99
    sum += arr[i];
}
System.out.println("数组元素和为: " + sum);
```

### 题目4
```java
int[] arr = {2, 1, 3, 5, 4};
int num = 0;
for (int i = 0; i < arr.length; i++) {
    num = num * 10 + arr[i];
}
System.out.println("表示的整数为: " + num);
```

### 题目5
```java
int[] scores = {72, 89, 65, 87, 91, 82, 71, 93, 76, 68};
int sum = 0;
for (int score : scores) {
    sum += score;
}
double average = (double) sum / scores.length;
System.out.println("学生的平均成绩为: " + average);
```

### 题目6
```java
int[] arr = {12, 14, 23, 45, 66, 68, 70, 77, 90, 91};
int num = 50; // 假设输入的数字为50
int[] newArr = new int[arr.length + 1];
int i = 0;
for (; i < arr.length; i++) {
    if (arr[i] > num) break;
    newArr[i] = arr[i];
}
newArr[i] = num;
for (int j = i; j < arr.length; j++) {
    newArr[j + 1] = arr[j];
}
for (int element : newArr) {
    System.out.print(element + " ");
}
```

### 题目7
```java
int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int[] newArr = new int[arr.length];
int left = 0, right = arr.length - 1;
for (int num : arr) {
    if (num % 2 == 1) {
        newArr[left++] = num;
    } else {
        newArr[right--] = num;
    }
}
for (int num : newArr) {
    System.out.print(num + " ");
}
```

### 题目8
```java
for (int year = 1988; year <= 2024; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        System.out.println(year);
    }
}
```

这些题目涵盖了数组的基本操作和一些常见的逻辑处理，希望对你有所帮助。