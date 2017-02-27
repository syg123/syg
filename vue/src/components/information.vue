<template>
 <div class="information">
 	<header class="header">
		<router-link to="/found"><i class="iconfont">&#x3484;</i></router-link>
		<h3>资讯</h3>
	</header>
	<div class="content" id="content">
			<div class="iscroll">
				<div class="item"  v-for = "item in items">
					<dl>
						<dt><img :src="item.pic" alt=""></dt>
						<dd>
							<h2>{{item.title}}</h2>
						</dd>
						<div class="bottom">
							<span class="time">{{item.content.time}}</span><img :src="item.content.img1" alt="" class="sp1"><span>{{item.content.num1}}</span><img :src="item.content.img2" class="sp2" alt=""><span>{{item.content.num2}}</span>
						</div>
					</dl>
				</div>
				<!--<div class="item">
					<dl>
						<dt><img src="/static/images/f2.jpg" alt=""></dt>
						<dd>
							<h2>娜塔莉波特确定缺席《雷神3》</h2>
						</dd>
						<div class="bottom">
							<span class="time">28分钟前</span><img src="/static/images/f5.jpg" alt="" class="sp1"><span>290</span><img src="/static/images/f6.jpg" class="sp2" alt=""><span>220</span>
						</div>
					</dl>
				</div>
				<div class="item">
					<dl>
						<dt><img src="/static/images/f3.jpg" alt=""></dt>
						<dd>
							<h2>《海底总动员》内地定档</h2>
						</dd>
						<div class="bottom">
							<span class="time">30分钟前</span><img src="/static/images/f5.jpg" alt="" class="sp1"><span>260</span><img src="/static/images/f6.jpg" class="sp2" alt=""><span>320</span>
						</div>
					</dl>
				</div>
				<div class="item">
					<dl>
						<dt><img src="/static/images/f4.jpg" alt=""></dt>
						<dd>
							<h2>大表姐或加盟《十一罗汉》</h2>
						</dd>
						<div class="bottom">
							<span class="time">36分钟前</span><img src="/static/images/f5.jpg" alt="" class="sp1"><span>210</span><img src="/static/images/f6.jpg" class="sp2" alt=""><span>120</span>
						</div>
					</dl>
				</div>
				<div class="item">
					<dl>
						<dt><img src="/static/images/f1.jpg" alt=""></dt>
						<dd>
							<h2>《海底总动员》内地定档</h2>
						</dd>
						<div class="bottom">
							<span class="time">36分钟前</span><img src="/static/images/5.jpg" alt="" class="sp1"><span>210</span><img src="/static/images/f6.jpg" class="sp2" alt=""><span>120</span>
						</div>
					</dl>
				</div>
				<div class="item">
					<dl>
						<dt><img src="/static/images/f2.jpg" alt=""></dt>
						<dd>
							<h2>娜塔莉波特确定缺席《雷神3》</h2>
						</dd>
						<div class="bottom">
							<span class="time">28分钟前</span><img src="/static/images/f5.jpg" alt="" class="sp1"><span>290</span><img src="/static/images/f6.jpg" class="sp2" alt=""><span>220</span>
						</div>
					</dl>
				</div>-->
			</div>
		</div>
 </div>
</template>

<script>
import Vue from "vue";
import vueResource from "vue-resource";
Vue.use(vueResource)
export default {
  name: 'hello',
  data () {
    return {
      items: []	
    }
  },
	created() {
		this.$http.get("/static/faxian1.json")
		.then(function(res){
			this.items = res.body.item;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information{
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
  position: relative;
  overflow-y: scroll;
}
.content .item {
  width: 100%;
  box-sizing: border-box;
  padding: .2rem .1rem;
  border-bottom: 1px solid #464646;
}
.content .item dl {
  display: -webkit-box;
  position: relative;
}
.content .item dl dt {
  width: 28%;
	box-sizing: border-box;
  
  margin-right: .2rem;
}
.content .item dl dt img {
  width: 100%;
  height: auto;
}
.content .item dl dd h2 {
  color: #fff;
  font-size: .14rem;
  margin-top:.03rem;
}
.content .item dl .bottom {
  position: absolute;
  left: 34%;
  bottom: 10%;
  font-size: .12rem;
}
.content .item dl .bottom .time {
  color: #D0D0D0;
  display: inline-block;
  width: 30%;
  font-size: .12rem;
}
.content .item dl .bottom .sp1,
.content .item dl .bottom .sp2 {
  width: 5%;
  display: inline-block;
  margin: 0 0.06rem;
}
.content .item dl .bottom span {
  color: #f5e61b;
  font-size: .1rem;
}
</style>
