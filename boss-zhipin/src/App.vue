<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style>
    html, body {
        margin: 0px;
        padding: 0px;
        color: #414a60;
        font-size: 14px;
    }

    body {
        background-color: #f6f6f8;
        min-width: 1184px; /*很重要，使header的背景在网页缩小时不会出现不能横向覆盖整个宽度的状况*/
    }

    em {
        font-style: normal;
    }
</style>
