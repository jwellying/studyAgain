mongdb常用的指令
开启服务：net start MongDB（需要使用管理员身份启动命令行）
关闭服务：net stop MongDB（同上）
连接db：cmd输入->mongo
列出所有数据库：show dbs；
创建数据库：use 数据库名（不需要加';'）
使用数据库：use 数据库名;
删除数据库：db.dropDatabase()  （要先进入该数据库，才能进行删除）
查看当前使用的数据库：db（不需要加';'）
查看数据库集合：show collections；
创建数据库集合：db.createCollection("name")（不需要加';' 是个坑）
删除数据库集合：db.collection（你要删除的集合名）.drop()
增：
1、insert  db.dbName.insert({"属性名":"属性值"，插入多个属性},{增加多个对象})、
   save使用一致，save自带更新的作用
删 remove db.dbName.remove({"属性名":"属性值"})
改 update
查 db.dbNmae.find()

