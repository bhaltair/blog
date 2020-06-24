## git 流程图

![liuchengtu.png](https://utools-1255885027.cos.ap-shanghai.myqcloud.com/%E6%88%AA%E5%B1%8F2020-06-16%20%E4%B8%8B%E5%8D%888.05.45.png)

## 查看 git 信息

```git
# 查看系统配置
$ git config --list

# git 中 D 向下翻一行  F 向下翻页  B 向上翻页  Q 退出

# 查看本地 git 命令历史
git reflog

# 查看提交历史
$ git log --oneline  
          --grep="关键字"
          --graph 
          --all      
          --author "username"     
          --reverse 
          -num
          -p
          --before=  1  day/1  week/1  "2019-06-06" 
          --after= "2019-06-06"
          --stat 
          --abbrev-commit 
          --pretty=format:"xxx"
          
# oneline -> 将日志记录一行一行的显示
# grep="关键字" -> 查找日志记录中(commit提交时的注释)与关键字有关的记录
# graph -> 记录图形化显示 ！！！    
# all -> 将所有记录都详细的显示出来
# author "username" -> 查找这个作者提交的记录
# reverse -> commit 提交记录顺序翻转      
# before -> 查找规定的时间(如:1天/1周)之前的记录   
# num -> git log -10 显示最近10次提交 ！！！    
# stat -> 显示每次更新的文件修改统计信息，会列出具体文件列表 ！！！
# abbrev-commit -> 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符 ！！！
# pretty=format:"xxx" ->  可以定制要显示的记录格式 ！！！
# p -> 显示每次提交所引入的差异（按 补丁 的格式输出）！！！

```

### git log 点线图

```git
*	表示一个 commit
|	表示分支前进
/	表示分叉
\	表示合入
|/	表示新分支

```

## git 常用命令

```git
# 查看工作区和暂存区的状态
$ git status 
# 将工作区的文件提交到暂存区
$ git add .  
# 提交到本地仓库
$ git commit -m "本次提交说明"
# add和commit的合并，便捷写法（未追踪的文件无法直接提交到暂存区/本地仓库）
$ git commit -am "本次提交说明"  
# 将本地分支和远程分支进行关联
$ git push -u origin branchName 
# 将本地仓库的文件推送到远程分支
$ git push
# 拉取远程分支的代码
$ git pull origin branchName 
# 合并分支
$ git merge branchName 
# 查看本地拥有哪些分支
$ git branch
# 查看所有分支（包括远程分支和本地分支）
$ git branch -a 
# 切换分支
$ git checkout branchName 
# 临时将工作区文件的修改保存至堆栈中
$ git stash
# 将之前保存至堆栈中的文件取出来
$ git stash pop

```

## 配置个人信息

```sh
# 显示中文
git config --global core.quotepath false

# 全局
git config --global user.name 'Chenng'
git config --global user.email 'ringcrl@foxmail.com'

# 单个项目
git config user.name 'Chenng'
git config user.email 'ringcrl@foxmail.com'
```

## git add

### 撤销 add

```sh
# 撤销某个文件
git reset HEAD -- file_path
# 简写
git reset file_path

# 撤销 gaa
git reset HEAD -- .
# 简写
git reset
```

## git merge

默认 fast-forward

- fast-forward：会在当前分支的提交历史中添加进被合并分支的提交历史（得先理解什么时候会发生快速合并，并不是每次 merge 都会发生快速合并）；
- --no-ff：会生成一个新的提交，让当前分支的提交历史不会那么乱；
- --squash：不会生成新的提交，会将被合并分支多次提交的内容直接存到工作区和暂存区，由开发者手动去提交，这样当前分支最终只会多出一条提交记录，不会掺杂被合并分支的提交历史

## git rebase

- git pull 之后提交会分叉，不好看
- git rebase 把我们本地的提交“挪动”了位置，整个提交历史就成了一条直线
- 本地的修改不再是基于之前迁出，而是相当于拉完最新代码再提交

> 保持一个commit状态

```
git add my-changed-files
git commit
git fetch upstream/master
git rebase upstream/master
git push -f origin

```

### 合并多个本地 commit

```sh
git rebase -i

# 将不想留下的 commit 信息，pick 改成 s
```

### 修改上一个 commit

```sh
# 已提交一个 commit 并且推到了远端

# 编辑上一个 commit，pick 改为 edit
git rebase -i HEAD^

# 编辑文件
gaa

# rebase
git rebase --continue

# 重写远端记录
gp -f
```

## git stash

?> 能够将所有未提交的修改保存至堆栈中，用于后续恢复当前工作区内容

使用场景： 当你接到一个修复紧急 bug 的任务时候，一般都是先创建一个新的 bug 分支来修复它，然后合并，最后删除。但是，如果当前你正在开发功能中，短时间还无法完成，无法直接提交到仓库，这时候可以先把当前工作区的内容 git stash 一下，然后去修复 bug，修复后，再 git stash pop，恢复之前的工作内容。

```git
# 将所有未提交的修改（提交到暂存区）保存至堆栈中
$ git stash 
# 给本次存储加个备注，以防时间久了忘了
$ git stash save "存储"
# 存储未追踪的文件
$ git stash -u

# 查看存储记录
$ git stash list

在 Windows 上和 PowerShell 中，需要加双引号

# 恢复后，stash 记录并不删除
$ git stash apply "stash@{index}"

# 恢复的同时把 stash 记录也删了
$ git stash pop "stash@{index}"

# 删除 stash 记录
$ git stash drop "stash@{index}"

# 删除所有存储的进度
$ git stash clear

# 查看当前记录中修改了哪些文件
$ git stash show "stash@{index}"

# 查看当前记录中修改了哪些文件的内容
$ git stash show -p "stash@{index}" 

```

## git diff

```git

	* git diff --cached 查看缓存区和本地仓库里的差异
	* git diff HEAD 查看已缓存和当前的区别
	* git diff 查看当前未缓存的和本地仓库里的区别
	* git diff --stat 显示摘要
	* git diff master..test 显示2个分支之间的差异
	* git diff --stat 29526d835 7743598d7 两个 commit 之间的对比

```

## git rm
```

	* git rm file 将file从文件缓存区、本地目录中移除
	* git rm file --cached 只从缓存区移除，保存本地目录中的


```

## git reset
```sh
# 撤销缓存区里的一个更改，例如 git reset HEAD -- a.js
* git reset --hard HEAD~3 会将最新的3次提交全部重置


# 移除所有修改
git reset --hard

# 移除所有未跟踪文件
git clean -fd

```




## git commit
```
	* git commit 提交的是暂存区里面的内容，也就是 Changes to be committed 中的文件
	* git commit -a 除了将暂存区里的文件提交外，还提交 Changes bu not updated 中的文件。
	* git commit -m "commit info" 给提交内容添加注释
	* git commit -am "commit info" 整合了git add和git commit -m
	* git commit --amend 修改上一次提交的信息

```

### commit 合并

```sh
# 找到【需要合并的 commit 】前的一个 hash
git rebase -i 5d39ff2
# 将想要忽略的 commit 前面的 pick 换成 s
pick asdfg xxx
s qwert xxx
```

### 撤销 一个 commit

```sh	
# 查看提交记录
git log
# commit d306b98be7883aabe267ee6940e8d7ee40090c90
# ...

# 回到最后一次提交的上一次
git reset --hard d306b98be
# 快捷方式
git reset head~1
```

### 提交到上个 commit

```sh
git add .
git commit --amend 修改上一次提交的信息
```

## git branch

```

	* git branch 列出可用的分支
	* git branch a 创建a分支
	* git checkout -b a 检查a分支是否存在，不存在就创建，并且切换过去
	* git push origin :a 删除远程分支
	* git branch -d a 删除分支a
	* git merge 其它分支合并到当前分支
	* git checkout -b gh-pages origin/gh-pages 检出并且设置当前分支为远程分支gh-pages


```

### 与 remote 连接/断开

```sh
# 查看链接到远程分支的情况
git branch -vv

# 断开当前链接与远程的链接
git branch --unset-upstream

# 当前 dev 分支链接远程分支
git branch --set-upstream-to=origin/dev
```

## git log

* git log --oneline 紧凑查看
* git log --graph 图形显示
* git log a ^master 查看只在a分支里的修改
* git log --grep 正则取一个log
* git shortlog master 生成一个简报
* git log --since=1.days  查看今天的更改

## git status

* git status 查看当前状态，包括add,commit,modify,merge等信息

## git tag

* git tag -a v1.0 打上v1.0

## git remote

远程主机

* git remote 列出远端的别名
* git remote add remotename remotepath 以remotename命名remotepath
* git remote rm remotename 删除别名为remotename的远程仓库
* git fetch 只下载
* git pull 下载并更新
* git push remotename branch 推送本地分支branch到远程仓库remotename的branch分支

## git checkout

未commit的文件回退到同线上一致的状态

### 撤销工作区文件修改

```sh
# 丢弃对 file1 的修改，checkout 有多重功能，这里的 -- 为了让 Git 知道后面的参数是文件名
git checkout -- file1

# 可以使用 . 撤销全部的修改
git checkout -- .

```

## pull request 流程


```sh
# 创建新分支，并指向 fork 项目的 master 分支
git checkout -b feat/ready_master upstream/master
# 切换到原有的分支中，这个分支中存储着我们修改的内容的 commit
git checkout feat/dev
# 查看 commit，copy commit
git log
# 切换回新分支
git checkout feat/ready_master
# 把提交拉取到新分支
git cherry-pick 0b0eadf36e22e6f682c852458a379b0acd93cdf2
# 查看一下分支对应情况，确保push的分支指向是对的。
git branch -vv
# 推送分支到自己 fork 的项目中
git push origin feat/ready_master
# 最后一步，打开网站，切换到最新分支，点击 New pull request，填写内容，申请就好了

```

## 项目代码体积情况

> git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done

## 腾讯鹅厂 git 手册

![git.jpg](https://utools-1255885027.cos.ap-shanghai.myqcloud.com/%E8%85%BE%E8%AE%AF%E9%B9%85%E5%8E%82git%E6%89%8B%E5%86%8C.jpg)