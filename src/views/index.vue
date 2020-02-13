<template>
    <div class="index">
        <navigator></navigator>
        <tabbar></tabbar> 
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" @change="onChange">
            <van-swipe-item class="van-swipe-item" v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                <span :class="current==index?'indicator-active':''" v-for="(image, index) in images" :key="index"></span>
            </div>               
        </van-swipe>  
        <!-- flex -->
        <div class="flex-contain">
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/jjgh.png" alt="">
                <p>家居个护</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/slbg.png" alt="">
                <p>商旅办公</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/jzjj.png" alt="">
                <p>家装厨具</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/hwyd.png" alt="">
                <p>户外运动</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/smsh.png" alt="">
                <p>数码生活</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/mywj.png" alt="">
                <p>母婴玩具</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/jfjs.png" alt="">
                <p>家纺家饰</p>
            </div>
            <div class="each-flex">
                <img class="image" src="../assets/images/index_flex/qcyp.png" alt="">
                <p>汽车用品</p>
            </div>
        </div>          
    </div>
</template>

<script>
import tabbar from '../components/tabbar.vue'
import navigator from '../components/navigator.vue'
import img1 from '../assets/images/banner/banner.png'

export default {
    name: 'shop-index',
    data() {
        return {
            images: [
                img1,
                img1,
                img1
            ],
            current: 0            
        }
    },
    created() {
        // if (this.$route.query.from == 'ucrm') {
        //     this.showHead = true
        // }

        // this.loasList('created')
        // this.loasType()
    },
    methods: {
        onChange(index) {
            this.current = index;
        }
    },
    components: {
        tabbar,
        navigator
    }
}
</script>

<style lang="less" scoped>
.my-swipe{
    width: 345px;
    height: 160px;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        img{
            width: 100%;
            height: 100%;
        }
    }  
    .custom-indicator{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 6px;
        span{
            width: 5px;
            height: 5px;
            margin: 0 3px;
            background-color: #ccc;
            display: inline-block;
            border-radius: 50%;
        }
        .indicator-active{
            width: 15px;
            border-radius: 2px;
            background-color: #fff;
        }
    }
} 

// flex
.flex-contain{
    display: flex;
    padding: 15px;
    flex-wrap: wrap;
    .each-flex{
        // flex:1;
        width: 25%;
        text-align: center;
        .image{
            width:35%;
        }
    }
}
</style>

