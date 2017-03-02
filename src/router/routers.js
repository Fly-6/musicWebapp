
/*
** 页面
*/
import Home from 'views/Home'
import MyMusice from 'views/MyMusice'
import Friend from 'views/Friend'
import Account from 'views/Account'

//Vue.use(Router)

export default {
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
     path: "/",
     redirect: "/home"  //重定向
    },
    {
      path: '/mymusice',
      component: MyMusice
    },
    {
      path: '/friend',
      component: Friend
    },
    {
      path: '/account',
      component: Account
    }
  ]
}
