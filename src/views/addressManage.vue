<template>
    <div class="submit-order">
        <navigator title="我的收货地址"></navigator>
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
        />
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
// 图片

export default {
    name: "address-manage",
    data() {
        return {
            chosenAddressId: "1",
            list: [
                {
                    id: "1",
                    name: "张三",
                    tel: "13000000000",
                    address:
                        "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
                },
                {
                    id: "2",
                    name: "李四",
                    tel: "1310000000",
                    address: "浙江省杭州市拱墅区莫干山路 50 号"
                }
            ],
            disabledList: [
                {
                    id: "3",
                    name: "王五",
                    tel: "1320000000",
                    address: "浙江省杭州市滨江区江南大道 15 号"
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
        onAdd() {
            this.$router.push({path:'/addressEdit'})
        },
        onEdit(item, index) {
            this.$router.push({ name: 'address-edit', params: { info: item,index:index }})
            
        }
    },
    components: {
        navigator
    }
};
</script>
<style lang="less" scoped>
</style>

