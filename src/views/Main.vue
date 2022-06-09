<template>
    <el-container style="height:100%">
        <el-aside width="auto">
            <Common-Aside></Common-Aside>
        </el-aside>
        <el-container>
            <el-header>
                <CommonHeader></CommonHeader>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '@/components/commonAside'
import CommonHeader from '@/components/commonHeader'
export default {
    name: 'Main',
    components: {
        CommonAside,
        CommonHeader
    },
    props: [],
    created() {

    },
    mounted() {

    },
    data() {
        return {

        };
    },
    watch: {

    },
    methods: {

    },
    computed: {

    },
};
</script>

<style scoped lang="less">
.el-header {
    background-color: #333;
}

.el-main {
    padding-top: 0;
}
</style>
