<template>
	<div @click="showiff()">
		<el-input placeholder="输入位置、地标、房源标题" clearable></el-input>
		<!--<sou-suo v-show="bol" ></sou-suo>-->
		<div class="sousuo" v-show="bol" @click.stop>
			<div class="top">
				<span class="el-icon-arrow-left" @click="showif()"></span>
				<el-input placeholder="输入位置、地标、房源标题" clearable></el-input>
			</div>
			<div class="hotsearch">
				<p>
					热门搜索
				</p>
				<ul>
					<li>外滩</li>
					<li>迪士尼</li>
					<li>田子坊</li>
					<li>静安寺</li>
					<li>人民广场</li>
					<li>南京西路</li>
					<li>新国际博览中心</li>
					<li>虹桥火车站</li>
					<li>谧舍花间集</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
//	import souSuo from "@/components/index/shouye/sousuo.vue"
	export default {
		data() {
			return {
				bol:false
			}
		},
		methods:{
			showiff(){
//				alert(1111)
				this.bol=!this.bol;				
			},
			showif(){
//				alert(11)
				this.bol=!this.bol
			}
		}
	}
</script>
<style>
	.sousuo{
		width: 100%;
		height: 100%;
		padding: 10px;
		box-sizing: border-box;
		margin: 0 auto;
		background: white;
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.sousuo .top{
		width: 100%;
		display: flex;
	}
	.top span{
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.sousuo .hotsearch{
		width: 100%;
	}
	.hotsearch ul{
		width: 100%;
	}
	.hotsearch ul li{
		float: left;
		background: lightgray;
		border-radius: 8px;
		height: 26px;
		line-height: 26px;
		padding: 0 10px;
		margin: 0 28px 10px 0;
		border: solid 1px lightgray;
	}
</style>