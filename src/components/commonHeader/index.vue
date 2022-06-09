<template>
    <header>
        <div class="l-content">
            <el-button plain icon="el-icon-menu" size="mini"></el-button>
            <h3 style="color:#fff">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Center</el-dropdown-item>
                    <el-dropdown-item>Logout</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    name: 'CommonHeader',
    components: {

    },
    props: [],
    created() {

    },
    mounted() {

    },
    data() {
        return {
            userImg: require('@/assets/images/user.png')
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

<style scoped lang="scss">
</style>
