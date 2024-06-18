---
title: Java 05
icon: java
date: 2024-6-16 11:24:23
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

### 环境准备

#### 数据库表 `tb_brand`

我们需要在数据库中创建一个表 `tb_brand`。假设我们使用的是 MySQL 数据库，表结构如下：

```sql
CREATE TABLE tb_brand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    ordered INT NOT NULL,
    description TEXT,
    status INT NOT NULL
);
```

#### 实体类 `Brand`

我们需要一个与数据库表对应的实体类 `Brand`。假设我们使用的是 Java 语言：

```java
public class Brand {
    private int id;
    private String brandName;
    private String companyName;
    private int ordered;
    private String description;
    private int status;

    // Getters and Setters
    // ...
}
```

### 数据库操作

我们需要一个 *`DAO`*（数据访问对象）类来处理对数据库表 `tb_brand` 的 CRUD 操作。以下是使用 `JDBC` 进行数据库操作的示例代码。

#### 查询所有数据

1. 获取 `Connection`
2. 定义 SQL：`SELECT * FROM tb_brand`
3. 获取 `PreparedStatement` 对象
4. 设置参数：不需要
5. 执行 `SQL`
6. 处理结果：`List<Brand>`
7. 释放资源

```java
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BrandDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/yourdatabase";
    private static final String USER = "yourusername";
    private static final String PASSWORD = "yourpassword";

    public List<Brand> getAllBrands() throws SQLException {
        List<Brand> brands = new ArrayList<>();
        String sql = "SELECT * FROM tb_brand";
        
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            
            while (rs.next()) {
                Brand brand = new Brand();
                brand.setId(rs.getInt("id"));
                brand.setBrandName(rs.getString("brand_name"));
                brand.setCompanyName(rs.getString("company_name"));
                brand.setOrdered(rs.getInt("ordered"));
                brand.setDescription(rs.getString("description"));
                brand.setStatus(rs.getInt("status"));
                brands.add(brand);
            }
        }
        return brands;
    }
}
```

添加品牌

```java
public boolean addBrand(Brand brand) throws SQLException {
    String sql = "INSERT INTO tb_brand (brand_name, company_name, ordered, description, status) VALUES (?, ?, ?, ?, ?)";
    
    try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, brand.getBrandName());
        stmt.setString(2, brand.getCompanyName());
        stmt.setInt(3, brand.getOrdered());
        stmt.setString(4, brand.getDescription());
        stmt.setInt(5, brand.getStatus());
        
        int rowsInserted = stmt.executeUpdate();
        return rowsInserted > 0;
    }
}
```

根据ID修改品牌

```java
public boolean updateBrand(Brand brand) throws SQLException {
    String sql = "UPDATE tb_brand SET brand_name = ?, company_name = ?, ordered = ?, description = ?, status = ? WHERE id = ?";
    
    try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setString(1, brand.getBrandName());
        stmt.setString(2, brand.getCompanyName());
        stmt.setInt(3, brand.getOrdered());
        stmt.setString(4, brand.getDescription());
        stmt.setInt(5, brand.getStatus());
        stmt.setInt(6, brand.getId());
        
        int rowsUpdated = stmt.executeUpdate();
        return rowsUpdated > 0;
    }
}
```

根据 ID 删除品牌

```java
public boolean deleteBrand(int id) throws SQLException {
    String sql = "DELETE FROM tb_brand WHERE id = ?";
    
    try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
         PreparedStatement stmt = conn.prepareStatement(sql)) {
        
        stmt.setInt(1, id);
        
        int rowsDeleted = stmt.executeUpdate();
        return rowsDeleted > 0;
    }
}
```

### 测试类

我们还需要一个测试类来验证上述 CRUD 操作是否正确。

```java
public class BrandDAOTest {
    public static void main(String[] args) {
        BrandDAO dao = new BrandDAO();

        try {
            // 查询所有数据
            List<Brand> brands = dao.getAllBrands();
            for (Brand brand : brands) {
                System.out.println(brand);
            }

            // 添加品牌
            Brand newBrand = new Brand();
            newBrand.setBrandName("New Brand");
            newBrand.setCompanyName("New Company");
            newBrand.setOrdered(1);
            newBrand.setDescription("New Description");
            newBrand.setStatus(1);
            boolean added = dao.addBrand(newBrand);
            System.out.println("Brand added: " + added);

            // 修改品牌
            newBrand.setBrandName("Updated Brand");
            boolean updated = dao.updateBrand(newBrand);
            System.out.println("Brand updated: " + updated);

            // 删除品牌
            boolean deleted = dao.deleteBrand(newBrand.getId());
            System.out.println("Brand deleted: " + deleted);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

```

此代码通过 JDBC 实现了对 `tb_brand` 表的基本 CRUD 操作，包括获取所有品牌、添加新品牌、根据 ID 修改品牌以及根据 ID 删除品牌。测试类通过简单的主函数来验证每个操作的正确性。