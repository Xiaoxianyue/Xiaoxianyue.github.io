---
title: data structure
icon: alias
date: 2024-3-27 17:45:25
author: XiaoXianYue
isOriginal: true
category: 
    - 课堂笔记
    - 课后回顾&练习
tag:
    - 课堂笔记
    - 课后回顾&练习
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

```c
void fun(Elem Type a[],int n)
{
    int i; Elem Type e;
    SqStack * stl,*st2;
    InitStack(st1);
    InitStack(st2);
    for(i=0;i<n;i++)
        if(a[i]%2==1)
            Push(st1,a[i]);
        else 
            Push(st2,a[i]);
    i=0;
    while(!StackEmpty(st1))
    {
        Pop(st1,e);
        a[i++]=e;
    }
    while(!StackEmpty(st2))
    {
        Pop(st2,e;)
        a[i++]=e;
    }
    DestroyStack(st1);
    DestroyStack(st2);
        
}
```

```c
void fun(SqStack * &st,ElemType x)
{
    SqStack * tmps;
    ElemType e;
    InitStack(tmps);
    while(!StackEmpty(st))
    {
        Pop(st,e);
        if(e!=x) 
            Push(tmps,e);
    }
    while(!StackEmpty(tmps))
    {
        Pop(tmps,e);
        Push(st,e);
    }
    DestroyStack(tmps);
}
```

