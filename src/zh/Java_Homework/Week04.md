---
title: Java 04
icon: java
date: 2024-6-09 15:11:32
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

## 1.定义狗类

```java
public class Dog {
    private int age;
    private String color;

    public Dog() {}

    public Dog(int age, String color) {
        this.age = age;
        this.color = color;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void eat(String something) {
        System.out.println(age + "岁的" + color + "颜色的狗两只前腿死死的抱住" + something + "猛吃");
    }

    public void lookHome() {
        System.out.println("狗正在看家");
    }
}

```

## 2. 定义猫类

```java
public class Dog {
    private int age;
    private String color;

    public Dog() {}

    public Dog(int age, String color) {
        this.age = age;
        this.color = color;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void eat(String something) {
        System.out.println(age + "岁的" + color + "颜色的狗两只前腿死死的抱住" + something + "猛吃");
    }

    public void lookHome() {
        System.out.println("狗正在看家");
    }
}

```

## 3. 定义Person类

```java
public class Person {
    private String name;
    private int age;

    public Person() {}

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
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

    public void keepPet(Dog dog, String something) {
        System.out.println("年龄为" + age + "岁的" + name + "养了一只" + dog.getColor() + "颜色的" + dog.getAge() + "岁的狗");
        dog.eat(something);
    }

    public void keepPet(Cat cat, String something) {
        System.out.println("年龄为" + age + "岁的" + name + "养了一只" + cat.getColor() + "颜色的" + cat.getAge() + "岁的猫");
        cat.eat(something);
    }
}

```

## 4. 定义测试类

```java
public class Test {
    public static void main(String[] args) {
        Dog dog = new Dog(2, "黑");
        Cat cat = new Cat(3, "灰");

        Person person1 = new Person("老王", 30);
        Person person2 = new Person("老李", 25);

        person1.keepPet(dog, "骨头");
        person2.keepPet(cat, "鱼");
    }
}

```



## 5. 思考

问题：

1. Dog和Cat都是Animal的子类，以上案例中针对不同的动物，定义了不同的keepPet方法，过于繁琐，能否简化，并体会简化后的好处？	

2. Dog和Cat虽然都是Animal的子类，但是都有其特有方法，能否想办法在keepPet中调用特有方法？

**简化 `keepPet` 方法**: 可以通过定义一个 `Animal` 基类，并在 `Person` 类中使用多态来简化 `keepPet` 方法。

**调用特有方法**: 可以通过类型检查和强制类型转换在 `keepPet` 方法中调用特有方法。

```java
public abstract class Animal {
    private int age;
    private String color;

    public Animal() {}

    public Animal(int age, String color) {
        this.age = age;
        this.color = color;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public abstract void eat(String something);
}

public class Dog extends Animal {
    public Dog(int age, String color) {
        super(age, color);
    }

    @Override
    public void eat(String something) {
        System.out.println(getAge() + "岁的" + getColor() + "颜色的狗两只前腿死死的抱住" + something + "猛吃");
    }

    public void lookHome() {
        System.out.println("狗正在看家");
    }
}

public class Cat extends Animal {
    public Cat(int age, String color) {
        super(age, color);
    }

    @Override
    public void eat(String something) {
        System.out.println(getAge() + "岁的" + getColor() + "颜色的猫眯着眼睛侧着头吃" + something);
    }

    public void catchMouse() {
        System.out.println("猫正在逮老鼠");
    }
}

public class Person {
    private String name;
    private int age;

    public Person() {}

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
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

    public void keepPet(Animal pet, String something) {
        System.out.println("年龄为" + age + "岁的" + name + "养了一只" + pet.getColor() + "颜色的" + pet.getAge() + "岁的" + pet.getClass().getSimpleName().toLowerCase());
        pet.eat(something);

        if (pet instanceof Dog) {
            ((Dog) pet).lookHome();
        } else if (pet instanceof Cat) {
            ((Cat) pet).catchMouse();
        }
    }
}

public class Test {
    public static void main(String[] args) {
        Dog dog = new Dog(2, "黑");
        Cat cat = new Cat(3, "灰");

        Person person1 = new Person("老王", 30);
        Person person2 = new Person("老李", 25);

        person1.keepPet(dog, "骨头");
        person2.keepPet(cat, "鱼");
    }
}
```

### 简化后的好处

1. **代码复用**: 通过继承和多态，`keepPet` 方法得以简化，避免了重复代码。
2. **扩展性强**: 以后添加新的宠物类型时，无需修改 `Person` 类，只需继承 `Animal` 并实现相应方法即可。
3. **更简洁**: 简化代码逻辑，使代码更易读易维护。