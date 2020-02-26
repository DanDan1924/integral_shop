<template>
    <div >
        <div class="bdbottom">
            <navigator title="编辑地址"></navigator>
        </div>
        
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import navigator from "../components/navigator.vue";
import areaList from "../js/area.js";

// 图片

export default {
    name: "address-edit",
    data() {
        return {
            areaList:areaList,
            searchResult: []
        };
    },
    created() {
        // Dialog({ message: '提示' });
        // if (this.$route.query.from == 'ucrm') {
        //     this.showHead = true
        // }
        // this.loasList('created')
        // this.loasType()
    },
    methods: {
        onSave() {
            this.$toast("save");
        },
        onDelete() {
            // console.log(222)
            this.$toast("delete");
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: "黄龙万科中心",
                        address: "杭州市西湖区"
                    }
                ];
            } else {
                this.searchResult = [];
            }
        }
    },
    components: {
        navigator
    }
};
</script>
<style lang="less" scoped>
</style>

