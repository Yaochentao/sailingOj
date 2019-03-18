<template>
    <div class="ablility">
        <div class="details-header">
            <h3 class="details-title">能力评价</h3>
        </div>
        <div class="left-con">
            <img :src="this.photo" class="avatars" />
            <span class="name">失格丶</span>
            <div class="ablity-num">
                <li style="font-size: 18px;">基础算法： <span style="font-size: 15px; color: #acadad;">40</span></li>
                <li style="font-size: 18px;">AC： <span style="font-size: 15px; color: #acadad;">100</span></li>
                <li style="font-size: 18px;">排序： <span style="font-size: 15px; color: #acadad;">28</span></li>
                <li style="font-size: 18px;">查找： <span style="font-size: 15px; color: #acadad;">35</span></li>
            </div>
        </div>
        <div class="radar-con">
            <radar />
        </div>
    </div>
</template>
<script>
    import Radar from '../radar/radar'
    export default {
        computed: {
            nick() {
                return this.$store.state.nick;
            },
            photo() {
                return 'http://47.102.159.98' + this.$store.state.photo;
                // return 'https://farm4.staticflickr.com/3931/15532327436_74c32632ac_k.jpg'
            }
        },
        components: {
            Radar
        }
    }
</script>
<style lang="css" scoped>
    .ability {
        width: 100%;
        height: 100%;
    }

    .details-header {
        width: 60%;
        margin: 33px 0 23px 80px;
        padding-bottom: 10px;
        border-bottom: 2px solid #2e9d81;
    }

    .details-title {
        width: 60%;
        font-size: 20px;
        display: inline-block;
    }

    .left-con {
        margin-left: 10%;
        width: 45%;
        display: inline-block;
        vertical-align: top;
    }

    .radar-con {
        margin-right: 5%;
        width: 40%;
        display: inline-block;
    }

    .avatars {
        vertical-align: top;
        margin: 10px 20px 0 10px;
        display: inline-block;
        width: 76px;
        height: 76px;
        border-radius: 38px;
        background: #555;
    }

    .name {
        margin-top: 10px;
        line-height: 76px;
        vertical-align: top;
        color: #dbddda;
        font-size: 19px;
        height: 76px;
        display: inline-block;
    }

    .ablity-num {
        margin: 20px 0 0 14px;
    }
</style>