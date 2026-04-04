import{i as e,r as t,s as n,t as r}from"./app-Dhh2Ff1V.js";var i=JSON.parse(`{"path":"/%E5%89%8D%E7%AB%AF/jquery.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1593834026000,"contributors":[{"name":"bhaltair","username":"bhaltair","email":"qin.ming101@gmail.com","commits":4,"url":"https://github.com/bhaltair"},{"name":"wangqi","username":"wangqi","email":"njcit_wangqi@163.com","commits":4,"url":"https://github.com/wangqi"}],"changelog":[{"hash":"db7feb592acca99a6176729f611b2feae36c829d","time":1593834026000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(目录调整):"},{"hash":"1f9fb2d193d6a7b22be376b21b4586647bab3c28","time":1593137011000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端):"},{"hash":"9fe9e5a4019f785aac57d785d15f43fbd27b43e7","time":1593101417000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端): 加入 dumi 构建"},{"hash":"ed933b4a906b008ed77198d0c74a2cb41ffbb204","time":1592276471000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"12bc22d872354f237c19c5ef31882e13cef9c764","time":1505355738000,"email":"njcit_wangqi@163.com","author":"bhaltair","message":"delete sth"},{"hash":"23eddeff2ab4d36a105318da5b3a63859cd1fea5","time":1504781768000,"email":"njcit_wangqi@163.com","author":"bhaltair","message":"add"},{"hash":"09634befada57498afc9da716b602f04941f67ec","time":1504247882000,"email":"njcit_wangqi@163.com","author":"bhaltair","message":"add"},{"hash":"5547d48dba92dd14c3d3c6725f7f6e6722fb4256","time":1502294211000,"email":"qin.ming101@gmail.com","author":"bhaltair","message":"add"}]},"filePathRelative":"前端/_jquery.md"}`),a={name:`_jquery.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">jquery.fn = jquery.prototype</span>
<span class="line">jquery.fn.extend就是在原型对象上添加方法</span>
<span class="line">jquery.extend 添加静态方法</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="好的习惯" tabindex="-1"><a class="header-anchor" href="#好的习惯"><span>好的习惯</span></a></h2><ol><li>多个参数使用对象字面量存储</li><li>不要将css写在jquery里面</li><li>使用链式语法</li><li>可以对事件使用自定义的namespace</li></ol><h2 id="jquery-插件" tabindex="-1"><a class="header-anchor" href="#jquery-插件"><span>jquery 插件</span></a></h2><h3 id="原则套路" tabindex="-1"><a class="header-anchor" href="#原则套路"><span>原则套路</span></a></h3><ol><li>总是把插件包装在闭包里</li><li>总是返回this 保持链式调用</li><li>传给一个option对象</li><li>总是为方法、事件和数据定义namespace</li><li>单个插件，定义一个$.fn.plugin</li><li>使用默认值扩展选项</li><li>函数调用前使用分号</li><li>缓存数组长度</li></ol><h3 id="框架" tabindex="-1"><a class="header-anchor" href="#框架"><span>框架</span></a></h3><div class="language-jquery line-numbers-mode" data-highlighter="prismjs" data-ext="jquery"><pre><code class="language-jquery"><span class="line">;(function(global, factory) {</span>
<span class="line">    factory(global);</span>
<span class="line">}(typeof window !== &quot;undefined&quot; ? window : this, function(window, noGlobal) {</span>
<span class="line">    var jQuery = function( selector, context ) {</span>
<span class="line">        return new jQuery.fn.init( selector, context );</span>
<span class="line">    };</span>
<span class="line">    jQuery.fn = jQuery.prototype = {};</span>
<span class="line">    // 核心方法</span>
<span class="line">    // 回调系统</span>
<span class="line">    // 异步队列</span>
<span class="line">    // 数据缓存</span>
<span class="line">    // 队列操作</span>
<span class="line">    // 选择器引</span>
<span class="line">    // 属性操作</span>
<span class="line">    // 节点遍历</span>
<span class="line">    // 文档处理</span>
<span class="line">    // 样式操作</span>
<span class="line">    // 属性操作</span>
<span class="line">    // 事件体系</span>
<span class="line">    // AJAX交互</span>
<span class="line">    // 动画引擎</span>
<span class="line">    return jQuery;</span>
<span class="line">}));</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};