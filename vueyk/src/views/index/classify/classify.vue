<template>
    <div class="classify">
        <ul>
            <li v-for="(item,keys) in navData" :key="keys" @click="clickTwoTab(keys)" :class="{con:keys === ind}">{{item}}</li>
        </ul>
        <div class="scroll">
            <Item v-for="(el,index) in newArr" :key="index" :item="el">
                <template v-slot:book>
                    <p>简介：{{el.description}}</p>
                </template>
            </Item>
        </div>
    </div>
</template>

<script>
import Item from '@/components/item.vue'
export default {
    data(){
        return {
            navData:['热门','新书','免费','完本'],
            ind:0,
            list:{},
            newArr:[]
        }
    },
    components:{ //局部注册组件
        Item
    },
    created(){
        this.$http.get('/api/data').then(res => {
            this.list = res.data;
            this.newArr = this.list['ranklist'+this.ind]
        })
    },
    methods:{
        clickTwoTab(keys){
            this.ind = keys;
            this.newArr = this.list['ranklist' + keys]
        }
    }
}
</script>

<style scoped>
    .classify{
        display: flex;
        flex-direction: column;
    }
    .classify ul{
        width: 100%;
        height: 58px;
        display: flex;
        justify-content: space-evenly;
    }
    .classify ul li{
        width: 22%;
        height: 40px;
        color:#444;
        background:#f2f2f2;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        margin:9px 0;
        border-radius: 3px;
    }
    .classify ul li.con{
        color:#f2f2f2;
        background: #ed554d;
    }
    .scroll{
        padding: 10px 8px;
    }
</style>