<template>
  <div class="container">
    <HeaderComponent />
    <router-view :key="$route.fullPath" />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from "./layouts/HeaderComponent.vue";
import FooterComponent from "./layouts/FooterComponent.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
