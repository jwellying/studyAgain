#包描述文件（package.json）
创建一个包描述文件 (npm init [-y])
如果加上-y会自动生成，且包名不能包含中文或者大写字母
下载一个包
npm install jquery@2.2.0（版本号）--save(记录依赖)
npm 会根据package.json 中的依赖属性自动恢复依赖
npm install 简写：npm i
卸载一个包
npm uninstall jquery --save（删除依赖）
每次删除的时候要同依赖一起删除
查看包的信息
npm info jquery
全局安装只需要加-g即可
