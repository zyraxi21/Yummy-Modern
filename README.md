# Yummy Modern 主题

Yummy Modern 是基于原主题修改、现代化并重新分发的 Jekyll 主题，适合希望展示项目、记录笔记的开发者。

主题保留原模板的简洁 Bootstrap 风格，同时使用更现代的构建方式与前端依赖。

## 原项目与许可证

本项目是对原主题的修改和再分发版本。

- 原项目：Yummy-Jekyll
- 原始版权：Copyright (c) 2016 DONG Chuan
- 原项目地址：https://github.com/DONGChuan/Yummy-Jekyll
- 许可证：Apache License 2.0

根据 Apache License 2.0 第 4 条，本项目：

- 保留了原 LICENSE 和原始版权声明；
- 新增 NOTICE 文件，说明原始来源和修改情况；
- 新增 CHANGES.md，记录主要修改和涉及文件；
- 在主要页面和源码中保留来源提示，并明确本项目为衍生版本；
- 以 Apache License 2.0 重新分发修改后的代码。

## 主要功能

* 兼容 Jekyll 3.x/4.x 和 GitHub Pages
* 基于 Bootstrap 5（由原始 Bootstrap 3 升级）
* 保留开源项目页和侧边栏模块；支持 GitHub metadata 自动加载，填写配置后生效
* 支持可配置的 Disqus 评论；未填写 `disque` 时不会加载
* 时间线形式的博客列表
* 收藏常用库、工具和书籍的书签页面
* 自动根据文章标题生成文章目录
* 支持代码复制、KaTeX 公式和 Mermaid 图表

## 安装与配置

在本地使用前，需要安装 [Bundler](http://bundler.io/) 和 Node.js。

1. Fork 本项目并克隆到本地
2. 运行 `npm install` 安装前端依赖
3. 运行 `npm run build` 构建前端静态资源
4. 运行 `bundle install` 安装 Jekyll 依赖
5. 修改 `_config.yml` 中的站点设置
6. 在 `/_posts` 中添加文章
7. 提交到自己的 GitHub Pages 仓库

本地预览：

```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 即可查看。

## 使用方法

#### 新建文章

在 `_posts` 文件夹中创建以标准 Jekyll 格式命名的 `.md` 文件：

```
2016-01-19-i-love-yummy.md
```

在 Front Matter 中设置布局、标题、分类和标签：

```
---
layout: post
title: 文章标题
category: 分类
tags: [标签1, 标签2]
---
```

示例文章见原主题仓库的 `_posts` 目录。

> Jekyll 支持不同的目录结构。你可以在 `_posts` 下创建任意数量的文件夹，Jekyll 会自动查找其中的文章。

#### 文章目录

写作时建议遵循以下标题层级，目录会自动识别：

```
关于这篇文章的简介……

## 一级标题

### 二级标题

## 另一个一级标题
```

如果不想要文章目录，可以在 Front Matter 中设置 **no-post-nav: true**。

#### 开源项目模块

开源项目模块会自动获取 GitHub 仓库信息。在 `_config.yml` 中填写 `repository` 后启用；留空时不加载。

#### Disqus 评论

在 `_config.yml` 中填写 `disque` 后，首页、博客和文章页会加载 Disqus 评论；留空时不加载。

#### 书签模块

收藏内容只需编辑 `bookmark.md`。

#### 自定义关于页面

可以自由修改 `about.md` 来介绍自己。

## 贡献者

原始模板贡献者：

* [DONGChuan](https://github.com/DONGChuan)
* [Mojtaba Koosej](https://github.com/mkoosej)
* [shahsaurabh0605](https://github.com/shahsaurabh0605)
* [Z-Beatles](http://www.waynechu.cn/)
* [LM450N](https://github.com/LM450N)
* [XhmikosR](https://github.com/XhmikosR)

## 许可证

本项目采用 Apache License 2.0。

原始版权：Copyright (c) 2016 DONG Chuan

详细内容见 [LICENSE](LICENSE)、[NOTICE](NOTICE) 和 [CHANGES.md](CHANGES.md)。
