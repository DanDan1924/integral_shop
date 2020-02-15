
<template>
    <div class="tabbar">
        <van-tabbar v-model="active" route>
            <van-tabbar-item replace to="/">
                <span>主页</span>
                <img slot="icon" v-if="active==0"  src='../assets/images/index_active.png' alt="">
                <img slot="icon" v-if="active!=0"  src='../assets/images/index.png' alt="">
            </van-tabbar-item>
            <van-tabbar-item  replace to="/my" >
                <span>会员</span>
                <img slot="icon" v-if="active==1"  src='../assets/images/my_active.png' alt="">
                <img slot="icon" v-if="active!=1"  src='../assets/images/my.png' alt="">
            </van-tabbar-item>
        </van-tabbar>
    </div>
    
</template>
<script>

export default {
    name: 'tabbar',
    props:{
        // active:Number
    },
    data(){
        return{
            active:0
        }
    },
    beforeMount() {
        if (this.$route.name == 'shop-index') {
            this.active = 0
        }else if(this.$route.name == 'shop-my') {
            this.active = 1
        }
    },   
    components: {

        
    } 

};
</script>
<style lang="less" scoped>
    .tabbar{
        height: 50px;
    }
</style>