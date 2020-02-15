<template>
    <div class="shopList">
        <navigator title="家居个护"></navigator>
        <van-tabs v-model="active" animated line-height="0" title-active-color="blue">
            <van-tab v-for="index in 2" :key="index">
                <div slot="title" class="shop-list-tab">选项</div>
                内容 {{ index }}
            </van-tab>
            <!-- <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab> -->
        </van-tabs>
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
export default {
    name: "shop-list",
    data() {
        return {
            active:1
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
    .van-tabs__line{
        border: none;
    }
</style>

