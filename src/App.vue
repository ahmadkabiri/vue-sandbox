<template>
<div>

  <HomeWorld/>
</div>
</template>

<script>
import HomeWorld from './components/HomeWorld.vue'

export default {
  name: 'App',
  components: {
    HomeWorld
  }
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
</style>
