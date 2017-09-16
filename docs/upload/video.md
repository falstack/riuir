# [产品需求文档](/)

> 视频资源补档步骤

1. riuir.com 网站上的所有媒体资源托管在[七牛云](https://www.qiniu.com/)上
2. 七牛云支持多种资源上传方式，包括网页上传、ftp上传、cmd上传，我们选择 cmd 的方式
3. cmd 在 MacOS 下就是 iterm2 之类的命令行工具，Windows 下就是`命令提示符`
   > 这里介绍一下 Windows 平台下 cmd 的打开方式，以 Windows10 系统为例<br />
   > 1. 按下 windows 键
   > 2. 直接键盘输入 `cmd` 就会开始搜索
   > 3. 搜索结果会出现`命令提示符`这个应用，打开就行了
   > 4. 如果还不明白，可以看这里的[教程](http://www.192ly.com/pc/win10/win10-dk-cmd.html)
   > 5. Windows 其它系统可以自行百度一下, MacOS 下开启很简单，就不介绍了
4. 关于七牛云 cmd 上传工具 -> [qshell](https://github.com/qiniu/qshell)，提示一下几点：
   > 1. 介绍中只需要看`简介`,`下载`,`安装`,`密匙设置`就行了
   > 2. 下载的这个`qshell.exe`或`qshell-darwin-x64`无法运行在桌面上的，也不需要安装
   > 3. 只需要将这个软件包移动到指定文件夹(目录)下，就可以在该目录下，通过 cmd 工具运行
   > 4. cmd 命令行工具打开后，如何切换文件目录，记住这几个简单的命令<br/>
   > 输入`C:`进入 C 盘，输入`D:`进入 D 盘，输入指定的盘符加英文`:`，进入指定的系统盘<br/>
   > 输入`cd dirname`就会进入当前所在目录下的 dirname 文件夹<br/>
   > 输入`cd..` 就会返回上一级目录<br/>
   > 按下`↑`键可以自动填充你上一次输入的命令，`↓`键填充下一次输入的命令
5. 暂时不需要添加`qshell`所在目录到环境变量`PATH`
6. `qshell`介绍的页面里，比如这一句：
    ```shell
    $ qshell -m account ak sk
    ```
    前面的`$`代表`shell`命令，不要复制粘贴这个符号
7. `AccessKey`和`SecretKey`我会给你的，你在命令行里输入就行了
8. 假设`qshell`在`E:`盘的`upload`目录下，那么`upload`目录就是文件上传的根目录
9. 创建一个文件，名为`upload.json`，内容如下（重要：不可修改）
    ``` json
    {
      "src_dir"            :   "/Users/yuistack/Documents/Upload",
      "bucket"             :   "clannader",
      "overwrite"          :   true,
      "rescan_local"       :   true,
      "skip_suffixes"      :   ".DS_Store",
      "log_level"          :   "info",
      "file_type"          :   0
    }
    ```
10. 文件上传的根目录下，要为每一个番剧设立文件夹，将视频和图片等资源放在特定的文件夹下<br/>
    假设有个`攻壳机动队`的番剧，那么这个文件夹应该是这样的：
    > E:<br/>
    > |----- 其它文件夹<br/>
    > |----- upload （文件上传根目录）<br/>
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----- 其它番剧目录<br/>
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----- ghost-in-the-shell （番剧目录）<br/>
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----- other （其它资源目录）<br/>
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----- poster （视频封面目录）<br/>
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----- video （视频资源目录） <br/>
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|----- 720 （720P资源） <br/>
11. 就是上面这个结构了，也就是说每一次新建一个番剧的任务，都要新建一个文件夹<br/>
    文件夹名称要求英文，并且纯小写，不同单词间用`-`链接，番剧英文名可以百度
12. 视频如果是720P的，就在`video`目录下面新建一个叫`720`的文件夹，1080P同理
13. 视频资源和视频封面的命名规则：<br/>
    > 1. 名称：`"集数.文件后缀"`，如果番剧的第二季也是从第1集开始的，那么就要在第一集的集数后面累加<br/>
    > 如：叛逆的鲁鲁修R2 - 01，在这里就是 26.mp4
    > 2. 如果有超过9集的动画，那么第一集是 1.mp4 而不是 01.mp4   
14. 空间特性：如果某个资源以及上传成功了，那么即使在`upload`目录下删了这个资源，七牛云上的资源也不会被删除，因此上传完的资源就可以删除了以免占用本地空间
15. 如果已经上传了`1.jpg`，然后再上传一个`1.jpg`，那之前的`1.jpg`会被替换掉（必须路径也相同才会被替换）
16. 放入空间的资源不会自动上传，需要在命令行的文件上传根目录下输入命令才会上传，命令如下：<br/>
```shell
 qshell qupload upload.json
```
17. 请勿上传与网站无关的私人资源，因为七牛云空间做了防盗链设置，所有的资源只有在指定的域名下才能被访问
18. 有任何疑问可以直接问我，我会补充的