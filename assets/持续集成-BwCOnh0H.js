import{i as e,r as t,s as n,t as r}from"./app-Dhh2Ff1V.js";var i=JSON.parse(`{"path":"/%E5%85%B6%E4%BB%96/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.html","title":"持续集成","lang":"en-US","frontmatter":{"group":{"order":0}},"git":{"updatedTime":1593925509000,"contributors":[{"name":"bhaltair","username":"bhaltair","email":"njcit_wangqi@163.com","commits":3,"url":"https://github.com/bhaltair"},{"name":"wangqi","username":"wangqi","email":"njcit_wangqi@163.com","commits":5,"url":"https://github.com/wangqi"}],"changelog":[{"hash":"695ba415a68f880ea18bdbf5903aa1601045abf8","time":1593925509000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"文档(前端):"},{"hash":"db7feb592acca99a6176729f611b2feae36c829d","time":1593834026000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(目录调整):"},{"hash":"1f9fb2d193d6a7b22be376b21b4586647bab3c28","time":1593137011000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端):"},{"hash":"9fe9e5a4019f785aac57d785d15f43fbd27b43e7","time":1593101417000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"工具(前端): 加入 dumi 构建"},{"hash":"ed933b4a906b008ed77198d0c74a2cb41ffbb204","time":1592276471000,"email":"njcit_wangqi@163.com","author":"wangqi","message":"update"},{"hash":"a63f7e409d37cb012fcddd2ce3af39f51b85a9e1","time":1504248927000,"email":"njcit_wangqi@163.com","author":"bhaltair","message":"add"},{"hash":"09634befada57498afc9da716b602f04941f67ec","time":1504247882000,"email":"njcit_wangqi@163.com","author":"bhaltair","message":"add"},{"hash":"fce39a5253244a8e9d0ec3c9757e8b5366fd411f","time":1504239503000,"email":"njcit_wangqi@163.com","author":"bhaltair","message":"add"}]},"filePathRelative":"其他/持续集成.md"}`),a={name:`持续集成.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="持续集成" tabindex="-1"><a class="header-anchor" href="#持续集成"><span>持续集成</span></a></h1><blockquote><p>持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，也就意味着每天可能会发生多次集成。每次集成都通过自动化的构建（包括编译，发布，自动化测试)来验证，从而尽快地发现集成错误。许多团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。</p></blockquote><p>要素</p><ol><li>统一的代码库</li><li>自动构建</li><li>自动测试</li><li>每个人每天都要向代码库主干提交代码</li><li>每次代码递交后都会在持续集成服务器上触发一次构建</li><li>保证快速构建</li><li>模拟生产环境的自动测试</li><li>每个人都可以很容易的获取最新可执行的应用程序</li><li>每个人都清楚正在发生的状况</li><li>自动化的部署</li></ol><h2 id="常用的ci" tabindex="-1"><a class="header-anchor" href="#常用的ci"><span>常用的CI</span></a></h2><ol><li>circle CI</li><li>jenkins</li><li>gitlab CI</li><li>travis CI</li></ol><p>一个gitlab CI的配置文件</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">stages:</span>
<span class="line">  - install_deps</span>
<span class="line">  - <span class="token builtin class-name">test</span></span>
<span class="line">  - build</span>
<span class="line">  - deploy_test</span>
<span class="line">  - deploy_production</span>
<span class="line">cache:</span>
<span class="line">  key: <span class="token variable">\${CI_BUILD_REF_NAME}</span></span>
<span class="line">  paths:</span>
<span class="line">    - node_modules/</span>
<span class="line">    - dist/</span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line">install_deps:</span>
<span class="line">  stage: install_deps</span>
<span class="line">  only:</span>
<span class="line">    - develop</span>
<span class="line">    - master</span>
<span class="line">  script:</span>
<span class="line">    - <span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"><span class="token comment"># 运行测试用例</span></span>
<span class="line">test:</span>
<span class="line">  stage: <span class="token builtin class-name">test</span></span>
<span class="line">  only:</span>
<span class="line">    - develop</span>
<span class="line">    - master</span>
<span class="line">  script:</span>
<span class="line">    - <span class="token function">npm</span> run <span class="token builtin class-name">test</span></span>
<span class="line"><span class="token comment"># 编译</span></span>
<span class="line">build:</span>
<span class="line">  stage: build</span>
<span class="line">  only:</span>
<span class="line">    - develop</span>
<span class="line">    - master</span>
<span class="line">  script:</span>
<span class="line">    - <span class="token function">npm</span> run clean</span>
<span class="line">    - <span class="token function">npm</span> run build:client</span>
<span class="line">    - <span class="token function">npm</span> run build:server</span>
<span class="line"><span class="token comment"># 部署测试服务器</span></span>
<span class="line">deploy_test:</span>
<span class="line">  stage: deploy_test</span>
<span class="line">  only:</span>
<span class="line">    - develop</span>
<span class="line">  script:</span>
<span class="line">    - pm2 delete app <span class="token operator">||</span> <span class="token boolean">true</span></span>
<span class="line">    - pm2 start app.js <span class="token parameter variable">--name</span> app</span>
<span class="line"><span class="token comment"># 部署生产服务器</span></span>
<span class="line">deploy_production:</span>
<span class="line">  stage: deploy_production</span>
<span class="line">  only:</span>
<span class="line">    - master</span>
<span class="line">  script:</span>
<span class="line">    - <span class="token function">bash</span> scripts/deploy/deploy.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有gitlab" tabindex="-1"><a class="header-anchor" href="#私有gitlab"><span>私有gitlab</span></a></h2><ul><li>查看服务状态 <ul><li>sudo gitlab-ctl status</li></ul></li><li>启动Gitlab所有组件 <ul><li>sudo gitlab-ctl start</li></ul></li><li>停止Gitlab所有组件 <ul><li>sudo gitlab-ctl stop</li></ul></li><li>重启Gitlab所有组件 <ul><li>sudo gitlab-ctl restart</li></ul></li></ul><p>配置external URL 显示正常的clone URL</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">Add or edit the following line <span class="token keyword">in</span> /etc/gitlab/gitlab.rb</span>
<span class="line">external_url <span class="token string">&quot;http://gitlab.example.com&quot;</span></span>
<span class="line"><span class="token function">sudo</span> gitlab-ctl reconfigure</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="runner" tabindex="-1"><a class="header-anchor" href="#runner"><span>runner</span></a></h3><p>通常是docker或者是shell</p><p>为CI配置一个runner 需要一个runner 这个runner可以安装在widnows和mac/linux上，runner通过API和gitlab通信</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template" target="_blank" rel="noopener noreferrer">gitlab-config-template</a> *<a href="https://scarletsky.github.io/2016/07/29/use-gitlab-ci-for-continuous-integration/#GitLab-Runner" target="_blank" rel="noopener noreferrer">GitLab-Runner</a></li></ul>`,17)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};