rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:nikiiu/uu-ui-website.git &&
git remote add origin2 git@gitee.com:nikyu77/guuu-ui-website.git &&
git push -u -f origin2 master &&
git push -f -u origin master &&
cd -
echo https://nikiiu.github.io/uu-ui-website/index.html