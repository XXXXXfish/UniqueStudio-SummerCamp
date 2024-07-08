# git

### commands

- git init 
- git add < filename > 添加该文件到暂存区
- git status 查看 Git 仓库当前状态
- git log 查看提交历史
- git config --global color.ui true
- git blame 追踪文件中每一行的变更历史
- git checkout <commit-hash> 回到哈希值为<commit-hash>的历史版本
- git restore 撤回
  - git restore +filename 将file撤回到最新提交的状态
  - git restore --staged +filename 撤销文件add的更改
  - git restore . 撤销所有没有commit的更改
  - git restore --source=<commit> <file> 回退到待提交哈希值为<commit>的状态
  - git restore -i 交互界面选择还原
- git branch
  - git branch -a 查看所有分支
  - git branch +name 创建新分支
  - git checkout +name 切换到该分支
  - git checkout -b +name 创建并切换到新分支
  - git merge +name 把该分支与当前分支合并
  - git branch -d +name 删除该分支
  - git branch -m 当前分支名 新分支名