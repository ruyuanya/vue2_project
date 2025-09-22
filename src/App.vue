<template>
  <div id="app">
    <router-link to="/home" v-if="$route.path !== '/home'">
      <div class="ys">点我进home~</div>
    </router-link>
    <router-link to="/about" v-if="$route.path !== '/about'">
      <div class="ys">点我进关于页面~</div>
    </router-link>
    <h1 v-if="$route.path !== '/home' && $route.path !== '/about'">
      人生苦短，我用vue
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ys {
  background-color: #4CAF50;
  /* 绿色 */
  border: none;
  /* 字体白色 */
  color: white;
  padding: 15px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 5px 5px;
}

.content {
  
}
</style>
