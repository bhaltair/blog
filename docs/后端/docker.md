# Docker
## 安装 docker
## 镜像
### 构建镜像
```sh
docker build -t webapp:latest .
```
### 发布镜像
### 镜像启动
```sh
docker pull ringcrl/node_rss_bot
docker run --name node_rss_bot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=<TG_TOKEN> ringcrl/node_rss_bot
```
### 更新镜像

```sh
# 查看镜像
docker images

# 拉取最新镜像
docker pull ringcrl/node_rss_bot

# 查找容器
docker ps

# 停止容器
docker kill 26cd26b1a5d5

# 删除容器
docker rm 26cd26b1a5d5

# 重新创建容器
docker run --name node_rss_bot -d -v /var/data:/app/data/ -e RSSBOT_TOKEN=<TG_TOKEN> ringcrl/node_rss_bot
```
### 删除镜像

```sh
# 删除镜像
docker image rm <IMAGE ID>

# 删除全部悬虚镜像 
docker image prune

# 删除全部没有被容器使用的镜像
docker image prune -a
```

### 拉取镜像

```sh
# 搜索镜像
docker search ubuntu

# 拉取官方镜像
docker pull ubuntu:latest

# 拉取非官方镜像
docker pull ringcrl/node_rss_bot

# 拉取第三方镜像仓库的镜像
docker pull gcr.ioringcrl/node_rss_bot
```

## 容器

### 生命周期

* Created：容器已经被创建，容器所需的相关资源已经准备就绪，但容器中的程序还未处于运行状态
* Running：容器正在运行，也就是容器中的应用正在运行
* Paused：容器已暂停，表示容器中的所有程序都处于暂停 ( 不是停止 ) 状态
* Stopped：容器处于停止状态，占用的资源和沙盒环境都依然存在，只是容器中的应用程序均已停止
* Deleted：容器已删除，相关占用的资源及存储在 Docker 中的管理信息也都已释放和移除

### 启动

```sh
# 拉取镜像
docker pull nginx:1.12

# 创建容器
docker create --name nginx nginx:1.12

# 启动容器
docker start nginx

# run 同时创建和启动，-d 是在后台运行
docker run \
  -d \ # 后台运行
  --name nginx \ # 为容器命名
  nginx:1.12
```

### 管理

```sh
# 查看所有容器
docker container ls -a

# 停止容器
docker container stop <NAME>

# 删除容器
docker container rm <NAME>

# 停止并删除容器
docker container rm -f <CONTAINER ID>

# 查看容器状态
docker inspect <NAME>

# 快速清理所有容器
docker container rm $(docker container ls -aq) -f
```

### 进入

```sh
docker exec -it nginx bash

```
### 容器互联

```sh
# 通过 docker create 或 docker run 时通过 --link 选项进行配置
docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
docker run -d --name webapp --link mysql webapp:latest

# 连接方式
String url = "jdbc:mysql://mysql:3306/webapp";
```

### 暴露端口

```sh
# 在容器创建时使用 --expose 进行定义，不暴露的端口不能访问
docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --expose 13306 --expose 23306 mysql:5.7
```
### 端口映射
```sh
# 在创建容器时使用 -p 创建端口映射
docker run -d -p 80:80 -p 443:443 nginx
```

## 数据持久化

- 沙盒文件系统是跟随容器生命周期所创建和移除的，数据无法直接被持久化存储
- 由于容器隔离，我们很难从容器外部获得或操作容器内部文件中的数据


#### 容器数据

```sh
# 启动容器
docker container run \
  --name percy \
  -it \
  ubuntu:latest \
  /bin/bash

# 新建文件
echo "test data storage" > tmp/newfile

# 停止容器
docker container stop percy

# 重新开始容器
docker container start percy

# 进入容器，容器内数据还存在
docker container exec -it percy bash
```
#### 挂载宿主环境文件

```sh
# -v <host-path>:<container-path> 读写挂载
docker run --name nginx \
 -d -p 80:80 \
 -v ~/static/:/usr/share/nginx/html \
 nginx
```
#### Volume

数据卷的本质其实依然是宿主操作系统上的一个目录，只不过这个目录存放在 Docker 内部，接受 Docker 的管理。

```sh
# 创建数据卷
docker volume create myVol

# 查看数据卷
docker volume inspect myVol

# 使用数据卷
docker run -d \
  --name webapp \
  -v myVol \
  webapp:latest

# 删除没有被容器引用的数据卷
docker volume prune -f
```

## 保存和共享镜像

```sh
# 将容器修改的内容保存为新的镜像
docker commit -m 'costom config' nginx

# 为新的镜像命名
docker tag [IMAGE ID] nginx_new

# 导出新的镜像
docker save -o ./nginx_new.tar nginx_new

# 导入镜像
docker load < nginx_new.tar

# 批量导出
# docker save -o ./images.tar webapp:1.0 nginx:1.12 mysql:5.
```

