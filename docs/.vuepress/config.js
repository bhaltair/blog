import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            // { text: 'Home', link: '/' },

              {
                text: '前端',
                children: [
                  { text: 'CSS', link: '/前端/css.md' },
                  { text: 'JavaScript', link: '/前端/javascript.md' },
                  { text: 'Web API', link: '/前端/WebApi.md' },
                  { text: 'TypeScript', link: '/前端/typescript.md' },
                  { text: '框架', children: [
                    { text: 'React', link: '/前端/react.md' },
                    { text: 'Vue', link: '/前端/vue.md' },
                  ]},
                  { text: '其他', children: [
                    { text: '小程序', link: '/前端/小程序.md' },
                    { text: '工程化', link: '/前端/工程化.md' },
                    { text: '性能优化', link: '/前端/性能优化.md' },
                    // { text: 'WebPack', link: '/前端/webpack/' },
                    { text: '测试', link: '/前端/测试.md' },
                    { text: '其他', link: '/前端/其他.md' }
                  ]},                    
                ]
              },
              {
                text: '后端',
                children: [
                  { text: 'nodejs', link: '/后端/nodejs.md' },
                  { text: 'deno', link: '/后端/deno.md' },
                  { text: 'express', link: '/后端/express.md' },
                  { text: 'nginx', link: '/后端/nginx.md' },
                  { text: 'docker', link: '/后端/docker.md' },
                  { text: '其他', link: '/后端/其他.md' },
                ]
              },
              {
                text: '计算机',
                children: [
                  { text: '安全基础', link: '/计算机/安全基础.md' },
                  { text: '正则表达式', link: '/计算机/正则.md' },
                  { text: '网络基础', link: '/计算机/网络基础.md' },
                  { text: '设计模式', link: '/计算机/设计模式.md' },
                ]
              }, 
              {
                text: '算法',
                children: [
                  { text: '数据结构与算法', link: '/算法/数据结构与算法.md' },
                  { text: 'LeetCode', link: '/算法/leetcode.md' },
                  { text: 'CodeWars', link: '/算法/codewars.md' },
                  // { text: '剑指Offer', link: '/算法/剑指Offer/' },
                  { text: '手写代码', link: '/算法/手写代码.md' },
                ]
              }, 
              {
                text: '其他',
                children: [
                  { text: 'Git', link: '/其他/git.md' },
                  { text: 'devops', link: '/其他/持续集成.md' },
                  { text: '编码原则', link: '/其他/编码原则.md' },
                  { text: '防御编程', link: '/其他/防御编程.md' },
                  { text: 'Chrome', link: '/其他/chrome.md' },
                  { text: 'Edge', link: '/其他/edge.md' },
                  { text: 'Flutter', link: '/其他/Flutter.md' },
                  { text: 'Linux', link: '/其他/linux.md' },
                  { text: '库', link: '/库/库推荐.md' },
                  { text: '网站', link: '/网站/网站.md' },
                  { text: '面试', link: '/面试/面试.md' },
                ]
              },   
              {
                text: '英语',
                children: [
                  { text: '摘抄', link: '/英语/摘抄.md' },
                  { text: '方法论', link: '/英语/英语.md' },
                  { text: '语法', link: '/英语/语法.md' },
                ]
              },
              {
                text: '读书',
                children: [
                  { text: '王小波', link: '/读书/王小波.md' },
                  { text: 'Elon Musk', link: '/读书/elonmusk.md' },
                ]
              }                           
        ],
    }),
    title: '流月',
    description: '处于萌芽阶段的前端核心知识库',
    base: '/blog/',
    dest: 'dist',
    plugins: [
      googleAnalyticsPlugin({
        id: 'G-3QK8HLYR2Q',
        debug: true,
      }),
    ],
})
