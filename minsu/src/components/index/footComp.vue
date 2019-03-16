<template>
    <footer>
            <ul>
                <li>
                    <router-link to="/shouye">
                        <img src="../../assets/shouye.png" alt="">
                        <span>首页</span>
                    </router-link>                   
                </li>
                <li>
                   <router-link to="/shoucang">
                        <img src="../../assets/xin.png" alt="">
                        <span>收藏</span>
                    </router-link>
                </li>
                <li>
                   <router-link to="/lvcheng">
                        <img src="../../assets/lvcheng.png" alt="">
                        <span>旅程</span>
                    </router-link>
                </li>
                <li>
                   <router-link to="/my">
                        <img src="../../assets/wo.png" alt="">
                        <span>我</span>
                    </router-link>
                </li>
            </ul>
    </footer>
</template>
<style>
    footer{
        width: 100%;
        height: 40px;
        background: white;
        position: fixed;
        bottom: 0;
    }
    footer ul{
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
    }
    footer li{
        width: 25%;
    }
    footer li span{
        display: block;
    }
</style>


