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
            <div class="commit-p"><button class="commit">立即兑换</button></div>
        </div>
        <sku />
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
import sku from "../components/sku.vue";

import img1 from "../assets/images/banner/banner.png";
export default {
    name: "shop-detail",
    data() {
        return {
            images: [img1, img1, img1],
            current: 0,
            // sku
 
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
        }
    },
    components: {
        navigator,
        sku
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