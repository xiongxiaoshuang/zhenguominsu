<template>
	<div class="details">
		<router-link to="/shouye">			
			<span class="el-icon-arrow-left"></span>
		</router-link>
		{{oneOpt}}
	</div>
</template>
<script>
	export default{
		data(){
			return{
				oneOpt:null
			}
		},
		mounted(){
			this.$http.getOneById(this.$route.params.id).then(res=>{
				this.oneOpt=res.data;
				console.log(res);
			})
		}
	}
</script>