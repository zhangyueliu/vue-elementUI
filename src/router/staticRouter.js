import Layout from '@/pages/Layout/Layout'
import LayoutSecond from '@/pages/Layout/LayoutSecond'
import HelloWorld from "../components/HelloWorld"
import LayoutThird from "@/pages/Layout/LayoutThird"
import LayoutMain from "@/pages/Layout/LayoutMain"
import FuncForm from "@/pages/functions/form/FuncForm"
import FuncTabs from "@/pages/functions/home/FuncTabs"
import FuncCard from "@/pages/functions/card/FuncCard"
import FuncTable from "@/pages/functions/table/FuncTable"

/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/Layout/FuncTabs/FuncForm'
  }, {
    path: '/Layout',
    name: '第一种最外层布局',
    component: Layout,
    children: [{
      path: 'FuncTabs',
      name: 'tab标签页',
      component: FuncTabs,
      children: [{
        path:'FuncForm',
        name:'表单',
        component: FuncForm
      }, {
        path:'FuncCard',
        name:'卡片',
        component: FuncCard
      }, {
        path:'FuncTable',
        name:'表格',
        component: FuncTable
      }]
    }]
  }
  // , {
  //   path: '/layoutSecond',
  //   name: '第二种最外层布局',
  //   component: LayoutSecond
  // },{
  //   path: '/layoutThird',
  //   name: '第三种最外层布局',
  //   component: LayoutThird
  // },
]

export default staticRouter
