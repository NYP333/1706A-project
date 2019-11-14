<template>
    <div class="detail">
        <header>
            <ul>
                <li @click="clickToBack">返回</li>
                <h3>本书详情</h3>
                <li @click="clickToBook">书架</li>
            </ul>
        </header>
        <Item :item="newArr">
            <template v-slot:button>
                <button @click.stop="clickAddBook({newArr})">添加书架</button>
            </template>
            <template v-slot:classify>
                <p>分类：{{newArr.categoryName}}</p>
            </template>
        </Item>
    </div>
</template>

<script>
import Item from '@/components/item.vue'
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            newArr:[]
        }
    },
    components:{
        Item
    },
    created(){
        this.newArr = this.$route.query.obj;
        console.log(this.newArr);
    },
    methods:{
        clickToBook(){
            this.$router.push({
                path:'/index/book'
            })
        },
        clickToBack(){
            this.$router.go(-1)
        },
        ...mapMutations(['clickAddBook'])
    }
}
</script>

<style scoped>
    header{
        width: 100%;
        height: 44px;
        background: #333333;
    }
    header ul{
        width: 96%;
        color:#fff;
        line-height: 44px;
        margin:0 2%;
        display: flex;
        justify-content: space-between;
    }
    header ul li{
        font-size: 14px;
    }
    
</style>