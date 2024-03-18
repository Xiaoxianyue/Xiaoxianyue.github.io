import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-DdHvLI-W.js";const e="/assets/b91944bbe88c00190166f500a543104-D4UJmsso.png",p="/assets/23721ca8bc5620c4e9001d2ad1d0013-Bn7bv_B6.png",i="/assets/90c25a8d38b54b7d64af82f7ac1366a-4OyRAKga.png",o="/assets/6496cebcba5eb5321684ba37e3a0fda-BHOUJAR2.png",l={},c=t('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义"><span>1. 字符串的定义</span></a></h2><p>字符串是由字母，数字和特殊字符组成的序列。</p><figure><img src="'+e+`" alt="b91944bbe88c00190166f500a543104" tabindex="0" loading="lazy"><figcaption>b91944bbe88c00190166f500a543104</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串"><span>2. 创建字符串</span></a></h2><p>如何创建字符串？</p><p>——使用<span style="color:pink;">单引号，双引号</span>和<span style="color:pink;">三引号</span></p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;shelly&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此发现，三引号可以原样输出。</p><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」</p><ul><li><strong><span style="color:orange;">三个单引号或者三个双引号，实现原样输出。</span></strong></li><li><strong><span style="color:orange;">多行注释</span></strong></li><li><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</li><li><img src="`+p+`" alt="23721ca8bc5620c4e9001d2ad1d0013" tabindex="0" loading="lazy"><figcaption>23721ca8bc5620c4e9001d2ad1d0013</figcaption></li></ul><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度"><span>3.字符串长度</span></a></h2><p>如何获取一个字符串长度——使用 len()</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>p <span class="token operator">=</span> <span class="token string">&quot;Hello,Coconut!&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-2存在的问题" tabindex="-1"><a class="header-anchor" href="#_4-5-2存在的问题"><span>4.5.2存在的问题</span></a></h4><h4 id="_4-5-2-存在的问题" tabindex="-1"><a class="header-anchor" href="#_4-5-2-存在的问题"><span>4.5.2 存在的问题</span></a></h4><div class="hint-container info"><p class="hint-container-title">思考🤔</p><p>上面代码 <code>string[::-1]</code> 前两位省略了什么数字？尝试填写上去。</p></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样不会得到结果也不会报错。</p><p>why？</p><figure><img src="`+i+`" alt="90c25a8d38b54b7d64af82f7ac1366a" tabindex="0" loading="lazy"><figcaption>90c25a8d38b54b7d64af82f7ac1366a</figcaption></figure><p>怎么解决？</p><h4 id="_4-5-3-解决方法" tabindex="-1"><a class="header-anchor" href="#_4-5-3-解决方法"><span>4.5.3 解决方法</span></a></h4><h5 id="_4-5-3-1-方法一-调换位置" tabindex="-1"><a class="header-anchor" href="#_4-5-3-1-方法一-调换位置"><span>4.5.3.1 方法一：调换位置</span></a></h5><ul><li><p>能否解决：可以</p></li><li><p>存在什么问题?少一个字母。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment">#output</span>
sihtrofnro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>为什么少一个字母？</p><p>——存在一个悖论，因为结束是0，但是0+1时是1，1又代表了从左往右数第二个字母。故而+1是无法解决和实现了。</p><p>但是，我们可以利用不写结尾，得到最后一个缺失的字符。 string[11::-1]。</p><h5 id="_4-5-3-2-方法二-重新开始写结尾" tabindex="-1"><a class="header-anchor" href="#_4-5-3-2-方法二-重新开始写结尾"><span>4.5.3.2 方法二：重新开始写结尾</span></a></h5><p>想想字符串的有序性，从右到左。</p><p>为什么要纠结前面两个空的数字是多少？——为了之后的到某一部分的字符串倒序。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
<span class="token comment">#output</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="6496cebcba5eb5321684ba37e3a0fda" tabindex="0" loading="lazy"><figcaption>6496cebcba5eb5321684ba37e3a0fda</figcaption></figure><p>小试牛刀：获取rofn</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-字符串的内置方法" tabindex="-1"><a class="header-anchor" href="#_5-字符串的内置方法"><span>5 字符串的内置方法</span></a></h2><h3 id="_5-1-upper" tabindex="-1"><a class="header-anchor" href="#_5-1-upper"><span>5.1 .upper（）</span></a></h3><p>将字符串内容全部转成大写。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
upper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>upper_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
TAURUS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-lower" tabindex="-1"><a class="header-anchor" href="#_5-2-lower"><span>5.2 .lower()</span></a></h3><p>将字符串内容全部转成小写。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;SHERRY&quot;</span>
lower_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lower_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
sherry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-capitalize" tabindex="-1"><a class="header-anchor" href="#_5-3-capitalize"><span>5.3 .capitalize()</span></a></h3><p>将字符串首字母，转化成大写。【只对第一个字母大写，其他的不变】</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;moon in taurus&quot;</span>
capitalize_string <span class="token operator">=</span> string<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>capitalize_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Moon <span class="token keyword">in</span> taurus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-title" tabindex="-1"><a class="header-anchor" href="#_5-4-title"><span>5.4 .title()</span></a></h3><p>将字符串中的每个单词的首字母，转换成大写。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;moon in taurus&quot;</span>
title_string <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Moon In Taurus

