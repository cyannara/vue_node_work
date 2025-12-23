<template>
  <div class="container">
    <nav>
    <router-link to="/user">사용자</router-link> |
    <router-link to="/admin/one">adminOne</router-link> |
    <router-link to="/admin/two">adminTwo</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style scoped>
  .container {
    border :1px solid green;
    background-color: yellow;
  }
</style>