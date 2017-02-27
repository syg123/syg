<template>
  <router-view></router-view>
</template>

<script>
//import Hello from './components/home'

export default {
  name: 'app',
  components: {
   // Hello
  }
}
</script>

<style>
@import "./css/reset.css";
@import "./css/common.scss";
.app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #272727;
}
</style>
