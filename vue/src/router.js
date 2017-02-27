import index from "./components/index.vue";
import home from "./components/home.vue";
import yuanxian from "./components/yuanxian.vue";
import found from "./components/found.vue";
import my from "./components/my.vue";
import search from "./components/search.vue";
import xingm from "./components/xingm.vue";
import information from "./components/information.vue";
import yingku from "./components/yingku.vue";
import registered from "./components/registered.vue";
import login from "./components/login.vue";
import city from "./components/city.vue";
const routes = [{
	name: "index",
	path: "/index",
	redirect: '/home/one',
	component: index,
	children: [{
		name: "home",
		path: "/home",
		redirect: '/home/one',
		component: home,
		children: [{
			name: "home-one",
			path: "one",
			component: function(resolve) {
				require(['./components/home-one'], resolve)
			}

		}, {
			name: "home-two",
			path: "two",
			component: function(resolve) {
				require(['./components/home-two'], resolve)
			}
		}, {
			name: "home-three",
			path: "three",
			component: {
				template: "<div style=color:#fff>此页面没有</div>"
			}
		}]
	}, {
		name: "yuanxian",
		path: "/yuanxian",
		component: yuanxian
	}, {
		name: "found",
		path: "/found",
		component: found
	}, {
		name: "my",
		path: "/my",
		component: my
	}]
},{
	name: "search",
	path: "/search",
	component: search
},{
	name: "xingm",
	path: "/xingm",
	component: xingm
},{
	name: "information",
	path: "/information",
	component: information
},{
	name: "yingku",
	path: "/yingku",
	component: yingku
},{
	name: "login",
	path: "/login",
	component: login
},{
	name: "registered",
	path: "/registered",
	component: registered
},{
	name: "city",
	path: "/city",
	component: city
},{
	path: "*",
	redirect: "/home/one"
}]
export default routes;
//module.exports = routes