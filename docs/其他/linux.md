# Linux
## shell

### shells

- bash
- zsh
- fish
- tcsh

## Mac

### shell

- 安装iterm2
- 安装zsh
- 安装oh-my-zsh：开源的zsh配置文件

oh-my-zsh 下三个插件*autojump*、*zsh*-autosuggestion和*zsh*-syntax-highlightin

### LaunchPad

```
defaults write com.apple.dock springboard-columns -int 7
defaults write com.apple.dock ResetLaunchPad -bool TRUE;killall Dock
```

## 设置环境变量

修改~/.profile文件

export PATH=$PATH:[your path0]:[your path1]:[...]

[]去掉

设置生效 

source .profile

查看环境变量

echo $PATH


## 查看ubuntu版本
cat /etc/issue

## 启动-设置开机从文本启动 针对16.04
```
$ sudo systemctl set-default multi-user.target
执行如下命令启动到桌面：
$ sudo systemctl start lightdm
恢复默认图像界面启动
systemctl set-default graphical.target
```

## 用户-添加用户
```linux
使用adduser命令，自动创建用户和用户组
adduser pm

然后添加sudo
当然必须在root用户下，usermod -aG sudo pm

```


## 用户-设置超级用户  

```shell
sudo passwd root
输入当前用户密码
输两次root密码
```


## scp 传递文件
> scp local_file remote_username@remote_ip:remote_folder  


## nginx 

```shell
// nginx 指定配置文件运行
sudo nginx -c /usr/local/etc/nginx/nginx.conf

// 重启
sudo nginx -s reload
```


## mongodb

```linux

默认  
数据保存在/var/lib/mongodb
日志 /var/log/mongodb

配置文件  
/etc/mongod.conf
  systemLog.path
  storage.dbPath

重启
sudo service mongod start
sudo service mongod stop
sudo service mongod restart

to remove Data & logs
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```

## 服务器常用端口

