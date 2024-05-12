import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as s}from"./app-Cic-4uJl.js";const l="/assets/image-20240506142602009-D256WY32.png",a="/assets/image-20240506143745929-BTvH9tgS.png",d="/assets/image-20240506144555151-DqZ3Nwqm.png",t="/assets/image-20240506144848209-4ZxEYlFF.png",c="/assets/image-20240506145305541-DpVroTM6.png",r="/assets/image-20240506161655748-D_pG1748.png",v="/assets/image-20240506163707452-BOpC9xRW.png",o={},u=s('<h2 id="_1-boxing-and-unboxing" tabindex="-1"><a class="header-anchor" href="#_1-boxing-and-unboxing"><span>1. Boxing and Unboxing</span></a></h2><p>Boxing is the process of converting a value type to the type object. Unboxing extracts（提取） the value type from the object</p><figure><img src="'+l+`" alt="image-20240506142602009" tabindex="0" loading="lazy"><figcaption>image-20240506142602009</figcaption></figure><p>Boxing is implicit隐性的; unboxing is explicit显性的</p><h3 id="_1-1-boxing" tabindex="-1"><a class="header-anchor" href="#_1-1-boxing"><span>1.1 Boxing</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>class Program
{
    static void Main(string[] args)
    {
        int i = 0;
        object o = i; // Boxing copies the value of i into object o
        i = 123;// Change the value of i
        Console.WriteLine(i);
        Console.WriteLine(o);
    }
}
//output 
123
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-unboxing" tabindex="-1"><a class="header-anchor" href="#_1-2-unboxing"><span>1.2 Unboxing</span></a></h3><figure><img src="`+a+'" alt="image-20240506143745929" tabindex="0" loading="lazy"><figcaption>image-20240506143745929</figcaption></figure><figure><img src="'+d+'" alt="image-20240506144555151" tabindex="0" loading="lazy"><figcaption>image-20240506144555151</figcaption></figure><p>？？？？</p><figure><img src="'+t+'" alt="image-20240506144848209" tabindex="0" loading="lazy"><figcaption>image-20240506144848209</figcaption></figure><p>？？？？？</p><blockquote><p>boixng 相当于把值类型转换成了引用类型为了方便修改，unboxing相当于把引用类型拿出来使用。</p></blockquote><h2 id="_2-is-as" tabindex="-1"><a class="header-anchor" href="#_2-is-as"><span>2. “Is”&amp;“As”</span></a></h2><h3 id="_2-1-is-在运行时评估类型兼容性。" tabindex="-1"><a class="header-anchor" href="#_2-1-is-在运行时评估类型兼容性。"><span>2.1 <strong>is 在运行时评估类型兼容性。</strong></span></a></h3><p>&quot;is &quot;决定对象实例或表达式的结果是否可以转换为指定类型： <em>expr is type。</em> 其中，expr 是求值为某种类型实例的表达式，type 是要将 expr 的结果转换成的类型名称。</p><figure><img src="'+c+`" alt="image-20240506145305541" tabindex="0" loading="lazy"><figcaption>image-20240506145305541</figcaption></figure><h3 id="_2-2-as-operator" tabindex="-1"><a class="header-anchor" href="#_2-2-as-operator"><span>2.2 as operator</span></a></h3><p>as 在兼容引用(compatible reference)类型或可归零(nullable)类型之间执行某些类型的转换.as operator 就像一个转换操作。不过，<strong>如果转换不成功，as 将返回空值，而不是引发异常</strong>： <em>expression as type</em>.</p><h4 id="_2-2-1-nullable" tabindex="-1"><a class="header-anchor" href="#_2-2-1-nullable"><span>2.2.1 Nullable</span></a></h4><p>可空值类型。可空类型可以表示其基础值类型的正确值范围，外加一个额外的空值：</p><p>E.g. Nullable（bool）拥有的值有True False 和null</p><p>为数字和布尔类型赋值为空的功能在处理数据库和其他包含可能无法赋值的元素的数据类型时尤其有用</p><h2 id="_3-一个例子说明generics的作用" tabindex="-1"><a class="header-anchor" href="#_3-一个例子说明generics的作用"><span>3. 一个例子说明generics的作用</span></a></h2><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;
class Person
{
    public object Id { get; set; }
    public string Name { get; set; }
    public Person(object id, string name)
    {
        Id = id;
        Name = name;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Person tom = new Person(546, &quot;Tom&quot;);//boxing!!!
        Person Joh = new Person(&quot;xxy777&quot;, &quot;John&quot;);
        int tomid = (int)tom.Id;//unboxing!!!!
        string Johid = (string)Joh.Id;
        Console.WriteLine(tomid);
        Console.WriteLine(Johid);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们注意到这里Id的类型多种多样。我们也可以用泛型解决这个问题！！</p><h2 id="_4-generics" tabindex="-1"><a class="header-anchor" href="#_4-generics"><span>4. Generics</span></a></h2><h3 id="_4-1-use-generic-class-person" tabindex="-1"><a class="header-anchor" href="#_4-1-use-generic-class-person"><span>4.1 Use generic class Person</span></a></h3><ul><li>类 <code>Person&lt;T&gt;</code> 被声明为通用类型 - 类型 <code>&lt;T&gt;</code> 是将要使用的类型，可以是对象字符串，也可以是任何其他类或结构体</li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;
class Person&lt;T&gt;
{
    public T Id { get; set; }
    public string Name { get; set; }
    public Person(T id, string name)
    {
        Id = id;
        Name = name;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Person&lt;int&gt; tom = new Person&lt;int&gt;(546, &quot;Tom&quot;);//no boxing!!!
        Person&lt;string&gt; Joh = new Person&lt;string&gt;(&quot;xxy777&quot;, &quot;John&quot;);
        int tomid = (int)tom.Id;//no unboxing!!!!
        string Johid = (string)Joh.Id;
        Console.WriteLine(tomid);
        Console.WriteLine(Johid);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>无装箱/拆箱，无类型安全问题</p></li><li><p>通用类是不变的！</p></li><li><p>因为没有unboxing和boxing，这样也是可以的：</p></li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;
class Person&lt;T&gt;
{
    public T Id { get; set; }
    public string Name { get; set; }
    public Person(T id, string name)
    {
        Id = id;
        Name = name;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Person&lt;int&gt; tom = new Person&lt;int&gt;(546, &quot;Tom&quot;);//no boxing!!!
        Person&lt;string&gt; Joh = new Person&lt;string&gt;(&quot;xxy777&quot;, &quot;John&quot;);
        Console.WriteLine(tom.Id);
        Console.WriteLine(Joh.Id);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-type-can-be-generic-type" tabindex="-1"><a class="header-anchor" href="#_4-2-type-can-be-generic-type"><span>4.2 Type can be generic type</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;
class Person&lt;T&gt;
{
    public T Id { get; set; }
    public string Name { get; set; }
    public Person(T id, string name)
    {
        Id = id;
        Name = name;
    }
}
class Company&lt;P&gt;
{
    public P CEO { get; set; }
    public Company(P ceo) { CEO = ceo; }
}
class Program
{
    static void Main(string[] args)
    {
        Person&lt;int&gt; tom = new Person&lt;int&gt;(546, &quot;Tom&quot;);//boxing!!!
        Company&lt;Person&lt;int&gt;&gt; microsoft= new Company&lt;Person&lt;int&gt;&gt;(tom);
        Console.WriteLine(microsoft.CEO.Id);
        Console.WriteLine(microsoft.CEO.Name);//CEO别忘记写
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-generics-and-collections" tabindex="-1"><a class="header-anchor" href="#_4-3-generics-and-collections"><span>4.3 Generics and Collections</span></a></h3><p>The most common use of generics is to create collection classes.</p><ul><li>泛型的概念是指定一种通用操作，然后以适合每种操作的方式将其应用于不同的上下文中--例如：--我们知道，创建数组时，程序员必须准确指定它包含多少个元素--如果我们的数组大小为 10000，并试图添加 10001 个客户....-</li><li>我们可以声明一个 &quot;oversized &quot;数组，或者...使用泛型。</li></ul><figure><img src="`+r+`" alt="image-20240506161655748" tabindex="0" loading="lazy"><figcaption>image-20240506161655748</figcaption></figure><p>集合类型为 &quot;int&quot;--添加任何非 &quot;int &quot;类型的内容都会产生错误（例如，添加字符串 s）--不会浪费装箱时间，并保证了类型安全.</p><h4 id="_4-3-1-在数组中的应用" tabindex="-1"><a class="header-anchor" href="#_4-3-1-在数组中的应用"><span>4.3.1 在数组中的应用</span></a></h4><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>class Bank&lt;T&gt;
{
    public T[] client;
    public Bank(T[] _client)
    {
        client = _client;
    }
}
class Program
{
    static void Main(string[] args)
    {
        Bank&lt;int&gt; bank1 = new Bank&lt;int&gt;(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, });
        Bank&lt;string&gt; bank2 = new Bank&lt;string&gt;(new string[] { &quot;Mary&quot;, &quot;Jay&quot; });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么打印这两数组????</p><p>添加索引器！！</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>class Bank&lt;T&gt;
{
    public T[] client;
    public Bank(T[] client)
    {
        this.client = client;
    }
    public T this[int index]
    {
        get { return client[index]; }
        set { client[index] = value; }
    }
}
class Program
{
    static void Main(string[] args)
    {
        Bank&lt;int&gt; bank1 = new Bank&lt;int&gt;(new[] { 1, 2, 3 });
        Console.WriteLine(bank1[0]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-泛型-优点" tabindex="-1"><a class="header-anchor" href="#_4-4-泛型-优点"><span>4.4 泛型 - 优点</span></a></h3><ul><li>使用泛型可以最大限度地提高代码重用性、类型安全性和性能</li><li>泛型最常见的用途是创建集合类 \\</li><li>我们可以创建自己的泛型接口、类、方法、事件和委托</li><li>要设置默认值（引用类型为空，值类型为 0），请使用运算符 default(T)</li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>class Person&lt;T&gt;
{
    T id = default(T);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认值是干什么用的？？</p><h3 id="_4-5-generic-classes-inheritance" tabindex="-1"><a class="header-anchor" href="#_4-5-generic-classes-inheritance"><span>4.5 Generic classes inheritance</span></a></h3><p>• One generic class can inherit from another</p><figure><img src="`+v+`" alt="image-20240506163707452" tabindex="0" loading="lazy"><figcaption>image-20240506163707452</figcaption></figure><h2 id="_5-where" tabindex="-1"><a class="header-anchor" href="#_5-where"><span>5. Where</span></a></h2><p><strong>Generic classes and restrictions</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>class Account
{
    public int Id { get; private set; } // A/C number
    public Account(int _id)
    {
        Id = _id;
    }
}
class Bank&lt;T&gt; where T : Account
{
    T[] accounts;
    public Bank(T[] accs)
    {
        this.accounts = accs;
    }

    public void AccountsInfo()
    {
        foreach (Account acc in accounts)
        {
            Console.WriteLine(&quot;A/C : &quot; + acc.Id);
        }
    }
}
class Program
{
    static void Main(string[] args)
    {
        Account[] accounts = new Account[] {
             new Account(1030001),
             new Account(1030005),
             new Account(1030009) };
        Bank&lt;Account&gt; bank = new Bank&lt;Account&gt;(accounts);
        bank.AccountsInfo();
        Console.ReadLine();
    }
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Generic Methods</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>abstract class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Person(string lName, string fName)
    {
        FirstName = fName;
        LastName = lName;
    }
    public abstract void Display();
}

class Client : Person {
    public Client(string lName, string fName)
 : base(fName, lName)
    {
    }
    public override void Display()
    {
        Console.WriteLine(FirstName + &quot; &quot; + LastName);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Client client2 = new Client(&quot;John&quot;, &quot;Rembo&quot;);
        Display&lt;Client&gt;(client2);
        Console.ReadLine();
    }
    private static void Display&lt;T&gt;(T person) where T : Person
    {
        person.Display();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),m=[u];function b(g,p){return e(),n("div",null,m)}const _=i(o,[["render",b],["__file","Generics.html.vue"]]),f=JSON.parse(`{"path":"/zh/OOP/Generics.html","title":"Generics","lang":"zh-CN","frontmatter":{"title":"Generics","icon":"c","date":"2024-05-06T14:22:12.000Z","author":"XiaoXianYue","isOriginal":true,"category":["C#","大二下"],"tag":["C#","大二下"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"1. Boxing and Unboxing Boxing is the process of converting a value type to the type object. Unboxing extracts（提取） the value type from the object image-20240506142602009image-202...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/OOP/Generics.html"}],["meta",{"property":"og:site_name","content":"an istj's zone"}],["meta",{"property":"og:title","content":"Generics"}],["meta",{"property":"og:description","content":"1. Boxing and Unboxing Boxing is the process of converting a value type to the type object. Unboxing extracts（提取） the value type from the object image-20240506142602009image-202..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T16:32:49.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:tag","content":"大二下"}],["meta",{"property":"article:published_time","content":"2024-05-06T14:22:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-11T16:32:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Generics\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-06T14:22:12.000Z\\",\\"dateModified\\":\\"2024-05-11T16:32:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1.  Boxing and Unboxing","slug":"_1-boxing-and-unboxing","link":"#_1-boxing-and-unboxing","children":[{"level":3,"title":"1.1 Boxing","slug":"_1-1-boxing","link":"#_1-1-boxing","children":[]},{"level":3,"title":"1.2 Unboxing","slug":"_1-2-unboxing","link":"#_1-2-unboxing","children":[]}]},{"level":2,"title":"2. “Is”&“As”","slug":"_2-is-as","link":"#_2-is-as","children":[{"level":3,"title":"2.1 is 在运行时评估类型兼容性。","slug":"_2-1-is-在运行时评估类型兼容性。","link":"#_2-1-is-在运行时评估类型兼容性。","children":[]},{"level":3,"title":"2.2 as operator","slug":"_2-2-as-operator","link":"#_2-2-as-operator","children":[{"level":4,"title":"2.2.1 Nullable","slug":"_2-2-1-nullable","link":"#_2-2-1-nullable","children":[]}]}]},{"level":2,"title":"3. 一个例子说明generics的作用","slug":"_3-一个例子说明generics的作用","link":"#_3-一个例子说明generics的作用","children":[]},{"level":2,"title":"4. Generics","slug":"_4-generics","link":"#_4-generics","children":[{"level":3,"title":"4.1 Use generic class Person","slug":"_4-1-use-generic-class-person","link":"#_4-1-use-generic-class-person","children":[]},{"level":3,"title":"4.2  Type can be generic type","slug":"_4-2-type-can-be-generic-type","link":"#_4-2-type-can-be-generic-type","children":[]},{"level":3,"title":"4.3  Generics and Collections","slug":"_4-3-generics-and-collections","link":"#_4-3-generics-and-collections","children":[{"level":4,"title":"4.3.1 在数组中的应用","slug":"_4-3-1-在数组中的应用","link":"#_4-3-1-在数组中的应用","children":[]}]},{"level":3,"title":"4.4 泛型 - 优点","slug":"_4-4-泛型-优点","link":"#_4-4-泛型-优点","children":[]},{"level":3,"title":"4.5 Generic classes inheritance","slug":"_4-5-generic-classes-inheritance","link":"#_4-5-generic-classes-inheritance","children":[]}]},{"level":2,"title":"5. Where","slug":"_5-where","link":"#_5-where","children":[]}],"git":{"createdTime":1701435902000,"updatedTime":1715445169000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":10}]},"readingTime":{"minutes":4.56,"words":1369},"filePathRelative":"zh/OOP/Generics.md","localizedDate":"2024年5月6日","excerpt":"<h2>1.  Boxing and Unboxing</h2>\\n<p>Boxing is the process of converting a value type to the type  object. Unboxing extracts（提取） the value type from the object</p>\\n<figure><figcaption>image-20240506142602009</figcaption></figure>\\n<p>Boxing is implicit隐性的; unboxing is explicit显性的</p>\\n<h3>1.1 Boxing</h3>","autoDesc":true}`);export{_ as comp,f as data};
