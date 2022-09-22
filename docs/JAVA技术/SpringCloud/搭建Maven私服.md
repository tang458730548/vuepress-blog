### 如何搭建Maven私服

- 基于Linux系统下，安装Docker进行Maven私服搭建。docker的安装自行百度
- 基于dicker，下载nexus3，如下：
```
### 1.下载一个nexus3的镜像
docker pull sonatype/nexus3
### 2.将容器内部/var/nexus-data挂载到主机/root/nexus-data目录。
docker run -d -p 8081:8081 --name nexus -v /root/nexus-data:/var/nexus-data \n
--restart=always sonatype/nexus3
```
- 关闭防火墙,访问http://{ip}:8081
- 等级nexus3客户端，输入账号密码，密码可以进入容器查看
```
docker exec -it 容器id bash  #进入容器
cat /opt/sonatype/sonatype-work/nexus/admin.password
```
- 创建Maven私服
```
1、点击设置
2、创建仓库
3、选择maven2 hosted
4、选择Allow redeploy
5、创建maven私服账号
```
- 本地Maven setting.xml 设置server账号密码
```
<servers>
	<server>
        <id>xxx</id>
        <username>xxx</username>
        <password>xxx</password>
      </server>
  </servers>
```
- Maven工程添加maven私服配置，用于deploy jar包
```
<distributionManagement>
		<repository>
			<!--此名称要和.m2/settings.xml中设置的ID一致 -->
			<id>mayikt</id>
			<url>http://{ip}:8081/repository/mayikt-release/</url>
		</repository>
	</distributionManagement>

	<build>
		<plugins>
			<!--发布代码Jar插件 -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-deploy-plugin</artifactId>
				<version>2.7</version>
			</plugin>
			<!--发布源码插件 -->
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-source-plugin</artifactId>
				<version>2.2.1</version>
				<executions>
					<execution>
						<phase>package</phase>
						<goals>
							<goal>jar</goal>
						</goals>
					</execution>
				</executions>
			</plugin>
		</plugins>
	</build>
```
- 测试
```
    # 在所在项目终端输入命令 mvn deploy 进行jar包发布
    mvn deploy
```
- 如果发布成功，可以在nexus客户端进行查看jar包并且下载，如果发布失败，可能的原因如下：
```
1、400
```