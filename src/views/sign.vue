<template>
    <div class="sign" ref="sign">
        <navigator title="积分签到" ref="nav"></navigator>
        <van-image width="100%" height="auto" :src="banner" ref="image" />
        <van-calendar 
        :poppable="false" 
        class="calendar" 
        color="linear-gradient(to right, #6699ff, #0099ff)"
        confirm-text="签到"
        @confirm="onConfirm" />
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
import banner from "../assets/images/banner.jpg";
export default {
    name: "sign",
    data() {
        return {
            banner: banner,
            height:'680px',
            rowHeight:45,
            style:'height:680px;margin-top:-90px'
        };
    },
    mounted() {
        this.$nextTick(()=>{ // 页面渲染完成后的回调
        window.console.log(this.$refs.nav)
            window.console.log(this.$refs.nav.offsetHeight)
        })
        // if (this.$route.query.from == 'ucrm') {
        //     this.showHead = true
        // }
        // this.loasList('created')
        // this.loasType()
    },
    methods: {
        formatDate(date) {
            return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
        },
        onConfirm(date) {
            this.date = this.formatDate(date);
            this.$dialog.alert({
                title: "提示",
                message: `已选择${this.date}`
            }).then(() => {
                // on close
            });
        }
    },
    components: {
        navigator
    }
};
</script>
<style lang="less" scoped>
.sign{
    height: 100%;
    background-color: #f1f1f1;
}
.calendar{
    height: 340px;
    position:relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    // width: 94%;
    margin: -45px auto 0;
}
</style>