<span class="token comment">#不管是什么间隔，都会转成首字母大写。</span>
string <span class="token operator">=</span> <span class="token string">&quot;moon-in-taurus&quot;</span>
title_string <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Moon<span class="token operator">-</span>In<span class="token operator">-</span>Taurus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-startswith" tabindex="-1"><a class="header-anchor" href="#_5-5-startswith"><span>5.5 .startswith()</span></a></h3><p>检测字符串是不是以特定字符或单词开头，返回布尔值。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;sherry&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;sherry&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;sherry&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;sw&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-endswith" tabindex="-1"><a class="header-anchor" href="#_5-6-endswith"><span>5.6 .endswith()</span></a></h3><p>检测字符串是不就是以特定单词或字符结尾，返回布尔值。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;us&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;u&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-count" tabindex="-1"><a class="header-anchor" href="#_5-7-count"><span>5.7 .count()</span></a></h3><p>计算特定字符或单词在目标字符串中存在的次数</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;u&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">2</span>

string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;au&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">1</span>

string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-find" tabindex="-1"><a class="header-anchor" href="#_5-8-find"><span>5.8 .find()</span></a></h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。「也就是出现重复，也只是返回第一次出现的下标」如果是查找单词，那么 find() 返回目标单词的第一个字符的下标。</p><p>如果，查询的字符或单词不存在，则返回 -1。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
find_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>find_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">0</span>

string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
find_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>find_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token operator">-</span><span class="token number">1</span>

string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
find_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;in&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>find_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">4</span>

string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
find_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;for&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>find_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-index" tabindex="-1"><a class="header-anchor" href="#_5-9-index"><span>5.9 .index()</span></a></h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 index() 返回目标单词的第一个字符的下标。</p><p>如果，查询的字符或单词不存在，则报错。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
index_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>index_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">4</span>

string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
index_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>index_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;C:\\Coder\\Lesson\\1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    index_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found

string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
index_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;moon&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>index_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token number">0</span>

string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
index_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;sza&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>index_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;C:\\Coder\\Lesson\\1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    index_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;sza&quot;</span><span class="token punctuation">)</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-isdigit" tabindex="-1"><a class="header-anchor" href="#_5-10-isdigit"><span>5.10 .isdigit()</span></a></h3><p>判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回False</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;20040518&quot;</span>
isdigit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isdigit_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;2004 0518&quot;</span>
isdigit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isdigit_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-11-isalpha" tabindex="-1"><a class="header-anchor" href="#_5-11-isalpha"><span>5.11 .isalpha()</span></a></h3><p>判断字符串是不是纯字母字符串，字符串中但凡有一个非字母的，则返回False</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;taurus&quot;</span>
isalpha_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isalpha_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot; taurus&quot;</span>
isalpha_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isalpha_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-isalnum" tabindex="-1"><a class="header-anchor" href="#_5-12-isalnum"><span>5.12 .isalnum()</span></a></h3><p>判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中但凡出现非数字、字母元素，则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;1234567&quot;</span>
isalnum_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isalnum_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;moon&quot;</span>
isalnum_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isalnum_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;moon20040518&quot;</span>
isalnum_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isalnum_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;moon 20040518&quot;</span>
isalnum_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isalnum_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-13-isupper" tabindex="-1"><a class="header-anchor" href="#_5-13-isupper"><span>5.13 .isupper()</span></a></h3><p>判断字符串中的字符否全大写，全大写则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;MOON&quot;</span>
isupper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isupper_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;MOON123[]&quot;</span>
isupper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isupper_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;MOOn123[]&quot;</span>
isupper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isupper_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;moon123[]&quot;</span>
isupper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isupper_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-14-islower" tabindex="-1"><a class="header-anchor" href="#_5-14-islower"><span>5.14 .islower()</span></a></h3><p>判断字符串是不分全小写，全小写则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;moon&quot;</span>
islower_string <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>islower_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;moon123#@&quot;</span>
islower_string <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>islower_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;moon123#@IN&quot;</span>
islower_string <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>islower_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-15-isspace" tabindex="-1"><a class="header-anchor" href="#_5-15-isspace"><span>5.15 .isspace()</span></a></h3><p>判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;     &quot;</span>
isspace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isspace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
isspace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>isspace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-16-strip" tabindex="-1"><a class="header-anchor" href="#_5-16-strip"><span>5.16 .strip</span></a></h3><p>默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;  moonintaurus   &quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>strip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串   moonintaurus   
去掉前后空格的字符串 moonintaurus


