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

### 配置gitlab
配置文件 /etc/gitlab/gitlab.rbs

### ssh传递文件
> scp local_file remote_username@remote_ip:remote_folder  
