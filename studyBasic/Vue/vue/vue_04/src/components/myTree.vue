<template>
    <div>
        <div>{{treeData.title}}</div>
        <ul>
            <tree v-for='treeData in treeData' :key='treeData.id'></tree>
        </ul>
    </div>
    
</template>

<script>
export default {
    name:'tree',
    props:['treeData']
}
</script>

<style>

</style>