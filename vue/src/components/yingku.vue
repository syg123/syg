<template>
 <div class="yingku">
 	<header class="header">
		<router-link to="/found"><i class="iconfont">&#x3484;</i></router-link>
		<h3>影库</h3>
	</header>
	<div class="content" id="content">
			<div class="iscroll" id="iscroll">
				<div class="pic"><img src="/static/images/f7.jpg" alt=""></div>
				<div class="listBox">
					<ul class="picList">
						<li>
							<a href="#">
								<dl>
									<dt>
										<h3>最受期待</h3>
										<p>X战警</p>
									</dt>
									<dd>
										<img src="/static/images/f8.jpg" alt="">
									</dd>
								</dl>
							</a>
							<a href="#">
								<dl>
									<dt>
										<h3>热映口碑</h3>
										<p>百鸟朝凤</p>
									</dt>
									<dd>
										<img src="/static/images/f9.jpg" alt="">
									</dd>
								</dl>
							</a>
						</li>
						<li>
							<a href="#">
								<dl>
									<dt>
										<h3>北美票房之最</h3>
										<p>美国队长3</p>
									</dt>
									<dd>
										<img src="/static/images/f10.jpg" alt="">
									</dd>
								</dl>
							</a>
							<a href="#">
								<dl>
									<dt>
										<h3>TOP100</h3>
										<p>霸王别姬</p>
									</dt>
									<dd>
										<img src="/static/images/f11.jpg" alt="">
									</dd>
								</dl>
							</a>
						</li>
					</ul>
				</div>
				<div class="more">
					<h3>精彩推荐</h3>
					<div class="icon">
						<ul>
							<li>
								<dl>
									<dt><img src="/static/images/f12.jpg" alt=""></dt>
									<dd>
										<h3>唐人街探案<span>9.0分</span></h3>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/f13.jpg" alt=""></dt>
									<dd>
										<h3>澳门风云3<span>9.0分</span></h3>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/f14.jpg" alt=""></dt>
									<dd>
										<h3>功夫熊猫3<span>8.5分</span></h3>
									</dd>
								</dl>
							</li>
							<li></li>
							<li></li>
						</ul>
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
.yingku{
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
	font-size: .16rem;
  text-align: center;
  color: #fff;
  line-height: .5rem;
}
/*-----------------主体样式-----------------*/
.content {
  width: 100%;
  -webkit-box-flex: 1;
  background: #313131;
  overflow-Y: scroll;
}
.content .pic {
  width: 100%;
}
.content .pic img {
  width: 100%;
  height: 100%;
}
.content .listBox {
  width: 100%;
  display: -webkit-box;
  padding-top: .15rem;
  -webkit-box-lines: multiple;
}
.content .listBox .picList {
  width: 100%;
}
.content .listBox .picList li {
  width: 90%;
  display: -webkit-box;
  margin: .2rem auto;
}
.content .listBox .picList li:nth-child(1) {
  margin-top: 0;
}
.content .listBox .picList li a {
  display: block;
  -webkit-box-flex: 1;
  background: #242424;
  width: 50%;
  box-sizing: border-box;
  padding: .15rem 0;
  margin-right: .15rem;
}
.content .listBox .picList li a:nth-child(2) {
  margin-right: 0;
}
.content .listBox .picList li a dl {
  width: 100%;
  display: -webkit-box;
}
.content .listBox .picList li a dl dt {
  -webkit-box-flex: 1;
}
.content .listBox .picList li a dl dt h3 {
  color: #F2E51B;
  font-size: .12rem;
  padding: 10% 0;
  margin-left: 0.06rem;
}
.content .listBox .picList li a dl dt p {
  color: #BCBCBC;
  margin-left: .06rem;
}
.content .listBox .picList li a dl dd {
  width: 35%;
  margin-right: .1rem;
}
.content .listBox .picList li a dl dd img {
  width: 100%;
}
.content .more {
  width: 90%;
  margin: 0 auto;
  background: #242424;
  padding: 0 .1rem;
  box-sizing: border-box;
}
.content .more h3 {
  color: #F4E41D;
  line-height: .4rem;
}
.content .more .icon {
  width: 100%;
  display: -webkit-box;
}
.content .more .icon ul {
  width: 100%;
}
.content .more .icon li {
  width: 100%;
  display: -webkit-box;
}
.content .more .icon dl {
  width: 100%;
  -webkit-box-flex: 1;
  margin-right: .1rem;
}
.content .more .icon dl:nth-child(3) {
  margin-right: 0;
}
.content .more .icon dl dt {
  width: 100%;
}
.content .more .icon dl dt img {
  width: 100%;
}
.content .more .icon dl dd {
  white-space: nowrap;
}
.content .more .icon dl dd h3 {
  color: #fff;
  font-size: .1rem;
}
.content .more .icon dl dd span {
  font-size: .12rem;
  color: #F6B223;
}
</style>
