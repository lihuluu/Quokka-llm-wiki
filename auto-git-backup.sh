#!/bin/bash
# 自动备份脚本 - 每小时检查并备份到 GitHub

cd ~/Dropbox/Quokka-llm-wiki

# 检查是否有变更
if git diff --quiet && git diff --cached --quiet; then
    exit 0  # 无变更，退出
fi

# 获取当前日期时间
DATE=$(date '+%Y-%m-%d %H:%M:%S')

# 提交
git add .
git commit -m "backup: $DATE"

# 推送（使用 SSH 跳过代理问题）
GIT_SSH_COMMAND="ssh -o ProxyCommand=none" git push origin main 2>/dev/null || echo "Push failed at $DATE, will retry later"
