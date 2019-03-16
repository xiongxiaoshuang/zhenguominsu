<template>
	<div class="recomand">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="迪士尼" name="first" >
		    	<div class="dsn">
		    		<router-link class="one" v-for="(item,index) in list1" :key="index" :to="'/detail/'+item._id">
		    			<dl>
			    			<dt><img :src="item.imgurl" alt=""/></dt>
			    			<dd>{{item.name}}</dd>
			    			<dd>{{item.produce}}</dd>
			    			<dd>{{item.price}}</dd>
			    		</dl>
		    		</router-link>
		    	</div>
		    	<el-row>
		  			<el-button round size="medium">查看更多迪士尼民宿</el-button>
				</el-row>
		    </el-tab-pane>
		    <el-tab-pane label="人民广场" name="second">
		  		<el-button round size="medium">查看更多人民广场民宿</el-button>
		    </el-tab-pane>
		    <el-tab-pane label="北外滩" name="third">
		  		<el-button round size="medium">查看更多北外滩民宿</el-button>
		    </el-tab-pane>
	  </el-tabs>	  	
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        list1:[]
      };
    },
    methods: {
      handleClick(tab, event) {
//      console.log(tab, event);
      }
    },
    mounted(){
    	this.$http.getRecomand().then(res=>{
    		this.list1=res.data;
    		console.log(this.list1)
    	})
    }
  };
</script>
<style>
	.recomand{
		width: 100%;
		margin: 0 auto;
		position: absolute;
		top: 6.5rem;
		margin-bottom: 2rem;
	}
	.recomand .el-tabs{
		width: 100%;
		padding: 10px 15px;
		box-sizing: border-box;
		margin: 0 auto;
		border-top:solid 1px lightgray;
	}
	.recomand .el-tabs__header,
	.recomand .el-tabs__nav-wrap,
	.recomand .el-tabs__nav-scroll{
		width: 100%;
	}
	.recomand .el-tabs__nav{
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.recomand .el-tabs__nav .el-tabs__active-bar{
		height: 0px;
	}
	.recomand .el-tabs__content{
		width: 100%;
	}
	.recomand .el-tab-pane{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.recomand .dsn{
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.recomand .dsn .one{
		width: 48%;
	}
	.dsn dl{
		width: 100%;
		font-size: 12px;
		text-align: left;
	}
	.dsn dl dt img{
		width: 3.45rem;
		height: 2.2rem;
	}
	.dsn dl dd{
		width: 100%;
		height: 16px;
		line-height: 16px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.recomand .el-row,
	.recomand .el-tabs__content{
		width: 100%;
		text-align: center;
	}
</style>