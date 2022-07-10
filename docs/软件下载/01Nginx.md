1.  下载nginx包

>   [nginx最新下载地址](http://nginx.org/en/download.html)

2.  安装必须插件，命令如下：
```
yum install gcc gcc-c++ pcre-devel zlib-devel openssl-devel -y
```

3.  进入到nginx目录，编译
```
./configure
```
4.  安装

```
make && make install
```
