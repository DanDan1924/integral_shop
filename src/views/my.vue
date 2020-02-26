<template>
    <div>
        <div class="my-top">
            <div class="bg-image">
                <img src="../assets/images/my/bg.png" class="image" alt="">
            </div>
            <div class="top-info">
                <div class="navBar">
                    <span class="left"
                        ><img src="../assets/images/fh.png" alt="返回"
                    /></span>
                    <span>我的</span>
                    <span class="right"
                        ><img src="../assets/images/kf.png" alt=""
                    /></span>
                </div>
                <!-- 头像信息 -->
                <van-image class="portrait"
                    round
                    :src="portrait"
                />
                <p class="name">张明0606</p>
                <span class="property">36000积分</span>
                
            </div>
            <!-- 积分订单 -->
            <div class="integral-order">
                <span class="integral-order-title">积分订单</span>
                <div class="integral-order-list">
                    <div class="order-each" v-for="(item,index) in orderList" :key="index">
                        <div style="position:relative; display:inline-block;">
                            <img class="each-icon" :src="item.icon" alt="">
                            <span class="each-num" v-if="item.num!=0">{{item.num}}</span>
                        </div>
                        <p class="each-info">{{item.info}}</p>
                        
                    </div>
                </div>
            </div>          
        </div>
        <div class="my-list">
            
            <div v-for="(item,index) in myList" :key="index"  > 
                <router-link class="my-list-each" :to="{path:item.url}">
                    <img class="list-icon" :src="item.icon" alt="">
                    <div class="list-right">
                        <p>{{item.info}}</p>
                        <img class="right-icon" src="../assets/images/my/youjiantou.jpg" alt="">
                    </div>
                </router-link>
            </div>
            
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from "../components/tabbar.vue"
// 图片
import portrait from "../assets/images/my/portrait.png";
import orderImg1 from "../assets/images/my/dfk.png";
import orderImg2 from "../assets/images/my/dfh.png";
import orderImg3 from "../assets/images/my/dsh.png";
import orderImg4 from "../assets/images/my/ywc.png";
// my-list
import myImg1 from "../assets/images/my/jfjl.png";
import myImg2 from "../assets/images/my/jfdd.png";
import myImg3 from "../assets/images/my/lxkf.png";
import myImg4 from "../assets/images/my/szdz.png";
export default {
    name: "shop-my",
    data() {
        return {
            portrait:portrait,
            orderList:[
                {
                    icon:orderImg1,
                    info:'待兑换',
                    num:0
                },
                {
                    icon:orderImg2,
                    info:'已发货',
                    num:2
                },
                {
                    icon:orderImg3,
                    info:'待收货',
                    num:2
                },
                {
                    icon:orderImg4,
                    info:'已完成',
                    num:2
                },
            ],
            myList:[
                {
                    icon:myImg1,
                    info:'积分记录',
                    url:"/sign"
                },
                {
                    icon:myImg2,
                    info:'购物车',
                    url:"/my"
                },
                {
                    icon:myImg3,
                    info:'联系客服',
                    url:"/my"
                },
                {
                    icon:myImg4,
                    info:'设置收货地址',
                    url:'/addressManage'
                },
            ],
        };
    },
    created() {
        // if (this.$route.query.from == 'ucrm') {
        //     this.showHead = true
        // }
        // this.loasList('created')
        // this.loasType()
    },
    methods: {

    },
    components: {
        tabbar
    }
};
</script>
<style lang="less" scoped>
// nav start
.navBar {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    .left,
    .right {
        width: 20px;
        height: 20px;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
// nav end

.my-top {
    width: 100%;
    // height: 292px;
    height: 365px;
    background-color: #f1f1f1;
    // background: url(../assets/images/my/bg.png) top no-repeat;
    // background-size: 100%;
    position: relative;
    .top-info{
        position:relative;
        text-align: center;
        color: #fff;
    }
    .bg-image{
        position: absolute;
        width: 100%;
    }
    .portrait{
        width: 56px;
        height: 56px;
        margin: 30px 0 5px;
    }
    .name{
        font-size: 18px;
    }
    .property{
        display: inline-block;
        min-width: 70px;
        padding: 3px 20px;
        font-size: 13px;
        border:1px solid #fff;
        border-radius: 20px;
        margin-top: 10px;
    }
}
.integral-order{
    width: 355px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 15px 15px;
    box-sizing: border-box;
    position: relative;
    margin-top: 30px;
    .integral-order-title{
        font-weight: bold;
    }
    .integral-order-list{
        display: flex;
        text-align: center;
        justify-content: space-between;
        .order-each{
            position: relative;
            margin-top: 15px;
            .each-icon{
                width: 25px;
            }
            .each-info{
                font-size:13px;
            }
            .each-num{
                display: inline-block;
                min-width: 15px;
                height: 15px;
                line-height: 15px;
                box-sizing: border-box;
                text-align: center;
                padding: 0 2px;
                font-size: 8px;
                color: rgb(63, 104, 236);
                border-radius: 15px;
                border: 1px solid rgb(63, 104, 236);
                background-color: #fff;
                position: absolute;
                top: -6px;
                left: 17px;
            }
        }
    }
}
// my-list
.my-list{
    .my-list-each{
        display: flex;
        height: 55px;
        align-items: center;
        .list-icon{
            width: 25px;
            margin-left: 20px;
        }
        .list-right{
            border-bottom: 1px solid #f1f1f1;
            display: flex;
            justify-content: space-between;
            height: 100%;
            align-items: center;
            flex:1;
            padding-left: 5px;
            padding-right: 10px;
            .right-icon{
                width: 12px;
                height: 12px;
            }
        }
    }
}
</style>

