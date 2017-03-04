<template>
    <section>
        i am home
        <footer-nav></footer-nav>
    </section>
</template>

<style scoped>
    section{background: yellow}
</style>

<script>
    import footer from '../components/Footer'
    export default {
        components: {
            'footer-nav': footer
        },
        data () {
            return {

            }
        }
    }
</script>