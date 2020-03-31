<template>
  <div>
      <label v-if='label'>{{label}}</label>
      <slot></slot>
      <p>{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject:['form'],
    data(){
        return {
            errorMessage:''
        }
    },
    props:{
        label:{
            type:String,
            default:''
        },
        prop:String
    },
    mounted(){
        this.$on('validate',()=>{
            this.validate();
        })
    },
    methods:{
       validate(){
        // 获取校验规则
        const rules = this.form.rules[this.prop];
        // 获取校验值
        const value = this.form.model[this.prop];
        // 开始校验
           const desc = {
               [this.prop]:rules
           }
           let schema = new Schema(desc);
           return schema.validate({[this.prop]:value},(errors)=>{
               if(errors){
                   this.errorMessage = errors[0].message;
               }else{
                   this.errorMessage = ''
               }
           })
       }
    }
}
</script>

<style>

</style>