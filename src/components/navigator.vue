
<template>
    <div class="navBar" :class="hasBorder?'bdbottom':''" >
        <span class="left" @click="back"><img src="../assets/images/fh.png" alt="返回"></span>
        <span>{{title}}</span>
        <span class="right"><img src="../assets/images/kf.png" alt=""></span>
    </div>
</template>
<script>

export default {
    name: 'navigator',
    props:{
        title:String
    },
    data(){
        return{
            hasBorder:true
        }
    },
    beforeMount() {
        if (this.$route.name == 'shop-index' || this.$route.name == 'shop-my') {
            this.hasBorder = false
        }
    },   
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        }
    } 

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