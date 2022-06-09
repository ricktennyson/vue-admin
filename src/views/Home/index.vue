<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 1.25rem;">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" />
                    <div class="userinfo">
                        <p class="name">Rzoad</p>
                        <p class="access">Administrator</p>
                    </div>
                </div>
                <div class="login-info">
                    <p class="lastLogin">上次登陆时间：<span>{{ lastTime }}</span></p>
                    <p class="lastPlace">上次登陆地点：<span>USA</span></p>
                </div>
            </el-card>
            <el-card style="margin-top:20px;height:460px;">
                <el-table :data="tableData">
                    <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flax', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="num">￥{{ item.value }}</p>
                        <p class="txt" style="text-align:left">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height:17.5rem">
            </el-card>
            <div class="graph">
                <el-card style="height:260px"> </el-card>
                <el-card style="height:260px"> </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Home',
    components: {

    },
    props: [],
    created() {

    },
    mounted() {
        this.lastTime = new Date().toLocaleString()
    },
    data() {
        return {
            userImg: require('@/assets/images/user.png'),
            lastTime: '',
            tableData: [
                {
                    name: 'Oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Apple',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Xiaomi',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Samsung',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'Meizu',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            tableLabel: {
                name: '课程',
                totalBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
            echartData: {
                order: {
                    xData: [],
                    series: []
                },
                user: {
                    xData: [],
                    series: []
                },
                video: {
                    series: []
                }
            }
        };
    },
    watch: {

    },
    methods: {
        getTime() {
            this.lastTime = new Date().toLocaleString()
        }
    },
    computed: {
    },
};
</script>

<style scoped lang="scss">
</style>
