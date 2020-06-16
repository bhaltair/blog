## Security 

### Security HTTP Headers

先读一下下面的文章
- https://www.kiwii.ch/en/digital-marketing/security/http-headers-security-check/
- https://geekflare.com/http-header-implementation/

有哪些 header？
- HTTP Strict Transport Security(HSTS)
- Cross-Site Scripting (XSS) header
- X-Frame-Options "SAMEORIGIN" header
- Referrer-Policy header
- Content Security Policy(CSP) header
- HTTP Public Key Pinning(HPKP) header

### X-XSS-Protection

?> X-XSS 保护标头可以防止某些级别的 XSS（跨站点脚本）攻击，这与 IE 8+、Chrome、Opera、Safari 和 Android 兼容。

?> 兼容性：Google，Facebook，Github使用此标头，并且大多数渗透测试咨询公司都将要求您实施此标头。

可以选择的值

- 0 XSS过滤器已禁用
- 1 如果检测到攻击，则启用XSS筛选器并清理页面
- 1;moder=block 启用XSS过滤器，并在检测到攻击时阻止渲染页面
- 1;report=http://example.com/report_URI	启用XSS筛选器，并在检测到攻击时上报

> add_header X-XSS-Protection "1; mode=block";

### HTTP Strict Transport Security(HSTS) 严格的传输安全

HSTS（HTTP严格传输安全）头，以确保浏览器的所有通信都通过HTTPS（HTTP安全）发送。这可以防止HTTPS点击提示，并将HTTP请求重定向到HTTPS。



?> 兼容性：浏览器的所有主要最新版本（例如IE，Firefox，Opera，Safari和Chrome）都支持HSTS标头。

有三个参数配置。

- max-age 告诉浏览器请求仅通过HTTPS可用的持续时间（以秒为单位）。
- includeSubdomains 该配置也对子域有效。
- preload 如果您希望将域包含在 HSTS 预加载列表中，请使用

```shell
add_header Strict-Transport-Security "max-age=31536000; includeSubdomains" always;
add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload';
```

### X-Frame-Options “SAMEORIGIN” header

防止点击劫持。

通过实现此 header ，可以指示浏览器不要将您的网页嵌入 frame / iframe。

这个头部字段在浏览器支持方面有一些限制，因此您必须在实施之前进行检查。

> add_header X-Frame-Options "SAMEORIGIN" always;

可能的值有

- SAMEORIGIN 同源
- DENY 禁止所有域名
- ALLOW-FROM 指定一个URL

### X-Content-Type-Options header 

TODO:

?> 通过将此标头添加到网页的HTTP响应中，可以防止 MIME 类型的安全风险。具有此标头可指示浏览器将文件类型视为已定义，并禁止内容嗅探。您只需添加“ nosniff”一个参数。

> add_header X-Content-Type-Options nosniff;

### Referrer-Policy header

想要控制您网站的 Referrer-Policy ？有一定的隐私和安全优势。然而，并不是所有的浏览器都支持所有的选项，所以在实施之前，请检查您的要求。

> add_header Referrer-Policy "no-referrer-when-downgrade";

> add_header Referrer-Policy same-origin;

支持的语法：
1. no-referrer referrer 信息不回随着请求发送
2. no-referrer-when-downgrade	[默认设置，其中 当 HTTP到HTTP，HTTPS到HTTPS相同的协议发送 referrer。]
3. unsafe-url	 （full URL will be sent with the request.）
4. same-origin	[Referrer will be sent only for same origin site.]
5. strict-origin	[send only when a protocol is HTTPS]
6. strict-origin-when-cross-origin	(the full URL will be sent over a strict protocol like HTTPS)
7. origin (send the origin URL in all the requests)
8. origin-when-cross-origin	(send FULL URL on the same origin. However, send only origin URL in other cases.)


### Content Security Policy (CSP) header

?> 内容安全策略 （或 CSP ） 是一种安全机制，用于将网页上的内容（如 Javascript、图像、CSS 等）的来源限制为某些授权网站。
这样可以更好地防范可能的 XSS 攻击。

