<template>
    <div class="good">
        不知道从什么时候开始，<br>
        在每一个东西上面都有个日子，<br>
        秋刀鱼会过期，<br>
        肉酱也会过期，<br>
        连这个跳转页面也会在 <span>{{ num }}</span> 秒后过期。<br>
        我开始怀疑，<br>
        在这个世界上，<br>
        还有什么东西是不会过期的？<br>
    </div> 
</template>

<script setup>

import useGood from './hook/index'
const num = useGood(10)
</script>

<style scoped>
.good{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: black;
    font-size: 35px;
    line-height: 50px;
}
.good>span{
        font-weight: 900;
        color: dimgray;
    }
</style>