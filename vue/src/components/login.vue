<template>
 <div class="login">
 	<header class="header">
		<router-link to="/my"><i class="iconfont">&#x3484;</i></router-link>
		<h3>登录</h3>
	</header>
	<div class="box">
		<ul>
			<li><input type="text" placeholder="请输入用户名" v-model="userName"/></li>
			<li><input type="password" placeholder="请输入密码" v-model="passWord"/></li>
		</ul>
		<p @click="login">登录</p>
		<router-link to="/registered"><span>快速注册</span></router-link>
		<div class="hint">{{hint}}</div>
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
      userName: '',
      passWord: '',
      hint:"",
      data:[]
    }
  },
  methods:{
  	login:function(){
  		if(!this.userName || !this.passWord) return "";
  		this.$http({
  			url:"http://localhost:3333/login",
  			params:{
  				userName:this.userName,
  				passWord:this.passWord
  			}
  		}).then(function(res){
  			if(res.body[0]){
  				this.hint = "";
  				localStorage.setItem("user",res.body[0].nickname);
  				localStorage.setItem("admin",res.body[0].userName);
  				localStorage.setItem("url",res.body[0].imgurl);
  			 	this.$router.push("/my")
  			}else{
  				this.hint = "用户名或密码错误";
  			}
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	width: 100%;
	height: 100%;
	font-size: .14rem;
	display: flex;
	flex-direction: column;
	background:#313131 ;
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
.box{
	width: 90%;
	margin: .2rem auto;
	line-height: 36px;
}
.box ul {
	background:#1A1A1A;
	padding-bottom: 15px;
	margin: 10px;
}
.box ul li{
	border-bottom: 1px solid #666;
	height: 36px;
	width: 100%;
}
input{
	height: 36px;
	width: 100%;
	background: none;
	outline: none;
	border: none;
	font-size: .12rem;
	padding-left: .1rem;
	color: #fff;
}
.box p{
	margin: 10px;
	margin-bottom: 0;
	height: 36px;
	text-align: center;
	line-height: 36px;
	background: #FFEF00;
	border-radius: 6px;
}
.box span{
	color:#FFEF00;
	font-size: .12rem;
	margin-right: .1rem;
	float: right;
}
.hint{
	margin-left: 10px;
	color: #fff;
}
</style>
