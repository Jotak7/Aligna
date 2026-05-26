# 元衡 Aligna

Aligna 是一个 AI 姿态训练与远程康复辅助系统。

用户可以通过训练计划、摄像头姿态检测、AI 动作纠错、语音播报等功能完成每日训练。

---

## 功能列表

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

## 技术栈

### 前端

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui（规划中）
- Motion（规划中）

### 后端

- Next.js Route Handlers
- Supabase
- OpenAI API

### AI / 视觉

- OpenAI Responses API
- MediaPipe Pose

---

## 项目结构

```bash
app/                # 页面与 API 路由
components/         # UI 组件
lib/                # 工具函数（Supabase、AI、数据库等）
public/             # 静态资源
```

规划中的目录：

```bash
lib/ai/             # AI 客户端与 Prompt
lib/db/             # 数据库类型与查询
types/              # 共享 TypeScript 类型
```

---

## 本地启动

### 1. 克隆项目

```bash
git clone https://github.com/your-name/aligna.git
```

### 2. 进入项目目录

```bash
cd aligna
```

### 3. 安装依赖

```bash
npm install
```

### 4. 配置环境变量

创建 `.env.local`：

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
OPENAI_API_KEY=your_openai_key
```

### 5. 启动开发环境

```bash
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)

---

## API

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/plans` | 获取训练计划列表 |
| POST | `/api/checkin` | 保存打卡记录（规划中） |
| POST | `/api/posture` | 保存姿态文本（规划中） |
| POST | `/api/ai/advice` | AI 姿态纠错建议（规划中） |

---

## 开发规范

### Git 分支

已在本地与远程创建并跟踪以下分支（详见 [docs/BRANCHING.md](docs/BRANCHING.md)）：

| 分支 | 负责人 | 用途 |
|------|--------|------|
| `feature/ui` | B | 页面、组件、动画 |
| `feature/api` | A | 后端接口、数据库、Supabase |
| `feature/ai` | A | AI 客户端、Prompt、`/api/ai/*` |
| `feature/posture` | A | MediaPipe、姿态规则、`/api/posture` |

**A 开始写接口时：**

```bash
git checkout feature/api
git pull origin feature/api
```

**B 开始写页面时：**

```bash
git checkout feature/ui
git pull origin feature/ui
```

合并一律通过 GitHub Pull Request 进入 `main`，不要在 `main` 上直接开发功能。

### Commit 示例

```bash
feat: 新增登录页
fix: 修复姿态检测异常
```

---

## 部署

推荐使用：

- [Vercel](https://vercel.com) — 前端与 API
- [Supabase](https://supabase.com) — 数据库与 Auth

---

## TODO

- [ ] 登录系统
- [ ] 训练页
- [ ] AI 纠错
- [ ] 姿态识别
- [ ] Excel 导出
