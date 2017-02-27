<template>
 <div id="app" class="app">
    <section>
    	<router-view></router-view>
    </section>
    <footer class="footer">
    	<ul>
    		<li>
    			<router-link to="/home"><i class="iconfont">&#xe679;</i>电影</router-link>
    		</li>
    		<li>
    			<router-link to="/yuanxian"><i class="iconfont">&#xe60a;</i>院线</router-link>
    		</li>
    		<li>
    			<router-link to="/found"><i class="iconfont">&#xe602;</i>发现</router-link>
    		</li>
    		<li>
    			<router-link to='/my'><i class="iconfont">&#xe66d;</i>我的</router-link>
    		</li>
    	</ul>		
    </footer>
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
section{
	flex: 1;
	overflow: hidden;
}
.footer {
	height: .5rem;
	font-size: .14rem;
	width: 100%;
	background: #1A1A1A;
}
.footer ul{
		display: flex;
	}
	.footer ul li{
		flex: 1;
		text-align: center;
	}
.footer ul li a,.footer ul li i{
		color: #B5B5B5;
	}
.footer ul li i{
	font-size: .20rem;
	display: block;
	padding: 3px 0;
}
.footer .router-link-active{
	color: #FEF200;
}.footer .router-link-active i{
	color: #FEF200;
}	
</style>
