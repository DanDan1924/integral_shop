<template>
    <div class="shopList">
        <navigator title="家居个护"></navigator>
        <van-tabs
            v-model="active"
            animated
            line-height="0"
            title-active-color="rgb(63, 104, 236)"
        >
            <van-tab>
                <div slot="title" class="shop-list-tab">推荐</div>
                <div class="error">
                    <img src="https://pic.uhouzz.com/Avatar/20181210/584920b960fe3eaaaa4f16aadfee23c5oss.jpg" alt="">
                    <p>竟然什么也没找到</p>
                    <p>这大概是个慌无人烟的小岛吧...</p>
                </div>
                
            </van-tab>
            <van-tab>
                <div slot="title" class="shop-list-tab">积分</div>
                <div
                    class="shop-list-each"
                    v-for="(item, index) in list"
                    :key="index"
                >
                    <van-image class="image-p" fit="cover" :src="item.img" />
                    <div class="shop-list-right">
                        <p class="shop-title ellipsis2">{{ item.title }}</p>
                        <p class="price">
                            <span class="price-num">{{ item.price }}</span
                            > 积分
                        </p>
                        <p>市场价：{{ item.realPrice }}元</p>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
export default {
    name: "shop-list",
    data() {
        return {
            active: 0,
            list: [
                {
                    img: "https://img.yzcdn.cn/vant/cat.jpeg",
                    title: "欧莱雅透明质酸洗发露700ML",
                    price: 6000,
                    realPrice: 78
                },
                {
                    img: "https://img.yzcdn.cn/vant/cat.jpeg",
                    title: "欧莱雅透明质酸洗发露700ML",
                    price: 6000,
                    realPrice: 78
                }
            ]
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
        // onClick(name, title) {
        //     // Toast(title);
        // }
    },
    components: {
        navigator
    }
};
</script>
<style lang="less" scoped>
.shop-list-each {
    padding: 10px 15px;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: flex;
    .image-p {
        width: 150px;
        height: 150px;
        border: 1px solid #f1f1f1;
    }
    .shop-list-right{
        flex: 1;
        margin-left: 20px;
        color: #999;
        .shop-title {
            height: 42px;
            color: #333;
            font-size: 15px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .price{
            color:red;
            font-size: 13px;
            .price-num {
                    font-size: 18px;
                    font-weight: bold;
                }
        }
    }
    
}
.error{
    margin-top: 50px;
    text-align: center;
    img{
        width: 250px;
        height: auto;
        margin-bottom: 15px;
    }
}
</style>

