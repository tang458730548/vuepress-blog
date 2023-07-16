<h2> CentOS7 版本下安装mysql </h2>
1、下载rpm包

```
    wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.42-1.el7.x86_64.rpm-bundle.tar
```

2、安装
```
    1. 安装common
    rpm -ivh mysql-community-common-5.7.37-1.el7.x86_64.rpm

    2. 安装libs
    rpm -ivh mysql-community-libs-5.7.37-1.el7.x86_64.rpm

    3. 安装client
     rpm -ivh mysql-community-client-5.7.37-1.el7.x86_64.rpm

    4. 安装server
     rpm -ivh mysql-community-server-5.7.37-1.el7.x86_64.rpm
    
```

3、启动并且配置参数

```
    1. 启动
    systemctl start mysqld

    2. 查看他的临时密码
    vim /var/log/mysqld.log

    3. 登陆并重置密码
    SET PASSWORD FOR 'root'@'localhost' = PASSWORD('wV$2aAvkiWHBuina');
    GRANT ALL PRIVILEGES ON  *.* TO 'jxcp'@'%' identified by 'wV$2aAvkiWHBuina' WITH GRANT OPTION;
    flush privileges;

    4. 修改mysql默认配置
    innodb_buffer_pool_size=8G
    sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
    lower_case_table_names=1
    max_allowed_packet =1G
```
