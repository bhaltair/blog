module.exports = {
  title: '流月',
  description: '处于萌芽阶段的前端核心知识库',
  plugins: ['@vuepress/medium-zoom'],
  dest: 'dist',
  themeConfig: {
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/前端/html5/' },
          { text: 'CSS', link: '/前端/css/' },
          { text: '', items: [
            { text: 'JavaScript', link: '/前端/javascript/' },
            { text: '函数式编程', link: '/前端/函数式编程/' },
            { text: '面向对象', link: '/前端/面向对象/' },
            { text: 'Web API', link: '/前端/webapi/' },
            { text: 'TypeScript', link: '/前端/typescript/' },
          ]},
          { text: '', items: [
            { text: 'React', link: '/前端/react/' },
            { text: 'Vue', link: '/前端/vue/' },
          ]},
          { text: '', items: [
            { text: '小程序', link: '/前端/小程序/' },
            { text: '性能优化', link: '/前端/性能优化/' },
            { text: '工程化', link: '/前端/工程化/' },
            { text: 'WebPack', link: '/前端/webpack/' },
            { text: '测试', link: '/前端/测试/' },
            { text: '其他', link: '/前端/其他/' }
          ]},                    

        ]
      },
      {
        text: '后端',
        items: [
          { text: 'nodejs', link: '/后端/nodejs/' },
          { text: 'deno', link: '/后端/deno/' },
          { text: 'express', link: '/后端/express/' },
          { text: 'nginx', link: '/后端/nginx/' },
          { text: 'docker', link: '/后端/docker/' },
          { text: '其他', link: '/后端/其他/' },
        ]
      },
      {
        text: '计算机',
        items: [
          { text: '安全基础', link: '/计算机/安全基础/' },
          { text: '正则表达式', link: '/计算机/正则/' },
          { text: '网络基础', link: '/计算机/网络基础/' },
          { text: '设计模式', link: '/计算机/设计模式/' },
        ]
      }, 
      {
        text: '算法',
        items: [
          { text: '数据结构与算法', link: '/算法/数据结构与算法/' },
          { text: 'LeetCode', link: '/算法/leetcode/' },
          { text: 'CodeWars', link: '/算法/codewars/' },
          { text: '剑指Offer', link: '/算法/剑指Offer/' },
          { text: '手写代码', link: '/算法/手写代码/' },
        ]
      }, 
      {
        text: '其他',
        items: [
          { text: '持续集成', link: '/其他/持续集成/' },
          { text: '编码原则', link: '/其他/编码原则/' },
          { text: '防御编程', link: '/其他/防御编程/' },
          { text: 'Chrome', link: '/其他/chrome/' },
          { text: 'Edge', link: '/其他/edge/' },
          { text: 'Flutter', link: '/其他/flutter/' },
          { text: 'Git', link: '/其他/git/' },
          { text: 'Linux', link: '/其他/linux/' },
          { text: '库', link: '/库/库推荐/' },
          { text: '网站', link: '/网站/网站/' },
          { text: '面试', link: '/面试/面试/' },
        ]
      },   
      {
        text: '英语',
        items: [
          { text: '摘抄', link: '/英语/摘抄/' },
          { text: '方法论', link: '/英语/英语/' },
          { text: '语法', link: '/英语/语法/' },
        ]
      },
      {
        text: '读书',
        items: [
          { text: '王小波', link: '/读书/王小波/' },
          { text: 'Elon Musk', link: '/读书/elonmusk/' },
        ]
      }                           
    ],    
    smoothScroll: false,
    sidebar: 'auto',
    lastUpdated: 'Last Updated', // string | boolean
  }  
}