<template>
    <div class="book">
        <header>
            <ul>
                <li>剩余金额：0纵横币</li>
                <li>推荐票：0张</li>
                <li>月票：0张</li>
            </ul>
            <button>￥充值</button>
        </header>
        <div class="dls">
            <ul>
                <li class="active">我的书架</li>
                <li>最近阅读</li>
            </ul>
            <div v-if="isShow">
                <Item v-for="(item,keys) in bookRack" :key="keys" :item="item"></Item>
            </div>
            <div v-else>
                暂无图书~
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Item from '@/components/item.vue'
export default {
    components:{
        Item
    },
    computed:{
        ...mapState(['bookRack','isShow'])
    }
}
</script>

<style scoped>
    header{
        display: flex;
    }
    header ul{
        flex:1;
        margin: 10px 0 10px 15px;
    }
    header ul li{
        font-size: 13px;
        color:#666;
        line-height: 20px;
    }
    header button{
        width: 50px;
        height: 30px;
        color:#fff;
        background:#ed554d;
        border:0;
        border-radius: 3px;
        margin: 10px 10px 0 0;
    }
    .dls ul{
        display: flex;
        width: 100%;
        height: 35px;
        background:#eee;
    }
    .dls ul li{
        flex:1;
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        border:1px solid #ccc;
    }
    .dls ul li.active{
        color:#ed554d;
        border-bottom: 2px solid #ed554d;
    }
</style>