![port.png](https://utools-1255885027.cos.ap-shanghai.myqcloud.com/%E6%88%AA%E5%B1%8F2020-06-15%20%E4%B8%8B%E5%8D%883.16.14.png)

## linux 常用命令

### grep
```
ls | grep '^doc' # 以 doc 开头
ls | grep 'js$' # 以 js 结尾
ls | grep 'REA.ME' # 匹配一个非换行符的字符
```
### sed 字符串操作
### ssh 登录
> ssh root@192.168.80.128
### top 系统状态
```
# 进程所占的系统资源
top



```

### free 内存占用

```
# 内存使用
free -h
```

### netstat 网络情况
```
# 网络情况
netstat -lnp

# 正在使用的端口
netstat -tlunp
```

### lsof 查看端口占用
> lsof -i tcp:8080

### usermod 用户与组

```
# 创建一个用户组(可以带上 -g 888 来在创建组的时候增加编号)
groupadd chenng
cat /etc/group
chenng:x:500:

# 修改组名称
groupmod -n newchenng chenng

# 修改组编号
groupmod -g 668 newchenng

# 删除用户组(必须先删除组里面的用户才能删除组)
groupdel newchenng

# 设置组密码
gpasswd chenng

# 创建一个用户
useradd -g sexy sdf
useradd -d /home/chenng chenng(没有指定用户组，会创建一个与用户名相同的用户组)
usermod -c dgdzmx sdf(增加注释)

# 修改一个用户所属用户组
usermod -g sexy chenng

# 删除用户
userdel jzmb(不会删除个人文件夹文件)
userdel -r jzmb(会删除个人文件夹文件)

# 设置用户密码
passwd chenng
```

### chmod 文件与权限

```
# 更改文件属组，-R 递归更改目录所有文件属组
chgrp [-R] 属组名 文件名

# 更改所属主，可以同时更改文件属组
chown [-R] 属主名:属组名 文件名

# 更改文件9个属性，r=4、w=2、x=1
chmod [-R] 770 文件或目录
chmod +x 文件或目录
chmod -x 文件或目录
```

### systemctl 服务管理

这些服务对应的启动脚本文件保存在 /usr/lib/systemd/system

```
# 让某个服务开机自启(.service可以省略)
systemctl enable crond.service

# 不让开机自启
systemctl disable crond

# 查看服务状态
systemctl status crond

# 启动某个服务
systemctl start crond 

# 停止某个服务
systemctl stop crond

# 重启某个服务
systemctl restart crond

# 重新加载服务配置文件
systemctl reload * 

# 查询服务是否开机启动
systemctl is-enabled crond
```

### rm 删除文件
### tail 动态查看日志

```
tail -f /var/log/mail.log /var/log/apache/error_log

```

### du 查看文件大小

```
# 查看文件大小
du -sh vue.css

# 查看文件夹内容大小，-s 显示统计
du -h 工具
```

### tar 打包解包

- -z 表示使用 gzip 压缩工具
- -c 压缩打包，-x 表示解压解包
- -v 表示可视化
- -f 后面跟文件名，表示压缩后的文件名为 filename，或当期需要解压文件 filename

```
# 打包
tar -zcvf dist_file source_dir

# 解包
tar -zxvf sourcefile
```

### find 查找文件

```
# 找命令
which mv

# 全局寻找文件，需要先安装 mlocate 并执行 updatedb 生成索引
locate nginx.conf

# 文件查找
find root_path -name '*.md'
```

### nohup 持续运行

```
# 后台运行
nohup python app.py > log_app.log 2>&1 &
```
### mkdir 创建文件夹

```
# 递归创建目录
mkdir -p test1/test2
```
### cat & less 查看文件

```
# 显示行号
cat -b index.html

# 交互式查看文件
less index.html
```
### cp 复制文件

```
# 复制目录及目录内所有项目
cp -r source_dir dist_dir
```

### curl

curl 命令的使用：HTTP请求、下载文件、FTP上传下载

```bash
# 下载文件
curl -O http://doc.zwwill.com/css/%E3%80%8Acss%E6%8F%AD%E7%A7%98%E3%80%8B.pdf

curl https://www.baidu.com/         # GET请求, 输出 响应内容
curl -I https://www.baidu.com/      # GET请求, 只输出 响应头
curl -i https://www.baidu.com/      # GET请求, 输出 响应头、响应内容
curl -v https://www.baidu.com/      # GET请求, 输出 通讯过程、头部信息、响应内容等

# POST 提交 JSON 数据（\表示命令语句还未结束, 换行继续）
curl -H "Content-Type: application/json"                \
     -d '{"username":"hello", "password":"123456"}'     \
     http://localhost/login

# POST 提交 表单数据
curl -F "username=hello"                \
     -F "password=123456"               \
     -F "head_image=@filepath.jpg"      \
     http://localhost/register

```


## shell 脚本

### echo
### 变量

```
# 声明 = 两边不能有空格
# 双引号可以有变量、可以出现转义字符；单引号不可以
name="chenng"

# 最好加 {}，直接写 $name 嵌入字符串会出问题
echo ${name} 

# 删除变量
unset name

# 获取字符串长度
string="abcd"
echo ${#string} # 4

# 提取子字符串
string="runoob is a great site"
echo ${string:1:4} # unoo
```
### 循环

```
# 遍历单词
for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}Script"
done

# 遍历文件
for file in `ls /etc`
do
  echo ${file}
done
```
### 数组

```
array_name=("value0" "value1" "value2" "value3")
echo ${array_name[0]} # value0
echo ${array_name[@]} # "value0" "value1" "value2" "value3"
echo ${#array_name[@]} # 4
```
### sh 脚本传参

```
# ./test.sh 1 2 3
echo "Shell 传递参数实例！";
echo "执行的文件名：${0}"; # ./test.sh
echo "第一个参数为：${1}"; # 1
echo "第二个参数为：${2}"; # 2
echo "第三个参数为：${3}"; # 3
echo "参数个数为：${#}" # 3
```
### 运算符

#### 算术

```
a=10
b=20

# 完整的表达式要被 ` ` 包含，表达式与运算符之间要有空格
val=`expr $a + $b`
echo "a + b : $val" # a + b : 30

val=`expr $a - $b`
echo "a - b : $val" # a - b : -10

val=`expr $a \* $b`
echo "a * b : $val" # a * b : 200

val=`expr $b / $a`
echo "b / a : $val" # b / a : 2

val=`expr $b % $a`
echo "b % a : $val" # b % a : 0

if [ $a == $b ]
then
   echo "a 等于 b"
fi

if [ $a != $b ]
then
   echo "a 不等于 b"
fi
```

#### 关系

```
a=10
b=20

if [ $a -eq $b ] # 数字相等
then
   echo "$a -eq $b : a 等于 b"
else
   echo "$a -eq $b: a 不等于 b"
fi

if [ $a -ne $b ] # 数字不相等
then
   echo "$a -ne $b: a 不等于 b"
else
   echo "$a -ne $b : a 等于 b"
fi

if [ $a -gt $b ] # 数字大于
then
   echo "$a -gt $b: a 大于 b"
else
   echo "$a -gt $b: a 不大于 b"
fi

if [ $a -lt $b ] # 数字小于
then
   echo "$a -lt $b: a 小于 b"
else
   echo "$a -lt $b: a 不小于 b"
fi

if [ $a -ge $b ] # 数字大于等于
then
   echo "$a -ge $b: a 大于或等于 b"
else
   echo "$a -ge $b: a 小于 b"
fi

if [ $a -le $b ] # 数字小于等于
then
   echo "$a -le $b: a 小于或等于 b"
else
   echo "$a -le $b: a 大于 b"
fi
```

##### 布尔

```
a=10
b=20

if [ $a != $b ]
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a == $b: a 等于 b"
fi

if [ $a -lt 100 -a $b -gt 15 ] # -a 与运算
then
   echo "$a 小于 100 且 $b 大于 15 : 返回 true"
else
   echo "$a 小于 100 且 $b 大于 15 : 返回 false"
fi

if [ $a -lt 100 -o $b -gt 100 ] # -o 或运算
then
   echo "$a 小于 100 或 $b 大于 100 : 返回 true"
else
   echo "$a 小于 100 或 $b 大于 100 : 返回 false"
fi
```

#### 逻辑

```
a=10
b=20

if [[ $a -lt 100 && $b -gt 100 ]] # 逻辑与
then
   echo "返回 true"
else
   echo "返回 false"
fi

if [[ $a -lt 100 || $b -gt 100 ]] # 逻辑或
then
   echo "返回 true"
else
   echo "返回 false"
fi
```

#### 字符串
```
a="abc"
b="efg"

if [ $a = $b ] # 字符串相等
then
   echo "$a = $b : a 等于 b"
else
   echo "$a = $b: a 不等于 b"
fi

if [ $a != $b ] # 字符串不相等
then
   echo "$a != $b : a 不等于 b"
else
   echo "$a != $b: a 等于 b"
fi

if [ -z $a ] # 字符串长度为0
then
   echo "-z $a : 字符串长度为 0"
else
   echo "-z $a : 字符串长度不为 0"
fi

if [ -n "$a" ] # 字符串长度不为0
then
   echo "-n $a : 字符串长度不为 0"
else
   echo "-n $a : 字符串长度为 0"
fi

if [ $a ] # 字符串不为空
then
   echo "$a : 字符串不为空"
else
   echo "$a : 字符串为空"
fi
```

### 函数

```
# 带有 return 语句
funWithReturn(){
    echo "这个函数会对输入的两个数字进行相加运算..."
    echo "输入第一个数字: "
    read aNum
    echo "输入第二个数字: "
    read anotherNum
    echo "两个数字分别为 $aNum 和 $anotherNum"
    return `expr $aNum + $anotherNum`
}
funWithReturn
echo "输入的两个数字之和为 $?"
```
### if-else

```
a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b" # 输出
else
   echo "没有符合的条件"
fi
```
### 输出重定向
### 综合应用
    - sed 修改文件
    - git lint

## 命令行 cli 

- autojump
- tldr
    - 控制台命令的协作备忘单
- pm2
- locate
- nodemon
- tree
- lazygit
- torrent
- httpie