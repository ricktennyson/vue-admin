<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <h3>Rzoad-Admin</h3>
        <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-for="item in hasChildren" :key="item.path">
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
                    name: 'home ',
                    label: '首页',
                    icon: 's-home ',
                    url: 'Home/Home '
                },
                {
                    path: ' /mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play ',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user ',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他', icon: 'location', children: [
                        {
                            path: '/ page1', name: 'page1', label: '页面1', icon: 'setting ', url: "other /PageOne"
                        },
                        {
                            path: '/page2 ', name: 'page2', label: '页面2', icon: 'setting ', url: 'other/ PageTwo '
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
</style>
