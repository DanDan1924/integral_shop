
<template>
    <div class="sku">
        
    </div>
</template>

<script>
export default {
    name: "sku1",
    props: {
        // active:Number
        title: String,
        show: Boolean
    },
    data() {
        return {
            
        };
    },
    beforeMount() {},
    components: {},
    methods: {
        toSku() {
            this.$emit("changeSku");
        },
        toSubmit() {
            this.$router.push({ path: "/submit" });
        },
        
    }
};
</script>

<style lang="less" scoped>
</style>