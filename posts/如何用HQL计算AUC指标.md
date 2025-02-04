---
title: "如何用HQL计算AUC指标"
description: "使用 HQL 计算 AUC 指标的完整指南，涵盖 AUC 的两种定义，并提供在 Hive 环境下计算 AUC 的 SQL 代码示例，适用于机器学习模型评估和大数据分析。"
tags: ["机器学习", "HQL", "AUC"]
category: 杂七杂八
createdAt: "2024-11-06"
updatedAt: "2024-11-06"
---

![用HQL计算Auc](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/azuom-gfgjb.png)


AUC 在分类问题中是一个重要的指标，使用 python，调用相关库包的api可以很容易的计算这个指标。但是在工业界，我们往往更多使用的是 Hive 环境，如果能够用 HQL 直接计算 AUC，在很多时候都会方便不少。



## AUC 两种解释

1. AUC 表示 ROC 曲线下的面积
2. AUC 表示在样本中随机挑选一对正负样本，正样本的打分高于负样本的概率

关于两种解释的具体说明见参考文献吧，人家已经写得很好了。



## 用 HQL 计算AUC

借助 AUC 的概率解释，我们很容易就能写出 HQL 代码：

```sql
SELECT 
	'v1' as version
	, 1.0 * (SUM(rk * label) - SUM(label) * (SUM(label) + 1) / 2) / (SUM(1 - label) * SUM(label)) as auc
    , count(1)
FROM (
	SELECT 
	    label
        , pred as score
		, ROW_NUMBER() OVER (ORDER BY pred, rand()) AS rk
	FROM 
	(
	    select pred, label
	    from some.table
	) t1
) t2; 
```





## 参考文献

1. [深入理解AUC](https://tracholar.github.io/machine-learning/2018/01/26/auc.html)

