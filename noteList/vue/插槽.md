# 插槽
匿名插槽

<slot></slot>
<template></template>

具名插槽

<slot name='header'></slot>
<template v-slot:header></template>

作用域插槽
子组件中
user也是子组件的数据
<slot :user='user'></slot>
父组件中
<template v-slot='slotProps'></template>

