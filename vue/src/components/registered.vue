<template>
 <div class="registered">
 	<header class="header">
		<router-link to="/my"><i class="iconfont">&#x3484;</i></router-link>
		<h3>注册</h3>
	</header>
	<div class="box">
		<ul>
			<li><input type="text" @blur="isuser" @focus="isnull" v-model="user" placeholder="请输入6-16位用户名"/></li>
			<li><input type="password" v-model="paw" placeholder="请输入密码"/></li>
			<li><input type="password" v-model="pawok" placeholder="再次输入密码"/></li>
		</ul>
		<p @click = "registered">注册</p>
		<router-link to="/login"><span>立即登录</span></router-link>
		<div class="hint">{{hint}}</div>
	</div>
 </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      hint: '',
      user:"",
      paw:"",
      pawok:""
    }
  },
  methods:{
  	isuser:function(){
  		this.hint = "";
  		var reg = /[a-zA-Z0-9_]{6,16}/;
  		if(!reg.test(this.user)){
  			this.hint = "用户名格式错误";
  			return;
  		}
  	},
  	isnull:function(){
  		this.hint = "";
  	},
  	registered:function(){
  		if(!this.user || !this.paw) return "";
  		this.hint = "";
  		if(this.paw!=this.pawok){
  			this.hint = "两次密码输入不一致";
  			return;
  		}else{
  			this.$http({
	  			url:"http://localhost:3333/register",
	  			params:{
	  				userName:this.user,
	  				passWord:this.paw
	  			}
  			}).then(function(res){
  				if(res.body=="ok"){
  					this.$router.push("/login")
  				}else{
  					this.hint = "注册失败";
  				}
  			})
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.registered{
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
