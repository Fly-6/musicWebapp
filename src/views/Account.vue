<template>
    <section>
        i am account
        <footer-nav></footer-nav>
    </section>
</template>

<style lang="less" scoped>
    section{background: red}
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