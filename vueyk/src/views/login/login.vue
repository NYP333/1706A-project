<template>
    <div>
        <header>
            <ul>
                <li @click="clickToBack">返回</li>
                <h3>登录</h3>
                <li>注册</li>
            </ul>
        </header>
        <div class="ipt">
            <input type="text" placeholder="请输入手机号或用户名" v-model="name">
            <input type="text" placeholder="请输入登录密码" v-model="password">
        </div>
        <button @click="clickLogin">登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            password:''
        }
    },
    methods:{
        clickToBack(){
            this.$router.go(-1)
        },
        clickLogin(){
            let {name,password} = this;
            console.log(name,password)
            this.$http.post('/api/login',{name,password}).then(res => {
                console.log(res)
                if(res.data.code === 0){
                    //登录成功后将用户名存储至本地存储
                    window.localStorage.token = this.name;
                    this.$router.push({
                        //跳转的地址为路由守卫时传递的地址
                        path:this.$route.query.redirect
                    })
                }
            })
        }
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
    .ipt{
        margin: 50px 0;
    }
    .ipt input{
        width: 80%;
        height: 40px;
        margin:5px 10%;
        border:0;
        outline: none;
        border-bottom: 1px solid #ccc;
    }
    button{
        width: 80%;
        height: 40px;
        color:#ec9d9d;
        background:#df3d3d;
        margin:0 10%;
        border:0;
        border-radius: 3px;
    }
</style>