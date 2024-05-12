import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as i}from"./app-Cic-4uJl.js";const a={},l=i(`<h2 id="_1-method" tabindex="-1"><a class="header-anchor" href="#_1-method"><span>1. Method</span></a></h2><h3 id="_1-1-coventry" tabindex="-1"><a class="header-anchor" href="#_1-1-coventry"><span>1.1 Coventry</span></a></h3><p>知识点：</p><ol><li><p>怎么创建一个方法？返回类型？</p></li><li><p>参数按值传递？按引用传递？（ref out in）</p></li><li><p>Recursion？</p></li><li><p>变量作用域？</p></li></ol><h3 id="_1-2-aiyc" tabindex="-1"><a class="header-anchor" href="#_1-2-aiyc"><span>1.2 AIYC</span></a></h3><ol><li><p>方法的声明？调用？</p></li><li><p>怎么在方法里添加参数？调用带参数的方法？多参数方法？</p></li><li><p>可选参数（为参数设置默认值的情况）？</p></li><li><p>命名参数？</p></li><li><p>参数的传递。同Coventry</p></li><li><p>方法的重载，以及重载调用（能不能返回值类型不同参数类型相同？）</p></li><li><p>递归</p></li></ol><h2 id="_2-class" tabindex="-1"><a class="header-anchor" href="#_2-class"><span>2. Class</span></a></h2><h3 id="_1-1-coventry-1" tabindex="-1"><a class="header-anchor" href="#_1-1-coventry-1"><span>1.1 Coventry</span></a></h3><ol><li><p>enum？调用enum里的值？</p></li><li><p>Structure。创建一个Structure？结构的初始值怎么赋？调用结构实例里的值？</p></li><li><p>Class。创建一个Class？类的构造函数和实例化？</p></li><li><p>怎么调用private变量？</p></li><li><p>static关键字</p></li><li><p>Default constructor长什么样子</p></li><li><p>重载（overloading）</p></li><li><p>access modifier。</p></li></ol><h3 id="_1-2-aiyc-1" tabindex="-1"><a class="header-anchor" href="#_1-2-aiyc-1"><span>1.2 AIYC</span></a></h3><ol><li>什么是类什么是对象</li><li>heap and stack</li><li>创建一个类？实例化一个对象？</li><li>封装。</li><li>不带参数的构造方法。（类的实例一被创造出来的时候就会调用并实现构造方法）代码记得吗？</li><li>带参数的构造方法。与上面的分别举例。</li></ol><p>下面输出什么?</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>
  <span class="token punctuation">{</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token class-name">Dog</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>get set用法.赋值和读取？好处？自动创建？</li></ol><h2 id="_3-intheritance" tabindex="-1"><a class="header-anchor" href="#_3-intheritance"><span>3. Intheritance</span></a></h2><h3 id="_3-1-coventry" tabindex="-1"><a class="header-anchor" href="#_3-1-coventry"><span>3.1 Coventry</span></a></h3><ol><li>继承实现的代码。</li><li>子类实现父类的代码（base）</li><li>子类override父类的代码</li><li>抽象方法</li></ol><h2 id="_4-interface" tabindex="-1"><a class="header-anchor" href="#_4-interface"><span>4. Interface</span></a></h2><ol><li>upcasting downcasting</li><li>as &amp; is</li></ol><h2 id="_5-generics" tabindex="-1"><a class="header-anchor" href="#_5-generics"><span>5. Generics</span></a></h2><ol><li><p>Boxing and Unboxing</p></li><li><p>完成一个多态的代码</p></li><li><p>在数组中的应用</p></li><li><p>在继承中的运用</p></li><li><p>where 关键字</p></li></ol><h2 id="_6-练习-atm机" tabindex="-1"><a class="header-anchor" href="#_6-练习-atm机"><span>6. 练习：ATM机</span></a></h2><p>请设定您的初始账户余额: 9999999 请输入您的PIN码以继续：1314 PIN码错误，请重试。 请输入您的PIN码以继续：1234</p><p>欢迎使用ATM机系统</p><ol><li>查看余额</li><li>存款</li><li>取款</li><li>退出 请输入您的选择（1-4）：1 您的账户余额为：$9999999.00</li></ol><p>欢迎使用ATM机系统</p><ol><li>查看余额</li><li>存款</li><li>取款</li><li>退出 请输入您的选择（1-4）：2 请输入存款金额：1 存款成功！您的新余额为：$10000000.00</li></ol><p>欢迎使用ATM机系统</p><ol><li>查看余额</li><li>存款</li><li>取款</li><li>退出 请输入您的选择（1-4）：3 请输入取款金额：1 取款成功！您的新余额为：$9999999.00</li></ol><p>欢迎使用ATM机系统</p><ol><li>查看余额</li><li>存款</li><li>取款</li><li>退出 请输入您的选择（1-4）：4 感谢使用我们的ATM服务，再见！</li></ol><p>Process finished with exit code 0</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;

class Account
{
    public int balance;
    public string pin;

    public Account(int balance)
    {
        this.balance = balance;
    }
    public bool Checkpin(string pin)
    {
        return pin == &quot;123&quot;;
    }

    public int Deposit()
    {
        Console.WriteLine(&quot;请输入存款金额：&quot;);
        int position = Convert.ToInt32(Console.ReadLine());
        balance += position;
        return balance;
    }

    public int Withdrawal()
    {
        Console.WriteLine(&quot;请输入取款金额：&quot;);
        int negation = Convert.ToInt32(Console.ReadLine());
        if (negation &gt; balance)
        {
            Console.WriteLine(&quot;余额不足！&quot;);
            return balance;
        }
        balance -= negation;
        return balance;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Account account = new Account(999999);
        Console.WriteLine(&quot;请输入你的密码：&quot;);
        account.pin = Console.ReadLine();

        if (account.Checkpin(account.pin))
        {
            bool exit = false;

            while (!exit)
            {
                Console.WriteLine(&quot;欢迎使用ATM机！&quot;);
                Console.WriteLine(&quot;1.查看余额&quot;);
                Console.WriteLine(&quot;2.存款&quot;);
                Console.WriteLine(&quot;3.取款&quot;);
                Console.WriteLine(&quot;4.退出&quot;);
                Console.WriteLine(&quot;请选择需要的服务的序号：&quot;);
                int n = Convert.ToInt32(Console.ReadLine());

                switch (n)
                {
                    case 1:
                        Console.WriteLine(&quot;当前余额：&quot; + account.balance);
                        break;
                    case 2:
                        Console.WriteLine(&quot;存款后余额：&quot; + account.Deposit());
                        break;
                    case 3:
                        Console.WriteLine(&quot;取款后余额：&quot; + account.Withdrawal());
                        break;
                    case 4:
                        Console.WriteLine(&quot;感谢使用我们的ATM服务，再见！&quot;);
                        exit = true;
                        break;
                    default:
                        Console.WriteLine(&quot;无效的选项，请重新选择！&quot;);
                        break;
                }
            }
        }
        else
        {
            Console.WriteLine(&quot;密码错误&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-题目名称-温度监控系统" tabindex="-1"><a class="header-anchor" href="#_7-题目名称-温度监控系统"><span>7. 题目名称：温度监控系统</span></a></h2><p><strong>问题描述：</strong> 设计一个温度监控系统，当温度超出设定的安全范围时，系统应自动发送警报。你需要使用C#来实现这个功能。</p><p><strong>基本要求：</strong></p><ol><li>创建一个名为<code>TemperatureSensor</code>的类，它包含一个名为<code>CurrentTemperature</code>的属性和一个名为<code>TemperatureChanged</code>的事件。</li><li><code>CurrentTemperature</code>的设值器中应触发<code>TemperatureChanged</code>事件，只有在温度与上次读数不同时才触发。</li><li>创建一个名为<code>Alarm</code>的类，该类订阅<code>TemperatureSensor</code>的<code>TemperatureChanged</code>事件，并在温度超过100度或低于-10度时发出警报。</li></ol><p><strong>进阶要求：</strong></p><ul><li>添加一个功能，允许<code>Alarm</code>类在警报时记录日志到一个文件中。</li><li>提供一个用户界面（可以是命令行界面），允许用户输入温度值并显示警报状态。</li></ul><p><strong>评估标准：</strong></p><ul><li>代码的清晰度和可读性。</li><li>事件处理机制的正确实现。</li><li>进阶功能的完整性。</li></ul><div class="language-C# line-numbers-mode" data-ext="C#" data-title="C#"><pre class="language-C#"><code>using System;
using System.IO;

// 温度传感器类
public class TemperatureSensor
{
    private int _currentTemperature;

    // 温度变化时触发的事件
    public event EventHandler&lt;int&gt; TemperatureChanged;

    // 当前温度的属性
    public int CurrentTemperature
    {
        get { return _currentTemperature; }
        set
        {
            // 当温度发生变化时，触发事件
            if (_currentTemperature != value)
            {
                _currentTemperature = value;
                TemperatureChanged?.Invoke(this, _currentTemperature);
            }
        }
    }
}

// 警报系统类
public class Alarm
{
    public Alarm(TemperatureSensor sensor)
    {
        // 订阅温度变化事件
        sensor.TemperatureChanged += OnTemperatureChanged;
    }

    private void OnTemperatureChanged(object sender, int newTemperature)
    {
        // 温度超出设定范围时，触发警报
        if (newTemperature &gt; 100 || newTemperature &lt; -10)
        {
            Console.WriteLine($&quot;警报: 温度异常！当前温度为 {newTemperature} 度。&quot;);
            LogTemperature(newTemperature);
        }
        else
        {
            Console.WriteLine($&quot;当前温度为 {newTemperature} 度。一切正常。&quot;);
        }
    }

    // 记录温度异常到日志文件
    private void LogTemperature(int temperature)
    {
        string path = &quot;TemperatureLog.txt&quot;;
        using (StreamWriter writer = new StreamWriter(path, true))
        {
            writer.WriteLine($&quot;警报时间: {DateTime.Now}, 温度: {temperature}&quot;);
        }
    }
}

// 主程序
class Program
{
    static void Main()
    {
        TemperatureSensor sensor = new TemperatureSensor();
        Alarm alarm = new Alarm(sensor);

        // 循环获取用户输入的温度并更新传感器状态
        while (true)
        {
            Console.WriteLine(&quot;请输入新的温度值 (整数)：&quot;);
            int newTemperature;
            if (int.TryParse(Console.ReadLine(), out newTemperature))
            {
                sensor.CurrentTemperature = newTemperature;
            }
            else
            {
                Console.WriteLine(&quot;请输入有效的整数温度值！&quot;);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>事件声明：</strong> <code>public event EventHandler&lt;int&gt; TemperatureChanged;</code></p><p>在 <code>TemperatureSensor</code> 类中，声明了一个名为<code>TemperatureChanged</code>的事件。这里使用了系统提供的泛型委托<code>EventHandler&lt;T&gt;</code>，其定义为一个接受两个参数（一个 <code>object</code> 和一个泛型参数 <code>T</code> ）的方法。在这个例子中，<code>T</code> 被指定为 <code>int</code> 类型，对应温度值。</p></li><li><p><strong>事件的订阅</strong>: <code>sensor.TemperatureChanged += OnTemperatureChanged;</code></p><p>在 <code>Alarm</code> 类的构造函数中，将 <code>OnTemperatureChanged</code> 方法绑定到 <code>TemperatureSensor</code> 的 <code>TemperatureChanged</code> 事件。这里的 <code>+=</code> 操作符用于添加一个事件处理器，即把 <code>OnTemperatureChanged</code> 方法作为委托绑定到 <code>TemperatureChanged</code> 事件。</p></li><li><p><strong>事件处理方法</strong>: <code>private void OnTemperatureChanged(object sender, int newTemperature)</code></p><p><code>OnTemperatureChanged</code> 是 <code>Alarm</code> 类定义的一个方法，用来响应温度变化的事件。此方法的签名与 <code>EventHandler&lt;int&gt;</code> 委托的要求一致（接受一个 <code>object</code> 和一个 <code>int</code> 作为参数），因此它可以作为事件的处理方法。</p></li><li><p><code>TemperatureChanged?.Invoke(this, _currentTemperature);</code>：</p><ul><li>Invoke：触发事件</li><li><strong>this</strong>: 关键字 <code>this</code> 代表当前类的实例，也就是 <code>TemperatureSensor</code> 类的一个对象。在事件触发时，传递 <code>this</code> 作为事件的发送者或来源。这是事件模式中常见的做法，允许事件的接收者知道事件是从哪个对象发出的。</li><li><strong>_currentTemperature</strong>: 这个是 <code>TemperatureSensor</code> 类中的私有字段，存储当前的温度值。当温度值发生变化时，这个新的温度值通过事件参数传递给事件的处理方法。在这个案例中，<code>_currentTemperature</code> 是一个整数（int），代表当前的温度。</li></ul></li></ul><h2 id="_8-泛型" tabindex="-1"><a class="header-anchor" href="#_8-泛型"><span>8. 泛型</span></a></h2><h3 id="_8-1" tabindex="-1"><a class="header-anchor" href="#_8-1"><span>8.1</span></a></h3><p>C# 中的泛型是一种非常强大的特性，它允许你编写代码时使用占位符代替具体的数据类型。使用泛型可以增强代码的可重用性、类型安全和性能。下面是关于C# 泛型的一些基础概念和使用方式：</p><ol><li>什么是泛型？</li></ol><p>泛型允许你定义一个类、接口或方法时延迟指定一个或多个类型。这些类型将在创建类的实例或调用方法时指定。通过这种方式，你可以使用一个类或方法处理多种数据类型，而不需要为每种数据类型编写重复的代码。</p><ol start="2"><li>泛型类和接口</li></ol><p>泛型类是在定义类时不指定具体类型的类。泛型接口类似。它们都使用类型参数，通常用尖括号（<code>&lt;&gt;</code>）表示。例如，定义一个可以存储任何类型的简单泛型类 <code>Box</code>：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Box<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> content<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Pack</span><span class="token punctuation">(</span><span class="token class-name">T</span> item<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        content <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">T</span> <span class="token function">Unpack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> content<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>T</code> 是一个占位符，代表将来某个具体的数据类型。使用这个类时，你可以指定任何类型：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">Box<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> intBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Box<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
intBox<span class="token punctuation">.</span><span class="token function">Pack</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Box<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> stringBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Box<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stringBox<span class="token punctuation">.</span><span class="token function">Pack</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>泛型方法</li></ol><p>泛型也可以用于方法。泛型方法允许在调用方法时指定一个或多个类型参数。例如：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">Swap</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">ref</span> <span class="token class-name">T</span> a<span class="token punctuation">,</span> <span class="token keyword">ref</span> <span class="token class-name">T</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">T</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code>Swap</code> 方法可以用于交换任何类型的两个值：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">int</span></span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">Swap</span><span class="token punctuation">(</span><span class="token keyword">ref</span> x<span class="token punctuation">,</span> <span class="token keyword">ref</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// x = 2, y = 1</span>

<span class="token class-name"><span class="token keyword">string</span></span> first <span class="token operator">=</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> second <span class="token operator">=</span> <span class="token string">&quot;second&quot;</span><span class="token punctuation">;</span>
<span class="token function">Swap</span><span class="token punctuation">(</span><span class="token keyword">ref</span> first<span class="token punctuation">,</span> <span class="token keyword">ref</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// first = &quot;second&quot;, second = &quot;first&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>泛型约束</li></ol><p>泛型约束用于限制泛型类型参数可以表示的数据类型。这可以通过 <code>where</code> 关键字实现。例如，你可能只希望某个泛型类能用于实现了某个接口的类型：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Box<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token keyword">where</span> <span class="token class-name">T</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IComparable</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> content<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsGreaterThan</span><span class="token punctuation">(</span><span class="token class-name">T</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> content<span class="token punctuation">.</span><span class="token function">CompareTo</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中的 <code>Box</code> 类只接受实现了 <code>IComparable</code> 接口的类型作为泛型参数。</p><ol start="5"><li>泛型和性能</li></ol><p>使用泛型可以提高应用程序的性能。泛型在编译时就已经确定了类型，因此执行时不需要进行额外的类型检查或装箱操作（将值类型转换为引用类型）。这使得泛型版本的代码通常比它们的非泛型对应版本更快、更高效。</p><h3 id="_8-2-题目描述" tabindex="-1"><a class="header-anchor" href="#_8-2-题目描述"><span>8.2 题目描述</span></a></h3><p>创建一个泛型类 <code>Repository&lt;T&gt;</code>，该类将用作数据存储的简单泛型仓库。你需要实现以下功能：</p><ol><li><strong>添加元素</strong>：通过一个 <code>Add</code> 方法添加新元素到仓库中。</li><li><strong>检索元素</strong>：通过 <code>GetAt</code> 方法根据索引检索仓库中的元素。</li><li><strong>获取总数</strong>：一个属性 <code>Count</code> 用来获取仓库中元素的总数。</li></ol><h3 id="要求" tabindex="-1"><a class="header-anchor" href="#要求"><span>要求</span></a></h3><ol><li>使用泛型类 <code>Repository&lt;T&gt;</code> 来实现存储机制，内部可以使用 <code>List&lt;T&gt;</code> 来存储数据。</li><li>确保类中的方法和属性正确使用泛型类型 <code>T</code>。</li></ol><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;
using System.Collections.Generic;

// 定义一个泛型类 Repository&lt;T&gt;，其中 T 是泛型类型参数
public class Repository&lt;T&gt;
{
    // 使用 List&lt;T&gt; 来存储数据，这里的 T 将代表任意指定的数据类型
    private List&lt;T&gt; items = new List&lt;T&gt;();

    // Add 方法允许向仓库中添加新元素
    public void Add(T item)
    {
        items.Add(item); // 将元素添加到 List&lt;T&gt; 的尾部
    }

    // GetAt 方法根据索引返回仓库中的元素
    public T GetAt(int index)
    {
        if (index &gt;= 0 &amp;&amp; index &lt; items.Count) // 检查索引是否有效
        {
            return items[index]; // 返回指定索引的元素
        }
        // 如果索引无效，抛出异常
        throw new ArgumentOutOfRangeException(nameof(index), &quot;Index is out of range.&quot;);
    }

    // Count 属性返回仓库中元素的总数
    public int Count
    {
        get { return items.Count; } // 直接返回内部 List 的 Count 属性
    }
}

// 主程序入口
public class Program
{
    public static void Main()
    {
        // 创建一个用于存储字符串的 Repository 实例
        Repository&lt;string&gt; stringRepository = new Repository&lt;string&gt;();
        stringRepository.Add(&quot;Hello&quot;); // 添加字符串 &quot;Hello&quot;
        stringRepository.Add(&quot;World&quot;); // 添加字符串 &quot;World&quot;

        // 输出存储的字符串和仓库中的元素总数
        Console.WriteLine(stringRepository.GetAt(0)); // 输出: Hello
        Console.WriteLine(stringRepository.GetAt(1)); // 输出: World
        Console.WriteLine(&quot;Total Items: &quot; + stringRepository.Count); // 输出: Total Items: 2

        // 创建一个用于存储整数的 Repository 实例
        Repository&lt;int&gt; intRepository = new Repository&lt;int&gt;();
        intRepository.Add(1); // 添加整数 1
        intRepository.Add(2); // 添加整数 2

        // 输出存储的整数和仓库中的元素总数
        Console.WriteLine(intRepository.GetAt(0)); // 输出: 1
        Console.WriteLine(intRepository.GetAt(1)); // 输出: 2
        Console.WriteLine(&quot;Total Items: &quot; + intRepository.Count); // 输出: Total Items: 2
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70),t=[l];function c(o,r){return e(),s("div",null,t)}const u=n(a,[["render",c],["__file","review.html.vue"]]),v=JSON.parse(`{"path":"/zh/OOP/review.html","title":"Coventry-Summary","lang":"zh-CN","frontmatter":{"title":"Coventry-Summary","icon":"c","date":"2024-05-11T10:19:07.000Z","author":"XiaoXianYue","isOriginal":true,"category":["C#","大二下"],"tag":["C#","大二下"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"1. Method 1.1 Coventry 知识点： 怎么创建一个方法？返回类型？ 参数按值传递？按引用传递？（ref out in） Recursion？ 变量作用域？ 1.2 AIYC 方法的声明？调用？ 怎么在方法里添加参数？调用带参数的方法？多参数方法？ 可选参数（为参数设置默认值的情况）？ 命名参数？ 参数的传递。同Coventry 方法的...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/OOP/review.html"}],["meta",{"property":"og:site_name","content":"an istj's zone"}],["meta",{"property":"og:title","content":"Coventry-Summary"}],["meta",{"property":"og:description","content":"1. Method 1.1 Coventry 知识点： 怎么创建一个方法？返回类型？ 参数按值传递？按引用传递？（ref out in） Recursion？ 变量作用域？ 1.2 AIYC 方法的声明？调用？ 怎么在方法里添加参数？调用带参数的方法？多参数方法？ 可选参数（为参数设置默认值的情况）？ 命名参数？ 参数的传递。同Coventry 方法的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-12T16:06:52.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"C#"}],["meta",{"property":"article:tag","content":"大二下"}],["meta",{"property":"article:published_time","content":"2024-05-11T10:19:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-12T16:06:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Coventry-Summary\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-11T10:19:07.000Z\\",\\"dateModified\\":\\"2024-05-12T16:06:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1. Method","slug":"_1-method","link":"#_1-method","children":[{"level":3,"title":"1.1 Coventry","slug":"_1-1-coventry","link":"#_1-1-coventry","children":[]},{"level":3,"title":"1.2 AIYC","slug":"_1-2-aiyc","link":"#_1-2-aiyc","children":[]}]},{"level":2,"title":"2. Class","slug":"_2-class","link":"#_2-class","children":[{"level":3,"title":"1.1 Coventry","slug":"_1-1-coventry-1","link":"#_1-1-coventry-1","children":[]},{"level":3,"title":"1.2 AIYC","slug":"_1-2-aiyc-1","link":"#_1-2-aiyc-1","children":[]}]},{"level":2,"title":"3. Intheritance","slug":"_3-intheritance","link":"#_3-intheritance","children":[{"level":3,"title":"3.1 Coventry","slug":"_3-1-coventry","link":"#_3-1-coventry","children":[]}]},{"level":2,"title":"4. Interface","slug":"_4-interface","link":"#_4-interface","children":[]},{"level":2,"title":"5. Generics","slug":"_5-generics","link":"#_5-generics","children":[]},{"level":2,"title":"6. 练习：ATM机","slug":"_6-练习-atm机","link":"#_6-练习-atm机","children":[]},{"level":2,"title":"7. 题目名称：温度监控系统","slug":"_7-题目名称-温度监控系统","link":"#_7-题目名称-温度监控系统","children":[]},{"level":2,"title":"8. 泛型","slug":"_8-泛型","link":"#_8-泛型","children":[{"level":3,"title":"8.1","slug":"_8-1","link":"#_8-1","children":[]},{"level":3,"title":"8.2 题目描述","slug":"_8-2-题目描述","link":"#_8-2-题目描述","children":[]},{"level":3,"title":"要求","slug":"要求","link":"#要求","children":[]}]}],"git":{"createdTime":1715411121000,"updatedTime":1715530012000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":5}]},"readingTime":{"minutes":9.97,"words":2992},"filePathRelative":"zh/OOP/review.md","localizedDate":"2024年5月11日","excerpt":"<h2>1. Method</h2>\\n<h3>1.1 Coventry</h3>\\n<p>知识点：</p>\\n<ol>\\n<li>\\n<p>怎么创建一个方法？返回类型？</p>\\n</li>\\n<li>\\n<p>参数按值传递？按引用传递？（ref out in）</p>\\n</li>\\n<li>\\n<p>Recursion？</p>\\n</li>\\n<li>\\n<p>变量作用域？</p>\\n</li>\\n</ol>\\n<h3>1.2 AIYC</h3>\\n<ol>\\n<li>\\n<p>方法的声明？调用？</p>\\n</li>\\n<li>\\n<p>怎么在方法里添加参数？调用带参数的方法？多参数方法？</p>\\n</li>\\n<li>\\n<p>可选参数（为参数设置默认值的情况）？</p>\\n</li>\\n<li>\\n<p>命名参数？</p>\\n</li>\\n<li>\\n<p>参数的传递。同Coventry</p>\\n</li>\\n<li>\\n<p>方法的重载，以及重载调用（能不能返回值类型不同参数类型相同？）</p>\\n</li>\\n<li>\\n<p>递归</p>\\n</li>\\n</ol>","autoDesc":true}`);export{u as comp,v as data};
