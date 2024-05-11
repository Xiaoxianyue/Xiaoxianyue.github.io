import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,b as a}from"./app-Dj9lEr-e.js";const l="/assets/image-20240507100114460-DulnvrU_.png",d={},s=a(`<h2 id="_1-匿名方法" tabindex="-1"><a class="header-anchor" href="#_1-匿名方法"><span>1. 匿名方法</span></a></h2><ul><li>匿名方法与委托密切相关。</li><li>匿名方法用于创建委托的副本</li><li>匿名方法不能独立存在</li><li>匿名方法的定义以委托关键字开始：</li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>MessageHandler handler = delegate(string mes)
{
    Console.WriteLine(mes)
}
handler(&quot;hello Sherry!&quot;)
delegate void MessageHandler(string message)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名方法的另一个例子是将委托所代表的参数作为参数进行转移</p><figure><img src="`+l+`" alt="image-20240507100114460" tabindex="0" loading="lazy"><figcaption>image-20240507100114460</figcaption></figure><p>匿名方法 -如果匿名方法使用参数，这些参数必须与委托的参数相匹配。如果匿名方法不需要参数，则带参数的括号会降低：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> MessageHandler handler = delegate 
 {
      Console.WriteLine(&quot;Anonymous method&quot;);
 };
 handler(&quot;hello world!&quot;); // Anonymous method
 delegate void MessageHandler(string message);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与传统方法一样，匿名也可以返回结果：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>Operation operation = delegate(int x, int y)
{
    return x + y;
}
int result = operation(4,5);
Console.WriteLine(result);
delegate int Operation(int x,int y)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名方法可以访问外部定义的所有变量。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>int z = 8;
Operation operation = delegate(int x, int y)
{
    return x + y + z;
}
int result = operation(4,5);
Console.WriteLine(result);
delegate int Operation(int x,int y)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这个代码详细展现了使用命名方法调用委托和使用匿名方法调用委托：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;

delegate void NumberChanger(int n);
namespace DelegateAppl
{
    class TestDelegate
    {
        static int num = 10;
        public static void AddNum(int p)
        {
            num += p;
            Console.WriteLine(&quot;Named Method: {0}&quot;, num);
        }

        public static void MultNum(int q)
        {
            num *= q;
            Console.WriteLine(&quot;Named Method: {0}&quot;, num);
        }

        static void Main(string[] args)
        {
            // 使用匿名方法创建委托实例
            NumberChanger nc = delegate(int x)
            {
               Console.WriteLine(&quot;Anonymous Method: {0}&quot;, x);
            };
            
            // 使用匿名方法调用委托
            nc(10);

            // 使用命名方法实例化委托
            nc =  new NumberChanger(AddNum);
            
            // 使用命名方法调用委托
            nc(5);

            // 使用另一个命名方法实例化委托
            nc =  new NumberChanger(MultNum);
            
            // 使用命名方法调用委托
            nc(2);
            Console.ReadKey();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-lamda" tabindex="-1"><a class="header-anchor" href="#_2-lamda"><span>2. Lamda</span></a></h2><h3 id="_2-1-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#_2-1-lambda-表达式"><span>2.1 Lambda 表达式</span></a></h3><ul><li>Lambda 表达式代表匿名方法的简化记录</li><li>Lambda 表达式允许创建简洁的简洁方法，这些方法可以返回一些值，并可以作为参数传递给其他方法</li><li>要创建一个 lambda 表达式，你需要在 lambda 运算符 =&gt; 的左侧指定输入参数（如果有的话），并将表达式或语句块放在另一侧：</li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>(list_parameters) =&gt; expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>Message hello = () =&gt; Console.WriteLine(&quot;Hello&quot;);
 hello();       // Hello
 delegate void Message();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-参数" tabindex="-1"><a class="header-anchor" href="#_2-2-参数"><span>2.2 参数</span></a></h3><h4 id="_2-2-1-参数类型" tabindex="-1"><a class="header-anchor" href="#_2-2-1-参数类型"><span>2.2.1 参数类型</span></a></h4><p>不需要定义类型：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> Operation sum = (x, y) =&gt; Console.WriteLine($&quot;{x} + {y} = {x + y}&quot;);
 sum(22, 14);    // 22 + 14 = 36
 delegate void Operation(int x, int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在隐式类型 var 的情况下：</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sum = (x, y) =&gt; Console.WriteLine($&quot;{x} + {y} = {x + y}&quot;);   //Error!
 sum(22, 14);    // 22 + 14 = 36
 delegate void Operation(int x, int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要明确规定类型：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sum = (int x, int y)=&gt;Console.WriteLine($&quot;{x}+{y}={x+y}&quot;);
sum(22,14);
delegate void Operation(int x, int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-参数个数和设置默认参数" tabindex="-1"><a class="header-anchor" href="#_2-2-2-参数个数和设置默认参数"><span>2.2.2 参数个数和设置默认参数</span></a></h4><p>当 Lambda 是唯一参数时，省略括号：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>printHandler print = message=&gt;Console.WriteLine(message);
print(&quot;Hello&quot;)
print(&quot;sherry&quot;)
delegate void printHandler(string message)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以设置一个默认参数值：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var welcome = (string message = &quot;hello&quot;) =&gt; Console.WriteLine(message);
welcome(&quot;hello world&quot;); // hello world printed 
welcome();              // hello printed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-lambda-参数返回" tabindex="-1"><a class="header-anchor" href="#_2-2-3-lambda-参数返回"><span>2.2.3 Lambda 参数返回</span></a></h4><p>Lambda 表达式可返回结果 -返回的结果可在 lambda 操作符后指定：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sum = (int x, int y) =&gt; x + y;
int result1 = sum(4, 5);
Console.WriteLine(result1);

Operation muliple = (x , y)=&gt; x * y;
int result2 = muliple(4, 5);
Console.WriteLine(result2);

delegate int Operation(int x, int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-当 Lambda 有多个表达式或 {} 内有一个表达式时，使用运算符 return：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var substract = (int x, int y) =&gt;
{
    if (x &gt; y) return x - y;
    else return y - x;
};
int result1 = substract(7, 3);
int result2 = substract(-16, 4);
Console.WriteLine(result1); 
Console.WriteLine(result2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-action-adding-removing" tabindex="-1"><a class="header-anchor" href="#_2-3-action-adding-removing"><span>2.3 action adding &amp; removing</span></a></h3><p>Lambda 代表一个委托，因此功能与添加/删除操作相同：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> varhello = () =&gt; Console.WriteLine(&quot;the CUC&quot;);
 varmessage = () =&gt; Console.Write(&quot;Hello &quot;);
 message += () =&gt; Console.WriteLine(&quot;World&quot;); //add anonymous 
//lambda expression
 message += hello;   // add lambda expression fromhello
 message += Print;   // add method
 message?.Invoke();// if nothing more to add /remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lambda代表一个委托，所以参数传递是一致的</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> intSum(int[] numbers, IsEqualfunc) {
 intresult = 0;
 foreach(intiin numbers)     {
 if (func(i))
 result += i;
 }
 return result;
 }
 delegate bool IsEqual(int x);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>•方法的返回类型是委托 •Lambda表达式对应于该委托：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>Operation SelectOperation(OperationType opType)
{
    switch(opType)
    {
        case OperationType.Add: return(x,y)=&gt; x + y;
        case OperationType.subtract: return(x,y)=&gt; x - y;
        default:return (x, y) =&gt; x * y;

    }

        
}
enum OperationType
{
    Add, subtract,multiple
}
delegate int Operation (int x, int y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),t=[s];function r(c,v){return i(),n("div",null,t)}const o=e(d,[["render",r],["__file","A_L.html.vue"]]),b=JSON.parse(`{"path":"/zh/OOP/A_L.html","title":"Anonymous Methods and Lambda Expressions","lang":"zh-CN","frontmatter":{"title":"Anonymous Methods and Lambda Expressions","icon":"c","date":"2024-05-07T09:35:42.000Z","author":"XiaoXianYue","isOriginal":true,"category":["C#","大二下"],"tag":["C#","大二下"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"1. 匿名方法 匿名方法与委托密切相关。 匿名方法用于创建委托的副本 匿名方法不能独立存在 匿名方法的定义以委托关键字开始： 匿名方法的另一个例子是将委托所代表的参数作为参数进行转移 image-20240507100114460image-20240507100114460 匿名方法 -如果匿名方法使用参数，这些参数必须与委托的参数相匹配。如果匿名方...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/OOP/A_L.html"}],["meta",{"property":"og:site_name","content":"an istj's zone"}],["meta",{"property":"og:title","content":"Anonymous Methods and Lambda Expressions"}],["meta",{"property":"og:description","content":"1. 匿名方法 匿名方法与委托密切相关。 匿名方法用于创建委托的副本 匿名方法不能独立存在 匿名方法的定义以委托关键字开始： 匿名方法的另一个例子是将委托所代表的参数作为参数进行转移 image-20240507100114460image-20240507100114460 匿名方法 -如果匿名方法使用参数，这些参数必须与委托的参数相匹配。如果匿名方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-07T14:30:54.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:tag","content":"大二下"}],["meta",{"property":"article:published_time","content":"2024-05-07T09:35:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-07T14:30:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Anonymous Methods and Lambda Expressions\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-07T09:35:42.000Z\\",\\"dateModified\\":\\"2024-05-07T14:30:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1. 匿名方法","slug":"_1-匿名方法","link":"#_1-匿名方法","children":[]},{"level":2,"title":"2. Lamda","slug":"_2-lamda","link":"#_2-lamda","children":[{"level":3,"title":"2.1 Lambda 表达式","slug":"_2-1-lambda-表达式","link":"#_2-1-lambda-表达式","children":[]},{"level":3,"title":"2.2 参数","slug":"_2-2-参数","link":"#_2-2-参数","children":[{"level":4,"title":"2.2.1 参数类型","slug":"_2-2-1-参数类型","link":"#_2-2-1-参数类型","children":[]},{"level":4,"title":"2.2.2 参数个数和设置默认参数","slug":"_2-2-2-参数个数和设置默认参数","link":"#_2-2-2-参数个数和设置默认参数","children":[]},{"level":4,"title":"2.2.3 Lambda 参数返回","slug":"_2-2-3-lambda-参数返回","link":"#_2-2-3-lambda-参数返回","children":[]}]},{"level":3,"title":"2.3 action adding & removing","slug":"_2-3-action-adding-removing","link":"#_2-3-action-adding-removing","children":[]}]}],"git":{"createdTime":1701251856000,"updatedTime":1715092254000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":4}]},"readingTime":{"minutes":3.54,"words":1061},"filePathRelative":"zh/OOP/A_L.md","localizedDate":"2024年5月7日","excerpt":"<h2>1. 匿名方法</h2>\\n<ul>\\n<li>匿名方法与委托密切相关。</li>\\n<li>匿名方法用于创建委托的副本</li>\\n<li>匿名方法不能独立存在</li>\\n<li>匿名方法的定义以委托关键字开始：</li>\\n</ul>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>MessageHandler handler = delegate(string mes)\\n{\\n    Console.WriteLine(mes)\\n}\\nhandler(\\"hello Sherry!\\")\\ndelegate void MessageHandler(string message)\\n</code></pre></div>","autoDesc":true}`);export{o as comp,b as data};
