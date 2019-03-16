<template>
    <div class="home">
        <router-view></router-view>
        <foot-comp></foot-comp>
    </div>
</template>
<script>
import footComp from "@/components/index/footComp.vue"
export default {
    components:{
        footComp
    }
}
</script>
<style>
	div.home{
		width: 100%;
		height: 100%;
	}
</style>

