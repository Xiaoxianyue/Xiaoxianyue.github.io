import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as a,b as i,a as e}from"./app-DU3DxG77.js";const s="/assets/image-20240506204452879-CRdxgU1R.png",d="/assets/image-20240506222655870-O9hWta20.png",t="/assets/image-20240506223119885-D0dMNA-1.png",r={},c=i(`<h2 id="_1-delegate-简介" tabindex="-1"><a class="header-anchor" href="#_1-delegate-简介"><span>1. Delegate 简介</span></a></h2><ul><li><p>回调函数是程序指定并以某种方式 &quot;注册 &quot;的函数，然后被另一个程序调用 -</p></li><li><p>C/C++ 我们可以通过函数指针实现回调函数</p></li><li><p>C# -我们可以将方法引用封装在委托中</p></li><li><p>在 C# 中，委托被视为一种引用类型，与类类型类似</p></li><li><p>操作符 new 用于创建委托的新实例</p></li><li><p>委托是对类中方法的安全引用类型</p></li></ul><h3 id="_1-1-使用委托" tabindex="-1"><a class="header-anchor" href="#_1-1-使用委托"><span>1.1 使用委托</span></a></h3><ul><li>委托是 C# 程序中管理事件的重要部分</li><li>事件是指发生的、我们的程序可能需要响应的事情 - 例如：人们按下用户界面上的按钮、时钟滴答作响以及信息通过网络到达</li><li>在每种情况下，我们都需要告诉系统在事件发生时该怎么做</li></ul><h3 id="_1-2-类型安全的委托" tabindex="-1"><a class="header-anchor" href="#_1-2-类型安全的委托"><span>1.2 类型安全的委托</span></a></h3><ul><li><p>类型安全这一短语在这里的意思是，如果方法接受两个整数参数并返回一个字符串，那么该方法的委托将具有完全相同的外观，并且不能以任何其他方式使用。</p></li><li><p>使用这个词是为了将委托与指针之类的东西区分开来，指针在 C 语言等更原始的语言中使用。</p></li><li><p>C/C++ - 可以创建指向方法的指针，但 C 语言环境不知道方法的真实面貌</p></li></ul><h3 id="_1-3-声明委托" tabindex="-1"><a class="header-anchor" href="#_1-3-声明委托"><span>1.3 声明委托</span></a></h3><ul><li>在 C# 中，我们使用关键字 delegate 和封装方法的签名来声明委托</li><li>一些命名约定建议使用以 &quot;Callback &quot;结尾的委托名称 -</li><li>一些书籍没有使用这些约定</li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public delegate void NotifyCallback(decimal balance);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-使用委托-在银行示例中" tabindex="-1"><a class="header-anchor" href="#_1-4-使用委托-在银行示例中"><span>1.4 使用委托（在银行示例中......）</span></a></h3><ul><li><p>考虑 &quot;银行 &quot;示例中的费用计算 - 银行将有许多不同的方法来进行计算，这取决于客户的类型和客户的状态</p></li><li><p>它可能希望有一种方法，可以让程序在运行时选择使用哪种费用计算方法</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public delegate decimal CalculateFee(decimal balance); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>这个委托可以代替接受一个十进制参数并返回一个十进制值的方法。</p></li></ul><h3 id="_1-5-合理使用委托" tabindex="-1"><a class="header-anchor" href="#_1-5-合理使用委托"><span>1.5 合理使用委托</span></a></h3><ul><li>让程序在运行过程中改变自己的操作是一件相当奇怪的事情 -</li><li>所介绍的示例演示了委托是如何让程序将方法引用作为对象来操作的，而不是一种编写程序的好方法 -</li><li>委托经常用于事件处理程序，也用于管理线程</li></ul><h3 id="_1-6-声明位置" tabindex="-1"><a class="header-anchor" href="#_1-6-声明位置"><span>1.6 声明位置</span></a></h3><ul><li><p>调用委托与调用方法类似。</p></li><li><p>-但是，委托并不一定只指向与委托变量定义在同一个类中的方法。 它也可以是其他类和结构中的方法</p></li><li><p>-如果我们在顶层程序（默认情况下在 Program.cs 中表示）中定义了委托，那么和其他类型一样，委托也是在代码末尾（或顶层之前）定义的。</p></li><li><p>但原则上，委托可以在一个类中定义</p></li></ul><h3 id="_1-7" tabindex="-1"><a class="header-anchor" href="#_1-7"><span>1.7</span></a></h3><p>-当你实例化一个委托时，你可以将它的实例与任何具有兼容签名和返回类型的方法关联起来</p><p>-委托用于将方法作为参数传递给其他方法</p><p>-委托类型是密封的-不能从它派生出来</p><h2 id="_2-实现一个委托" tabindex="-1"><a class="header-anchor" href="#_2-实现一个委托"><span>2. 实现一个委托</span></a></h2><h3 id="_2-1-代码" tabindex="-1"><a class="header-anchor" href="#_2-1-代码"><span>2.1 代码</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>delegate int Operation(int x, int y);
class Progarm
{
    static void Main(string[] args)
    {
        Operation operation = Add;
        int x = operation(4, 5);
        Console.WriteLine(x);

        operation = Multiple;
        int y = operation(4, 5);
        Console.WriteLine(y);

        int Add(int x, int y) =&gt; x + y;
        int Multiple(int x, int y) =&gt; x * y;

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种方法是使用构造函数创建委托对象，并将所需的方法传递给该构造函数.</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>delegate int Operation(int x, int y);
class Progarm
{
    static void Main(string[] args)
    {
        Operation operation1 = Add;
        Operation operation2 = new Operation(Add);
      
        int Add(int x, int y) =&gt; x + y;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-将方法签名与委托相匹配" tabindex="-1"><a class="header-anchor" href="#_2-2-将方法签名与委托相匹配"><span>2.2. 将方法签名与委托相匹配</span></a></h3><ul><li><p>如果方法的返回类型和参数集相同，则方法与委托相匹配</p></li><li><p>请记住，ref、in 和 out 修饰符的作用与往常一样，例如：</p></li></ul><p>delegate void SomeDel(inta, double b);</p><p>Matching method:</p><p>void SomeMethod1(intg, double n)</p><p>Not matching :</p>`,30),o=e("p",{return:"",g:"","+":"","n;":""},"double SomeMethod2(int g, double n)",-1),v=e("p",null,"void SomeMethod3(double n, int g)",-1),u=e("p",null,"void SomeMethod4(ref int g, double n)",-1),m=e("p",{g:""},"void SomeMethod5(out int g, double n)",-1),g=i(`<h3 id="_2-3-adding-methods-to-a-delegate" tabindex="-1"><a class="header-anchor" href="#_2-3-adding-methods-to-a-delegate"><span>2.3 Adding methods to a delegate</span></a></h3><p>-委托可以指向具有相同签名和返回类型的多个方法</p><p>-委托中的所有方法都属于一个特殊的列表，称为调用列表</p><p>-当委托被调用时，该列表中的所有方法都会被依次调用。</p><p>-我们可以在该列表中添加多个方法。</p><ul><li>To add methods to a delegate, use the += operation: message += HowAreYou;</li></ul><h3 id="_2-4-removing-methods-from-a-delegate" tabindex="-1"><a class="header-anchor" href="#_2-4-removing-methods-from-a-delegate"><span>2.4 Removing methods from a delegate</span></a></h3><p>•In a similar way, we can remove methods from the delegate using -= operations</p><div class="language-C# line-numbers-mode" data-ext="C#" data-title="C#"><pre class="language-C#"><code>delegate void Message();
class Program
{
    static void Main(string[] args)
    {
        Message message = Hello;
        message += HowAreYou;
        message();//call all methods from message
        message -= HowAreYou;//remove the HowAreYou
        if (message != null) message();//call Hello
        message();

        void Hello() =&gt; Console.WriteLine(&quot;Hello&quot;);
        void HowAreYou() =&gt; Console.WriteLine(&quot;HowAreYou&quot;);
    }
}
//output
Hello
HowAreYou
Hello
Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-combine-delegates-multicast-delegates" tabindex="-1"><a class="header-anchor" href="#_2-5-combine-delegates-multicast-delegates"><span>2.5 Combine delegates (multicast delegates)</span></a></h3><p>Delegates can be combined:</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>delegate void Message();
class Program
{
    static void Main(string[] args)
    {
        Message message1 = Hello;
        Message message2 = HowAreYou;
        Message message3 = message1 + message2;
        message3();
        void Hello() =&gt; Console.WriteLine(&quot;Hello&quot;);
        void HowAreYou() =&gt; Console.WriteLine(&quot;HowAreYou&quot;);
    }
}
//output
Hello
HowAreYou
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-method-invoke" tabindex="-1"><a class="header-anchor" href="#_2-6-method-invoke"><span>2.6 Method Invoke()</span></a></h3><p>Another way of calling a delegate is to use <strong>Invoke()</strong> :</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>delegate void Message();
class Program
{
    static void Main(string[] args)
    {
        Message message1 = Hello;
        Message message2 = HowAreYou;
        Message message3 = message1 + message2;
        message3.Invoke();
        void Hello() =&gt; Console.WriteLine(&quot;Hello&quot;);
        void HowAreYou() =&gt; Console.WriteLine(&quot;HowAreYou&quot;);
    }
}
//same output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Method Invoke() and operator null?</strong></p><figure><img src="`+s+`" alt="image-20240506204452879" tabindex="0" loading="lazy"><figcaption>image-20240506204452879</figcaption></figure><h3 id="_2-7-generic-delegates" tabindex="-1"><a class="header-anchor" href="#_2-7-generic-delegates"><span>2.7 Generic delegates</span></a></h3><p>•Delegates, like other types, can be generic</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>class Program
{
    static void Main(string[] args)
    {
        Operation&lt;decimal, int&gt; squareOperation = Square;
        decimal result1 = squareOperation(5);
        Console.WriteLine(result1);
        Operation&lt;int, int&gt; doubleOperation = Double;
        int result2 = doubleOperation(5);
        Console.WriteLine(result2);

        decimal Square(int n) =&gt; n* n;
        int Double(int n) =&gt; n + n;
    }
}
delegate T Operation&lt;T, K&gt;(K val);//T是输入参数的类型，K是返回值类型！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-异步回调" tabindex="-1"><a class="header-anchor" href="#_2-8-异步回调"><span>2.8 异步回调</span></a></h3><p>将委托作为参数</p><ul><li>由于实例化的委托是一个对象，因此可以将其作为参数传递，或分配给一个属性</li><li>这允许方法接受委托作为参数（并在需要时稍后调用）</li><li>这被称为异步回调： -当&lt;长&gt;进程完成时通知调用者的常用方法</li></ul><figure><img src="`+d+'" alt="image-20240506222655870" tabindex="0" loading="lazy"><figcaption>image-20240506222655870</figcaption></figure><h3 id="_2-9-return-delegates-from-a-method" tabindex="-1"><a class="header-anchor" href="#_2-9-return-delegates-from-a-method"><span>2.9 Return delegates from a method</span></a></h3><p>•the return type of the method is an Operation delegate</p><figure><img src="'+t+`" alt="image-20240506223119885" tabindex="0" loading="lazy"><figcaption>image-20240506223119885</figcaption></figure><h2 id="_3-event" tabindex="-1"><a class="header-anchor" href="#_3-event"><span>3. Event</span></a></h2><ul><li><p>事件使一个类或对象能够在感兴趣的事情发生时通知其他类或对象</p></li><li><p>The class that sends (or raises) the event is called the publisher and the classes that receive (or handle) the event are called subscribers</p></li></ul><p>•事件具有以下属性： •发布者决定何时引发事件；订阅者确定针对事件采取的操作 •一个活动可以有多个订阅者。一个订阅者可以处理多个来自多个发布者的事件 •从不引发没有订阅者的事件 •事件通常用于指示用户操作，如按钮点击或菜单图形用户界面中的选择</p><h3 id="_3-1-实现代码" tabindex="-1"><a class="header-anchor" href="#_3-1-实现代码"><span>3.1 实现代码</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;

// 声明一个委托类型，可引用接受字符串参数并返回void的方法
public delegate void Notify(string message);

// 发布者类，负责声明并触发事件
class Publisher
{
    // 使用 Notify 委托类型声明一个事件
    public event Notify OnProcessCompleted;

    // 模拟处理过程的方法
    public void Process()
    {
        Console.WriteLine(&quot;Processing started...&quot;);

        // 模拟一些工作
        System.Threading.Thread.Sleep(1000);

        // 检查事件是否有订阅者并触发事件，将消息传递给订阅者
        OnProcessCompleted?.Invoke(&quot;Processing completed!&quot;);
    }
}

// 订阅者类，负责订阅事件并处理事件
class Subscriber
{
    // 订阅事件，将事件与处理方法关联
    public void Subscribe(Publisher pub)
    {
        pub.OnProcessCompleted += HandleProcessCompleted;
    }

    // 与 Notify 委托类型匹配的方法，当事件被触发时会调用这个方法
    void HandleProcessCompleted(string message)
    {
        Console.WriteLine(message);
    }
}

class EventExample
{
    static void Main()
    {
        // 创建发布者和订阅者对象
        Publisher pub = new Publisher();
        Subscriber sub = new Subscriber();

        // 订阅发布者的事件
        sub.Subscribe(pub);

        // 开始处理，触发事件
        pub.Process();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-以编程方式订阅事件" tabindex="-1"><a class="header-anchor" href="#_3-2-以编程方式订阅事件"><span>3.2 以编程方式订阅事件</span></a></h3><p>•定义一个事件处理程序方法，其签名与活动的代表签名：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> void HandleCustomEvent(object sender, CustomEventArgs a)  { // Do something useful here }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用加法赋值运算符（+=）to attach an event handler to the event:</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> publisher.RaiseCustomEvent+= HandleCustomEvent;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,37),p=[c,o,v,u,m,g];function b(h,_){return l(),a("div",null,p)}const x=n(r,[["render",b],["__file","Delegates_and_Events.html.vue"]]),y=JSON.parse(`{"path":"/zh/OOP/Delegates_and_Events.html","title":"Delegates and Event","lang":"zh-CN","frontmatter":{"title":"Delegates and Event","icon":"c","date":"2024-05-06T16:50:33.000Z","author":"XiaoXianYue","isOriginal":true,"category":["C#","大二下"],"tag":["C#","大二下"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"1. Delegate 简介 回调函数是程序指定并以某种方式 \\"注册 \\"的函数，然后被另一个程序调用 - C/C++ 我们可以通过函数指针实现回调函数 C# -我们可以将方法引用封装在委托中 在 C# 中，委托被视为一种引用类型，与类类型类似 操作符 new 用于创建委托的新实例 委托是对类中方法的安全引用类型 1.1 使用委托 委托是 C# 程序中管...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/OOP/Delegates_and_Events.html"}],["meta",{"property":"og:site_name","content":"an istj's zone"}],["meta",{"property":"og:title","content":"Delegates and Event"}],["meta",{"property":"og:description","content":"1. Delegate 简介 回调函数是程序指定并以某种方式 \\"注册 \\"的函数，然后被另一个程序调用 - C/C++ 我们可以通过函数指针实现回调函数 C# -我们可以将方法引用封装在委托中 在 C# 中，委托被视为一种引用类型，与类类型类似 操作符 new 用于创建委托的新实例 委托是对类中方法的安全引用类型 1.1 使用委托 委托是 C# 程序中管..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T07:50:19.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:tag","content":"大二下"}],["meta",{"property":"article:published_time","content":"2024-05-06T16:50:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T07:50:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Delegates and Event\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-06T16:50:33.000Z\\",\\"dateModified\\":\\"2024-05-08T07:50:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1. Delegate 简介","slug":"_1-delegate-简介","link":"#_1-delegate-简介","children":[{"level":3,"title":"1.1 使用委托","slug":"_1-1-使用委托","link":"#_1-1-使用委托","children":[]},{"level":3,"title":"1.2 类型安全的委托","slug":"_1-2-类型安全的委托","link":"#_1-2-类型安全的委托","children":[]},{"level":3,"title":"1.3 声明委托","slug":"_1-3-声明委托","link":"#_1-3-声明委托","children":[]},{"level":3,"title":"1.4 使用委托（在银行示例中......）","slug":"_1-4-使用委托-在银行示例中","link":"#_1-4-使用委托-在银行示例中","children":[]},{"level":3,"title":"1.5 合理使用委托","slug":"_1-5-合理使用委托","link":"#_1-5-合理使用委托","children":[]},{"level":3,"title":"1.6 声明位置","slug":"_1-6-声明位置","link":"#_1-6-声明位置","children":[]},{"level":3,"title":"1.7","slug":"_1-7","link":"#_1-7","children":[]}]},{"level":2,"title":"2. 实现一个委托","slug":"_2-实现一个委托","link":"#_2-实现一个委托","children":[{"level":3,"title":"2.1 代码","slug":"_2-1-代码","link":"#_2-1-代码","children":[]},{"level":3,"title":"2.2. 将方法签名与委托相匹配","slug":"_2-2-将方法签名与委托相匹配","link":"#_2-2-将方法签名与委托相匹配","children":[]},{"level":3,"title":"2.3 Adding methods to a delegate","slug":"_2-3-adding-methods-to-a-delegate","link":"#_2-3-adding-methods-to-a-delegate","children":[]},{"level":3,"title":"2.4 Removing methods from a delegate","slug":"_2-4-removing-methods-from-a-delegate","link":"#_2-4-removing-methods-from-a-delegate","children":[]},{"level":3,"title":"2.5 Combine delegates (multicast delegates)","slug":"_2-5-combine-delegates-multicast-delegates","link":"#_2-5-combine-delegates-multicast-delegates","children":[]},{"level":3,"title":"2.6 Method Invoke()","slug":"_2-6-method-invoke","link":"#_2-6-method-invoke","children":[]},{"level":3,"title":"2.7  Generic delegates","slug":"_2-7-generic-delegates","link":"#_2-7-generic-delegates","children":[]},{"level":3,"title":"2.8 异步回调","slug":"_2-8-异步回调","link":"#_2-8-异步回调","children":[]},{"level":3,"title":"2.9  Return delegates from a method","slug":"_2-9-return-delegates-from-a-method","link":"#_2-9-return-delegates-from-a-method","children":[]}]},{"level":2,"title":"3. Event","slug":"_3-event","link":"#_3-event","children":[{"level":3,"title":"3.1 实现代码","slug":"_3-1-实现代码","link":"#_3-1-实现代码","children":[]},{"level":3,"title":"3.2 以编程方式订阅事件","slug":"_3-2-以编程方式订阅事件","link":"#_3-2-以编程方式订阅事件","children":[]}]}],"git":{"createdTime":1714991289000,"updatedTime":1715154619000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":4}]},"readingTime":{"minutes":6.81,"words":2042},"filePathRelative":"zh/OOP/Delegates_and_Events.md","localizedDate":"2024年5月6日","excerpt":"<h2>1. Delegate 简介</h2>\\n<ul>\\n<li>\\n<p>回调函数是程序指定并以某种方式 \\"注册 \\"的函数，然后被另一个程序调用 -</p>\\n</li>\\n<li>\\n<p>C/C++ 我们可以通过函数指针实现回调函数</p>\\n</li>\\n<li>\\n<p>C# -我们可以将方法引用封装在委托中</p>\\n</li>\\n<li>\\n<p>在 C# 中，委托被视为一种引用类型，与类类型类似</p>\\n</li>\\n<li>\\n<p>操作符 new 用于创建委托的新实例</p>\\n</li>\\n<li>\\n<p>委托是对类中方法的安全引用类型</p>\\n</li>\\n</ul>\\n<h3>1.1 使用委托</h3>","autoDesc":true}`);export{x as comp,y as data};
