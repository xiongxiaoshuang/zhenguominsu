<template>
	<div class="shouye">
		<shouye-ad></shouye-ad>
		<div class="header">
			<p>上海</p>
			<shouye-time></shouye-time>
			<shouye-search></shouye-search>
			<el-row>
  				<el-button type="primary" @click=showif()>搜索</el-button>
			</el-row>
		</div>
		<sou-suo v-show="bol"></sou-suo>
		<recomand-tab></recomand-tab>
	</div>
</template>
<script>
	import shouyeAd from "@/components/index/shouye/shouye_ad.vue"
	import shouyeTime from "@/components/index/shouye/shouye_time.vue"
	import shouyeSearch from "@/components/index/shouye/shouye_search.vue"	
	import souSuo from "@/components/index/shouye/sousuo.vue"
	import recomandTab from "@/components/index/shouye/shouye_recomand.vue"
	export default {
		data() {
			return {
				bol:false
			}
		},
		methods:{
			showif(){
				this.bol=!this.bol;				
			},
			showiff(){
				this.bol=!this.bol;	
			}
		},
		components: {
			shouyeAd,
			shouyeTime,
			shouyeSearch,
			souSuo,
			recomandTab
		}
	}
</script>

<style>
	.shouye {
		width: 100%;
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.shouye .header{
		width: 94%;
		margin: 0 auto;
		margin-left: 3%;
		box-sizing: border-box;
		position: absolute;
		top: 2rem;
		z-index: 10;
		background: white;
	}
	.header p{
		margin: 10px 0;
	}
	.header .el-row .el-button{
		width: 100%;
		background: orange;
		border: none;
		outline: none;
	}
</style>