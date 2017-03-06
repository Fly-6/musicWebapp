<template>
    <footer>
        <router-link to="/home" >
            <div>
                <i>&#xe65a;</i>
                <span>发现音乐</span>
            </div>
        </router-link>
        <router-link to="/mymusice" >
            <div>
                <i>&#xe605;</i>
                <span>我的音乐</span>
            </div>
        </router-link>
        <router-link to="/friend">
            <div>
                <i>&#xe79a;</i>
                <span>朋友</span>
            </div>
        </router-link>
        <router-link to="/account">
            <div>
                <i>&#xe641;</i>
                <span>账号</span>
            </div>
        </router-link>
    </footer>
</template>

<style lang="less" scoped>
    footer{
        display: flex; position: fixed; bottom: 0; left: 0; height: 50px; background: rgba(0, 0, 0, .8); width: 100%; color: #fff; 
        a{
            color:#fff; width: 25%; text-align: center;
        }
        i{
            font-family: 'iconfont'; font-size: 24px; width: 100%; display: inline-block; height: 20px; font-style: normal; margin: 4px 0; line-height: 24px
        }
        span{
            font-size: 12px
        }
        div{
            opacity: .8;
        }
        .is-active{
            text-shadow: 0 0 8px #fff;
            div{
                opacity: 1;
            }
        }
    }
</style>

<script>
    export default{
        data () {
            return {
                msg: 'im footer'
            }
        }
    }
</script>