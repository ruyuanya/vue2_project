<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <router-link to="/home">
          <div class="button" :class="{ active: $route.path === '/home' }">个人</div>
        </router-link>
        <router-link to="/about">
          <div class="button" :class="{ active: $route.path === '/about' }">关于</div>
        </router-link>
        <!-- 首页按钮：正常显示，不需要条件判断 -->
        <router-link to="/">
          <div class="button" :class="{ active: $route.path === '/' }">首页</div>
        </router-link>
      </div>
      
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 基础样式设置 */
#app {
  height: 800px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 布局容器 */
.container {
  display: flex;
  min-height: 800px;
}

/* 侧边栏样式 */
.sidebar {
  height: 790px;
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px 0;
  border-right: 1px solid #e9ecef;
}

/* 链接样式，并去除下划线 */
.sidebar a {
  display: block;
  text-decoration: none;
}

/* 按钮样式 */
.button {
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.5px;
  color: #4CAF50;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;
}

/* 鼠标悬停效果样式 */
.button:hover {
  background-color: #e8f5e9;
  transform: translateX(5px);/* 向右平移5像素 */
}

/* 点击后的按钮激活状态 */
.button.active {
  background-color: #e8f5e9;
  border-left: 4px solid #4CAF50;
}

/* 右侧内容区域 */
.content {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

/* 内容区域子元素 */
.content > div {
  width: 100%;
  text-align: center;
}

.content h1, .content h2 {
  margin: 20px 0;
  color: #2c3e50;
}
</style>