string <span class="token operator">=</span> <span class="token string">&quot;---moonintaurus---&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>strip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>moonintaurus<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后空格的字符串 moonintaurus


string <span class="token operator">=</span> <span class="token string">&quot;--- --moonintaurus-- ---&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>strip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后空格的字符串  <span class="token operator">-</span><span class="token operator">-</span>moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token comment">#可以看到，只能去掉连续的减号</span>


<span class="token comment">#如果想要去掉减号和空格呢</span>
string <span class="token operator">=</span> <span class="token string">&quot;--- --moonintaurus-- ---&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>strip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后空格的字符串 moonintaurus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-17-lstrip" tabindex="-1"><a class="header-anchor" href="#_5-17-lstrip"><span>5.17 .lstrip()</span></a></h3><p>默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   moonintaurus-- ---&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>lstrip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串    moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后空格的字符串 moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>


string <span class="token operator">=</span> <span class="token string">&quot;-----moonintaurus-----&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>lstrip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>moonintaurus<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后空格的字符串 moonintaurus<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>


string <span class="token operator">=</span> <span class="token string">&quot;--- --moonintaurus-- ---&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>lstrip_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后空格的字符串 moonintaurus<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-18-rstrip" tabindex="-1"><a class="header-anchor" href="#_5-18-rstrip"><span>5.18 .rstrip()</span></a></h3><p>默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边空白字符后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
去掉右边空白字符后<span class="token punctuation">:</span>    bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis----&quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边 &#39;-&#39; 后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉右边 <span class="token string">&#39;-&#39;</span> 后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis-- --&quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 不分先后顺序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边 &#39;- &#39; 后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
去掉右边 <span class="token string">&#39;- &#39;</span> 后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-19-replace" tabindex="-1"><a class="header-anchor" href="#_5-19-replace"><span>5.19 .replace()</span></a></h3><p>.replace(old,new,count)第一个位置传入待替换得旧字符，第二个位置传入要替换的新字符，默认替换全部，count控制替换次数。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   moonintaurus   &quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>replace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串    moonintaurus   
去掉前后空格的字符串 <span class="token operator">**</span><span class="token operator">*</span>moonintaurus<span class="token operator">**</span><span class="token operator">*</span>  <span class="token comment">#默认全都替换掉</span>


