# 自动部署脚本  

# 提交md文档
git pull
git add .
git commit -m "修改文档"
git push origin main
git checkout master # git checkout -b master origin master
git merge main

#构建
npm run docs:build

rm -rf ./asserts
cp -rf docs/.vuepress/dist/ ./
rm -rf docs/.vuepress/dist

git add .
git commit -m 'deploy'
git push origin master
