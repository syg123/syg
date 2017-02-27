<template>
  <div class="city">
  	<header class="header">
			<router-link to="/home/one"><i class="iconfont">&#x3484;</i></router-link>
			<h3>选择城市</h3>
		</header>
		<section>
				<h2>定位城市</h2>
				<p>北京</p>
				<h2>热门城市</h2>
				<ul>
					<li>
						<span @click = "city($event)">上海</span>
						<span @click = "city($event)">深圳</span>
						<span @click = "city($event)">武汉</span>
						<span @click = "city($event)">天津</span>
					</li>
					<li>
						<span @click = "city($event)">广州</span>
						<span @click = "city($event)">南京</span>
						<span @click = "city($event)">西安</span>
						<span @click = "city($event)">杭州</span>
					</li>
					<li>
						<span @click = "city($event)">大连</span>
						<span @click = "city($event)">重庆</span>
						<span>其他</span>
						<span></span>
					</li>
				</ul>
		</section>
  </div>
</template>
<script>
import Vue from "vue";
import vueResource from "vue-resource";
Vue.use(vueResource)
export default {
  name: 'city',
  data () {
    return {
    	
    }
  },
  created(){
  	
  },
  methods:{
  	city(e){
  		let  newCity = e.target.innerHTML; 
  		this.$router.push({
  			path:"/home/one",
  			query:newCity
  			})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.city{
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
section{
	width: 100%;
  flex: 1;
  background: #272727;
  position: relative;
  overflow-y: scroll;
}
section h2{
	height: .4rem;
	line-height: .4rem;
	padding-left: .1rem;
	font-size: .16rem;
	color: #f5e617;
	background: #313131;
}
section p{
	height: .4rem;
	line-height: .4rem;
	padding-left: .1rem;
	font-size: .14rem;
	color: #fff;
}
section ul{
	width: 100%;
}
section ul li{
	height: .5rem;
	line-height: .5rem;
	display: flex;
	border-bottom: 1px solid #343434;
}
section ul li span{
	flex: 1;
	text-align: center;
	border-right: 1px solid #343434;
	color: #FFFFFF;
}
</style>