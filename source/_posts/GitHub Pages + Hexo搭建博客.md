---
abbrlink: '0'
---
# Github Pages + Hexo 搭建博客
## 一、前言
这是一篇使用GitHub Pages和Hexo搭建免费独立博客的总结。

需掌握基础：
- [Git](http://git-scm.com/book/zh/v2)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Hexo](https://hexo.io/zh-cn/)
- [Markdown](http://www.appinn.com/markdown/#autoescape)

## 二、配置
### GitHub Pages仓库配置
1. **创建对应的仓库**

在自己的GitHub账号下创建一个新的仓库，命名为username.github.io（username是你的账号名)。

在这里，要知道，GitHub Pages有两种类型：User/Organization Pages 和 Project Pages，而我所使用的是User Pages。

简单来说，User Pages 与 Project Pages的区别是：

- User Pages 是用来展示用户的，而 Project Pages 是用来展示项目的。
- 用于存放 User Pages 的仓库必须使用username.github.io的命名规则，而 Project Pages 则没有特殊的要求。
- User Pages 将使用仓库的 master 分支，而 Project Pages 将使用 gh-pages 分支。
- User Pages 通过 http(s)://username.github.io 进行访问，而 Projects Pages通过 http(s)://username.github.io/projectname 进行访问。
2. **相关资料**
- [GitHub Pages Basics / User, Organization, and Project Pages
](https://help.github.com/articles/user-organization-and-project-pages/)
### Git
1. **安装Git**
- [官方安装教程文档](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)
2. **配置Git**

当安装完Git应该做的第一件事情就是设置用户名称和邮件地址。这样做很重要，因为每一个Git的提交都会使用这些信息，并且它会写入你的每一次提交中，不可更改：

```
$ git config --global user.name "username"

$ git config --global user.email "username@example.com"

```
对于user.email，因为在GitHub的commits信息上是可见的，所以如果你不想让人知道你的email，可以Keeping your email address private:
- 在GitHub右上方点击你的头像，选择”Settings”；
- 在右边的”Personal settings”侧边栏选择”Emails”；
- 选择”Keep my email address private”。

这样，你就可以使用如下格式的email进行配置：

```
$ git config --global user.email "username@users.noreply.github.com"

```

3. **相关资料**
- [安装Git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)
- [配置Git](http://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%88%9D%E6%AC%A1%E8%BF%90%E8%A1%8C-Git-%E5%89%8D%E7%9A%84%E9%85%8D%E7%BD%AE)
- [Setting your email in Git](https://help.github.com/articles/setting-your-email-in-git/)
- [Keeping your email address private](https://help.github.com/articles/keeping-your-email-address-private/)

### Git和GitHub
1. **git和github的区别**

git是一个版本控制的工具，而github有点类似于远程仓库，用于存放用git管理的各种项目。
2. **git与github建立连接**

为了能够在本地使用git管理github上的项目，需要进行一些配置，这里介绍SSH的方法。
- 检查电脑是否已经有SSH KEYS。

```
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist

```
默认情况下，public keys的文件名是以下的格式之一：id_dsa.pub、id_ecdsa.pub、id_ed25519.pub、id_rsa.pub。因此，如果列出的文件有public和private钥匙对（例如id_ras.pub和id_rsa），证明已存在SSH keys。

- 如果没有SSH KEY，则生成新的SSH KEY。

```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# Creates a new ssh key, using the provided email as a label

```
之后一路回车即可。

3. **向SSH-AGENT添加KEY**

首先确保ssh-agent可运行：

```
# start the ssh-agent in the background
$ ssh-agent -s
```
然后添加SSH key：

```
	
$ ssh-add ~/.ssh/id_rsa

```

4. **在GitHub添加SSH KEY**

首先，拷贝key：

```
clip < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your cllipboard

```
然后，在GitHub右上方点击头像，选择”Settings”，在右边的”Personal settings”侧边栏选择”SSH Keys”。接着粘贴key，点击”Add key”按钮。最后，测试链接：

```
$ ssh -T git@github.com
# Attempts to ssh to GitHub

```
如果你看到:

```
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```
就键入：yes。之后将会看到如下信息：

```
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.

```

5. **相关资料**
- [Generating SSH keys](https://help.github.com/articles/generating-ssh-keys/)
