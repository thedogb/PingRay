---
title: "typecho blog 搭建"
description: "Typecho 博客搭建完整指南，涵盖 macOS 环境下 PHP、Nginx、PostgreSQL 的安装配置，详细讲解 Typecho 部署及主题安装方法，适合网站开发者和博客爱好者。"
tags: ["typecho", "网站建设"]
category: 杂七杂八
createdAt: "2021-12-03"
updatedAt: "2021-12-03"
---


## mac 安装过程

### php 环境[^1]

1. 安装php服务

```
brew install php
```

2. 启动服务

```
brew services start php
```

3. 替换系统自带的php-fpm

```
echo 'export PATH="/usr/local/opt/php/sbin:$PATH"' >> ~/.zshrc

source ~/.zshrc
```

4. 查看版本信息

```
php -v

php-fpm -v
```

### **nginx** 安装  [^1]

1. 安装nginx

```
brew install nginx
```

2.	启动nginx服务

```
brew services start nginx
```

3. 查看已启动的服务

```
brew services list
```

### 配置nginx [^1]

通过一下命令可以查看nginx.conf文件的位置

```
nginx -h
```

输出

```
nginx version: nginx/1.21.4
Usage: nginx [-?hvVtTq] [-s signal] [-p prefix]
             [-e filename] [-c filename] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/local/Cellar/nginx/1.21.4/)
  -e filename   : set error log file (default: /usr/local/var/log/nginx/error.log)
  -c filename   : set configuration file (default: /usr/local/etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file
```

打开/usr/local/etc/nginx/nginx.conf，在末尾可以看到

```
include servers/*;
```

它将同目录下的 servers 下的文件都包括进来了，所以我们可以在 servers 目录下创建新项目的配置文件 test.conf, 内容如下：

```
server {
    listen 8099;
    server_name localhost;
    root /home/www/php-project;
    rewrite . /index.php;
    location / {
    index index.php index.html index.htm;
    autoindex on;
    }
    #proxy the php scripts to php-fpm
    location ~ \.php$ {
        include /usr/local/etc/nginx/fastcgi.conf;
        fastcgi_intercept_errors on;
        fastcgi_pass 127.0.0.1:9000; 
    }
}
```

在上述的 `/home/www/php-project` 的目录下，我们创建一个index.php文件

```
vim /home/www/php-project/index.php
```

写入内容:

```
<?php
    phpinfo();
```

nginx 加载配置

```
nginx -s reload
```

浏览器访问：`localhost:8099` , 即可访问到关于php配置的信息。

### postgresql 安装与配置[^2]：

1. 安装postgresql 并启动服务

```
brew install postgresql
brew start postgresql
```

2. 设置管理员账户与权限

默认的管理员账户是 postgres， 先切换过去

```
sudo su - postgres
```

进入 psql 控制台

```
psql
```

先给 postgres 账户设置一个密码

```
\password postgres
```

2. 添加新的数据库用户 typecho

```
CREATE USER typecho WITH PASSWORD 'password';
```

3. 创建用户数据库 

```
CREATE DATABASE typecho OWNER typecho;
```

4. 是将 typecho 数据库的所有权限都赋予用户 typecho，否则 typecho 只能登录控制台，没有任何数据库操作权限。

```
GRANT ALL PRIVILEGES ON DATABASE exampledb to dbuser;
```

### typecho 安装

1. 在 nginx 上配置出一个新的虚拟空间，配置文件[^3]如下：

```
server {
    listen 80 default_server;
    server_name localhost;

    root /Users/bartender/WorkSpace/www/php-project;
    index index.html index.htm index.php;

    location / {
        index index.php;
        autoindex on;
    }


    location ~ .*\.php(\/.*)*$ {
        set $path_info "";
        set $real_script_name $fastcgi_script_name;
        if ($fastcgi_script_name ~ "^(.+?\.php)(/.+)$") {
                set $real_script_name $1;
                set $path_info $2;
        }
        fastcgi_param SCRIPT_FILENAME $document_root$real_script_name;
        fastcgi_param SCRIPT_NAME $real_script_name;
        fastcgi_param PATH_INFO $path_info;

        include fastcgi_params;
        fastcgi_intercept_errors on;
        fastcgi_pass 127.0.0.1:9000;
    }

}
```

2. 在虚拟空间 `/Users/bartender/WorkSpace/www/php-project` 下安装最新版的typecho

注意，直接 clone 最新版即可，官网下载的稳定版很久没更新了，不适配php8，clone 最新版可以少很多问题。

```
cd /Users/bartender/WorkSpace/www/php-project
git clone https://github.com/typecho/typecho.git
cp -r typecho/* .
```

3. 然后浏览器访问 http://localhost 进入安装界面，按照提示一步一步安装即可

![img](https://cdn.jsdelivr.net/gh/thedogb/pic@master/uPic/2021-12-03/install.png)

4. typecho 主题安装[^4]

Typecho 的主题文件存放在虚拟空间下的 `usr/themes` 中，我们只需要将我们喜欢的主题下载到该目录中，然后在设置中启用就可以。

```
cd usr/themes
git clone https://github.com/chakhsu/pinghsu.git # 我这里用的是 pinghsu，其他主题也一样
```

进入网站后台：控制台 -> 外观，启用该主题即可。

![image-20211203110945053](https://cdn.jsdelivr.net/gh/thedogb/pic@master/uPic/2021-12-03/image-20211203110945053.png)

## 参考文献：
[^1]: [php开发环境搭建](https://learnku.com/articles/35981)
[^2]: [postgresql 安装与配置](https://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html)
[^3]: [nginx 配置 php 环境](https://www.cnblogs.com/xiewenming/p/8109292.html)
[^4]: [typecho 安装主图](https://www.phpojbk.com/archives/3.html)
