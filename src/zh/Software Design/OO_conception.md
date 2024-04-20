---
title: OO conception
icon: alias
date: 2023-11-29 17:45:25
author: XiaoXianYue
isOriginal: true
category: 
    - Python
    - 大二下
tag:
    - Python
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

## 1. class and Object

### 1.1 Conception

**class**

`encapsulates(封装)` attributes(Python variables) and operations (Python method) into a single entity,which describes  a set of data and the  operations that will act on  data.



**object**

 is an instance of a  class and has the `properties(属性)` and behaviour of it class.



 **Unified Modelling Language (UML)**

used to model object oriented software  design 

???

### 1.2 图示

![image-20240418162858347](./OO_conception.assets/image-20240418162858347.png)

第一栏的Employee就是上文介绍的class；

第二栏（Employee Name，Employee ID）是class的attributes——即Python Variables；

- Part of the essential description of  data in a class

- Each object has its own value for  each attribute in its class   

- The visibility of attributes are  private. This means that data is  hidden from other objects, which  have no direct access to the data of an  entity, such as Employee

第三栏是operation——即Python Method。

-  The common behaviour shared by  all instances (objects) of the class  

-  Services that objects of a class can  provide to other objects

- The visibility of operations are  public, if they are designed to be  accessible to other objects.  Operations of an object can be  private  or protected if they are  only to be used by the object itself  or a group of objects, respectively

### 1.3 Create a Class

```python
class Person:
    def __init__(self, fname, lname):   //attribute
        self.fistname = fname
        self.lastname = lname
    def printname   //operation
        print(self.firstname, self lastname)
x = Person('John', 'Doe')   //object
x.printname()   //call operation
```

`__init__()`

- All classes have a  function called  `__init__()`, which is  to assign values to  object properties, or  other operations  when the object is  being created 

有点类似于C#中的构造函数！

`self(or other)`

- The self parameter is a  reference to the current  instance of the class,  and is used to access  variables that belongs  to the class.

- The self  parameter could  be given any  name, e.g.  mysillyobject or  abc, but it has to  be the first  parameter of  any methods in  the class

```python
class Person:
    def __init__(abc, fname, lname):
        abc.fistname = fname
        abc.lastname = lname
    def printname
        print(abc.firstname, abc lastname)
x = Person('John', 'Doe')
x.printname()
```



