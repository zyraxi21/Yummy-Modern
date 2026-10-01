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

- 基于 Jekyll 4.4，通过 GitHub Actions 构建并部署到 GitHub Pages
- 基于 Bootstrap 5（由原始 Bootstrap 3 升级）
- 保留开源项目页和侧边栏模块；支持按配置获取公开项目或启用 GitHub metadata
- 支持可配置的 Disqus 评论；未填写 `disque` 时不会加载
- 时间线形式的博客列表
- 收藏常用库、工具和书籍的书签页面
- 自动根据文章标题生成文章目录
- 支持代码复制、KaTeX 公式和 Mermaid 图表

## 安装与配置

环境要求：Node.js 22.13+（推荐 24）、npm 10+、Ruby 3.4+ 和 [Bundler](https://bundler.io/)。

1. Fork 本项目并克隆到本地
2. 运行 `npm ci` 安装前端依赖
3. 运行 `npm run build` 构建前端静态资源
4. 运行 `bundle install` 安装 Jekyll 依赖
5. 修改 `_config.yml` 中的站点设置
6. 在 `/_posts` 中添加文章
7. 在仓库 Settings → Pages 中将 Source 设为 GitHub Actions，然后提交到自己的仓库

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

在 `_config.yml` 中填写 `github_username` 或 `github_orgs`，运行 `npm run fetch:projects` 可生成 `_data/projects.json`；项目列表优先读取这份数据。也可通过 `projects` 配置静态列表。

如需使用 GitHub metadata，将 `jekyll-github-metadata` 加入 `plugins`，并填写 `repository: 用户名/仓库名`。模板默认关闭此插件，使未配置仓库身份的生产构建也能完成；插件在生产环境需要明确的仓库身份，参见 [官方配置说明](https://github.com/jekyll/github-metadata/blob/main/docs/configuration.md)。

#### Disqus 评论

在 `_config.yml` 中填写 `disque` 后，首页、博客和文章页会加载 Disqus 评论；留空时不加载。

#### 书签模块

收藏内容只需编辑 `bookmark.md`。

#### 自定义关于页面

可以自由修改 `about.md` 来介绍自己。

## 贡献者

原始模板贡献者：

- [DONGChuan](https://github.com/DONGChuan)
- [Mojtaba Koosej](https://github.com/mkoosej)
- [shahsaurabh0605](https://github.com/shahsaurabh0605)
- [Z-Beatles](http://www.waynechu.cn/)
- [LM450N](https://github.com/LM450N)
- [XhmikosR](https://github.com/XhmikosR)

## 许可证

本项目采用 Apache License 2.0。

原始版权：Copyright (c) 2016 DONG Chuan

详细内容见 [LICENSE](LICENSE)、[NOTICE](NOTICE) 和 [CHANGES.md](CHANGES.md)。

## 代码规范与检查

编辑源码后可运行以下命令；前端构建产物位于 `assets/vendor/`，由构建脚本生成：

```bash
npm run format       # 格式化 JavaScript、CSS、Liquid 模板与配置
npm run check        # ESLint、Prettier、JavaScript 与数学插件回归检查
npm run build
bundle exec jekyll build --strict_front_matter
npm run check:site   # 检查本地链接、资源及发布目录
```

子目录部署请设置 `_config.yml` 的 `baseurl`，例如 `/my-blog`，并使用对应路径验证：

```bash
bundle exec jekyll build --baseurl /preview --destination .cache/preview
npm run check:site -- --site .cache/preview --baseurl /preview
```

仓库的 push 和 pull request 只触发代码质量与构建检查。GitHub Pages 部署工作流仅供手动使用：先在仓库 Settings → Pages 中启用 Pages，并将构建来源设为 GitHub Actions，再在 Actions 中选择 `Deploy Jekyll site to Pages (manual)` → `Run workflow`。模板仓库不会随 push 自动部署。

竖屏使用带动画的导航侧栏；文章目录通过右下角的浮动玻璃按钮打开，博客分类显示为可换行的筛选按钮。

浏览器回归检查需要 Python 3.9+ 与 Playwright，覆盖复制、公式、图表、分类、目录、导航及 320–768px 竖屏布局：

```bash
python -m pip install playwright==1.63.0
python -m playwright install chromium
python tests/browser_smoke.py
# 使用已安装的 Chrome 时：python tests/browser_smoke.py --browser-channel chrome
```

规范约定、修改范围和检查结果见 [代码检查记录](docs/CODE_QUALITY.md)。
