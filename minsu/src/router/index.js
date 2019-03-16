import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index.vue'
import shouye from "@/view/index/shouye.vue"
import shoucang from "@/view/index/shoucang.vue"
import lvcheng from "@/view/index/lvcheng.vue"
import my from "@/view/index/my.vue"
import detail from "@/components/index/shouye/recomand_detail.vue"

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        redirect:"/shouye",
        children: [
        	{
                path: "/shouye",
                name: 'shouye',
                isLogin:false,
                component: shouye
            },
            {
                path: "/shoucang",
                name: "shoucang",
                isLogin:false,
                component: shoucang
            },
            {
                path: "/lvcheng",
                name: 'lvcheng',
                isLogin:false,
                component: lvcheng
            },
            {
                path: "/my",
                name: "my",
                isLogin:false,
                component: my
            }]
	    },
    	{
    		path:"/detail/:id",
    		name:"detail",
    		component:detail
    	}
	    ]
})