import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,b as i}from"./app-DW_YP9Ou.js";const n="/assets/Snipaste_2024-04-27_21-45-41-DMRrUS1-.png",s="/assets/Snipaste_2024-04-28_10-55-36-D_b9z441.png",o="/assets/Snipaste_2024-04-28_11-00-23-CW3RZuBN.png",p="/assets/Snipaste_2024-04-28_11-04-43-YdTFcSi4.png",r="/assets/image-20240430001208187-COTnA-dZ.png",l="/assets/Snipaste_2024-04-28_11-09-09-BQ1n4536.png",c="/assets/Snipaste_2024-04-28_11-13-22-YgjuH-Fc.png",_="/assets/Snipaste_2024-04-28_11-25-03-DMhpmjCT.png",g="/assets/Snipaste_2024-04-28_11-25-15-CXsgnlD4.png",h="/assets/Snipaste_2024-04-28_11-47-32-B5d0DpDn.png",d="/assets/Snipaste_2024-04-28_11-47-57-DeXaveqz.png",f="/assets/Snipaste_2024-04-28_11-52-21-I6ntQzWB.png",m="/assets/Snipaste_2024-04-28_12-25-19-BSvH3nJk.png",u="/assets/Snipaste_2024-04-28_14-19-38-CLSc8C4R.png",y="/assets/Snipaste_2024-04-28_14-20-20-jRAx3yh2.png",b="/assets/Snipaste_2024-04-28_14-23-43-CJ0uD_Q6.png",x="/assets/Snipaste_2024-04-28_14-28-58-8cZyA6Ch.png",S="/assets/Snipaste_2024-04-28_14-33-39-DFry6AeK.png",v="/assets/Snipaste_2024-04-28_14-34-13-TIijek3p.png",w="/assets/Snipaste_2024-04-28_14-35-53-Bq4fp9Ij.png",z="/assets/Snipaste_2024-04-28_14-37-18-zzRsnNi0.png",P="/assets/Snipaste_2024-04-28_14-42-22-MmQz62WA.png",j="/assets/Snipaste_2024-04-28_14-49-15-DtnNIjot.png",k="/assets/Snipaste_2024-04-28_14-50-06-Dll5IkIs.png",A="/assets/Snipaste_2024-04-28_20-42-34-CyZUFLp3.png",T="/assets/Snipaste_2024-04-28_20-43-37-CGxmRxnS.png",D="/assets/Snipaste_2024-04-28_20-44-07-_6ycaE5I.png",I="/assets/Snipaste_2024-04-28_20-47-50-erL0F13C.png",E="/assets/Snipaste_2024-04-28_21-49-56-DsPgY6S8.png",C="/assets/Snipaste_2024-04-29_08-17-26-0TrUat_u.png",R="/assets/Snipaste_2024-04-29_08-20-03-569KJgLt.png",M="/assets/Snipaste_2024-04-29_09-14-11-B4iTNxJM.png",B="/assets/Snipaste_2024-04-29_09-42-01-BNpSx-Hy.png",q="/assets/Snipaste_2024-04-29_10-59-47-DofudT_J.png",N="/assets/Snipaste_2024-04-29_11-00-12-BUJxqPM7.png",F="/assets/Snipaste_2024-04-29_11-00-33-DEgenrOC.png",G="/assets/Snipaste_2024-04-29_11-01-05-DvTulb2V.png",U={},Z=i('<figure><img src="'+n+'" alt="Snipaste_2024-04-27_21-45-41" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-27_21-45-41</figcaption></figure><p><strong>Creational Patterns</strong></p><ul><li><p>separates a system from the creation, composition and representation of its objects , which increases the system&#39;s flexibility in what, who, how, and when of object creation.</p><p>它将系统与其对象的创建、组合和表示分离开来，从而提高了系统在对象创建的内容、对象创建者、创建方式和创建时间方面的灵活性。</p></li><li><p>encapsulates the knowledge about which classes a system uses and hides the details of how the instances of these classes are created and structured.</p><p>封装了系统使用哪些类的知识，并隐藏了如何创建和构建这些类的实例的细节。</p></li></ul><figure><img src="'+s+'" alt="Snipaste_2024-04-28_10-55-36" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_10-55-36</figcaption></figure><p>单例（Singleton）模式：类只能产生一个实例，保证全局使用的是同一对象。 原型（Prototype）模式：将一个对象作为原型，通过对其进行复制而克隆出多个和原型类似的新实例。 工厂方法（Factory Method）模式：定义一个用于创建产品的接口，由子类决定生产什么产品。 抽象工厂（Abstract Factory）模式：提供一个创建产品族的接口，其每个子类可以生产一系列相关的产品。 建造者（Builder）模式：将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象。</p><blockquote><p><strong>创建型模式的关注点是“怎样创建对象”，特点是“将对象的创建与使用分离”，使用者不需要关注对象的创建细节，对象的创建由相关的工厂来完成</strong></p></blockquote><h2 id="_1-factory-method-uml" tabindex="-1"><a class="header-anchor" href="#_1-factory-method-uml"><span>1. Factory Method: UML</span></a></h2><h3 id="_1-1-图示" tabindex="-1"><a class="header-anchor" href="#_1-1-图示"><span>1.1 图示</span></a></h3><p>An object is created without exposing the creation logic to the external using a common interface.</p><p>使用通用接口创建对象时，无需向外部公开创建逻辑。</p><figure><img src="'+o+'" alt="Snipaste_2024-04-28_11-00-23" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-00-23</figcaption></figure><p>used to create objects, but allow which subclass to instantiate, with various sub-types implementing the interface</p><p>用于创建对象，允许实例化哪个子类，各种子类都实现了接口</p><figure><img src="'+p+'" alt="Snipaste_2024-04-28_11-04-43" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-04-43</figcaption></figure><h3 id="_1-2-python-example" tabindex="-1"><a class="header-anchor" href="#_1-2-python-example"><span>1.2 Python Example:</span></a></h3><figure><img src="'+r+'" alt="image-20240430001208187" tabindex="0" loading="lazy"><figcaption>image-20240430001208187</figcaption></figure><p>代码实现：</p><figure><img src="'+l+'" alt="Snipaste_2024-04-28_11-09-09" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-09-09</figcaption></figure><p>定义了创建对象的类和方法，子类可以覆盖这些类和方法，以指定要创建的派生类型。</p><figure><img src="'+c+'" alt="Snipaste_2024-04-28_11-13-22" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-13-22</figcaption></figure><p>-在运行时，可以传递一个对象的描述，并返回一个指向该对象新实例的基类指针。</p><figure><img src="'+_+'" alt="Snipaste_2024-04-28_11-25-03" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-25-03</figcaption></figure><figure><img src="'+g+'" alt="Snipaste_2024-04-28_11-25-15" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-25-15</figcaption></figure><h3 id="_1-3-benefits" tabindex="-1"><a class="header-anchor" href="#_1-3-benefits"><span>1.3 benefits</span></a></h3><p>To support additional object types</p><p>−is useful when requiring the creation of many different types of objects, all derived from a common base type.</p><p>−when an additional class is required, and objects are requested through a user interface, this pattern would simply pass on the new information to the factory, which would then handle the new types entirely.</p><p>支持更多对象类型</p><p>-当需要创建多种不同类型的对象时，这种模式非常有用。</p><p>-当需要创建额外的类，并通过用户界面请求创建对象时，这种模式只需将新信息传递给工厂，工厂就能完全处理新类型。</p><h3 id="_1-4-实例" tabindex="-1"><a class="header-anchor" href="#_1-4-实例"><span>1.4 实例</span></a></h3><ol><li>汽车生产：</li></ol><figure><img src="'+h+'" alt="Snipaste_2024-04-28_11-47-32" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-47-32</figcaption></figure><ol start="2"><li>手机生产：</li></ol><figure><img src="'+d+'" alt="Snipaste_2024-04-28_11-47-57" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-47-57</figcaption></figure><ol start="3"><li>销售订单：</li></ol><figure><img src="'+f+'" alt="Snipaste_2024-04-28_11-52-21" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_11-52-21</figcaption></figure><h2 id="_2-singleton-pattern" tabindex="-1"><a class="header-anchor" href="#_2-singleton-pattern"><span>2. Singleton Pattern</span></a></h2><p>−enable a single class responsible to creates own object while ensuring that only single object get created.</p><p>−provides the access to its only object directly without need to instantiate the object of the class.</p><p>−useful when exactly one object is needed to coordinate across the system, which allows the system to operate more efficiently</p><p>-允许一个类负责创建自己的对象，同时确保只创建一个对象。</p><p>-提供直接访问其唯一对象的权限，而无需实例化该类的对象。</p><p>-当整个系统只需要一个对象进行协调时，它就能派上用场，从而使系统更有效地运行</p><h3 id="_2-1-图示" tabindex="-1"><a class="header-anchor" href="#_2-1-图示"><span>2.1 图示</span></a></h3><ul><li><p>This pattern restricts the instantiation of a class to one object only.</p></li><li><p>It provides a global point of access to the instance created.</p><p>这种模式将一个类的实例化限制为只有一个对象。</p><p>它提供了一个访问所创建实例的全局点。</p></li></ul><figure><img src="'+m+'" alt="Snipaste_2024-04-28_12-25-19" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_12-25-19</figcaption></figure><p>−Usually used for centralized management of internal or external resources to provide a global point of access to themselves. −should avoid introducing unnecessary restrictions in situations where a sole instance of a class is not actually required, and also introducing global state into an application</p><p>-通常用于集中管理内部或外部资源，为其提供一个全局访问点。</p><p>-应避免在实际不需要类的唯一实例的情况下引入不必要的限制，并避免在应用程序中引入全局状态。</p><h3 id="_2-2-python-example" tabindex="-1"><a class="header-anchor" href="#_2-2-python-example"><span>2.2 Python Example</span></a></h3><p>Define a private static attribute for the single instance.</p><figure><img src="'+u+'" alt="Snipaste_2024-04-28_14-19-38" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-19-38</figcaption></figure><p>Define all constructors to be protected or private.</p><figure><img src="'+y+'" alt="Snipaste_2024-04-28_14-20-20" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-20-20</figcaption></figure><p>Define a public static accessor method (i.e. get method, e.g. with no self in the parameter) in the class; may only use the accessor method to manipulate the Singleton.</p><p>在类中定义一个公共静态访问器方法（即 get 方法，例如参数中不包含 self）；只能使用访问器方法来操作 Singleton。</p><figure><img src="'+b+'" alt="Snipaste_2024-04-28_14-23-43" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-23-43</figcaption></figure><p>To run: only object is created</p><figure><img src="'+x+'" alt="Snipaste_2024-04-28_14-28-58" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-28-58</figcaption></figure><h3 id="_2-3-use-lazy-initialization-creation-on-first-use" tabindex="-1"><a class="header-anchor" href="#_2-3-use-lazy-initialization-creation-on-first-use"><span>2.3 Use ‘lazy initialization’ (creation on first use)</span></a></h3><p>lazy initialization in programming refers to delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. A program only creates certain resources until the resource is first needed thus freeing valuable memory space.</p><p>编程中的 &quot;懒初始化 &quot;是指将创建对象、计算数值或其他昂贵的过程推迟到首次需要时进行。程序只在首次需要时才创建某些资源，从而释放了宝贵的内存空间。</p><h3 id="_2-4-example" tabindex="-1"><a class="header-anchor" href="#_2-4-example"><span>2.4 Example</span></a></h3><ol><li>the singleton pattern is applied to allow the clients to access the database via a single service point.</li></ol><p>应用单例模式是为了让客户通过单个服务点访问数据库。</p><figure><img src="'+S+'" alt="Snipaste_2024-04-28_14-33-39" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-33-39</figcaption></figure><figure><img src="'+v+'" alt="Snipaste_2024-04-28_14-34-13" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-34-13</figcaption></figure><ol start="2"><li>the singleton pattern is applied to provide the global access to a file system</li></ol><p>应用单例模式来提供文件系统的全局访问权限</p><img src="'+w+'" alt="Snipaste_2024-04-28_14-35-53" style="zoom:33%;"><ol start="3"><li>A logger class provides a global logging access point in all the application components to carry out a logging operation.</li></ol><p>日志记录器类为所有应用程序组件提供了一个全局日志记录访问点，以便执行日志记录操作。</p><img src="'+z+'" alt="Snipaste_2024-04-28_14-37-18" style="zoom:33%;"><p><strong>Structural patterns</strong></p><p>These design patterns relate to class and object composition. 这些设计模式与类和对象的组成有关。</p><img src="'+P+'" alt="Snipaste_2024-04-28_14-42-22" style="zoom:50%;"><p>结构型模式描述如何将类或对象按某种布局组成更大的结构。它分为类结构型模式和对象结构型模式，前者采用继承机制来组织接口和类，后者釆用组合或聚合来组合对象。</p><p>代理（Proxy）模式：为某对象提供一种代理以控制对该对象的访问。即客户端通过代理间接地访问该对象，从而限制、增强或修改该对象的一些特性。 适配器（Adapter）模式：将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。 桥接（Bridge）模式：将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现的，从而降低了抽象和实现这两个可变维度的耦合度。 装饰（Decorator）模式：动态地给对象增加一些职责，即增加其额外的功能。 外观（Facade）模式：为多个复杂的子系统提供一个一致的接口，使这些子系统更加容易被访问。 享元（Flyweight）模式：运用共享技术来有效地支持大量细粒度对象的复用。 组合（Composite）模式：将对象组合成树状层次结构，使用户对单个对象和组合对象具有一致的访问性。</p><h2 id="_3-proxy-pattern" tabindex="-1"><a class="header-anchor" href="#_3-proxy-pattern"><span>3. Proxy Pattern</span></a></h2><p>provides an object a placeholder for another object to control access to it, including:</p><p>为一个对象提供了另一个对象的占位符，以控制对该对象的访问，包括</p><figure><img src="'+j+'" alt="Snipaste_2024-04-28_14-49-15" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-49-15</figcaption></figure><figure><img src="'+k+`" alt="Snipaste_2024-04-28_14-50-06" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_14-50-06</figcaption></figure><h3 id="_3-1-remote-proxy" tabindex="-1"><a class="header-anchor" href="#_3-1-remote-proxy"><span>3.1 Remote Proxy</span></a></h3><ul><li>provides a local representation of the object which is present in the different address location</li><li>provides the interface for remote resources such as web service resources.</li></ul><p>​ 为存在于不同地址位置的对象提供本地表示法。</p><p>​ 为远程资源（如网络服务资源）提供接口。</p><p>Example：</p><p>−Example: When an object and its methods is running on another computer, and cannot be called directly</p><p>−Solution: To open a socket on the remote machine and pass messages to the remote object via a protocol as if the object was local. The methods can be called on a proxy object that forwards the calls to the real object on the remote machine, such as in ASP.NET (Active Server Pages for .NET), and in Java’s Remote Method Invocation (RMI).</p><p>-举例说明当对象及其方法在另一台计算机上运行时，无法直接调用</p><p>-解决方法在远程计算机上打开一个套接字，通过协议向远程对象传递信息，就好像该对象是本地的一样。这些方法可以在代理对象上调用，代理对象会将调用转发给远程计算机上的真实对象，如 ASP.NET（.NET 的 Active Server Pages）和 Java 的远程方法调用（RMI）。</p><h3 id="_3-2-smart-proxy" tabindex="-1"><a class="header-anchor" href="#_3-2-smart-proxy"><span>3.2 Smart Proxy</span></a></h3><p>provides additional layer of security by interposing some actions when the object is accessed.</p><p>Example: a proxy to check if the real object is locked before it is accessed to ensure that no other object can change it.</p><p>通过在访问对象时插入一些操作来提供额外的安全层。</p><p>例如：在访问真实对象前，代理会检查该对象是否已锁定，以确保其他对象无法更改该对象。</p><h3 id="_3-3-protective-proxy" tabindex="-1"><a class="header-anchor" href="#_3-3-protective-proxy"><span>3.3 Protective Proxy</span></a></h3><ul><li><p>acts as an authorisation layer to verify if the actual user has access to appropriate content.</p></li><li><p>the proxy server can be used to provide a restrictive access to resources.</p></li></ul><p>作为一个授权层，可验证实际用户是否能访问适当的内容。</p><p>代理服务器可用于提供对资源的限制性访问。</p><p>Example：</p><p>​ −A company imposes a policy that employees will now be prohibited internet access based on their roles. All external emails websites will be blocked.</p><p>−Solution:</p><p>​ InternetAccess interface which consists of operation grantInternetAccess().</p><p>​ RealInternetAccess which allows of internet access for all.</p><p>​ ProxyInternetAccess which restricts the internet access, which will check user’s role and grant access based on their roles.</p><pre><code> -某公司实施了一项政策，根据员工的角色禁止他们访问互联网。所有外部电子邮件网站都将被屏蔽。
</code></pre><p>-解决方案</p><pre><code> InternetAccess 接口包括操作 grantInternetAccess()。

 RealInternetAccess 允许所有人访问互联网。

 ProxyInternetAccess 限制互联网访问，它将检查用户的角色并根据其角色授予访问权限。
</code></pre><h3 id="_3-4-virtual-proxy" tabindex="-1"><a class="header-anchor" href="#_3-4-virtual-proxy"><span>3.4 Virtual Proxy</span></a></h3><p>useful to save expensive memory resources when there is an expensive operation, multiple proxies can be created and pointed to the huge size memory consuming object for further processing.</p><p>The real object gets created only when a client first requests/accesses the object and after that, the proxy object can be referred and reused. This avoids duplication of the object and hence saving memory.</p><p>当需要进行昂贵的操作时，可以创建多个代理，并将其指向消耗大量内存的对象，以便进一步处理，这对节省昂贵的内存资源非常有用。</p><p>只有当客户端首次请求/访问对象时，才会创建真正的对象，之后就可以引用和重复使用代理对象。这就避免了对象的重复，从而节省了内存。</p><h3 id="_3-5-python-example" tabindex="-1"><a class="header-anchor" href="#_3-5-python-example"><span>3.5 Python Example</span></a></h3><p>Image loading：</p><p><img src="`+A+'" alt="Snipaste_2024-04-28_20-42-34" loading="lazy">-示例：真实图像包含大量数据，客户需要访问这些数据。</p><p>-解决方案</p><p>具有 display() 操作的图像界面。</p><p>RealImager 运行在不同的系统上，包含从数据库访问和加载的图像信息。</p><p>在不同系统上运行的 ProxyImage 可以在新系统中代表 RealImage。使用代理可以避免多次加载图像。</p><p>Python：</p><figure><img src="'+T+'" alt="Snipaste_2024-04-28_20-43-37" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_20-43-37</figcaption></figure><figure><img src="'+D+'" alt="Snipaste_2024-04-28_20-44-07" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_20-44-07</figcaption></figure><p>more Example：</p><p>the proxy pattern provides an proxy object (i.e. ATM) to the real object (i.e. BankBranch) for the customer to access</p><figure><img src="'+I+'" alt="Snipaste_2024-04-28_20-47-50" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_20-47-50</figcaption></figure><p>the Processor has RAM with cache memory; the proxy pattern provides an proxy object (i.e. Cache) to the real object (i.e. RAM) for the memory access.</p><p>处理器有带高速缓冲存储器的 RAM；代理模式为真实对象（即 RAM）提供了一个代理对象（即高速缓冲存储器），用于内存访问。</p><figure><img src="'+E+'" alt="Snipaste_2024-04-28_21-49-56" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-28_21-49-56</figcaption></figure><h2 id="_4-adapter-patterns" tabindex="-1"><a class="header-anchor" href="#_4-adapter-patterns"><span>4. Adapter Patterns</span></a></h2><p>−works as a bridge between two incompatible interfaces.</p><p>−combines the capability of two independent interfaces</p><p>-充当两个不兼容接口之间的桥梁。</p><p>-整合两个独立接口的功能</p><figure><img src="'+C+'" alt="Snipaste_2024-04-29_08-17-26" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_08-17-26</figcaption></figure><p>Example:</p><p>card reader which acts as an adapter between memory card and a laptop. A memory card can be plugged into card reader and card reader into the laptop so that memory card can be read via laptop.</p><p>读卡器是存储卡和笔记本电脑之间的适配器。将存储卡插入读卡器，再将读卡器插入笔记本电脑，即可通过笔记本电脑读取存储卡。</p><p>(移动硬盘)</p><img src="'+R+'" alt="Snipaste_2024-04-29_08-20-03" style="zoom:67%;"><figure><img src="'+M+'" alt="Snipaste_2024-04-29_09-14-11" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_09-14-11</figcaption></figure><h3 id="_4-1-python-example" tabindex="-1"><a class="header-anchor" href="#_4-1-python-example"><span>4.1 Python Example</span></a></h3><figure><img src="'+B+'" alt="Snipaste_2024-04-29_09-42-01" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_09-42-01</figcaption></figure><figure><img src="'+q+'" alt="Snipaste_2024-04-29_10-59-47" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_10-59-47</figcaption></figure><figure><img src="'+N+'" alt="Snipaste_2024-04-29_11-00-12" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_11-00-12</figcaption></figure><figure><img src="'+F+'" alt="Snipaste_2024-04-29_11-00-33" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_11-00-33</figcaption></figure><p>以上代码逻辑是，创建一个需要调用的类，创建一个Adapter有着这个类一部分的功能。创建一个Target调用Adapter里的方法。</p><p>一个例子是：调用不同的数据库： the database drivers to different types of databases</p><figure><img src="'+G+'" alt="Snipaste_2024-04-29_11-01-05" tabindex="0" loading="lazy"><figcaption>Snipaste_2024-04-29_11-01-05</figcaption></figure>',152),J=[Z];function X(L,Y){return a(),t("div",null,J)}const V=e(U,[["render",X],["__file","Gof.html.vue"]]),W=JSON.parse(`{"path":"/zh/Software_Design/Gof.html","title":"Design Patterns--Gof 01","lang":"zh-CN","frontmatter":{"title":"Design Patterns--Gof 01","icon":"c","date":"2024-04-27T21:22:37.000Z","author":"XiaoXianYue","isOriginal":true,"category":["Python","大二下"],"tag":["Python","大二下"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"Snipaste_2024-04-27_21-45-41Snipaste_2024-04-27_21-45-41 Creational Patterns separates a system from the creation, composition and representation of its objects , which increase...","head":[["meta",{"property":"og:url","content":"https://bougiemoonintaurus/zh/Software_Design/Gof.html"}],["meta",{"property":"og:site_name","content":"奶酪奶酪"}],["meta",{"property":"og:title","content":"Design Patterns--Gof 01"}],["meta",{"property":"og:description","content":"Snipaste_2024-04-27_21-45-41Snipaste_2024-04-27_21-45-41 Creational Patterns separates a system from the creation, composition and representation of its objects , which increase..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T15:56:11.000Z"}],["meta",{"property":"article:author","content":"XiaoXianYue"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:tag","content":"大二下"}],["meta",{"property":"article:published_time","content":"2024-04-27T21:22:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-16T15:56:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Design Patterns--Gof 01\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-27T21:22:37.000Z\\",\\"dateModified\\":\\"2024-05-16T15:56:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoXianYue\\"}]}"]]},"headers":[{"level":2,"title":"1.  Factory Method: UML","slug":"_1-factory-method-uml","link":"#_1-factory-method-uml","children":[{"level":3,"title":"1.1 图示","slug":"_1-1-图示","link":"#_1-1-图示","children":[]},{"level":3,"title":"1.2 Python Example:","slug":"_1-2-python-example","link":"#_1-2-python-example","children":[]},{"level":3,"title":"1.3 benefits","slug":"_1-3-benefits","link":"#_1-3-benefits","children":[]},{"level":3,"title":"1.4 实例","slug":"_1-4-实例","link":"#_1-4-实例","children":[]}]},{"level":2,"title":"2. Singleton Pattern","slug":"_2-singleton-pattern","link":"#_2-singleton-pattern","children":[{"level":3,"title":"2.1 图示","slug":"_2-1-图示","link":"#_2-1-图示","children":[]},{"level":3,"title":"2.2 Python Example","slug":"_2-2-python-example","link":"#_2-2-python-example","children":[]},{"level":3,"title":"2.3 Use ‘lazy initialization’ (creation on first use)","slug":"_2-3-use-lazy-initialization-creation-on-first-use","link":"#_2-3-use-lazy-initialization-creation-on-first-use","children":[]},{"level":3,"title":"2.4 Example","slug":"_2-4-example","link":"#_2-4-example","children":[]}]},{"level":2,"title":"3.  Proxy Pattern","slug":"_3-proxy-pattern","link":"#_3-proxy-pattern","children":[{"level":3,"title":"3.1 Remote Proxy","slug":"_3-1-remote-proxy","link":"#_3-1-remote-proxy","children":[]},{"level":3,"title":"3.2 Smart Proxy","slug":"_3-2-smart-proxy","link":"#_3-2-smart-proxy","children":[]},{"level":3,"title":"3.3 Protective Proxy","slug":"_3-3-protective-proxy","link":"#_3-3-protective-proxy","children":[]},{"level":3,"title":"3.4 Virtual Proxy","slug":"_3-4-virtual-proxy","link":"#_3-4-virtual-proxy","children":[]},{"level":3,"title":"3.5 Python Example","slug":"_3-5-python-example","link":"#_3-5-python-example","children":[]}]},{"level":2,"title":"4. Adapter Patterns","slug":"_4-adapter-patterns","link":"#_4-adapter-patterns","children":[{"level":3,"title":"4.1 Python Example","slug":"_4-1-python-example","link":"#_4-1-python-example","children":[]}]}],"git":{"createdTime":1714401832000,"updatedTime":1715874971000,"contributors":[{"name":"Xiaoxianyue","email":"2310219843@qq.com","commits":10}]},"readingTime":{"minutes":11.5,"words":3450},"filePathRelative":"zh/Software_Design/Gof.md","localizedDate":"2024年4月27日","excerpt":"<figure><figcaption>Snipaste_2024-04-27_21-45-41</figcaption></figure>\\n<p><strong>Creational Patterns</strong></p>\\n<ul>\\n<li>\\n<p>separates a system from the  creation, composition and  representation of its objects ,  which increases the system's  flexibility in what, who, how, and  when of object creation.</p>\\n<p>它将系统与其对象的创建、组合和表示分离开来，从而提高了系统在对象创建的内容、对象创建者、创建方式和创建时间方面的灵活性。</p>\\n</li>\\n<li>\\n<p>encapsulates the knowledge about  which classes a system uses and  hides the details of how the  instances of these classes are  created and structured.</p>\\n<p>封装了系统使用哪些类的知识，并隐藏了如何创建和构建这些类的实例的细节。</p>\\n</li>\\n</ul>","autoDesc":true}`);export{V as comp,W as data};