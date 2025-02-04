---
title: "如何用 vscode 写 hugo 博客"
description: "想用 VS Code 写 Hugo 博客？这篇教程分享了 VS Code 适配 Hugo 的最佳插件、代码高亮配置，以及如何用 snippets 快速生成博客 meta 信息，提升写作与部署效率。适合 Hugo 博主与 Markdown 写作者！"
tags: ["vscode", "hugo", "blog"]
category: 杂七杂八
createdAt: "2020-12-05"
updatedAt: "2020-12-05"
---


![用vscode写hugo博客](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/ajmxg-qbr68.png)

## 一、插件



### 1. hugofy

可以直接在 vscode 中进行hugo的部署工作 直接用 `command shift + P` 唤出面板 输入 hugo 查找相应的命令即可

![81JG8h](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/81JG8h.png)



### 2. Hugo Language and Syntax Support

提供代码高亮, 除了 markdown 的代码高亮以外，还有 meta 信息的高亮



## 二、 通过 snippets 生成 hugo 的 meta 信息



通过 hugofy 的 `new post` 命令生成的新文章的 meta 信息太过简单，暂时没找到设置模板的地方，于是自己添加了一个 snippets。

关于 vscode 如何添加自定义 snippets 可以参考[官方教程](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets)

以下是我的 snippets



```json
{
	"hugo-meta": {
		"scope": "markdown,md,hugo",
		"prefix": "hugo-meta",
		"body": [
			"---",
			"title: \"${TM_FILENAME_BASE}\"",
			"date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}+08:00",
			"lastmod: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}+08:00",
			"draft: true",
			"keywords: []",
			"description: \"\"",
			"tags: []",
			"categories: []",
			"author: \"栖木\"",
			"",
			"# You can also close(false) or open(true) something for this content.",
			"# P.S. comment can only be closed",
			"comment: false",
			"toc: false",
			"autoCollapseToc: false",
			"# You can also define another contentCopyright. e.g. contentCopyright: \"This is another copyright.\"",
			"contentCopyright: false",
			"reward: false",
			"mathjax: false",
			"---"
		],
		"description": "hugo post meta data"
	}
}
```
