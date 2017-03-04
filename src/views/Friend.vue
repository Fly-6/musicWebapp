<template>
    <section>
        i am friend
        <footer-nav></footer-nav>
    </section>
</template>

<style lang="less" scoped>
    section{background: blue}
</style>

<script>
    import footerNav from '../components/Footer'
    export default {
        components: {
            footerNav
        },
        data () {
            return {

            }
        }
    }
</script>