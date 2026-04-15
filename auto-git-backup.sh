#!/bin/bash
# 自动备份脚本 - 每小时检查并备份到 GitHub

cd ~/Dropbox/Quokka-llm-wiki

# 检查是否有变更（包括未跟踪的新文件、删除、修改）
if [ -z "$(git status --porcelain)" ]; then
    exit 0  # 无任何变更，退出
fi

# 获取当前日期时间
DATE=$(date '+%Y-%m-%d %H:%M:%S')

# 添加所有变更
git add -A

# 提交（如果没有可提交的内容则跳过）
if git diff --cached --quiet; then
    exit 0
fi

git commit -m "backup: $DATE"

# 推送（先尝试 SSH，失败则切到 HTTPS 再试）
if ! git push origin main 2>/dev/null; then
    git remote set-url origin https://github.com/lihuluu/Quokka-llm-wiki.git
    git push origin main 2>/dev/null || echo "Push failed at $DATE, will retry later"
    git remote set-url origin git@github.com:lihuluu/Quokka-llm-wiki.git
fi
