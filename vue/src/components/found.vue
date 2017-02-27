<template>
 <div class="found">
<header class="header">
	<nav class="nav">
		<a href="javasript:;;" class="on">话题</a>
		<router-link to="/information">资讯</router-link>
		<router-link to="/yingku">影库</router-link>
		<a href="javasript:;;">国外</a>
	</nav>
</header>
<div class="slider">
	<swiper :list="banner" loop auto height="150px" :showDots="false"></swiper>
</div>
<div class="content" id="content">
			<div class="iscroll">
				<div class="contentItem">
					<div class="item1">
						<h3>今日资讯</h3>
						<p>电影大道100亿刀，你出了多少力？</p>
						<div class="pics">
							<a href="#"><img src="/static/images/d8.jpg" alt=""></a>
							<a href="#"><img src="/static/images/d9.jpg" alt=""></a>
							<a href="#"><img src="/static/images/d10.jpg" alt=""></a>
						</div>
						<div class="users">
							<h5><span class="userTop"><img src="/static/images/d11.jpg" alt=""></span>队长看电影</h5>
						</div>
					</div>
					<div class="item1">
						<h3>热门资讯</h3>
						<p>结合漫画和电影，告诉你美队是啥样的？</p>
						<div class="pics">
							<a href="#"><img src="/static/images/d12.jpg" alt=""></a>
							<a href="#"><img src="/static/images/d13.jpg" alt=""></a>
							<a href="#"><img src="/static/images/d14.jpg" alt=""></a>
						</div>
						<div class="users">
							<h5><span class="userTop"><img src="/static/images/d11.jpg" alt=""></span>队长看电影</h5>
						</div>
					</div>
					<div class="item1">
						<h3>热门资讯</h3>
						<p>结合漫画和电影，告诉你美队是啥样的？</p>
						<div class="pics">
							<a href="#"><img src="/static/images/d12.jpg" alt=""></a>
							<a href="#"><img src="/static/images/d13.jpg" alt=""></a>
							<a href="#"><img src="/static/images/d14.jpg" alt=""></a>
						</div>
						<div class="users">
							<h5><span class="userTop"><img src="/static/images/d11.jpg" alt=""></span>队长看电影</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
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
     banner:[
     	{
	   		img:"/static/images/a1.jpg"
     	},
     	{
     		url:"",
     		img:"/static/images/d7.jpg"
     	},{
     		img:"/static/images/a3.jpg"
     	}
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.found{
	width: 100%;
	height: 100%;
	font-size: .14rem;
	display: flex;
	flex-direction: column;
}
/*-----------------头部样式-----------------*/
.header {
  width: 100%;
  height: .5rem;
  background: #1A1A1A;
}
.header .nav {
  width: 70%;
  height: .3rem;
  margin: .1rem auto;
  background: #313131;
  border-radius: 6px;
  display: -webkit-box;
  line-height: .3rem;
  text-align: center;
}
.header .nav a {
  display: block;
  -webkit-box-flex: 1;
  color: #CDCDCD;
  font-size: .14rem;
}
.header .nav a:nth-child(1) {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.header .nav a:nth-child(4) {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.header .nav .on {
  background: #F4E51A;
  color: #000;
}
.banner {
  width: 100%;
}
/*-----------------主体样式-----------------*/
.content {
  width: 100%;
  -webkit-box-flex: 1;
  background: #313131;
  position: relative;
  overflow: scroll;
}
.content .contentItem {
  width: 93%;
  margin: .1rem auto;
  background: #272727;
}
.content .item1 {
  width: 100%;
}
.content .item1 h3 {
  color: #fff;
  font-size: .14rem;
  padding: .1rem .15rem 0;
  box-sizing: border-box;
}
.content .item1 p {
  color: #CFCFCF;
  font-size: .14rem;
  padding: .14rem .15rem;
}
.content .item1 .pics {
  width: 93%;
  padding:0 .1rem;
  display:flex;
}
.content .item1 .pics a {
  display: block;
  flex: 1;
  padding-left: .1rem;
}
.content .item1 .pics a:nth-child(1) {
  padding-left: 0;
}
.content .item1 .pics a img {
  width: 100%;
}
.content .item1 .users {
	width: 93%;
	margin: 0 auto;
  border-bottom: 1px solid #3D3D3D;
}
.content .item1 .users h5 {
  color: #fff;
  padding: .1rem 0;
}
.content .item1 .users h5 .userTop {
  width: .24rem;
  height: .24rem;
  display: inline-block;
  margin-right: .1rem;
}
.content .item1 .users h5 .userTop img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
</style>
