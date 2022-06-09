<template>
    <el-container style="height:100%">
        <el-aside width="auto">
            <Common-Aside></Common-Aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '@/components/commonAside'
export default {
    name: 'Home',
    components: {
        CommonAside
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

.el-header{
    background-color: #333;
}
.el-main{
    padding-top: 0;
}
</style>
