<template>
    <div class="first">
        <ul>
            <router-link to="/index/home" tag="li">首页</router-link>
            <router-link to="/index/classify" tag="li">分类</router-link>
            <router-link to="/index/rank" tag="li">排行</router-link>
            <router-link to="/index/book" tag="li">书架</router-link>
        </ul>
        <keep-alive exclude="classify">
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .first{
        display: flex;
        flex-direction: column;
    }
    .first>div{
        flex:1;
        overflow: auto;
    }
    .first ul{
        width: 100%;
        height: 44px;
        display: flex;
        background:#333;
    }
    .first ul li{
        flex:1;
        color:#a1a1a1;
        text-align: center;
        line-height: 44px;
    }
    .first ul li.router-link-active{
        color:#f2f2f2;
        background:#454545;
    }
</style>