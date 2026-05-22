# Aligna

<<<<<<< HEAD
AI Native Alignment Platform

---

## Project Overview

Aligna is an AI-native posture and recovery platform designed to help users improve physical alignment, posture awareness, and recovery efficiency through intelligent analysis and guided training.

---

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
=======
Aligna 是一个 AI 姿态训练与远程康复辅助系统。

用户可以通过训练计划、摄像头姿态检测、AI 动作纠错、语音播报等功能完成每日训练。

---

# 功能列表

- 用户登录 / 注册
- 训练计划管理
- 训练动作详情页
- 打卡系统
- MediaPipe Pose 姿态检测
- AI 动作纠错建议
- 语音播报
- 历史记录
- Excel 导出
- 日历提醒

---

# 技术栈

## 前端

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion

## 后端

- Next.js Route Handlers
- Supabase
- OpenAI API

## AI / 视觉

- OpenAI Responses API
- MediaPipe Pose

---

# 项目结构

```bash
src/
├── app/                # 页面
├── components/         # UI 组件
├── lib/                # 工具函数
├── lib/ai/             # AI 相关
├── lib/db/             # 数据库
├── types/              # TypeScript 类型
├── styles/             # 样式
└── app/api/            # API 接口
```

---

# 本地启动

## 1. 克隆项目

```bash
git clone https://github.com/your-name/aligna.git
```

## 2. 进入项目目录

```bash
cd aligna
```

## 3. 安装依赖

```bash
npm install
```

## 4. 配置环境变量

创建 `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
OPENAI_API_KEY=your_openai_key
```

## 5. 启动开发环境

```bash
npm run dev
```

打开：

```txt
http://localhost:3000
```

---

# API

## 获取训练计划

```txt
GET /api/plans
```

## 保存打卡

```txt
POST /api/checkin
```

## AI 姿态纠错

```txt
POST /api/ai/advice
```

---

# 开发规范

## Git 分支

- feature/ui
- feature/api
- feature/ai
- feature/posture

## Commit 示例

```bash
feat: 新增登录页
fix: 修复姿态检测异常
```

---

# 部署

推荐使用：

- Vercel
>>>>>>> fa6ce484908f2cb0c2ad480d06f33ca557f3588b
- Supabase

---

<<<<<<< HEAD
## Project Structure

```bash
app/
components/
hooks/
lib/
public/
services/
styles/
types/
=======
# TODO

- [ ] 登录系统
- [ ] 训练页
- [ ] AI 纠错
- [ ] 姿态识别
- [ ] Excel 导出
>>>>>>> fa6ce484908f2cb0c2ad480d06f33ca557f3588b
