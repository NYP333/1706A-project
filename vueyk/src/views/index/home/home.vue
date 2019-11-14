<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,keys) in banData" :key="keys">
                    <img :src="require('@/assets/' + item.src)">
                </div>
            </div>
        </div>
        <div class="spn">
            <span>免费专区</span><span>女频精选</span>
        </div>
        <div class="cont">
            <h3>编辑力荐</h3>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import '@/mock/index.js'
import Item from '@/components/item.vue'
export default {
    data(){
        return {
            banData:[]
        }
    },
    created(){
        this.$http.get('/api/banner').then(res => {
            this.banData = res.data;
            this.$nextTick(() => {
                new Swiper('.swiper-container')
            })
        })
    },
}
</script>

<style scoped>
    .swiper-container{
        width: 100%;
        height: 150px;
    }
    .swiper-wrapper,
    .swiper-slide,
    img{
        width: 100%;
        height: 100%;
    }
    .spn{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-evenly;
    }
    .spn span{
        width: 46%;
        height: 40px;
        color:#fff;
        background:#7297c1;
        font-size: 13px;
        text-align: center;
        line-height: 40px;
        margin:10px 0;
        border-radius: 5px;
    }
    .spn span:last-child{
        background:#c39cc9;
    }
    .cont h3{
        border-left: 4px solid #e95e56;
        padding-left: 10px;
        margin: 20px;
    }
</style>