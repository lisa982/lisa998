import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 中英文切换
import Lang from '@/components/web/lang'
// ElementUI
import ElementUI from '@/components/web/element/elementui'
// 前端分类
import JavaScript from '@/components/web/WEBdetails/JavaScript'
import PhotoShop from '@/components/web/WEBdetails/PhotoShop'
import vueHtml from '@/components/web/WEBdetails/vue'
// vue基础定义
import Explain from '@/components/web/vueExplain/explain'
import npmdow from '@/components/web/vueExplain/npmdow'
import Foundationone from '@/components/web/vueExplain/basis/Foundationone'
import Founddationtwo from '@/components/web/vueExplain/basis/Founddationtwo'
import Founddationthree from '@/components/web/vueExplain/basis/Founddationthree'
import Founddationfour from '@/components/web/vueExplain/basis/Founddationfour'
import Founddationfive from '@/components/web/vueExplain/basis/Founddationfive'
import Founddationsix from '@/components/web/vueExplain/basis/Founddationsix'
import Founddationseven from '@/components/web/vueExplain/basis/Founddationseven'
import Founddationenight from '@/components/web/vueExplain/basis/Founddationenight'
import Founddationnine from '@/components/web/vueExplain/basis/Founddationnine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/JavaScript',
      name: 'JavaScript',
      component: JavaScript
    }, {
      path: '/PhotoShop',
      name: 'PhotoShop',
      component: PhotoShop
    }, {
      path: '/vueHtml',
      name: 'vueHtml',
      component: vueHtml
    },
    {
      path: '/Lang',
      name: "Lang",
      component: Lang
    }, {
      path: '/ElementUI',
      name: "ElementUI",
      component: ElementUI,
    }, {
      path: '/Explain',
      name: "Explain",
      component: Explain,
      children:[
        {
          name:'npmdow',
          path:"",
          component:npmdow,
        },{
          name:'Foundationone',
          path:"Foundationone",
          component:Foundationone,
        },{
          name:"Founddationtwo",
          path:"Founddationtwo",
          component:Founddationtwo,
        },{
          name:"Founddationthree",
          path:"Founddationthree",
          component:Founddationthree
        },{
          name:"Founddationfour",
          path:"Founddationfour",
          component:Founddationfour
        },{
          name:"Founddationfive",
          path:"Founddationfive",
          component:Founddationfive
        },{
          name:"Founddationsix",
          path:"Founddationsix",
          component:Founddationsix
        },{
          name:"Founddationseven",
          path:"Founddationseven",
          component:Founddationseven
        },{
          name:"Founddationenight",
          path:'Founddationenight',
          component:Founddationenight
        },{
          name:"Founddationnine",
          path:"Founddationnine",
          component:Founddationnine
        },{
          name:"Founddationten",
          path:"Founddationten",
          component: resolve => require.ensure([], () => { resolve(require('@/components/web/vueExplain/basis/Founddationten')) }, 'Founddationten')
        },{
          name:"tableAdd",
          path:"tableAdd",
          component: resolve => require.ensure([], () => { resolve(require('@/components/web/vueExplain/table/tableAdd')) }, 'tableAdd')
        },{
          name:"tableRemove",
          path:"tableRemove",
          component: resolve => require.ensure([], () => { resolve(require('@/components/web/vueExplain/table/tableRemove')) }, 'tableRemove')
        }
      ]
    }
  ]
})
