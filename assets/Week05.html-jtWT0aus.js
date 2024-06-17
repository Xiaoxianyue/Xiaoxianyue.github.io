import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as i}from"./app-Cq4ePv-H.js";const e={},l=i(`<h3 id="_1-数据库表-tb-brand" tabindex="-1"><a class="header-anchor" href="#_1-数据库表-tb-brand"><span>1. 数据库表 <code>tb_brand</code></span></a></h3><p>假设我们使用 MySQL 数据库，创建 <code>tb_brand</code> 表：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sql复制代码CREATE TABLE tb_brand (</span></span>
<span class="line"><span>    id INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    name VARCHAR(255) NOT NULL,</span></span>
<span class="line"><span>    description TEXT</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-实体类-brand" tabindex="-1"><a class="header-anchor" href="#_2-实体类-brand"><span>2. 实体类 <code>Brand</code></span></a></h3><p>在 Java 中定义 <code>Brand</code> 类：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>java复制代码public class Brand {</span></span>
<span class="line"><span>    private int id;</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private String description;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 无参构造函数</span></span>
<span class="line"><span>    public Brand() {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 有参构造函数</span></span>
<span class="line"><span>    public Brand(int id, String name, String description) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>        this.description = description;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Getter 和 Setter 方法</span></span>
<span class="line"><span>    public int getId() {</span></span>
<span class="line"><span>        return id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setId(int id) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getDescription() {</span></span>
<span class="line"><span>        return description;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setDescription(String description) {</span></span>
<span class="line"><span>        this.description = description;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Brand{&quot; +</span></span>
<span class="line"><span>                &quot;id=&quot; + id +</span></span>
<span class="line"><span>                &quot;, name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, description=&#39;&quot; + description + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-测试类" tabindex="-1"><a class="header-anchor" href="#_3-测试类"><span>3. 测试类</span></a></h3><p>使用 JDBC 进行数据库操作。假设我们有一个名为 <code>BrandDAO</code> 的数据访问对象类来处理数据库操作。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>java复制代码import java.sql.*;</span></span>
<span class="line"><span>import java.util.ArrayList;</span></span>
<span class="line"><span>import java.util.List;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class BrandDAO {</span></span>
<span class="line"><span>    private static final String URL = &quot;jdbc:mysql://localhost:3306/your_database_name&quot;;</span></span>
<span class="line"><span>    private static final String USER = &quot;your_username&quot;;</span></span>
<span class="line"><span>    private static final String PASSWORD = &quot;your_password&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 查询所有品牌</span></span>
<span class="line"><span>    public List&lt;Brand&gt; getAllBrands() {</span></span>
<span class="line"><span>        List&lt;Brand&gt; brands = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        String sql = &quot;SELECT * FROM tb_brand&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);</span></span>
<span class="line"><span>             Statement stmt = conn.createStatement();</span></span>
<span class="line"><span>             ResultSet rs = stmt.executeQuery(sql)) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            while (rs.next()) {</span></span>
<span class="line"><span>                int id = rs.getInt(&quot;id&quot;);</span></span>
<span class="line"><span>                String name = rs.getString(&quot;name&quot;);</span></span>
<span class="line"><span>                String description = rs.getString(&quot;description&quot;);</span></span>
<span class="line"><span>                brands.add(new Brand(id, name, description));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (SQLException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return brands;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加品牌</span></span>
<span class="line"><span>    public void addBrand(Brand brand) {</span></span>
<span class="line"><span>        String sql = &quot;INSERT INTO tb_brand (name, description) VALUES (?, ?)&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);</span></span>
<span class="line"><span>             PreparedStatement pstmt = conn.prepareStatement(sql)) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            pstmt.setString(1, brand.getName());</span></span>
<span class="line"><span>            pstmt.setString(2, brand.getDescription());</span></span>
<span class="line"><span>            pstmt.executeUpdate();</span></span>
<span class="line"><span>        } catch (SQLException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 根据ID修改品牌</span></span>
<span class="line"><span>    public void updateBrand(Brand brand) {</span></span>
<span class="line"><span>        String sql = &quot;UPDATE tb_brand SET name = ?, description = ? WHERE id = ?&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);</span></span>
<span class="line"><span>             PreparedStatement pstmt = conn.prepareStatement(sql)) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            pstmt.setString(1, brand.getName());</span></span>
<span class="line"><span>            pstmt.setString(2, brand.getDescription());</span></span>
<span class="line"><span>            pstmt.setInt(3, brand.getId());</span></span>
<span class="line"><span>            pstmt.executeUpdate();</span></span>
<span class="line"><span>        } catch (SQLException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 根据ID删除品牌</span></span>
<span class="line"><span>    public void deleteBrand(int id) {</span></span>
<span class="line"><span>        String sql = &quot;DELETE FROM tb_brand WHERE id = ?&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);</span></span>
<span class="line"><span>             PreparedStatement pstmt = conn.prepareStatement(sql)) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            pstmt.setInt(1, id);</span></span>
<span class="line"><span>            pstmt.executeUpdate();</span></span>
<span class="line"><span>        } catch (SQLException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-测试类" tabindex="-1"><a class="header-anchor" href="#_4-测试类"><span>4. 测试类</span></a></h3><p>编写一个测试类来测试上述 CRUD 操作：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>java复制代码public class BrandTest {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        BrandDAO brandDAO = new BrandDAO();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 查询所有品牌</span></span>
<span class="line"><span>        List&lt;Brand&gt; brands = brandDAO.getAllBrands();</span></span>
<span class="line"><span>        for (Brand brand : brands) {</span></span>
<span class="line"><span>            System.out.println(brand);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 添加品牌</span></span>
<span class="line"><span>        Brand newBrand = new Brand();</span></span>
<span class="line"><span>        newBrand.setName(&quot;New Brand&quot;);</span></span>
<span class="line"><span>        newBrand.setDescription(&quot;This is a new brand.&quot;);</span></span>
<span class="line"><span>        brandDAO.addBrand(newBrand);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 修改品牌</span></span>
<span class="line"><span>        Brand updateBrand = new Brand();</span></span>
<span class="line"><span>        updateBrand.setId(1); // 假设要修改的品牌ID为1</span></span>
<span class="line"><span>        updateBrand.setName(&quot;Updated Brand&quot;);</span></span>
<span class="line"><span>        updateBrand.setDescription(&quot;This is an updated description.&quot;);</span></span>
<span class="line"><span>        brandDAO.updateBrand(updateBrand);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 删除品牌</span></span>
<span class="line"><span>        brandDAO.deleteBrand(2); // 假设要删除的品牌ID为2</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行环境准备" tabindex="-1"><a class="header-anchor" href="#运行环境准备"><span>运行环境准备</span></a></h3><p>确保在运行之前已经配置好数据库连接信息，并且你的数据库中已经存在 <code>tb_brand</code> 表。将 JDBC 驱动添加到项目的依赖中（例如：MySQL JDBC 驱动）。</p>`,14),p=[l];function d(r,t){return a(),s("div",null,p)}const u=n(e,[["render",d],["__file","Week05.html.vue"]]),b=JSON.parse('{"path":"/zh/Java_Homework/Week05.html","title":"Java 04","lang":"zh-CN","frontmatter":{"title":"Java 04","icon":"java","date":"2024-06-17T17:04:52.000Z","author":"XiaoXianYue","isOriginal":true,"category":["Java","大二下"],"tag":["Java","大二下"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":null,"description":"1. 数据库表 tb_brand 假设我们使用 MySQL 数据库，创建 tb_brand 表： 2. 实体类 Brand 在 Java 中定义 Brand 类： 3. 测试类 使用 JDBC 进行数据库操作。假设我们有一个名为 BrandDAO 的数据访问对象类来处理数据库操作。 4. 测试类 编写一个测试类来测试上述 CRUD 操作： 运行环境准备...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/Java_Homework/Week05.html"}],["meta",{"property":"og:site_name","content":"奶酪奶酪"}],["meta",{"property":"og:title","content":"Java 04"}],["meta",{"property":"og:description","content":"1. 数据库表 tb_brand 假设我们使用 MySQL 数据库，创建 tb_brand 表： 2. 实体类 Brand 在 Java 中定义 Brand 类： 3. 测试类 使用 JDBC 进行数据库操作。假设我们有一个名为 BrandDAO 的数据访问对象类来处理数据库操作。 4. 测试类 编写一个测试类来测试上述 CRUD 操作： 运行环境准备..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-17T09:05:01.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"大二下"}],["meta",{"property":"article:published_time","content":"2024-06-17T17:04:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-17T09:05:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 04\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-17T17:04:52.000Z\\",\\"dateModified\\":\\"2024-06-17T09:05:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":3,"title":"1. 数据库表 tb_brand","slug":"_1-数据库表-tb-brand","link":"#_1-数据库表-tb-brand","children":[]},{"level":3,"title":"2. 实体类 Brand","slug":"_2-实体类-brand","link":"#_2-实体类-brand","children":[]},{"level":3,"title":"3. 测试类","slug":"_3-测试类","link":"#_3-测试类","children":[]},{"level":3,"title":"4. 测试类","slug":"_4-测试类","link":"#_4-测试类","children":[]},{"level":3,"title":"运行环境准备","slug":"运行环境准备","link":"#运行环境准备","children":[]}],"git":{"createdTime":1718615101000,"updatedTime":1718615101000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":1}]},"readingTime":{"minutes":2.16,"words":647},"filePathRelative":"zh/Java_Homework/Week05.md","localizedDate":"2024年6月17日","excerpt":"<h3>1. 数据库表 <code>tb_brand</code></h3>\\n<p>假设我们使用 MySQL 数据库，创建 <code>tb_brand</code> 表：</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>sql复制代码CREATE TABLE tb_brand (</span></span>\\n<span class=\\"line\\"><span>    id INT AUTO_INCREMENT PRIMARY KEY,</span></span>\\n<span class=\\"line\\"><span>    name VARCHAR(255) NOT NULL,</span></span>\\n<span class=\\"line\\"><span>    description TEXT</span></span>\\n<span class=\\"line\\"><span>);</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,b as data};
