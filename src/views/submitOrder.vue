<template>
    <div class="submit-order">
        <navigator title="提交订单"></navigator>
        <!-- 收货地址 -->
        <div></div>
        <van-card
            class="card"
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <div></div>
        <van-submit-bar
            :suffix-label="'ahh'"
            :label="'合计：'"
            :currency="''"
            button-text="提交订单"
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
    methods: {},
    components: {
        navigator
    }
};
</script>
<style lang="less" scoped>

.submit-order{
.card{
    background-color: #fff;
}
}
</style>

