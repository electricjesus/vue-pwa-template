<template>
  <div id="app">
    <header>
      <navigation />    
    </header>    
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
  import Navigation from './components/Navigation.vue'
  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  body * {
    font-family: 'Open Sans';
  }
</style>
