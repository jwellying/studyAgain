
(function(window){
    // 三种状态
    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'
    // 定义构造函数
    function Promise(executor){
        const self = this;
        self.state = PENDING;
        self.data = undefined;
        self.callbacks = [];
        // 定义resolve函数
        function resolve(value){
            if(self.state != PENDING){
                return
            }else{
                setTimeout(()=>{
                    // state改变
                    self.state = RESOLVED;
                    // data改变
                    self.data = value;
                    // 传递结果给回调函数
                    if(self.callbacks.length>0){
                        self.callbacks.forEach(callback=>{
                            callback.onResolved(value)
                        })
                    }
                })
            }
        }
        // 定义reject函数
        function reject(reason){
            if(self.state != PENDING){
                return
            }else{
                setTimeout(()=>{
                    // state改变
                    self.state = REJECTED;
                    // data改变
                    self.data = reason;
                    // 传递结果给回调函数
                    if(self.callbacks.length>0){
                        self.callbacks.forEach(callback=>{
                            callback.onRejected(reason)
                        })
                    }
                })
            }
        }
        // 执行函数立即执行
        try{
            executor(resolve,reject);
        }
        catch(error){
            reject(error);
        }
        
    }
    Promise.prototype.then = function(onResolved,onRejected){
        // 指定回调函数的默认值(必须是函数)
        // 如果不是函数那么给他添加默认函数
        onResolved = typeof onResolved === 'function' ? onResolved : value=>value; 
        onRejected = typeof onRejected === 'function' ? onRejected : reason=>{throw reason}

        const self = this;
        return new Promise((resolve,reject)=>{
            // 将处理的过程封装
            function handle(stateType){
                   // 判断result
                    // 如果是error，那就catch
                    // 如果是一个值，则为结果
                    // 如果是一个promise对象，则对象的值为结果
                    const result = stateType(self.data);
                    try{
                        if(result instanceof Promise){
                            result.then(value=>{
                                resolve(value);
                            },reason=>{
                                reject(reason);
                            })
                        }else{
                            resolve(result);
                        }
                    }
                    catch(error){
                        reject(error);
                    }
            }
            // 根据对象的state值，我们可能会有三种操作
            // 如果state为pending
            // 我们需要将回调函数存储起来
            // 如果state的不是我们应该讲接收到的数值进行处理
            if(self.state === PENDING){
                self.callbacks.push({
                    onResolved(){
                        handle(onResolved)
                    },
                    onRejected(){
                        handle(onRejected)
                    }
                })
            }else if(self.state ===RESOLVED){
                setTimeout(()=>{
                    handle(onResolved);
                    
                })
            }else{
                setTimeout(()=>{
                    handle(onRejected); 
                })
            }
        })
    }
    Promise.prototype.catch = function(onRejected){
        return this.then(undefined,onRejected);
    }
    Promise.resolve = function(value){
        return new Promise((resolve,reject)=>{
            if(value instanceof Promise){
                value.then(resolve,reject)
            }else{
                resolve(value)
            }
        })
    }
    Promise.reject = function(reason){
        return new Promise((resolve,reject)=>{
            reject(reason);
        })
    }



    window.Promise = Promise;
})(window)