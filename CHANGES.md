# Yummy Modern 修改说明

本项目是原主题的修改与再分发版本，基于 Apache License 2.0 分发。

## 主要修改

- 将主题名称改为 Yummy Modern。
- 将 Jekyll 3 / Ruby 依赖升级到 Jekyll 4 / Liquid 4。
- 将 Bootstrap 3 升级为 Bootstrap 5，并补充兼容样式。
- 将 Bower 依赖替换为 npm 和 esbuild 构建流程。
- 使用 KaTeX 和 Mermaid 替换原主题的公式与图表处理方案。
- 增加代码复制、表格横向滚动和深色模式支持。
- 重新组织导航、开源项目页、书签页和关于页内容。
- 保留 Disqus 和 GitHub metadata 功能，并改为默认留空；移除 Google Analytics 集成。

## 涉及的主要目录

- `_config.yml`
- `_includes/`
- `_layouts/`
- `_posts/`
- `assets/css/`
- `assets/js/`
- `src/`
- `scripts/`
- `Gemfile`
- `package.json`
- `README.md`

## Apache License 2.0 说明

- 保留原始 LICENSE 和原始版权声明。
- 保留原主题来源：https://github.com/DONGChuan/Yummy-Jekyll
- 本项目以 Apache License 2.0 修改、复制和再分发。
- 本文件用于向使用者说明本项目不是原始作品本身。

## 2026-10-01 代码规范与竖屏适配

- 加入 EditorConfig、LF 换行约定、ESLint、Prettier 和 Liquid 模板格式化。
- 将内联页面行为拆分为 ES 模块，移除 jQuery；KaTeX 与 Mermaid 按文章内容加载。
- 修复目录锚点、完整分类匹配、剪贴板失败反馈和数学保护插件的未闭合代码处理。
- 统一资源、字体、RSS 和导航路径，支持 `baseurl`；排除开发源码与临时页面的发布。
- 采用配置驱动、分页、超时保护和原子写入的 GitHub 项目获取脚本。
- 加入窄屏导航菜单、正文前的折叠目录、紧凑博客时间线和独立内容横向滚动。
- 加入回归检查、生成站点检查和 GitHub Actions 质量检查。
- 按公式标记区分行内与独立公式，改善窄屏科学笔记的段落排版。
- GitHub metadata 插件改为按需启用，修复模板未配置仓库身份时的生产构建。

## 2026-10-01 移动端交互修复

- 滚动后的顶栏保留半透明玻璃背景。
- 将下拉菜单替换为带开合动画的导航侧栏，加入焦点循环和遮罩关闭。
- 选中分类在悬停和焦点状态保持主题背景与可读文字。
- 统一代码与行号的字号、行高和内边距。
- 窄屏文章目录改为右下角的浮动玻璃按钮和动画面板。
- 补充浅深色对比度、动画、焦点、模糊和行号对齐的浏览器回归检查。