通过在网页HTTP响应中实施内容安全策略（CSP）标头，防止XSS，点击劫持，代码注入攻击。 CSP指示浏览器加载允许的内容以在网站上加载。

让我们看一下两个最常用的参数。
- default-src 
  - Load everything from a defined source
- script-src
  - Load only scripts from a defined source

以下示例将来自同一来源的所有内容加载到各种Web服务器中。

?> add_header Content-Security-Policy "default-src 'self';";

```bash
add_header Content-Security-Policy "default-src 'none';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' 
        https://apis.google.com 
        www.google-analytics.com 
        *.googlesyndication.com 
        *.doubleclick.net 
        *.cloudflare.com 
        *.bootstrapcdn.com;
    style-src 'self' 'unsafe-inline' 
        https://fonts.googleapis.com
        *.bootstrapcdn.com;
    img-src 'self' data: 
        www.google.com 
        www.google.fr 
        www.google-analytics.com 
        *.cloudflare.com 
        *.doubleclick.net; 
    font-src 'self' 
        https://fonts.googleapis.com 
        https://fonts.gstatic.com 
        *.bootstrapcdn.com; 
        connect-src 'self'; 
    frame-src 'self' 'unsafe-inline' 
        *.doubleclick.net; 
    frame-ancestors 'none'; 
    form-action 'none'; 
    upgrade-insecure-requests; 
    block-all-mixed-content; 
    reflected-xss block; 
    base-uri 123run.com www.123run.com; 
    referrer no-referrer-when-downgrade";
```




### HTTP Public Key Pinning (HPKP) header HTTP公共密钥固定
TODO:

通过固定证书来最大程度地降低中间人（MITM）的攻击风险。(它告诉Web客户端将特定的加密公共密钥与特定的Web服务器相关联，以降低使用伪造证书进行MITM攻击的风险)

您可以固定根证书公钥或即时证书。

HPKP当前可在Firefox和Chrome中运行，并支持SHA-256哈希算法。

```bash
Public-Key-Pins: 
    pin-sha256="cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs="; 
    pin-sha256="M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE="; 
    max-age=5184000;
    includeSubDomains; 
    report-uri="https://www.example.com/hpkp-report"
```


### Feature-Policy
控制浏览器的功能，例如地理位置，全屏，扬声器，USB，自动播放，扬声器，振动，麦克风，付款，VR等，以在Web应用程序中启用或禁用。

### Expect-CT - 试验阶段
仍处于试验状态的新标头将指示浏览器验证与Web服务器的连接以实现证书透明（CT）。 Google的这个项目旨在修复SSL / TLS证书系统中的某些缺陷。

### X-Permitted-Cross-Domain-Policies
TODO:

使用Adobe产品（例如PDF，Flash等？您可以实现此标头，以指示浏览器如何处理跨域请求。

通过实现此标头，您可以限制从其他域加载网站的资产，以避免资源滥用。

// 只允许主策略

> add_header X-Permitted-Cross-Domain-Policies master-only;


### 示例

```bash
# security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;

# CSP 内容安全策略 
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# . files
location ~ /\.(?!well-known) {
  deny all;
}
```

## 模板

### 静态文件

```
server {
  listen 80;
  server_name www.taobao.com;

  location / {
    root   /Users/ringcrl/www/taobao;
    autoindex on;
    index  index.html;
  }
}
```

### 反向代理

```
server {
  listen 80;
  server_name api.taobao.com

  location / {
    proxy_pass http://127.0.0.1:5555;
    autoindex on;
    index index.html;
  }
}
```

## 可视化配置

https://www.digitalocean.com/community/tools/nginx

https://nginxconfig.io/

## location

### 匹配规则

