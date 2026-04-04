import{i as e,r as t,s as n,t as r}from"./app-Dhh2Ff1V.js";var i=JSON.parse(`{"path":"/%E5%85%B6%E4%BB%96/linux.html","title":"Linux","lang":"en-US","frontmatter":{},"git":{"updatedTime":1593925509000,"contributors":[{"name":"wangqi","username":"wangqi","email":"njcit_wangqi@163.com","commits":6,"url":"https://github.com/wangqi"}],"changelog":[{"hash":"695ba415a68f880ea18bdbf5903aa1601045abf8","time":1593925509000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"文档(前端):"},{"hash":"db7feb592acca99a6176729f611b2feae36c829d","time":1593834026000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(目录调整):"},{"hash":"1f9fb2d193d6a7b22be376b21b4586647bab3c28","time":1593137011000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端):"},{"hash":"9fe9e5a4019f785aac57d785d15f43fbd27b43e7","time":1593101417000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端): 加入 dumi 构建"},{"hash":"0d157d10e297c12b2e56a72d316de3fed32392f8","time":1592551257000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"ed933b4a906b008ed77198d0c74a2cb41ffbb204","time":1592276471000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"}]},"filePathRelative":"其他/linux.md"}`),a={name:`linux.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h1><h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell"><span>shell</span></a></h2><h3 id="shells" tabindex="-1"><a class="header-anchor" href="#shells"><span>shells</span></a></h3><ul><li>bash</li><li>zsh</li><li>fish</li><li>tcsh</li></ul><h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac"><span>Mac</span></a></h2><h3 id="shell-1" tabindex="-1"><a class="header-anchor" href="#shell-1"><span>shell</span></a></h3><ul><li>安装iterm2</li><li>安装zsh</li><li>安装oh-my-zsh：开源的zsh配置文件</li></ul><p>oh-my-zsh 下三个插件<em>autojump</em>、<em>zsh</em>-autosuggestion和<em>zsh</em>-syntax-highlightin</p><h3 id="launchpad" tabindex="-1"><a class="header-anchor" href="#launchpad"><span>LaunchPad</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">defaults write com.apple.dock springboard-columns -int 7</span>
<span class="line">defaults write com.apple.dock ResetLaunchPad -bool TRUE;killall Dock</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量"><span>设置环境变量</span></a></h2><p>修改~/.profile文件</p><p>export PATH=$PATH:[your path0]:[your path1]:[...]</p><p>[]去掉</p><p>设置生效</p><p>source .profile</p><p>查看环境变量</p><p>echo $PATH</p><h2 id="查看ubuntu版本" tabindex="-1"><a class="header-anchor" href="#查看ubuntu版本"><span>查看ubuntu版本</span></a></h2><p>cat /etc/issue</p><h2 id="启动-设置开机从文本启动-针对16-04" tabindex="-1"><a class="header-anchor" href="#启动-设置开机从文本启动-针对16-04"><span>启动-设置开机从文本启动 针对16.04</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">$ sudo systemctl set-default multi-user.target</span>
<span class="line">执行如下命令启动到桌面：</span>
<span class="line">$ sudo systemctl start lightdm</span>
<span class="line">恢复默认图像界面启动</span>
<span class="line">systemctl set-default graphical.target</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户-添加用户" tabindex="-1"><a class="header-anchor" href="#用户-添加用户"><span>用户-添加用户</span></a></h2><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line">使用adduser命令，自动创建用户和用户组</span>
<span class="line">adduser pm</span>
<span class="line"></span>
<span class="line">然后添加sudo</span>
<span class="line">当然必须在root用户下，usermod -aG sudo pm</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户-设置超级用户" tabindex="-1"><a class="header-anchor" href="#用户-设置超级用户"><span>用户-设置超级用户</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">passwd</span> root</span>
<span class="line">输入当前用户密码</span>
<span class="line">输两次root密码</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scp-传递文件" tabindex="-1"><a class="header-anchor" href="#scp-传递文件"><span>scp 传递文件</span></a></h2><blockquote><p>scp local_file remote_username@remote_ip:remote_folder</p></blockquote><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">// nginx 指定配置文件运行</span>
<span class="line"><span class="token function">sudo</span> nginx <span class="token parameter variable">-c</span> /usr/local/etc/nginx/nginx.conf</span>
<span class="line"></span>
<span class="line">// 重启</span>
<span class="line"><span class="token function">sudo</span> nginx <span class="token parameter variable">-s</span> reload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>mongodb</span></a></h2><div class="language-linux line-numbers-mode" data-highlighter="prismjs" data-ext="linux"><pre><code class="language-linux"><span class="line"></span>
<span class="line">默认  </span>
<span class="line">数据保存在/var/lib/mongodb</span>
<span class="line">日志 /var/log/mongodb</span>
<span class="line"></span>
<span class="line">配置文件  </span>
<span class="line">/etc/mongod.conf</span>
<span class="line">  systemLog.path</span>
<span class="line">  storage.dbPath</span>
<span class="line"></span>
<span class="line">重启</span>
<span class="line">sudo service mongod start</span>
<span class="line">sudo service mongod stop</span>
<span class="line">sudo service mongod restart</span>
<span class="line"></span>
<span class="line">to remove Data &amp; logs</span>
<span class="line">sudo rm -r /var/log/mongodb</span>
<span class="line">sudo rm -r /var/lib/mongodb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器常用端口" tabindex="-1"><a class="header-anchor" href="#服务器常用端口"><span>服务器常用端口</span></a></h2><p><img src="https://utools-1255885027.cos.ap-shanghai.myqcloud.com/截屏2020-06-15 下午3.16.14.png" alt="port.png"></p><h2 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令"><span>linux 常用命令</span></a></h2><h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">ls | grep &#39;^doc&#39; # 以 doc 开头</span>
<span class="line">ls | grep &#39;js$&#39; # 以 js 结尾</span>
<span class="line">ls | grep &#39;REA.ME&#39; # 匹配一个非换行符的字符</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sed-字符串操作" tabindex="-1"><a class="header-anchor" href="#sed-字符串操作"><span>sed 字符串操作</span></a></h3><h3 id="ssh-登录" tabindex="-1"><a class="header-anchor" href="#ssh-登录"><span>ssh 登录</span></a></h3><blockquote><p>ssh root@192.168.80.128</p></blockquote><h3 id="top-系统状态" tabindex="-1"><a class="header-anchor" href="#top-系统状态"><span>top 系统状态</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 进程所占的系统资源</span>
<span class="line">top</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="free-内存占用" tabindex="-1"><a class="header-anchor" href="#free-内存占用"><span>free 内存占用</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 内存使用</span>
<span class="line">free -h</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="netstat-网络情况" tabindex="-1"><a class="header-anchor" href="#netstat-网络情况"><span>netstat 网络情况</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 网络情况</span>
<span class="line">netstat -lnp</span>
<span class="line"></span>
<span class="line"># 正在使用的端口</span>
<span class="line">netstat -tlunp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsof-查看端口占用" tabindex="-1"><a class="header-anchor" href="#lsof-查看端口占用"><span>lsof 查看端口占用</span></a></h3><blockquote><p>lsof -i tcp:8080</p></blockquote><h3 id="usermod-用户与组" tabindex="-1"><a class="header-anchor" href="#usermod-用户与组"><span>usermod 用户与组</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 创建一个用户组(可以带上 -g 888 来在创建组的时候增加编号)</span>
<span class="line">groupadd chenng</span>
<span class="line">cat /etc/group</span>
<span class="line">chenng:x:500:</span>
<span class="line"></span>
<span class="line"># 修改组名称</span>
<span class="line">groupmod -n newchenng chenng</span>
<span class="line"></span>
<span class="line"># 修改组编号</span>
<span class="line">groupmod -g 668 newchenng</span>
<span class="line"></span>
<span class="line"># 删除用户组(必须先删除组里面的用户才能删除组)</span>
<span class="line">groupdel newchenng</span>
<span class="line"></span>
<span class="line"># 设置组密码</span>
<span class="line">gpasswd chenng</span>
<span class="line"></span>
<span class="line"># 创建一个用户</span>
<span class="line">useradd -g sexy sdf</span>
<span class="line">useradd -d /home/chenng chenng(没有指定用户组，会创建一个与用户名相同的用户组)</span>
<span class="line">usermod -c dgdzmx sdf(增加注释)</span>
<span class="line"></span>
<span class="line"># 修改一个用户所属用户组</span>
<span class="line">usermod -g sexy chenng</span>
<span class="line"></span>
<span class="line"># 删除用户</span>
<span class="line">userdel jzmb(不会删除个人文件夹文件)</span>
<span class="line">userdel -r jzmb(会删除个人文件夹文件)</span>
<span class="line"></span>
<span class="line"># 设置用户密码</span>
<span class="line">passwd chenng</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chmod-文件与权限" tabindex="-1"><a class="header-anchor" href="#chmod-文件与权限"><span>chmod 文件与权限</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 更改文件属组，-R 递归更改目录所有文件属组</span>
<span class="line">chgrp [-R] 属组名 文件名</span>
<span class="line"></span>
<span class="line"># 更改所属主，可以同时更改文件属组</span>
<span class="line">chown [-R] 属主名:属组名 文件名</span>
<span class="line"></span>
<span class="line"># 更改文件9个属性，r=4、w=2、x=1</span>
<span class="line">chmod [-R] 770 文件或目录</span>
<span class="line">chmod +x 文件或目录</span>
<span class="line">chmod -x 文件或目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="systemctl-服务管理" tabindex="-1"><a class="header-anchor" href="#systemctl-服务管理"><span>systemctl 服务管理</span></a></h3><p>这些服务对应的启动脚本文件保存在 /usr/lib/systemd/system</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 让某个服务开机自启(.service可以省略)</span>
<span class="line">systemctl enable crond.service</span>
<span class="line"></span>
<span class="line"># 不让开机自启</span>
<span class="line">systemctl disable crond</span>
<span class="line"></span>
<span class="line"># 查看服务状态</span>
<span class="line">systemctl status crond</span>
<span class="line"></span>
<span class="line"># 启动某个服务</span>
<span class="line">systemctl start crond </span>
<span class="line"></span>
<span class="line"># 停止某个服务</span>
<span class="line">systemctl stop crond</span>
<span class="line"></span>
<span class="line"># 重启某个服务</span>
<span class="line">systemctl restart crond</span>
<span class="line"></span>
<span class="line"># 重新加载服务配置文件</span>
<span class="line">systemctl reload * </span>
<span class="line"></span>
<span class="line"># 查询服务是否开机启动</span>
<span class="line">systemctl is-enabled crond</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rm-删除文件" tabindex="-1"><a class="header-anchor" href="#rm-删除文件"><span>rm 删除文件</span></a></h3><h3 id="tail-动态查看日志" tabindex="-1"><a class="header-anchor" href="#tail-动态查看日志"><span>tail 动态查看日志</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">tail -f /var/log/mail.log /var/log/apache/error_log</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="du-查看文件大小" tabindex="-1"><a class="header-anchor" href="#du-查看文件大小"><span>du 查看文件大小</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 查看文件大小</span>
<span class="line">du -sh vue.css</span>
<span class="line"></span>
<span class="line"># 查看文件夹内容大小，-s 显示统计</span>
<span class="line">du -h 工具</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tar-打包解包" tabindex="-1"><a class="header-anchor" href="#tar-打包解包"><span>tar 打包解包</span></a></h3><ul><li>-z 表示使用 gzip 压缩工具</li><li>-c 压缩打包，-x 表示解压解包</li><li>-v 表示可视化</li><li>-f 后面跟文件名，表示压缩后的文件名为 filename，或当期需要解压文件 filename</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 打包</span>
<span class="line">tar -zcvf dist_file source_dir</span>
<span class="line"></span>
<span class="line"># 解包</span>
<span class="line">tar -zxvf sourcefile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-查找文件" tabindex="-1"><a class="header-anchor" href="#find-查找文件"><span>find 查找文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 找命令</span>
<span class="line">which mv</span>
<span class="line"></span>
<span class="line"># 全局寻找文件，需要先安装 mlocate 并执行 updatedb 生成索引</span>
<span class="line">locate nginx.conf</span>
<span class="line"></span>
<span class="line"># 文件查找</span>
<span class="line">find root_path -name &#39;*.md&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nohup-持续运行" tabindex="-1"><a class="header-anchor" href="#nohup-持续运行"><span>nohup 持续运行</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 后台运行</span>
<span class="line">nohup python app.py &gt; log_app.log 2&gt;&amp;1 &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mkdir-创建文件夹" tabindex="-1"><a class="header-anchor" href="#mkdir-创建文件夹"><span>mkdir 创建文件夹</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 递归创建目录</span>
<span class="line">mkdir -p test1/test2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cat-less-查看文件" tabindex="-1"><a class="header-anchor" href="#cat-less-查看文件"><span>cat &amp; less 查看文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 显示行号</span>
<span class="line">cat -b index.html</span>
<span class="line"></span>
<span class="line"># 交互式查看文件</span>
<span class="line">less index.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cp-复制文件" tabindex="-1"><a class="header-anchor" href="#cp-复制文件"><span>cp 复制文件</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 复制目录及目录内所有项目</span>
<span class="line">cp -r source_dir dist_dir</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="curl" tabindex="-1"><a class="header-anchor" href="#curl"><span>curl</span></a></h3><p>curl 命令的使用：HTTP请求、下载文件、FTP上传下载</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 下载文件</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-O</span> http://doc.zwwill.com/css/%E3%80%8Acss%E6%8F%AD%E7%A7%98%E3%80%8B.pdf</span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> https://www.baidu.com/         <span class="token comment"># GET请求, 输出 响应内容</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-I</span> https://www.baidu.com/      <span class="token comment"># GET请求, 只输出 响应头</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-i</span> https://www.baidu.com/      <span class="token comment"># GET请求, 输出 响应头、响应内容</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-v</span> https://www.baidu.com/      <span class="token comment"># GET请求, 输出 通讯过程、头部信息、响应内容等</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># POST 提交 JSON 数据（\\表示命令语句还未结束, 换行继续）</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span>                <span class="token punctuation">\\</span></span>
<span class="line">     <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;username&quot;:&quot;hello&quot;, &quot;password&quot;:&quot;123456&quot;}&#39;</span>     <span class="token punctuation">\\</span></span>
<span class="line">     http://localhost/login</span>
<span class="line"></span>
<span class="line"><span class="token comment"># POST 提交 表单数据</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;username=hello&quot;</span>                <span class="token punctuation">\\</span></span>
<span class="line">     <span class="token parameter variable">-F</span> <span class="token string">&quot;password=123456&quot;</span>               <span class="token punctuation">\\</span></span>
<span class="line">     <span class="token parameter variable">-F</span> <span class="token string">&quot;head_image=@filepath.jpg&quot;</span>      <span class="token punctuation">\\</span></span>
<span class="line">     http://localhost/register</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-脚本" tabindex="-1"><a class="header-anchor" href="#shell-脚本"><span>shell 脚本</span></a></h2><h3 id="echo" tabindex="-1"><a class="header-anchor" href="#echo"><span>echo</span></a></h3><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 声明 = 两边不能有空格</span>
<span class="line"># 双引号可以有变量、可以出现转义字符；单引号不可以</span>
<span class="line">name=&quot;chenng&quot;</span>
<span class="line"></span>
<span class="line"># 最好加 {}，直接写 $name 嵌入字符串会出问题</span>
<span class="line">echo \${name} </span>
<span class="line"></span>
<span class="line"># 删除变量</span>
<span class="line">unset name</span>
<span class="line"></span>
<span class="line"># 获取字符串长度</span>
<span class="line">string=&quot;abcd&quot;</span>
<span class="line">echo \${#string} # 4</span>
<span class="line"></span>
<span class="line"># 提取子字符串</span>
<span class="line">string=&quot;runoob is a great site&quot;</span>
<span class="line">echo \${string:1:4} # unoo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环"><span>循环</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 遍历单词</span>
<span class="line">for skill in Ada Coffe Action Java; do</span>
<span class="line">    echo &quot;I am good at \${skill}Script&quot;</span>
<span class="line">done</span>
<span class="line"></span>
<span class="line"># 遍历文件</span>
<span class="line">for file in \`ls /etc\`</span>
<span class="line">do</span>
<span class="line">  echo \${file}</span>
<span class="line">done</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">array_name=(&quot;value0&quot; &quot;value1&quot; &quot;value2&quot; &quot;value3&quot;)</span>
<span class="line">echo \${array_name[0]} # value0</span>
<span class="line">echo \${array_name[@]} # &quot;value0&quot; &quot;value1&quot; &quot;value2&quot; &quot;value3&quot;</span>
<span class="line">echo \${#array_name[@]} # 4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sh-脚本传参" tabindex="-1"><a class="header-anchor" href="#sh-脚本传参"><span>sh 脚本传参</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># ./test.sh 1 2 3</span>
<span class="line">echo &quot;Shell 传递参数实例！&quot;;</span>
<span class="line">echo &quot;执行的文件名：\${0}&quot;; # ./test.sh</span>
<span class="line">echo &quot;第一个参数为：\${1}&quot;; # 1</span>
<span class="line">echo &quot;第二个参数为：\${2}&quot;; # 2</span>
<span class="line">echo &quot;第三个参数为：\${3}&quot;; # 3</span>
<span class="line">echo &quot;参数个数为：\${#}&quot; # 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h3><h4 id="算术" tabindex="-1"><a class="header-anchor" href="#算术"><span>算术</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">a=10</span>
<span class="line">b=20</span>
<span class="line"></span>
<span class="line"># 完整的表达式要被 \` \` 包含，表达式与运算符之间要有空格</span>
<span class="line">val=\`expr $a + $b\`</span>
<span class="line">echo &quot;a + b : $val&quot; # a + b : 30</span>
<span class="line"></span>
<span class="line">val=\`expr $a - $b\`</span>
<span class="line">echo &quot;a - b : $val&quot; # a - b : -10</span>
<span class="line"></span>
<span class="line">val=\`expr $a \\* $b\`</span>
<span class="line">echo &quot;a * b : $val&quot; # a * b : 200</span>
<span class="line"></span>
<span class="line">val=\`expr $b / $a\`</span>
<span class="line">echo &quot;b / a : $val&quot; # b / a : 2</span>
<span class="line"></span>
<span class="line">val=\`expr $b % $a\`</span>
<span class="line">echo &quot;b % a : $val&quot; # b % a : 0</span>
<span class="line"></span>
<span class="line">if [ $a == $b ]</span>
<span class="line">then</span>
<span class="line">   echo &quot;a 等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a != $b ]</span>
<span class="line">then</span>
<span class="line">   echo &quot;a 不等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关系" tabindex="-1"><a class="header-anchor" href="#关系"><span>关系</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">a=10</span>
<span class="line">b=20</span>
<span class="line"></span>
<span class="line">if [ $a -eq $b ] # 数字相等</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a -eq $b : a 等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a -eq $b: a 不等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -ne $b ] # 数字不相等</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a -ne $b: a 不等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a -ne $b : a 等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -gt $b ] # 数字大于</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a -gt $b: a 大于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a -gt $b: a 不大于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -lt $b ] # 数字小于</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a -lt $b: a 小于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a -lt $b: a 不小于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -ge $b ] # 数字大于等于</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a -ge $b: a 大于或等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a -ge $b: a 小于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -le $b ] # 数字小于等于</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a -le $b: a 小于或等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a -le $b: a 大于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="布尔" tabindex="-1"><a class="header-anchor" href="#布尔"><span>布尔</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">a=10</span>
<span class="line">b=20</span>
<span class="line"></span>
<span class="line">if [ $a != $b ]</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a != $b : a 不等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a == $b: a 等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -lt 100 -a $b -gt 15 ] # -a 与运算</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a 小于 100 且 $b 大于 15 : 返回 true&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a 小于 100 且 $b 大于 15 : 返回 false&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a -lt 100 -o $b -gt 100 ] # -o 或运算</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a 小于 100 或 $b 大于 100 : 返回 true&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a 小于 100 或 $b 大于 100 : 返回 false&quot;</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逻辑" tabindex="-1"><a class="header-anchor" href="#逻辑"><span>逻辑</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">a=10</span>
<span class="line">b=20</span>
<span class="line"></span>
<span class="line">if [[ $a -lt 100 &amp;&amp; $b -gt 100 ]] # 逻辑与</span>
<span class="line">then</span>
<span class="line">   echo &quot;返回 true&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;返回 false&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [[ $a -lt 100 || $b -gt 100 ]] # 逻辑或</span>
<span class="line">then</span>
<span class="line">   echo &quot;返回 true&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;返回 false&quot;</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">a=&quot;abc&quot;</span>
<span class="line">b=&quot;efg&quot;</span>
<span class="line"></span>
<span class="line">if [ $a = $b ] # 字符串相等</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a = $b : a 等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a = $b: a 不等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a != $b ] # 字符串不相等</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a != $b : a 不等于 b&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a != $b: a 等于 b&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ -z $a ] # 字符串长度为0</span>
<span class="line">then</span>
<span class="line">   echo &quot;-z $a : 字符串长度为 0&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;-z $a : 字符串长度不为 0&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ -n &quot;$a&quot; ] # 字符串长度不为0</span>
<span class="line">then</span>
<span class="line">   echo &quot;-n $a : 字符串长度不为 0&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;-n $a : 字符串长度为 0&quot;</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line">if [ $a ] # 字符串不为空</span>
<span class="line">then</span>
<span class="line">   echo &quot;$a : 字符串不为空&quot;</span>
<span class="line">else</span>
<span class="line">   echo &quot;$a : 字符串为空&quot;</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"># 带有 return 语句</span>
<span class="line">funWithReturn(){</span>
<span class="line">    echo &quot;这个函数会对输入的两个数字进行相加运算...&quot;</span>
<span class="line">    echo &quot;输入第一个数字: &quot;</span>
<span class="line">    read aNum</span>
<span class="line">    echo &quot;输入第二个数字: &quot;</span>
<span class="line">    read anotherNum</span>
<span class="line">    echo &quot;两个数字分别为 $aNum 和 $anotherNum&quot;</span>
<span class="line">    return \`expr $aNum + $anotherNum\`</span>
<span class="line">}</span>
<span class="line">funWithReturn</span>
<span class="line">echo &quot;输入的两个数字之和为 $?&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else"><span>if-else</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">a=10</span>
<span class="line">b=20</span>
<span class="line">if [ $a == $b ]</span>
<span class="line">then</span>
<span class="line">   echo &quot;a 等于 b&quot;</span>
<span class="line">elif [ $a -gt $b ]</span>
<span class="line">then</span>
<span class="line">   echo &quot;a 大于 b&quot;</span>
<span class="line">elif [ $a -lt $b ]</span>
<span class="line">then</span>
<span class="line">   echo &quot;a 小于 b&quot; # 输出</span>
<span class="line">else</span>
<span class="line">   echo &quot;没有符合的条件&quot;</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向"><span>输出重定向</span></a></h3><h3 id="综合应用" tabindex="-1"><a class="header-anchor" href="#综合应用"><span>综合应用</span></a></h3><pre><code>- sed 修改文件
- git lint
</code></pre><h2 id="命令行-cli" tabindex="-1"><a class="header-anchor" href="#命令行-cli"><span>命令行 cli</span></a></h2><ul><li>autojump</li><li>tldr <ul><li>控制台命令的协作备忘单</li></ul></li><li>pm2</li><li>locate</li><li>nodemon</li><li>tree</li><li>lazygit</li><li>torrent</li><li>httpie</li></ul>`,106)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};