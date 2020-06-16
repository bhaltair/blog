# git

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

## pull request


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
