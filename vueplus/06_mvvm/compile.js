class Compile{
    // el是编译模板 vm对应实例
    constructor(el,vm){
        this.$el = document.querySelector(el);
        this.$vm = vm;
        // 将模板的内容移到
        this.$fragment = this.nodeToFragment(this.$el);
        // 执行编译
        this.compile(this.$fragment);
        // 放回el中去
        this.$el.appendChild(this.$fragment);
    }

    // 元素截取
    nodeToFragment(el){
        // 创建一个fragment元素
        let fragment = document.createDocumentFragment();
        let child;
        while(child = el.firstChild){
            fragment.appendChild(child);
        }
        return fragment;
    }
    compile(fragment){
        let childNode = fragment.childNodes;
        childNode.forEach(node=>{
            if(node.nodeType===1){
                // 元素结点
                // console.log('编译元素是：'+node.nodeName);
                this.compileElement(node)
            }else if(this.isInter(node)){
                // console.log('编译元素是插值表达式'+node.textContent);
                this.compileText(node);
                
            }
            // 对node进行递归遍历
            if(node.children && node.childNodes.length>0){
                this.compile(node);
            }
        })
    }
    isInter(node){
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
    compileText(node){
        console.log(RegExp.$1);
        // 直接在这里写代码复用性不高
        // node.textContent = this.$vm[RegExp.$1];
        let Regexp = RegExp.$1;
        this.update(node,Regexp,'text');
    }
    update(node,reg,type){
        let updator = this[type+'updator'];
        // console.log(this.$vm);
        
        updator(node,this.$vm[reg]);
        // 测试响应式
        new watcher(this.$vm,reg,function(value){
            updator(node,value);
        })
    }
    textupdator(node,value){
        node.textContent = value;
    }
    htmlupdator(node,value){
        node.innerHTML = value;
    }
    modelupdator(node,value){
       node.value = value;
    }
    compileElement(node){
        // 是一个属性的数组
        let attrs = node.attributes;
        // console.log(attrs);
        
        // console.log(attr);
        // 遍历数组
        Array.from(attrs).forEach(attr=>{
            let attrName = attr.name;
            let value = attr.value;
            if(attrName.indexOf('v-')===0){
                let type = attrName.substring(2);
                this[type] && this[type](node,value);
            }else if(attrName.indexOf('@')===0){
                let type = attrName.substring(1);
                this.bindMethods(node,value,this.$vm,type);
            }
        })
        
    }
    text(node,value){
        this.update(node,value,'text');
    }
    html(node,value){
        this.update(node,value,'html');
    }
    model(node,value){
        this.update(node,value,'model');
        node.addEventListener('input',function(e){
            this.$vm.value = e.target,value;
        })
    }
    bindMethods(node,value,vm,type){
        let fn = vm.$options.methods[value];
        node.addEventListener(type,fn.bind(vm));
    }

}