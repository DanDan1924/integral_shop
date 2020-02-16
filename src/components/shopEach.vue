
<template>
    <div class="shop-each">
        <div class="title">
            {{title}}
            <p class="more">
                <img class="more-img" src="../assets/images/more.png" alt="" />
            </p>
        </div>
        <div class="content">
            <div class="each" v-for="(each, index) in list" :key="index">
                <van-image 
                    class="image-p"
                    fit="cover"
                    :src="each.img"
                />
                <p class="each-title">{{ each.title }}</p>
                <div class="each-price">
                    <span class="price-num">{{ each.price }}</span
                    >积分
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.shop-each {
    .title {
        height: 56px;
        line-height: 56px;
        color: #333;
        font-size: 20px;
        padding: 0 15px;
        box-sizing: border-box;
        .more {
            width: 30px;
            float: right;
            .more-img {
                width: 100%;
                vertical-align: middle;
            }
        }
    }
    .content {
        display: flex;
        padding: 0 10px;
        box-sizing: border-box;
        justify-content: space-around;
        .each {
            margin-bottom:15px;
            .image-p {
                border: 1px solid #f1f1f1;
                width: 111px;
                height: 120px;
            }
            .each-title {
                font-size: 14px;
                margin: 6px 0;
            }
            .each-price {
                color: red;
                font-size: 13px;
                .price-num {
                    font-size: 16px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
<script>

export default {
    name: "shopEach",
    props: {
        // active:Number
        title:String
    },
    data() {
        return {
            list: [
                {
                    img: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: "木头装饰摆件",
                    price: 6000
                },
                {
                    img: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: "木头装饰摆件",
                    price: 6000
                },
                {
                    img: 'https://img.yzcdn.cn/vant/cat.jpeg',
                    title: "木头装饰摆件",
                    price: 6000
                }
            ]
        };
    },
    beforeMount() {},
    components: {}
};
</script>
