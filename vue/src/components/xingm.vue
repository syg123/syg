<template>
 <div class="xingm">
 	<header class="header">
		<router-link to="/yuanxian"><i class="iconfont">&#x3484;</i></router-link>
		<h3>星美国际（上地店）</h3>
	</header>
	<div class="content" id="content">
			<div class="iscroll">
				<div class="white"></div>
				<div class="itemBox">
					<h3>星美国际（上地店）<span>8.0分</span></h3>
					<h4>学生优惠</h4><h4>周六半价</h4><h4>可停车</h4>
					<span class="more"><i class="iconfont">&#xe6a0;</i></span>
				</div>
				<div class="place">
					<h2>地址：海淀区清河中街购物中心七层</h2>
				</div>
				<div class="movieBox">
					<a href="#">
						<dl>
							<dt><img src="/static/images/d4.jpg" alt=""></dt>
							<dd>
								<h3>爱丽丝的秘密</h3>
								<p>500003人想看</p>
							</dd>
						</dl>
					</a>
					<a href="#">
						<dl>
							<dt><img src="/static/images/d5.jpg" alt=""></dt>
							<dd>
								<h3>爱丽丝的秘密</h3>
								<p>500003人想看</p>
							</dd>
						</dl>
					</a>
					<a href="#">
						<dl>
							<dt><img src="/static/images/d6.jpg" alt=""></dt>
							<dd>
								<h3>爱丽丝的秘密</h3>
								<p>500003人想看</p>
							</dd>
						</dl>
					</a>
				</div>
				<div class="white"></div>
				<div class="date">
					<div class="navList">
						<a href="#" class="on">5月17日</a>
						<a href="#">5月18日</a>
						<a href="#">5月19日</a>
					</div>
					<div class="slideBox">
						<div class="slideItem">
							<ul>
								<li><span>16:55</span><span>30元</span><span class="sp1">特价</span></li>
								<li><span>18:55</span><span>40元</span><span class="sp1">特价</span></li>
								<li><span>20:55</span><span>35元</span><span class="sp1">特价</span></li>
								<li><span>21:55</span><span>45元</span><span class="sp1">特价</span></li>
								<li><span>21:55</span><span>45元</span><span class="sp1">特价</span></li>
							</ul>
						</div>
						<!--<div class="slideItem">
							<ul>
								<li><span>16:55</span><span>30元</span><span class="sp1">特价</span></li>
								<li><span>18:55</span><span>40元</span><span class="sp1">特价</span></li>
								<li><span>20:55</span><span>35元</span><span class="sp1">特价</span></li>
								<li><span>21:55</span><span>45元</span><span class="sp1">特价</span></li>
								<li><span>21:55</span><span>45元</span><span class="sp1">特价</span></li>
							</ul>
						</div>
						<div class="slideItem">
							<ul>
								<li><span>16:55</span><span>30元</span><span class="sp1">特价</span></li>
								<li><span>18:55</span><span>40元</span><span class="sp1">特价</span></li>
								<li><span>20:55</span><span>35元</span><span class="sp1">特价</span></li>
								<li><span>21:55</span><span>45元</span><span class="sp1">特价</span></li>
								<li><span>21:55</span><span>45元</span><span class="sp1">特价</span></li>
							</ul>
						</div>-->
					</div>
				</div>
			</div>
		</div>
 </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xingm{
	width: 100%;
	height: 100%;
	font-size: .14rem;
	display: flex;
	flex-direction: column;
	background: #313131;
}
/*-----------------头部样式-----------------*/
.header {
  width: 100%;
  height: .5rem;
  background: #1A1A1A;
  position: relative;
}
.header i {
  position: absolute;
  line-height: .5rem;
  left: .15rem;
  font-size: 20px;
  color: #CFCFCF;
}
.header h3 {
  text-align: center;
  color: #fff;
  line-height: .5rem;
}
/*-----------------主体样式-----------------*/
.content {
  width: 100%;
  -webkit-box-flex: 1;
  background: #272727;
  position: relative;
  overflow-y: scroll;
}
.content .white {
  width: 100%;
  height: .1rem;
  background: #313131;
}
.content .itemBox {
  width: 100%;
  box-sizing: border-box;
  padding: .15rem .13rem .13rem .13rem;
  border-bottom: 1px solid #3D3D3D;
  position: relative;
}
.content .itemBox h3 {
  color: #fff;
}
.content .itemBox h3 span {
  color: #F5B024;
  padding-left: .15rem;
}
.content .itemBox h4 {
  font-size: .12rem;
  padding:0 .02rem;
  display: inline-block;
  width:.5rem;
  height: .22rem;
  border: 1px solid #FFFF00;
  border-radius: 5px;
  text-align: center;
  line-height: .22rem;
  color: #FFFF00;
  margin-right: .1rem;
  margin-top: .1rem;
}
.content .itemBox .more {
  position: absolute;
  right: .2rem;
  top: .25rem;
}
.content .itemBox .more i {
 font-size: 20px;
  color: #CFCFCF;
}
.content .place {
  padding: .15rem .1rem;
}
.content .place h2 {
  color: #fff;
}
.content .movieBox {
  width: 94%;
  margin: 0 auto;
  padding-bottom: .1rem;
  display: -webkit-box;
}
.content .movieBox a {
  display: block;
  -webkit-box-flex: 1;
  margin-right: .25rem;
}
.content .movieBox a:nth-child(3) {
  margin-right: 0;
}
.content .movieBox a img {
  width: 100%;
  height: 100%;
}
.content .movieBox a h3 {
  color: #fff;
  white-space: nowrap;
  padding: .05rem 0;
}
.content .movieBox a p {
  color: #B3B3B3;
  white-space: nowrap;
}
.content .navList {
  width: 100%;
  display: -webkit-box;
  line-height: .28rem;
}
.content .navList a {
  display: block;
  -webkit-box-flex: 1;
  text-align: center;
  color: #fff;
  line-height:.4rem;
}
.content .navList .on {
  color: #FAAE25;
  border-bottom: 1px solid #FAEE25;
}
.content .slideBox {
  width: 100%;
  display: -webkit-box;
}
.content .slideBox .slideItem {
  width: 100%;
}
.content .slideItem {
  width: 100%;
}
.content .slideItem li {
	box-sizing: border-box;
  padding: 0.06rem  .13rem 0.06rem .13rem ;
  border-top: 1px solid #313131;
  width: 100%;
  line-height: .4rem;
}
.content .slideItem li span {
  color: #fff;
  display: inline-block;
  width: 33%;
  text-align: center;
}
.content .slideItem li .sp1 {
line-height: .36rem;
  border-radius: 5px;
  border: 1px solid #F4E51A;
  color: #F4E51A;
  width: 20%;
  margin-left:10%;
}
</style>
