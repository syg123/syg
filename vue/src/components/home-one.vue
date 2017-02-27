 <template>
	<div class="slideItem" id="slideItem">
	<Alert title="还未上映,敬请期待" v-model = "isShow"></Alert>
		<div class="slide">
			<div class="swipeItem">
				<section class="item">
					<dl v-for = "item in items">
						<dt><img v-bind:src="item.pic" alt=""></dt>
						<dd class="d1">
							<div class="title">
								<h3>{{item.title}}</h3></div>
							<p>{{item.content}}<br>{{item.type}}</p>
							<p>主演：<span>{{item.actor}}</span></p>
						</dd>
						<dd class="d2">
							<h4>{{item.point}}</h4>
							<h2 @click="buy">{{item.buy}}</h2>
						</dd>
					</dl>
					<!--<dl>
						<dt><img src="../images/a6.jpg" alt=""></dt>
						<dd class="d1">
							<div class="title">
								<h3>百鸟朝凤</h3></div>
							<p>两大手艺人，唢呐感情深<br>经典情感大戏</p>
							<p>主演：<span>李雪健</span></p>
						</dd>
						<dd class="d2">
							<h4>8.8分</h4>
							<h2>购票</h2>
						</dd>
					</dl>
					<dl>
						<dt><img src="../images/a7.jpg" alt=""></dt>
						<dd class="d1">
							<div class="title">
								<h3>超脑48小时</h3></div>
							<p>铁人打美队，群雄来战队<br>经典复仇大戏</p>
							<p>主演：<span>安吉丽娜·朱莉</span></p>
						</dd>
						<dd class="d2">
							<h4>8.5分</h4>
							<h2>购票</h2>
						</dd>
					</dl>
					<dl>
						<dt><img src="../images/b3.jpg" alt=""></dt>
						<dd class="d1">
							<div class="title">
								<h3>美国队长</h3></div>
							<p>铁人打美队，群雄来战队<br>经典复仇大戏</p>
							<p>主演：<span>安吉丽娜·朱莉</span></p>
						</dd>
						<dd class="d2">
							<h4>8.5分</h4>
							<h2>购票</h2>
						</dd>
					</dl>--> 
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import { ConfirmPlugin,Confirm,Alert  } from 'vux'
import vueResource from "vue-resource";
console.log(Alert)
Vue.use(vueResource)
Vue.use(ConfirmPlugin)
export default {
	name: 'hello',
	data() {
		return {
			items:[],
			isShow:false
		}
	},
	components: {
  		Confirm,
  		Alert
  	},
	methods:{
		buy(){
			const that = this;
			if(!localStorage.getItem("admin")){
  				this.$vux.confirm.show({
  					title:"您还没有登录，请先登录",
			  		onConfirm(){
			  			that.$router.push("/login")
			 		}
			  	})
  			}else{
  				this.isShow = true;
  			}
		}
	},
	created() {
		this.$http.get("/static/home1.json")
		.then(function(res){
			this.items = res.body.hot;
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*-----------------主体样式-----------------*/
	.main .slideItem {
		position: relative;
		-webkit-box-flex: 1;
	}
	
	.main .item dl {
		width: 100%;
		display: -webkit-box;
		height: 1.1rem;
		padding: .2rem .15rem;
		box-sizing: border-box;
		border-bottom: 2px solid #3D3D3D;
	}
	
	.main .item dl dt {
		width: 18%;
	}
	
	.main .item dl dt img {
		width: 100%;
	}
	
	.main .item dl .d1 {
		width: 55%;
		margin-left: .2rem;
		position: relative;
	}
	
	.main .item dl .d1 h3 {
		float: left;
		color: #fff;
		font-size: .12rem;
		line-height: .2rem;
	}
	
	.main .item dl .d1 .title {
		width: 100%;
	}
	
	.main .item dl .d1 p,
	.main .item dl .d1 span {
		clear: both;
		font-size: .12rem;
		color: #B6B6B6;
		line-height: .18rem;
	}
	
	.main .item dl .d2 {
		width: 15%;
		text-align: right;
	}
	
	.main .item dl .d2 h4 {
		font-size: .12rem;
		color: #F58B20;
	}
	
	.main .item dl .d2 h2 {
		width: .48rem;
		height: .22rem;
		line-height: .22rem;
		text-align: center;
		color: #F3E101;
		border: 1px solid #F3E101;
		border-radius: 5px;
		font-size: .12rem;
		display: inline-block;
		margin-top: .3rem;
		margin-right: 10px;
	}
</style>