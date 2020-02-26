<template>
    <div>
        <navigator title="商品详情"></navigator>
        <van-swipe
            class="my-swipe"
            :autoplay="3000"
            :show-indicators="false"
            @change="onChange"
        >
            <van-swipe-item
                class="van-swipe-item"
                v-for="(image, index) in images"
                :key="index"
            >
                <img v-lazy="image" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                <span
                    :class="current == index ? 'indicator-active' : ''"
                    v-for="(image, index) in images"
                    :key="index"
                ></span>
            </div>
        </van-swipe>
        <div class="shop-info">
            <p class="top-title">乐扣乐扣超轻轻量保温杯</p>
            <div class="price">
                <p class="num">720</p>
                积分 +
                <p class="num">10</p>
                元
            </div>
            <p class="real-price">市场价：78元</p>
        </div>

        <div>
            <div class="mid-line"></div>
            <div class="title-area">
                <div class="tab active">商品详情</div>
                <span style="color:#ccc">|</span>
                <div class="tab">规格参数</div>
            </div>
            <img src="../assets/images/index_flex/jjgh.png" alt />
            <div class="commit-p" @click="toSku"><button class="commit">立即兑换</button></div>
        </div>
        <van-sku
            v-model="show"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :quota="quota"
            :price-tag="'+1000积分'"
            :hide-stock="sku.hide_stock"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
            :buy-text="'立即兑换'"
        />

    </div>
</template>

<script>
import navigator from "../components/navigator.vue";

import img1 from "../assets/images/banner/banner.png";
export default {
    name: "shop-detail",
    data() {
        return {
            images: [img1, img1, img1],
            current: 0,
            show:true,
            quota: 10,
            goodsId: "30349",
            goods: {
                //商品信息
                // 默认商品 sku 缩略图
                picture: "https://qimage.owhat.cn/prod/shop/cover/1581524535595.jpeg"
            },
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: "颜色", // skuKeyName：规格类目名称
                        v: [
                            {
                                id: "1", // skuValueId：规格值 id
                                name: "眼影", // skuValueName：规格值名称
                                imgUrl: "https://qimage.owhat.cn/prod/shop/cover/1581524535595.jpeg", // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: "https://qimage.owhat.cn/prod/shop/cover/1581524535595.jpeg" // 用于预览显示的规格类目图片
                            },
                            {
                                id: "2",
                                name: "书籍",
                                imgUrl: "https://img.yzcdn.cn/2.jpg",
                                previewImgUrl: "https://img.yzcdn.cn/2.jpg"
                            },
                            {
                                id: "0",
                                name: "书籍",
                                imgUrl: "https://img.yzcdn.cn/2.jpg",
                                previewImgUrl: "https://img.yzcdn.cn/2.jpg"
                            }
                        ],
                        k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 12, // skuId，下单时后端需要
                        price: 100, // 价格（单位分）
                        s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
                        s3: "0", // 最多包含3个规格值，为0表示不存在该规格
                        stock_num: 110 // 当前 sku 组合对应的库存
                    },
                    {
                        id: 21, // skuId，下单时后端需要
                        price: 200, // 价格（单位分）
                        s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
                        s3: "0", // 最多包含3个规格值，为0表示不存在该规格
                        stock_num: 120 // 当前 sku 组合对应的库存
                    }
                    
                ],
                price: "1.00", // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品

                hide_stock: false // 是否隐藏剩余库存
            }
 
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
        onChange(index) {
            this.current = index;
        },
        toSku(){
            this.show=!this.show;
        },
        onBuyClicked() {
            this.$router.push({path:'/submit'})
        },
        onAddCartClicked() {}
    },
    components: {
        navigator
    }
};
</script>

<style lang="less" scoped>
.my-swipe {
    height: 300px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    .van-swipe-item {
        color: #fff;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .custom-indicator {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        border-radius: 2px;
        span {
            width: 15px;
            height: 5px;
            background-color: #ccc;
            display: inline-block;
        }
        span:last-child {
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;
        }
        span:first-child {
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
        }
        .indicator-active {
            width: 15px;
            border-radius: 2px !important;
            background-color: #666;
        }
    }
}
.shop-info {
    padding: 15px 20px;
    box-sizing: border-box;
    .top-title {
        font-size: 15px;
        font-weight: bold;
        color: #333;
    }
    .price {
        color: red;
        font-size: 13px;
        display: inline-block;
        .num {
            font-size: 18px;
            font-weight: bold;
            display: inline;
        }
    }
    .real-price {
        color: gray;
        font-size: 13px;
        margin-left: 20px;
        display: inline-block;
    }
}
.mid-line {
    //   padding: 1px;
    width: 100%;
    height: 10px;
    background-color: #f1f1f1;
    opacity: 0.4;
}

.title-area {
    color: #666;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    font-size: 15px;
    display: flex;
    height: 40px;
    line-height: 40px;
    .tab {
        color: #000;

        text-align: center;
        flex: 1;
    }
    .active {
        color: rgb(63, 104, 236);
    }
}
.commit-p {
    height: 50px;
}
.commit {
    background-color: #6699ff;
    color: white;
    display: block;
    line-height: 50px;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>