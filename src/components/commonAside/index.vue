<template>
    <el-menu default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>Rzoad-Admin</h3>
        <el-menu-item @click="menuRoute(item)" :index="item.path + ''" v-for="item in noChildren" :key="item.path">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu :index="item.path + ''" v-for="item in hasChildren" :key="item.path">
            <template slot="title">
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'CommonAside',
    components: {

    },
    props: [],
    created() {

    },
    mounted() {

    },
    data() {
        return {
            isCollapse: false,
            menu: [
                {
                    path: '/',
                    name: 'Home',
                    label: '首页',
                    icon: 's-home ',
                    url: 'Home/Home '
                },
                {
                    path: ' /mall',
                    name: 'Mall',
                    label: '商品管理',
                    icon: 'video-play ',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'User',
                    label: '用户管理',
                    icon: 'user ',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他', icon: 'location', children: [
                        {
                            path: '/ page1', name: 'Page1', label: '页面1', icon: 'setting ', url: "other /PageOne"
                        },
                        {
                            path: '/page2 ', name: 'Page2', label: '页面2', icon: 'setting ', url: 'other/ PageTwo '
                        }
                    ]
                }
            ]
        };
    },
    watch: {

    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        menuRoute(item) {
            this.$router.push({
                name: item.name
            })
        }
    },
    computed: {
        noChildren() {
            return this.menu.filter(e => !e.children)
        },
        hasChildren() {
            return this.menu.filter(e => e.children)
        }
    },
};
</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100%;
    border: none;

    h3 {
        color: whitesmoke;
        text-align: center;
        line-height: 48px;
    }
}
</style>
