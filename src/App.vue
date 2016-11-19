<template>
  <div id="app">
    <header>
      <div class="inner">
        <router-link to="/" exact>
          <img class="logo" src="/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/">Home</router-link>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<style>
</style>
