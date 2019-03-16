<template> 
 <div class="common_foot"> 
	 <ul> 
		  <li v-for="item in nav" @click="selectNav(item.name)"> 
		  <img :src="isSelect == item.name ? item.url_one : item.url" alt="item.name"> 
		  <p>{{item.title}}</p> 
		  </li> 
	 </ul> 
 </div> 
</template> 
  
<script> 
 export default { 
	 data () { 
	  return { 
		  isSelect: '首页', 
		  nav: [ 
		   {title: '首页',name:"miste", url: require('../../assets/首页.png'), url_one: require('../../assets/首页02.png')}, 
		   {title: '分类',name:"classify",url: require('../../assets/分类.png'), url_one: require('../../assets/分类02.png')}, 
		   {title: '',name:"wx",url:require("../../assets/扫条码.png")},
		   {title: '购物车',name:"shopCar", url: require('../../assets/购物车.png'), url_one: require('../../assets/购物车02.png')}, 
		   {title: '我的',name:"profiles", url: require('../../assets/我的.png'), url_one: require('../../assets/我的02.png')} 
		  ] 
	  } 
	 }, 
	 mounted () { 
	  this.isSelect = sessionStorage.getItem('isSelect');
	  if(this.$route.name == "miste" || this.$route.name == 'classify' || this.$route.name == 'shopCar' || this.$route.name == 'profiles'){
	       this.selectNav(this.$route.name);   
	     }
	 }, 
	 methods: { 
	  selectNav (title) { 
	  	var isThis = this;
	    isThis.isSelect = title; 
		  switch (title) { 
		   case 'miste': this.$router.push('/miste') 
		   break 
		   case 'classify': this.$router.push('/classify') 
		   break 
		   case 'shopCar': this.$router.push('/shopCar') 
		   break 
		   case 'profiles': this.$router.push('/profiles') 
		   break 
		  } 
	  } 
	 } 
 } 
</script> 
  
<style scoped> 
.common_foot{
	width: 100%;
	position: fixed;
	bottom: 0;
	background: white;
}
p{
 	font-size: 0.2rem;color: #7f7f7f;
 	}
ul{
	width: 100%;
	display: flex;
	align-items: center;
}
li{
	text-align: center;
	flex: 1;
}
img{
	width: 30%;
}
li:nth-of-type(3) img{
	width: 70%;
	margin-bottom: 0.2rem;
}


</style> 