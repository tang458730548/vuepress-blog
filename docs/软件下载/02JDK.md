1、下载JDK
> [JDK官网下载地址,推荐使用JAVA8](https://www.oracle.com/java/technologies/downloads/archive/)

2、安装,解压JDK
```
tar -xvf jdk-xxx
```

3、配置环境变量
```
vim /etc/profile

#配置如下内容
export JAVA_HOME=/xxx路径/jdk1.8.0_181
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

4、使生效

```
source /etc/profile
```