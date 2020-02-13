
<template>
    <div class="navBar">
        <span class="left"><img src="../assets/images/fh.png" alt="返回"></span>
        <span>积分商城</span>
        <span class="right"><img src="../assets/images/kf.png" alt=""></span>
    </div>
</template>
<script>

export default {
    name: 'navigator',
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

};
</script>
<style lang="less" scoped>
.navBar{
    height: 44px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 15px;
    font-size: 15px;
    font-weight: bold;
    .left,.right{
        width: 20px;
        height: 20px;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>