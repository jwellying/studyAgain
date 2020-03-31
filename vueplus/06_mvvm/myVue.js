// 实现vue的简单版
class Vue{
    constructor(options){
        // 保存选项
        this.$options = options;
        //保存数据 
        this.$data = options.data;
        // 实现响应式
        this.observe(this.$data);
        // 测试代码
        // new watcher(this,'foo');
        // this.foo;
        // 测试compile
        new Compile(options.el,this);
        if(options.created){
            options.created.call(this);
        }
    }
    observe(value){
        if(!value || typeof value !== 'object'){
            return 
        }
        Object.keys(value).forEach((key)=>{
            // 实现响应式处理
            this.defineReactive(value,key,value[key]);
            // 代理的实现
            this.proxy(key);
        })

    }
    defineReactive(obj,prop,value){
        // 递归的实现
        this.observe(value);
        // 为每一个key创建一个依赖容器
        const dep = new Dep();

        // 拦截数据
        Object.defineProperty(obj,prop,{
            get(){
                // console.log(prop+'属性被读取了');
                Dep.target && dep.addDep(Dep.target);
                return value;
            },
            set(newV){
                if(newV !== value){
                    value = newV;
                    // console.log(prop+'属性被更新');
                    dep.notify();
                }
            }
        })
    }
    // 将data里的属性定义到vue的根组件中
    proxy(prop){
        // console.log('proxy');
        
        Object.defineProperty(this,prop,{
            get(){
                // console.log(prop+'属性被读取了');
                return this.$data[prop];
            },
            set(newV){
                // console.log(prop+'属性被更新');
                this.$data[prop] = newV;
            }
        })
    }
}
class Dep{
    constructor(){
        // 存储所有的依赖
        this.watchers = [];
    }
    // 添加依赖
    addDep(watcher){
        this.watchers.push(watcher);
    }
    // 通知更新
    notify(){
        this.watchers.forEach(watcher=>{
            watcher.update();
        })
    }
}
class watcher{
    constructor(vm,key,cb){
        // 创建该实例时立刻将该实例与Dep绑定
        
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        
        Dep.target = this;
        // console.log(this);
        // 触发依赖收集
        this.vm[this.key];
        // 清空
        Dep.target = null;
    }
    update(){
        console.log(this.key+'更新了');
        this.cb.call(this.vm,this.vm[this.key]);
    }
}
