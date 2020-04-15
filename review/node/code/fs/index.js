const fs = require('fs');
const path = require('path');

// node中两个表示路径的全局变量
// console.log(__dirname);
// console.log(__filename);


// 实现一个目录树的功能
// 首先目录读取
function tree(){
    fs.readdir('../fs/',(err,data)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log(data);
            // 遍历返回的data数组
            for(let i = 0;i <data.length;i++){
                // 首先对文件或文件夹的路径拼接
                // let filePath = path.resolve('D:/Desktop/files/studyAgainreview/node/code/fs',data[i]);
                // 利用fs对象的stas类的方法可以判断
                fs.stat(data[i],(err,stats)=>{
                    if(err){
                        console.log(err);
                        
                    }else{
                        if(stats.isDirectory()){
                            console.log('isD');
                            
                            
                        }else{
                            console.log('isF');
                            
                        }
                    }
                })
            }
        }
    })
}

tree();