<template>
  <div id="app">
      <transition name="slide-left" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
          transitionName: 'slide-left'
      }
  },
  watch: {
    /*'$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      console.log(toDepth)
      console.log(fromDepth)
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }*/
   }
}
</script>

<style lang="less">
    body{height: 100%}
    section{height:400px}
    /*.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}*/
/*.slide-left-enter-active, .slide-left-leave-active {
        transition: transform .5s;
        transform-origin: left;
    }
    .slide-left-enter, .slide-left-leave-active {
        transform: scale(0,1);
    }*/
    @import '~vux/src/styles/reset.less';
    @import './assets/css/iconfont.css';
    @import './assets/css/resset.css';
</style>
