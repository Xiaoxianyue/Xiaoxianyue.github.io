---
title: 机器学习作业 1中文
icon: alias
date: 2024-12-18 11:04:41
author: XiaoXianYue
isOriginal: true
category: 
    - 大三上
    - 论文
tag:
    - 大三上
    - 论文
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





## 1. 数据分析与预处理

### 1.1 数据来源与字段选择

本实验的数据来自 Kaggle 房价预测数据集。训练数据集包含 81 个字段，其中 `LotArea`、`BsmtUnfSF` 和 `GarageArea` 被选定为模型输入特征，`SalePrice` 作为目标变量。选择这些字段的原因在于：

- `LotArea`：反映房屋的地块面积；
- `BsmtUnfSF`：反映房屋地下未装修面积；
- `GarageArea`：反映车库面积。

### 1.2 数据清洗与划分

数据集可能存在缺失值，因此我对选定字段进行了缺失值处理，删除包含缺失值的样本。接着，我随机打乱数据，并按照 70% 和 30% 的比例划分为训练集和测试集。

数据处理的具体步骤：

1. 筛选所需字段；
2. 删除缺失值；
3. 随机打乱数据；
4. 按比例划分训练集和测试集。

训练集用于模型参数的计算，测试集用于评估模型性能。

## 2. 模型实现与训练

### 2.1 最小二乘法原理

线性回归模型通过以下公式计算目标变量：

$$
\hat{y} = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \theta_3 x_3
$$

为了计算参数 \(\theta\)，使用最小二乘法，最小化目标函数：

$$
J(\theta) = \frac{1}{2m} \sum_{i=1}^m (\hat{y}_i - y_i)^2
$$

通过推导可得参数的闭式解：

$$
\theta = (X^T X)^{-1} X^T y
$$

### 2.2 模型实现

实验中，我手动实现了最小二乘法，无需使用第三方库完成矩阵计算。模型训练后，得到了参数 $\theta$，用其对训练集和测试集进行预测。

## 3. 实验结果与分析

### 3.1 性能指标

为了量化模型的预测能力，我计算了以下两个指标：

1. **平均绝对误差 (MAE)**：

$$
MAE = \frac{1}{n} \sum_{i=1}^n |y_i - \hat{y}_i|
$$



2. **均方根误差 (RMSE)**：

$$
RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2}
$$

实验结果如下：

| 数据集 | MAE       | RMSE      |
| ------ | --------- | --------- |
| 训练集 | 41,338.08 | 62,759.72 |
| 测试集 | 39,396.35 | 54,252.67 |

From the experimental results, the values of **MAE** and **RMSE** perform close to each other on both the training and test sets, indicating that the model has some **generalisation ability** and has better prediction performance on unseen data.

**The RMSE of the training set is higher than that of the test set**: it may be due to the inclusion of more complex samples or outliers in the training set, which results in amplified errors.

**Generalisation ability is stable**: the error difference between the training and test sets is not significant, indicating that the model does not have significant **overfitting** or **underfitting** problems

### 3.2 拟合曲线

为了直观展示模型效果，我绘制了训练集和测试集的拟合曲线。

#### 3.2.1 训练集拟合曲线

训练集的拟合曲线展示了预测值与真实值的关系。大部分点分布在理想直线附近，说明模型在训练集上拟合效果较好。

#### 3.2.2 测试集拟合曲线

测试集的拟合曲线与训练集类似，说明模型在测试集上具有较好的预测能力，但部分点偏离理想直线，反映了模型的误差。



## 5. 结论与展望

### 5.1 总结

本实验完成了基于最小二乘法的房价预测任务，模型实现和评估均符合题目要求。实验结果表明，模型能够较好地拟合数据，性能指标在训练集和测试集上表现相近，验证了模型的泛化能力。

### 5.2 局限性

1. 特征选择仅限于 3 个字段，可能遗漏了对预测有显著影响的其他变量；
2. 使用线性回归模型可能无法捕捉房价与特征间的复杂非线性关系。

### 5.3 改进方向

1. 增加特征变量，如房屋年龄、地段等，提升模型的解释能力；
2. 引入非线性模型（如决策树、随机森林），进一步提高预测精度；
3. 使用交叉验证方法优化模型参数，避免数据划分带来的偏差。

