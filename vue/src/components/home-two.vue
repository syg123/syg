<template>
	<div class="content">
		<div class="itemBox">
			<div class="title">
				<h3>预约推荐</h3></div>
			<div class="slide">
				<div class="icons">
					<a href="javascript:;;"><img src="/static/images/c1.jpg" alt=""></a>
					<a href="javascript:;;"><img src="/static/images/c1.jpg" alt=""></a>
					<a href="javascript:;;"><img src="/static/images/c1.jpg" alt=""></a>
				</div>
			</div>
		</div>
		<div class="lateBox">
			<div class="title">
				<h3>近期上映</h3>
				<div class="date">
					<h2 class="now">5月17日</h2>
					<h2>5月18日</h2>
				</div>
			</div>
			<div class="icon" id="icon">
				<div class="iscroll" id="iscroll">
					<div class="swipeBox">
						<ul class="item">
							<li class="listBox">
								<dl>
									<dt><img src="/static/images/c3.jpg" alt=""></dt>
									<dd>
										<h3>X战警3</h3>
										<p>50002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c4.jpg" alt=""></dt>
									<dd>
										<h3>惊天魔盗团</h3>
										<p>80002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c5.jpg" alt=""></dt>
									<dd>
										<h3>魔兽</h3>
										<p>90002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c6.jpg" alt=""></dt>
									<dd>
										<h3>X战警2</h3>
										<p>20002人想看</p>
									</dd>
								</dl>
							</li>
							<li class="listBox">
								<dl>
									<dt><img src="/static/images/c7.jpg" alt=""></dt>
									<dd>
										<h3>爱丽丝的秘密</h3>
										<p>50002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c8.jpg" alt=""></dt>
									<dd>
										<h3>澳门风云2</h3>
										<p>80002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c9.jpg" alt=""></dt>
									<dd>
										<h3>功夫熊猫</h3>
										<p>90002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c10.jpg" alt=""></dt>
									<dd>
										<h3>唐人街探案</h3>
										<p>20002人想看</p>
									</dd>
								</dl>
							</li>
							<li class="listBox">
								<dl>
									<dt><img src="/static/images/c3.jpg" alt=""></dt>
									<dd>
										<h3>X战警3</h3>
										<p>50002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c4.jpg" alt=""></dt>
									<dd>
										<h3>惊天魔盗团</h3>
										<p>80002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c5.jpg" alt=""></dt>
									<dd>
										<h3>魔兽</h3>
										<p>90002人想看</p>
									</dd>
								</dl>
								<dl>
									<dt><img src="/static/images/c6.jpg" alt=""></dt>
									<dd>
										<h3>X战警2</h3>
										<p>20002人想看</p>
									</dd>
								</dl>
							</li>
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
		components: {
		},
		data() {
			return {
				
			}
		},
		created() {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*-----------------主体样式-----------------*/
	.content {
		width: 100%;
		-webkit-box-flex: 1;
		background: #272727;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		font-size: .l4rem;
	}
	
	.content .itemBox {
		overflow: hidden;
		width: 100%;
	}
	
	.content .itemBox .title {
		width: 100%;
		background: #313131;
		padding-left: .1rem;
	}
	
	.content .itemBox .title h3 {
		color: #fff;
		line-height: .44rem;
		font-weight: 500;
	}
	
	.content .itemBox .slide {
		width: 100%;
		padding: .1rem 0;
		display: -webkit-box;
	}
	
	.content .itemBox .icons {
		width: 95%;
		margin: 0 auto;
		display:flex;
	}
	
	.content .itemBox .icons a {
		flex: 1;
		display:inline-block;
		margin-right: .1rem;
	}
	.content .itemBox .icons a:nth-child(3){
		margin-right: 0;
	}
	
	
	.content .itemBox .icons a img {
		width: 100%;
		height: 100%;
	}
	
	.content .lateBox {
		-webkit-box-flex: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	
	.content .lateBox .title {
		width: 100%;
		height:.42rem;
		background: #313131;
		padding-left: .1rem;
	}
	
	.content .lateBox .title h3 {
		color: #fff;
		line-height: .42rem;
		font-weight: 500;
		float: left;
	}
	
	.content .lateBox .title .date {
		width: 1.6rem;
		height: .3rem;
		float: right;
		margin: 0.06rem .3rem 0 0;
		background: #464646;
		border-radius: 6px;
		position: relative;
	}
	
	.content .lateBox .title .date h2 {
		float: left;
		width: 50%;
		line-height: .3rem;
		text-align: center;
		color: #fff;
	}
	
	.content .lateBox .title .date h2:nth-child(1) {
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	
	.content .lateBox .title .date h2:nth-child(2) {
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	
	.content .lateBox .title .date .now {
		background: #F4E51A;
		color: #000;
	}
	.content .lateBox .icon {
		width: 100%;
		-webkit-box-flex: 1;
		position: relative;
		overflow: hidden;
	}
	
	.content .lateBox .icon .swipeBox {
		width: 100%;
		display: -webkit-box;
	}
	
	.content .lateBox .icon .swipeBox .item {
		width: 100%;
	}
	.content .lateBox .icon .swipeBox .item li{
		width: 95%;
		margin: 0 auto;
	}
	
	.content .lateBox .icon .listBox {
		width: 100%;
		display: -webkit-box;
		padding-top: .1rem;
	}
	
	.content .lateBox .icon .listBox:nth-child(1) {
		padding-top: 0;
	}
	
	.content .lateBox .icon dl {
		-webkit-box-flex: 1;
		padding-left: .1rem;
	}
	
	.content .lateBox .icon dl:nth-child(1) {
		padding-left: 0;
	}
	
	.content .lateBox .icon dl dt img {
		width: 100%;
		height: 100%;
	}
	
	.content .lateBox .icon dl dd h3 {
		color: #fff;
		white-space: nowrap;
		font-size: .1rem;
	}
	
	.content .lateBox .icon dl dd p {
		color: #B3B3B3;
		white-space: nowrap;
		font-size: .1rem;
	}
</style>