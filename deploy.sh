#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git config --local user.name "whj"
git config --local user.email "emailwen@qq.com"

git push -f https://${access_token}@github.com/wenhongjie/wenhongjie.github.io.git master
# git push -f git@github.com:wenhongjie/wenhongjie.github.io.git master

cd -