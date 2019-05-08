<template>
    <div class="ablility">
        <div class="details-header">
            <h3 class="details-title">能力评价</h3>
        </div>
        <div class="left-con">
            <img :src="this.photo" class="avatars" />
            <span class="name">失格丶</span>
            <div class="ablity-num">
                <li style="font-size: 18px;">通过率： <span style="font-size: 15px; color: #acadad;">{{ability[0]}}%</span></li>
                <li style="font-size: 18px;">基础算法： <span style="font-size: 15px; color: #acadad;">{{ability[1]}}%</span></li>
                
                <li style="font-size: 18px;">排序： <span style="font-size: 15px; color: #acadad;">{{ability[2]}}%</span></li>
                <li style="font-size: 18px;">查找： <span style="font-size: 15px; color: #acadad;">{{ability[3]}}%</span></li>
            </div>
        </div>
        <div class="radar-con">
            <radar :ability ="this.ability"/>
        </div>
    </div>
</template>
<script>
    import qs from 'qs'
    import Radar from '../radar/radar'
    export default {
        data() {
            return {
                ability: [0,0,0,0]
            }
        },
        created() {
            this.$http.post('http://47.102.159.98/php/personal/power.php', qs.stringify({
                    user_id: this.user_id
                }))
                .then((res) => {
                    console.log(res.data);
                    this.ability = res.data.data.slice(0,4);
                })
        },
        computed: {
            nick() {
                return this.$store.state.nick;
            },
            photo() {
                return 'http://47.102.159.98' + this.$store.state.photo;
                // return 'https://farm4.staticflickr.com/3931/15532327436_74c32632ac_k.jpg'
            },
            user_id() {
                return this.$store.state.user_id;
            },
        },
        watch: {
            user_id(newUser_id) {
                console.log('111')
                if(!newUser_id) {
                    this.$router.push('/home')
                }
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