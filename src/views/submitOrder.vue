<template>
    <div class="submit-order">
        <navigator title="提交订单"></navigator>

        <div class="bdtop">
            <!-- 联系人 -->
            <section class="adress_con white_bg" id="address_con">
                <router-link :to="{ path: 'shopList' }" class="abox">
                    <!-- <div class="delivery_mess">
                        <p class="delivery_address">
                            北京市 北京市 朝阳区 万达广场2008
                        </p>
                        <div class="delivery_people clearfix">
                            <span class="left">蛋蛋</span
                            ><cite class="left ml150">18510791924</cite>
                        </div>
                    </div> -->
                    <cite class="addAddress">去添加收货地址</cite>
                    <i class="icon icon-next"></i
                ></router-link>
            </section>
            <!-- 收货地址 -->
            <van-card
                class="card"
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <van-card
                num="2"
                tag="促销"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
            />
        </div>
        <div></div>
        <van-submit-bar
            :suffix-label="'+1000积分'"
            text-align="left"
            :label="'合计：'"
            :price="100"
            :currency="'¥'"
            button-text="提交订单"
            :safe-area-inset-bottom="true"
            @submit="onSubmit"
        />
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
// 图片

export default {
    name: "submit-order",
    data() {
        return {
            // portrait:portrait,
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
        onSubmit() {
            //提交订单
        }
    },
    components: {
        navigator
    }
};
</script>
<style lang="less" scoped>
.submit-order {
    .card {
        background-color: #fff;
    }
}
// 联系人
.adress_con {
    padding-bottom: 3px;
    background: url(https://m.owhat.cn/src/images/list_seg_post2@3x.png)
        repeat-x left bottom #fff;
    background-size: auto 3px;
    .abox {
        display: block;
        position: relative;
        padding: 0 15px;
        i.icon {
            width: 18px;
            height: 18px;
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -9px;
        }
        .addAddress {
            display: block;
            height: 45px;
            font-size: 15px;
            font-weight: bold;
            line-height: 45px;
            color: #2d2d31;
        }
    }
    .delivery_mess {
        padding: 20px 0 12px;
        .delivery_address {
            line-height: 20px;
            color: rgba(0, 0, 0, 0.8);
            margin-top: 0;
            font-size: 17px;
            font-weight: 500;
        }
        .delivery_people {
            font-size: 14px;
            font-weight: normal;
            color: rgba(0, 0, 0, 0.48);
            line-height: 16px;
            margin-top: 10px;
            cite {
                font-weight: normal;
                margin-left: 75px;
                font-style: normal;
            }
        }
    }
}
</style>

