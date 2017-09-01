### 设置环境变量

修改~/.profile文件

export PATH=$PATH:[your path0]:[your path1]:[...]

[]去掉

设置生效 

source .profile

查看环境变量

echo $PATH


### 查看ubuntu版本
cat /etc/issue

### 设置开机从文本启动 针对16.04
```
$ sudo systemctl set-default multi-user.target
执行如下命令启动到桌面：
$ sudo systemctl start lightdm
恢复默认图像界面启动
systemctl set-default graphical.target
```


### 设置超级用户  
```
sudo passwd root
输入当前用户密码
输两次root密码
```


### ssh传递文件
> scp local_file remote_username@remote_ip:remote_folder  
