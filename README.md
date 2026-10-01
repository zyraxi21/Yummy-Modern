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
5. 按下方“站点设置”说明修改 `_config.yml`
6. 在 `/_posts` 中添加文章
7. 提交到自己的仓库，并按“使用方法”中的“部署到 GitHub Pages”手动部署

### 站点设置

`_config.yml` 使用 YAML 格式。保留字段名和缩进，只修改冒号后的值；暂时不用的可选功能可以留空。

| 字段                      | 用途与填法                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| `title`                   | 网站完整标题，用于浏览器标签和分享信息，例如 `'小明的博客'`                |
| `name`                    | 页面上显示的名称，例如 `'小明'`                                            |
| `description`             | 网站简介，用于搜索和分享信息                                               |
| `email`                   | 联系邮箱，例如 `hello@example.com`                                         |
| `location`                | 所在地，可留空                                                             |
| `company` / `company_url` | 公司名称和完整网址，可留空                                                 |
| `github_url`              | 页面上 GitHub 按钮的目标，例如 `https://github.com/your-name/`             |
| `url`                     | 正式网站的协议与域名，例如 `https://your-name.github.io`，不包含仓库子目录 |
| `baseurl`                 | 网站所在的子目录，以 `/` 开头且末尾不加 `/`；部署到域名根目录时填 `''`     |
| `favicon`                 | 站点图标文件名，文件放在 `assets/images/` 中，默认 `favicon.png`           |
| `social_image`            | 可选分享图片路径，例如 `/assets/images/share.png`；使用前先添加对应图片    |

例如，仓库名为 `your-name.github.io` 时，网站位于域名根目录：

```yaml
title: '小明的博客'
name: '小明'
description: '记录开发实践与学习笔记'
email: hello@example.com
github_url: https://github.com/your-name/
url: https://your-name.github.io
baseurl: ''
```

如果使用名为 `my-blog` 的普通项目仓库，访问地址为 `https://your-name.github.io/my-blog/`，则填写：

```yaml
url: https://your-name.github.io
baseurl: '/my-blog'
```

使用自定义域名并部署到根目录时，`url` 填完整域名（如 `https://example.com`），`baseurl` 填 `''`；域名还需要在 GitHub Pages 设置中配置。

可选功能按需启用：

| 字段              | 用途与启用方式                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| `github_username` | 要展示项目的 GitHub 用户名；填写后运行 `npm run fetch:projects`，并提交生成的 `_data/projects.json` |
| `github_orgs`     | 要展示项目的组织名称列表，例如 `[your-org]`；不用时保留 `[]`                                        |
| `repository`      | 仓库身份，格式为 `your-name/my-blog`；仅启用 GitHub metadata 插件时需要，操作见“开源项目模块”       |
| `disque`          | Disqus 的站点 shortname；留空时不加载评论，操作见“Disqus 评论”                                      |
| `navs`            | 导航条目；`href` 使用站内路径（如 `/blog`），无需重复添加 `baseurl`，`label` 填显示文字             |

保存配置后重新启动 Jekyll；修改 JavaScript 或 CSS 时，还需重新运行 `npm run build`。

### 本地预览

依赖和静态资源准备完成后运行：

```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 即可查看。

## 使用方法

### 部署到 GitHub Pages

1. 在 `_config.yml` 中填写正式网站的 `url` 和 `baseurl`，提交并推送到自己的仓库。
2. 在仓库 Settings → Pages 中将 Source 设为 GitHub Actions。
3. 在 Actions 中选择 `Deploy Jekyll site to Pages (manual)`，点击 `Run workflow`，选择 `main` 分支并运行。
4. 工作流完成后，在 Settings → Pages 中查看网站地址。

部署工作流会安装依赖、构建前端资源、严格构建 Jekyll，并发布到 Pages。每次更新网站后都需要再次手动运行；push 和 pull request 自动执行代码质量与构建检查。

如果部署到子目录，例如 `/my-blog`，可先在本地使用相同路径验证：

```bash
bundle exec jekyll build --strict_front_matter --baseurl /my-blog --destination .cache/preview
npm run check:site -- --site .cache/preview --baseurl /my-blog
```

### 新建文章

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

示例文章见本仓库的 `_posts` 目录。

> Jekyll 支持不同的目录结构。你可以在 `_posts` 下创建任意数量的文件夹，Jekyll 会自动查找其中的文章。

### 文章目录

标题级别与 `#` 数量一致：`#` 是一级标题，`##` 是二级标题，以此类推，最多六级。目录按实际标题级别缩进：

```markdown
关于这篇文章的简介……

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

# 另一个一级标题
```

如果不想要文章目录，可以在 Front Matter 中设置 **no-post-nav: true**。

### 开源项目模块

在 `_config.yml` 中填写 `github_username` 或 `github_orgs`，运行 `npm run fetch:projects` 可生成 `_data/projects.json`；项目列表优先读取这份数据。也可通过 `projects` 配置静态列表。

如需使用 GitHub metadata，将 `jekyll-github-metadata` 加入 `plugins`，并填写 `repository: 用户名/仓库名`。模板默认关闭此插件，使未配置仓库身份的生产构建也能完成；插件在生产环境需要明确的仓库身份，参见 [官方配置说明](https://github.com/jekyll/github-metadata/blob/main/docs/configuration.md)。

### Disqus 评论

在 `_config.yml` 中填写 `disque` 后，首页、博客和文章页会加载 Disqus 评论；留空时不加载。

### 书签模块

收藏内容只需编辑 `bookmark.md`。

### 自定义关于页面

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

竖屏使用带动画的导航侧栏；文章目录通过右下角的浮动玻璃按钮打开，博客分类显示为可换行的筛选按钮。

浏览器回归检查需要 Python 3.9+ 与 Playwright，覆盖复制、公式、图表、分类、目录、导航及 320–768px 竖屏布局：

```bash
python -m pip install playwright==1.63.0
python -m playwright install chromium
python tests/browser_smoke.py
# 使用已安装的 Chrome 时：python tests/browser_smoke.py --browser-channel chrome
```

规范约定、修改范围和检查结果见 [代码检查记录](docs/CODE_QUALITY.md)。
