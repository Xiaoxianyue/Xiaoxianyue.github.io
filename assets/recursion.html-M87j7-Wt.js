import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as n}from"./app-TFXyFeP4.js";const h="/assets/7ae0d21ba60137d1e6e9854820fa728-B0uwGKdu.png",l="/assets/1f99a46354511f9733326e23e94315b-C2Mjqp6q.png",e="/assets/841396074c4ad3d8193000d7ea55de6-DX6eVy4K.png",k={},t=n('<h2 id="_1-递归的定义" tabindex="-1"><a class="header-anchor" href="#_1-递归的定义"><span>1. 递归的定义</span></a></h2><h3 id="_1-1-图文释义" tabindex="-1"><a class="header-anchor" href="#_1-1-图文释义"><span>1.1 图文释义</span></a></h3><p>从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事！故事是什么呢？『从前有座山，山里有座庙，庙里有个老和尚，正在给小和尚讲故事！故事是什么呢？』……这也许是最经典（口耳相传）的童谣了，充分展现了自然语言的魅力及其无限可能性，可以永远以这种递归的方式继续下去。。。</p><img src="'+h+'" alt="7ae0d21ba60137d1e6e9854820fa728" style="zoom:50%;"><p>俄文艺理论家车尔尼雪夫斯基曾说过： 艺术来源于生活，却又高于生活！</p><p>生活如此，编程世界亦如此 - 没有生活原形或者现象，何来程序创作的源头和灵感？正因此，Python 中出现了这样一种函数 - 递归函数。</p><p>大多数情况下，我们见到的是一个函数调用其他函数。除此之外，<mark>函数还可以自我调用，这种类型的函数被称为递归函数</mark>。</p><p>递归的一个视觉效果呈现 - 捧着画框的蒙娜丽莎：</p><figure><img src="'+l+'" alt="1f99a46354511f9733326e23e94315b" tabindex="0" loading="lazy"><figcaption>1f99a46354511f9733326e23e94315b</figcaption></figure><h3 id="_1-2-定义和注意事项" tabindex="-1"><a class="header-anchor" href="#_1-2-定义和注意事项"><span>1.2 定义和注意事项</span></a></h3><p>递归，在数学和计算科学里，是指在函数定义中调用函数自身的方法。</p><p>在使用递归时，需要注意以下几点：</p><ol><li>递归是在过程中或函数里调用自身</li><li>边界条件：必须有一个明确的递归结束条件，称为递归出口。（确定递归到何时终止，称为递归出口）</li><li>递归模式：大问题拆分为小问题，也称为递归体；</li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>注意</strong>：切勿忘记递归出口，避免函数无限调用！</p></div><h2 id="_2-典型的算法" tabindex="-1"><a class="header-anchor" href="#_2-典型的算法"><span>2. 典型的算法</span></a></h2><h3 id="_2-1-阶乘" tabindex="-1"><a class="header-anchor" href="#_2-1-阶乘"><span>2.1 阶乘</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">n!</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> n-2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> x</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> n-1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>也可以用递归的方式定义：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">n! </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)! x n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+e+`" alt="841396074c4ad3d8193000d7ea55de6" tabindex="0" loading="lazy"><figcaption>841396074c4ad3d8193000d7ea55de6</figcaption></figure><p>其中 <code>n &gt;= 1</code>,并且 <code>0! = 1</code></p><p>由于简单、清晰、因此常常被做成递归的示例。</p><p><strong>PS</strong> 除阶乘以外，还有很多算法可以用递归处理，例如：斐波那契数列、汉诺塔。</p><p>完整代码：</p><ol><li><p>不用递归实现：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    fac </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        fac </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> fac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用递归实现：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理解：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> factorial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><strong>练习：</strong></p><p>假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">f(n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) = f(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">n-1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) + f(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">n-2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>逻辑：</p><ol><li>假设第一步走一下，后面要走的步数就是（n - 1)；而假设第一步走两下，后面要走的步数就是（n - 2) 。</li><li>第一步走了，开始第二步：同样的情况，第二步走一下，后面要走的步数就是（（n - 1) - 1）或者（（n - 2）- 1）；第二步走两下，后面要走的步数就是（（n - 1) - 2） 或者（（n - 2）- 2）</li><li>以此类推，把所有的情况加在一起。</li></ol><h3 id="_2-2-高斯求和" tabindex="-1"><a class="header-anchor" href="#_2-2-高斯求和"><span>2.2 高斯求和：</span></a></h3><p>典型的高斯求和问题，<code>1+2+3+4+…+99+100</code>，不使用递归的话，我们可以用循环，这么做：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    summary </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而使用递归：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">solution</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析一下代码： ● 当 n 小于等于 0 的时候，直接给出和值为 0，这句不能省。 ● 当 n 大于 0 时，结果是 n 加上 sum_number(n-1) 。这里的 sum_number(n-1) 又是一次sum_number 函数的调用，不过参数的值变成了 n-1。 ● 要得 sum_number(n) 到的值就必须等待 sum_number(n-1) 的值被计算出来，同样要得到sum_number(n-1) 的值必须等待 sum_number(n-2) 的值，如此一路推算下去，直到sum_number(0)，因为 if 语句的存在，它不需要等待 sum_number(-1) 的计算了，而是直接给出结果 0。然后程序一路返回，直到回到最初的 sum_number(n)，并给出最终结果。</p><h2 id="_2-3-斐波那契数列" tabindex="-1"><a class="header-anchor" href="#_2-3-斐波那契数列"><span>2.3 斐波那契数列</span></a></h2><p>斐波拉契数列，是这样的一个数列：<code>0、1、1、2、3、5、8、13、21、......</code>。</p><p>斐波拉契数列的核心思想是：从第三项起，每一项都等于前两项的和，即 <code>F(N) = F(N - 1) + F(N - 2) (N &gt;= 2)</code> 并且规定 <code>F(0) = 0</code>，<code>F(1) = 1</code></p><p>**要求：**利用递归算法获得指定项的斐波拉契数列。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Fibonacci</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    elif</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> Fibonacci</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> Fibonacci</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    lst </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    n </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 100</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        lst.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">Fibonacci</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(lst)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-递归的优缺点" tabindex="-1"><a class="header-anchor" href="#_2-4-递归的优缺点"><span>2.4 递归的优缺点：</span></a></h3><ul><li>优点 <ol><li>递归使代码更简洁优雅</li><li>可以递归把复杂的任务拆成简单的子问题</li><li>使用递归比一些嵌套迭代更容易</li><li>总之：递归函数的优点是定义简单，逻辑清晰；理论上所有递归函数都可以写成循环的方式，只是过于复杂，逻辑不如递归清晰。</li></ol></li><li>缺点 <ol><li>递归的逻辑很难调试、跟进。</li><li>递归的调用代价高昂（效率低），因为会占用大量的内存和时间。</li></ol></li></ul>`,43),p=[t];function d(r,g){return a(),s("div",null,p)}const c=i(k,[["render",d],["__file","recursion.html.vue"]]),A=JSON.parse('{"path":"/zh/python1v1/recursion.html","title":"15-递归","lang":"zh-CN","frontmatter":{"title":"15-递归","icon":"python","date":"2024-09-18T22:10:25.000Z","author":"XiaoXianYue","isOriginal":true,"category":["课堂笔记"],"tag":["课堂笔记"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"1. 递归的定义","slug":"_1-递归的定义","link":"#_1-递归的定义","children":[{"level":3,"title":"1.1 图文释义","slug":"_1-1-图文释义","link":"#_1-1-图文释义","children":[]},{"level":3,"title":"1.2 定义和注意事项","slug":"_1-2-定义和注意事项","link":"#_1-2-定义和注意事项","children":[]}]},{"level":2,"title":"2. 典型的算法","slug":"_2-典型的算法","link":"#_2-典型的算法","children":[{"level":3,"title":"2.1 阶乘","slug":"_2-1-阶乘","link":"#_2-1-阶乘","children":[]},{"level":3,"title":"2.2 高斯求和：","slug":"_2-2-高斯求和","link":"#_2-2-高斯求和","children":[]}]},{"level":2,"title":"2.3 斐波那契数列","slug":"_2-3-斐波那契数列","link":"#_2-3-斐波那契数列","children":[{"level":3,"title":"2.4 递归的优缺点：","slug":"_2-4-递归的优缺点","link":"#_2-4-递归的优缺点","children":[]}]}],"git":{"createdTime":1726673666000,"updatedTime":1726674464000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":2}]},"readingTime":{"minutes":4.57,"words":1370},"filePathRelative":"zh/python1v1/recursion.md","localizedDate":"2024年9月18日"}');export{c as comp,A as data};