import{i as e,r as t,s as n,t as r}from"./app-Dhh2Ff1V.js";var i=JSON.parse(`{"path":"/%E5%90%8E%E7%AB%AF/nginx.html","title":"Nginx","lang":"en-US","frontmatter":{},"git":{"updatedTime":1593925509000,"contributors":[{"name":"wangqi","username":"wangqi","email":"njcit_wangqi@163.com","commits":8,"url":"https://github.com/wangqi"}],"changelog":[{"hash":"695ba415a68f880ea18bdbf5903aa1601045abf8","time":1593925509000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"文档(前端):"},{"hash":"db7feb592acca99a6176729f611b2feae36c829d","time":1593834026000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(目录调整):"},{"hash":"1f9fb2d193d6a7b22be376b21b4586647bab3c28","time":1593137011000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端):"},{"hash":"9fe9e5a4019f785aac57d785d15f43fbd27b43e7","time":1593101417000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端): 加入 dumi 构建"},{"hash":"317ab38f4e5ceeac153eb23c4c89836ff2bc3798","time":1592635913000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"69811d80473f392263635e0b1505ca7fba334cf4","time":1592551371000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"0d157d10e297c12b2e56a72d316de3fed32392f8","time":1592551257000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"ed933b4a906b008ed77198d0c74a2cb41ffbb204","time":1592276471000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"}]},"filePathRelative":"后端/nginx.md"}`),a={name:`nginx.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h1><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>默认配置文件位于</p><blockquote><p>/etc/nginx/nginx.conf</p></blockquote><h3 id="配置文件的结构" tabindex="-1"><a class="header-anchor" href="#配置文件的结构"><span>配置文件的结构</span></a></h3><p><img src="https://cdn.nlark.com/yuque/0/2019/png/92877/1554952763237-fb523262-349b-469e-a04e-a48ddf04651f.png" alt="nginx.png"></p><ul><li>main <ul><li>nginx 的全局配置</li></ul></li><li>events <ul><li>设置网络连接</li></ul></li><li>http <ul><li>可以嵌套多个 server，配置代理、缓存、日志等功能和第三方模块的配置</li><li>upstream <ul><li>配置后端服务器具体地址</li><li>负载均衡配置在这里配置</li></ul></li><li>server <ul><li>配置虚拟主机的参数，可以配置多个</li><li>location <ul><li>可以配置多个 location</li><li>配置请求的路由</li></ul></li><li>location</li></ul></li><li>server <ul><li>location</li><li>location</li></ul></li></ul></li></ul><h2 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量"><span>内置变量</span></a></h2><ul><li>$host 请求信息中的 Host</li><li>$request_method</li><li>$args 请求参数</li><li>$content_length 请求头中的 Content-length 字段</li><li>$http_user_agent 客户端 agent 信息</li><li>$http_cookie 客户端 cookie 信息</li><li>$remote_port 客户端端口</li><li>$remote_addr 客户端 IP</li><li>$server_addr 服务器地址</li><li>$server_protocol 请求使用的协议</li><li>$server_name 服务器名称</li><li>$server_port 服务器的端口号</li></ul><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板"><span>模板</span></a></h2><h3 id="静态文件" tabindex="-1"><a class="header-anchor" href="#静态文件"><span>静态文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">server {</span>
<span class="line">  listen 80;</span>
<span class="line">  server_name www.taobao.com;</span>
<span class="line"></span>
<span class="line">  location / {</span>
<span class="line">    root   /Users/ringcrl/www/taobao;</span>
<span class="line">    autoindex on;</span>
<span class="line">    index  index.html;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">server {</span>
<span class="line">  listen 80;</span>
<span class="line">  server_name api.taobao.com</span>
<span class="line"></span>
<span class="line">  location / {</span>
<span class="line">    proxy_pass http://127.0.0.1:5555;</span>
<span class="line">    autoindex on;</span>
<span class="line">    index index.html;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可视化配置" tabindex="-1"><a class="header-anchor" href="#可视化配置"><span>可视化配置</span></a></h2><p>https://www.digitalocean.com/community/tools/nginx</p><p>https://nginxconfig.io/</p><h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务"><span>服务</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">nginx <span class="token parameter variable">-t</span> //检查配置文件语法问题</span>
<span class="line">nginx <span class="token parameter variable">-s</span> reload  // 重新载入配置文件</span>
<span class="line">nginx <span class="token parameter variable">-s</span> stop</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看服务运行情况</span></span>
<span class="line"><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看端口号</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># systemctl 控制服务</span></span>
<span class="line">systemctl stop nginx.service</span>
<span class="line">systemctl start nginx.service</span>
<span class="line">systemctl restart nginx.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态匹配" tabindex="-1"><a class="header-anchor" href="#动态匹配"><span>动态匹配</span></a></h2><h3 id="根据ip访问控制" tabindex="-1"><a class="header-anchor" href="#根据ip访问控制"><span>根据ip访问控制</span></a></h3><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">deny</span>   123.9.51.42</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">allow</span>  45.76.202.231</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适配-pc-或-mobile" tabindex="-1"><a class="header-anchor" href="#适配-pc-或-mobile"><span>适配 PC 或 Mobile</span></a></h3><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">server</span></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server_name</span> nginx2.jspang.com</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/pc</span><span class="token punctuation">;</span></span>
<span class="line">         <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~* <span class="token string">&#39;(Android|webOS|iPhone|iPod|BlackBerry)&#39;</span>)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/mobile</span><span class="token punctuation">;</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">         <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">### 清除缓存</span></span>
<span class="line"></span>
<span class="line">\`\`\`nginx</span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> ~* \\.(js|css|png|jpg|gif)$</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-store</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">## 虚拟主机</span>
<span class="line"></span>
<span class="line">?&gt; 利用虚拟主机把多个不同域名的网站部署在同一台服务器上</span>
<span class="line"></span>
<span class="line">\`\`\`nginx</span>
<span class="line"># 虚拟主机server块</span>
<span class="line">server {</span>
<span class="line">  # 端口</span>
<span class="line">  listen   8080;</span>
<span class="line">  # 匹配请求中的host值</span>
<span class="line">  server_name  localhost;</span>
<span class="line">  </span>
<span class="line">  # 监听请求路径</span>
<span class="line">  location / {</span>
<span class="line">      # 查找目录</span>
<span class="line">      root /source;</span>
<span class="line">      # 默认查找</span>
<span class="line">      index index.html index.htm;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">server{</span>
<span class="line">  listen 80;</span>
<span class="line">  server_name nginx2.jspang.com;</span>
<span class="line">  root /usr/share/nginx/html/html8001;</span>
<span class="line">  index index.html;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location"><span>location</span></a></h2><h3 id="匹配规则" tabindex="-1"><a class="header-anchor" href="#匹配规则"><span>匹配规则</span></a></h3><ul><li>/images/ 匹配任何以 /images/ 开头的地址</li><li>/ 通用匹配，如果没有其它匹配，任何请求都会匹配到</li><li>^~ 开头表示 uri 以某个常规字符串开头，不是正则匹配</li><li>~* 开头表示不区分大小写的正则匹配</li><li>~ 开头表示区分大小写的正则匹配</li><li>= 开头表示精确匹配 <ul><li>如 config A 中只匹配根目录结尾的请求，后面不能带任何字符串</li></ul></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">location  <span class="token operator">=</span> / <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># 精确匹配 /，主机名后面不能带任何字符串</span></span>
<span class="line">  <span class="token punctuation">[</span> config A <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求</span></span>
<span class="line">  <span class="token comment"># 但是正则和最长字符串会优先匹配，无其他匹配内容的时候才走到这里</span></span>
<span class="line">  <span class="token punctuation">[</span> config B <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">location /documents/ <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索</span></span>
<span class="line">  <span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span></span>
<span class="line">  <span class="token punctuation">[</span> config C <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">location ^~ /images/ <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条</span></span>
<span class="line">  <span class="token punctuation">[</span> config D <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment"># 匹配所有以 gif、jpg 或 jpeg 结尾的请求</span></span>
<span class="line">  <span class="token comment"># 所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则</span></span>
<span class="line">  <span class="token punctuation">[</span> config E <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h3><ol><li>location =</li><li>location 完整路径</li><li>location ^~ 开头路径</li><li>location 、* 正则顺序</li><li>location 部分起始路径</li><li>location /</li></ol><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>map</span></a></h2><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">map</span> <span class="token variable">$sent_http_content_type</span> <span class="token variable">$expires</span></span> <span class="token punctuation">{</span></span>
<span class="line">    &quot;text/html&quot;                 <span class="token directive"><span class="token keyword">epoch</span></span><span class="token punctuation">;</span></span>
<span class="line">    &quot;text/html<span class="token punctuation">;</span> charset=utf-8&quot;  <span class="token directive"><span class="token keyword">epoch</span></span><span class="token punctuation">;</span></span>
<span class="line">    &quot;text/css&quot;                  <span class="token directive"><span class="token keyword">max</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">application/javascript</span>     max</span><span class="token punctuation">;</span></span>
<span class="line">    ~image/                    <span class="token directive"><span class="token keyword">max</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">default</span>                     <span class="token boolean">off</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">expires</span> <span class="token variable">$expires</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>epoch <ul><li>set “Expires” to the value “Thu, 01 Jan 1970 00:00:01 GMT”,</li><li>set “Cache-Control” to “no-cache”.</li></ul></li></ul><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 第一个必选规则</span></span>
<span class="line">location <span class="token operator">=</span> / <span class="token punctuation">{</span></span>
<span class="line">  proxy_pass http://tomcat:8080/index</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 第二个必选规则是处理静态文件请求，这是 nginx 作为 http 服务器的强项</span></span>
<span class="line"><span class="token comment"># 有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用</span></span>
<span class="line">location ^~ /static/ <span class="token punctuation">{</span></span>
<span class="line">  root /webroot/static/<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>css<span class="token operator">|</span>js<span class="token operator">|</span>ico<span class="token punctuation">)</span>$ <span class="token punctuation">{</span></span>
<span class="line">  root /webroot/res/<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 第三个规则就是通用规则，用来转发动态请求到后端应用服务器</span></span>
<span class="line"><span class="token comment"># 非静态文件请求就默认是动态请求，自己根据实际把握</span></span>
<span class="line"><span class="token comment"># 毕竟目前的一些框架的流行，带 .php、.jsp 后缀的情况很少了</span></span>
<span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">  proxy_pass http://tomcat:8080/</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2><h3 id="add-header" tabindex="-1"><a class="header-anchor" href="#add-header"><span>add_header</span></a></h3><ul><li>http、server和location三处均可配置add_header，但起作用的是最接近的配置，往上的配置都会失效</li><li>仅当当前层级中没有 add_header 指令才会继承父级设置</li></ul><h3 id="referer" tabindex="-1"><a class="header-anchor" href="#referer"><span>referer</span></a></h3><ul><li>浏览器会在请求头加入 referer 字段，指示当前访问的网页</li><li>通过 referer 模块的 invalid_referer 变量拒绝非正常访问 <ul><li>图片防盗 <ul><li>http 协议中，如果从一个网页跳到另一个网页，http 头字段里面会带个 Referer。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链</li></ul></li><li>破解盗链 <ul><li>抹掉 referer</li></ul></li></ul></li></ul><h3 id="realip-真实用户-ip" tabindex="-1"><a class="header-anchor" href="#realip-真实用户-ip"><span>realip 真实用户 ip</span></a></h3><ul><li>X-Forworded-For 头部传递多个 IP</li><li>X-Real-IP 传递用户 IP</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">  root   /Users/ringcrl/www<span class="token punctuation">;</span></span>
<span class="line">  index  index.html<span class="token punctuation">;</span></span>
<span class="line">  proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span></span>
<span class="line">  proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="limit-conn-与-limit-req" tabindex="-1"><a class="header-anchor" href="#limit-conn-与-limit-req"><span>limit_conn 与 limit_req</span></a></h3><h3 id="acccess-控制-ip-访问" tabindex="-1"><a class="header-anchor" href="#acccess-控制-ip-访问"><span>acccess 控制 IP 访问</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">location / <span class="token punctuation">{</span></span>
<span class="line">  allow <span class="token number">192.168</span>.1.255<span class="token punctuation">;</span></span>
<span class="line">  deny all<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server-name-in-redirect-重定向" tabindex="-1"><a class="header-anchor" href="#server-name-in-redirect-重定向"><span>server_name_in_redirect 重定向</span></a></h3><h3 id="index-和-autoindex" tabindex="-1"><a class="header-anchor" href="#index-和-autoindex"><span>index 和 autoindex</span></a></h3><ul><li>index 优先级高于 autoindex</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">  server_name autoindex.chenng.cn<span class="token punctuation">;</span></span>
<span class="line">  listen <span class="token number">8080</span><span class="token punctuation">;</span></span>
<span class="line">  location / <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin class-name">alias</span> html/<span class="token punctuation">;</span></span>
<span class="line">    autoindex on<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># index a.html</span></span>
<span class="line">    autoindex_exact_size off<span class="token punctuation">;</span></span>
<span class="line">    autoindex_format html<span class="token punctuation">;</span></span>
<span class="line">    autoindex_localtime on<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="log-打印日志" tabindex="-1"><a class="header-anchor" href="#log-打印日志"><span>log 打印日志</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$remote_addr 与 $http_x_forwarded_for 用以记录客户端的 ip 地址</span>
<span class="line">$remote_user 用来记录客户端用户名称</span>
<span class="line">$time_local 用来记录访问时间与时区</span>
<span class="line">$request 用来记录请求的url与http协议</span>
<span class="line">$status 用来记录请求状态；成功是200</span>
<span class="line">$body_bytes_s ent 记录发送给客户端文件主体内容大小</span>
<span class="line">$http_referer 用来记录从那个页面链接访问过来的</span>
<span class="line">$http_user_agent 记录客户端浏览器的相关信息</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keepalive-复用-tcp-连接" tabindex="-1"><a class="header-anchor" href="#keepalive-复用-tcp-连接"><span>keepalive 复用 TCP 连接</span></a></h3><h3 id="proxy-pass-反向代理解决跨域" tabindex="-1"><a class="header-anchor" href="#proxy-pass-反向代理解决跨域"><span>proxy_pass 反向代理解决跨域</span></a></h3><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">proxy_set_header</span> X-NginX-Proxy true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">&quot;upgrade&quot;</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:<span class="token variable">$node_port</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>   </span>
<span class="line">    <span class="token comment"># 请求host传给后端</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 请求ip 传给后端</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 请求协议传给后端</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 路径重写</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">rewrite</span>  /api/(.*)  /<span class="token variable">$1</span>  break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 代理服务器</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:9000</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>$http_host、$remote_addr、$scheme 为Nginx内置变量。</li><li>break 继续本次请求后面的处理 ,停止匹配下面的location</li><li>proxy_pass 代理服务器。</li></ul><h3 id="静态资源服务器" tabindex="-1"><a class="header-anchor" href="#静态资源服务器"><span>静态资源服务器</span></a></h3><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">location</span> ~* \\.(png|gif|jpg|jpeg)$</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">root</span>    /root/static/</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token directive"><span class="token keyword">autoindex</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">access_log</span>  <span class="token boolean">off</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">expires</span>     <span class="token number">10h</span></span><span class="token punctuation">;</span><span class="token comment"># 设置过期时间为10小时          </span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存指令" tabindex="-1"><a class="header-anchor" href="#缓存指令"><span>缓存指令</span></a></h3><h3 id="http2" tabindex="-1"><a class="header-anchor" href="#http2"><span>HTTP2</span></a></h3><p>优点：</p><ol><li>传输数据量大幅度减少</li></ol><ul><li>以二进制方式传输</li><li>头部压缩</li></ul><ol start="2"><li>多路复用</li><li>服务端消息推送</li></ol><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> http2.chenng.cn</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">root</span> html</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">http2_push</span> /mirrot.txt</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">http2_push</span> /video.mp4</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">ssl_certificate</span> ...</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">ssl_certificate_key</span> ...</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳转到-h5" tabindex="-1"><a class="header-anchor" href="#跳转到-h5"><span>跳转到 H5</span></a></h3><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">server_name</span> www.xxx.com</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/access.log</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/error.log</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1k</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">2</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript application/x-javascript text/css application/xml text/javascript image/jpeg image/gif image/png</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$mobile_rewrite</span> do_not_perform</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~* <span class="token string">&quot;(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino&quot;</span>)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$mobile_rewrite</span> perform</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~* <span class="token string">&quot;^(1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-)&quot;</span>)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$mobile_rewrite</span> perform</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token directive"><span class="token keyword">proxy_pass</span> http://10.81.62.45:32520/static/</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启-gzip" tabindex="-1"><a class="header-anchor" href="#开启-gzip"><span>开启 gzip</span></a></h3><ul><li>经过gzip压缩后，页面大小可以变为原来的30%甚至更小</li><li>gzip是需要服务器和浏览器同时支持的 <ul><li>当浏览器支持gzip压缩时，会在请求消息中包含Accept-Encoding:gzip</li><li>这样Nginx就会向浏览器发送听过gzip后的内容，同时在相应信息头中加入Content-Encoding:gzip</li></ul></li></ul><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment"># 开启gzip 压缩</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 设置压缩级别，压缩级别越高压缩时间越长  （1-9）</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">4</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 设置压缩的最小字节数， 页面Content-Length获取</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment"># 设置压缩文件的类型  （text/html)</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/javascript text/css</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3><ul><li>轮询（默认），请求过来后，Nginx 随机分配流量到任一服务器</li><li>weight=number 设置服务器的权重，默认为1，权重大的会被优先分配<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:3000 weight=2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:3001 weight=1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>backup 标记为备份服务器。当主服务器不可用时，将传递与备份服务器的连接。<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">upstream backend {</span>
<span class="line">    server 127.0.0.1:3000 backup;</span>
<span class="line">    server 127.0.0.1:3001;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>ip_hash 保持会话，保证同一客户端始终访问一台服务器。<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">ip_hash</span></span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:3000 backup</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:3001</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>least_conn 优先分配最少连接数的服务器，避免服务器超载请求过多。<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">upstream backend {</span>
<span class="line">    least_conn;</span>
<span class="line">    server 127.0.0.1:3000;</span>
<span class="line">    server 127.0.0.1:3001;</span>
<span class="line">}  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="一个例子" tabindex="-1"><a class="header-anchor" href="#一个例子"><span>一个例子</span></a></h4><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre><code class="language-nginx"><span class="line"><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token directive"><span class="token keyword">upstream</span> backend</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:3000</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:3001</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    ...</span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">listen</span>      <span class="token number">9000</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Scheme <span class="token variable">$scheme</span></span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token directive"><span class="token keyword">proxy_pass</span> backend</span><span class="token punctuation">;</span> </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><p>https://zhuanlan.zhihu.com/p/51770774</p><p>https://juejin.im/post/5bd7a6046fb9a05d2c43f8c7#heading-1</p>`,79)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};