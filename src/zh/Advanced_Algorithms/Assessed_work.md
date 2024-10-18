---
title: 高级算法作业
icon: python
date: 2024-10-18 15:18:51
author: XiaoXianYue
isOriginal: true
category: 
    - 大三上
    - 高级算法大作业
tag:
    - 大三上
    - 高级算法大作业
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

## ASSESSED STANDARD TASK 1/5：Selection Sort 

   Selection sort works with two subarrays: the sorted section, and the unsorted section. 

It works by taking the minimum value in the unsorted array, putting it at the end of the sorted array, and continuing until there is no unsorted array. 

For example, starting with the unsorted array A:

```python
A = [11, 22, 14, 67, 2, 9]
```

We find the minimum value, and move it to the end of the unsorted array – which, first time round, is just the first element of A:

```python
A = [2, 11, 22, 14, 67, 9]
```

Now 2 is the sorted subarray, and the unsorted subarray is everything else. 

Next we find the smallest value in the unsorted subarray, and move it to the end of the sorted subarray:

```python
A = [2, 9, 11, 22, 14, 67]
```

Now 2 and 9 are the sorted subarray, and again we look for the smallest value in the unsorted subarray and move that to the end of the sorted subarray:

```python
A = [2, 9, 11, 22, 14, 67]
```

… and so on, until we have a sorted array:

```python
A= [2, 9, 11, 14, 22, 67]
```



Here is the pseudocode for selection sort:

**SELECTION_SORT(A)**

​     **FOR i TO length(A)-1**

​          **min ← i**

​          **FOR j ← i + 1 TO length(A)**

​               **IF A[j] < A[min]**

​                    **min ← j**

​          **SWAP (A, i, min)**

​     **RETURN A**



Implement this pseudocode in Python, or C++, or (if you like), both, adding comments as necessary. Be aware that min may be a protected term so you may need a different variable name e.g. minn. Note that a swap needs to be performed, and this, in the pseudocode, is the subfunction SWAP. You need to work out how to implement the swap. This does not have to be done using a subfunction: the swap could be implemented directly – the choice is yours.



### Solution 1 

```python
def selection_sort(arr):
    result = []  # Create a new list for storing the sorted list
    for i in range(len(arr) - 1, 0, -1):  # Iterate through the list from back to front
        min = arr[i]
        for j in range(i):  # Iterate over all elements except i and find the minimum value
            if arr[j] < min:
                min = arr[j]
        result.append(min)  # Add the minimum value to the newly created list
    result.append(arr[0])  # Add the last remaining element to result(the list)
    return result


print(selection_sort([5, 4, 3, 2, 1]))
```



### Solution 2

```python
def selection_sort(arr):
    for i in range(len(arr)):  # Iterate through the list from front to back
        min_index = i
        for j in range(i + 1, len(arr)):  # Find the smallest value in an unsorted list
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]  # Swap the minimum value with i into the sorted list
    return arr


print(selection_sort([5, 4, 3, 2, 1]))

```



## **Assessed Standard Task 2/5:** Find method for Binary Tree class         

From the pseudocode given in the lecture slides for Week 4, Data Structures 1, Slides 119 and 120, create 2 binary search methods, one iterative and one recursive, and implement these into the python Binary Tree class given on this week’s Aula in the zip folder, ‘BST-class’. 

Call the iterative method find_i, and the recursive method find_r. Notice that find_r needs a sub-method. Call this _find_r. 

Each method should return True, False, or None (note that the solution for ‘None’ is not given in the iterative pseudocode). 

Add comments to show your understanding. 

Check your code works by calling it and returning the correct result. 

You may decide, if you wish, to implement the entire class and solutions in C++, instead of, or in addition to, the python solution, but this is not mandatory for this task. 

### Solution 1 Iterative

```python

```



