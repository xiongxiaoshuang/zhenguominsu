<template>
	<div class="swiper-container" ref="typeSwiper">
	 	<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img src="../../../assets/lb1.png" />
			</div>
			<div class="swiper-slide">
				<img src="../../../assets/lb2.png" />
			</div>
			<div class="swiper-slide">
				<img src="../../../assets/lb3.png" />
			</div>
		</div>
		<div class="swiper-pagination"></div>		  
	</div>
</template>
<script>
	export default{
		mounted(){
			this.$nextTick(()=>{
                new this.$swiper(this.$refs.typeSwiper,{
                	autoplay:true,
                	loop : true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })  
		}
	}
</script>
<style>
	.swiper-container{
		width: 7.5rem;
        height: 3.54rem;
        box-sizing: border-box;
    }
    .swiper-container .swiper-wrapper{
    	width: 7.5rem;
    	position: relative;
    }
    .swiper-slide{
        width: 7.5rem;
    }
    .swiper-slide img{
        width: 7.5rem;
        height: 3.54rem;
    }
    .swiper-container .swiper-pagination{
    	position: absolute;
    	bottom: 1.5rem;
    }
</style>