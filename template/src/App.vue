<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <epilog></epilog>
  </div>
</template>
<script>
  import Navigation from './components/Header/Navigation.vue';
  import Epilog from './components/Epilog.vue';

  export default {
    name: 'app',
    components: {
      Navigation, Epilog
    }
  }
</script>
<style lang="sass">
  /* example variable */
  $primary: #f00;
  /* finally, reference bulma */
  @import '~bulma';
</style>
