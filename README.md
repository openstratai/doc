# Openstrat 文档

> Openstrat 官方文档网站，基于 docsify 构建，部署在 Cloudflare Pages

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange?logo=cloudflare)](https://pages.cloudflare.com)
[![Built with Docsify](https://img.shields.io/badge/Built%20with-Docsify-42b883?logo=markdown)](https://docsify.js.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/openstratai/doc)](https://github.com/openstratai/doc/commits)

## 📖 在线访问

🌐 **文档网站**: [https://docs.openstrat.ai](https://docs.openstrat.ai)  
🚀 **预览版本**: [https://openstrat-docs.pages.dev](https://openstrat-docs.pages.dev)

## 关于 Openstrat

Openstrat 是一个专注金融美股的 AI 软件，通过智能任务系统帮助投资者自动追踪股票技术分析信号。本仓库包含 Openstrat 的完整用户文档。

## 🚀 本地开发

### 环境要求

- **Node.js**: 16.x 或更高版本
- **npm**: 7.x 或更高版本（或使用 yarn）
- **Git**: 用于版本控制

### 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/openstratai/doc.git
cd openstrat-docs

# 2. 全局安装 docsify CLI
npm install -g docsify-cli

# 3. 启动本地服务器
docsify serve docs

# 4. 打开浏览器访问
# http://localhost:3000
```

### 开发提示

- 📝 修改 `docs/` 目录下的 Markdown 文件即可实时预览
- 🔄 保存文件后浏览器会自动刷新
- 🛠️ 主要配置文件在 `docs/index.html`

## 📁 项目结构

```
openstrat-docs/
├── docs/                           # 文档源文件目录
│   ├── .nojekyll                   # GitHub Pages 配置文件
│   ├── index.html                  # Docsify 主配置文件
│   ├── README.md                   # 文档网站首页
│   ├── _sidebar.md                 # 侧边栏导航配置
│   ├── _navbar.md                  # 顶部导航栏配置
│   ├── guide/                      # 用户指南目录
│   │   ├── task-system.md          # 任务系统概述
│   │   ├── technical-analysis.md   # 技术分析基础
│   │   ├── create-task.md          # 任务创建指南
│   │   ├── use-task.md             # 任务使用教程
│   │   └── manage-task.md          # 任务管理操作
│   ├── changelog.md                # 更新日志
│   ├── faq.md                      # 常见问题
│   └── contact.md                  # 联系我们
├── README.md                       # 项目说明（本文件）
├── .gitignore                      # Git 忽略文件
└── LICENSE                         # 开源许可证
```

## ✍️ 贡献指南

我们欢迎社区贡献来改善文档质量！

### 贡献方式

1. **报告问题**: 在 [Issues](https://github.com/openstratai/doc/issues) 中提交 Bug 或建议
2. **修复文档**: 提交 Pull Request 修复错误或改进内容
3. **添加内容**: 贡献新的文档章节或用例

### 提交 Pull Request

```bash
# 1. Fork 本仓库到你的 GitHub 账号

# 2. 克隆你的 Fork 仓库
git clone https://github.com/openstratai/doc.git

# 3. 创建新分支
git checkout -b feature/improve-docs

# 4. 进行修改并提交
git add .
git commit -m "docs: 改进任务创建说明"

# 5. 推送分支
git push origin feature/improve-docs

# 6. 在 GitHub 上创建 Pull Request
```

### 文档规范

- **语言**: 使用简体中文编写
- **格式**: 遵循 Markdown 语法规范
- **风格**: 保持简洁明了，使用合适的 emoji 增强可读性
- **结构**: 使用清晰的标题层级和目录结构
- **链接**: 确保内部链接正确，外部链接有效

## 🚀 部署说明

### 自动部署 (Cloudflare Pages)

本项目配置了自动部署流程：

- **平台**: Cloudflare Pages
- **生产分支**: `main`
- **构建命令**: 无需构建（静态文件）
- **输出目录**: `docs`
- **触发方式**: 推送到 `main` 分支自动部署

### 部署配置

| 配置项                 | 值                 |
| ---------------------- | ------------------ |
| Framework preset       | None / Static HTML |
| Build command          | 留空               |
| Build output directory | `docs`             |
| Root directory         | 留空               |

### 预览部署

- **主分支**: 自动部署到生产环境
- **其他分支**: 自动创建预览部署
- **Pull Request**: 自动生成预览链接用于审查

## 🛠️ 自定义配置

### 主题定制

编辑 `docs/index.html` 文件来自定义：

- 🎨 **主题颜色**: 修改 `themeColor` 配置
- 📝 **网站标题**: 修改 `name` 配置
- 🔍 **搜索功能**: 配置 `search` 插件
- 📱 **响应式**: 已默认开启移动端适配

### 插件功能

当前启用的插件：

- ✅ **全文搜索**: 支持中文搜索
- ✅ **代码复制**: 一键复制代码块
- ✅ **分页导航**: 上一页/下一页
- ✅ **字数统计**: 显示阅读时间
- ✅ **图片缩放**: 点击图片放大
- ✅ **Emoji 支持**: 丰富的表情符号

## 📊 网站统计

- 📈 **访问分析**: 集成 Cloudflare Analytics
- 🔍 **搜索数据**: 内置搜索统计
- 📱 **设备统计**: 移动端访问数据
- 🌍 **地域分布**: 全球用户分布

## 🔗 相关链接

### Openstrat 产品

- 🏠 [官方网站](https://openstrat.ai)
- 📱 [下载 APP](https://apps.apple.com/us/app/openstrat/id6502381334)

### 开发资源

- 📚 [主代码仓库](https://github.com/openstratai/doc)
- 🐛 [问题反馈](https://github.com/openstratai/doc/issues)
- 💬 [讨论区](https://github.com/openstratai/doc/discussions)

### 技术文档

- 📖 [Docsify 文档](https://docsify.js.org)
- ☁️ [Cloudflare Pages](https://pages.cloudflare.com)
- 🎨 [Markdown 指南](https://www.markdownguide.org)

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

## 🤝 致谢

感谢以下开源项目：

- [Docsify](https://docsify.js.org) - 文档网站生成器
- [Cloudflare Pages](https://pages.cloudflare.com) - 静态网站托管
- [GitHub](https://github.com) - 代码托管平台

## 📞 联系我们

- 📧 **邮箱**: docs@openstrat.ai
- 💬 **微信群**: 扫描官网二维码加入
- 🐦 **Twitter**: [@OpenstratAI](https://twitter.com/OpenstratAI)

---

<div align="center">

**💡 提示**: 这是文档网站的源码仓库。如果你想查看用户文档，请访问 [在线文档网站](https://docs.openstrat.ai)

Made with ❤️ by Openstrat Team

</div>