- /images/ 匹配任何以 /images/ 开头的地址
- / 通用匹配，如果没有其它匹配，任何请求都会匹配到
- ^~ 开头表示 uri 以某个常规字符串开头，不是正则匹配
- ~* 开头表示不区分大小写的正则匹配
- ~ 开头表示区分大小写的正则匹配
- = 开头表示精确匹配
  - 如 config A 中只匹配根目录结尾的请求，后面不能带任何字符串

```shell
location  = / {
  # 精确匹配 /，主机名后面不能带任何字符串
  [ config A ]
}


location / {
  # 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求
  # 但是正则和最长字符串会优先匹配，无其他匹配内容的时候才走到这里
  [ config B ]
}

location /documents/ {
  # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ config C ]
}

location ^~ /images/ {
  # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条
  [ config D ]
}

location ~* \.(gif|jpg|jpeg)$ {
  # 匹配所有以 gif、jpg 或 jpeg 结尾的请求
  # 所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则
  [ config E ]
}

```

### 优先级

1. location =
2. location 完整路径
3. location ^~ 开头路径
4. location 、* 正则顺序
5. location 部分起始路径
6. location /

### 最佳实践

```shell
# 第一个必选规则
location = / {
  proxy_pass http://tomcat:8080/index
}

# 第二个必选规则是处理静态文件请求，这是 nginx 作为 http 服务器的强项
# 有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用
location ^~ /static/ {
  root /webroot/static/;
}
location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ {
  root /webroot/res/;
}

# 第三个规则就是通用规则，用来转发动态请求到后端应用服务器
# 非静态文件请求就默认是动态请求，自己根据实际把握
# 毕竟目前的一些框架的流行，带 .php、.jsp 后缀的情况很少了
location / {
  proxy_pass http://tomcat:8080/
}
```

## 指令

### add_header

- http、server和location三处均可配置add_header，但起作用的是最接近的配置，往上的配置都会失效
- 仅当当前层级中没有 add_header 指令才会继承父级设置

### referer

- 浏览器会在请求头加入 referer 字段，指示当前访问的网页
- 通过 referer 模块的 invalid_referer 变量拒绝非正常访问
  - 图片防盗
    - http 协议中，如果从一个网页跳到另一个网页，http 头字段里面会带个 Referer。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链
  - 破解盗链
    - 抹掉 referer

### realip 真实用户 ip

- X-Forworded-For 头部传递多个 IP
- X-Real-IP 传递用户 IP

```shell
location / {
  root   /Users/ringcrl/www;
  index  index.html;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

### limit_conn 与 limit_req

### acccess 控制 IP 访问

```shell
location / {
  allow 192.168.1.255;
  deny all;
}
```

### server_name_in_redirect 重定向


### index 和 autoindex

- index 优先级高于 autoindex

```shell
server {
  server_name autoindex.chenng.cn;
  listen 8080;
  location / {
    alias html/;
    autoindex on;
    # index a.html
    autoindex_exact_size off;
    autoindex_format html;
    autoindex_localtime on;
  }
}
```

### log 打印日志

```
$remote_addr 与 $http_x_forwarded_for 用以记录客户端的 ip 地址
$remote_user 用来记录客户端用户名称
$time_local 用来记录访问时间与时区
$request 用来记录请求的url与http协议
$status 用来记录请求状态；成功是200
$body_bytes_s ent 记录发送给客户端文件主体内容大小
$http_referer 用来记录从那个页面链接访问过来的
$http_user_agent 记录客户端浏览器的相关信息
```

### keepalive 复用 TCP 连接

### proxy_pass 反向代理


```nginx
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $http_host;
proxy_set_header X-NginX-Proxy true;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_pass http://127.0.0.1:$node_port$request_uri;
```

### 缓存指令

### HTTP2

优点：
1. 传输数据量大幅度减少
  - 以二进制方式传输
  - 头部压缩
2. 多路复用
3. 服务端消息推送

```nginx
server {
  server_name http2.chenng.cn;
  root html;

  location / {
    http2_push /mirrot.txt;
    http2_push /video.mp4;
  }

  listen 443 ssl http2;
  ssl_certificate ...;
  ssl_certificate_key ...;
}
```