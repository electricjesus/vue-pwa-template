<template>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item>          
        <router-link to="/" exact>
          <img class="logo" src="/logo-48.png" alt="logo">
        </router-link>
      </el-menu-item>
      <el-menu-item index="home">
        Home
      </el-menu-item>
      <el-submenu index="workspace">
        <template slot="title">Workspace</template>
        <el-menu-item index="item-one">First Item</el-menu-item>
        <el-menu-item index="item-two">Second Item</el-menu-item>        
      </el-submenu>      
    </el-menu>
</template>
<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .logo {
    margin-top:5px;
  }
</style>