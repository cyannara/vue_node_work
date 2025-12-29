<script setup>
//import { ref } from "vue";
</script>

<template>
  <div class="row">
    <div class="col"><router-view /></div>
    <div class="col"><router-view name="right" /></div>
  </div>
</template>

<style scoped></style>
