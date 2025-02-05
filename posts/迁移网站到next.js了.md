---
title: "迁移网站到nextjs了"
description: "将个人博客从 Typecho 迁移到 Next.js，使用 TypeScript 和 Tailwind CSS 构建静态网站，并部署到 Vercel，提升访问速度与 SEO 友好性。同时分享迁移过程、优缺点对比，以及优化方向。"
tags: ["网站建设","前端开发"]
category: 杂七杂八
createdAt: "2025-02-05"
updatedAt: "2020-02-05"
---

![网站迁移到nextjs了](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/%E7%BD%91%E7%AB%99%E8%BF%81%E7%A7%BB%E5%88%B0nextjs%E4%BA%86.png)

之前 blog 一直用的是 typecho + [pinghsu](https://github.com/chakhsu/pinghsu) 主题，并且部署在自己家里的 NAS 上。说实话，体验挺好的。主题简洁大方，typecho 用作 blog 管理也很方便，后台逻辑清晰易用。但是用到现在还是发现了三个问题：

1. 家里发生了几次断电、断网事件，虽然很快就恢复了，但是也导致了网站服务中断了一段时间。
2. 在 SEO 上似乎不太友好
3. 我想学一点前端了

So，趁着春节假期，在 ChatGPT 的帮助下，用 nextjs + typescript + tailwind 写了一个静态网站，可以直接部署在 vercel 上。新的网站可以说是  [pinghsu](https://github.com/chakhsu/pinghsu) 的不完美复刻。目测还没实现的功能有：

- [ ] 搜索
- [ ] 评论
- [ ] 文章无配图时自动获取配图
- [ ] 单栏页面视图
- [ ] 文章后的版权声明

等。

但是也有一些新的优点：

- [x] 现在是静态网站了，部署成本变低了
- [x] 因为是纯静态网站，所以访问速度似乎变快了一点
- [x] SEO 友好
- [x] 支持流程图（似乎我也不怎么在 blog 里使用流程图）



不多说了，放上 [项目地址](https://github.com/thedogb/PingRay) ，代码比较乱，还请大佬们多多提意见呐。



顺便交换一波友链：

网站：栖木的网络日志

地址: https://thedoga.tech

网站说明：要像树一样，树只会向上生长



最后问个 SEO 的问题，我的 blog 一直没有被 google 索引，给的判定是「已抓取 - 尚未编入索引」，这个是说我的页面质量低吗？这个能怎么解决啊？虽然 blog 内容不多，但都是自己认真写的啊。。。难受。

