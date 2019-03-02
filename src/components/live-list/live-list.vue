<template>
    <div class="live-list" :style="{minHeight:(screenHeight-60)+'px'}">
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            screenHeight: document.documentElement.clientHeight, // 屏幕高度
        }
    },
    mounted() {
            var _this = this
            window.onresize = function () { // 定义窗口大小变更通知事件
                    // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
                    _this.screenHeight = document.documentElement.clientHeight // 窗口高度
            };
    }
}
</script>

