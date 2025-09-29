<template>
    <div class="home-content">
        <h1>这里是首页</h1>
        <p>欢迎来到首页！</p>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
};
</script>

<style scoped>
.home-content {
  text-align: center;
  max-width: 600px;
}

.home-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.home-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #546e7a;
}
</style>