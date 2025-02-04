---
title: "如何参加 kaggle 竞赛"
description: "Kaggle 竞赛入门：学习如何安装 Kaggle API、下载比赛数据、提交预测结果，并查看排行榜排名。本教程适用于 Kaggle 新手和机器学习爱好者，助你快速掌握 Kaggle 竞赛流程。"
tags: ["kaggle", "机器学习"]
category: 杂七杂八
createdAt: "2021-12-05"
updatedAt: "2021-12-05"
---


![Kaggle](https://cdn.jsdelivr.net/gh/thedogb/pic@master/upic/agmg9-whql1.png)

1. 安装 kaggle 包

```python
pip install kaggle
```



2. 配置 kaggle 

访问账户页面 `https://www.kaggle.com/<username>/account` ， 找到 `API` -> `Create New API Token` 。点击该按钮就可以下载一个配置文件  `kaggle.json` 。然后将该文件放到 `~/.kaggle/` 下。

![image-20211205134708948](https://raw.githubusercontent.com/thedogb/pic/master/uPic/2021-12-05/image-20211205134708948.png)



3. 从 kaggle 下载训练数据

以[泰坦尼克任务](https://www.kaggle.com/c/titanic/data) 为例，`kaggle` 官方在数据页面给出了用 `kaggle` 命令行下载数据的命令：

```shell
kaggle competitions download -c titanic
```

```shell
.
├── gender_submission.csv
├── test.csv
├── titanic.zip
└── train.csv
```



4. 提交答案

在[泰坦尼克任务](https://www.kaggle.com/c/titanic/data) 中，官方给出了一个样例答案文件：`gender_submission.csv` 。我们尝试直接提交它来看看成绩。在 [任务提交页面](https://www.kaggle.com/c/titanic/submit) ，官方也给出了提交答案的命令，我们稍微修改成我们可以使用的版本：

```shell
# kaggle competitions submit -c titanic -f submission.csv -m "Message"
kaggle competitions submit -c titanic -f gender_submission.csv -m "看看gender_submission的成绩"
```

立刻在[任务提交页面](https://www.kaggle.com/c/titanic/submit) ，就刷新出了我们的最新成绩：

![image-20211205140017347](https://raw.githubusercontent.com/thedogb/pic/master/uPic/2021-12-05/image-20211205140017347.png)

要注意，`kaggle` 官方对每天的提交次数进行了限制，每天最多只能进行10次提交。所以，在快速迭代的时候，最好也能自己在离线有一个初步评估，珍惜宝贵的提交次数。

5. 查看排名

`kaggle` 提供了一个 [leaderboard](https://www.kaggle.com/c/titanic/leaderboard#score) 页面用于展示不同用户的成绩排名。

![image-20211205195334837](https://raw.githubusercontent.com/thedogb/pic/master/uPic/2021-12-05/image-20211205195334837.png)

可以看到我们初次提交的排名是10965，嗯，作为第一次提交来说已经很不错了呢。

![image-20211205195434272](https://raw.githubusercontent.com/thedogb/pic/master/uPic/2021-12-05/image-20211205195434272.png)

与此同时，我们也可以看到排在最前面的那些人已经把这个任务的精度刷到1了。。