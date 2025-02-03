---
title: "Example Title"
description: "This is an example description"
tags: ["typescript", "markdown", "parser"]
category: 随笔
createdAt: "2024-12-01"
updatedAt: "2024-12-01"
---

# 如何获得无限的邮箱

![如何获取无限邮箱](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E6%97%A0%E9%99%90%E9%82%AE%E7%AE%B1.png)

最近在重听《内核恐慌》，听到了 Rio 的账号密码管理习惯是：针对每个网站只用单独的邮箱和随机生成密码，然后使用密码保管软件存储密码。

考虑到我目前的方法是随机生成密码+密码保管软件，So 为了提升安全性，我研究了一下如何获取无限的邮箱。

最终的解决方案是：利用域名邮箱 + Cloudflare 的邮件转发功能，将所有的邮件转发到我的主邮箱即可。

1. 进入 Cloudflare 的域名管理后台，找到电子邮件菜单

![Cloudflare 电子邮件菜单](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/a6a82e6c3cccf470a1d6757295ea1e25d9bf3de4_knock_capture_image.jpg)

2. 跳过入门指南
3. 启用电子邮件路由

![启用电子邮件路由](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/be21b320b29223c29e6a64db2434991c4824b398_knock_capture_image.jpg)

这会给你的域名 DNS 记录中添加 3 条 MX 记录和一条 TXT 记录。

4. 设置路由规则

打开 Catch-All， 并设置操作为「发送到电子邮件」同时设置目标位置为主邮箱

![设置 Catch-All](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/eb36f399967bd17f7041070716a828b8f6effffe_knock_capture_image.jpg)

5. 测试邮箱

现在理论上你已经拥有了无限的邮箱了，可以测试一下可用性。用你的任意一个邮箱，向你的域名邮箱（比如 xxx@域名）发送一条邮件试试。正常情况下，在几秒后，你的主邮箱就会收到你的测试邮件。回到「概述」页面，Cloudflare 很贴心地统计转发邮件的总量。

![f1af6712c26d28e594d4eeb1cb59dc3015ff9f8a_knock_capture_image](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/f1af6712c26d28e594d4eeb1cb59dc3015ff9f8a_knock_capture_image.jpg)
