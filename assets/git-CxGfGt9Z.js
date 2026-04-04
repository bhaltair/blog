import{i as e,r as t,s as n,t as r}from"./app-Dhh2Ff1V.js";var i=JSON.parse(`{"path":"/%E5%85%B6%E4%BB%96/git.html","title":"Git","lang":"en-US","frontmatter":{},"git":{"updatedTime":1595335543000,"contributors":[{"name":"wangqi","username":"wangqi","email":"njcit_wangqi@163.com","commits":7,"url":"https://github.com/wangqi"}],"changelog":[{"hash":"8d5f2ea0678bdfcb823bc6bfbd1461b8c0a71591","time":1595335543000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"文档(面试):"},{"hash":"db7feb592acca99a6176729f611b2feae36c829d","time":1593834026000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(目录调整):"},{"hash":"1f9fb2d193d6a7b22be376b21b4586647bab3c28","time":1593137011000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端):"},{"hash":"9fe9e5a4019f785aac57d785d15f43fbd27b43e7","time":1593101417000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端): 加入 dumi 构建"},{"hash":"f0ba12d3b6be8c8766f0d7659b7bc1d1a2d2e7d4","time":1592986958000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"文档(算法): 链表 - 回文链表-递归"},{"hash":"c0f515cb4d876cc8f20a6985a6536b167d63a14a","time":1592407367000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update navbar"},{"hash":"ed933b4a906b008ed77198d0c74a2cb41ffbb204","time":1592276471000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"}]},"filePathRelative":"其他/git.md"}`),a={name:`git.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1><h2 id="git-流程图" tabindex="-1"><a class="header-anchor" href="#git-流程图"><span>git 流程图</span></a></h2><p><img src="https://utools-1255885027.cos.ap-shanghai.myqcloud.com/截屏2020-06-16 下午8.05.45.png" alt="liuchengtu.png"></p><h2 id="查看-git-信息" tabindex="-1"><a class="header-anchor" href="#查看-git-信息"><span>查看 git 信息</span></a></h2><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git"><pre><code class="language-git"><span class="line"><span class="token comment"># 查看系统配置</span></span>
<span class="line"><span class="token command">$ git config<span class="token parameter"> --list</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># git 中 D 向下翻一行  F 向下翻页  B 向上翻页  Q 退出</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看本地 git 命令历史</span></span>
<span class="line">git reflog</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看提交历史</span></span>
<span class="line"><span class="token command">$ git log<span class="token parameter"> --oneline</span>  </span></span>
<span class="line">          --grep=<span class="token string">&quot;关键字&quot;</span></span>
<span class="line">          --graph </span>
<span class="line">          --all      </span>
<span class="line">          --author <span class="token string">&quot;username&quot;</span>     </span>
<span class="line">          --reverse </span>
<span class="line">          -num</span>
<span class="line">          -p</span>
<span class="line">          --before=  1  day/1  week/1  <span class="token string">&quot;2019-06-06&quot;</span> </span>
<span class="line">          --after= <span class="token string">&quot;2019-06-06&quot;</span></span>
<span class="line">          --stat </span>
<span class="line">          --abbrev-commit </span>
<span class="line">          --pretty=format:<span class="token string">&quot;xxx&quot;</span></span>
<span class="line">          </span>
<span class="line"><span class="token comment"># oneline -&gt; 将日志记录一行一行的显示</span></span>
<span class="line"><span class="token comment"># grep=&quot;关键字&quot; -&gt; 查找日志记录中(commit提交时的注释)与关键字有关的记录</span></span>
<span class="line"><span class="token comment"># graph -&gt; 记录图形化显示 ！！！    </span></span>
<span class="line"><span class="token comment"># all -&gt; 将所有记录都详细的显示出来</span></span>
<span class="line"><span class="token comment"># author &quot;username&quot; -&gt; 查找这个作者提交的记录</span></span>
<span class="line"><span class="token comment"># reverse -&gt; commit 提交记录顺序翻转      </span></span>
<span class="line"><span class="token comment"># before -&gt; 查找规定的时间(如:1天/1周)之前的记录   </span></span>
<span class="line"><span class="token comment"># num -&gt; git log -10 显示最近10次提交 ！！！    </span></span>
<span class="line"><span class="token comment"># stat -&gt; 显示每次更新的文件修改统计信息，会列出具体文件列表 ！！！</span></span>
<span class="line"><span class="token comment"># abbrev-commit -&gt; 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符 ！！！</span></span>
<span class="line"><span class="token comment"># pretty=format:&quot;xxx&quot; -&gt;  可以定制要显示的记录格式 ！！！</span></span>
<span class="line"><span class="token comment"># p -&gt; 显示每次提交所引入的差异（按 补丁 的格式输出）！！！</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-log-点线图" tabindex="-1"><a class="header-anchor" href="#git-log-点线图"><span>git log 点线图</span></a></h3><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git"><pre><code class="language-git"><span class="line">*	表示一个 commit</span>
<span class="line">|	表示分支前进</span>
<span class="line">/	表示分叉</span>
<span class="line">\\	表示合入</span>
<span class="line">|/	表示新分支</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令"><span>git 常用命令</span></a></h2><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git"><pre><code class="language-git"><span class="line"><span class="token comment"># 查看工作区和暂存区的状态</span></span>
<span class="line"><span class="token command">$ git status </span></span>
<span class="line"><span class="token comment"># 将工作区的文件提交到暂存区</span></span>
<span class="line"><span class="token command">$ git add .  </span></span>
<span class="line"><span class="token comment"># 提交到本地仓库</span></span>
<span class="line"><span class="token command">$ git commit<span class="token parameter"> -m</span> </span><span class="token string">&quot;本次提交说明&quot;</span></span>
<span class="line"><span class="token comment"># add和commit的合并，便捷写法（未追踪的文件无法直接提交到暂存区/本地仓库）</span></span>
<span class="line"><span class="token command">$ git commit<span class="token parameter"> -am</span> </span><span class="token string">&quot;本次提交说明&quot;</span>  </span>
<span class="line"><span class="token comment"># 将本地分支和远程分支进行关联</span></span>
<span class="line"><span class="token command">$ git push<span class="token parameter"> -u</span> origin branchName </span></span>
<span class="line"><span class="token comment"># 将本地仓库的文件推送到远程分支</span></span>
<span class="line"><span class="token command">$ git push</span></span>
<span class="line"><span class="token comment"># 拉取远程分支的代码</span></span>
<span class="line"><span class="token command">$ git pull origin branchName </span></span>
<span class="line"><span class="token comment"># 合并分支</span></span>
<span class="line"><span class="token command">$ git merge branchName </span></span>
<span class="line"><span class="token comment"># 查看本地拥有哪些分支</span></span>
<span class="line"><span class="token command">$ git branch</span></span>
<span class="line"><span class="token comment"># 查看所有分支（包括远程分支和本地分支）</span></span>
<span class="line"><span class="token command">$ git branch<span class="token parameter"> -a</span> </span></span>
<span class="line"><span class="token comment"># 切换分支</span></span>
<span class="line"><span class="token command">$ git checkout branchName </span></span>
<span class="line"><span class="token comment"># 临时将工作区文件的修改保存至堆栈中</span></span>
<span class="line"><span class="token command">$ git stash</span></span>
<span class="line"><span class="token comment"># 将之前保存至堆栈中的文件取出来</span></span>
<span class="line"><span class="token command">$ git stash pop</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置个人信息" tabindex="-1"><a class="header-anchor" href="#配置个人信息"><span>配置个人信息</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 显示中文</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.quotepath <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 全局</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;Chenng&#39;</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;ringcrl@foxmail.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 单个项目</span></span>
<span class="line"><span class="token function">git</span> config user.name <span class="token string">&#39;Chenng&#39;</span></span>
<span class="line"><span class="token function">git</span> config user.email <span class="token string">&#39;ringcrl@foxmail.com&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add"><span>git add</span></a></h2><h3 id="撤销-add" tabindex="-1"><a class="header-anchor" href="#撤销-add"><span>撤销 add</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 撤销某个文件</span></span>
<span class="line"><span class="token function">git</span> reset HEAD -- file_path</span>
<span class="line"><span class="token comment"># 简写</span></span>
<span class="line"><span class="token function">git</span> reset file_path</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 撤销 gaa</span></span>
<span class="line"><span class="token function">git</span> reset HEAD -- <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 简写</span></span>
<span class="line"><span class="token function">git</span> reset</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-merge" tabindex="-1"><a class="header-anchor" href="#git-merge"><span>git merge</span></a></h2><p>默认 fast-forward</p><ul><li>fast-forward：会在当前分支的提交历史中添加进被合并分支的提交历史（得先理解什么时候会发生快速合并，并不是每次 merge 都会发生快速合并）；</li><li>--no-ff：会生成一个新的提交，让当前分支的提交历史不会那么乱；</li><li>--squash：不会生成新的提交，会将被合并分支多次提交的内容直接存到工作区和暂存区，由开发者手动去提交，这样当前分支最终只会多出一条提交记录，不会掺杂被合并分支的提交历史</li></ul><h2 id="git-rebase" tabindex="-1"><a class="header-anchor" href="#git-rebase"><span>git rebase</span></a></h2><ul><li>git pull 之后提交会分叉，不好看</li><li>git rebase 把我们本地的提交“挪动”了位置，整个提交历史就成了一条直线</li><li>本地的修改不再是基于之前迁出，而是相当于拉完最新代码再提交</li></ul><blockquote><p>保持一个commit状态</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">git add my-changed-files</span>
<span class="line">git commit</span>
<span class="line">git fetch upstream/master</span>
<span class="line">git rebase upstream/master</span>
<span class="line">git push -f origin</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并多个本地-commit" tabindex="-1"><a class="header-anchor" href="#合并多个本地-commit"><span>合并多个本地 commit</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">-i</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将不想留下的 commit 信息，pick 改成 s</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改上一个-commit" tabindex="-1"><a class="header-anchor" href="#修改上一个-commit"><span>修改上一个 commit</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 已提交一个 commit 并且推到了远端</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编辑上一个 commit，pick 改为 edit</span></span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD^</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编辑文件</span></span>
<span class="line">gaa</span>
<span class="line"></span>
<span class="line"><span class="token comment"># rebase</span></span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">--continue</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重写远端记录</span></span>
<span class="line">gp <span class="token parameter variable">-f</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash"><span>git stash</span></a></h2><p>?&gt; 能够将所有未提交的修改保存至堆栈中，用于后续恢复当前工作区内容</p><p>使用场景： 当你接到一个修复紧急 bug 的任务时候，一般都是先创建一个新的 bug 分支来修复它，然后合并，最后删除。但是，如果当前你正在开发功能中，短时间还无法完成，无法直接提交到仓库，这时候可以先把当前工作区的内容 git stash 一下，然后去修复 bug，修复后，再 git stash pop，恢复之前的工作内容。</p><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git"><pre><code class="language-git"><span class="line"><span class="token comment"># 将所有未提交的修改（提交到暂存区）保存至堆栈中</span></span>
<span class="line"><span class="token command">$ git stash </span></span>
<span class="line"><span class="token comment"># 给本次存储加个备注，以防时间久了忘了</span></span>
<span class="line"><span class="token command">$ git stash save </span><span class="token string">&quot;存储&quot;</span></span>
<span class="line"><span class="token comment"># 存储未追踪的文件</span></span>
<span class="line"><span class="token command">$ git stash<span class="token parameter"> -u</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看存储记录</span></span>
<span class="line"><span class="token command">$ git stash list</span></span>
<span class="line"></span>
<span class="line">在 Windows 上和 PowerShell 中，需要加双引号</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复后，stash 记录并不删除</span></span>
<span class="line"><span class="token command">$ git stash apply </span><span class="token string">&quot;stash@{index}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复的同时把 stash 记录也删了</span></span>
<span class="line"><span class="token command">$ git stash pop </span><span class="token string">&quot;stash@{index}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除 stash 记录</span></span>
<span class="line"><span class="token command">$ git stash drop </span><span class="token string">&quot;stash@{index}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除所有存储的进度</span></span>
<span class="line"><span class="token command">$ git stash clear</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看当前记录中修改了哪些文件</span></span>
<span class="line"><span class="token command">$ git stash show </span><span class="token string">&quot;stash@{index}&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看当前记录中修改了哪些文件的内容</span></span>
<span class="line"><span class="token command">$ git stash show<span class="token parameter"> -p</span> </span><span class="token string">&quot;stash@{index}&quot;</span> </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff"><span>git diff</span></a></h2><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git"><pre><code class="language-git"><span class="line"></span>
<span class="line">	* git diff --cached 查看缓存区和本地仓库里的差异</span>
<span class="line">	* git diff HEAD 查看已缓存和当前的区别</span>
<span class="line">	* git diff 查看当前未缓存的和本地仓库里的区别</span>
<span class="line">	* git diff --stat 显示摘要</span>
<span class="line">	* git diff master..test 显示2个分支之间的差异</span>
<span class="line">	* git diff --stat 29526d835 7743598d7 两个 commit 之间的对比</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-rm" tabindex="-1"><a class="header-anchor" href="#git-rm"><span>git rm</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">	* git rm file 将file从文件缓存区、本地目录中移除</span>
<span class="line">	* git rm file --cached 只从缓存区移除，保存本地目录中的</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset"><span>git reset</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 撤销缓存区里的一个更改，例如 git reset HEAD -- a.js</span></span>
<span class="line">* <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~3 会将最新的3次提交全部重置</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移除所有修改</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移除所有未跟踪文件</span></span>
<span class="line"><span class="token function">git</span> clean <span class="token parameter variable">-fd</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit"><span>git commit</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">	* git commit 提交的是暂存区里面的内容，也就是 Changes to be committed 中的文件</span>
<span class="line">	* git commit -a 除了将暂存区里的文件提交外，还提交 Changes bu not updated 中的文件。</span>
<span class="line">	* git commit -m &quot;commit info&quot; 给提交内容添加注释</span>
<span class="line">	* git commit -am &quot;commit info&quot; 整合了git add和git commit -m</span>
<span class="line">	* git commit --amend 修改上一次提交的信息</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commit-合并" tabindex="-1"><a class="header-anchor" href="#commit-合并"><span>commit 合并</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 找到【需要合并的 commit 】前的一个 hash</span></span>
<span class="line"><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> 5d39ff2</span>
<span class="line"><span class="token comment"># 将想要忽略的 commit 前面的 pick 换成 s</span></span>
<span class="line">pick asdfg xxx</span>
<span class="line">s qwert xxx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销-一个-commit" tabindex="-1"><a class="header-anchor" href="#撤销-一个-commit"><span>撤销 一个 commit</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看提交记录</span></span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"><span class="token comment"># commit d306b98be7883aabe267ee6940e8d7ee40090c90</span></span>
<span class="line"><span class="token comment"># ...</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 回到最后一次提交的上一次</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> d306b98be</span>
<span class="line"><span class="token comment"># 快捷方式</span></span>
<span class="line"><span class="token function">git</span> reset head~1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交到上个-commit" tabindex="-1"><a class="header-anchor" href="#提交到上个-commit"><span>提交到上个 commit</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> 修改上一次提交的信息</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch"><span>git branch</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line">	* git branch 列出可用的分支</span>
<span class="line">	* git branch a 创建a分支</span>
<span class="line">	* git checkout -b a 检查a分支是否存在，不存在就创建，并且切换过去</span>
<span class="line">	* git push origin :a 删除远程分支</span>
<span class="line">	* git branch -d a 删除分支a</span>
<span class="line">	* git merge 其它分支合并到当前分支</span>
<span class="line">	* git checkout -b gh-pages origin/gh-pages 检出并且设置当前分支为远程分支gh-pages</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与-remote-连接-断开" tabindex="-1"><a class="header-anchor" href="#与-remote-连接-断开"><span>与 remote 连接/断开</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看链接到远程分支的情况</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-vv</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 断开当前链接与远程的链接</span></span>
<span class="line"><span class="token function">git</span> branch --unset-upstream</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 当前 dev 分支链接远程分支</span></span>
<span class="line"><span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log"><span>git log</span></a></h2><ul><li>git log --oneline 紧凑查看</li><li>git log --graph 图形显示</li><li>git log a ^master 查看只在a分支里的修改</li><li>git log --grep 正则取一个log</li><li>git shortlog master 生成一个简报</li><li>git log --since=1.days 查看今天的更改</li></ul><h2 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status"><span>git status</span></a></h2><ul><li>git status 查看当前状态，包括add,commit,modify,merge等信息</li></ul><h2 id="git-tag" tabindex="-1"><a class="header-anchor" href="#git-tag"><span>git tag</span></a></h2><ul><li>git tag -a v1.0 打上v1.0</li></ul><h2 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote"><span>git remote</span></a></h2><p>远程主机</p><ul><li>git remote 列出远端的别名</li><li>git remote add remotename remotepath 以remotename命名remotepath</li><li>git remote rm remotename 删除别名为remotename的远程仓库</li><li>git fetch 只下载</li><li>git pull 下载并更新</li><li>git push remotename branch 推送本地分支branch到远程仓库remotename的branch分支</li></ul><h2 id="git-checkout" tabindex="-1"><a class="header-anchor" href="#git-checkout"><span>git checkout</span></a></h2><p>未commit的文件回退到同线上一致的状态</p><h3 id="撤销工作区文件修改" tabindex="-1"><a class="header-anchor" href="#撤销工作区文件修改"><span>撤销工作区文件修改</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 丢弃对 file1 的修改，checkout 有多重功能，这里的 -- 为了让 Git 知道后面的参数是文件名</span></span>
<span class="line"><span class="token function">git</span> checkout -- file1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 可以使用 . 撤销全部的修改</span></span>
<span class="line"><span class="token function">git</span> checkout -- <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pull-request-流程" tabindex="-1"><a class="header-anchor" href="#pull-request-流程"><span>pull request 流程</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建新分支，并指向 fork 项目的 master 分支</span></span>
<span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feat/ready_master upstream/master</span>
<span class="line"><span class="token comment"># 切换到原有的分支中，这个分支中存储着我们修改的内容的 commit</span></span>
<span class="line"><span class="token function">git</span> checkout feat/dev</span>
<span class="line"><span class="token comment"># 查看 commit，copy commit</span></span>
<span class="line"><span class="token function">git</span> log</span>
<span class="line"><span class="token comment"># 切换回新分支</span></span>
<span class="line"><span class="token function">git</span> checkout feat/ready_master</span>
<span class="line"><span class="token comment"># 把提交拉取到新分支</span></span>
<span class="line"><span class="token function">git</span> cherry-pick 0b0eadf36e22e6f682c852458a379b0acd93cdf2</span>
<span class="line"><span class="token comment"># 查看一下分支对应情况，确保push的分支指向是对的。</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-vv</span></span>
<span class="line"><span class="token comment"># 推送分支到自己 fork 的项目中</span></span>
<span class="line"><span class="token function">git</span> push origin feat/ready_master</span>
<span class="line"><span class="token comment"># 最后一步，打开网站，切换到最新分支，点击 New pull request，填写内容，申请就好了</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目代码体积情况" tabindex="-1"><a class="header-anchor" href="#项目代码体积情况"><span>项目代码体积情况</span></a></h2><blockquote><p>git log --format=&#39;%aN&#39; | sort -u | while read name; do echo -en &quot;$name\\t&quot;; git log --author=&quot;$name&quot; --pretty=tformat: --numstat | awk &#39;{ add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39; -; done</p></blockquote><h2 id="腾讯鹅厂-git-手册" tabindex="-1"><a class="header-anchor" href="#腾讯鹅厂-git-手册"><span>腾讯鹅厂 git 手册</span></a></h2><p><img src="https://utools-1255885027.cos.ap-shanghai.myqcloud.com/腾讯鹅厂git手册.jpg" alt="git.jpg"></p><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><blockquote><p>使用的是“一个 PR 只有一个 Commit 只做一件事情”的基于 rebase 的协作流， 我们这样产出了接近于线性的完美 git 历史</p></blockquote>`,68)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};