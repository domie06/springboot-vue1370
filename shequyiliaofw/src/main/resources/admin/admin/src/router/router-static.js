import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import liuyan from '@/views/modules/liuyan/list'
    import news from '@/views/modules/news/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengChat from '@/views/modules/yishengChat/list'
    import yishengCollection from '@/views/modules/yishengCollection/list'
    import yishengCommentback from '@/views/modules/yishengCommentback/list'
    import yishengYuyue from '@/views/modules/yishengYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhinan from '@/views/modules/zhinan/list'
    import zhinanCollection from '@/views/modules/zhinanCollection/list'
    import zhinanLiuyan from '@/views/modules/zhinanLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryTime from '@/views/modules/dictionaryTime/list'
    import dictionaryYisheng from '@/views/modules/dictionaryYisheng/list'
    import dictionaryYishengChat from '@/views/modules/dictionaryYishengChat/list'
    import dictionaryYishengCollection from '@/views/modules/dictionaryYishengCollection/list'
    import dictionaryYishengYuyue from '@/views/modules/dictionaryYishengYuyue/list'
    import dictionaryZhinan from '@/views/modules/dictionaryZhinan/list'
    import dictionaryZhinanCollection from '@/views/modules/dictionaryZhinanCollection/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryTime',
        name: '挂号状态',
        component: dictionaryTime
    }
    ,{
        path: '/dictionaryYisheng',
        name: '科室',
        component: dictionaryYisheng
    }
    ,{
        path: '/dictionaryYishengChat',
        name: '数据类型',
        component: dictionaryYishengChat
    }
    ,{
        path: '/dictionaryYishengCollection',
        name: '收藏表类型',
        component: dictionaryYishengCollection
    }
    ,{
        path: '/dictionaryYishengYuyue',
        name: '挂号状态',
        component: dictionaryYishengYuyue
    }
    ,{
        path: '/dictionaryZhinan',
        name: '指南类型',
        component: dictionaryZhinan
    }
    ,{
        path: '/dictionaryZhinanCollection',
        name: '收藏表类型',
        component: dictionaryZhinanCollection
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/news',
        name: '社区公告',
        component: news
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengChat',
        name: '用户咨询',
        component: yishengChat
      }
    ,{
        path: '/yishengCollection',
        name: '医生收藏',
        component: yishengCollection
      }
    ,{
        path: '/yishengCommentback',
        name: '医生评价',
        component: yishengCommentback
      }
    ,{
        path: '/yishengYuyue',
        name: '挂号',
        component: yishengYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhinan',
        name: '防范指南',
        component: zhinan
      }
    ,{
        path: '/zhinanCollection',
        name: '指南收藏',
        component: zhinanCollection
      }
    ,{
        path: '/zhinanLiuyan',
        name: '指南留言',
        component: zhinanLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
