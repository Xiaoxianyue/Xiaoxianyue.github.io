---
title: 武汉理工——股票
icon: English
date: 2025-7-21 10:24:22
author: XiaoXianYue
isOriginal: true
category: 
    - 武汉理工项目
tag:
    - 武汉理工项目
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

## 1. 模块化介绍

::: info 推荐阅读顺序

| 阶段     | 文件                                                   | 理解重点                       |
| -------- | ------------------------------------------------------ | ------------------------------ |
| 🌱 阶段一 | `main.py` → `SpImpl.py`                                | 启动流程、策略注册方式         |
| 🌱 阶段二 | `base_strategy.py` → `dual_moving_average_strategy.py` | 策略结构、继承方式             |
| 🌿 阶段三 | `quote_manager.py` → `data.py` → `snapshot.py`         | 行情是如何流入策略的           |
| 🌿 阶段四 | `trade_executor.py` → `trade_manager.py`               | 策略发单是如何执行与跟踪的     |
| 🌳 阶段五 | `callback.py` → `position_manager.py`                  | 成交、状态如何反向驱动系统更新 |
| 🌳 阶段六 | `ConfigRead.py`, `kmax.py`, `type.py`, `utils.py`      | 配置与工具底层逻辑支持         |

:::



### 1.1 代码逻辑

```bash
kmax_6.13/
├── configs/                         # 配置和底层动态库
│   ├── HSNsqApi.dll                # Windows 下的底层接口 DLL
│   ├── kmax.pyd                    # Python 封装接口，实际调用 C++ 库
│   └── sdk_config.ini              # SDK 启动配置项，如IP/账号
│
├── kmaxapi/                        # 封装行情+交易回调的接口层
│   ├── callback.py                 # 行情/成交/状态等的回调事件处理
│   ├── data.py                     # 封装行情订阅、处理
│   ├── kmax.py                     # 核心 API 统一调用封装（连接底层接口）
│   ├── model.py                    # 自定义数据结构类，如订单、行情等
│   ├── test.py                     # 接口测试用例
│   ├── type.py                     # 定义常量/枚举类型（交易方向、状态等）
│   └── util.py                     # 时间转换、结构体序列化等工具函数
│
├── libs/                           # 提供不同 Python 版本的封装库
│   ├── py37/
│   │   ├── kmax.pyd
│   │   └── kmax.so
│   └── py38/
│       ├── kmax.pyd
│       └── kmax.so
│
├── log/                            # 运行时日志
│   ├── *.log                       # 每次运行或日期生成的交易/系统日志
│
├── market_data_manager/           # 行情管理模块
│   └── quote_manager.py           # 处理订阅、缓存、分发实时行情（封装了 data.py）
│
├── models/                         # 数据结构定义
│   └── snapshot.py                # 定义快照结构，简化策略读取字段
│
├── position_data_manager/         # 仓位管理模块
│   └── position_manager.py        # 实时更新账户资产/仓位状态
│
├── strategy/                       # 策略实现模块
│   ├── base_strategy.py           # 所有策略的抽象基类，统一接口（on_tick/on_bar等）
│   └── dual_moving_average_strategy.py  # 双均线策略示例
│
├── trade/                          # 下单执行与管理模块
│   ├── trade_executor.py          # 封装交易动作的实际执行逻辑（发单、撤单）
│   └── trade_manager.py           # 管理交易状态、跟踪委托/成交、处理回报
│
├── ConfigRead.py                   # 读取配置文件 sdk_config.ini
├── main.py                         # 启动程序入口，初始化系统，加载策略等
├── SpImpl.py                       # 策略实例化与挂接逻辑（strategy 的封装者）
├── utils.py                        # 通用工具函数集合
└── update.txt                      # 项目更新日志说明
```



### 1.2 `configs/`

- `HSNsqApi.dll`：Windows 环境下调用的底层动态库（通常是第三方券商提供的 SDK，比如恒生、盛立、飞创）。
- `kmax.pyd`：是 Python 封装好的接口模块，用于调用 `dll` 中的方法（可通过 `import kmax` 直接用）。
- `sdk_config.ini`：配置文件，包含连接网关、认证信息、默认订阅等启动参数。



### 1.3 `main`->`spilmpl`

- `main.py`：负责初始化交易与行情接口、注册回调类 `NsqSpiImpl` 并启动整个量化系统。

- `SpiImpl.py`（`NsqSpiImpl`）：负责登录行情系统、订阅市场数据，并在接收行情回调时驱动策略运行与交易执行。



### 1.4 Strategy

#### base_strategy

- Base_strategy 是所有策略的父类，提供了统一的接口。要求所有策略必须实现 `on_new_ticks(...)` 方法，并返回 `TradeSignal`（`BUY/SELL/HOLD`）。

#### dual_moving_average_strategy

**核心逻辑**

| 判断条件                                 | 操作建议                 |
| ---------------------------------------- | ------------------------ |
| 当前短期均线（MA10）上穿长期均线（MA30） | 如果持仓未超限 → **BUY** |
| 当前短期均线下穿长期均线                 | 如果已有仓位 → **SELL**  |
| 否则                                     | **HOLD**（不动）         |

**两个文件体现的核心思想**

| 特点           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| ✳️ 模板方法模式 | `BaseStrategy` 提供统一接口，子类实现具体策略                |
| 🔁 数据驱动执行 | 每次接收到行情 tick，就会调用 `on_new_ticks(...)` 进行策略判断 |
| 📦 可插拔式策略 | 新策略只需继承 `BaseStrategy`，实现核心判断即可接入系统      |
| 🔒 风控嵌入     | 策略内部嵌入了持仓判断，防止超买或误卖                       |