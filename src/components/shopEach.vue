
<template>
    <div class="shop-each">
        <p class="title">精品推荐<img src="../assets/images/more.png" alt=""></p>
        <div></div>
    </div>
</template>
<style lang="less" scoped>
.shop-each{
    .title{
        height: 56px;
        line-height: 56px;
        color: #333;
        font-size: 20px;
    }
}
</style>
<script>

export default {
    name: 'shopEach',
    props:{
        // active:Number
    },
    data(){
        return{
            active:0
        }
    },
    beforeMount() {
        
    },   
    components: {

        
    } 

};
</script>
