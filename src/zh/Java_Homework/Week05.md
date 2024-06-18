---
title: Java 04
icon: java
date: 2024-6-17 17:04:52
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



### 1. 数据库表 `tb_brand`

假设我们使用 MySQL 数据库，创建 `tb_brand` 表：

```java
CREATE TABLE tb_brand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
```

### 2. 实体类 `Brand`

在 Java 中定义 `Brand` 类：

```java
public class Brand {
    private int id;
    private String name;
    private String description;

    // 无参构造函数
    public Brand() {}

    // 有参构造函数
    public Brand(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    // Getter 和 Setter 方法
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Brand{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
```

### 3. 测试类

使用 JDBC 进行数据库操作。假设我们有一个名为 `BrandDAO` 的数据访问对象类来处理数据库操作。

```java
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BrandDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/your_database_name";
    private static final String USER = "your_username";
    private static final String PASSWORD = "your_password";

    // 查询所有品牌
    public List<Brand> getAllBrands() {
        List<Brand> brands = new ArrayList<>();
        String sql = "SELECT * FROM tb_brand";

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                String description = rs.getString("description");
                brands.add(new Brand(id, name, description));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return brands;
    }

    // 添加品牌
    public void addBrand(Brand brand) {
        String sql = "INSERT INTO tb_brand (name, description) VALUES (?, ?)";

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, brand.getName());
            pstmt.setString(2, brand.getDescription());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // 根据ID修改品牌
    public void updateBrand(Brand brand) {
        String sql = "UPDATE tb_brand SET name = ?, description = ? WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, brand.getName());
            pstmt.setString(2, brand.getDescription());
            pstmt.setInt(3, brand.getId());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // 根据ID删除品牌
    public void deleteBrand(int id) {
        String sql = "DELETE FROM tb_brand WHERE id = ?";

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setInt(1, id);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

### 4. 测试类

编写一个测试类来测试上述 CRUD 操作：

```java
public class BrandTest {
    public static void main(String[] args) {
        BrandDAO brandDAO = new BrandDAO();

        // 查询所有品牌
        List<Brand> brands = brandDAO.getAllBrands();
        for (Brand brand : brands) {
            System.out.println(brand);
        }

        // 添加品牌
        Brand newBrand = new Brand();
        newBrand.setName("New Brand");
        newBrand.setDescription("This is a new brand.");
        brandDAO.addBrand(newBrand);

        // 修改品牌
        Brand updateBrand = new Brand();
        updateBrand.setId(1); // 假设要修改的品牌ID为1
        updateBrand.setName("Updated Brand");
        updateBrand.setDescription("This is an updated description.");
        brandDAO.updateBrand(updateBrand);

        // 删除品牌
        brandDAO.deleteBrand(2); // 假设要删除的品牌ID为2
    }
}
```

### 运行环境准备

确保在运行之前已经配置好数据库连接信息，并且你的数据库中已经存在 `tb_brand` 表。将 JDBC 驱动添加到项目的依赖中（例如：MySQL JDBC 驱动）。