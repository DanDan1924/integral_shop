
<template>
    <div class="sku">
        <div class="bg"></div>
        <div class="sku-contain">
            <span class="title">支付价格</span>   
            <div class="sku-list"><span>760积分+10元</span></div>
            <div class="quantity">数量：
                <div class="quantity-box">
                    <img src="../assets/images/shop/js_1.png" alt="">
                    <span class="num">12</span>
                    <img src="../assets/images/shop/zj_1.png" alt="">
                </div>
            </div>
            <button class="commit">立即兑换</button>
        </div>
        
    </div>
</template>
<style lang="less" scoped>
.sku{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    .bg{
        background-color: rgba(0,0,0,0.4);
        width:100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sku-contain{
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fff;
        width: 100%;
        padding-top: 10px;
        .title{
            font-size: 16px;
            padding-left: 20px;
        }   
        .sku-list{
            padding-left: 20px;
            margin-top: 8px;
            padding-bottom: 15px;
            span{
                padding: 2px 10px;
                font-size: 10px;
                background-color: #6699ff;
                border-radius: 20px;
                color: #fff;
            }
        }
        .quantity{
            height: 65px;
            line-height: 65px;
            padding: 0 20px;
            box-sizing: border-box;
            border-top: 1px solid #f1f1f1;
            .quantity-box{
                float: right;
                display: flex;
                align-items: center;
                img{
                    width: 20px;
                    height: 20px;
                }
                .num{
                    display: inline-block;
                    min-width: 35px;
                    text-align: center;
                }
            }
        }
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
    // position: fixed;
    // bottom: 0;
    // left: 0;
}
</style>
<script>

export default {
    name: "sku",
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
