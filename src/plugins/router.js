import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import 是静态引入，编译时 ， 会事先引入
import Home from '../pages/Home.vue'
import zhuanji from '../pages/zhuanji.vue'
import xueyuan from '../pages/xueyuan.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '@/pages/Reg'
import tuishou from '@/pages/tuishou'
import Detail from '@/pages/Detail'
import map from '@/pages/map'
import Follow from '@/pages/Follow'
import Pingtuan from '@/pages/Pingtuan'
import yaoqing from '@/pages/yaoqing'
import Error from '@/pages/Error'
import Shoppingcar from '@/pages/Shoppingcar'
import shoppingmsg from '@/pages/shoppingmsg'

import setting from '@/pages/setting'
import Fenglei from '@/pages/Fenglei'
import vip from '@/pages/vip'



let routes = [
  {path:'/home',component:Home,name:'home'},
  {path:'/follow',component:Follow,name:'follow'},
  {path:'/map',component:map,name:'map'},
  {path:'/zhuanji',component:zhuanji,name:'zhuanji'},
  {path:'/xueyuan',component:xueyuan,name:'xueyuan'},
  {path:'/tuishou',component:tuishou,name:'tuishou'},
  {path:'/shoppingmsg',component:shoppingmsg,name:'shoppingmsg'},
  {path:'/pingtuan',component:Pingtuan,name:'pingtuan'},
  {path:'/fenglei',component:Fenglei,name:'fenglei'},
  {path:'/user',component:User,name:'user'},
  {path:'/vip',component:vip,name:'vip'},
  {path:'/login',component:Login,name:'login'},
  {path:'/yaoqing',component:yaoqing,name:'yaoqing'},
  {path:'/setting',component:setting,name:'setting'},
  {path:'/reg',component:Reg},
  {name:'detail',path:'/detail/:id',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:Error},
  {path:'/shopping',component:Shoppingcar,name:'shopping'},

];

let router = new VueRouter({
  routes,
  scrollBehavior:(to,from,savePostion)=>{
    return{x:0,y:0}
  }
});

export default router;