string <span class="token operator">=</span> <span class="token string">&quot;aiaiai&quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">#count不用加引号</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>replace_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 aiaiai
去掉前后空格的字符串 loveaiai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-20-split" tabindex="-1"><a class="header-anchor" href="#_5-20-split"><span>5.20 .split（）</span></a></h3><p><code>.split(sep,maxsplit)</code>以特定字符进行分割，默认空壳分割。 如果传入参数sep ，则以参数进行分割。返回分割后的列表，maxsplit用于控制分割几次。</p><div class="language-PYTHON line-numbers-mode" data-ext="PYTHON" data-title="PYTHON"><pre class="language-PYTHON"><code>string = &quot;moon in taurus&quot;
split_string = string.split()
print(&quot;原本的字符串&quot;,string)
print(&quot;去掉前后空格的字符串&quot;,split_string
#output
原本的字符串 moon in taurus
去掉前后空格的字符串 [&#39;moon&#39;, &#39;in&#39;, &#39;taurus&#39;]    #默认空格分割


string = &quot;moon-in-taurus&quot;
split_string = string.split(&#39;-&#39;)    #以-分割
print(&quot;原本的字符串&quot;,string)
print(&quot;去掉前后空格的字符串&quot;,split_string)
#output
原本的字符串 moon-in-taurus
去掉前后空格的字符串 [&#39;moon&#39;, &#39;in&#39;, &#39;taurus&#39;]

string = &quot;moon-in-taurus&quot;
split_string = string.split(&#39;-&#39;,1)
print(&quot;原本的字符串&quot;,string)
print(&quot;去掉前后空格的字符串&quot;,split_string)     
#output
原本的字符串 moon-in-taurus
去掉前后空格的字符串 [&#39;moon&#39;, &#39;in-taurus&#39;]
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-21-rsplit" tabindex="-1"><a class="header-anchor" href="#_5-21-rsplit"><span>5.21 .rsplit()</span></a></h3><p><code>.rsplit(sep, maxsplit)</code> 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;moon-in-taurus&quot;</span>
rsplit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>rsplit_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串 moon <span class="token keyword">in</span> taurus
去掉前后空格的字符串 <span class="token punctuation">[</span><span class="token string">&#39;moon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;taurus&#39;</span><span class="token punctuation">]</span>  


string <span class="token operator">=</span> <span class="token string">&quot;moon-in-taurus&quot;</span>
rsplit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空格的字符串&quot;</span><span class="token punctuation">,</span>rsplit_string
<span class="token comment">#output</span>
原本的字符串 moon<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>taurus
去掉前后空格的字符串 <span class="token punctuation">[</span><span class="token string">&#39;moon-in&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;taurus&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-22-join" tabindex="-1"><a class="header-anchor" href="#_5-22-join"><span>5.22 .join()</span></a></h3><p>以特定字符是字符串间隔。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;moonintaurus&quot;</span>
join_string <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串：&quot;</span><span class="token punctuation">,</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;加上间隔的字符串：&quot;</span><span class="token punctuation">,</span>join_string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
原本的字符串： moonintaurus
加上间隔的字符串： m<span class="token operator">-</span>o<span class="token operator">-</span>o<span class="token operator">-</span>n<span class="token operator">-</span>i<span class="token operator">-</span>n<span class="token operator">-</span>t<span class="token operator">-</span>a<span class="token operator">-</span>u<span class="token operator">-</span>r<span class="token operator">-</span>u<span class="token operator">-</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-字符串格式化" tabindex="-1"><a class="header-anchor" href="#_6-字符串格式化"><span>6. 字符串格式化</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi Xiaoxianyue,Welcome to Haikou&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment">#---output---</span>
Hi Xiaoxianyue<span class="token punctuation">,</span>Welcome to Haikou
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>所存在的问题：需要换一个人名或者地区，就需要重新创建一个全新的字符串。</li><li>我们希望有类似模版，让我们把不同人名，地区填写进去。而不是每个人都从头创建一个新的字符串。</li></ul><p>当然可以使用字符串的加法，大过于复杂冗长。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>str1 <span class="token operator">=</span> <span class="token string">&quot;Hi &quot;</span>
str2 <span class="token operator">=</span> <span class="token string">&quot;,Welcome to &quot;</span>
str3 <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>
string <span class="token operator">=</span> str1 <span class="token operator">+</span> <span class="token string">&quot;Billkin&quot;</span> <span class="token operator">+</span> str2 <span class="token operator">+</span> <span class="token string">&quot;Fuzhou&quot;</span> <span class="token operator">+</span> str3
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi Billkin<span class="token punctuation">,</span>Welcome to Fuzhou<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时存在一个问题：由于Python中不同的数据类型不可以直接相加，除非强制转换类型为字符串。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;money is&quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;C:\\Coder\\Lesson\\1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">7</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    string <span class="token operator">=</span> <span class="token string">&quot;money is&quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
TypeError<span class="token punctuation">:</span> can only concatenate <span class="token builtin">str</span> <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span> to <span class="token builtin">str</span>


<span class="token comment">#转换后：</span>
string <span class="token operator">=</span> <span class="token string">&quot;money is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
money <span class="token keyword">is</span> <span class="token number">190</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>——format 就应运而生。</p><h3 id="_6-1-format" tabindex="-1"><a class="header-anchor" href="#_6-1-format"><span>6.1 .format</span></a></h3><p>1.单个花括号{}</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to Beijing&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;XiaoXianyue&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi XiaoXianyue<span class="token punctuation">,</span>Welcome to Beijing

template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to Beijing&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;XiaoXianyue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi XiaoXianyue<span class="token punctuation">,</span>Welcome to Beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.一个花括号以上 [按顺序填入]</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to {}&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;XiaoXianyue&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi XiaoXianyue<span class="token punctuation">,</span>Welcome to Beijing

string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Xiaoxianyue&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi XiaoXianyue<span class="token punctuation">,</span>Welcome to Beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.多个花括号指定位置</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi {1},Welcome to {0}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Xiaoxianyue&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi XiaoXianyue<span class="token punctuation">,</span>Welcome to Beijing


string <span class="token operator">=</span> <span class="token string">&quot;Hi {1},Welcome to {0}&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Beijing&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Xiaoxianyue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#output</span>
Hi XiaoXianyue<span class="token punctuation">,</span>Welcome to Beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,152),r=[c];function u(d,k){return s(),a("div",null,r)}const b=n(l,[["render",u],["__file","String.html.vue"]]),g=JSON.parse(`{"path":"/zh/python1v1/String.html","title":"04-字符串","lang":"zh-CN","frontmatter":{"title":"04-字符串","icon":"alias","date":"2023-12-21T14:49:25.000Z","author":"XiaoXianYue","isOriginal":true,"category":["课堂笔记","课后回顾&练习"],"tag":["课堂笔记","课后回顾&练习"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"1. 字符串的定义 字符串是由字母，数字和特殊字符组成的序列。 b91944bbe88c00190166f500a543104b91944bbe88c00190166f500a543104 2. 创建字符串 如何创建字符串？ ——使用单引号，双引号和三引号 2.1为什么Python同时支持三种创建字符串的方法？ 原因一：（单双引号混用） 但是英文可以缩...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/python1v1/String.html"}],["meta",{"property":"og:site_name","content":"an istj's zone"}],["meta",{"property":"og:title","content":"04-字符串"}],["meta",{"property":"og:description","content":"1. 字符串的定义 字符串是由字母，数字和特殊字符组成的序列。 b91944bbe88c00190166f500a543104b91944bbe88c00190166f500a543104 2. 创建字符串 如何创建字符串？ ——使用单引号，双引号和三引号 2.1为什么Python同时支持三种创建字符串的方法？ 原因一：（单双引号混用） 但是英文可以缩..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T06:03:07.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"课堂笔记"}],["meta",{"property":"article:tag","content":"课后回顾&练习"}],["meta",{"property":"article:published_time","content":"2023-12-21T14:49:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T06:03:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-字符串\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T14:49:25.000Z\\",\\"dateModified\\":\\"2024-03-18T06:03:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串的定义","slug":"_1-字符串的定义","link":"#_1-字符串的定义","children":[]},{"level":2,"title":"2. 创建字符串","slug":"_2-创建字符串","link":"#_2-创建字符串","children":[{"level":3,"title":"2.1为什么Python同时支持三种创建字符串的方法？","slug":"_2-1为什么python同时支持三种创建字符串的方法","link":"#_2-1为什么python同时支持三种创建字符串的方法","children":[]}]},{"level":2,"title":"3.字符串长度","slug":"_3-字符串长度","link":"#_3-字符串长度","children":[]},{"level":2,"title":"4.字符串中的字符获取","slug":"_4-字符串中的字符获取","link":"#_4-字符串中的字符获取","children":[{"level":3,"title":"4.1 获取单个字符","slug":"_4-1-获取单个字符","link":"#_4-1-获取单个字符","children":[]},{"level":3,"title":"4.2 提取多个连续的字符串[子字符串]","slug":"_4-2-提取多个连续的字符串-子字符串","link":"#_4-2-提取多个连续的字符串-子字符串","children":[]},{"level":3,"title":"4.3 获取多个不连续字符","slug":"_4-3-获取多个不连续字符","link":"#_4-3-获取多个不连续字符","children":[]}]},{"level":2,"title":"4.5 字符串倒序","slug":"_4-5-字符串倒序","link":"#_4-5-字符串倒序","children":[{"level":4,"title":"4.5.1 实现","slug":"_4-5-1-实现","link":"#_4-5-1-实现","children":[]},{"level":4,"title":"4.5.2存在的问题","slug":"_4-5-2存在的问题","link":"#_4-5-2存在的问题","children":[]},{"level":4,"title":"4.5.2 存在的问题","slug":"_4-5-2-存在的问题","link":"#_4-5-2-存在的问题","children":[]},{"level":4,"title":"4.5.3 解决方法","slug":"_4-5-3-解决方法","link":"#_4-5-3-解决方法","children":[{"level":5,"title":"4.5.3.1 方法一：调换位置","slug":"_4-5-3-1-方法一-调换位置","link":"#_4-5-3-1-方法一-调换位置","children":[]},{"level":5,"title":"4.5.3.2 方法二：重新开始写结尾","slug":"_4-5-3-2-方法二-重新开始写结尾","link":"#_4-5-3-2-方法二-重新开始写结尾","children":[]}]}]},{"level":2,"title":"5 字符串的内置方法","slug":"_5-字符串的内置方法","link":"#_5-字符串的内置方法","children":[{"level":3,"title":"5.1 .upper（）","slug":"_5-1-upper","link":"#_5-1-upper","children":[]},{"level":3,"title":"5.2 .lower()","slug":"_5-2-lower","link":"#_5-2-lower","children":[]},{"level":3,"title":"5.3 .capitalize()","slug":"_5-3-capitalize","link":"#_5-3-capitalize","children":[]},{"level":3,"title":"5.4 .title()","slug":"_5-4-title","link":"#_5-4-title","children":[]},{"level":3,"title":"5.5 .startswith()","slug":"_5-5-startswith","link":"#_5-5-startswith","children":[]},{"level":3,"title":"5.6 .endswith()","slug":"_5-6-endswith","link":"#_5-6-endswith","children":[]},{"level":3,"title":"5.7 .count()","slug":"_5-7-count","link":"#_5-7-count","children":[]},{"level":3,"title":"5.8 .find()","slug":"_5-8-find","link":"#_5-8-find","children":[]},{"level":3,"title":"5.9 .index()","slug":"_5-9-index","link":"#_5-9-index","children":[]},{"level":3,"title":"5.10 .isdigit()","slug":"_5-10-isdigit","link":"#_5-10-isdigit","children":[]},{"level":3,"title":"5.11 .isalpha()","slug":"_5-11-isalpha","link":"#_5-11-isalpha","children":[]},{"level":3,"title":"5.12 .isalnum()","slug":"_5-12-isalnum","link":"#_5-12-isalnum","children":[]},{"level":3,"title":"5.13 .isupper()","slug":"_5-13-isupper","link":"#_5-13-isupper","children":[]},{"level":3,"title":"5.14 .islower()","slug":"_5-14-islower","link":"#_5-14-islower","children":[]},{"level":3,"title":"5.15 .isspace()","slug":"_5-15-isspace","link":"#_5-15-isspace","children":[]},{"level":3,"title":"5.16 .strip","slug":"_5-16-strip","link":"#_5-16-strip","children":[]},{"level":3,"title":"5.17 .lstrip()","slug":"_5-17-lstrip","link":"#_5-17-lstrip","children":[]},{"level":3,"title":"5.18 .rstrip()","slug":"_5-18-rstrip","link":"#_5-18-rstrip","children":[]},{"level":3,"title":"5.19 .replace()","slug":"_5-19-replace","link":"#_5-19-replace","children":[]},{"level":3,"title":"5.20 .split（）","slug":"_5-20-split","link":"#_5-20-split","children":[]},{"level":3,"title":"5.21 .rsplit()","slug":"_5-21-rsplit","link":"#_5-21-rsplit","children":[]},{"level":3,"title":"5.22 .join()","slug":"_5-22-join","link":"#_5-22-join","children":[]}]},{"level":2,"title":"6. 字符串格式化","slug":"_6-字符串格式化","link":"#_6-字符串格式化","children":[{"level":3,"title":"6.1 .format","slug":"_6-1-format","link":"#_6-1-format","children":[]}]}],"git":{"createdTime":1710254826000,"updatedTime":1710741787000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":3}]},"readingTime":{"minutes":14.75,"words":4426},"filePathRelative":"zh/python1v1/String.md","localizedDate":"2023年12月21日","excerpt":"<h2>1. 字符串的定义</h2>\\n<p>字符串是由字母，数字和特殊字符组成的序列。</p>\\n<figure><figcaption>b91944bbe88c00190166f500a543104</figcaption></figure>\\n<h2>2. 创建字符串</h2>\\n<p>如何创建字符串？</p>\\n<p>——使用<span style=\\"color:pink\\">单引号，双引号</span>和<span style=\\"color:pink\\">三引号</span></p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'shelly'</span>\\nnumber <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"110\\"</span>\\nparagraph <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">'''hello, shelly!\\nhello, world'''</span>\\nparagraph_two <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">\\"\\"\\"hello, shelly!\\nhello, world\\"\\"\\"</span>\\n</code></pre></div>","autoDesc":true}`);export{b as comp,g as data};
