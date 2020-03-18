# 自动化构建

### 参考资料

- [持续集成](https://baike.baidu.com/item/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90/6250744)
- [grunt官网](https://www.gruntjs.net/)
- [travis-ci](https://travis-ci.org/)
- [GTmetrix](https://gtmetrix.com/)
- [持续集成服务 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)

# 自动化构建--在线电子书

基本要求：
- 在 GitHub 上创建 book 仓库
- 在 book 仓库的 master 分支放置电子书的章节和目录的 MarkDown 文档
- 在 book 仓库的 gh-pages 分支放置 gitbook build 后的 HTML 文件
- 电子书的前两章用手动构建，并完成第一次发布上线
- 用 Chrome 浏览器查看在线电子书
- 增加电子书的第三章，继续使用手动构建，并完成第二次发布上线
- 用 Chrome 浏览器查看更新后的电子书
- 体验手动构建的繁琐，考虑哪些构建过程可以自动化完成
- 阅读 Travis-CI gh-gage 自动部署文章
- 配置电子书 book 仓库启用 Travis-CI
- 获取个人 GitHub 账户开发者 API token
- 配置 book 仓库的 Travis-CI 环境变量
- 在 book 仓库的 master 分支，添加 .travis.yml 和 package.json 文件
- 在 book 仓库增加第四章的 MarkDown 文件
- 将 master 分支的变更推送 GitHub 服务器
- 在 Travis-CI 网站查看自动构建脚本执行的情况
- 用 Chrome 浏览器查看自动构建后的电子书

[参考代码](https://github.com/lishuangg/diybook)
[效果图](https://lishuangg.github.io/diybook/)

1. 手动构建电子书
- gitbook build 就是将md文件转化成html文件

2. 手动发布电子书
- 将生成的 _book 文件转移到其他临时目录下面
- 提交到远程仓库分支gh-pages上
> - git checkout -b gh-pages
> - 将临时目录里面的文件转移回到iBook文件下
> - git add .
> - git commit -m 'publish ibook'
> - git push -u origin gh-pages
- 增加新的章节

3. 引入自动化构建脚本 .travis.yml (切换到master分支下引入 git checkout master)

![travis.yml](../image/travis.png)

4. 修改 package.json ，并增加 travisCI 环境变量
- 生成package.json文件并修改 (npm init -y)

![travis-ci](../image/travis-ci(2).png)

> - npm i -D gitbook-cli
> - 将test脚本中的"test": "echo \"Error: no test specified\" && exit 1"修改为"test": "echo \"Error: no test specified\" && exit 0"
> - "author": "" 添加作者名字
> - "license": "ISC" 修改为 "license": "MIT"

![travis-ci](../image/travis-ci(1).png)

[Travis-CI gh-gage 自动部署文章](https://segmentfault.com/a/1190000015274243)

> - 关联travis-ci和github （https://travis-ci.com） ，然后找到电子书的仓库-->more option-->settings-->Environment Variables
> - 添加 BRANCH GH_REF USER_EMAIL USER_NAME 和 ACC_TOKEN
> - 找ACC_TOKEN，github-->settings-->Developer settings-->Personal access tokens-->New personal access token-->填写note，选择repo

5. 实现自动化构建

## 注意
- SUMMARY.md 电子书的目录文件即章节导航  （这些大写文件名的文件是具有特殊用途的文件）
- 全局安装 

    npm i -g gitbook-cli
    
    gitbook --version

    gitbook build 构建电子书（build就是将md文件转化为HTML文件）

    执行gitbook init 初始化GitBook，会在当前目录下生成 README.md 和 SUMMARY.md文件。SUMMARY.md是GitBook的目录文件。README.md是电子书介绍文件，必须存在。也可以先手动创建SUMMARY.md，再执行gitbook init，如果SUMMARY.md中配置的文件夹和文件不存在，就会自动创建文件夹和文件，已经存在的文件夹和文件不会被覆盖。一般情况下是先在gitbook-demo目录下执行gitbook init，然后将要制作文档的md文件放到gitbook-demo里，接着再修改SUMMARY.md。