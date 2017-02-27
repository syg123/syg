<template>
 <div class="search">
 		<header class="header">
			<router-link to="/home/one" class="back"><i class="iconfont">&#x3484;</i></router-link>
			<div class="inp"><input type="text" placeholder="请输入电影名" v-model = "val" @keyup = "search(val)"></div>
		</header>
		<div class="searchBox">
			<ul>
				<li v-for="item in data">{{item.title}}</li>
			</ul>
		</div>
		<div class="content">
			<div class="contentBox">
				<div class="title">
					<h3>热门搜索</h3>
				</div>
				<div class="item">
					<a href="javascript:;;">美国队长</a>
					<a href="javascript:;;">魔兽</a>
					<a href="javascript:;;">超脑48小时</a>
				</div>
				<div class="title">
					<h3>类型</h3>
				</div>
				<div class="type">
					<ul>
						<li><a href="javascript:;;">喜剧</a>
						<a href="javascript:;;">恐怖</a>
						<a href="javascript:;;">动作</a>
						<a href="javascript:;;">冒险</a></li>
						<li><a href="javascript:;;">科幻</a>
						<a href="javascript:;;">犯罪</a>
						<a href="javascript:;;">悬疑</a>
						<a href="javascript:;;">剧情</a></li>
						<li><a href="javascript:;;">动画</a>
						<a href="javascript:;;">战争</a>
						<a href="javascript:;;">其他</a>
						<a href="javascript:;;" style="opacity:0">其他</a></li>
					</ul>
				</div>
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
      val: '',
      items:[],
      data:[]
    }
  },
  methods:{
  	search:function(val){
  		var that = this;
  		that.data=[];
  		val && this.items.forEach(function(v,i){
  			if(v.title.indexOf(val)!=-1){
  				that.data.push(that.items[i])
  			}
  		})
  	}
  },
  created() {
		this.$http.get("/static/home1.json")
		.then(function(res){
			this.items = res.body.hot;
		},function(err){
        
    })
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
	width: 100%;
	height: 100%;
	font-size: .14rem;
	display: flex;
	flex-direction: column;
	background: #313131;
}
.searchBox{
	position: absolute;
	top: .5rem;
	width: 70%;
	left: 15%;
	color: #fff;
	background: #1A1A1A;
}
.searchBox ul li{
	line-height: 24px;
	border-bottom: 1px solid #333;
	padding-left: .1rem;
}
/*-----------------头部样式-----------------*/
.header {
  width: 100%;
  height: .5rem;
  background: #1A1A1A;
  position: relative;
}
.header .back {
	float: left;
	line-height: .5rem;
	padding-left: .1rem;
}
.header .back i {
  font-size: 20px;
  color: #CFCFCF;
}
.header .inp {
  width: 70%;
  height: .3rem;
  margin: .1rem auto;
  border: 1px solid #484848;
  border-radius: 5px;
  
}
.header .inp input {
  height: .2rem;
  margin: .05rem .2rem;
  box-sizing: border-box;
  display: block;
  outline: none;
  color: #fff;
  font-size: .12rem;
  background:none;
  border: none;
}
.content {
  width: 100%;
  -webkit-box-flex: 1;
  background: #313131;
}
.content .contentBox .title {
  width: 100%;
  background: #313131;
  padding-left: .15rem;
}
.content .contentBox .title h3 {
  color: #F4E51A;
  line-height: .36rem;
}
.content .contentBox .item {
  padding: .15rem;
  background: #272727;
}
.content .contentBox .item a {
  color: #CFCFCF;
  padding-right: .2rem;
  font-size: .12rem;
}
.content .contentBox .type {
  width: 100%;
  background: #272727;
}
.content .contentBox .type ul {
  width: 100%;
  background: #272727;
}
.content .contentBox .type ul li {
  width: 100%;
  display: -webkit-box;
  border-bottom: 1px solid #CFCFCF;
}
.content .contentBox .type ul li:nth-child(3) {
  border-bottom: 0;
}
.content .contentBox .type ul li a {
  display: block;
  -webkit-box-flex: 1;
   font-size: .12rem;
  padding: .15rem;
  text-align: center;
  color: #CFCFCF;
  border-right: 1px solid #CFCFCF;
}
.content .contentBox .type ul li a:nth-child(4) {
  border-right: 0;
}
</style>
