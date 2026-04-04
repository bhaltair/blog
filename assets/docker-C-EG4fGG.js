import{i as e,r as t,s as n,t as r}from"./app-Dhh2Ff1V.js";var i=JSON.parse(`{"path":"/%E5%90%8E%E7%AB%AF/docker.html","title":"Docker","lang":"en-US","frontmatter":{},"git":{"updatedTime":1593834026000,"contributors":[{"name":"wangqi","username":"wangqi","email":"njcit_wangqi@163.com","commits":5,"url":"https://github.com/wangqi"}],"changelog":[{"hash":"db7feb592acca99a6176729f611b2feae36c829d","time":1593834026000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(目录调整):"},{"hash":"1f9fb2d193d6a7b22be376b21b4586647bab3c28","time":1593137011000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端):"},{"hash":"9fe9e5a4019f785aac57d785d15f43fbd27b43e7","time":1593101417000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端): 加入 dumi 构建"},{"hash":"6160b2f78be7798ad12012d0136293750918da2c","time":1592895927000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"ed933b4a906b008ed77198d0c74a2cb41ffbb204","time":1592276471000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"}]},"filePathRelative":"后端/docker.md"}`),a={name:`docker.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h1><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 docker</span></a></h2><h2 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像"><span>镜像</span></a></h2><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像"><span>构建镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> webapp:latest <span class="token builtin class-name">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="发布镜像" tabindex="-1"><a class="header-anchor" href="#发布镜像"><span>发布镜像</span></a></h3><h3 id="镜像启动" tabindex="-1"><a class="header-anchor" href="#镜像启动"><span>镜像启动</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">docker</span> pull ringcrl/node_rss_bot</span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> node_rss_bot <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /var/data:/app/data/ <span class="token parameter variable">-e</span> <span class="token assign-left variable">RSSBOT_TOKEN</span><span class="token operator">=</span><span class="token operator">&lt;</span>TG_TOKEN<span class="token operator">&gt;</span> ringcrl/node_rss_bot</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新镜像" tabindex="-1"><a class="header-anchor" href="#更新镜像"><span>更新镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看镜像</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取最新镜像</span></span>
<span class="line"><span class="token function">docker</span> pull ringcrl/node_rss_bot</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">kill</span> 26cd26b1a5d5</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> 26cd26b1a5d5</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新创建容器</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> node_rss_bot <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /var/data:/app/data/ <span class="token parameter variable">-e</span> <span class="token assign-left variable">RSSBOT_TOKEN</span><span class="token operator">=</span><span class="token operator">&lt;</span>TG_TOKEN<span class="token operator">&gt;</span> ringcrl/node_rss_bot</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像"><span>删除镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 删除镜像</span></span>
<span class="line"><span class="token function">docker</span> image <span class="token function">rm</span> <span class="token operator">&lt;</span>IMAGE ID<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除全部悬虚镜像 </span></span>
<span class="line"><span class="token function">docker</span> image prune</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除全部没有被容器使用的镜像</span></span>
<span class="line"><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取镜像" tabindex="-1"><a class="header-anchor" href="#拉取镜像"><span>拉取镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 搜索镜像</span></span>
<span class="line"><span class="token function">docker</span> search ubuntu</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取官方镜像</span></span>
<span class="line"><span class="token function">docker</span> pull ubuntu:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取非官方镜像</span></span>
<span class="line"><span class="token function">docker</span> pull ringcrl/node_rss_bot</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 拉取第三方镜像仓库的镜像</span></span>
<span class="line"><span class="token function">docker</span> pull gcr.ioringcrl/node_rss_bot</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器"><span>容器</span></a></h2><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h3><ul><li>Created：容器已经被创建，容器所需的相关资源已经准备就绪，但容器中的程序还未处于运行状态</li><li>Running：容器正在运行，也就是容器中的应用正在运行</li><li>Paused：容器已暂停，表示容器中的所有程序都处于暂停 ( 不是停止 ) 状态</li><li>Stopped：容器处于停止状态，占用的资源和沙盒环境都依然存在，只是容器中的应用程序均已停止</li><li>Deleted：容器已删除，相关占用的资源及存储在 Docker 中的管理信息也都已释放和移除</li></ul><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 拉取镜像</span></span>
<span class="line"><span class="token function">docker</span> pull nginx:1.12</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建容器</span></span>
<span class="line"><span class="token function">docker</span> create <span class="token parameter variable">--name</span> nginx nginx:1.12</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动容器</span></span>
<span class="line"><span class="token function">docker</span> start nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># run 同时创建和启动，-d 是在后台运行</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span> <span class="token comment"># 后台运行</span></span>
<span class="line">  <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span> <span class="token comment"># 为容器命名</span></span>
<span class="line">  nginx:1.12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="管理" tabindex="-1"><a class="header-anchor" href="#管理"><span>管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看所有容器</span></span>
<span class="line"><span class="token function">docker</span> container <span class="token function">ls</span> <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止容器</span></span>
<span class="line"><span class="token function">docker</span> container stop <span class="token operator">&lt;</span>NAME<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除容器</span></span>
<span class="line"><span class="token function">docker</span> container <span class="token function">rm</span> <span class="token operator">&lt;</span>NAME<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止并删除容器</span></span>
<span class="line"><span class="token function">docker</span> container <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>CONTAINER ID<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看容器状态</span></span>
<span class="line"><span class="token function">docker</span> inspect <span class="token operator">&lt;</span>NAME<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 快速清理所有容器</span></span>
<span class="line"><span class="token function">docker</span> container <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> container <span class="token function">ls</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span> <span class="token parameter variable">-f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进入" tabindex="-1"><a class="header-anchor" href="#进入"><span>进入</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx <span class="token function">bash</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器互联" tabindex="-1"><a class="header-anchor" href="#容器互联"><span>容器互联</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 通过 docker create 或 docker run 时通过 --link 选项进行配置</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_RANDOM_ROOT_PASSWORD</span><span class="token operator">=</span>yes mysql</span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> webapp <span class="token parameter variable">--link</span> mysql webapp:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 连接方式</span></span>
<span class="line">String url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://mysql:3306/webapp&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暴露端口" tabindex="-1"><a class="header-anchor" href="#暴露端口"><span>暴露端口</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在容器创建时使用 --expose 进行定义，不暴露的端口不能访问</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> mysql <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_RANDOM_ROOT_PASSWORD</span><span class="token operator">=</span>yes <span class="token parameter variable">--expose</span> <span class="token number">13306</span> <span class="token parameter variable">--expose</span> <span class="token number">23306</span> mysql:5.7</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="端口映射" tabindex="-1"><a class="header-anchor" href="#端口映射"><span>端口映射</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 在创建容器时使用 -p 创建端口映射</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化"><span>数据持久化</span></a></h2><ul><li>沙盒文件系统是跟随容器生命周期所创建和移除的，数据无法直接被持久化存储</li><li>由于容器隔离，我们很难从容器外部获得或操作容器内部文件中的数据</li></ul><h4 id="容器数据" tabindex="-1"><a class="header-anchor" href="#容器数据"><span>容器数据</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动容器</span></span>
<span class="line"><span class="token function">docker</span> container run <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> percy <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span></span>
<span class="line">  ubuntu:latest <span class="token punctuation">\\</span></span>
<span class="line">  /bin/bash</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 新建文件</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;test data storage&quot;</span> <span class="token operator">&gt;</span> tmp/newfile</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止容器</span></span>
<span class="line"><span class="token function">docker</span> container stop percy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新开始容器</span></span>
<span class="line"><span class="token function">docker</span> container start percy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 进入容器，容器内数据还存在</span></span>
<span class="line"><span class="token function">docker</span> container <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> percy <span class="token function">bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="挂载宿主环境文件" tabindex="-1"><a class="header-anchor" href="#挂载宿主环境文件"><span>挂载宿主环境文件</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># -v &lt;host-path&gt;:&lt;container-path&gt; 读写挂载</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-v</span> ~/static/:/usr/share/nginx/html <span class="token punctuation">\\</span></span>
<span class="line"> nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="volume" tabindex="-1"><a class="header-anchor" href="#volume"><span>Volume</span></a></h4><p>数据卷的本质其实依然是宿主操作系统上的一个目录，只不过这个目录存放在 Docker 内部，接受 Docker 的管理。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume create myVol</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume inspect myVol</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用数据卷</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> webapp <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> myVol <span class="token punctuation">\\</span></span>
<span class="line">  webapp:latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除没有被容器引用的数据卷</span></span>
<span class="line"><span class="token function">docker</span> volume prune <span class="token parameter variable">-f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="保存和共享镜像" tabindex="-1"><a class="header-anchor" href="#保存和共享镜像"><span>保存和共享镜像</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 将容器修改的内容保存为新的镜像</span></span>
<span class="line"><span class="token function">docker</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;costom config&#39;</span> nginx</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 为新的镜像命名</span></span>
<span class="line"><span class="token function">docker</span> tag <span class="token punctuation">[</span>IMAGE ID<span class="token punctuation">]</span> nginx_new</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出新的镜像</span></span>
<span class="line"><span class="token function">docker</span> save <span class="token parameter variable">-o</span> ./nginx_new.tar nginx_new</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导入镜像</span></span>
<span class="line"><span class="token function">docker</span> load <span class="token operator">&lt;</span> nginx_new.tar</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 批量导出</span></span>
<span class="line"><span class="token comment"># docker save -o ./images.tar webapp:1.0 nginx:1.12 mysql:5.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token comment"># 该 image 文件继承官方的 node image，冒号表示标签，这里标签是 8.4，即 8.4 版本的 node。</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> node:8.4</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录。</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . /app</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定接下来的工作路径为/app。</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npm install --registry=https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将容器 3000 端口暴露出来， 允许外部连接这个端口。</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令"><span>常用指令</span></a></h3><h4 id="from" tabindex="-1"><a class="header-anchor" href="#from"><span>FROM</span></a></h4><p>从一个基础镜像开始制作镜像</p><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token instruction"><span class="token keyword">FROM</span> &lt;image&gt; [AS &lt;name&gt;]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> &lt;image&gt;[:&lt;tag&gt;] [AS &lt;name&gt;]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> &lt;image&gt;[@&lt;digest&gt;] [AS &lt;name&gt;]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>RUN</span></a></h4><h4 id="entrypoint-和-cmd" tabindex="-1"><a class="header-anchor" href="#entrypoint-和-cmd"><span>ENTRYPOINT 和 CMD</span></a></h4><p>容器启动时会根据镜像所定义的一条命令来启动容器中的进程</p><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> command param1 param2</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;executable&quot;</span>,<span class="token string">&quot;param1&quot;</span>,<span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;param1&quot;</span>,<span class="token string">&quot;param2&quot;</span>]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> command param1 param2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="expose" tabindex="-1"><a class="header-anchor" href="#expose"><span>EXPOSE</span></a></h4><p>通过 EXPOSE 指令为镜像指定要暴露的端口</p><h4 id="volume-1" tabindex="-1"><a class="header-anchor" href="#volume-1"><span>VOLUME</span></a></h4><p>定义基于此镜像的容器所自动建立的数据卷。</p><h4 id="copy-和-add" tabindex="-1"><a class="header-anchor" href="#copy-和-add"><span>COPY 和 ADD</span></a></h4><p>从宿主机的文件系统里拷贝内容到镜像里的文件系统中</p><p>COPY 与 ADD 指令的定义方式完全一样</p><ul><li>ADD 能够支持使用网络端的 URL 地址作为 src 源，并且在源文件被识别为压缩包时，自动进行解压，而 COPY 没有这两个能力。</li><li>虽然看上去 COPY 能力稍弱，但对于那些不希望源文件被解压或没有网络请求的场景，COPY 指令是个不错的选择。</li></ul><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token instruction"><span class="token keyword">COPY</span> [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ADD</span> [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> [--chown=&lt;user&gt;:&lt;group&gt;] [<span class="token string">&quot;&lt;src&gt;&quot;</span>,... <span class="token string">&quot;&lt;dest&gt;&quot;</span>]</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ADD</span> [--chown=&lt;user&gt;:&lt;group&gt;] [<span class="token string">&quot;&lt;src&gt;&quot;</span>,... <span class="token string">&quot;&lt;dest&gt;&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实用技巧" tabindex="-1"><a class="header-anchor" href="#实用技巧"><span>实用技巧</span></a></h3><h4 id="构建时变量" tabindex="-1"><a class="header-anchor" href="#构建时变量"><span>构建时变量</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># --build-arg 制定参数</span></span>
<span class="line"><span class="token function">docker</span> build --build-arg <span class="token assign-left variable">TOMCAT_MAJOR</span><span class="token operator">=</span><span class="token number">8</span> --build-arg <span class="token assign-left variable">TOMCAT_VERSION</span><span class="token operator">=</span><span class="token number">8.0</span>.53 <span class="token parameter variable">-t</span> tomcat:8.0 ./tomcat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token instruction"><span class="token keyword">FROM</span> debian:stretch-slim</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 声明参数</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ARG</span> TOMCAT_MAJOR</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ARG</span> TOMCAT_VERSION</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用参数</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> wget -O tomcat.tar.gz <span class="token string">&quot;https://www.apache.org/dyn/closer.cgi?action=download&amp;filename=tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h4><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token instruction"><span class="token keyword">FROM</span> debian:stretch-slim</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 环境变量设置的实质，其实就是定义操作系统环境变量</span></span>
<span class="line"><span class="token comment"># 在运行的容器里，一样拥有这些变量，而容器中运行的程序也能够得到这些变量的值</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> TOMCAT_MAJOR 8</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> TOMCAT_VERSION 8.0.53</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> wget -O tomcat.tar.gz <span class="token string">&quot;https://www.apache.org/dyn/closer.cgi?action=download&amp;filename=tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建缓存" tabindex="-1"><a class="header-anchor" href="#构建缓存"><span>构建缓存</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 默认开启缓存，可以通过 --no-cache 禁用</span></span>
<span class="line"><span class="token function">docker</span> build --no-cache ./webapp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dockerignore" tabindex="-1"><a class="header-anchor" href="#dockerignore"><span>.dockerignore</span></a></h4><p>不打包进入 image 文件。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.git</span>
<span class="line">node_modules</span>
<span class="line">npm-debug.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><h3 id="编写配置" tabindex="-1"><a class="header-anchor" href="#编写配置"><span>编写配置</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span> <span class="token comment"># 制定 docker compose 版本</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span> <span class="token comment"># service 作为配置最小单元</span></span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">webapp</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./image/webapp</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./code<span class="token punctuation">:</span>/code</span>
<span class="line">      <span class="token punctuation">-</span> logvolume<span class="token punctuation">:</span>/var/log</span>
<span class="line">    <span class="token key atrule">links</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> mysql</span>
<span class="line">      <span class="token punctuation">-</span> redis</span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">redis</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span><span class="token number">3.2</span></span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">mysql</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=my<span class="token punctuation">-</span>secret<span class="token punctuation">-</span>pw</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">logvolume</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动停止" tabindex="-1"><a class="header-anchor" href="#启动停止"><span>启动停止</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动，和 run 一样，默认在前台运行，需要加 -d</span></span>
<span class="line"><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 停止，停止所有的容器，并将它们删除，同时消除网络等配置内容</span></span>
<span class="line"><span class="token function">docker-compose</span> down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置"><span>常用配置</span></a></h3><h4 id="依赖声明" tabindex="-1"><a class="header-anchor" href="#依赖声明"><span>依赖声明</span></a></h4><p>只有当被依赖的容器完全启动后，Docker Compose 才会创建和启动这个容器。</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"> <span class="token key atrule">webapp</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> redis</span>
<span class="line">      <span class="token punctuation">-</span> database</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件挂载" tabindex="-1"><a class="header-anchor" href="#文件挂载"><span>文件挂载</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"> <span class="token key atrule">nginx</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token number">1.12</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> ./nginx/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./nginx/conf.d<span class="token punctuation">:</span>/etc/nginx/conf.d<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./webapp/html<span class="token punctuation">:</span>/webapp/html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用数据卷" tabindex="-1"><a class="header-anchor" href="#使用数据卷"><span>使用数据卷</span></a></h4><h4 id="配置网络" tabindex="-1"><a class="header-anchor" href="#配置网络"><span>配置网络</span></a></h4><h4 id="端口映射-1" tabindex="-1"><a class="header-anchor" href="#端口映射-1"><span>端口映射</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"> <span class="token key atrule">nginx</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;443:443&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个服务共享卷" tabindex="-1"><a class="header-anchor" href="#多个服务共享卷"><span>多个服务共享卷</span></a></h4><blockquote><p>比如一个服务的assets，另一个nginx的服务要使用这些静态资源，如何共享？</p></blockquote><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line">version: &#39;3&#39;</span>
<span class="line">services:</span>
<span class="line">  nginx:</span>
<span class="line">    volumes:</span>
<span class="line">      - asset-volume:/var/lib/assets</span>
<span class="line">  asset:</span>
<span class="line">    volumes:</span>
<span class="line">      - asset-volume:/var/lib/assets</span>
<span class="line"></span>
<span class="line">volumes:</span>
<span class="line">  asset-volume:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用宿主机中转</li></ul><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line">version: &#39;3&#39;</span>
<span class="line">services:</span>
<span class="line">  nginx:</span>
<span class="line">    volumes:</span>
<span class="line">      - ./assets:/var/lib/assets</span>
<span class="line">  asset:</span>
<span class="line">    volumes:</span>
<span class="line">      - ./assets:/var/lib/assets</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s"><span>k8s</span></a></h2><p>Kubernetes 的概念，如何构建 Docker 镜像并通过 Kubernetes 进行部署，控制应用程序部署，添加 AI 服务以扩展应用程序以及保护和监视集群和应用程序。</p>`,94)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};