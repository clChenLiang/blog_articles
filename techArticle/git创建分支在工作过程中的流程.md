# Git 新建开发分支流程

本文从实际情况出发，将 `git` 版本控制，在新建项目、建立分支、删除旧分支等一些流程中，基本操作流程整理如下：

## git 的标准操作流程（指新建开发分支、仓库)

### 一、 新建远程仓库
#### 0. 参考链接
[git服务器搭建](https://git-scm.com/book/zh/v1/服务器上的-Git-在服务器上部署-Git)
[廖雪峰 git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137583770360579bc4b458f044ce7afed3df579123eca000)
> 在远程服务器上创建新的仓库。目前大部分公司采用的 gitlab 等开源工具，可以可视化新建仓库。比较容易且方便。
#### 1. 创建仓库，既远程分支

```
git init NewProject
```
也可以加一些参数，如 `--bare` -- 添加裸仓库,没有工作区等
此时创建了一个空仓库，并没有任何东西，甚至连分支都没有
#### 2. 添加基本文件
```
git add README.md
git add .gitingnore
```
以及其它项目需要的基本文件
#### 3. 创建分支


### 二、 本地
一般情况下，我们都是在本地进行操作:
#### 1. 克隆仓库

```
git clone NewProjectGitAddress
```

#### 2. 拉取更新
`git clone` 下来的仓库，默认的是 `master` 分支，实际开发过程中，不可直接使用。需要单独建立新的分支。
通常情况下是拉取 `dev`/`develop` 分支。

### 三、 项目创建好后的新建分支基本流程

#### 1. 从 `remote/origin/develop` 更新最新本地  `develop` 分支

```
git pull develop
```
或者
```
git checkout origin/dev
```
#### 2. 拉取远程分支到本地
```
git checkout -b 本地分支名x origin/远程分支名x
```
该指令会将 `远程指定分支` 拉取到本地，并在本地创建了一个与远程分支关联的 `本地分支`。
如果想在本地创建，再向远程新建一个跟本地相关的分支，那么可以参考下面：
#### 2. 从本地 `develop` 分支检出将要创建的新分支

```
git checkout -b NewBranch
```
此时已经将 `dev` 分支最新内容作为 `NewBranch` 分支的基础内容了。

#### 3. 切换到新建的分支上去

没有意外的话，这一步是自动切换过来的

#### 4. 映射到远程相同分支，更改分支提交源

```shell 
git –set-upstream origin:NewBranch 
```
或者使用：
```
git -u push origin NewBranch
```
#### 5. 到这里基本已经完成了一个完整的 git 新建分支操作，建议此时将旧的分支删除掉，最起码本地是要删除的。
```
git branch -d oldBranch
```
#### 6. 远程弃用分支的删除
```
git push origin :remoteBranch
```
即可


