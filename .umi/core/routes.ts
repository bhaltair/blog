// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/wangqi/development/blog/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"介绍","meta":{}}],"/其他":[{"path":"/其他/chrome","title":"Chrome","meta":{}},{"path":"/其他/edge","title":"Edge","meta":{}},{"path":"/其他/flutter","title":"Flutter","meta":{}},{"path":"/其他/git","title":"Git","meta":{}},{"path":"/其他/linux","title":"Linux","meta":{}},{"path":"/其他/持续集成","title":"持续集成","meta":{}},{"path":"/其他/编码原则","title":"编码原则","meta":{}},{"path":"/其他/防御编程","title":"防御编程","meta":{}}],"/前端":[{"path":"/前端/css","title":"CSS","meta":{}},{"path":"/前端/html5","title":"HTML","meta":{}},{"path":"/前端/javascript","title":"JavaScript","meta":{}},{"path":"/前端/react","title":"React","meta":{}},{"path":"/前端/typescript","title":"TypeScript","meta":{}},{"path":"/前端/vue","title":"Vue","meta":{}},{"path":"/前端/web-api","title":"Web API","meta":{}},{"path":"/前端/webpack","title":"Webpack","meta":{}},{"path":"/前端/其他","title":"其他","meta":{}},{"path":"/前端/函数式编程","title":"函数式编程","meta":{}},{"path":"/前端/小程序","title":"小程序","meta":{}},{"path":"/前端/工程化","title":"工程化","meta":{}},{"path":"/前端/性能优化","title":"性能优化","meta":{}},{"path":"/前端/测试","title":"测试","meta":{}},{"path":"/前端/面向对象","title":"面向对象","meta":{}}],"/后端":[{"path":"/后端/deno","title":"deno","meta":{}},{"path":"/后端/docker","title":"Docker","meta":{}},{"path":"/后端/express","title":"Express","meta":{}},{"path":"/后端/nginx","title":"Nginx","meta":{}},{"path":"/后端/nodejs","title":"Node.js","meta":{}},{"path":"/后端/其他","title":"其他","meta":{}}],"/库":[{"path":"/库/库推荐","title":"库","meta":{}}],"/算法":[{"path":"/算法/code-wars","title":"CodeWars","meta":{}},{"path":"/算法/leet-code","title":"LeetCode","meta":{}},{"path":"/算法/剑指offer","title":"剑指 Offer","meta":{}},{"path":"/算法/手写代码","title":"手写代码","meta":{}},{"path":"/算法/数据结构与算法","title":"数据结构与算法","meta":{}}],"/网站":[{"path":"/网站/网站","title":"网站","meta":{}}],"/英语":[{"path":"/英语/摘抄","title":"摘抄","meta":{}},{"path":"/英语/英语","title":"英语","meta":{}},{"path":"/英语/语法","title":"语法","meta":{}}],"/计算机":[{"path":"/计算机/安全基础","title":"安全基础","meta":{}},{"path":"/计算机/正则","title":"正则表达式","meta":{}},{"path":"/计算机/网络基础","title":"网络基础","meta":{}},{"path":"/计算机/设计模式","title":"设计模式","meta":{}}],"/读书":[{"path":"/读书/elon-musk","title":"Elon Musk","meta":{}},{"path":"/读书/王小波","title":"王小波","meta":{}}],"/面试":[{"path":"/面试/面试","title":"面试","meta":{}}]}},"locales":[],"navs":{},"title":"流月的知识库","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__README.md' */'../../docs/README.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/README.md",
          "updatedTime": 1593834026000,
          "home": true,
          "lang": "zh-CN",
          "heroText": "流月的部落格",
          "heroImage": "https://utools-1255885027.cos.ap-shanghai.myqcloud.com/qrcode_for_gh_2e0e95ed33dd_258.jpg",
          "actionText": "开始 →",
          "actionLink": "/面试/面试",
          "features": [
            {
              "title": "A Blog",
              "details": "专注写作前端博客，记录日常所得。"
            },
            {
              "title": "For Me",
              "details": "路漫漫其修远兮，吾将上下而求索"
            },
            {
              "title": "For Interview",
              "details": "上海，求坑ღ( ´･ᴗ･` )比心"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Copyright © 2020-present 流月</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "联系我",
              "heading": "联系我"
            },
            {
              "depth": 2,
              "value": "JavaScript",
              "heading": "javascript"
            },
            {
              "depth": 2,
              "value": "CSS",
              "heading": "css"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 2,
              "value": "TypeScript",
              "heading": "typescript"
            },
            {
              "depth": 2,
              "value": "Web 安全",
              "heading": "web-安全"
            },
            {
              "depth": 2,
              "value": "Webpack",
              "heading": "webpack"
            },
            {
              "depth": 2,
              "value": "设计模式",
              "heading": "设计模式"
            },
            {
              "depth": 2,
              "value": "算法",
              "heading": "算法"
            }
          ],
          "title": "介绍"
        },
        "title": "介绍"
      },
      {
        "path": "/其他/flutter",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__Flutter.md' */'../../docs/其他/Flutter.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/Flutter.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "Flutter",
              "heading": "flutter"
            },
            {
              "depth": 2,
              "value": "跨平台开发",
              "heading": "跨平台开发"
            },
            {
              "depth": 3,
              "value": "WebView",
              "heading": "webview"
            },
            {
              "depth": 3,
              "value": "Flutter",
              "heading": "flutter-1"
            },
            {
              "depth": 2,
              "value": "Dart",
              "heading": "dart"
            },
            {
              "depth": 3,
              "value": "基本概念",
              "heading": "基本概念"
            },
            {
              "depth": 2,
              "value": "数据类型",
              "heading": "数据类型"
            },
            {
              "depth": 2,
              "value": "类",
              "heading": "类"
            }
          ],
          "title": "Flutter",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "Flutter"
      },
      {
        "path": "/其他/chrome",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__chrome.md' */'../../docs/其他/chrome.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/chrome.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Chrome",
              "heading": "chrome"
            },
            {
              "depth": 2,
              "value": "Chrome插件英雄榜",
              "heading": "chrome插件英雄榜"
            },
            {
              "depth": 2,
              "value": "Chrome扩展资源站点推荐",
              "heading": "chrome扩展资源站点推荐"
            }
          ],
          "title": "Chrome",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "Chrome"
      },
      {
        "path": "/其他/edge",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__edge.md' */'../../docs/其他/edge.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/edge.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Edge",
              "heading": "edge"
            },
            {
              "depth": 2,
              "value": "快捷键",
              "heading": "快捷键"
            },
            {
              "depth": 2,
              "value": "DOM全局变量",
              "heading": "dom全局变量"
            },
            {
              "depth": 2,
              "value": "monitorEvents",
              "heading": "monitorevents"
            },
            {
              "depth": 2,
              "value": "stack trace",
              "heading": "stack-trace"
            },
            {
              "depth": 2,
              "value": "$ 和 $$",
              "heading": "-和-"
            },
            {
              "depth": 2,
              "value": "await",
              "heading": "await"
            },
            {
              "depth": 2,
              "value": "JSON.stringify 格式化",
              "heading": "jsonstringify-格式化"
            },
            {
              "depth": 2,
              "value": "console",
              "heading": "console"
            },
            {
              "depth": 3,
              "value": "console.dir 打印 DOM 对象",
              "heading": "consoledir-打印-dom-对象"
            },
            {
              "depth": 3,
              "value": "console.table 打印数组",
              "heading": "consoletable-打印数组"
            },
            {
              "depth": 2,
              "value": "$_ 获取 console 上次的返回值",
              "heading": "_-获取-console-上次的返回值"
            },
            {
              "depth": 2,
              "value": "重新发送 xhr",
              "heading": "重新发送-xhr"
            },
            {
              "depth": 2,
              "value": "动画监听",
              "heading": "动画监听"
            },
            {
              "depth": 2,
              "value": "调试 hover 样式",
              "heading": "调试-hover-样式"
            },
            {
              "depth": 2,
              "value": "修改 JS",
              "heading": "修改-js"
            },
            {
              "depth": 3,
              "value": "临时修改",
              "heading": "临时修改"
            },
            {
              "depth": 3,
              "value": "本地 override",
              "heading": "本地-override"
            },
            {
              "depth": 2,
              "value": "edge chromium 开发者文档",
              "heading": "edge-chromium-开发者文档"
            }
          ],
          "title": "Edge",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "Edge"
      },
      {
        "path": "/其他/git",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__git.md' */'../../docs/其他/git.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/git.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Git",
              "heading": "git"
            },
            {
              "depth": 2,
              "value": "git 流程图",
              "heading": "git-流程图"
            },
            {
              "depth": 2,
              "value": "查看 git 信息",
              "heading": "查看-git-信息"
            },
            {
              "depth": 3,
              "value": "git log 点线图",
              "heading": "git-log-点线图"
            },
            {
              "depth": 2,
              "value": "git 常用命令",
              "heading": "git-常用命令"
            },
            {
              "depth": 2,
              "value": "配置个人信息",
              "heading": "配置个人信息"
            },
            {
              "depth": 2,
              "value": "git add",
              "heading": "git-add"
            },
            {
              "depth": 3,
              "value": "撤销 add",
              "heading": "撤销-add"
            },
            {
              "depth": 2,
              "value": "git merge",
              "heading": "git-merge"
            },
            {
              "depth": 2,
              "value": "git rebase",
              "heading": "git-rebase"
            },
            {
              "depth": 3,
              "value": "合并多个本地 commit",
              "heading": "合并多个本地-commit"
            },
            {
              "depth": 3,
              "value": "修改上一个 commit",
              "heading": "修改上一个-commit"
            },
            {
              "depth": 2,
              "value": "git stash",
              "heading": "git-stash"
            },
            {
              "depth": 2,
              "value": "git diff",
              "heading": "git-diff"
            },
            {
              "depth": 2,
              "value": "git rm",
              "heading": "git-rm"
            },
            {
              "depth": 2,
              "value": "git reset",
              "heading": "git-reset"
            },
            {
              "depth": 2,
              "value": "git commit",
              "heading": "git-commit"
            },
            {
              "depth": 3,
              "value": "commit 合并",
              "heading": "commit-合并"
            },
            {
              "depth": 3,
              "value": "撤销 一个 commit",
              "heading": "撤销-一个-commit"
            },
            {
              "depth": 3,
              "value": "提交到上个 commit",
              "heading": "提交到上个-commit"
            },
            {
              "depth": 2,
              "value": "git branch",
              "heading": "git-branch"
            },
            {
              "depth": 3,
              "value": "与 remote 连接/断开",
              "heading": "与-remote-连接断开"
            },
            {
              "depth": 2,
              "value": "git log",
              "heading": "git-log"
            },
            {
              "depth": 2,
              "value": "git status",
              "heading": "git-status"
            },
            {
              "depth": 2,
              "value": "git tag",
              "heading": "git-tag"
            },
            {
              "depth": 2,
              "value": "git remote",
              "heading": "git-remote"
            },
            {
              "depth": 2,
              "value": "git checkout",
              "heading": "git-checkout"
            },
            {
              "depth": 3,
              "value": "撤销工作区文件修改",
              "heading": "撤销工作区文件修改"
            },
            {
              "depth": 2,
              "value": "pull request 流程",
              "heading": "pull-request-流程"
            },
            {
              "depth": 2,
              "value": "项目代码体积情况",
              "heading": "项目代码体积情况"
            },
            {
              "depth": 2,
              "value": "腾讯鹅厂 git 手册",
              "heading": "腾讯鹅厂-git-手册"
            }
          ],
          "title": "Git",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "Git"
      },
      {
        "path": "/其他/linux",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__linux.md' */'../../docs/其他/linux.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/linux.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "Linux",
              "heading": "linux"
            },
            {
              "depth": 2,
              "value": "shell",
              "heading": "shell"
            },
            {
              "depth": 3,
              "value": "shells",
              "heading": "shells"
            },
            {
              "depth": 2,
              "value": "Mac",
              "heading": "mac"
            },
            {
              "depth": 3,
              "value": "shell",
              "heading": "shell-1"
            },
            {
              "depth": 3,
              "value": "LaunchPad",
              "heading": "launchpad"
            },
            {
              "depth": 2,
              "value": "设置环境变量",
              "heading": "设置环境变量"
            },
            {
              "depth": 2,
              "value": "查看ubuntu版本",
              "heading": "查看ubuntu版本"
            },
            {
              "depth": 2,
              "value": "启动-设置开机从文本启动 针对16.04",
              "heading": "启动-设置开机从文本启动-针对1604"
            },
            {
              "depth": 2,
              "value": "用户-添加用户",
              "heading": "用户-添加用户"
            },
            {
              "depth": 2,
              "value": "用户-设置超级用户",
              "heading": "用户-设置超级用户"
            },
            {
              "depth": 2,
              "value": "scp 传递文件",
              "heading": "scp-传递文件"
            },
            {
              "depth": 2,
              "value": "nginx",
              "heading": "nginx"
            },
            {
              "depth": 2,
              "value": "mongodb",
              "heading": "mongodb"
            },
            {
              "depth": 2,
              "value": "服务器常用端口",
              "heading": "服务器常用端口"
            },
            {
              "depth": 2,
              "value": "linux 常用命令",
              "heading": "linux-常用命令"
            },
            {
              "depth": 3,
              "value": "grep",
              "heading": "grep"
            },
            {
              "depth": 3,
              "value": "sed 字符串操作",
              "heading": "sed-字符串操作"
            },
            {
              "depth": 3,
              "value": "ssh 登录",
              "heading": "ssh-登录"
            },
            {
              "depth": 3,
              "value": "top 系统状态",
              "heading": "top-系统状态"
            },
            {
              "depth": 1,
              "value": "内存使用",
              "heading": "内存使用"
            },
            {
              "depth": 1,
              "value": "网络情况",
              "heading": "网络情况"
            },
            {
              "depth": 1,
              "value": "正在使用的端口",
              "heading": "正在使用的端口"
            },
            {
              "depth": 1,
              "value": "创建一个用户组(可以带上 -g 888 来在创建组的时候增加编号)",
              "heading": "创建一个用户组可以带上--g-888-来在创建组的时候增加编号"
            },
            {
              "depth": 1,
              "value": "修改组名称",
              "heading": "修改组名称"
            },
            {
              "depth": 1,
              "value": "修改组编号",
              "heading": "修改组编号"
            },
            {
              "depth": 1,
              "value": "删除用户组(必须先删除组里面的用户才能删除组)",
              "heading": "删除用户组必须先删除组里面的用户才能删除组"
            },
            {
              "depth": 1,
              "value": "设置组密码",
              "heading": "设置组密码"
            },
            {
              "depth": 1,
              "value": "创建一个用户",
              "heading": "创建一个用户"
            },
            {
              "depth": 1,
              "value": "修改一个用户所属用户组",
              "heading": "修改一个用户所属用户组"
            },
            {
              "depth": 1,
              "value": "删除用户",
              "heading": "删除用户"
            },
            {
              "depth": 1,
              "value": "设置用户密码",
              "heading": "设置用户密码"
            },
            {
              "depth": 1,
              "value": "更改文件属组，-R 递归更改目录所有文件属组",
              "heading": "更改文件属组，-r-递归更改目录所有文件属组"
            },
            {
              "depth": 1,
              "value": "更改所属主，可以同时更改文件属组",
              "heading": "更改所属主，可以同时更改文件属组"
            },
            {
              "depth": 1,
              "value": "更改文件9个属性，r=4、w=2、x=1",
              "heading": "更改文件9个属性，r4、w2、x1"
            },
            {
              "depth": 1,
              "value": "让某个服务开机自启(.service可以省略)",
              "heading": "让某个服务开机自启service可以省略"
            },
            {
              "depth": 1,
              "value": "不让开机自启",
              "heading": "不让开机自启"
            },
            {
              "depth": 1,
              "value": "查看服务状态",
              "heading": "查看服务状态"
            },
            {
              "depth": 1,
              "value": "启动某个服务",
              "heading": "启动某个服务"
            },
            {
              "depth": 1,
              "value": "停止某个服务",
              "heading": "停止某个服务"
            },
            {
              "depth": 1,
              "value": "重启某个服务",
              "heading": "重启某个服务"
            },
            {
              "depth": 1,
              "value": "重新加载服务配置文件",
              "heading": "重新加载服务配置文件"
            },
            {
              "depth": 1,
              "value": "查询服务是否开机启动",
              "heading": "查询服务是否开机启动"
            },
            {
              "depth": 1,
              "value": "查看文件大小",
              "heading": "查看文件大小"
            },
            {
              "depth": 1,
              "value": "查看文件夹内容大小，-s 显示统计",
              "heading": "查看文件夹内容大小，-s-显示统计"
            },
            {
              "depth": 1,
              "value": "打包",
              "heading": "打包"
            },
            {
              "depth": 1,
              "value": "解包",
              "heading": "解包"
            },
            {
              "depth": 1,
              "value": "找命令",
              "heading": "找命令"
            },
            {
              "depth": 1,
              "value": "全局寻找文件，需要先安装 mlocate 并执行 updatedb 生成索引",
              "heading": "全局寻找文件，需要先安装-mlocate-并执行-updatedb-生成索引"
            },
            {
              "depth": 1,
              "value": "文件查找",
              "heading": "文件查找"
            },
            {
              "depth": 1,
              "value": "后台运行",
              "heading": "后台运行"
            },
            {
              "depth": 1,
              "value": "递归创建目录",
              "heading": "递归创建目录"
            },
            {
              "depth": 1,
              "value": "显示行号",
              "heading": "显示行号"
            },
            {
              "depth": 1,
              "value": "交互式查看文件",
              "heading": "交互式查看文件"
            },
            {
              "depth": 1,
              "value": "复制目录及目录内所有项目",
              "heading": "复制目录及目录内所有项目"
            },
            {
              "depth": 2,
              "value": "shell 脚本",
              "heading": "shell-脚本"
            },
            {
              "depth": 3,
              "value": "echo",
              "heading": "echo"
            },
            {
              "depth": 3,
              "value": "变量",
              "heading": "变量"
            },
            {
              "depth": 3,
              "value": "循环",
              "heading": "循环"
            },
            {
              "depth": 3,
              "value": "数组",
              "heading": "数组"
            },
            {
              "depth": 3,
              "value": "sh 脚本传参",
              "heading": "sh-脚本传参"
            },
            {
              "depth": 3,
              "value": "运算符",
              "heading": "运算符"
            },
            {
              "depth": 4,
              "value": "算术",
              "heading": "算术"
            },
            {
              "depth": 4,
              "value": "关系",
              "heading": "关系"
            },
            {
              "depth": 5,
              "value": "布尔",
              "heading": "布尔"
            },
            {
              "depth": 4,
              "value": "逻辑",
              "heading": "逻辑"
            },
            {
              "depth": 4,
              "value": "字符串",
              "heading": "字符串"
            },
            {
              "depth": 3,
              "value": "函数",
              "heading": "函数"
            },
            {
              "depth": 3,
              "value": "if-else",
              "heading": "if-else"
            },
            {
              "depth": 3,
              "value": "输出重定向",
              "heading": "输出重定向"
            },
            {
              "depth": 3,
              "value": "综合应用",
              "heading": "综合应用"
            },
            {
              "depth": 2,
              "value": "命令行 cli",
              "heading": "命令行-cli"
            }
          ],
          "title": "Linux",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "Linux"
      },
      {
        "path": "/其他/持续集成",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__持续集成.md' */'../../docs/其他/持续集成.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/持续集成.md",
          "updatedTime": 1593925509000,
          "group": {
            "order": 0
          },
          "slugs": [
            {
              "depth": 1,
              "value": "持续集成",
              "heading": "持续集成"
            },
            {
              "depth": 2,
              "value": "常用的CI",
              "heading": "常用的ci"
            },
            {
              "depth": 2,
              "value": "私有gitlab",
              "heading": "私有gitlab"
            },
            {
              "depth": 3,
              "value": "runner",
              "heading": "runner"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            }
          ],
          "title": "持续集成",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "持续集成"
      },
      {
        "path": "/其他/编码原则",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__编码原则.md' */'../../docs/其他/编码原则.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/编码原则.md",
          "updatedTime": 1593834026000,
          "group": {
            "order": 100
          },
          "slugs": [
            {
              "depth": 1,
              "value": "编码原则",
              "heading": "编码原则"
            },
            {
              "depth": 2,
              "value": "两个原则",
              "heading": "两个原则"
            },
            {
              "depth": 2,
              "value": "命名",
              "heading": "命名"
            },
            {
              "depth": 3,
              "value": "文件、文件夹",
              "heading": "文件、文件夹"
            },
            {
              "depth": 4,
              "value": "目录名",
              "heading": "目录名"
            },
            {
              "depth": 4,
              "value": "组件名",
              "heading": "组件名"
            },
            {
              "depth": 3,
              "value": "HTML、CSS",
              "heading": "html、css"
            },
            {
              "depth": 3,
              "value": "JS",
              "heading": "js"
            },
            {
              "depth": 2,
              "value": "减少 if 分支",
              "heading": "减少-if-分支"
            },
            {
              "depth": 2,
              "value": "警惕匿名函数",
              "heading": "警惕匿名函数"
            },
            {
              "depth": 2,
              "value": "使用对象字面量来封装代码",
              "heading": "使用对象字面量来封装代码"
            },
            {
              "depth": 2,
              "value": "模块模式",
              "heading": "模块模式"
            },
            {
              "depth": 2,
              "value": "错误处理",
              "heading": "错误处理"
            },
            {
              "depth": 2,
              "value": "iife 的写法",
              "heading": "iife-的写法"
            },
            {
              "depth": 2,
              "value": "函数注释",
              "heading": "函数注释"
            },
            {
              "depth": 2,
              "value": "返回 true 的表达式",
              "heading": "返回-true-的表达式"
            },
            {
              "depth": 2,
              "value": "三元操作符替代 if 条件判断",
              "heading": "三元操作符替代-if-条件判断"
            },
            {
              "depth": 2,
              "value": "&& 和 ||",
              "heading": "-和-"
            },
            {
              "depth": 2,
              "value": "一些实践",
              "heading": "一些实践"
            },
            {
              "depth": 2,
              "value": "考察",
              "heading": "考察"
            },
            {
              "depth": 3,
              "value": "遵循规范",
              "heading": "遵循规范"
            },
            {
              "depth": 3,
              "value": "设计精简",
              "heading": "设计精简"
            },
            {
              "depth": 3,
              "value": "易于修改",
              "heading": "易于修改"
            }
          ],
          "title": "编码原则",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "编码原则"
      },
      {
        "path": "/其他/防御编程",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__其他__防御编程.md' */'../../docs/其他/防御编程.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/其他/防御编程.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "防御编程",
              "heading": "防御编程"
            }
          ],
          "title": "防御编程",
          "nav": {
            "path": "/其他",
            "title": "其他"
          }
        },
        "title": "防御编程"
      },
      {
        "path": "/前端/web-api",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__WebApi.md' */'../../docs/前端/WebApi.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/WebApi.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Web API",
              "heading": "web-api"
            },
            {
              "depth": 2,
              "value": "BOM",
              "heading": "bom"
            },
            {
              "depth": 3,
              "value": "window对象",
              "heading": "window对象"
            },
            {
              "depth": 3,
              "value": "location对象",
              "heading": "location对象"
            },
            {
              "depth": 3,
              "value": "navigator对象",
              "heading": "navigator对象"
            },
            {
              "depth": 3,
              "value": "screen对象",
              "heading": "screen对象"
            },
            {
              "depth": 3,
              "value": "history对象",
              "heading": "history对象"
            },
            {
              "depth": 2,
              "value": "node",
              "heading": "node"
            },
            {
              "depth": 3,
              "value": "节点层次",
              "heading": "节点层次"
            },
            {
              "depth": 2,
              "value": "存储",
              "heading": "存储"
            },
            {
              "depth": 3,
              "value": "cookie",
              "heading": "cookie"
            },
            {
              "depth": 3,
              "value": "localstorage",
              "heading": "localstorage"
            },
            {
              "depth": 3,
              "value": "sessionstorage",
              "heading": "sessionstorage"
            },
            {
              "depth": 2,
              "value": "事件",
              "heading": "事件"
            },
            {
              "depth": 3,
              "value": "事件级别",
              "heading": "事件级别"
            },
            {
              "depth": 3,
              "value": "事件流",
              "heading": "事件流"
            },
            {
              "depth": 3,
              "value": "事件处理程序",
              "heading": "事件处理程序"
            },
            {
              "depth": 3,
              "value": "标准 DOM 事件对象",
              "heading": "标准-dom-事件对象"
            },
            {
              "depth": 3,
              "value": "DOM 事件捕获的流程",
              "heading": "dom-事件捕获的流程"
            },
            {
              "depth": 3,
              "value": "不支持冒泡的事件",
              "heading": "不支持冒泡的事件"
            },
            {
              "depth": 3,
              "value": "事件的方法",
              "heading": "事件的方法"
            },
            {
              "depth": 3,
              "value": "事件类型",
              "heading": "事件类型"
            },
            {
              "depth": 3,
              "value": "考虑内存和性能",
              "heading": "考虑内存和性能"
            },
            {
              "depth": 3,
              "value": "自定义事件",
              "heading": "自定义事件"
            },
            {
              "depth": 3,
              "value": "模拟事件",
              "heading": "模拟事件"
            },
            {
              "depth": 3,
              "value": "target 与 currentTarget",
              "heading": "target-与-currenttarget"
            },
            {
              "depth": 3,
              "value": "具体事件",
              "heading": "具体事件"
            },
            {
              "depth": 4,
              "value": "清除 DOM 事件",
              "heading": "清除-dom-事件"
            },
            {
              "depth": 4,
              "value": "跨域通信",
              "heading": "跨域通信"
            },
            {
              "depth": 4,
              "value": "animationend",
              "heading": "animationend"
            },
            {
              "depth": 4,
              "value": "鼠标事件",
              "heading": "鼠标事件"
            },
            {
              "depth": 4,
              "value": "DeviceOrientationEvent",
              "heading": "deviceorientationevent"
            },
            {
              "depth": 4,
              "value": "touch 事件",
              "heading": "touch-事件"
            },
            {
              "depth": 4,
              "value": "touch 事件",
              "heading": "touch-事件-1"
            },
            {
              "depth": 4,
              "value": "input 事件",
              "heading": "input-事件"
            },
            {
              "depth": 4,
              "value": "paste 事件",
              "heading": "paste-事件"
            },
            {
              "depth": 2,
              "value": "表单",
              "heading": "表单"
            },
            {
              "depth": 3,
              "value": "表单字段",
              "heading": "表单字段"
            },
            {
              "depth": 3,
              "value": "重置表单",
              "heading": "重置表单"
            },
            {
              "depth": 3,
              "value": "提交表单",
              "heading": "提交表单"
            },
            {
              "depth": 3,
              "value": "重置表单",
              "heading": "重置表单-1"
            },
            {
              "depth": 2,
              "value": "Binary data",
              "heading": "binary-data"
            },
            {
              "depth": 3,
              "value": "arrayBuffer",
              "heading": "arraybuffer"
            },
            {
              "depth": 3,
              "value": "Blob 二进制大对象",
              "heading": "blob-二进制大对象"
            },
            {
              "depth": 3,
              "value": "File",
              "heading": "file"
            },
            {
              "depth": 3,
              "value": "操作二进制数据",
              "heading": "操作二进制数据"
            },
            {
              "depth": 2,
              "value": "实践",
              "heading": "实践"
            },
            {
              "depth": 3,
              "value": "fetch-abort",
              "heading": "fetch-abort"
            },
            {
              "depth": 3,
              "value": "First-Contentful-Paint 首屏时间",
              "heading": "first-contentful-paint-首屏时间"
            },
            {
              "depth": 3,
              "value": "MutationObserver 监听 DOM 变化",
              "heading": "mutationobserver-监听-dom-变化"
            },
            {
              "depth": 3,
              "value": "execCommand 复制文本",
              "heading": "execcommand-复制文本"
            },
            {
              "depth": 3,
              "value": "Promise",
              "heading": "promise"
            },
            {
              "depth": 3,
              "value": "iframe 通信",
              "heading": "iframe-通信"
            },
            {
              "depth": 3,
              "value": "try...catch...错误处理",
              "heading": "trycatch错误处理"
            },
            {
              "depth": 3,
              "value": "ES6 Module 和 CommonJS",
              "heading": "es6-module-和-commonjs"
            },
            {
              "depth": 3,
              "value": "pushState、hashchange 前端路由",
              "heading": "pushstate、hashchange-前端路由"
            },
            {
              "depth": 3,
              "value": "Web Workers 单独运行线程",
              "heading": "web-workers-单独运行线程"
            },
            {
              "depth": 3,
              "value": "xhr 与 fetch",
              "heading": "xhr-与-fetch"
            },
            {
              "depth": 3,
              "value": "获取样式",
              "heading": "获取样式"
            },
            {
              "depth": 3,
              "value": "窗口的滚动",
              "heading": "窗口的滚动"
            },
            {
              "depth": 3,
              "value": "第三方 Cookie",
              "heading": "第三方-cookie"
            },
            {
              "depth": 3,
              "value": "DOM 常见操作",
              "heading": "dom-常见操作"
            },
            {
              "depth": 3,
              "value": "动态脚本",
              "heading": "动态脚本"
            },
            {
              "depth": 3,
              "value": "动态样式",
              "heading": "动态样式"
            },
            {
              "depth": 3,
              "value": "获取样式",
              "heading": "获取样式-1"
            },
            {
              "depth": 3,
              "value": "设置样式",
              "heading": "设置样式"
            },
            {
              "depth": 3,
              "value": "创建元素",
              "heading": "创建元素"
            },
            {
              "depth": 3,
              "value": "元素插入和移除",
              "heading": "元素插入和移除"
            },
            {
              "depth": 3,
              "value": "元素属性",
              "heading": "元素属性"
            },
            {
              "depth": 4,
              "value": "自定义数据属性 data-",
              "heading": "自定义数据属性-data-"
            },
            {
              "depth": 3,
              "value": "元素遍历",
              "heading": "元素遍历"
            },
            {
              "depth": 3,
              "value": "元素大小",
              "heading": "元素大小"
            },
            {
              "depth": 3,
              "value": "元素位置",
              "heading": "元素位置"
            },
            {
              "depth": 4,
              "value": "计算元素到窗口的位置",
              "heading": "计算元素到窗口的位置"
            },
            {
              "depth": 3,
              "value": "元素查找",
              "heading": "元素查找"
            },
            {
              "depth": 3,
              "value": "元素的增删改查",
              "heading": "元素的增删改查"
            },
            {
              "depth": 3,
              "value": "offset、scrollWidth",
              "heading": "offset、scrollwidth"
            },
            {
              "depth": 3,
              "value": "property 和 attribute",
              "heading": "property-和-attribute"
            },
            {
              "depth": 3,
              "value": "tagName 和 nodeName",
              "heading": "tagname-和-nodename"
            },
            {
              "depth": 3,
              "value": "createDocumentFragment",
              "heading": "createdocumentfragment"
            },
            {
              "depth": 3,
              "value": "cloneNode",
              "heading": "clonenode"
            },
            {
              "depth": 3,
              "value": "DOM 序列化与反序列化",
              "heading": "dom-序列化与反序列化"
            },
            {
              "depth": 3,
              "value": "如何知道某个元素在页面上的偏移量?",
              "heading": "如何知道某个元素在页面上的偏移量"
            },
            {
              "depth": 3,
              "value": "多页面通信",
              "heading": "多页面通信"
            },
            {
              "depth": 3,
              "value": "video 自动播放",
              "heading": "video-自动播放"
            },
            {
              "depth": 3,
              "value": "日期格式化",
              "heading": "日期格式化"
            },
            {
              "depth": 3,
              "value": "实现 Canvas 缩放的方法",
              "heading": "实现-canvas-缩放的方法"
            },
            {
              "depth": 3,
              "value": "Canvas Retina 适配",
              "heading": "canvas-retina-适配"
            },
            {
              "depth": 3,
              "value": "rem 适配移动端屏幕",
              "heading": "rem-适配移动端屏幕"
            },
            {
              "depth": 3,
              "value": "元素拖拽",
              "heading": "元素拖拽"
            },
            {
              "depth": 3,
              "value": "横屏竖屏切换监听",
              "heading": "横屏竖屏切换监听"
            },
            {
              "depth": 3,
              "value": "前端动态生成屏幕快照",
              "heading": "前端动态生成屏幕快照"
            },
            {
              "depth": 3,
              "value": "移动端虚拟键盘弹出输入框上移",
              "heading": "移动端虚拟键盘弹出输入框上移"
            },
            {
              "depth": 3,
              "value": "判断元素是否在视窗内",
              "heading": "判断元素是否在视窗内"
            },
            {
              "depth": 3,
              "value": "H5软键盘兼容方案",
              "heading": "h5软键盘兼容方案"
            },
            {
              "depth": 3,
              "value": "URL Query 转对象",
              "heading": "url-query-转对象"
            },
            {
              "depth": 3,
              "value": "注入 JS",
              "heading": "注入-js"
            },
            {
              "depth": 3,
              "value": "元素是否可滚动",
              "heading": "元素是否可滚动"
            },
            {
              "depth": 3,
              "value": "限制键盘输入",
              "heading": "限制键盘输入"
            },
            {
              "depth": 3,
              "value": "计算元素位置",
              "heading": "计算元素位置"
            },
            {
              "depth": 3,
              "value": "访问 DOM 树的所有元素",
              "heading": "访问-dom-树的所有元素"
            },
            {
              "depth": 3,
              "value": "获取 document 宽高",
              "heading": "获取-document-宽高"
            },
            {
              "depth": 3,
              "value": "计算图片宽高",
              "heading": "计算图片宽高"
            },
            {
              "depth": 3,
              "value": "键盘密码可见切换",
              "heading": "键盘密码可见切换"
            },
            {
              "depth": 3,
              "value": "滚动到某个元素",
              "heading": "滚动到某个元素"
            },
            {
              "depth": 3,
              "value": "addEventListener passive 被动",
              "heading": "addeventlistener-passive-被动"
            },
            {
              "depth": 3,
              "value": "canvas 高倍屏 retina 下变模糊的处理办法",
              "heading": "canvas-高倍屏-retina-下变模糊的处理办法"
            },
            {
              "depth": 3,
              "value": "数字键盘",
              "heading": "数字键盘"
            },
            {
              "depth": 3,
              "value": "系统功能",
              "heading": "系统功能"
            },
            {
              "depth": 3,
              "value": "打开 APP",
              "heading": "打开-app"
            },
            {
              "depth": 3,
              "value": "忽略自动识别",
              "heading": "忽略自动识别"
            },
            {
              "depth": 3,
              "value": "解决 input 失焦后页面没有回弹",
              "heading": "解决-input-失焦后页面没有回弹"
            },
            {
              "depth": 3,
              "value": "解决 iOS 中 input 失焦后，页面上移，点击事件无效",
              "heading": "解决-ios-中-input-失焦后，页面上移，点击事件无效"
            },
            {
              "depth": 3,
              "value": "intersection Observer",
              "heading": "intersection-observer"
            }
          ],
          "title": "Web API",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "Web API"
      },
      {
        "path": "/前端/css",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__css.md' */'../../docs/前端/css.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/css.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "CSS",
              "heading": "css"
            },
            {
              "depth": 2,
              "value": "position",
              "heading": "position"
            },
            {
              "depth": 2,
              "value": "line-height",
              "heading": "line-height"
            },
            {
              "depth": 2,
              "value": "z-index",
              "heading": "z-index"
            },
            {
              "depth": 2,
              "value": "选择器",
              "heading": "选择器"
            },
            {
              "depth": 3,
              "value": "选择器优先级",
              "heading": "选择器优先级"
            },
            {
              "depth": 2,
              "value": "@ 规则",
              "heading": "-规则"
            },
            {
              "depth": 3,
              "value": "@charset",
              "heading": "charset"
            },
            {
              "depth": 3,
              "value": "@keyframes",
              "heading": "keyframes"
            },
            {
              "depth": 3,
              "value": "@fontface",
              "heading": "fontface"
            },
            {
              "depth": 3,
              "value": "@supports",
              "heading": "supports"
            },
            {
              "depth": 3,
              "value": "@media",
              "heading": "media"
            },
            {
              "depth": 3,
              "value": "@import",
              "heading": "import"
            },
            {
              "depth": 2,
              "value": "盒模型",
              "heading": "盒模型"
            },
            {
              "depth": 3,
              "value": "content-box",
              "heading": "content-box"
            },
            {
              "depth": 3,
              "value": "border-box",
              "heading": "border-box"
            },
            {
              "depth": 2,
              "value": "L-V-H-A",
              "heading": "l-v-h-a"
            },
            {
              "depth": 2,
              "value": "rgba 和 opacity",
              "heading": "rgba-和-opacity"
            },
            {
              "depth": 2,
              "value": "响应式设计",
              "heading": "响应式设计"
            },
            {
              "depth": 2,
              "value": "flex",
              "heading": "flex"
            },
            {
              "depth": 3,
              "value": "概念",
              "heading": "概念"
            },
            {
              "depth": 3,
              "value": "作用在容器的属性",
              "heading": "作用在容器的属性"
            },
            {
              "depth": 3,
              "value": "作用在元素的属性",
              "heading": "作用在元素的属性"
            },
            {
              "depth": 2,
              "value": "grid",
              "heading": "grid"
            },
            {
              "depth": 2,
              "value": "动画",
              "heading": "动画"
            },
            {
              "depth": 3,
              "value": "理论知识",
              "heading": "理论知识"
            },
            {
              "depth": 3,
              "value": "transition",
              "heading": "transition"
            },
            {
              "depth": 3,
              "value": "animation",
              "heading": "animation"
            },
            {
              "depth": 2,
              "value": "原理",
              "heading": "原理"
            },
            {
              "depth": 3,
              "value": "translateZ 硬件加速原理",
              "heading": "translatez-硬件加速原理"
            },
            {
              "depth": 3,
              "value": "reset 和 normalize",
              "heading": "reset-和-normalize"
            },
            {
              "depth": 3,
              "value": "font-family",
              "heading": "font-family"
            },
            {
              "depth": 4,
              "value": "通用字体族名 generic-family",
              "heading": "通用字体族名-generic-family"
            },
            {
              "depth": 4,
              "value": "字体匹配规则",
              "heading": "字体匹配规则"
            },
            {
              "depth": 4,
              "value": "系统自带字体",
              "heading": "系统自带字体"
            },
            {
              "depth": 4,
              "value": "system-ui",
              "heading": "system-ui"
            },
            {
              "depth": 4,
              "value": "设置规则",
              "heading": "设置规则"
            },
            {
              "depth": 4,
              "value": "分析一下",
              "heading": "分析一下"
            },
            {
              "depth": 2,
              "value": "布局",
              "heading": "布局"
            },
            {
              "depth": 2,
              "value": "IFC",
              "heading": "ifc"
            },
            {
              "depth": 2,
              "value": "BFC",
              "heading": "bfc"
            },
            {
              "depth": 2,
              "value": "布局模型",
              "heading": "布局模型"
            },
            {
              "depth": 2,
              "value": "伪类",
              "heading": "伪类"
            },
            {
              "depth": 2,
              "value": "单位",
              "heading": "单位"
            },
            {
              "depth": 2,
              "value": "应用",
              "heading": "应用"
            },
            {
              "depth": 3,
              "value": "字符间距",
              "heading": "字符间距"
            },
            {
              "depth": 3,
              "value": "transform-origin",
              "heading": "transform-origin"
            },
            {
              "depth": 3,
              "value": "1像素解决方案",
              "heading": "1像素解决方案"
            },
            {
              "depth": 3,
              "value": "实体符号",
              "heading": "实体符号"
            },
            {
              "depth": 3,
              "value": "vw 适配",
              "heading": "vw-适配"
            },
            {
              "depth": 3,
              "value": "使用自定义字体",
              "heading": "使用自定义字体"
            },
            {
              "depth": 3,
              "value": "水平垂直居中的 10 种方式",
              "heading": "水平垂直居中的-10-种方式"
            },
            {
              "depth": 3,
              "value": "ios 的 scroll",
              "heading": "ios-的-scroll"
            },
            {
              "depth": 3,
              "value": "input 光标颜色",
              "heading": "input-光标颜色"
            },
            {
              "depth": 3,
              "value": "输入框的选中颜色",
              "heading": "输入框的选中颜色"
            },
            {
              "depth": 3,
              "value": "开启硬件加速",
              "heading": "开启硬件加速"
            },
            {
              "depth": 3,
              "value": "禁止输入框填充颜色",
              "heading": "禁止输入框填充颜色"
            },
            {
              "depth": 3,
              "value": "placeholder 字体大小",
              "heading": "placeholder-字体大小"
            },
            {
              "depth": 3,
              "value": "禁止文本缩放",
              "heading": "禁止文本缩放"
            },
            {
              "depth": 3,
              "value": "清除输入框内阴影",
              "heading": "清除输入框内阴影"
            },
            {
              "depth": 3,
              "value": "禁止用户选择",
              "heading": "禁止用户选择"
            },
            {
              "depth": 3,
              "value": "去除点击样式闪动",
              "heading": "去除点击样式闪动"
            },
            {
              "depth": 3,
              "value": "去除图片底部空白",
              "heading": "去除图片底部空白"
            },
            {
              "depth": 3,
              "value": "移动端 1px 像素线",
              "heading": "移动端-1px-像素线"
            },
            {
              "depth": 3,
              "value": "自定义滚动条",
              "heading": "自定义滚动条"
            },
            {
              "depth": 3,
              "value": "CSS 文字两端对齐",
              "heading": "css-文字两端对齐"
            },
            {
              "depth": 3,
              "value": "横向带惯性滚动",
              "heading": "横向带惯性滚动"
            },
            {
              "depth": 3,
              "value": "避免横屏切换对字体的调整",
              "heading": "避免横屏切换对字体的调整"
            },
            {
              "depth": 3,
              "value": "单行文字超出省略号",
              "heading": "单行文字超出省略号"
            },
            {
              "depth": 3,
              "value": "多行文字超出省略号",
              "heading": "多行文字超出省略号"
            },
            {
              "depth": 3,
              "value": "tabel 水平垂直居中",
              "heading": "tabel-水平垂直居中"
            },
            {
              "depth": 3,
              "value": "长英文单词强制换行",
              "heading": "长英文单词强制换行"
            },
            {
              "depth": 3,
              "value": "图片居中",
              "heading": "图片居中"
            },
            {
              "depth": 3,
              "value": "给 html 标签添加类名",
              "heading": "给-html-标签添加类名"
            },
            {
              "depth": 3,
              "value": "浮层设计",
              "heading": "浮层设计"
            },
            {
              "depth": 3,
              "value": "两栏布局",
              "heading": "两栏布局"
            },
            {
              "depth": 3,
              "value": "三栏布局",
              "heading": "三栏布局"
            },
            {
              "depth": 3,
              "value": "iOS 开关",
              "heading": "ios-开关"
            },
            {
              "depth": 2,
              "value": "写 CSS 的方式",
              "heading": "写-css-的方式"
            },
            {
              "depth": 3,
              "value": "BEM",
              "heading": "bem"
            },
            {
              "depth": 3,
              "value": "SUITCSS",
              "heading": "suitcss"
            },
            {
              "depth": 3,
              "value": "SMACSS",
              "heading": "smacss"
            },
            {
              "depth": 3,
              "value": "OOCSS",
              "heading": "oocss"
            },
            {
              "depth": 3,
              "value": "less",
              "heading": "less"
            },
            {
              "depth": 3,
              "value": "Bulma",
              "heading": "bulma"
            },
            {
              "depth": 3,
              "value": "tailwind 不用写css",
              "heading": "tailwind-不用写css"
            },
            {
              "depth": 3,
              "value": "最佳规范",
              "heading": "最佳规范"
            },
            {
              "depth": 3,
              "value": "代码组织",
              "heading": "代码组织"
            },
            {
              "depth": 3,
              "value": "属性声明顺序",
              "heading": "属性声明顺序"
            },
            {
              "depth": 3,
              "value": "模块组织",
              "heading": "模块组织"
            },
            {
              "depth": 3,
              "value": "写 CSS 的规则",
              "heading": "写-css-的规则"
            },
            {
              "depth": 3,
              "value": "写 CSS 的姿势",
              "heading": "写-css-的姿势"
            },
            {
              "depth": 2,
              "value": "less",
              "heading": "less-1"
            },
            {
              "depth": 2,
              "value": "postcss",
              "heading": "postcss"
            },
            {
              "depth": 3,
              "value": "cssnext",
              "heading": "cssnext"
            },
            {
              "depth": 3,
              "value": "手淘实践",
              "heading": "手淘实践"
            },
            {
              "depth": 3,
              "value": "Autoprefixer",
              "heading": "autoprefixer"
            }
          ],
          "title": "CSS",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "CSS"
      },
      {
        "path": "/前端/html5",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__html5.md' */'../../docs/前端/html5.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/html5.md",
          "updatedTime": 1593834026000,
          "title": "HTML",
          "slugs": [
            {
              "depth": 2,
              "value": "元素类型",
              "heading": "元素类型"
            },
            {
              "depth": 3,
              "value": "行内元素",
              "heading": "行内元素"
            },
            {
              "depth": 3,
              "value": "块级元素",
              "heading": "块级元素"
            },
            {
              "depth": 3,
              "value": "内联块级元素",
              "heading": "内联块级元素"
            },
            {
              "depth": 3,
              "value": "空元素",
              "heading": "空元素"
            },
            {
              "depth": 3,
              "value": "替换元素",
              "heading": "替换元素"
            },
            {
              "depth": 2,
              "value": "渲染机制",
              "heading": "渲染机制"
            },
            {
              "depth": 3,
              "value": "DOCTYPE",
              "heading": "doctype"
            },
            {
              "depth": 3,
              "value": "浏览器渲染流程",
              "heading": "浏览器渲染流程"
            },
            {
              "depth": 3,
              "value": "回流与重绘",
              "heading": "回流与重绘"
            },
            {
              "depth": 2,
              "value": "script 标签",
              "heading": "script-标签"
            },
            {
              "depth": 2,
              "value": "HTML 模板",
              "heading": "html-模板"
            },
            {
              "depth": 2,
              "value": "DOMContentLoader 与 window.onLoad",
              "heading": "domcontentloader-与-windowonload"
            },
            {
              "depth": 2,
              "value": "Meta",
              "heading": "meta"
            },
            {
              "depth": 3,
              "value": "Viewport",
              "heading": "viewport"
            },
            {
              "depth": 3,
              "value": "强制浏览器使用 WebKit 内核",
              "heading": "强制浏览器使用-webkit-内核"
            },
            {
              "depth": 2,
              "value": "新增元素",
              "heading": "新增元素"
            },
            {
              "depth": 2,
              "value": "表单",
              "heading": "表单"
            },
            {
              "depth": 3,
              "value": "表单元素",
              "heading": "表单元素"
            },
            {
              "depth": 3,
              "value": "表单属性",
              "heading": "表单属性"
            },
            {
              "depth": 3,
              "value": "表单验证",
              "heading": "表单验证"
            },
            {
              "depth": 2,
              "value": "增强的页面元素",
              "heading": "增强的页面元素"
            },
            {
              "depth": 2,
              "value": "全局属性",
              "heading": "全局属性"
            },
            {
              "depth": 2,
              "value": "history API",
              "heading": "history-api"
            },
            {
              "depth": 2,
              "value": "Modernizr",
              "heading": "modernizr"
            },
            {
              "depth": 2,
              "value": "语义化",
              "heading": "语义化"
            }
          ],
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "HTML"
      },
      {
        "path": "/前端/javascript",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__javascript.md' */'../../docs/前端/javascript.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/javascript.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript",
              "heading": "javascript"
            },
            {
              "depth": 2,
              "value": "基本数据类型",
              "heading": "基本数据类型"
            },
            {
              "depth": 2,
              "value": "引用类型",
              "heading": "引用类型"
            },
            {
              "depth": 2,
              "value": "运算符优先级",
              "heading": "运算符优先级"
            },
            {
              "depth": 2,
              "value": "类型判断",
              "heading": "类型判断"
            },
            {
              "depth": 2,
              "value": "垃圾收集",
              "heading": "垃圾收集"
            },
            {
              "depth": 2,
              "value": "原型链",
              "heading": "原型链"
            },
            {
              "depth": 2,
              "value": "JS 对象",
              "heading": "js-对象"
            },
            {
              "depth": 3,
              "value": "宿主对象",
              "heading": "宿主对象"
            },
            {
              "depth": 3,
              "value": "内置固有对象",
              "heading": "内置固有对象"
            },
            {
              "depth": 3,
              "value": "内置原生对象",
              "heading": "内置原生对象"
            },
            {
              "depth": 3,
              "value": "内置普通对象",
              "heading": "内置普通对象"
            },
            {
              "depth": 2,
              "value": "作用域和内存管理",
              "heading": "作用域和内存管理"
            },
            {
              "depth": 2,
              "value": "挥舞函数",
              "heading": "挥舞函数"
            },
            {
              "depth": 3,
              "value": "arguments",
              "heading": "arguments"
            },
            {
              "depth": 3,
              "value": "纯函数",
              "heading": "纯函数"
            },
            {
              "depth": 4,
              "value": "缓存特性",
              "heading": "缓存特性"
            },
            {
              "depth": 4,
              "value": "纯函数没有副作用",
              "heading": "纯函数没有副作用"
            },
            {
              "depth": 4,
              "value": "避免副作用 return 一个函数",
              "heading": "避免副作用-return-一个函数"
            },
            {
              "depth": 4,
              "value": "优点",
              "heading": "优点"
            },
            {
              "depth": 3,
              "value": "generator 迭代器函数",
              "heading": "generator-迭代器函数"
            },
            {
              "depth": 3,
              "value": "async-await 函数",
              "heading": "async-await-函数"
            },
            {
              "depth": 3,
              "value": "闭包",
              "heading": "闭包"
            },
            {
              "depth": 3,
              "value": "IIFE",
              "heading": "iife"
            },
            {
              "depth": 3,
              "value": "匿名函数",
              "heading": "匿名函数"
            },
            {
              "depth": 3,
              "value": "模块模式",
              "heading": "模块模式"
            },
            {
              "depth": 2,
              "value": "this",
              "heading": "this"
            },
            {
              "depth": 2,
              "value": "array",
              "heading": "array"
            },
            {
              "depth": 2,
              "value": "object",
              "heading": "object"
            },
            {
              "depth": 3,
              "value": "初始化",
              "heading": "初始化"
            },
            {
              "depth": 2,
              "value": "string",
              "heading": "string"
            },
            {
              "depth": 2,
              "value": "Number",
              "heading": "number"
            },
            {
              "depth": 3,
              "value": "Map WeakMap",
              "heading": "map-weakmap"
            },
            {
              "depth": 2,
              "value": "Event Loop",
              "heading": "event-loop"
            },
            {
              "depth": 3,
              "value": "调用动画",
              "heading": "调用动画"
            },
            {
              "depth": 3,
              "value": "规范定义",
              "heading": "规范定义"
            },
            {
              "depth": 3,
              "value": "任务队列",
              "heading": "任务队列"
            },
            {
              "depth": 3,
              "value": "运行环境",
              "heading": "运行环境"
            },
            {
              "depth": 3,
              "value": "执行流程",
              "heading": "执行流程"
            },
            {
              "depth": 3,
              "value": "rendering 实验",
              "heading": "rendering-实验"
            },
            {
              "depth": 3,
              "value": "应用",
              "heading": "应用"
            },
            {
              "depth": 4,
              "value": "优化 DOM 操作",
              "heading": "优化-dom-操作"
            },
            {
              "depth": 3,
              "value": "异步更新策略",
              "heading": "异步更新策略"
            },
            {
              "depth": 4,
              "value": "宏任务与微任务",
              "heading": "宏任务与微任务"
            },
            {
              "depth": 4,
              "value": "Event Loop 过程",
              "heading": "event-loop-过程"
            },
            {
              "depth": 4,
              "value": "渲染的时机",
              "heading": "渲染的时机"
            },
            {
              "depth": 4,
              "value": "Vue 异步更新策略 nextTick",
              "heading": "vue-异步更新策略-nexttick"
            },
            {
              "depth": 3,
              "value": "面试题",
              "heading": "面试题"
            },
            {
              "depth": 2,
              "value": "新特性",
              "heading": "新特性"
            },
            {
              "depth": 3,
              "value": "Array.flat([flat]) 数组拍平",
              "heading": "arrayflatflat-数组拍平"
            },
            {
              "depth": 3,
              "value": "Object.fromEntries 组成对象",
              "heading": "objectfromentries-组成对象"
            },
            {
              "depth": 2,
              "value": "babel",
              "heading": "babel"
            },
            {
              "depth": 3,
              "value": "babel配置文件",
              "heading": "babel配置文件"
            },
            {
              "depth": 2,
              "value": "Object.is polyfill",
              "heading": "objectis-polyfill"
            },
            {
              "depth": 2,
              "value": "原理",
              "heading": "原理"
            },
            {
              "depth": 3,
              "value": "浏览器架构",
              "heading": "浏览器架构"
            },
            {
              "depth": 3,
              "value": "WebGL 与 Canvas",
              "heading": "webgl-与-canvas"
            },
            {
              "depth": 3,
              "value": "获取一个对象上可枚举属性的方法",
              "heading": "获取一个对象上可枚举属性的方法"
            },
            {
              "depth": 3,
              "value": "解构赋值中的默认值",
              "heading": "解构赋值中的默认值"
            },
            {
              "depth": 3,
              "value": "NaN === NaN +0 !== -0",
              "heading": "nan--nan-0---0"
            },
            {
              "depth": 3,
              "value": "arr.toString() 和 Object.prototype.toString.call(arr) 的结果为什么不一样？",
              "heading": "arrtostring-和-objectprototypetostringcallarr-的结果为什么不一样？"
            },
            {
              "depth": 3,
              "value": "iterable 迭代器",
              "heading": "iterable-迭代器"
            }
          ],
          "title": "JavaScript",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "JavaScript"
      },
      {
        "path": "/前端/react",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__react.md' */'../../docs/前端/react.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/react.md",
          "updatedTime": 1593925509000,
          "title": "React",
          "group": {
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 3,
              "value": "版本",
              "heading": "版本"
            },
            {
              "depth": 3,
              "value": "生命周期",
              "heading": "生命周期"
            },
            {
              "depth": 3,
              "value": "组件",
              "heading": "组件"
            },
            {
              "depth": 3,
              "value": "constructor",
              "heading": "constructor"
            },
            {
              "depth": 3,
              "value": "setState 时机",
              "heading": "setstate-时机"
            },
            {
              "depth": 3,
              "value": "核心流程",
              "heading": "核心流程"
            },
            {
              "depth": 3,
              "value": "性能优化",
              "heading": "性能优化"
            },
            {
              "depth": 3,
              "value": "组件逻辑复用的发展历程",
              "heading": "组件逻辑复用的发展历程"
            },
            {
              "depth": 3,
              "value": "渲染属性 render props",
              "heading": "渲染属性-render-props"
            },
            {
              "depth": 3,
              "value": "HOC 高阶组件",
              "heading": "hoc-高阶组件"
            },
            {
              "depth": 3,
              "value": "VNode",
              "heading": "vnode"
            },
            {
              "depth": 3,
              "value": "key 的作用",
              "heading": "key-的作用"
            },
            {
              "depth": 3,
              "value": "super(props)",
              "heading": "superprops"
            },
            {
              "depth": 2,
              "value": "Redux",
              "heading": "redux"
            },
            {
              "depth": 3,
              "value": "解决的问题",
              "heading": "解决的问题"
            },
            {
              "depth": 3,
              "value": "combineReducers",
              "heading": "combinereducers"
            },
            {
              "depth": 3,
              "value": "bindActionCreators",
              "heading": "bindactioncreators"
            },
            {
              "depth": 3,
              "value": "applyMiddleware",
              "heading": "applymiddleware"
            },
            {
              "depth": 3,
              "value": "createStore",
              "heading": "createstore"
            },
            {
              "depth": 3,
              "value": "connect",
              "heading": "connect"
            },
            {
              "depth": 3,
              "value": "dispatch",
              "heading": "dispatch"
            },
            {
              "depth": 3,
              "value": "React-Redux",
              "heading": "react-redux"
            },
            {
              "depth": 3,
              "value": "异步中间件",
              "heading": "异步中间件"
            },
            {
              "depth": 3,
              "value": "Redux-thunk",
              "heading": "redux-thunk"
            },
            {
              "depth": 3,
              "value": "Redux-saga",
              "heading": "redux-saga"
            },
            {
              "depth": 4,
              "value": "side effects 副作用",
              "heading": "side-effects-副作用"
            },
            {
              "depth": 4,
              "value": "middleware api",
              "heading": "middleware-api"
            },
            {
              "depth": 4,
              "value": "effect creatrors",
              "heading": "effect-creatrors"
            },
            {
              "depth": 5,
              "value": "call",
              "heading": "call"
            },
            {
              "depth": 5,
              "value": "put",
              "heading": "put"
            },
            {
              "depth": 5,
              "value": "select",
              "heading": "select"
            },
            {
              "depth": 5,
              "value": "take",
              "heading": "take"
            },
            {
              "depth": 5,
              "value": "takeEvery",
              "heading": "takeevery"
            },
            {
              "depth": 5,
              "value": "takeLatest",
              "heading": "takelatest"
            },
            {
              "depth": 5,
              "value": "fork",
              "heading": "fork"
            },
            {
              "depth": 5,
              "value": "apply",
              "heading": "apply"
            },
            {
              "depth": 5,
              "value": "cancel",
              "heading": "cancel"
            },
            {
              "depth": 4,
              "value": "effect combinaators",
              "heading": "effect-combinaators"
            },
            {
              "depth": 4,
              "value": "阻塞与非阻塞",
              "heading": "阻塞与非阻塞"
            },
            {
              "depth": 3,
              "value": "Redux-actions",
              "heading": "redux-actions"
            },
            {
              "depth": 2,
              "value": "Hooks",
              "heading": "hooks"
            },
            {
              "depth": 3,
              "value": "Hooks library",
              "heading": "hooks-library"
            },
            {
              "depth": 2,
              "value": "immutable",
              "heading": "immutable"
            },
            {
              "depth": 3,
              "value": "引用带来的副作用",
              "heading": "引用带来的副作用"
            },
            {
              "depth": 3,
              "value": "控制更新",
              "heading": "控制更新"
            },
            {
              "depth": 3,
              "value": "immer.js",
              "heading": "immerjs"
            },
            {
              "depth": 4,
              "value": "use-immer [immer hooks]",
              "heading": "use-immer-immer-hooks"
            },
            {
              "depth": 2,
              "value": "Mobx",
              "heading": "mobx"
            },
            {
              "depth": 2,
              "value": "Dva",
              "heading": "dva"
            },
            {
              "depth": 2,
              "value": "UMI",
              "heading": "umi"
            },
            {
              "depth": 3,
              "value": "特性",
              "heading": "特性"
            },
            {
              "depth": 3,
              "value": "为什么不是？",
              "heading": "为什么不是？"
            },
            {
              "depth": 3,
              "value": "Umi Hooks",
              "heading": "umi-hooks"
            },
            {
              "depth": 3,
              "value": "presets 预设包含很多 plugin",
              "heading": "presets-预设包含很多-plugin"
            },
            {
              "depth": 2,
              "value": "原理",
              "heading": "原理"
            },
            {
              "depth": 3,
              "value": "要不要写 constructor ?",
              "heading": "要不要写-constructor-"
            },
            {
              "depth": 3,
              "value": "为什么有时候会出现无限重复请求的问题？",
              "heading": "为什么有时候会出现无限重复请求的问题？"
            },
            {
              "depth": 3,
              "value": "class 组件 为什么要调用 super？",
              "heading": "class-组件-为什么要调用-super？"
            },
            {
              "depth": 3,
              "value": "为什么要 setState ?",
              "heading": "为什么要-setstate-"
            },
            {
              "depth": 3,
              "value": "为什么 React 现在要推行函数式组件，用 class 不好吗？",
              "heading": "为什么-react-现在要推行函数式组件，用-class-不好吗？"
            },
            {
              "depth": 3,
              "value": "受控组件与非受控组件",
              "heading": "受控组件与非受控组件"
            },
            {
              "depth": 3,
              "value": "获取数据在哪个声明周期？",
              "heading": "获取数据在哪个声明周期？"
            },
            {
              "depth": 3,
              "value": "权限控制",
              "heading": "权限控制"
            },
            {
              "depth": 3,
              "value": "next.js 自定义 server",
              "heading": "nextjs-自定义-server"
            },
            {
              "depth": 3,
              "value": "Can't perform a React state update on an unmounted component.",
              "heading": "cant-perform-a-react-state-update-on-an-unmounted-component"
            },
            {
              "depth": 3,
              "value": "react + redux 最佳实践",
              "heading": "react--redux-最佳实践"
            },
            {
              "depth": 3,
              "value": "React.PureComponent React.memo",
              "heading": "reactpurecomponent-reactmemo"
            },
            {
              "depth": 3,
              "value": "useRef和createRef的区别",
              "heading": "useref和createref的区别"
            },
            {
              "depth": 3,
              "value": "with typescript",
              "heading": "with-typescript"
            }
          ],
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "React"
      },
      {
        "path": "/前端/typescript",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__typescript.md' */'../../docs/前端/typescript.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/typescript.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "TypeScript",
              "heading": "typescript"
            },
            {
              "depth": 2,
              "value": "泛型",
              "heading": "泛型"
            },
            {
              "depth": 2,
              "value": "类型映射",
              "heading": "类型映射"
            },
            {
              "depth": 2,
              "value": "类型保护",
              "heading": "类型保护"
            },
            {
              "depth": 2,
              "value": "类型推论",
              "heading": "类型推论"
            },
            {
              "depth": 2,
              "value": "类型断言",
              "heading": "类型断言"
            },
            {
              "depth": 2,
              "value": "tsconfig.json",
              "heading": "tsconfigjson"
            },
            {
              "depth": 2,
              "value": "版本",
              "heading": "版本"
            },
            {
              "depth": 3,
              "value": "3.9",
              "heading": "39"
            }
          ],
          "title": "TypeScript",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "TypeScript"
      },
      {
        "path": "/前端/vue",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__vue.md' */'../../docs/前端/vue.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/vue.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Vue",
              "heading": "vue"
            },
            {
              "depth": 2,
              "value": "2.x 源码",
              "heading": "2x-源码"
            },
            {
              "depth": 3,
              "value": "_init",
              "heading": "_init"
            },
            {
              "depth": 3,
              "value": "compile",
              "heading": "compile"
            },
            {
              "depth": 3,
              "value": "响应式",
              "heading": "响应式"
            },
            {
              "depth": 3,
              "value": "Virtual DOM",
              "heading": "virtual-dom"
            },
            {
              "depth": 3,
              "value": "依赖收集",
              "heading": "依赖收集"
            },
            {
              "depth": 3,
              "value": "VNode",
              "heading": "vnode"
            },
            {
              "depth": 3,
              "value": "nextTick 原理",
              "heading": "nexttick-原理"
            },
            {
              "depth": 3,
              "value": "代理 this.data",
              "heading": "代理-thisdata"
            },
            {
              "depth": 3,
              "value": "key 的使用",
              "heading": "key-的使用"
            },
            {
              "depth": 2,
              "value": "静态资源处理",
              "heading": "静态资源处理"
            },
            {
              "depth": 2,
              "value": "Vue UI",
              "heading": "vue-ui"
            },
            {
              "depth": 2,
              "value": "webpack proxy",
              "heading": "webpack-proxy"
            },
            {
              "depth": 2,
              "value": "Vue 单元测试",
              "heading": "vue-单元测试"
            },
            {
              "depth": 2,
              "value": "Vue Compostion API",
              "heading": "vue-compostion-api"
            },
            {
              "depth": 2,
              "value": "2.x 源码剖析",
              "heading": "2x-源码剖析"
            },
            {
              "depth": 2,
              "value": "3.0 beta",
              "heading": "30-beta"
            },
            {
              "depth": 2,
              "value": "实践",
              "heading": "实践"
            },
            {
              "depth": 3,
              "value": "关注点分离",
              "heading": "关注点分离"
            },
            {
              "depth": 3,
              "value": "检测变化的注意事项",
              "heading": "检测变化的注意事项"
            },
            {
              "depth": 3,
              "value": "eslint-plugin-vue",
              "heading": "eslint-plugin-vue"
            },
            {
              "depth": 3,
              "value": "Vuex 结合使用 V-model",
              "heading": "vuex-结合使用-v-model"
            },
            {
              "depth": 2,
              "value": "lyh Vue 工程",
              "heading": "lyh-vue-工程"
            }
          ],
          "title": "Vue",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "Vue"
      },
      {
        "path": "/前端/webpack",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__webpack.md' */'../../docs/前端/webpack.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/webpack.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "Webpack",
              "heading": "webpack"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            },
            {
              "depth": 2,
              "value": "entry",
              "heading": "entry"
            },
            {
              "depth": 2,
              "value": "output",
              "heading": "output"
            },
            {
              "depth": 2,
              "value": "reslove",
              "heading": "reslove"
            },
            {
              "depth": 2,
              "value": "module",
              "heading": "module"
            },
            {
              "depth": 2,
              "value": "optimization",
              "heading": "optimization"
            },
            {
              "depth": 2,
              "value": "Loader",
              "heading": "loader"
            },
            {
              "depth": 3,
              "value": "常用的 Loader？用过哪些 Loader?",
              "heading": "常用的-loader？用过哪些-loader"
            },
            {
              "depth": 3,
              "value": "babel-loader",
              "heading": "babel-loader"
            },
            {
              "depth": 3,
              "value": "处理图片",
              "heading": "处理图片"
            },
            {
              "depth": 3,
              "value": "处理 CSS",
              "heading": "处理-css"
            },
            {
              "depth": 2,
              "value": "Plugin",
              "heading": "plugin"
            },
            {
              "depth": 2,
              "value": "Webpack 构建流程简单说一下",
              "heading": "webpack-构建流程简单说一下"
            },
            {
              "depth": 2,
              "value": "有哪些可以提高效率的插件",
              "heading": "有哪些可以提高效率的插件"
            },
            {
              "depth": 2,
              "value": "source map 是什么？生产环境怎么用？",
              "heading": "source-map-是什么？生产环境怎么用？"
            },
            {
              "depth": 2,
              "value": "TODO:模块打包原理知道吗？",
              "heading": "todo模块打包原理知道吗？"
            },
            {
              "depth": 2,
              "value": "说一下 Webpack 的热更新原理吧",
              "heading": "说一下-webpack-的热更新原理吧"
            },
            {
              "depth": 2,
              "value": "在项目中使用 webpack",
              "heading": "在项目中使用-webpack"
            },
            {
              "depth": 3,
              "value": "tree shaking",
              "heading": "tree-shaking"
            },
            {
              "depth": 3,
              "value": "DllPlugin 加快打包速度",
              "heading": "dllplugin-加快打包速度"
            },
            {
              "depth": 3,
              "value": "Happypack 并发执行",
              "heading": "happypack-并发执行"
            },
            {
              "depth": 3,
              "value": "分离库代码 vendor.js",
              "heading": "分离库代码-vendorjs"
            },
            {
              "depth": 3,
              "value": "CommonsChunkPlugin 抽取共同代码",
              "heading": "commonschunkplugin-抽取共同代码"
            },
            {
              "depth": 3,
              "value": "自动插入 JS 文件到 HTML 中",
              "heading": "自动插入-js-文件到-html-中"
            },
            {
              "depth": 3,
              "value": "按需加载",
              "heading": "按需加载"
            }
          ],
          "title": "Webpack",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "Webpack"
      },
      {
        "path": "/前端/其他",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__其他.md' */'../../docs/前端/其他.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/其他.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 2,
              "value": "前端发展方向",
              "heading": "前端发展方向"
            },
            {
              "depth": 2,
              "value": "如何算是真正的掌握学习内容？",
              "heading": "如何算是真正的掌握学习内容？"
            },
            {
              "depth": 2,
              "value": "infra 团队",
              "heading": "infra-团队"
            },
            {
              "depth": 2,
              "value": "PC 组件库设计",
              "heading": "pc-组件库设计"
            },
            {
              "depth": 2,
              "value": "mqtt",
              "heading": "mqtt"
            },
            {
              "depth": 3,
              "value": "阿里云 iot",
              "heading": "阿里云-iot"
            },
            {
              "depth": 3,
              "value": "EMQ 管理监控 API",
              "heading": "emq-管理监控-api"
            },
            {
              "depth": 2,
              "value": "知乎 Live 不吹不黑聊聊前端框架",
              "heading": "知乎-live-不吹不黑聊聊前端框架"
            },
            {
              "depth": 2,
              "value": "microsoft/frontend-bootcamp 2天学会前端",
              "heading": "microsoftfrontend-bootcamp-2天学会前端"
            },
            {
              "depth": 3,
              "value": "Day one",
              "heading": "day-one"
            },
            {
              "depth": 3,
              "value": "Day two",
              "heading": "day-two"
            },
            {
              "depth": 3,
              "value": "Bonus content 奖励内容",
              "heading": "bonus-content-奖励内容"
            },
            {
              "depth": 3,
              "value": "Additional resources",
              "heading": "additional-resources"
            },
            {
              "depth": 3,
              "value": "Other projects from the UI Fabric team at Microsoft",
              "heading": "other-projects-from-the-ui-fabric-team-at-microsoft"
            },
            {
              "depth": 2,
              "value": "移动端调试神器  browser-sync",
              "heading": "移动端调试神器--browser-sync"
            },
            {
              "depth": 2,
              "value": "EE 学过的",
              "heading": "ee-学过的"
            },
            {
              "depth": 2,
              "value": "浏览器内核和 JS 引擎",
              "heading": "浏览器内核和-js-引擎"
            },
            {
              "depth": 2,
              "value": "Polyfill 方案",
              "heading": "polyfill-方案"
            },
            {
              "depth": 2,
              "value": "你学 BFF 和 Serverless 了吗",
              "heading": "你学-bff-和-serverless-了吗"
            },
            {
              "depth": 2,
              "value": "工具函数",
              "heading": "工具函数"
            },
            {
              "depth": 3,
              "value": "数组",
              "heading": "数组"
            },
            {
              "depth": 3,
              "value": "函数",
              "heading": "函数"
            },
            {
              "depth": 3,
              "value": "浏览器",
              "heading": "浏览器"
            },
            {
              "depth": 2,
              "value": "Vanilla JS",
              "heading": "vanilla-js"
            },
            {
              "depth": 2,
              "value": "发展",
              "heading": "发展"
            },
            {
              "depth": 2,
              "value": "TC39",
              "heading": "tc39"
            },
            {
              "depth": 2,
              "value": "jinkelajs 一个神奇的框架",
              "heading": "jinkelajs-一个神奇的框架"
            },
            {
              "depth": 2,
              "value": "Svelte 框架",
              "heading": "svelte-框架"
            },
            {
              "depth": 2,
              "value": "es6 新增了什么",
              "heading": "es6-新增了什么"
            }
          ],
          "title": "其他",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "其他"
      },
      {
        "path": "/前端/函数式编程",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__函数式编程.md' */'../../docs/前端/函数式编程.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/函数式编程.md",
          "updatedTime": 1593834026000,
          "title": "函数式编程",
          "slugs": [
            {
              "depth": 2,
              "value": "编程范式",
              "heading": "编程范式"
            },
            {
              "depth": 2,
              "value": "理解几个概念",
              "heading": "理解几个概念"
            },
            {
              "depth": 2,
              "value": "三个特点",
              "heading": "三个特点"
            },
            {
              "depth": 2,
              "value": "使用它",
              "heading": "使用它"
            },
            {
              "depth": 2,
              "value": "值传递 OR 引用传递",
              "heading": "值传递-or-引用传递"
            },
            {
              "depth": 2,
              "value": "箭头函数",
              "heading": "箭头函数"
            }
          ],
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "函数式编程"
      },
      {
        "path": "/前端/小程序",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__小程序.md' */'../../docs/前端/小程序.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/小程序.md",
          "updatedTime": 1593925509000,
          "title": "小程序",
          "slugs": [
            {
              "depth": 2,
              "value": "小程序代码体积优化",
              "heading": "小程序代码体积优化"
            },
            {
              "depth": 2,
              "value": "taro",
              "heading": "taro"
            },
            {
              "depth": 3,
              "value": "How",
              "heading": "how"
            }
          ],
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "小程序"
      },
      {
        "path": "/前端/工程化",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__工程化.md' */'../../docs/前端/工程化.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/工程化.md",
          "updatedTime": 1593834026000,
          "title": "工程化",
          "slugs": [
            {
              "depth": 2,
              "value": "是什么",
              "heading": "是什么"
            },
            {
              "depth": 2,
              "value": "How",
              "heading": "how"
            },
            {
              "depth": 2,
              "value": "工程化的目的",
              "heading": "工程化的目的"
            },
            {
              "depth": 2,
              "value": "包含内容",
              "heading": "包含内容"
            },
            {
              "depth": 2,
              "value": "覆盖的业务场景",
              "heading": "覆盖的业务场景"
            },
            {
              "depth": 2,
              "value": "eslint",
              "heading": "eslint"
            },
            {
              "depth": 2,
              "value": "monorepo 工作流",
              "heading": "monorepo-工作流"
            },
            {
              "depth": 3,
              "value": "lerna",
              "heading": "lerna"
            }
          ],
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "工程化"
      },
      {
        "path": "/前端/性能优化",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__性能优化.md' */'../../docs/前端/性能优化.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/性能优化.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "性能优化",
              "heading": "性能优化"
            },
            {
              "depth": 2,
              "value": "评测点",
              "heading": "评测点"
            },
            {
              "depth": 2,
              "value": "前端工程优化",
              "heading": "前端工程优化"
            },
            {
              "depth": 3,
              "value": "webpack-bundle-analyzer",
              "heading": "webpack-bundle-analyzer"
            },
            {
              "depth": 3,
              "value": "code splitting",
              "heading": "code-splitting"
            },
            {
              "depth": 3,
              "value": "SplitChunksPlugin",
              "heading": "splitchunksplugin"
            },
            {
              "depth": 3,
              "value": "tree shaking",
              "heading": "tree-shaking"
            },
            {
              "depth": 3,
              "value": "编译到 ES6+",
              "heading": "编译到-es6"
            },
            {
              "depth": 3,
              "value": "async defer script",
              "heading": "async-defer-script"
            },
            {
              "depth": 2,
              "value": "性能优化层面",
              "heading": "性能优化层面"
            },
            {
              "depth": 2,
              "value": "DOM 层面",
              "heading": "dom-层面"
            },
            {
              "depth": 2,
              "value": "http 请求层面",
              "heading": "http-请求层面"
            },
            {
              "depth": 2,
              "value": "优化网络",
              "heading": "优化网络"
            },
            {
              "depth": 2,
              "value": "代码层面",
              "heading": "代码层面"
            },
            {
              "depth": 2,
              "value": "渲染层面",
              "heading": "渲染层面"
            },
            {
              "depth": 2,
              "value": "link preload 预加载",
              "heading": "link-preload-预加载"
            },
            {
              "depth": 2,
              "value": "服务端配置",
              "heading": "服务端配置"
            },
            {
              "depth": 3,
              "value": "HTTP 缓存",
              "heading": "http-缓存"
            },
            {
              "depth": 3,
              "value": "HTTPS",
              "heading": "https"
            },
            {
              "depth": 3,
              "value": "HTTP2",
              "heading": "http2"
            },
            {
              "depth": 3,
              "value": "CDN部署",
              "heading": "cdn部署"
            },
            {
              "depth": 2,
              "value": "服务端渲染 SSR",
              "heading": "服务端渲染-ssr"
            },
            {
              "depth": 3,
              "value": "React 服务端渲染",
              "heading": "react-服务端渲染"
            },
            {
              "depth": 4,
              "value": "Vue 服务端渲染",
              "heading": "vue-服务端渲染"
            },
            {
              "depth": 2,
              "value": "预渲染",
              "heading": "预渲染"
            },
            {
              "depth": 3,
              "value": "和 SSR 比",
              "heading": "和-ssr-比"
            },
            {
              "depth": 3,
              "value": "实现方案",
              "heading": "实现方案"
            },
            {
              "depth": 2,
              "value": "前端渲染性能",
              "heading": "前端渲染性能"
            },
            {
              "depth": 3,
              "value": "卡顿侦测",
              "heading": "卡顿侦测"
            },
            {
              "depth": 3,
              "value": "优化方案",
              "heading": "优化方案"
            },
            {
              "depth": 4,
              "value": "减少计算",
              "heading": "减少计算"
            },
            {
              "depth": 4,
              "value": "并行计算",
              "heading": "并行计算"
            },
            {
              "depth": 4,
              "value": "代码优化",
              "heading": "代码优化"
            },
            {
              "depth": 2,
              "value": "原理",
              "heading": "原理"
            },
            {
              "depth": 3,
              "value": "http 的问题",
              "heading": "http-的问题"
            },
            {
              "depth": 3,
              "value": "异步加载第三方内容",
              "heading": "异步加载第三方内容"
            },
            {
              "depth": 3,
              "value": "专栏 + 小册",
              "heading": "专栏--小册"
            },
            {
              "depth": 2,
              "value": "题目",
              "heading": "题目"
            }
          ],
          "title": "性能优化",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "性能优化"
      },
      {
        "path": "/前端/测试",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__测试.md' */'../../docs/前端/测试.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/测试.md",
          "updatedTime": 1593834026000,
          "title": "测试",
          "group": {
            "order": 1
          },
          "slugs": [
            {
              "depth": 2,
              "value": "尤小右言测试",
              "heading": "尤小右言测试"
            },
            {
              "depth": 2,
              "value": "编写可测试的JS",
              "heading": "编写可测试的js"
            },
            {
              "depth": 2,
              "value": "编写可维护的JS",
              "heading": "编写可维护的js"
            },
            {
              "depth": 2,
              "value": "测试分类",
              "heading": "测试分类"
            },
            {
              "depth": 2,
              "value": "前端测试的部分",
              "heading": "前端测试的部分"
            },
            {
              "depth": 2,
              "value": "优先级 - 有选择的写测试",
              "heading": "优先级---有选择的写测试"
            },
            {
              "depth": 2,
              "value": "冒烟、回归、全量",
              "heading": "冒烟、回归、全量"
            },
            {
              "depth": 3,
              "value": "冒烟测试",
              "heading": "冒烟测试"
            },
            {
              "depth": 3,
              "value": "回归测试",
              "heading": "回归测试"
            },
            {
              "depth": 3,
              "value": "全量测试",
              "heading": "全量测试"
            },
            {
              "depth": 2,
              "value": "传统的软件测试与自动化测试",
              "heading": "传统的软件测试与自动化测试"
            },
            {
              "depth": 3,
              "value": "自动化测试",
              "heading": "自动化测试"
            },
            {
              "depth": 2,
              "value": "测试金字塔",
              "heading": "测试金字塔"
            },
            {
              "depth": 3,
              "value": "要点",
              "heading": "要点"
            },
            {
              "depth": 2,
              "value": "集成测试",
              "heading": "集成测试"
            },
            {
              "depth": 2,
              "value": "UI 测试与 E2E 测试",
              "heading": "ui-测试与-e2e-测试"
            },
            {
              "depth": 3,
              "value": "关系",
              "heading": "关系"
            },
            {
              "depth": 3,
              "value": "E2E 测试",
              "heading": "e2e-测试"
            },
            {
              "depth": 4,
              "value": "要点",
              "heading": "要点-1"
            },
            {
              "depth": 4,
              "value": "重要的用户旅程",
              "heading": "重要的用户旅程"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            }
          ],
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "测试"
      },
      {
        "path": "/前端/面向对象",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__前端__面向对象.md' */'../../docs/前端/面向对象.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/前端/面向对象.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "面向对象",
              "heading": "面向对象"
            },
            {
              "depth": 2,
              "value": "理解对象",
              "heading": "理解对象"
            },
            {
              "depth": 2,
              "value": "属性类型",
              "heading": "属性类型"
            },
            {
              "depth": 3,
              "value": "数据属性",
              "heading": "数据属性"
            },
            {
              "depth": 3,
              "value": "访问器属性",
              "heading": "访问器属性"
            },
            {
              "depth": 2,
              "value": "访问原型",
              "heading": "访问原型"
            },
            {
              "depth": 2,
              "value": "对象相关 API",
              "heading": "对象相关-api"
            },
            {
              "depth": 2,
              "value": "创建对象",
              "heading": "创建对象"
            },
            {
              "depth": 2,
              "value": "理解原型链的查找",
              "heading": "理解原型链的查找"
            },
            {
              "depth": 2,
              "value": "继承",
              "heading": "继承"
            },
            {
              "depth": 3,
              "value": "原型式继承",
              "heading": "原型式继承"
            },
            {
              "depth": 3,
              "value": "寄生组合式继承",
              "heading": "寄生组合式继承"
            },
            {
              "depth": 2,
              "value": "prototype 的理解",
              "heading": "prototype-的理解"
            },
            {
              "depth": 2,
              "value": "new 的过程",
              "heading": "new-的过程"
            },
            {
              "depth": 2,
              "value": "原生插件",
              "heading": "原生插件"
            }
          ],
          "title": "面向对象",
          "nav": {
            "path": "/前端",
            "title": "前端"
          }
        },
        "title": "面向对象"
      },
      {
        "path": "/后端/deno",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__后端__deno.md' */'../../docs/后端/deno.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/后端/deno.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "deno",
              "heading": "deno"
            },
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "改进",
              "heading": "改进"
            }
          ],
          "title": "deno",
          "nav": {
            "path": "/后端",
            "title": "后端"
          }
        },
        "title": "deno"
      },
      {
        "path": "/后端/docker",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__后端__docker.md' */'../../docs/后端/docker.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/后端/docker.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Docker",
              "heading": "docker"
            },
            {
              "depth": 2,
              "value": "安装 docker",
              "heading": "安装-docker"
            },
            {
              "depth": 2,
              "value": "镜像",
              "heading": "镜像"
            },
            {
              "depth": 3,
              "value": "构建镜像",
              "heading": "构建镜像"
            },
            {
              "depth": 3,
              "value": "发布镜像",
              "heading": "发布镜像"
            },
            {
              "depth": 3,
              "value": "镜像启动",
              "heading": "镜像启动"
            },
            {
              "depth": 3,
              "value": "更新镜像",
              "heading": "更新镜像"
            },
            {
              "depth": 3,
              "value": "删除镜像",
              "heading": "删除镜像"
            },
            {
              "depth": 3,
              "value": "拉取镜像",
              "heading": "拉取镜像"
            },
            {
              "depth": 2,
              "value": "容器",
              "heading": "容器"
            },
            {
              "depth": 3,
              "value": "生命周期",
              "heading": "生命周期"
            },
            {
              "depth": 3,
              "value": "启动",
              "heading": "启动"
            },
            {
              "depth": 3,
              "value": "管理",
              "heading": "管理"
            },
            {
              "depth": 3,
              "value": "进入",
              "heading": "进入"
            },
            {
              "depth": 3,
              "value": "容器互联",
              "heading": "容器互联"
            },
            {
              "depth": 3,
              "value": "暴露端口",
              "heading": "暴露端口"
            },
            {
              "depth": 3,
              "value": "端口映射",
              "heading": "端口映射"
            },
            {
              "depth": 2,
              "value": "数据持久化",
              "heading": "数据持久化"
            },
            {
              "depth": 4,
              "value": "容器数据",
              "heading": "容器数据"
            },
            {
              "depth": 4,
              "value": "挂载宿主环境文件",
              "heading": "挂载宿主环境文件"
            },
            {
              "depth": 4,
              "value": "Volume",
              "heading": "volume"
            },
            {
              "depth": 2,
              "value": "保存和共享镜像",
              "heading": "保存和共享镜像"
            },
            {
              "depth": 2,
              "value": "Dockerfile",
              "heading": "dockerfile"
            },
            {
              "depth": 3,
              "value": "例子",
              "heading": "例子"
            },
            {
              "depth": 3,
              "value": "常用指令",
              "heading": "常用指令"
            },
            {
              "depth": 4,
              "value": "FROM",
              "heading": "from"
            },
            {
              "depth": 4,
              "value": "RUN",
              "heading": "run"
            },
            {
              "depth": 4,
              "value": "ENTRYPOINT 和 CMD",
              "heading": "entrypoint-和-cmd"
            },
            {
              "depth": 4,
              "value": "EXPOSE",
              "heading": "expose"
            },
            {
              "depth": 4,
              "value": "VOLUME",
              "heading": "volume-1"
            },
            {
              "depth": 4,
              "value": "COPY 和 ADD",
              "heading": "copy-和-add"
            },
            {
              "depth": 3,
              "value": "实用技巧",
              "heading": "实用技巧"
            },
            {
              "depth": 4,
              "value": "构建时变量",
              "heading": "构建时变量"
            },
            {
              "depth": 4,
              "value": "环境变量",
              "heading": "环境变量"
            },
            {
              "depth": 4,
              "value": "构建缓存",
              "heading": "构建缓存"
            },
            {
              "depth": 4,
              "value": ".dockerignore",
              "heading": "dockerignore"
            },
            {
              "depth": 2,
              "value": "Docker Compose",
              "heading": "docker-compose"
            },
            {
              "depth": 3,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 3,
              "value": "编写配置",
              "heading": "编写配置"
            },
            {
              "depth": 3,
              "value": "启动停止",
              "heading": "启动停止"
            },
            {
              "depth": 3,
              "value": "常用配置",
              "heading": "常用配置"
            },
            {
              "depth": 4,
              "value": "依赖声明",
              "heading": "依赖声明"
            },
            {
              "depth": 4,
              "value": "文件挂载",
              "heading": "文件挂载"
            },
            {
              "depth": 4,
              "value": "使用数据卷",
              "heading": "使用数据卷"
            },
            {
              "depth": 4,
              "value": "配置网络",
              "heading": "配置网络"
            },
            {
              "depth": 4,
              "value": "端口映射",
              "heading": "端口映射-1"
            },
            {
              "depth": 4,
              "value": "多个服务共享卷",
              "heading": "多个服务共享卷"
            },
            {
              "depth": 2,
              "value": "k8s",
              "heading": "k8s"
            }
          ],
          "title": "Docker",
          "nav": {
            "path": "/后端",
            "title": "后端"
          }
        },
        "title": "Docker"
      },
      {
        "path": "/后端/express",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__后端__express.md' */'../../docs/后端/express.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/后端/express.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Express",
              "heading": "express"
            },
            {
              "depth": 2,
              "value": "Express 周边的中间件",
              "heading": "express-周边的中间件"
            },
            {
              "depth": 2,
              "value": "路由",
              "heading": "路由"
            },
            {
              "depth": 2,
              "value": "handlerbars模板引擎",
              "heading": "handlerbars模板引擎"
            },
            {
              "depth": 2,
              "value": "REST API",
              "heading": "rest-api"
            },
            {
              "depth": 2,
              "value": "静态内容",
              "heading": "静态内容"
            },
            {
              "depth": 2,
              "value": "邮件服务",
              "heading": "邮件服务"
            },
            {
              "depth": 2,
              "value": "安全",
              "heading": "安全"
            },
            {
              "depth": 2,
              "value": "生产环境部署",
              "heading": "生产环境部署"
            },
            {
              "depth": 2,
              "value": "调试",
              "heading": "调试"
            },
            {
              "depth": 3,
              "value": "调试工具",
              "heading": "调试工具"
            },
            {
              "depth": 2,
              "value": "部署",
              "heading": "部署"
            },
            {
              "depth": 2,
              "value": "测试",
              "heading": "测试"
            }
          ],
          "title": "Express",
          "nav": {
            "path": "/后端",
            "title": "后端"
          }
        },
        "title": "Express"
      },
      {
        "path": "/后端/nginx",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__后端__nginx.md' */'../../docs/后端/nginx.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/后端/nginx.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "Nginx",
              "heading": "nginx"
            },
            {
              "depth": 2,
              "value": "配置文件",
              "heading": "配置文件"
            },
            {
              "depth": 3,
              "value": "配置文件的结构",
              "heading": "配置文件的结构"
            },
            {
              "depth": 2,
              "value": "内置变量",
              "heading": "内置变量"
            },
            {
              "depth": 2,
              "value": "模板",
              "heading": "模板"
            },
            {
              "depth": 3,
              "value": "静态文件",
              "heading": "静态文件"
            },
            {
              "depth": 3,
              "value": "反向代理",
              "heading": "反向代理"
            },
            {
              "depth": 2,
              "value": "可视化配置",
              "heading": "可视化配置"
            },
            {
              "depth": 2,
              "value": "服务",
              "heading": "服务"
            },
            {
              "depth": 2,
              "value": "动态匹配",
              "heading": "动态匹配"
            },
            {
              "depth": 3,
              "value": "根据ip访问控制",
              "heading": "根据ip访问控制"
            },
            {
              "depth": 3,
              "value": "适配 PC 或 Mobile",
              "heading": "适配-pc-或-mobile"
            },
            {
              "depth": 2,
              "value": "location",
              "heading": "location"
            },
            {
              "depth": 3,
              "value": "匹配规则",
              "heading": "匹配规则"
            },
            {
              "depth": 3,
              "value": "优先级",
              "heading": "优先级"
            },
            {
              "depth": 2,
              "value": "map",
              "heading": "map"
            },
            {
              "depth": 3,
              "value": "最佳实践",
              "heading": "最佳实践"
            },
            {
              "depth": 2,
              "value": "实践",
              "heading": "实践"
            },
            {
              "depth": 3,
              "value": "add_header",
              "heading": "add_header"
            },
            {
              "depth": 3,
              "value": "referer",
              "heading": "referer"
            },
            {
              "depth": 3,
              "value": "realip 真实用户 ip",
              "heading": "realip-真实用户-ip"
            },
            {
              "depth": 3,
              "value": "limit_conn 与 limit_req",
              "heading": "limit_conn-与-limit_req"
            },
            {
              "depth": 3,
              "value": "acccess 控制 IP 访问",
              "heading": "acccess-控制-ip-访问"
            },
            {
              "depth": 3,
              "value": "server_name_in_redirect 重定向",
              "heading": "server_name_in_redirect-重定向"
            },
            {
              "depth": 3,
              "value": "index 和 autoindex",
              "heading": "index-和-autoindex"
            },
            {
              "depth": 3,
              "value": "log 打印日志",
              "heading": "log-打印日志"
            },
            {
              "depth": 3,
              "value": "keepalive 复用 TCP 连接",
              "heading": "keepalive-复用-tcp-连接"
            },
            {
              "depth": 3,
              "value": "proxy_pass 反向代理解决跨域",
              "heading": "proxy_pass-反向代理解决跨域"
            },
            {
              "depth": 3,
              "value": "静态资源服务器",
              "heading": "静态资源服务器"
            },
            {
              "depth": 3,
              "value": "缓存指令",
              "heading": "缓存指令"
            },
            {
              "depth": 3,
              "value": "HTTP2",
              "heading": "http2"
            },
            {
              "depth": 3,
              "value": "跳转到 H5",
              "heading": "跳转到-h5"
            },
            {
              "depth": 3,
              "value": "开启 gzip",
              "heading": "开启-gzip"
            },
            {
              "depth": 3,
              "value": "负载均衡",
              "heading": "负载均衡"
            },
            {
              "depth": 4,
              "value": "一个例子",
              "heading": "一个例子"
            },
            {
              "depth": 2,
              "value": "参考",
              "heading": "参考"
            }
          ],
          "title": "Nginx",
          "nav": {
            "path": "/后端",
            "title": "后端"
          }
        },
        "title": "Nginx"
      },
      {
        "path": "/后端/nodejs",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__后端__nodejs.md' */'../../docs/后端/nodejs.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/后端/nodejs.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Node.js",
              "heading": "nodejs"
            },
            {
              "depth": 2,
              "value": "安装nodejs",
              "heading": "安装nodejs"
            },
            {
              "depth": 2,
              "value": "核心模块",
              "heading": "核心模块"
            },
            {
              "depth": 3,
              "value": "1 process对象",
              "heading": "1-process对象"
            },
            {
              "depth": 3,
              "value": "2 global对象",
              "heading": "2-global对象"
            },
            {
              "depth": 3,
              "value": "3 path",
              "heading": "3-path"
            },
            {
              "depth": 3,
              "value": "4 EventEmitter",
              "heading": "4-eventemitter"
            },
            {
              "depth": 3,
              "value": "5 buffer",
              "heading": "5-buffer"
            },
            {
              "depth": 4,
              "value": "toString",
              "heading": "tostring"
            },
            {
              "depth": 4,
              "value": "data URI",
              "heading": "data-uri"
            },
            {
              "depth": 3,
              "value": "6 utils 实用工具",
              "heading": "6-utils-实用工具"
            },
            {
              "depth": 4,
              "value": "promisify",
              "heading": "promisify"
            },
            {
              "depth": 3,
              "value": "7 http",
              "heading": "7-http"
            },
            {
              "depth": 3,
              "value": "8 stream 流",
              "heading": "8-stream-流"
            },
            {
              "depth": 4,
              "value": "理解流",
              "heading": "理解流"
            },
            {
              "depth": 3,
              "value": "9 child_process 子进程",
              "heading": "9-child_process-子进程"
            },
            {
              "depth": 4,
              "value": "exec",
              "heading": "exec"
            },
            {
              "depth": 4,
              "value": "execFile",
              "heading": "execfile"
            },
            {
              "depth": 4,
              "value": "fork",
              "heading": "fork"
            },
            {
              "depth": 4,
              "value": "spawn",
              "heading": "spawn"
            },
            {
              "depth": 3,
              "value": "10 url",
              "heading": "10-url"
            },
            {
              "depth": 3,
              "value": "11 querysting",
              "heading": "11-querysting"
            },
            {
              "depth": 3,
              "value": "12 assert",
              "heading": "12-assert"
            },
            {
              "depth": 3,
              "value": "13 crypto",
              "heading": "13-crypto"
            },
            {
              "depth": 3,
              "value": "14 events",
              "heading": "14-events"
            },
            {
              "depth": 3,
              "value": "15 fs 文件系统",
              "heading": "15-fs-文件系统"
            },
            {
              "depth": 3,
              "value": "16 readline",
              "heading": "16-readline"
            },
            {
              "depth": 3,
              "value": "网络",
              "heading": "网络"
            },
            {
              "depth": 2,
              "value": "全局变量",
              "heading": "全局变量"
            },
            {
              "depth": 3,
              "value": "require",
              "heading": "require"
            },
            {
              "depth": 3,
              "value": "module.export 和 exports",
              "heading": "moduleexport-和-exports"
            },
            {
              "depth": 3,
              "value": "路径变量 __dirname",
              "heading": "路径变量-__dirname"
            },
            {
              "depth": 3,
              "value": "console",
              "heading": "console"
            },
            {
              "depth": 3,
              "value": "process",
              "heading": "process"
            },
            {
              "depth": 2,
              "value": "学习",
              "heading": "学习"
            },
            {
              "depth": 2,
              "value": "Node.js 的意义",
              "heading": "nodejs-的意义"
            },
            {
              "depth": 2,
              "value": "语义化版本规范semver",
              "heading": "语义化版本规范semver"
            },
            {
              "depth": 2,
              "value": "cli",
              "heading": "cli"
            },
            {
              "depth": 2,
              "value": "持久化",
              "heading": "持久化"
            },
            {
              "depth": 2,
              "value": "测试",
              "heading": "测试"
            },
            {
              "depth": 3,
              "value": "单元测试",
              "heading": "单元测试"
            },
            {
              "depth": 3,
              "value": "断言库",
              "heading": "断言库"
            },
            {
              "depth": 3,
              "value": "覆盖率 coverage",
              "heading": "覆盖率-coverage"
            },
            {
              "depth": 3,
              "value": "验收测试",
              "heading": "验收测试"
            },
            {
              "depth": 2,
              "value": "npm 命令",
              "heading": "npm-命令"
            },
            {
              "depth": 2,
              "value": "部署平台",
              "heading": "部署平台"
            },
            {
              "depth": 2,
              "value": "生产环境部署",
              "heading": "生产环境部署"
            },
            {
              "depth": 2,
              "value": "异步编程",
              "heading": "异步编程"
            },
            {
              "depth": 2,
              "value": "流程控制",
              "heading": "流程控制"
            },
            {
              "depth": 2,
              "value": "子进程",
              "heading": "子进程"
            },
            {
              "depth": 2,
              "value": "node monolithic 单体架构",
              "heading": "node-monolithic-单体架构"
            },
            {
              "depth": 3,
              "value": "后端服务要满足2个特性",
              "heading": "后端服务要满足2个特性"
            },
            {
              "depth": 3,
              "value": "高并发下的多进程、负载均衡",
              "heading": "高并发下的多进程、负载均衡"
            },
            {
              "depth": 3,
              "value": "多进程的弊端",
              "heading": "多进程的弊端"
            },
            {
              "depth": 3,
              "value": "平滑不停机重启",
              "heading": "平滑不停机重启"
            },
            {
              "depth": 2,
              "value": "error first callback",
              "heading": "error-first-callback"
            },
            {
              "depth": 2,
              "value": "什么叫做有服务端开发的经验？",
              "heading": "什么叫做有服务端开发的经验？"
            },
            {
              "depth": 2,
              "value": "分布式",
              "heading": "分布式"
            },
            {
              "depth": 2,
              "value": "异常处理",
              "heading": "异常处理"
            },
            {
              "depth": 3,
              "value": "处理未捕获的异常",
              "heading": "处理未捕获的异常"
            },
            {
              "depth": 2,
              "value": "上线实践",
              "heading": "上线实践"
            },
            {
              "depth": 3,
              "value": "使用 winston 记录日志",
              "heading": "使用-winston-记录日志"
            },
            {
              "depth": 3,
              "value": "使用 nginx 反向代理",
              "heading": "使用-nginx-反向代理"
            },
            {
              "depth": 3,
              "value": "检测有漏洞的依赖项",
              "heading": "检测有漏洞的依赖项"
            },
            {
              "depth": 2,
              "value": "性能优化",
              "heading": "性能优化"
            },
            {
              "depth": 3,
              "value": "V8 内存管理与垃圾回收",
              "heading": "v8-内存管理与垃圾回收"
            },
            {
              "depth": 3,
              "value": "分析 GC 日志",
              "heading": "分析-gc-日志"
            },
            {
              "depth": 3,
              "value": "使用 headdump 堆快照",
              "heading": "使用-headdump-堆快照"
            },
            {
              "depth": 3,
              "value": "benchmark",
              "heading": "benchmark"
            },
            {
              "depth": 3,
              "value": "使用 prof 进行性能分析",
              "heading": "使用-prof-进行性能分析"
            },
            {
              "depth": 2,
              "value": "应用安全清单",
              "heading": "应用安全清单"
            },
            {
              "depth": 3,
              "value": "转义 HTML、JS 和 CSS 输出",
              "heading": "转义-html、js-和-css-输出"
            },
            {
              "depth": 3,
              "value": "验证传入的 JSON schemas",
              "heading": "验证传入的-json-schemas"
            },
            {
              "depth": 3,
              "value": "限制每个用户允许的登录请求",
              "heading": "限制每个用户允许的登录请求"
            },
            {
              "depth": 3,
              "value": "使用非 root 用户运行 Node.js",
              "heading": "使用非-root-用户运行-nodejs"
            },
            {
              "depth": 3,
              "value": "使用反向代理或中间件限制负载大小",
              "heading": "使用反向代理或中间件限制负载大小"
            },
            {
              "depth": 3,
              "value": "在沙箱中运行不安全代码",
              "heading": "在沙箱中运行不安全代码"
            },
            {
              "depth": 3,
              "value": "csurf 防止 CSRF",
              "heading": "csurf-防止-csrf"
            },
            {
              "depth": 2,
              "value": "综合应用",
              "heading": "综合应用"
            },
            {
              "depth": 3,
              "value": "Node.js REST API",
              "heading": "nodejs-rest-api"
            },
            {
              "depth": 3,
              "value": "jwt",
              "heading": "jwt"
            },
            {
              "depth": 3,
              "value": "Web API 设计",
              "heading": "web-api-设计"
            },
            {
              "depth": 3,
              "value": "node-schedule 使用",
              "heading": "node-schedule-使用"
            },
            {
              "depth": 3,
              "value": "生成 excel",
              "heading": "生成-excel"
            },
            {
              "depth": 3,
              "value": "fake rest api",
              "heading": "fake-rest-api"
            },
            {
              "depth": 2,
              "value": "Egg.js 插件",
              "heading": "eggjs-插件"
            }
          ],
          "title": "Node.js",
          "nav": {
            "path": "/后端",
            "title": "后端"
          }
        },
        "title": "Node.js"
      },
      {
        "path": "/后端/其他",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__后端__其他.md' */'../../docs/后端/其他.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/后端/其他.md",
          "updatedTime": 1593834026000,
          "group": {
            "order": 2
          },
          "slugs": [
            {
              "depth": 1,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 2,
              "value": "jsonrpc",
              "heading": "jsonrpc"
            },
            {
              "depth": 3,
              "value": "rpc",
              "heading": "rpc"
            },
            {
              "depth": 3,
              "value": "json-rpc",
              "heading": "json-rpc"
            },
            {
              "depth": 2,
              "value": "api-gateway",
              "heading": "api-gateway"
            },
            {
              "depth": 2,
              "value": "mysql 启用远程连接",
              "heading": "mysql-启用远程连接"
            },
            {
              "depth": 2,
              "value": "devops",
              "heading": "devops"
            },
            {
              "depth": 2,
              "value": "写一个 cli",
              "heading": "写一个-cli"
            },
            {
              "depth": 2,
              "value": "前端转后端基础知识",
              "heading": "前端转后端基础知识"
            },
            {
              "depth": 2,
              "value": "极客时间 Node.js 开发实战",
              "heading": "极客时间-nodejs-开发实战"
            }
          ],
          "title": "其他",
          "nav": {
            "path": "/后端",
            "title": "后端"
          }
        },
        "title": "其他"
      },
      {
        "path": "/库/库推荐",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__库__库推荐.md' */'../../docs/库/库推荐.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/库/库推荐.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "库",
              "heading": "库"
            },
            {
              "depth": 2,
              "value": "异步组织",
              "heading": "异步组织"
            },
            {
              "depth": 2,
              "value": "UI插件",
              "heading": "ui插件"
            },
            {
              "depth": 2,
              "value": "scroll插件",
              "heading": "scroll插件"
            },
            {
              "depth": 2,
              "value": "全屏滚动",
              "heading": "全屏滚动"
            },
            {
              "depth": 2,
              "value": "可视化",
              "heading": "可视化"
            },
            {
              "depth": 2,
              "value": "动画",
              "heading": "动画"
            },
            {
              "depth": 2,
              "value": "chalk",
              "heading": "chalk"
            },
            {
              "depth": 2,
              "value": "yargs",
              "heading": "yargs"
            },
            {
              "depth": 2,
              "value": "concurrently",
              "heading": "concurrently"
            },
            {
              "depth": 2,
              "value": "prompts",
              "heading": "prompts"
            },
            {
              "depth": 2,
              "value": "node-images",
              "heading": "node-images"
            },
            {
              "depth": 2,
              "value": "tree-node-cli",
              "heading": "tree-node-cli"
            },
            {
              "depth": 2,
              "value": "number 精度",
              "heading": "number-精度"
            },
            {
              "depth": 2,
              "value": "弹层",
              "heading": "弹层"
            },
            {
              "depth": 2,
              "value": "动画库",
              "heading": "动画库"
            },
            {
              "depth": 2,
              "value": "飞冰 - 社区组件",
              "heading": "飞冰---社区组件"
            },
            {
              "depth": 2,
              "value": "awesome-react-cn",
              "heading": "awesome-react-cn"
            },
            {
              "depth": 2,
              "value": "数据持久化存储",
              "heading": "数据持久化存储"
            }
          ],
          "title": "库",
          "nav": {
            "path": "/库",
            "title": "库"
          }
        },
        "title": "库"
      },
      {
        "path": "/算法/code-wars",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__算法__CodeWars.md' */'../../docs/算法/CodeWars.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/算法/CodeWars.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "CodeWars",
              "heading": "codewars"
            },
            {
              "depth": 2,
              "value": "kata",
              "heading": "kata"
            },
            {
              "depth": 2,
              "value": "kyu",
              "heading": "kyu"
            },
            {
              "depth": 2,
              "value": "level",
              "heading": "level"
            },
            {
              "depth": 2,
              "value": "和 LC 比",
              "heading": "和-lc-比"
            },
            {
              "depth": 2,
              "value": "位运算",
              "heading": "位运算"
            },
            {
              "depth": 3,
              "value": "不用加减乘除做加法.js",
              "heading": "不用加减乘除做加法js"
            },
            {
              "depth": 3,
              "value": "二进制中1的个数.js",
              "heading": "二进制中1的个数js"
            },
            {
              "depth": 3,
              "value": "数组中只出现一次的数字.js",
              "heading": "数组中只出现一次的数字js"
            },
            {
              "depth": 2,
              "value": "动态规划",
              "heading": "动态规划"
            },
            {
              "depth": 3,
              "value": "丑数.js",
              "heading": "丑数js"
            },
            {
              "depth": 3,
              "value": "变态跳台阶.js",
              "heading": "变态跳台阶js"
            },
            {
              "depth": 3,
              "value": "斐波那契数列.js",
              "heading": "斐波那契数列js"
            },
            {
              "depth": 3,
              "value": "跳台阶.js",
              "heading": "跳台阶js"
            },
            {
              "depth": 2,
              "value": "哈希",
              "heading": "哈希"
            },
            {
              "depth": 3,
              "value": "字符流中第一个不重复的字符.js",
              "heading": "字符流中第一个不重复的字符js"
            },
            {
              "depth": 3,
              "value": "找出高频数字.js",
              "heading": "找出高频数字js"
            },
            {
              "depth": 3,
              "value": "第一个只出现一次的字符位置.js",
              "heading": "第一个只出现一次的字符位置js"
            },
            {
              "depth": 2,
              "value": "回溯",
              "heading": "回溯"
            },
            {
              "depth": 3,
              "value": "字符串的排列.js",
              "heading": "字符串的排列js"
            },
            {
              "depth": 3,
              "value": "把数组排成最小的数.js",
              "heading": "把数组排成最小的数js"
            },
            {
              "depth": 2,
              "value": "堆",
              "heading": "堆"
            },
            {
              "depth": 3,
              "value": "数据流中的中位数.js",
              "heading": "数据流中的中位数js"
            },
            {
              "depth": 3,
              "value": "最小的K个数.js",
              "heading": "最小的k个数js"
            },
            {
              "depth": 3,
              "value": "滑动窗口的最大值.js",
              "heading": "滑动窗口的最大值js"
            },
            {
              "depth": 2,
              "value": "排序",
              "heading": "排序"
            },
            {
              "depth": 3,
              "value": "冒泡排序.js",
              "heading": "冒泡排序js"
            },
            {
              "depth": 3,
              "value": "合并排序.js",
              "heading": "合并排序js"
            },
            {
              "depth": 3,
              "value": "快速排序.js",
              "heading": "快速排序js"
            },
            {
              "depth": 3,
              "value": "插入排序.js",
              "heading": "插入排序js"
            },
            {
              "depth": 3,
              "value": "选择排序.js",
              "heading": "选择排序js"
            },
            {
              "depth": 2,
              "value": "数学",
              "heading": "数学"
            },
            {
              "depth": 3,
              "value": "延长的周末.js",
              "heading": "延长的周末js"
            },
            {
              "depth": 3,
              "value": "父亲年龄是儿子两倍.js",
              "heading": "父亲年龄是儿子两倍js"
            },
            {
              "depth": 3,
              "value": "环形数字.js",
              "heading": "环形数字js"
            },
            {
              "depth": 3,
              "value": "等概率随机函数.js",
              "heading": "等概率随机函数js"
            },
            {
              "depth": 2,
              "value": "数组",
              "heading": "数组"
            },
            {
              "depth": 3,
              "value": "Array.diff.js",
              "heading": "arraydiffjs"
            },
            {
              "depth": 3,
              "value": "n个数之和.js",
              "heading": "n个数之和js"
            },
            {
              "depth": 3,
              "value": "n个随机不重复的整数.js",
              "heading": "n个随机不重复的整数js"
            },
            {
              "depth": 3,
              "value": "两个数组为子集关系.js",
              "heading": "两个数组为子集关系js"
            },
            {
              "depth": 3,
              "value": "二维数组的查找.js",
              "heading": "二维数组的查找js"
            },
            {
              "depth": 3,
              "value": "产生间隔数组.js",
              "heading": "产生间隔数组js"
            },
            {
              "depth": 3,
              "value": "大数求和.js",
              "heading": "大数求和js"
            },
            {
              "depth": 3,
              "value": "找到唯一不同的数字.js",
              "heading": "找到唯一不同的数字js"
            },
            {
              "depth": 3,
              "value": "把数组排成最小的数.js",
              "heading": "把数组排成最小的数js-1"
            },
            {
              "depth": 3,
              "value": "排名位置.js",
              "heading": "排名位置js"
            },
            {
              "depth": 3,
              "value": "数组中重复的数字.js",
              "heading": "数组中重复的数字js"
            },
            {
              "depth": 3,
              "value": "构建乘积数组.js",
              "heading": "构建乘积数组js"
            },
            {
              "depth": 3,
              "value": "树状结构转换.js",
              "heading": "树状结构转换js"
            },
            {
              "depth": 2,
              "value": "查找",
              "heading": "查找"
            },
            {
              "depth": 3,
              "value": "数字在排序数组中出现的次数.js",
              "heading": "数字在排序数组中出现的次数js"
            },
            {
              "depth": 3,
              "value": "旋转数组的最小数字.js",
              "heading": "旋转数组的最小数字js"
            },
            {
              "depth": 2,
              "value": "栈",
              "heading": "栈"
            },
            {
              "depth": 3,
              "value": "包含min函数的栈.js",
              "heading": "包含min函数的栈js"
            },
            {
              "depth": 3,
              "value": "栈的压入弹出序列.js",
              "heading": "栈的压入弹出序列js"
            },
            {
              "depth": 2,
              "value": "正则",
              "heading": "正则"
            },
            {
              "depth": 3,
              "value": "表示数值的字符串.js",
              "heading": "表示数值的字符串js"
            },
            {
              "depth": 2,
              "value": "递归",
              "heading": "递归"
            },
            {
              "depth": 3,
              "value": "字符串所有组合.js",
              "heading": "字符串所有组合js"
            },
            {
              "depth": 3,
              "value": "根据ID查找元素.js",
              "heading": "根据id查找元素js"
            },
            {
              "depth": 2,
              "value": "链表",
              "heading": "链表"
            },
            {
              "depth": 3,
              "value": "两个链表的第一个公共结点.js",
              "heading": "两个链表的第一个公共结点js"
            },
            {
              "depth": 3,
              "value": "从头到尾打印链表.js",
              "heading": "从头到尾打印链表js"
            },
            {
              "depth": 3,
              "value": "链表indexOf.js",
              "heading": "链表indexofjs"
            },
            {
              "depth": 2,
              "value": "tags",
              "heading": "tags"
            }
          ],
          "title": "CodeWars",
          "nav": {
            "path": "/算法",
            "title": "算法"
          }
        },
        "title": "CodeWars"
      },
      {
        "path": "/算法/leet-code",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__算法__LeetCode.md' */'../../docs/算法/LeetCode.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/算法/LeetCode.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "LeetCode",
              "heading": "leetcode"
            },
            {
              "depth": 2,
              "value": "LeetCode 探索",
              "heading": "leetcode-探索"
            },
            {
              "depth": 3,
              "value": "链表",
              "heading": "链表"
            },
            {
              "depth": 3,
              "value": "主题要点",
              "heading": "主题要点"
            },
            {
              "depth": 3,
              "value": "力扣高频 - 算法面试题汇总",
              "heading": "力扣高频---算法面试题汇总"
            },
            {
              "depth": 3,
              "value": "字节跳动",
              "heading": "字节跳动"
            },
            {
              "depth": 3,
              "value": "腾讯",
              "heading": "腾讯"
            },
            {
              "depth": 2,
              "value": "LeetCode 脑图",
              "heading": "leetcode-脑图"
            },
            {
              "depth": 2,
              "value": "如何通过 LeetCode 提高自我",
              "heading": "如何通过-leetcode-提高自我"
            },
            {
              "depth": 2,
              "value": "五道算法题题入职 LC(天哥)",
              "heading": "五道算法题题入职-lc天哥"
            },
            {
              "depth": 2,
              "value": "热门题",
              "heading": "热门题"
            },
            {
              "depth": 2,
              "value": "LeetCode 经典题目分类",
              "heading": "leetcode-经典题目分类"
            },
            {
              "depth": 3,
              "value": "数组和链表",
              "heading": "数组和链表"
            },
            {
              "depth": 3,
              "value": "栈、队列和递归",
              "heading": "栈、队列和递归"
            },
            {
              "depth": 3,
              "value": "排序和二分查找",
              "heading": "排序和二分查找"
            },
            {
              "depth": 3,
              "value": "散列表和字符串",
              "heading": "散列表和字符串"
            },
            {
              "depth": 3,
              "value": "二叉树和堆",
              "heading": "二叉树和堆"
            },
            {
              "depth": 3,
              "value": "贪心、分治、回溯和动态规划",
              "heading": "贪心、分治、回溯和动态规划"
            },
            {
              "depth": 2,
              "value": "数组 array",
              "heading": "数组-array"
            },
            {
              "depth": 3,
              "value": "189.rotate-array.js",
              "heading": "189rotate-arrayjs"
            },
            {
              "depth": 3,
              "value": "238.product-of-array-except-self.js",
              "heading": "238product-of-array-except-selfjs"
            },
            {
              "depth": 3,
              "value": "41.first-missing-positive.js",
              "heading": "41first-missing-positivejs"
            },
            {
              "depth": 2,
              "value": "回溯 backtracking",
              "heading": "回溯-backtracking"
            },
            {
              "depth": 3,
              "value": "17.letter-combinations-of-a-phone-number.js",
              "heading": "17letter-combinations-of-a-phone-numberjs"
            },
            {
              "depth": 3,
              "value": "22.generate-parentheses.js",
              "heading": "22generate-parenthesesjs"
            },
            {
              "depth": 3,
              "value": "46.permutations.js",
              "heading": "46permutationsjs"
            },
            {
              "depth": 2,
              "value": "二分查找 binary-search",
              "heading": "二分查找-binary-search"
            },
            {
              "depth": 3,
              "value": "69.sqrtx.js",
              "heading": "69sqrtxjs"
            },
            {
              "depth": 2,
              "value": "位操作 bit-manipulation",
              "heading": "位操作-bit-manipulation"
            },
            {
              "depth": 3,
              "value": "136.single-number.js",
              "heading": "136single-numberjs"
            },
            {
              "depth": 2,
              "value": "深度优先搜索 depth-first-search",
              "heading": "深度优先搜索-depth-first-search"
            },
            {
              "depth": 3,
              "value": "104.maximum-depth-of-binary-tree.js",
              "heading": "104maximum-depth-of-binary-treejs"
            },
            {
              "depth": 3,
              "value": "111.minimum-depth-of-binary-tree.js",
              "heading": "111minimum-depth-of-binary-treejs"
            },
            {
              "depth": 3,
              "value": "112.path-sum.js",
              "heading": "112path-sumjs"
            },
            {
              "depth": 2,
              "value": "分治 divide-and-conquer",
              "heading": "分治-divide-and-conquer"
            },
            {
              "depth": 3,
              "value": "148.sort-list.js",
              "heading": "148sort-listjs"
            },
            {
              "depth": 3,
              "value": "215.kth-largest-element-in-an-array.js",
              "heading": "215kth-largest-element-in-an-arrayjs"
            },
            {
              "depth": 3,
              "value": "23.merge-k-sorted-lists.js",
              "heading": "23merge-k-sorted-listsjs"
            },
            {
              "depth": 2,
              "value": "动态规划 dynamic-programming",
              "heading": "动态规划-dynamic-programming"
            },
            {
              "depth": 3,
              "value": "120.triangle.js 三角形",
              "heading": "120trianglejs-三角形"
            },
            {
              "depth": 3,
              "value": "121.best-time-to-buy-and-sell-stock.js",
              "heading": "121best-time-to-buy-and-sell-stockjs"
            },
            {
              "depth": 3,
              "value": "152.maximum-product-subarray.js",
              "heading": "152maximum-product-subarrayjs"
            },
            {
              "depth": 3,
              "value": "32.longest-valid-parentheses.js 最长有效的括号",
              "heading": "32longest-valid-parenthesesjs-最长有效的括号"
            },
            {
              "depth": 2,
              "value": "greedy 贪婪",
              "heading": "greedy-贪婪"
            },
            {
              "depth": 3,
              "value": "392.is-subsequence.js",
              "heading": "392is-subsequencejs"
            },
            {
              "depth": 2,
              "value": "哈希表 hash-table",
              "heading": "哈希表-hash-table"
            },
            {
              "depth": 3,
              "value": "1.two-sum.js",
              "heading": "1two-sumjs"
            },
            {
              "depth": 3,
              "value": "169.majority-element.js",
              "heading": "169majority-elementjs"
            },
            {
              "depth": 3,
              "value": "217.contains-duplicate.js",
              "heading": "217contains-duplicatejs"
            },
            {
              "depth": 3,
              "value": "3.longest-substring-without-repeating-characters.js",
              "heading": "3longest-substring-without-repeating-charactersjs"
            },
            {
              "depth": 3,
              "value": "347.top-k-frequent-elements.js",
              "heading": "347top-k-frequent-elementsjs"
            },
            {
              "depth": 2,
              "value": "堆 heap",
              "heading": "堆-heap"
            },
            {
              "depth": 3,
              "value": "239.sliding-window-maximum.js",
              "heading": "239sliding-window-maximumjs"
            },
            {
              "depth": 2,
              "value": "链表 linked-list",
              "heading": "链表-linked-list"
            },
            {
              "depth": 3,
              "value": "141.linked-list-cycle.js",
              "heading": "141linked-list-cyclejs"
            },
            {
              "depth": 3,
              "value": "142.linked-list-cycle-ii.js",
              "heading": "142linked-list-cycle-iijs"
            },
            {
              "depth": 3,
              "value": "160.intersection-of-two-linked-lists.js",
              "heading": "160intersection-of-two-linked-listsjs"
            },
            {
              "depth": 3,
              "value": "2.add-two-numbers.js",
              "heading": "2add-two-numbersjs"
            },
            {
              "depth": 3,
              "value": "206.reverse-linked-list.js",
              "heading": "206reverse-linked-listjs"
            },
            {
              "depth": 3,
              "value": "21.merge-two-sorted-lists.js",
              "heading": "21merge-two-sorted-listsjs"
            },
            {
              "depth": 3,
              "value": "237.delete-node-in-a-linked-list.js",
              "heading": "237delete-node-in-a-linked-listjs"
            },
            {
              "depth": 2,
              "value": "数学 math",
              "heading": "数学-math"
            },
            {
              "depth": 3,
              "value": "231.power-of-two.js",
              "heading": "231power-of-twojs"
            },
            {
              "depth": 3,
              "value": "43.multiply-strings.js",
              "heading": "43multiply-stringsjs"
            },
            {
              "depth": 3,
              "value": "633.sum-of-square-numbers.js",
              "heading": "633sum-of-square-numbersjs"
            },
            {
              "depth": 2,
              "value": "队列 queue",
              "heading": "队列-queue"
            },
            {
              "depth": 3,
              "value": "641.design-circular-deque.js",
              "heading": "641design-circular-dequejs"
            },
            {
              "depth": 2,
              "value": "stack",
              "heading": "stack"
            },
            {
              "depth": 3,
              "value": "20.valid-parentheses.js",
              "heading": "20valid-parenthesesjs"
            },
            {
              "depth": 2,
              "value": "字符串 string",
              "heading": "字符串-string"
            },
            {
              "depth": 3,
              "value": "10.regular-expression-matching.js",
              "heading": "10regular-expression-matchingjs"
            },
            {
              "depth": 3,
              "value": "14.longest-common-prefix.js",
              "heading": "14longest-common-prefixjs"
            },
            {
              "depth": 2,
              "value": "树 tree",
              "heading": "树-tree"
            },
            {
              "depth": 3,
              "value": "102.binary-tree-level-order-traversal.js",
              "heading": "102binary-tree-level-order-traversaljs"
            },
            {
              "depth": 2,
              "value": "双指针 two-pointers",
              "heading": "双指针-two-pointers"
            },
            {
              "depth": 3,
              "value": "11.container-with-most-water.js",
              "heading": "11container-with-most-waterjs"
            },
            {
              "depth": 3,
              "value": "15.3sum.js",
              "heading": "153sumjs"
            },
            {
              "depth": 3,
              "value": "16.3sum-closest.js",
              "heading": "163sum-closestjs"
            },
            {
              "depth": 3,
              "value": "167.two-sum-ii-input-array-is-sorted.js",
              "heading": "167two-sum-ii-input-array-is-sortedjs"
            },
            {
              "depth": 3,
              "value": "26.remove-duplicates-from-sorted-array.js",
              "heading": "26remove-duplicates-from-sorted-arrayjs"
            },
            {
              "depth": 3,
              "value": "344.reverse-string.js",
              "heading": "344reverse-stringjs"
            },
            {
              "depth": 3,
              "value": "88.merge-sorted-array.js",
              "heading": "88merge-sorted-arrayjs"
            },
            {
              "depth": 3,
              "value": "9.palindrome-number.js",
              "heading": "9palindrome-numberjs"
            }
          ],
          "title": "LeetCode",
          "nav": {
            "path": "/算法",
            "title": "算法"
          }
        },
        "title": "LeetCode"
      },
      {
        "path": "/算法/剑指offer",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__算法__剑指Offer.md' */'../../docs/算法/剑指Offer.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/算法/剑指Offer.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "剑指 Offer",
              "heading": "剑指-offer"
            }
          ],
          "title": "剑指 Offer",
          "nav": {
            "path": "/算法",
            "title": "算法"
          }
        },
        "title": "剑指 Offer"
      },
      {
        "path": "/算法/手写代码",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__算法__手写代码.md' */'../../docs/算法/手写代码.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/算法/手写代码.md",
          "updatedTime": 1593834026000,
          "group": {
            "order": 4
          },
          "slugs": [
            {
              "depth": 1,
              "value": "手写代码",
              "heading": "手写代码"
            },
            {
              "depth": 2,
              "value": "Function",
              "heading": "function"
            },
            {
              "depth": 3,
              "value": "cloneDeep",
              "heading": "clonedeep"
            },
            {
              "depth": 3,
              "value": "call",
              "heading": "call"
            },
            {
              "depth": 3,
              "value": "apply",
              "heading": "apply"
            },
            {
              "depth": 3,
              "value": "bind",
              "heading": "bind"
            },
            {
              "depth": 3,
              "value": "promise",
              "heading": "promise"
            },
            {
              "depth": 3,
              "value": "pipe",
              "heading": "pipe"
            },
            {
              "depth": 3,
              "value": "curry",
              "heading": "curry"
            },
            {
              "depth": 3,
              "value": "debounce",
              "heading": "debounce"
            },
            {
              "depth": 3,
              "value": "throttle",
              "heading": "throttle"
            },
            {
              "depth": 3,
              "value": "new 操作符",
              "heading": "new-操作符"
            },
            {
              "depth": 3,
              "value": "jsonStringify",
              "heading": "jsonstringify"
            },
            {
              "depth": 3,
              "value": "jsonParse",
              "heading": "jsonparse"
            },
            {
              "depth": 3,
              "value": "instanceOf",
              "heading": "instanceof"
            },
            {
              "depth": 3,
              "value": "flattenDeep",
              "heading": "flattendeep"
            },
            {
              "depth": 3,
              "value": "omit",
              "heading": "omit"
            },
            {
              "depth": 3,
              "value": "pick",
              "heading": "pick"
            },
            {
              "depth": 2,
              "value": "Promise",
              "heading": "promise-1"
            },
            {
              "depth": 2,
              "value": "Array",
              "heading": "array"
            },
            {
              "depth": 3,
              "value": "去重",
              "heading": "去重"
            },
            {
              "depth": 3,
              "value": "生成数组",
              "heading": "生成数组"
            },
            {
              "depth": 3,
              "value": "生成二维数组",
              "heading": "生成二维数组"
            },
            {
              "depth": 3,
              "value": "flatten",
              "heading": "flatten"
            },
            {
              "depth": 2,
              "value": "DOM",
              "heading": "dom"
            },
            {
              "depth": 3,
              "value": "DOM 树遍历 DFS + BFS",
              "heading": "dom-树遍历-dfs--bfs"
            },
            {
              "depth": 2,
              "value": "Math",
              "heading": "math"
            },
            {
              "depth": 3,
              "value": "判断两个矩形是否重叠",
              "heading": "判断两个矩形是否重叠"
            },
            {
              "depth": 3,
              "value": "范围内的随机数",
              "heading": "范围内的随机数"
            },
            {
              "depth": 2,
              "value": "Utils",
              "heading": "utils"
            },
            {
              "depth": 3,
              "value": "EventEmitter",
              "heading": "eventemitter"
            },
            {
              "depth": 3,
              "value": "数据绑定实现",
              "heading": "数据绑定实现"
            },
            {
              "depth": 3,
              "value": "VNode 渲染",
              "heading": "vnode-渲染"
            },
            {
              "depth": 3,
              "value": "数字转换成中文",
              "heading": "数字转换成中文"
            },
            {
              "depth": 3,
              "value": "MVVM",
              "heading": "mvvm"
            },
            {
              "depth": 3,
              "value": "扁平对象转树形对象",
              "heading": "扁平对象转树形对象"
            },
            {
              "depth": 2,
              "value": "编程题",
              "heading": "编程题"
            }
          ],
          "title": "手写代码",
          "nav": {
            "path": "/算法",
            "title": "算法"
          }
        },
        "title": "手写代码"
      },
      {
        "path": "/算法/数据结构与算法",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__算法__数据结构与算法.md' */'../../docs/算法/数据结构与算法.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/算法/数据结构与算法.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "数据结构与算法",
              "heading": "数据结构与算法"
            },
            {
              "depth": 2,
              "value": "❤️ 算法解题模板",
              "heading": "️-算法解题模板"
            },
            {
              "depth": 2,
              "value": "入门",
              "heading": "入门"
            },
            {
              "depth": 3,
              "value": "算法可视化",
              "heading": "算法可视化"
            },
            {
              "depth": 3,
              "value": "考察维度",
              "heading": "考察维度"
            },
            {
              "depth": 3,
              "value": "伪代码",
              "heading": "伪代码"
            },
            {
              "depth": 3,
              "value": "基本概念",
              "heading": "基本概念"
            },
            {
              "depth": 3,
              "value": "如何应对算法题",
              "heading": "如何应对算法题"
            },
            {
              "depth": 3,
              "value": "极客时间-算法面试通关40讲 课程大纲",
              "heading": "极客时间-算法面试通关40讲-课程大纲"
            },
            {
              "depth": 3,
              "value": "前端瓶子君 - 脑图",
              "heading": "前端瓶子君---脑图"
            },
            {
              "depth": 4,
              "value": "数组篇",
              "heading": "数组篇"
            },
            {
              "depth": 4,
              "value": "链表",
              "heading": "链表"
            },
            {
              "depth": 4,
              "value": "字符串",
              "heading": "字符串"
            },
            {
              "depth": 4,
              "value": "栈",
              "heading": "栈"
            },
            {
              "depth": 4,
              "value": "队列",
              "heading": "队列"
            },
            {
              "depth": 4,
              "value": "哈希表",
              "heading": "哈希表"
            },
            {
              "depth": 4,
              "value": "二叉树",
              "heading": "二叉树"
            },
            {
              "depth": 5,
              "value": "二叉树的遍历",
              "heading": "二叉树的遍历"
            },
            {
              "depth": 5,
              "value": "重构二叉树",
              "heading": "重构二叉树"
            },
            {
              "depth": 5,
              "value": "二叉树进阶",
              "heading": "二叉树进阶"
            },
            {
              "depth": 4,
              "value": "堆",
              "heading": "堆"
            },
            {
              "depth": 4,
              "value": "图",
              "heading": "图"
            },
            {
              "depth": 4,
              "value": "编程题",
              "heading": "编程题"
            },
            {
              "depth": 3,
              "value": "王争 - 数据结构和算法必知必会的50个代码实现",
              "heading": "王争---数据结构和算法必知必会的50个代码实现"
            },
            {
              "depth": 2,
              "value": "算法复杂度",
              "heading": "算法复杂度"
            },
            {
              "depth": 3,
              "value": "常见复杂度",
              "heading": "常见复杂度"
            },
            {
              "depth": 3,
              "value": "时间复杂度",
              "heading": "时间复杂度"
            },
            {
              "depth": 3,
              "value": "空间复杂度",
              "heading": "空间复杂度"
            },
            {
              "depth": 2,
              "value": "***数据结构**",
              "heading": "数据结构"
            },
            {
              "depth": 2,
              "value": "数据结构的存储结构",
              "heading": "数据结构的存储结构"
            },
            {
              "depth": 2,
              "value": "字符串",
              "heading": "字符串-1"
            },
            {
              "depth": 3,
              "value": "1-1 👌 整数翻转",
              "heading": "1-1--整数翻转"
            },
            {
              "depth": 3,
              "value": "1-2 有效的字母异位词",
              "heading": "1-2-有效的字母异位词"
            },
            {
              "depth": 3,
              "value": "1-3 字符串转换整数",
              "heading": "1-3-字符串转换整数"
            },
            {
              "depth": 3,
              "value": "2-1 报数",
              "heading": "2-1-报数"
            },
            {
              "depth": 3,
              "value": "2-2 👌反转字符串",
              "heading": "2-2-反转字符串"
            },
            {
              "depth": 3,
              "value": "2-3 👌字符串中的第一个唯一字符",
              "heading": "2-3-字符串中的第一个唯一字符"
            },
            {
              "depth": 3,
              "value": "3-1 👌验证回文字符串",
              "heading": "3-1-验证回文字符串"
            },
            {
              "depth": 3,
              "value": "3-2 实现 strStr()",
              "heading": "3-2-实现-strstr"
            },
            {
              "depth": 3,
              "value": "3-3 最长公共前缀",
              "heading": "3-3-最长公共前缀"
            },
            {
              "depth": 3,
              "value": "3-4 最长回文子串",
              "heading": "3-4-最长回文子串"
            },
            {
              "depth": 2,
              "value": "数学",
              "heading": "数学"
            },
            {
              "depth": 3,
              "value": "1-1 👌罗马数字转整数",
              "heading": "1-1-罗马数字转整数"
            },
            {
              "depth": 3,
              "value": "Fizz Buzz 和 计数质数",
              "heading": "fizz-buzz-和-计数质数"
            },
            {
              "depth": 3,
              "value": "2-1 3 的幂",
              "heading": "2-1-3-的幂"
            },
            {
              "depth": 3,
              "value": "Execel 表格序号、快乐数和阶乘后的零",
              "heading": "execel-表格序号、快乐数和阶乘后的零"
            },
            {
              "depth": 3,
              "value": "3-1 👌Pow(x, n)",
              "heading": "3-1-powx-n"
            },
            {
              "depth": 3,
              "value": "两数相除、分数到小数和 x 的平方根",
              "heading": "两数相除、分数到小数和-x-的平方根"
            },
            {
              "depth": 2,
              "value": "数组",
              "heading": "数组"
            },
            {
              "depth": 3,
              "value": "基本操作",
              "heading": "基本操作"
            },
            {
              "depth": 3,
              "value": "优势",
              "heading": "优势"
            },
            {
              "depth": 3,
              "value": "V8 中关于数组的两种存储模式",
              "heading": "v8-中关于数组的两种存储模式"
            },
            {
              "depth": 3,
              "value": "1-1 👌翻转数组",
              "heading": "1-1-翻转数组"
            },
            {
              "depth": 3,
              "value": "1-2 只出现一次的数字",
              "heading": "1-2-只出现一次的数字"
            },
            {
              "depth": 3,
              "value": "1-3 👌两数之和",
              "heading": "1-3-两数之和"
            },
            {
              "depth": 3,
              "value": "1-4 旋转图像",
              "heading": "1-4-旋转图像"
            },
            {
              "depth": 3,
              "value": "2-1 从排序树组中删除重复项",
              "heading": "2-1-从排序树组中删除重复项"
            },
            {
              "depth": 3,
              "value": "3-1 两个数组的交集",
              "heading": "3-1-两个数组的交集"
            },
            {
              "depth": 3,
              "value": "4-1 字谜分组",
              "heading": "4-1-字谜分组"
            },
            {
              "depth": 3,
              "value": "4-2 三数之和",
              "heading": "4-2-三数之和"
            },
            {
              "depth": 3,
              "value": "4-3 无重复字符的最长子串",
              "heading": "4-3-无重复字符的最长子串"
            },
            {
              "depth": 3,
              "value": "4-4 矩阵置零",
              "heading": "4-4-矩阵置零"
            },
            {
              "depth": 3,
              "value": "4-5 递增的三元子序列",
              "heading": "4-5-递增的三元子序列"
            },
            {
              "depth": 2,
              "value": "链表 Link-List",
              "heading": "链表-link-list"
            },
            {
              "depth": 3,
              "value": "复杂度",
              "heading": "复杂度"
            },
            {
              "depth": 3,
              "value": "边界",
              "heading": "边界"
            },
            {
              "depth": 3,
              "value": "题目",
              "heading": "题目"
            },
            {
              "depth": 3,
              "value": "数组和链表比较",
              "heading": "数组和链表比较"
            },
            {
              "depth": 3,
              "value": "设计一个单链表",
              "heading": "设计一个单链表"
            },
            {
              "depth": 3,
              "value": "解题技巧 - 快慢双指针",
              "heading": "解题技巧---快慢双指针"
            },
            {
              "depth": 3,
              "value": "移除链表元素",
              "heading": "移除链表元素"
            },
            {
              "depth": 3,
              "value": "1-1 👌回文链表 isPalindrome",
              "heading": "1-1-回文链表-ispalindrome"
            },
            {
              "depth": 3,
              "value": "1-2 👌环形链表",
              "heading": "1-2-环形链表"
            },
            {
              "depth": 3,
              "value": "1-3 👌删除链表中的节点",
              "heading": "1-3-删除链表中的节点"
            },
            {
              "depth": 3,
              "value": "2-1 👌翻转单链表",
              "heading": "2-1-翻转单链表"
            },
            {
              "depth": 3,
              "value": "2-2 👌删除链表的倒数第N个节点",
              "heading": "2-2-删除链表的倒数第n个节点"
            },
            {
              "depth": 3,
              "value": "2-3 👌合并两个有序链表",
              "heading": "2-3-合并两个有序链表"
            },
            {
              "depth": 3,
              "value": "2-4 👌两数相加",
              "heading": "2-4-两数相加"
            },
            {
              "depth": 3,
              "value": "3-1 排序链表",
              "heading": "3-1-排序链表"
            },
            {
              "depth": 3,
              "value": "3-2 相交链表",
              "heading": "3-2-相交链表"
            },
            {
              "depth": 3,
              "value": "3-3 奇偶链表",
              "heading": "3-3-奇偶链表"
            },
            {
              "depth": 3,
              "value": "3-4 相交链表",
              "heading": "3-4-相交链表"
            },
            {
              "depth": 2,
              "value": "栈 Stack",
              "heading": "栈-stack"
            },
            {
              "depth": 3,
              "value": "155：最小栈（包含getMin函数的栈）",
              "heading": "155：最小栈（包含getmin函数的栈）"
            },
            {
              "depth": 3,
              "value": "leetcode20：有效的括号",
              "heading": "leetcode20：有效的括号"
            },
            {
              "depth": 3,
              "value": "leetcode1047：删除字符串中的所有相邻重复项",
              "heading": "leetcode1047：删除字符串中的所有相邻重复项"
            },
            {
              "depth": 3,
              "value": "leetcode1209：删除字符串中的所有相邻重复项 II",
              "heading": "leetcode1209：删除字符串中的所有相邻重复项-ii"
            },
            {
              "depth": 3,
              "value": "删除字符串中出现次数 >= 2 次的相邻字符",
              "heading": "删除字符串中出现次数--2-次的相邻字符"
            },
            {
              "depth": 2,
              "value": "队列 Queue",
              "heading": "队列-queue"
            },
            {
              "depth": 3,
              "value": "使用队列对数据进行排序（基数排序）",
              "heading": "使用队列对数据进行排序（基数排序）"
            },
            {
              "depth": 3,
              "value": "优先队列",
              "heading": "优先队列"
            },
            {
              "depth": 3,
              "value": "1-1 剑指offer09：用两个栈实现队列",
              "heading": "1-1-剑指offer09：用两个栈实现队列"
            },
            {
              "depth": 3,
              "value": "102 LeetCode 32. 用栈实现队列",
              "heading": "102-leetcode-32-用栈实现队列"
            },
            {
              "depth": 3,
              "value": "leetcode239：滑动窗口最大值问题",
              "heading": "leetcode239：滑动窗口最大值问题"
            },
            {
              "depth": 3,
              "value": "leetcode151：翻转字符串里的单词",
              "heading": "leetcode151：翻转字符串里的单词"
            },
            {
              "depth": 3,
              "value": "Leetcode3：无重复字符的最长子串",
              "heading": "leetcode3：无重复字符的最长子串"
            },
            {
              "depth": 2,
              "value": "栈和队列应用",
              "heading": "栈和队列应用"
            },
            {
              "depth": 3,
              "value": "汉明距离",
              "heading": "汉明距离"
            },
            {
              "depth": 3,
              "value": "👌有效的括号",
              "heading": "有效的括号"
            },
            {
              "depth": 3,
              "value": "两整数之和",
              "heading": "两整数之和"
            },
            {
              "depth": 3,
              "value": "有序矩阵中第K小的元素和多数元素",
              "heading": "有序矩阵中第k小的元素和多数元素"
            },
            {
              "depth": 3,
              "value": "优先队列",
              "heading": "优先队列-1"
            },
            {
              "depth": 3,
              "value": "堆栈、队列比较",
              "heading": "堆栈、队列比较"
            },
            {
              "depth": 2,
              "value": "哈希表",
              "heading": "哈希表-1"
            },
            {
              "depth": 3,
              "value": "腾讯&leetcode349：给定两个数组，编写一个函数来计算它们的交集",
              "heading": "腾讯leetcode349：给定两个数组，编写一个函数来计算它们的交集"
            },
            {
              "depth": 3,
              "value": "字节&leetcode1：两数之和",
              "heading": "字节leetcode1：两数之和"
            },
            {
              "depth": 3,
              "value": "腾讯&leetcode15：三数之和",
              "heading": "腾讯leetcode15：三数之和"
            },
            {
              "depth": 3,
              "value": "leetcode380：常数时间插入、删除和获取随机元素",
              "heading": "leetcode380：常数时间插入、删除和获取随机元素"
            },
            {
              "depth": 3,
              "value": "剑指Offer：第一个只出现一次的字符",
              "heading": "剑指offer：第一个只出现一次的字符"
            },
            {
              "depth": 2,
              "value": "树",
              "heading": "树"
            },
            {
              "depth": 3,
              "value": "二叉树的遍历",
              "heading": "二叉树的遍历-1"
            },
            {
              "depth": 3,
              "value": "二叉查找树 BST (Binar Search Tree)",
              "heading": "二叉查找树-bst-binar-search-tree"
            },
            {
              "depth": 3,
              "value": "二叉树的自平衡",
              "heading": "二叉树的自平衡"
            },
            {
              "depth": 3,
              "value": "二叉堆",
              "heading": "二叉堆"
            },
            {
              "depth": 3,
              "value": "优先队列",
              "heading": "优先队列-2"
            },
            {
              "depth": 3,
              "value": "1-1 👌最小栈",
              "heading": "1-1-最小栈"
            },
            {
              "depth": 3,
              "value": "1-2 👌打乱数组",
              "heading": "1-2-打乱数组"
            },
            {
              "depth": 3,
              "value": "1-3 👌将有序数组转换为二叉搜索树",
              "heading": "1-3-将有序数组转换为二叉搜索树"
            },
            {
              "depth": 3,
              "value": "2-1 leetcode101 对称二叉树",
              "heading": "2-1-leetcode101-对称二叉树"
            },
            {
              "depth": 3,
              "value": "2-2 二叉树的最大深度",
              "heading": "2-2-二叉树的最大深度"
            },
            {
              "depth": 3,
              "value": "2-3 验证二叉搜索树",
              "heading": "2-3-验证二叉搜索树"
            },
            {
              "depth": 3,
              "value": "3-1 二叉树的层次遍历",
              "heading": "3-1-二叉树的层次遍历"
            },
            {
              "depth": 3,
              "value": "3-2 二叉树的序列化与反序列化",
              "heading": "3-2-二叉树的序列化与反序列化"
            },
            {
              "depth": 3,
              "value": "3-3 常数时间内插入删除",
              "heading": "3-3-常数时间内插入删除"
            },
            {
              "depth": 3,
              "value": "3-4 获得随机数",
              "heading": "3-4-获得随机数"
            },
            {
              "depth": 3,
              "value": "4-1 中序遍历二叉树",
              "heading": "4-1-中序遍历二叉树"
            },
            {
              "depth": 3,
              "value": "5-1 填充每个节点的下一个右侧节点指针",
              "heading": "5-1-填充每个节点的下一个右侧节点指针"
            },
            {
              "depth": 3,
              "value": "5-2 岛屿数量",
              "heading": "5-2-岛屿数量"
            },
            {
              "depth": 3,
              "value": "5-3 二叉树的锯齿形层次遍历",
              "heading": "5-3-二叉树的锯齿形层次遍历"
            },
            {
              "depth": 2,
              "value": "堆",
              "heading": "堆-1"
            },
            {
              "depth": 3,
              "value": "腾讯&字节等：最小的k个数",
              "heading": "腾讯字节等：最小的k个数"
            },
            {
              "depth": 3,
              "value": "leetcode347：前 K 个高频元素",
              "heading": "leetcode347：前-k-个高频元素"
            },
            {
              "depth": 3,
              "value": "字节&leetcode215：数组中的第K个最大元素",
              "heading": "字节leetcode215：数组中的第k个最大元素"
            },
            {
              "depth": 3,
              "value": "剑指Offer&leetcode295：数据流的中位数",
              "heading": "剑指offerleetcode295：数据流的中位数"
            },
            {
              "depth": 3,
              "value": "binary heap 二叉堆",
              "heading": "binary-heap-二叉堆"
            },
            {
              "depth": 2,
              "value": "图",
              "heading": "图-1"
            },
            {
              "depth": 3,
              "value": "广度优先搜索、深度优先搜索",
              "heading": "广度优先搜索、深度优先搜索"
            },
            {
              "depth": 3,
              "value": "leetcode997：找到小镇的法官",
              "heading": "leetcode997：找到小镇的法官"
            },
            {
              "depth": 3,
              "value": "leetcode207：课程表问题",
              "heading": "leetcode207：课程表问题"
            },
            {
              "depth": 3,
              "value": "剑指Offer&Bigo：旋转矩阵",
              "heading": "剑指offerbigo：旋转矩阵"
            },
            {
              "depth": 2,
              "value": "其他数据结构",
              "heading": "其他数据结构"
            },
            {
              "depth": 3,
              "value": "布隆过滤器",
              "heading": "布隆过滤器"
            },
            {
              "depth": 3,
              "value": "用于索引的数据结构",
              "heading": "用于索引的数据结构"
            },
            {
              "depth": 2,
              "value": "数据结构比较",
              "heading": "数据结构比较"
            },
            {
              "depth": 2,
              "value": "**算法**",
              "heading": "算法"
            },
            {
              "depth": 2,
              "value": "递归算法",
              "heading": "递归算法"
            },
            {
              "depth": 3,
              "value": "👌斐波那契",
              "heading": "斐波那契"
            },
            {
              "depth": 2,
              "value": "分治算法 Divide and Conquer",
              "heading": "分治算法-divide-and-conquer"
            },
            {
              "depth": 2,
              "value": "回溯算法 Backtracking",
              "heading": "回溯算法-backtracking"
            },
            {
              "depth": 3,
              "value": "1-1 👌括号生成",
              "heading": "1-1-括号生成"
            },
            {
              "depth": 3,
              "value": "1-2 子集",
              "heading": "1-2-子集"
            },
            {
              "depth": 3,
              "value": "1-3 电话号码的字母组合",
              "heading": "1-3-电话号码的字母组合"
            },
            {
              "depth": 3,
              "value": "2-1 实现数组的全排列",
              "heading": "2-1-实现数组的全排列"
            },
            {
              "depth": 3,
              "value": "2-2 单词搜索",
              "heading": "2-2-单词搜索"
            },
            {
              "depth": 2,
              "value": "贪心算法 Greedy",
              "heading": "贪心算法-greedy"
            },
            {
              "depth": 2,
              "value": "动态规划 DP Dynamic Programming",
              "heading": "动态规划-dp-dynamic-programming"
            },
            {
              "depth": 3,
              "value": "👌最长公共子串",
              "heading": "最长公共子串"
            },
            {
              "depth": 3,
              "value": "👌最长公共子序列",
              "heading": "最长公共子序列"
            },
            {
              "depth": 3,
              "value": "👌0 - 1 背包问题 （0 - 1 Knapsack）",
              "heading": "0---1-背包问题-（0---1-knapsack）"
            },
            {
              "depth": 3,
              "value": "👌1-1 最大子序和",
              "heading": "1-1-最大子序和"
            },
            {
              "depth": 3,
              "value": "1-2 爬楼梯",
              "heading": "1-2-爬楼梯"
            },
            {
              "depth": 3,
              "value": "1-3 买卖股票的最佳时机",
              "heading": "1-3-买卖股票的最佳时机"
            },
            {
              "depth": 3,
              "value": "2-1 打家劫舍",
              "heading": "2-1-打家劫舍"
            },
            {
              "depth": 3,
              "value": "2-2 零钱兑换",
              "heading": "2-2-零钱兑换"
            },
            {
              "depth": 3,
              "value": "2-3 跳跃游戏",
              "heading": "2-3-跳跃游戏"
            },
            {
              "depth": 3,
              "value": "3-1 不同路径",
              "heading": "3-1-不同路径"
            },
            {
              "depth": 3,
              "value": "3-2 单词拆分",
              "heading": "3-2-单词拆分"
            },
            {
              "depth": 2,
              "value": "排序算法",
              "heading": "排序算法"
            },
            {
              "depth": 3,
              "value": "排序算法可视化",
              "heading": "排序算法可视化"
            },
            {
              "depth": 3,
              "value": "👌冒泡排序 bubbleSort",
              "heading": "冒泡排序-bubblesort"
            },
            {
              "depth": 3,
              "value": "👌选择排序 selectionSort",
              "heading": "选择排序-selectionsort"
            },
            {
              "depth": 3,
              "value": "👌插入排序 insertionSort",
              "heading": "插入排序-insertionsort"
            },
            {
              "depth": 3,
              "value": "👌希尔排序 shellSort - 插入改进版",
              "heading": "希尔排序-shellsort---插入改进版"
            },
            {
              "depth": 3,
              "value": "👌快速排序 quickSort",
              "heading": "快速排序-quicksort"
            },
            {
              "depth": 3,
              "value": "👌归并排序 mergeSort",
              "heading": "归并排序-mergesort"
            },
            {
              "depth": 3,
              "value": "堆排序",
              "heading": "堆排序"
            },
            {
              "depth": 3,
              "value": "计数排序、桶排序、基数排序",
              "heading": "计数排序、桶排序、基数排序"
            },
            {
              "depth": 3,
              "value": "JS 内部 sort 排序",
              "heading": "js-内部-sort-排序"
            },
            {
              "depth": 3,
              "value": "1-1 合并两个有序数组",
              "heading": "1-1-合并两个有序数组"
            },
            {
              "depth": 3,
              "value": "2-1 在排序数组中查找元素的第一个和最后一个位置",
              "heading": "2-1-在排序数组中查找元素的第一个和最后一个位置"
            },
            {
              "depth": 3,
              "value": "3-1 前 K 个高频元素",
              "heading": "3-1-前-k-个高频元素"
            },
            {
              "depth": 3,
              "value": "4-1 搜索二位矩阵 II",
              "heading": "4-1-搜索二位矩阵-ii"
            },
            {
              "depth": 2,
              "value": "其他算法",
              "heading": "其他算法"
            },
            {
              "depth": 3,
              "value": "查找算法",
              "heading": "查找算法"
            },
            {
              "depth": 3,
              "value": "剪枝",
              "heading": "剪枝"
            },
            {
              "depth": 3,
              "value": "哈希算法",
              "heading": "哈希算法"
            },
            {
              "depth": 3,
              "value": "字典树",
              "heading": "字典树"
            },
            {
              "depth": 3,
              "value": "并查集",
              "heading": "并查集"
            },
            {
              "depth": 3,
              "value": "位运算(二进制)",
              "heading": "位运算二进制"
            },
            {
              "depth": 3,
              "value": "布隆过滤器",
              "heading": "布隆过滤器-1"
            },
            {
              "depth": 3,
              "value": "👌 应用 - LRU 缓存算法",
              "heading": "-应用---lru-缓存算法"
            },
            {
              "depth": 3,
              "value": "五种算法模式比较",
              "heading": "五种算法模式比较"
            },
            {
              "depth": 2,
              "value": "切题四件套",
              "heading": "切题四件套"
            },
            {
              "depth": 2,
              "value": "脑图",
              "heading": "脑图"
            }
          ],
          "title": "数据结构与算法",
          "nav": {
            "path": "/算法",
            "title": "算法"
          }
        },
        "title": "数据结构与算法"
      },
      {
        "path": "/网站/网站",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__网站__网站.md' */'../../docs/网站/网站.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/网站/网站.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "网站",
              "heading": "网站"
            },
            {
              "depth": 2,
              "value": "Weekly",
              "heading": "weekly"
            },
            {
              "depth": 2,
              "value": "HTTP",
              "heading": "http"
            },
            {
              "depth": 2,
              "value": "算法",
              "heading": "算法"
            },
            {
              "depth": 2,
              "value": "CSS",
              "heading": "css"
            },
            {
              "depth": 2,
              "value": "React",
              "heading": "react"
            },
            {
              "depth": 3,
              "value": "课程",
              "heading": "课程"
            },
            {
              "depth": 3,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 3,
              "value": "文章",
              "heading": "文章"
            },
            {
              "depth": 3,
              "value": "资源",
              "heading": "资源"
            },
            {
              "depth": 3,
              "value": "cheatsheet",
              "heading": "cheatsheet"
            },
            {
              "depth": 2,
              "value": "Node.js",
              "heading": "nodejs"
            },
            {
              "depth": 2,
              "value": "TypeScript",
              "heading": "typescript"
            },
            {
              "depth": 2,
              "value": "JavaScript",
              "heading": "javascript"
            },
            {
              "depth": 2,
              "value": "面试(综合，大前端内容)",
              "heading": "面试综合，大前端内容"
            },
            {
              "depth": 2,
              "value": "掘金小册",
              "heading": "掘金小册"
            },
            {
              "depth": 3,
              "value": "基础知识",
              "heading": "基础知识"
            },
            {
              "depth": 3,
              "value": "TypeScript",
              "heading": "typescript-1"
            },
            {
              "depth": 3,
              "value": "Git",
              "heading": "git"
            },
            {
              "depth": 3,
              "value": "Vue.js",
              "heading": "vuejs"
            },
            {
              "depth": 3,
              "value": "React",
              "heading": "react-1"
            },
            {
              "depth": 3,
              "value": "工程",
              "heading": "工程"
            },
            {
              "depth": 3,
              "value": "H5",
              "heading": "h5"
            },
            {
              "depth": 3,
              "value": "面试",
              "heading": "面试"
            },
            {
              "depth": 3,
              "value": "Node.js",
              "heading": "nodejs-1"
            },
            {
              "depth": 3,
              "value": "小程序、小游戏",
              "heading": "小程序、小游戏"
            },
            {
              "depth": 2,
              "value": "CDN",
              "heading": "cdn"
            },
            {
              "depth": 2,
              "value": "网站导航",
              "heading": "网站导航"
            },
            {
              "depth": 2,
              "value": "前端娱乐圈",
              "heading": "前端娱乐圈"
            },
            {
              "depth": 2,
              "value": "外包",
              "heading": "外包"
            },
            {
              "depth": 2,
              "value": "程序员 Podcast",
              "heading": "程序员-podcast"
            },
            {
              "depth": 2,
              "value": "极客时间",
              "heading": "极客时间"
            },
            {
              "depth": 2,
              "value": "UI 组件库",
              "heading": "ui-组件库"
            },
            {
              "depth": 2,
              "value": "Playground 云 IDE",
              "heading": "playground-云-ide"
            },
            {
              "depth": 2,
              "value": "前端大会",
              "heading": "前端大会"
            },
            {
              "depth": 2,
              "value": "在线文档",
              "heading": "在线文档"
            },
            {
              "depth": 2,
              "value": "静态网站生成工具",
              "heading": "静态网站生成工具"
            },
            {
              "depth": 2,
              "value": "跨平台技术",
              "heading": "跨平台技术"
            },
            {
              "depth": 2,
              "value": "书籍推荐",
              "heading": "书籍推荐"
            },
            {
              "depth": 2,
              "value": "you-dont-know-js",
              "heading": "you-dont-know-js"
            },
            {
              "depth": 2,
              "value": "前端工程师技能点",
              "heading": "前端工程师技能点"
            },
            {
              "depth": 2,
              "value": "Flutter",
              "heading": "flutter"
            },
            {
              "depth": 2,
              "value": "Mock Interview",
              "heading": "mock-interview"
            }
          ],
          "title": "网站",
          "nav": {
            "path": "/网站",
            "title": "网站"
          }
        },
        "title": "网站"
      },
      {
        "path": "/英语/摘抄",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__英语__摘抄.md' */'../../docs/英语/摘抄.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/英语/摘抄.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "摘抄",
              "heading": "摘抄"
            }
          ],
          "title": "摘抄",
          "nav": {
            "path": "/英语",
            "title": "英语"
          }
        },
        "title": "摘抄"
      },
      {
        "path": "/英语/英语",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__英语__英语.md' */'../../docs/英语/英语.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/英语/英语.md",
          "updatedTime": 1593834026000,
          "group": {
            "order": 5
          },
          "slugs": [
            {
              "depth": 1,
              "value": "英语",
              "heading": "英语"
            },
            {
              "depth": 2,
              "value": "材料",
              "heading": "材料"
            },
            {
              "depth": 3,
              "value": "英语在用 ESSENTIAL GRAMMAR IN USE",
              "heading": "英语在用-essential-grammar-in-use"
            },
            {
              "depth": 3,
              "value": "ESL Pod",
              "heading": "esl-pod"
            },
            {
              "depth": 3,
              "value": "bilibili",
              "heading": "bilibili"
            },
            {
              "depth": 3,
              "value": "赖世雄系列",
              "heading": "赖世雄系列"
            },
            {
              "depth": 3,
              "value": "youtube channel",
              "heading": "youtube-channel"
            },
            {
              "depth": 3,
              "value": "词汇",
              "heading": "词汇"
            },
            {
              "depth": 3,
              "value": "语法",
              "heading": "语法"
            },
            {
              "depth": 3,
              "value": "reading",
              "heading": "reading"
            },
            {
              "depth": 2,
              "value": "推荐",
              "heading": "推荐"
            },
            {
              "depth": 2,
              "value": "长难句分析",
              "heading": "长难句分析"
            },
            {
              "depth": 2,
              "value": "speaking",
              "heading": "speaking"
            },
            {
              "depth": 2,
              "value": "keywords",
              "heading": "keywords"
            },
            {
              "depth": 2,
              "value": "语法",
              "heading": "语法-1"
            },
            {
              "depth": 3,
              "value": "语法是否重要",
              "heading": "语法是否重要"
            },
            {
              "depth": 2,
              "value": "写作",
              "heading": "写作"
            },
            {
              "depth": 3,
              "value": "写作有没有捷径",
              "heading": "写作有没有捷径"
            },
            {
              "depth": 2,
              "value": "打造英语脑",
              "heading": "打造英语脑"
            },
            {
              "depth": 2,
              "value": "英文邮件的一些缩写",
              "heading": "英文邮件的一些缩写"
            },
            {
              "depth": 2,
              "value": "chinglish",
              "heading": "chinglish"
            },
            {
              "depth": 3,
              "value": "问题一，名词冗余",
              "heading": "问题一，名词冗余"
            },
            {
              "depth": 3,
              "value": "问题二，使用动词短语替代具体的动词",
              "heading": "问题二，使用动词短语替代具体的动词"
            },
            {
              "depth": 3,
              "value": "问题三，形容词冗余",
              "heading": "问题三，形容词冗余"
            },
            {
              "depth": 3,
              "value": "问题四：滥用抽象名词",
              "heading": "问题四：滥用抽象名词"
            }
          ],
          "title": "英语",
          "nav": {
            "path": "/英语",
            "title": "英语"
          }
        },
        "title": "英语"
      },
      {
        "path": "/英语/语法",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__英语__语法.md' */'../../docs/英语/语法.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/英语/语法.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "语法",
              "heading": "语法"
            },
            {
              "depth": 2,
              "value": "level",
              "heading": "level"
            },
            {
              "depth": 3,
              "value": "level1",
              "heading": "level1"
            },
            {
              "depth": 3,
              "value": "level 2",
              "heading": "level-2"
            },
            {
              "depth": 2,
              "value": "Can/Can't Must/Mustn't Have to/Don't have to",
              "heading": "cancant-mustmustnt-have-todont-have-to"
            },
            {
              "depth": 2,
              "value": "动词时态",
              "heading": "动词时态"
            },
            {
              "depth": 3,
              "value": "一般过去式",
              "heading": "一般过去式"
            },
            {
              "depth": 3,
              "value": "过去进行时 Past Continuous",
              "heading": "过去进行时-past-continuous"
            },
            {
              "depth": 3,
              "value": "现在完成时 present perfect",
              "heading": "现在完成时-present-perfect"
            },
            {
              "depth": 3,
              "value": "现在进行时 present continuous",
              "heading": "现在进行时-present-continuous"
            },
            {
              "depth": 3,
              "value": "一般现在时",
              "heading": "一般现在时"
            },
            {
              "depth": 4,
              "value": "Be",
              "heading": "be"
            },
            {
              "depth": 4,
              "value": "There is / There are",
              "heading": "there-is--there-are"
            },
            {
              "depth": 4,
              "value": "Positive",
              "heading": "positive"
            },
            {
              "depth": 4,
              "value": "Negative",
              "heading": "negative"
            },
            {
              "depth": 4,
              "value": "Questions",
              "heading": "questions"
            },
            {
              "depth": 2,
              "value": "句子",
              "heading": "句子"
            },
            {
              "depth": 3,
              "value": "简单句子",
              "heading": "简单句子"
            },
            {
              "depth": 3,
              "value": "直接 间接问句",
              "heading": "直接-间接问句"
            },
            {
              "depth": 3,
              "value": "被动语态 Passive Voice: Present / Past",
              "heading": "被动语态-passive-voice-present--past"
            },
            {
              "depth": 3,
              "value": "间接引语 Reported Speech: Statements",
              "heading": "间接引语-reported-speech-statements"
            },
            {
              "depth": 3,
              "value": "真实条件句 First Conditional ",
              "heading": "真实条件句-first-conditional"
            },
            {
              "depth": 3,
              "value": "Second Conditional",
              "heading": "second-conditional"
            },
            {
              "depth": 3,
              "value": "关系从句 relative Clauses",
              "heading": "关系从句-relative-clauses"
            },
            {
              "depth": 2,
              "value": "Defining and Non-Defining Relative Clauses",
              "heading": "defining-and-non-defining-relative-clauses"
            },
            {
              "depth": 2,
              "value": "不定式",
              "heading": "不定式"
            },
            {
              "depth": 2,
              "value": "词",
              "heading": "词"
            },
            {
              "depth": 3,
              "value": "冠词",
              "heading": "冠词"
            },
            {
              "depth": 3,
              "value": "介词 prep",
              "heading": "介词-prep"
            },
            {
              "depth": 3,
              "value": "助动词 auxiliary verbs",
              "heading": "助动词-auxiliary-verbs"
            },
            {
              "depth": 3,
              "value": "形容词",
              "heading": "形容词"
            },
            {
              "depth": 4,
              "value": "比较级",
              "heading": "比较级"
            },
            {
              "depth": 4,
              "value": "最高级",
              "heading": "最高级"
            },
            {
              "depth": 3,
              "value": "Word Order",
              "heading": "word-order"
            },
            {
              "depth": 3,
              "value": "现在分词 过去分词",
              "heading": "现在分词-过去分词"
            }
          ],
          "title": "语法",
          "nav": {
            "path": "/英语",
            "title": "英语"
          }
        },
        "title": "语法"
      },
      {
        "path": "/计算机/安全基础",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__计算机__安全基础.md' */'../../docs/计算机/安全基础.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/计算机/安全基础.md",
          "updatedTime": 1593925509000,
          "group": {
            "order": 3
          },
          "slugs": [
            {
              "depth": 1,
              "value": "安全基础",
              "heading": "安全基础"
            },
            {
              "depth": 2,
              "value": "CSP 内容安全策略",
              "heading": "csp-内容安全策略"
            },
            {
              "depth": 3,
              "value": "用法",
              "heading": "用法"
            },
            {
              "depth": 3,
              "value": "指令",
              "heading": "指令"
            },
            {
              "depth": 3,
              "value": "场景",
              "heading": "场景"
            },
            {
              "depth": 3,
              "value": "示例：",
              "heading": "示例："
            },
            {
              "depth": 2,
              "value": "Security HTTP Headers",
              "heading": "security-http-headers"
            },
            {
              "depth": 3,
              "value": "有哪些 header？",
              "heading": "有哪些-header？"
            },
            {
              "depth": 3,
              "value": "X-XSS-Protection",
              "heading": "x-xss-protection"
            },
            {
              "depth": 3,
              "value": "HTTP Strict Transport Security(HSTS) 严格的传输安全",
              "heading": "http-strict-transport-securityhsts-严格的传输安全"
            },
            {
              "depth": 3,
              "value": "X-Frame-Options “SAMEORIGIN” header",
              "heading": "x-frame-options-sameorigin-header"
            },
            {
              "depth": 3,
              "value": "X-Content-Type-Options header",
              "heading": "x-content-type-options-header"
            },
            {
              "depth": 3,
              "value": "Referrer-Policy header",
              "heading": "referrer-policy-header"
            },
            {
              "depth": 3,
              "value": "Content Security Policy (CSP) header",
              "heading": "content-security-policy-csp-header"
            },
            {
              "depth": 3,
              "value": "HTTP Public Key Pinning (HPKP) header HTTP公共密钥固定",
              "heading": "http-public-key-pinning-hpkp-header-http公共密钥固定"
            },
            {
              "depth": 3,
              "value": "Feature-Policy",
              "heading": "feature-policy"
            },
            {
              "depth": 3,
              "value": "Expect-CT - 试验阶段",
              "heading": "expect-ct---试验阶段"
            },
            {
              "depth": 3,
              "value": "X-Permitted-Cross-Domain-Policies",
              "heading": "x-permitted-cross-domain-policies"
            },
            {
              "depth": 3,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "XSS",
              "heading": "xss"
            },
            {
              "depth": 2,
              "value": "CSRF",
              "heading": "csrf"
            },
            {
              "depth": 2,
              "value": "点击劫持",
              "heading": "点击劫持"
            },
            {
              "depth": 2,
              "value": "SQL 注入",
              "heading": "sql-注入"
            },
            {
              "depth": 2,
              "value": "对称/非对称加密",
              "heading": "对称非对称加密"
            },
            {
              "depth": 2,
              "value": "OAuth 2.0",
              "heading": "oauth-20"
            },
            {
              "depth": 2,
              "value": "Session 攻击与防护",
              "heading": "session-攻击与防护"
            },
            {
              "depth": 2,
              "value": "如何防止云主机被扫",
              "heading": "如何防止云主机被扫"
            }
          ],
          "title": "安全基础",
          "nav": {
            "path": "/计算机",
            "title": "计算机"
          }
        },
        "title": "安全基础"
      },
      {
        "path": "/计算机/正则",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__计算机__正则.md' */'../../docs/计算机/正则.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/计算机/正则.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "正则表达式",
              "heading": "正则表达式"
            },
            {
              "depth": 2,
              "value": "概念",
              "heading": "概念"
            },
            {
              "depth": 2,
              "value": "正则可视化",
              "heading": "正则可视化"
            },
            {
              "depth": 2,
              "value": "初始化",
              "heading": "初始化"
            },
            {
              "depth": 2,
              "value": "exec",
              "heading": "exec"
            },
            {
              "depth": 2,
              "value": "lastIndex",
              "heading": "lastindex"
            },
            {
              "depth": 2,
              "value": "sticky 和 global 有什么区别？",
              "heading": "sticky-和-global-有什么区别？"
            },
            {
              "depth": 2,
              "value": "正则 cheatsheets",
              "heading": "正则-cheatsheets"
            },
            {
              "depth": 2,
              "value": "元字符",
              "heading": "元字符"
            },
            {
              "depth": 3,
              "value": "反义",
              "heading": "反义"
            },
            {
              "depth": 2,
              "value": "重复限定符",
              "heading": "重复限定符"
            },
            {
              "depth": 3,
              "value": "贪婪",
              "heading": "贪婪"
            },
            {
              "depth": 3,
              "value": "非贪婪",
              "heading": "非贪婪"
            },
            {
              "depth": 2,
              "value": "关键词",
              "heading": "关键词"
            },
            {
              "depth": 2,
              "value": "lastIndex",
              "heading": "lastindex-1"
            },
            {
              "depth": 2,
              "value": "正则题目",
              "heading": "正则题目"
            },
            {
              "depth": 3,
              "value": "trim 的实现",
              "heading": "trim-的实现"
            },
            {
              "depth": 3,
              "value": "Vue 模板解析",
              "heading": "vue-模板解析"
            },
            {
              "depth": 3,
              "value": "移除 HTML 标签",
              "heading": "移除-html-标签"
            },
            {
              "depth": 3,
              "value": "校验强密码",
              "heading": "校验强密码"
            },
            {
              "depth": 3,
              "value": "验证有效的24小时时间",
              "heading": "验证有效的24小时时间"
            },
            {
              "depth": 3,
              "value": "校验密码强度",
              "heading": "校验密码强度"
            },
            {
              "depth": 3,
              "value": "匹配电话区号",
              "heading": "匹配电话区号"
            },
            {
              "depth": 3,
              "value": "邮件校验",
              "heading": "邮件校验"
            },
            {
              "depth": 3,
              "value": "捕获与非捕获",
              "heading": "捕获与非捕获"
            },
            {
              "depth": 3,
              "value": "交换字符串位置",
              "heading": "交换字符串位置"
            },
            {
              "depth": 3,
              "value": "正向反向前瞻",
              "heading": "正向反向前瞻"
            },
            {
              "depth": 3,
              "value": "反向引用匹配重复词",
              "heading": "反向引用匹配重复词"
            },
            {
              "depth": 3,
              "value": "贪婪和非贪婪",
              "heading": "贪婪和非贪婪"
            },
            {
              "depth": 3,
              "value": "精确到两位小数",
              "heading": "精确到两位小数"
            },
            {
              "depth": 3,
              "value": "千位加,符号",
              "heading": "千位加符号"
            },
            {
              "depth": 3,
              "value": "电话号码分割",
              "heading": "电话号码分割"
            },
            {
              "depth": 3,
              "value": "url query parser",
              "heading": "url-query-parser"
            },
            {
              "depth": 3,
              "value": "超出字数省略号",
              "heading": "超出字数省略号"
            }
          ],
          "title": "正则表达式",
          "nav": {
            "path": "/计算机",
            "title": "计算机"
          }
        },
        "title": "正则表达式"
      },
      {
        "path": "/计算机/网络基础",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__计算机__网络基础.md' */'../../docs/计算机/网络基础.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/计算机/网络基础.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "网络基础",
              "heading": "网络基础"
            },
            {
              "depth": 2,
              "value": "输入 URL 全链路",
              "heading": "输入-url-全链路"
            },
            {
              "depth": 3,
              "value": "基本概念",
              "heading": "基本概念"
            },
            {
              "depth": 3,
              "value": "OSI 七层网络分层模型",
              "heading": "osi-七层网络分层模型"
            },
            {
              "depth": 3,
              "value": "浏览器",
              "heading": "浏览器"
            },
            {
              "depth": 3,
              "value": "URL",
              "heading": "url"
            },
            {
              "depth": 3,
              "value": "DNS 解析",
              "heading": "dns-解析"
            },
            {
              "depth": 3,
              "value": "CDN",
              "heading": "cdn"
            },
            {
              "depth": 3,
              "value": "TCP",
              "heading": "tcp"
            },
            {
              "depth": 4,
              "value": "时序控制",
              "heading": "时序控制"
            },
            {
              "depth": 4,
              "value": "三次握手",
              "heading": "三次握手"
            },
            {
              "depth": 4,
              "value": "四次挥手",
              "heading": "四次挥手"
            },
            {
              "depth": 4,
              "value": "TCP 状态机",
              "heading": "tcp-状态机"
            },
            {
              "depth": 4,
              "value": "滑动窗口",
              "heading": "滑动窗口"
            },
            {
              "depth": 4,
              "value": "拥塞控制",
              "heading": "拥塞控制"
            },
            {
              "depth": 4,
              "value": "TCP 和 UDP 区别",
              "heading": "tcp-和-udp-区别"
            },
            {
              "depth": 3,
              "value": "HTTP",
              "heading": "http"
            },
            {
              "depth": 4,
              "value": "SSL",
              "heading": "ssl"
            },
            {
              "depth": 4,
              "value": "CA 证书链",
              "heading": "ca-证书链"
            },
            {
              "depth": 4,
              "value": "首部字段",
              "heading": "首部字段"
            },
            {
              "depth": 4,
              "value": "无状态",
              "heading": "无状态"
            },
            {
              "depth": 4,
              "value": "Cookie",
              "heading": "cookie"
            },
            {
              "depth": 4,
              "value": "keep-alive",
              "heading": "keep-alive"
            },
            {
              "depth": 4,
              "value": "请求方法",
              "heading": "请求方法"
            },
            {
              "depth": 4,
              "value": "状态码",
              "heading": "状态码"
            },
            {
              "depth": 4,
              "value": "请求发送",
              "heading": "请求发送"
            },
            {
              "depth": 4,
              "value": "缓存策略",
              "heading": "缓存策略"
            },
            {
              "depth": 4,
              "value": "HTTP2",
              "heading": "http2"
            },
            {
              "depth": 4,
              "value": "HTTPS",
              "heading": "https"
            },
            {
              "depth": 2,
              "value": "原理",
              "heading": "原理"
            },
            {
              "depth": 3,
              "value": "UDP",
              "heading": "udp"
            },
            {
              "depth": 3,
              "value": "WebSocket",
              "heading": "websocket"
            },
            {
              "depth": 3,
              "value": "跨域",
              "heading": "跨域"
            },
            {
              "depth": 3,
              "value": "下载文件",
              "heading": "下载文件"
            },
            {
              "depth": 3,
              "value": "SSL 耗时解决",
              "heading": "ssl-耗时解决"
            },
            {
              "depth": 3,
              "value": "进程与线程",
              "heading": "进程与线程"
            },
            {
              "depth": 3,
              "value": "telnet 协议发邮件 伪造发件人",
              "heading": "telnet-协议发邮件-伪造发件人"
            },
            {
              "depth": 3,
              "value": "ipv4 & ipv6",
              "heading": "ipv4--ipv6"
            },
            {
              "depth": 3,
              "value": "Mixed content",
              "heading": "mixed-content"
            },
            {
              "depth": 3,
              "value": "HTTP 内容协商 Vary",
              "heading": "http-内容协商-vary"
            },
            {
              "depth": 3,
              "value": "provisional headers are shown",
              "heading": "provisional-headers-are-shown"
            },
            {
              "depth": 3,
              "value": "前端 web 密码加密是否有意义",
              "heading": "前端-web-密码加密是否有意义"
            },
            {
              "depth": 3,
              "value": "Content-Dispositio",
              "heading": "content-dispositio"
            },
            {
              "depth": 3,
              "value": "HTTP2 的速度是不是完胜 HTTP 了？",
              "heading": "http2-的速度是不是完胜-http-了？"
            },
            {
              "depth": 3,
              "value": "responseType",
              "heading": "responsetype"
            },
            {
              "depth": 3,
              "value": "mime-type",
              "heading": "mime-type"
            },
            {
              "depth": 3,
              "value": "Vue 项目的网络优化",
              "heading": "vue-项目的网络优化"
            },
            {
              "depth": 2,
              "value": "学习",
              "heading": "学习"
            },
            {
              "depth": 3,
              "value": "极客时间 - 趣谈网络协议",
              "heading": "极客时间---趣谈网络协议"
            }
          ],
          "title": "网络基础",
          "nav": {
            "path": "/计算机",
            "title": "计算机"
          }
        },
        "title": "网络基础"
      },
      {
        "path": "/计算机/设计模式",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__计算机__设计模式.md' */'../../docs/计算机/设计模式.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/计算机/设计模式.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "设计模式",
              "heading": "设计模式"
            },
            {
              "depth": 2,
              "value": "策略模式",
              "heading": "策略模式"
            },
            {
              "depth": 2,
              "value": "中介者模式",
              "heading": "中介者模式"
            },
            {
              "depth": 2,
              "value": "装饰者模式",
              "heading": "装饰者模式"
            },
            {
              "depth": 2,
              "value": "状态模式",
              "heading": "状态模式"
            },
            {
              "depth": 2,
              "value": "SOLID",
              "heading": "solid"
            },
            {
              "depth": 3,
              "value": "单一职责原则",
              "heading": "单一职责原则"
            },
            {
              "depth": 3,
              "value": "开/闭原则（OCP）",
              "heading": "开闭原则（ocp）"
            }
          ],
          "title": "设计模式",
          "nav": {
            "path": "/计算机",
            "title": "计算机"
          }
        },
        "title": "设计模式"
      },
      {
        "path": "/读书/elon-musk",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__读书__ElonMusk.md' */'../../docs/读书/ElonMusk.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/读书/ElonMusk.md",
          "updatedTime": 1593834026000,
          "slugs": [
            {
              "depth": 1,
              "value": "Elon Musk",
              "heading": "elon-musk"
            },
            {
              "depth": 2,
              "value": "硅谷钢铁侠",
              "heading": "硅谷钢铁侠"
            },
            {
              "depth": 2,
              "value": "背景",
              "heading": "背景"
            },
            {
              "depth": 2,
              "value": "创业活动",
              "heading": "创业活动"
            }
          ],
          "title": "Elon Musk",
          "nav": {
            "path": "/读书",
            "title": "读书"
          }
        },
        "title": "Elon Musk"
      },
      {
        "path": "/读书/王小波",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__读书__王小波.md' */'../../docs/读书/王小波.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/读书/王小波.md",
          "updatedTime": 1593834026000,
          "group": {
            "order": 6
          },
          "slugs": [
            {
              "depth": 1,
              "value": "王小波",
              "heading": "王小波"
            },
            {
              "depth": 2,
              "value": "时代三部曲",
              "heading": "时代三部曲"
            },
            {
              "depth": 2,
              "value": "经历",
              "heading": "经历"
            },
            {
              "depth": 2,
              "value": "程序员",
              "heading": "程序员"
            },
            {
              "depth": 2,
              "value": "有意思",
              "heading": "有意思"
            }
          ],
          "title": "王小波",
          "nav": {
            "path": "/读书",
            "title": "读书"
          }
        },
        "title": "王小波"
      },
      {
        "path": "/面试/面试",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__面试__面试.md' */'../../docs/面试/面试.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/面试/面试.md",
          "updatedTime": 1593925509000,
          "slugs": [
            {
              "depth": 1,
              "value": "面试",
              "heading": "面试"
            },
            {
              "depth": 2,
              "value": "准备篇",
              "heading": "准备篇"
            },
            {
              "depth": 2,
              "value": "1 数据结构与算法",
              "heading": "1-数据结构与算法"
            },
            {
              "depth": 2,
              "value": "2 设计模式",
              "heading": "2-设计模式"
            },
            {
              "depth": 2,
              "value": "3 JS",
              "heading": "3-js"
            },
            {
              "depth": 2,
              "value": "4 CSS",
              "heading": "4-css"
            },
            {
              "depth": 2,
              "value": "5 React",
              "heading": "5-react"
            },
            {
              "depth": 2,
              "value": "6 Vue",
              "heading": "6-vue"
            },
            {
              "depth": 2,
              "value": "7 网络",
              "heading": "7-网络"
            },
            {
              "depth": 2,
              "value": "8 性能",
              "heading": "8-性能"
            },
            {
              "depth": 2,
              "value": "9 webpack",
              "heading": "9-webpack"
            },
            {
              "depth": 2,
              "value": "题",
              "heading": "题"
            },
            {
              "depth": 3,
              "value": "题 1",
              "heading": "题-1"
            },
            {
              "depth": 3,
              "value": "题2",
              "heading": "题2"
            },
            {
              "depth": 3,
              "value": "题3",
              "heading": "题3"
            },
            {
              "depth": 2,
              "value": "面经",
              "heading": "面经"
            },
            {
              "depth": 3,
              "value": "老码农的字节跳动前端面试总结",
              "heading": "老码农的字节跳动前端面试总结"
            },
            {
              "depth": 3,
              "value": "LiuL0703 面试总结",
              "heading": "liul0703-面试总结"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "大厂职级",
              "heading": "大厂职级"
            },
            {
              "depth": 3,
              "value": "思考",
              "heading": "思考"
            },
            {
              "depth": 3,
              "value": "简历常用例句集合",
              "heading": "简历常用例句集合"
            },
            {
              "depth": 3,
              "value": "阿里 p6 senior developer",
              "heading": "阿里-p6-senior-developer"
            },
            {
              "depth": 3,
              "value": "面试前或平常会刷面试题吗 ?",
              "heading": "面试前或平常会刷面试题吗-"
            },
            {
              "depth": 3,
              "value": "渠道",
              "heading": "渠道"
            },
            {
              "depth": 3,
              "value": "独角兽",
              "heading": "独角兽"
            },
            {
              "depth": 3,
              "value": "上海互联网厂",
              "heading": "上海互联网厂"
            },
            {
              "depth": 3,
              "value": "字节 - senior - jd",
              "heading": "字节---senior---jd"
            },
            {
              "depth": 3,
              "value": "字节 三年社招岗位 前端面试 - 看准网",
              "heading": "字节-三年社招岗位-前端面试---看准网"
            },
            {
              "depth": 3,
              "value": "为什么前端面试官问的问题都是各种原理呢？",
              "heading": "为什么前端面试官问的问题都是各种原理呢？"
            }
          ],
          "title": "面试",
          "nav": {
            "path": "/面试",
            "title": "面试"
          }
        },
        "title": "面试"
      },
      {
        "path": "/其他",
        "meta": {},
        "exact": true,
        "redirect": "/其他/chrome"
      },
      {
        "path": "/前端",
        "meta": {},
        "exact": true,
        "redirect": "/前端/css"
      },
      {
        "path": "/后端",
        "meta": {},
        "exact": true,
        "redirect": "/后端/deno"
      },
      {
        "path": "/库",
        "meta": {},
        "exact": true,
        "redirect": "/库/库推荐"
      },
      {
        "path": "/算法",
        "meta": {},
        "exact": true,
        "redirect": "/算法/code-wars"
      },
      {
        "path": "/网站",
        "meta": {},
        "exact": true,
        "redirect": "/网站/网站"
      },
      {
        "path": "/英语",
        "meta": {},
        "exact": true,
        "redirect": "/英语/摘抄"
      },
      {
        "path": "/计算机",
        "meta": {},
        "exact": true,
        "redirect": "/计算机/安全基础"
      },
      {
        "path": "/读书",
        "meta": {},
        "exact": true,
        "redirect": "/读书/elon-musk"
      },
      {
        "path": "/面试",
        "meta": {},
        "exact": true,
        "redirect": "/面试/面试"
      }
    ],
    "title": "流月的知识库"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