## Dockerfile
### 例子
```dockerfile
# 该 image 文件继承官方的 node image，冒号表示标签，这里标签是 8.4，即 8.4 版本的 node。
FROM node:8.4

# 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录。
COPY . /app

# 指定接下来的工作路径为/app。
WORKDIR /app

# 在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
RUN npm install --registry=https://registry.npm.taobao.org

# 将容器 3000 端口暴露出来， 允许外部连接这个端口。
EXPOSE 3000
```
### 常用指令

#### FROM

从一个基础镜像开始制作镜像

```dockerfile
FROM <image> [AS <name>]
FROM <image>[:<tag>] [AS <name>]
FROM <image>[@<digest>] [AS <name>]

```

#### RUN
#### ENTRYPOINT 和 CMD

容器启动时会根据镜像所定义的一条命令来启动容器中的进程

```dockerfile
ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2

CMD ["executable","param1","param2"]
CMD ["param1","param2"]
CMD command param1 param2
```

#### EXPOSE

通过 EXPOSE 指令为镜像指定要暴露的端口


#### VOLUME

定义基于此镜像的容器所自动建立的数据卷。

#### COPY 和 ADD

从宿主机的文件系统里拷贝内容到镜像里的文件系统中

COPY 与 ADD 指令的定义方式完全一样

- ADD 能够支持使用网络端的 URL 地址作为 src 源，并且在源文件被识别为压缩包时，自动进行解压，而 COPY 没有这两个能力。
- 虽然看上去 COPY 能力稍弱，但对于那些不希望源文件被解压或没有网络请求的场景，COPY 指令是个不错的选择。

```dockerfile
COPY [--chown=<user>:<group>] <src>... <dest>
ADD [--chown=<user>:<group>] <src>... <dest>

COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
```

### 实用技巧

#### 构建时变量

```sh
# --build-arg 制定参数
docker build --build-arg TOMCAT_MAJOR=8 --build-arg TOMCAT_VERSION=8.0.53 -t tomcat:8.0 ./tomcat
```

```dockerfile
FROM debian:stretch-slim

# 声明参数
ARG TOMCAT_MAJOR
ARG TOMCAT_VERSION

# 使用参数
RUN wget -O tomcat.tar.gz "https://www.apache.org/dyn/closer.cgi?action=download&filename=tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz"
```
#### 环境变量

```dockerfile
FROM debian:stretch-slim

# 环境变量设置的实质，其实就是定义操作系统环境变量
# 在运行的容器里，一样拥有这些变量，而容器中运行的程序也能够得到这些变量的值
ENV TOMCAT_MAJOR 8
ENV TOMCAT_VERSION 8.0.53

RUN wget -O tomcat.tar.gz "https://www.apache.org/dyn/closer.cgi?action=download&filename=tomcat/tomcat-$TOMCAT_MAJOR/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz"
```
#### 构建缓存

```sh
# 默认开启缓存，可以通过 --no-cache 禁用
docker build --no-cache ./webapp
```
#### .dockerignore

不打包进入 image 文件。

```
.git
node_modules
npm-debug.log
```

## Docker Compose
### 安装
### 编写配置

```yml
version: '3' # 制定 docker compose 版本

services: # service 作为配置最小单元

  webapp:
    build: ./image/webapp
    ports:
      - "5000:5000"
    volumes:
      - ./code:/code
      - logvolume:/var/log
    links:
      - mysql
      - redis

  redis:
    image: redis:3.2

  mysql:
    image: mysql:5.7
    environment:
      - MYSQL_ROOT_PASSWORD=my-secret-pw

volumes:
  logvolume: {}
```
### 启动停止

```sh
# 启动，和 run 一样，默认在前台运行，需要加 -d
docker-compose up -d

# 停止，停止所有的容器，并将它们删除，同时消除网络等配置内容
docker-compose down
```
### 常用配置

#### 依赖声明

只有当被依赖的容器完全启动后，Docker Compose 才会创建和启动这个容器。

```yml
 webapp:
    depends_on:
      - redis
      - database
```

#### 文件挂载

```yml
 nginx:
    image: nginx:1.12
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./webapp/html:/webapp/html
```

#### 使用数据卷

#### 配置网络

#### 端口映射

```yml
 nginx:
    ports:
      - "80:80"
      - "443:443"
```

#### 多个服务共享卷

> 比如一个服务的assets，另一个nginx的服务要使用这些静态资源，如何共享？

```dockerfile
version: '3'
services:
  nginx:
    volumes:
      - asset-volume:/var/lib/assets
  asset:
    volumes:
      - asset-volume:/var/lib/assets

volumes:
  asset-volume:
```


- 使用宿主机中转

```docker
version: '3'
services:
  nginx:
    volumes:
      - ./assets:/var/lib/assets
  asset:
    volumes:
      - ./assets:/var/lib/assets
```

## k8s

Kubernetes 的概念，如何构建 Docker 镜像并通过 Kubernetes 进行部署，控制应用程序部署，添加 AI 服务以扩展应用程序以及保护和监视集群和应用程序。