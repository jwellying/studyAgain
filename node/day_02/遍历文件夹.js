//首先获取fs、path
const fs = require('fs');
const path = require('path');
//修正文件或文件夹的路径
let myPath = path.resolve(process.argv[2]);

function readFiles(dir){
    try{
        //判断文件是否存在
        //这里使用同步的方式（一般推荐使用异步的方式）
        //同步使用try catch语句来接收错误
        fs.accessSync(dir,fs.constants.F_OK);
    
        let state = fs.statSync(dir);
        if(state.isFile()){
            // console.log('这是一个文件');
            console.log(dir);
            
        }else if(state.isDirectory()){
            // console.log('这是一个文件夹');
            let files = fs.readdirSync(dir);
            // console.log(files);
            files.forEach(file=>{
                readFiles(path.join(dir,file));
                // console.log(`${dir}\\${file}`);
            })
            
        }
    }catch(err){
        console.log(err);
        console.log('该文件或文件夹不存在');
    }
}
readFiles(myPath);
