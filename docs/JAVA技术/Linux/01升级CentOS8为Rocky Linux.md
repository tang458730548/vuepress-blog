### 01升级CentOS8为Rocky Linux

#### 具体操作
```
1、升级当前系统
dnf upgrade -y
安装后重启系统 reboot
2、下载脚本
curl -O https://raw.githubusercontent.com/rocky-linux/rocky-tools/main/migrate2rocky/migrate2rocky.sh
3、给脚本授权
chmod +x migrate2rocky.sh
4、运行脚本
bash migrate2rocky.sh -r
5、同步软件包
dnf distro-sync -y  
6、重启
reboot
查看版本
cat /etc/redhat-release
```