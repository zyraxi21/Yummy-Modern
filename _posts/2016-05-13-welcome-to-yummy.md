---
layout: post
title:  "欢迎使用 Jekyll！"
date:   2016-05-13 13:25:35 +0200
categories: Jekyll
---

欢迎使用 Yummy Modern 作为你的 Jekyll 主题！

这篇文章带你完成站点配置、写下第一篇文章，并把网站发布到 GitHub Pages。你可以把它作为入门指南，准备好自己的内容后再替换或删除。

# Yummy Modern 能做什么

主题保留简洁的博客时间线、开源项目和书签页面，并提供深色模式、全站搜索、代码复制、数学公式和 Mermaid 图表。手机上可以通过导航侧栏切换页面，通过右下角的浮动目录阅读文章。

# 配置与本地预览

先 Fork 主题仓库并克隆到本地，安装 Node.js 22.13+、npm 10+、Ruby 3.4+ 和 Bundler。完整的环境准备步骤见 [README 的安装与配置](https://github.com/zyraxi21/Yummy-Modern#安装与配置)。

打开 `_config.yml`，把 `title`、`name`、`description`、`email` 等字段改为自己的信息。还要替换演示站的 `url` 和 `baseurl`，例如使用名为 `my-blog` 的普通项目仓库：

```yaml
url: https://your-name.github.io
baseurl: '/my-blog'
```

`url` 只包含协议和域名，仓库子目录交给 `baseurl`。如果仓库名为 `your-name.github.io`、站点部署在域名根目录，则使用 `baseurl: ''`。

在仓库目录中运行：

```bash
npm ci
npm run build
bundle install
bundle exec jekyll serve
```

保留模板默认配置时，访问 `http://localhost:4000/Yummy-Modern/`；使用上面的示例配置时，访问 `http://localhost:4000/my-blog/`。修改 `_config.yml` 后需要重新启动 Jekyll。

# 写下第一篇文章

在 `_posts` 中创建 Markdown 文件，文件名使用 `年-月-日-文章标识.md` 格式，例如 `2026-10-01-hello-jekyll.md`。文件顶部的两组 `---` 之间填写文章信息，之后再写正文：

```markdown
---
layout: post
title: '我的第一篇文章'
categories: [Jekyll]
tags: [入门, Markdown]
---

这是我的第一篇文章，记录今天的学习和实践。

# 开始记录

可以使用 **粗体**、列表、链接和代码块组织内容。

## 下一步

给文章添加更多内容，然后刷新浏览器查看效果。
```

标题级别与 `#` 的数量一致，主题会自动收集一级到六级标题生成目录。如果不需要目录，在文章顶部的配置中添加 `no-post-nav: true` 即可。

你可以参考 [Markdown 元素效果展示]({{ '/blog/markdown-effect-demonstration.html' | relative_url }})，查看代码、表格、公式和图表的实际排版。

# 发布到 GitHub Pages

1. 确认 `_config.yml` 中的 `url` 和 `baseurl` 已经替换为自己的正式网站配置。
2. 在 GitHub 仓库的 Settings → Pages 中，将 Source 设为 GitHub Actions。
3. 提交修改并推送到 `main` 分支，等待 `Deploy Jekyll site to Pages` 工作流完成。
4. 在 Settings → Pages 中查看访问地址；此后推送到 `main` 会自动更新网站。

新文章会自动出现在 [博客列表]({{ '/blog' | relative_url }}) 中，也会进入全站搜索索引。点击顶栏放大镜即可检索标题和正文；如果希望某篇文章不被搜索到，可在文章配置中添加 `search: false`。

# 许可证与来源

[Yummy Modern](https://github.com/zyraxi21/Yummy-Modern) 基于 DONG Chuan 的 [Yummy Jekyll](https://github.com/DONGChuan/Yummy-Jekyll) 修改而来，采用 Apache License 2.0。原始版权声明、许可证和修改说明保留在仓库的 `LICENSE`、`NOTICE` 和 `CHANGES.md` 中。

准备好之后，修改 [关于我]({{ '/about' | relative_url }}) 来介绍自己，从第一篇文章开始记录吧。
