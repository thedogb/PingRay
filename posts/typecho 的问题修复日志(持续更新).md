---
title: "typecho 的问题修复日志(持续更新)"
description: "Typecho 博客搭建常见问题修复指南，包括 HTTPS 访问设置、Sitemap 生成、robots.txt 配置、标签读取错误修复等详细解决方案，帮助站长优化 Typecho 站点，提高 SEO 友好度。"
tags: ["blog建设"]
category: 杂七杂八
createdAt: "2024-12-03"
updatedAt: "2024-12-03"
---




## 设置https访问

解决方案：

Typecho后台设置
登录Typecho后台 -> 设置 -> 基本 -> 站点地址改成https域名。

在编辑Typecho根目录下config.inc.php文件加入下面配置，不然网站后台还是会调用HTTP资源。

```
/** 开启HTTPS */
define('__TYPECHO_SECURE__',true);
```





## 无sitemap

解决方案：

下载[插件](https://github.com/wusongbuaa/typecho-sitemap)， 解压后，将Sitemap上传到Plugin目录。然后到typecho的后台启用插件。然后就有sitemap了。

sitemap地址：https://blog.thedoga.tech/sitemap.xml





## 无robots.txt

解决方案：

直接在网站根目录新建一个文件robots.txt, 内容如下

```text
User-agent: *
Disallow: /install/
Disallow: /config.inc.php
Disallow: /install.php
Disallow: /admin/
Sitemap: https://blog.thedoga.tech/sitemap.xml
```

当然你也可以按需更改，关于robots.txt的格式说明：[Google 如何解读 robots.txt 规范](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt?hl=zh-cn)



## 标签读取错误

![image-20241203084043665](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/image-20241203084043665.png)

解决方案：

编辑/app/var/Widget/Base/Contents.php， 找到filter函数，大约在500行左右。

报错原因是 cid和created两个字段未找到，添加默认值即可。

所以在前面加上

```php
$value['cid'] = $value['cid'] ?? '';
$value['created'] = $value['created'] ?? 0; /** 注意created是日期，默认值填个整数*/
```



![image-20241203084631766](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/image-20241203084631766.png)
