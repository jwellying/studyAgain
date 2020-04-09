# vue中的三种watcher
+ 渲染watch
+ 普通watch
+ computed

core/observer/watchers.js
```js
 update () {
    /* istanbul ignore else */
    // this.lazy为true时，说明是computed
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) { //处理用户watch
      this.run()
    } else { //渲染watch
      queueWatcher(this)
    }
  }
```
# computed属性
如果用户编写了一个computed -->
initComputed() 创建时默认`computedWatcherOptions = { lazy: true }` -->
new Watcher() 将lazy：true作为识别参数传入赋值给dirty，内部通过dirty来判断 -->
通过definProperty来实现响应式

# watch的deep
其实就是通过递归来实现