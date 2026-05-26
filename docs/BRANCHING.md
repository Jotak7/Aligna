# Git 分支规范

本项目采用固定功能分支，避免 A/B 两人改同一文件。

## 分支一览

| 分支 | 负责人 | 改动范围 |
|------|--------|----------|
| `main` | 共同 | 稳定可部署版本，仅通过 PR 合并 |
| `feature/api` | A | `app/api/**`、`lib/db/**`、Supabase 表与类型、打卡/计划接口 |
| `feature/ai` | A | `lib/ai/**`、`app/api/ai/**`、Prompt 与 OpenAI 调用 |
| `feature/posture` | A | 姿态检测规则、MediaPipe、`app/api/posture/**` |
| `feature/ui` | B | `app/**/page.tsx`、`components/**`、样式与动画 |

## 日常流程

### 1. 开始新任务前

```bash
git checkout main
git pull origin main
git checkout feature/api    # 按任务选分支，见上表
git pull origin feature/api
```

### 2. 开发并提交

```bash
git add .
git commit -m "feat(api): 新增 POST /api/checkin"
git push origin feature/api
```

### 3. 合并到 main

在 GitHub 上从对应 `feature/*` 向 `main` 提 Pull Request，两人互相 Review 后合并。

## Commit 前缀建议

| 前缀 | 用途 |
|------|------|
| `feat(api):` | 新接口或数据库 |
| `feat(ai):` | AI 相关 |
| `feat(posture):` | 姿态识别 |
| `feat(ui):` | 页面与组件 |
| `fix:` | 修复 Bug |

## 注意事项

- **不要**在 `main` 上直接开发业务功能。
- **不要**两人同时改同一个文件；冲突时在 PR 里协商。
- A 做接口时，在 PR 描述里写清请求/响应 JSON，方便 B 对接。

## 首次克隆后检出分支

```bash
git fetch origin
git checkout feature/api
git checkout feature/ai
git checkout feature/posture
git checkout feature/ui
```
