<template>
<div class="home">
	<header class="header">
			<div class="citySlide">
				<router-link to="/city"><h3>{{city}}<i class="iconfont">&#xe6a1;</i></h3></router-link>
			</div>
			<nav class="nav">
				<router-link to="/home/one">最热</router-link>
				<router-link to="/home/two">预约</router-link>
				<a>国外</a>
			</nav>
			<router-link to="/search" class="search"><i class="iconfont">&#xe67a;</i></router-link>
	</header>
	<div class="main">
		<swiper :list="banner" auto loop height="70px" :showDots="false"></swiper>
		<router-view></router-view>
	</div>
</template>

<script>
import { Swiper } from 'vux'
export default {
  name: 'hello',
  components:{
  	Swiper
  },
  data () {
    return {
    city:"",
     banner:[
     	{
	   		img:"/static/images/a1.jpg"
     	},
     	{
     		url:"",
     		img:"/static/images/a2.jpg"
     		
     	},{
     		img:"/static/images/a3.jpg"
     	}
     ]
    }
  },
  created(){
  	console.log(this.$route)
  	this.city =(typeof this.$route.query)==="string"?this.$route.query:"北京";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
	.home{
		width: 100%;
		height: 100%;
		font-size: .14rem;
		display: flex;
		flex-direction: column;
	}
	.main {
		background: #272727;
		flex: 1;
		overflow-y: scroll;
		-webkit-box-orient: vertical;
	}
	/*-----------------头部样式-----------------*/
.header {
  width: 100%;
  height: .5rem;
  background: #1A1A1A;
  position: relative;
}
.header .nav {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
  width: 60%;
  height: .36rem;
  background: #313131;
  border-radius: 10px;
  display: -webkit-box;
  line-height: .36rem;
  text-align: center;
}
.header .nav a {
  display: block;
  -webkit-box-flex: 1;
  color: #CDCDCD;
}
.header .nav a:nth-child(1) {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.header .nav a:nth-child(3) {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.header .search {
  position: absolute;
  right: 5%;
  top: 30%;
}
.header .search i {
  font-size: 20px;
  color:#CDCDCD;
}
.header .citySlide {
  position: absolute;
  left: 3%;
  top: 36%;
}
.header .citySlide h3 {
	font-size: .14rem;
  color: #fff;
}
.router-link-active{
	background: #F4E51A;
    color: #000 !important;
}
</style>
