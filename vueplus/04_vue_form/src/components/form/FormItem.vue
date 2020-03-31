<template>
  <div class="formItem">
      <!-- 预留一个label位，用户可以自定义是否添加 -->
      <div class="content">
        <label v-if='label'>
            {{label}}
        </label>
        <slot></slot>
      </div>
      <span v-if='errMessage'>{{errMessage}}</span>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    // 拿到父辈的传值
    inject:['form'],
    data(){
        return {
            errMessage:''
        }
    },
    props:{
        label:{
            type:String,
            default:''
        },
        prop:String
    },
    // created(){
        // console.log(this.prop);
        // console.log(this.form.rules[this.prop]);
    //     let des = {
    //             [this.prop]:this.form.rules[this.prop]
    //         }
    //     console.log(des);
        
    // },
    mounted(){
        this.$on('validate',()=>{
            this.validate()
        })
    },
    methods:{
        validate(){
            
            // 获取校验的规则
            const rules = this.form.rules[this.prop];
            // 获取校验的数据
            const value = this.form.model[this.prop];
            // 进行校验
            let des = {
                [this.prop]:rules
            }
            let schema = new Schema(des);
            // 执行函数后返回的是一个promise对象
            return schema.validate({[this.prop]:value},errors=>{
             
                if(errors){
                    this.errMessage = errors[0].message;
                }else{
                    this.errMessage = ''
                }
            })
        }
    }
}
</script>

<style scope>
.formItem{
    padding-bottom: 20px;
    text-align: center;
}
.content{
    display: flex;
}
.formItem span{
    color: salmon;
}
</style>