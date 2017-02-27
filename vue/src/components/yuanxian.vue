<template>
 <div class="yuanxian">
 <header class="header">
	<div class="citySlide">
		<router-link to="/city"><h3>北京<i class="iconfont">&#xe6a1;</i></h3></router-link>
	</div>
	<h2>院线</h2>
	<router-link to="/search" class="search"><i class="iconfont">&#xe67a;</i></router-link>
</header>
 <div class="content">
			<div class="pic">
				<img src="/static/images/d1.jpg" alt="">
			</div>
			<div class="cont" id="cont">
				<div class="iscroll">
					<div class="contItem">
						<router-link to="/xingm">
						<ul>
							<li>
								<h3>星美国际（上地店）<span>155元起</span></h3>
								<h4>3.5KM</h4>
							</li>
							<li>
								<div class="icon">3D</div><div class="icon">惠</div><div class="icon">团购</div>
							</li>
							<li>电话：<span>010-338927</span></li>
							<li>地址：<span>北京市海淀区上地七街150号</span><span class="gps"><i class="iconfont">&#xf0039;</i></span>定位<span class="collect"><i class="iconfont">&#xf0003;</i></span>收藏</li>
						</ul>
						</router-link>
					</div>
					<div class="contItem">
						<ul>
							<li>
								<h3>美地国际（知春路店）<span>25元起</span></h3>
								<h4>2.5KM</h4>
							</li>
							<li>
								<div class="icon">3D</div><div class="icon">惠</div>
							</li>
							<li>电话：<span>010-338927</span></li>
							<li>地址：<span>北京市海淀区知春路150号</span><span class="gps"><i class="iconfont">&#xf0039;</i></span>定位<span class="collect"><i class="iconfont">&#xf0003;</i></span>收藏</li>
						</ul>
					</div>
					<div class="contItem">
						<ul>
							<li>
								<h3>美地国际（回龙观店）<span>55元起</span></h3>
								<h4>1.5KM</h4>
							</li>
							<li>
								<div class="icon">惠</div><div class="icon">团购</div>
							</li>
							<li>电话：<span>010-338927</span></li>
							<li>地址：<span>北京市海淀区上地七街150号</span><span class="gps"><i class="iconfont">&#xf0039;</i></span>定位<span class="collect"><i class="iconfont">&#xf0003;</i></span>收藏</li>
						</ul>
					</div>
					<div class="contItem">
						<ul>
							<li>
								<h3>美地国际（回龙观店）<span>55元起</span></h3>
								<h4>1.5KM</h4>
							</li>
							<li>
								<div class="icon">惠</div><div class="icon">团购</div>
							</li>
							<li>电话：<span>010-338927</span></li>
							<li>地址：<span>北京市海淀区上地七街150号</span><span class="gps"><i class="iconfont">&#xf0039;</i></span>定位<span class="collect"><i class="iconfont">&#xf0003;</i></span>收藏</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
 </div>
</template>

<script>
export default {
  name: 'yuanxian',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yuanxian{
	width: 100%;
	height: 100%;
	font-size: .14rem;
	display: flex;
	flex-direction: column;
}
/*------------头部样式--------------*/
.header {
  width: 100%;
  height: .5rem;
  background: #1A1A1A;
  position: relative;
  text-align: center;
}
.header h2 {
  font-size: .16rem;
  color: #fff;
  line-height: .5rem;
}
.header .search {
  font-size: 20px;
  color: #CDCDCD;
  position: absolute;
  right: 5%;
  top: 30%;
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
/*-----------------主体样式-----------------*/
.content {
  width: 100%;
  flex: 1;
  background: #313131;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-y: scroll;
}
.content .pic {
  width: 100%;
  height: .96rem;
}
.content .pic img {
  width: 100%;
  height: 100%;
}
.content .cont {
  -webkit-box-flex: 1;
  position: relative;
}
.content .contItem {
  padding: .2rem .1rem;
  border-bottom: 1px solid #464646;
}
.content .contItem h3 {
  font-size: .12rem;
  color: #fff;
  float: left;
}
.content .contItem h3 span {
  color: #F8AF25;
}
.content .contItem h4 {
  float: right;
  font-size: .12rem;
  color: #fff;
}
.content .contItem li {
  clear: both;
  color: #B8B8B8;
  font-size: .12rem;
  padding-top: .07rem;
}
.content .contItem li:nth-child(1) {
  padding-top: 0;
}
.content .contItem .icon {
  width: .34rem;
  height: .16rem;
  border-radius: 5px;
  line-height: .16rem;
  text-align: center;
  color: #F5E219;
  border: 1px solid #F5E219;
  float: left;
  margin-right: .07rem;
}
.content .contItem .gps,
.content .contItem .collect {
  display: inline-block;
  width: .14rem;
  height: .14rem;
  margin-left: .1rem;
}
.content .contItem .gps img,
.content .contItem .collect img {
  width: 100%;
  height: 100%;
}
</style>
