# git

## rebase
> 保持一个commit状态

```
git add my-changed-files
git commit
git fetch upstream/master
git rebase upstream/master
git push -f origin

```

## diff

```git

	* git diff --cached 查看缓存区和本地仓库里的差异
	* git diff HEAD 查看已缓存和当前的区别
	* git diff 查看当前未缓存的和本地仓库里的区别
	* git diff --stat 显示摘要
	* git diff master..test 显示2个分支之间的差异

```

## rm
```

	* git rm file 将file从文件缓存区、本地目录中移除
	* git rm file --cached 只从缓存区移除，保存本地目录中的


```

## reset
```
撤销缓存区里的一个更改，例如 git reset HEAD -- a.js
```

## commit
```
	* git commit 提交的是暂存区里面的内容，也就是 Changes to be committed 中的文件
	* git commit -a 除了将暂存区里的文件提交外，还提交 Changes bu not updated 中的文件。
	* git commit -m "commit info" 给提交内容添加注释
	* git commit -am "commit info" 整合了git add和git commit -m
	* git commit --amend 修改上一次提交的信息


```

## branch

```

	* git branch 列出可用的分支
	* git branch a 创建a分支
	* git checkout -b a 检查a分支是否存在，不存在就创建，并且切换过去
	* git push origin :a 删除远程分支
	* git branch -d a 删除分支a
	* git merge 其它分支合并到当前分支
	* git checkout -b gh-pages origin/gh-pages 检出并且设置当前分支为远程分支gh-pages


```

## log
	* git log --oneline 紧凑查看
	* git log --graph 图形显示
	* git log a ^master 查看只在a分支里的修改
	* git log --grep 正则取一个log
	* git shortlog master 生成一个简报

## status

	* git status 查看当前状态，包括add,commit,modify,merge等信息

## Tag

	* git tag -a v1.0 打上v1.0

## remote
远程主机
	* git remote 列出远端的别名
	* git remote add remotename remotepath 以remotename命名remotepath
	* git remote rm remotename 删除别名为remotename的远程仓库
	* git fetch 只下载
	* git pull 下载并更新
	* git push remotename branch 推送本地分支branch到远程仓库remotename的branch分支

## reset 
回退到特定版本

	* git reset --hard HEAD~3 会将最新的3次提交全部重置


## log

	* git log --since=1.days  查看今天的更改

## checkout
未commit的文件回退到同线上一致的状态

	* git checkout 文件路径

