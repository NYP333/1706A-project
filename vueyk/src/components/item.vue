<template>
    <dl @click="clickToDetail(item)">
        <dt></dt>
        <dd>
            <h4><span>{{item.bookName}}</span><slot name="button"></slot></h4>
            <p>作者：{{item.authorName}}</p>
            <p>更新至：{{item.updteChapterName}}</p>
            <slot name="book"></slot>
            <slot name="classify"></slot>
        </dd>
    </dl>
</template>

<script>
export default {
    // props:['item']  不校验类型
    props:{
        item:{
            type:Object,
            // required:true, 设置参数是否必传
            // default:() => {} 默认值，数组和对象必须通过函数来return
        }
    },
    created(){
        let {item} = this;
    },
    methods:{
        clickToDetail(obj){
            // this.$router 和 this.$route 第一个包含所有的路由 第二个只包含当前的路由
            this.$router.push({  // params 必须和name配合使用 query 即可以和path配合也可以和name配合
                // name:'detail',
                // params:{
                //     id:this.item.bookId
                // }
                path:'/detail',
                query:{
                    obj
                }
            })
        }
    }
}
</script>

<style scoped> 
    dl{
        display: flex;
        padding:10px 10px;
        border-bottom: 1px solid #ccc;
    }
    dl dt{
        width: 80px;
        height: 100px;
        background:#ccc;
    }
    dl dd{
        flex:1;
        font-size: 13px;
        margin-left: 10px;
    }
    dl dd h4{
        display: flex;
        justify-content: space-between;
    }
</style>