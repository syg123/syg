<template>
 <div class="my">
 	<Confirm></Confirm>
  <Alert title="您还没有登录" v-model = "isShow"></Alert>
 	<header class="header">
 		<div @click = "jump()">
		<h3><span class="pic"><img :src="url"></span>{{user}}</h3>
		<span class="more"><i class="iconfont">&#xe6a0;</i></span>
		</div>
	</header>
 	<div class="content" id="content">
			<div class="list">
				<a href="#"><i class="iconfont">&#xe64b;</i><br>喜欢<span>(20)</span></a>
				<a href="#"><i class="iconfont">&#xe60f;</i><br>评论<span>(30)</span></a>
				<a href="#"><i class="iconfont">&#xe60c;</i><br>发现<span>(50)</span></a>
				<a href="#"><i class="iconfont">&#xe61a;</i><br>话题<span>(55)</span></a>
			</div>
			<div class="info">
				<ul>
					<li>我的消息<i class="iconfont">&#xe6a0;</i></li>
					<li>会员中心<i class="iconfont">&#xe6a0;</i></li>
					<li>优惠券<i class="iconfont">&#xe6a0;</i></li>
					<li>我的订单<i class="iconfont">&#xe6a0;</i></li>
					<li>我的钱包<i class="iconfont">&#xe6a0;</i></li>
					<li>设置<i class="iconfont">&#xe6a0;</i></li>
					<li @click = "exit"><span>退出登录</span></li>
				</ul>
			</div>		
 	</div>	
 </div>

</template>

<script>
import Vue from 'vue'
import { ConfirmPlugin,Confirm,Alert  } from 'vux'
Vue.use(ConfirmPlugin)
export default {
  name: 'hello',
  components: {
  	Confirm,
    Alert
  },
  data () {
    return {
      user: '立即登录',
      url:"/static/images/m1.jpg",
      isShow:false
    }
  },
  created(){
  	if(localStorage.getItem("admin")){
  		 this.user = localStorage.getItem("user")?localStorage.getItem("user"):"游客";
  		 this.url = localStorage.getItem("url")?localStorage.getItem("url"):"/static/images/m1.jpg";
  	}
  },
  methods:{
  	jump:function(){
  		if(localStorage.getItem("admin")){
  			this.$router.push("/my")
  		}else{
  			this.$router.push("/login")
  		}
  	},
  	exit(){
  		var that = this;
  		if(localStorage.getItem("admin")){
  			this.$vux.confirm.show({
  				title:"确定退出吗",
			  	onConfirm(){
			  		that.$router.push("/home")
			  		localStorage.clear();
			 	}
			  })
  		}else{
        this.isShow=true;
      }
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my{
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
  position: relative;
}
.header h3 {
  line-height: .5rem;
  color: #CDCDCD;
  font-size: .14rem;
}
.header h3 .pic {
  display: inline-block;
  width: .4rem;
  height: .4rem;
  vertical-align: middle;
  margin-left: .1rem;
  margin-right: .1rem;
}
.header h3 .pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.header .more {
  position: absolute;
  right: 4%;
  top: 30%;
  color:#CDCDCD ;
}
/*-----------------主体样式-----------------*/
.content {
  width: 100%;
  -webkit-box-flex: 1;
  background: #313131;
  overflow: auto;
}
.content .list {
  width: 90%;
  margin: 0 auto;
  padding-bottom: .1rem;
  display: -webkit-box;
  background: #272727;
}
.content .list a {
  display: block;
  -webkit-box-flex: 1;
  width: 25%;
  text-align: center;
  color: #fff;
  font-size: .14rem;
}
.content .list a i {
	line-height:.5rem;
  font-size: .24rem;
  font-weight: 900;
  color: #fff;
}
.content .list a span {
  font-size: .14rem;
  color: #FFEF00;
}
.content .info {
  width: 100%;
  background: #313131;
  margin-top: .1rem;
  overflow-y: scroll;
}
.content .info ul {
  width: 90%;
  margin: 0 auto;
  background: #272727;
  
}
.content .info ul li {
	font-size: .16rem;
  width: 100%;
  line-height: .66rem;
  border-bottom: 1px solid #3D3D3D;
  color: #fff;
  padding-left: .1rem;
  position: relative;
}
.content .info ul li i{
	float: right;
	padding-right: .2rem;
}
.content .info ul li:last-child{
	padding: .15rem 0;
	border-bottom: none;
}
.content .info ul li span{
	display: block;
	width: 90%;
	height: .48rem;
	background: #F4E51A;
	line-height: .48rem;
	text-align: center;
	color: #000;
	border-radius: 10px;
	margin: 0 auto;
}
</style>
