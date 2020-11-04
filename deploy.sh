# 自动部署脚本  

# 提交md文档
git checkout main
git pull
#构建
npm run docs:build
git add .
git commit -m 'deploy'
git push origin main