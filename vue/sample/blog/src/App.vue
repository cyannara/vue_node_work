<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import  NavBar from './components/NavBar.vue'
  import  Profile from './components/Profile.vue'
  import  Application from './components/Applications.vue'
export default {
  name:'App',
  components: {NavBar, Profile, Application}
}
</script>

// <script setup>
//  import  NavBar from './components/NavBar.vue'
// </script>

<template>
  <div>
    <nav-bar/>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
