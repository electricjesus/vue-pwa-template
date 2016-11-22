<template>
<nav class="nav has-shadow">
  <div class="nav-left">
    <router-link to="/" exact class="nav-item is-brand">
      <img src="/logo-48.png" alt="" />
    </router-link>
    <router-link to="/" class="nav-item">
      Home
    </router-link>    
  </div>

  <div class="nav-center">
    <span class="nav-item">
      <searchbar></searchbar>
    </span>      
  </div>

  <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
    <span></span>
    <span></span>
    <span></span>
  </span>
  <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">
    <router-link to="/status" class="nav-item">
      Status
    </router-link>
    <span class="nav-item">
      <router-link to="/login" class="sign-in ga">
        <i class="fa fa-google-plus"></i> Sign-in
      </router-link>      
    </span>
  </div>
</nav>
</template>
<script>
  import Searchbar from './Searchbar.vue';
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navigation',
    data: function() {
      return {
        isActive: false
      }
    },
    methods: {
      toggleNav(event) {        
        this.isActive = !this.isActive
      }
    },
    components: {
      Searchbar
    },    
  }

</script>
<style lang="sass">
  @import '~bulma';

  .sign-in {
    &.ga {
      @extend .button;
      background: #dd4b39;
      color: #fff;
    }
  }

  .fa {
    font-size: 1.1em;    
    margin-right: 8px;
  }
</style>
