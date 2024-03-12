import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-Bz9Ux97t.js";const t="/assets/b91944bbe88c00190166f500a543104-D4UJmsso.png",i="/assets/23721ca8bc5620c4e9001d2ad1d0013-Bn7bv_B6.png",l={},p=e('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义"><span>1. 字符串的定义</span></a></h2><p>字符串是由字母，数字和特殊字符组成的序列。</p><figure><img src="'+t+`" alt="b91944bbe88c00190166f500a543104" tabindex="0" loading="lazy"><figcaption>b91944bbe88c00190166f500a543104</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串"><span>2. 创建字符串</span></a></h2><p>如何创建字符串？</p><p>——使用<span style="color:pink;">单引号，双引号</span>和<span style="color:pink;">三引号</span></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;shelly&#39;</span>
number <span class="token operator">=</span> <span class="token string">&quot;110&quot;</span>
paragraph <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;hello, shelly!
hello, world&#39;&#39;&#39;</span>
paragraph_two <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;hello, shelly!
hello, world&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1为什么python同时支持三种创建字符串的方法" tabindex="-1"><a class="header-anchor" href="#_2-1为什么python同时支持三种创建字符串的方法"><span>2.1<strong>为什么Python同时支持三种创建字符串的方法？</strong></span></a></h3><p><strong>原因一：（单双引号混用）</strong></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I am a coconut&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是英文可以缩写如下:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m a coconut&#39;
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
 File <span class="token string">&quot;C:\\Coder\\Lesson\\1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span>
    string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m a coconut&#39;
                           <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> unterminated string literal <span class="token punctuation">(</span>detected at line <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为开头是单引号，所以python会寻找下一个出现的单引号进行匹配，而第一次出现的单引号不在字符串末尾，所以导致整个字符串异常。（没有完全包裹字符串内容）</p><p>如何解决上述内容？——使用双引号。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;I&#39;m a coconut&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
I&#39;m a coconut
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原因二：（三引号可以原样输出多行代码）</strong></p><div class="language-pythpn line-numbers-mode" data-ext="pythpn" data-title="pythpn"><pre class="language-pythpn"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们要将其放入字符串：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
File <span class="token string">&quot;C:\\Coder\\Lesson\\1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span>
    string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
             <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> unterminated string literal <span class="token punctuation">(</span>detected at line <span class="token number">1</span><span class="token punctuation">)</span>

进程已结束，退出代码为 <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行代码放入双引号，输出会报错。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\\
\\
浅者见浅，深者见深——黄家宝\\
\\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\\
\\
先实现功能，再去优化，否则一切会很乱。——AI悦创\\
\\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是双引号的情况，行后打\\，输出连成一行。</p><p>要想原样输出：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东&#39;&#39;&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#output</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东

进程已结束，退出代码为 <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此发现，三引号可以原样输出。</p><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」</p><ul><li><strong><span style="color:orange;">三个单引号或者三个双引号，实现原样输出。</span></strong></li><li><strong><span style="color:orange;">多行注释</span></strong></li><li><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</li><li><img src="`+i+`" alt="23721ca8bc5620c4e9001d2ad1d0013" tabindex="0" loading="lazy"><figcaption>23721ca8bc5620c4e9001d2ad1d0013</figcaption></li></ul><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度"><span>3.字符串长度</span></a></h2><p>如何获取一个字符串长度——使用 len()</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>p <span class="token operator">=</span> <span class="token string">&quot;Hello,Coconut!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在获取字符串长度时，从数字1开始数。</p><h2 id="_4-字符串中的字符获取" tabindex="-1"><a class="header-anchor" href="#_4-字符串中的字符获取"><span>4.字符串中的字符获取</span></a></h2><h3 id="_4-1-获取单个字符" tabindex="-1"><a class="header-anchor" href="#_4-1-获取单个字符"><span>4.1 获取单个字符</span></a></h3><p>输出c</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;coconut&quot;</span>
<span class="token comment">#获取单个字符</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment">#output</span>
c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三种输出t的方法</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;coconut&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;coconut&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;coconut&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-提取多个连续的字符串-子字符串" tabindex="-1"><a class="header-anchor" href="#_4-2-提取多个连续的字符串-子字符串"><span>4.2 提取多个连续的字符串[子字符串]</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;coconut&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法: string = &quot;bornforthis&quot;
select = string[start: end]
PS: end 记得 +1, 因为最后一个不算
&quot;&quot;&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment">#output</span>
coconu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-获取多个不连续字符" tabindex="-1"><a class="header-anchor" href="#_4-3-获取多个不连续字符"><span>4.3 获取多个不连续字符</span></a></h3><div class="language-pythonstring line-numbers-mode" data-ext="pythonstring" data-title="pythonstring"><pre class="language-pythonstring"><code>string = 012345678
&quot;&quot;&quot;
语法: string = &quot;0123456789&quot;
select = string[start: end: sep]
PS: end 记得 +1
&quot;&quot;&quot;
select = string[0:10:2]
print(select)

#output
02468
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们把[0:10:2]换成[ : :2]，发现输出结果还一样。故可知，默认开头和结尾。</p><h2 id="_4-5-字符串倒序" tabindex="-1"><a class="header-anchor" href="#_4-5-字符串倒序"><span>4.5 字符串倒序</span></a></h2><h4 id="_4-5-1-实现" tabindex="-1"><a class="header-anchor" href="#_4-5-1-实现"><span>4.5.1 实现</span></a></h4><p>字符串的第三个位置，控制的是字符提取的方向。默认为正数 1，如果我们改成 -1，则会变成反方向。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>正负控制方向，数字大小控制步长。</p></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-2存在的问题" tabindex="-1"><a class="header-anchor" href="#_4-5-2存在的问题"><span>4.5.2存在的问题</span></a></h4><h4 id="_4-5-2-存在的问题" tabindex="-1"><a class="header-anchor" href="#_4-5-2-存在的问题"><span>4.5.2 存在的问题</span></a></h4><div class="hint-container info"><p class="hint-container-title">思考🤔</p><p>上面代码 <code>string[::-1]</code> 前两位省略了什么数字？尝试填写上去。</p></div>`,50),o=[p];function r(c,d){return s(),a("div",null,o)}const m=n(l,[["render",r],["__file","String.html.vue"]]),b=JSON.parse(`{"path":"/zh/python1v1/String.html","title":"字符串","lang":"zh-CN","frontmatter":{"title":"字符串","icon":"alias","date":"2023-12-21T14:49:25.000Z","author":"XiaoXianYue","isOriginal":true,"category":["课堂笔记","课后回顾&练习"],"tag":["课堂笔记","课后回顾&练习"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"1. 字符串的定义 字符串是由字母，数字和特殊字符组成的序列。 b91944bbe88c00190166f500a543104b91944bbe88c00190166f500a543104 2. 创建字符串 如何创建字符串？ ——使用单引号，双引号和三引号 2.1为什么Python同时支持三种创建字符串的方法？ 原因一：（单双引号混用） 但是英文可以缩...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/python1v1/String.html"}],["meta",{"property":"og:site_name","content":"an istj's zone"}],["meta",{"property":"og:title","content":"字符串"}],["meta",{"property":"og:description","content":"1. 字符串的定义 字符串是由字母，数字和特殊字符组成的序列。 b91944bbe88c00190166f500a543104b91944bbe88c00190166f500a543104 2. 创建字符串 如何创建字符串？ ——使用单引号，双引号和三引号 2.1为什么Python同时支持三种创建字符串的方法？ 原因一：（单双引号混用） 但是英文可以缩..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-12T14:47:06.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"课堂笔记"}],["meta",{"property":"article:tag","content":"课后回顾&练习"}],["meta",{"property":"article:published_time","content":"2023-12-21T14:49:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-12T14:47:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T14:49:25.000Z\\",\\"dateModified\\":\\"2024-03-12T14:47:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串的定义","slug":"_1-字符串的定义","link":"#_1-字符串的定义","children":[]},{"level":2,"title":"2. 创建字符串","slug":"_2-创建字符串","link":"#_2-创建字符串","children":[{"level":3,"title":"2.1为什么Python同时支持三种创建字符串的方法？","slug":"_2-1为什么python同时支持三种创建字符串的方法","link":"#_2-1为什么python同时支持三种创建字符串的方法","children":[]}]},{"level":2,"title":"3.字符串长度","slug":"_3-字符串长度","link":"#_3-字符串长度","children":[]},{"level":2,"title":"4.字符串中的字符获取","slug":"_4-字符串中的字符获取","link":"#_4-字符串中的字符获取","children":[{"level":3,"title":"4.1 获取单个字符","slug":"_4-1-获取单个字符","link":"#_4-1-获取单个字符","children":[]},{"level":3,"title":"4.2 提取多个连续的字符串[子字符串]","slug":"_4-2-提取多个连续的字符串-子字符串","link":"#_4-2-提取多个连续的字符串-子字符串","children":[]},{"level":3,"title":"4.3 获取多个不连续字符","slug":"_4-3-获取多个不连续字符","link":"#_4-3-获取多个不连续字符","children":[]}]},{"level":2,"title":"4.5 字符串倒序","slug":"_4-5-字符串倒序","link":"#_4-5-字符串倒序","children":[{"level":4,"title":"4.5.1 实现","slug":"_4-5-1-实现","link":"#_4-5-1-实现","children":[]},{"level":4,"title":"4.5.2存在的问题","slug":"_4-5-2存在的问题","link":"#_4-5-2存在的问题","children":[]},{"level":4,"title":"4.5.2 存在的问题","slug":"_4-5-2-存在的问题","link":"#_4-5-2-存在的问题","children":[]}]}],"git":{"createdTime":1710254826000,"updatedTime":1710254826000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":1}]},"readingTime":{"minutes":6,"words":1799},"filePathRelative":"zh/python1v1/String.md","localizedDate":"2023年12月21日","excerpt":"<h2>1. 字符串的定义</h2>\\n<p>字符串是由字母，数字和特殊字符组成的序列。</p>\\n<figure><figcaption>b91944bbe88c00190166f500a543104</figcaption></figure>\\n<h2>2. 创建字符串</h2>\\n<p>如何创建字符串？</p>\\n<p>——使用<span style=\\"color:pink\\">单引号，双引号</span>和<span style=\\"color:pink\\">三引号</span></p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'shelly'</span>\\nnumber <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"110\\"</span>\\nparagraph <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">'''hello, shelly!\\nhello, world'''</span>\\nparagraph_two <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">\\"\\"\\"hello, shelly!\\nhello, world\\"\\"\\"</span>\\n</code></pre></div>","autoDesc":true}`);export{m as comp,b as data};
