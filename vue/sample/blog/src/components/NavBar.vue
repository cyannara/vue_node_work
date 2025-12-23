<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="menu in menus" :key="menu.key">
          <!-- <a class="nav-link" :class="{active : menu.key==curMenu}" :href="menu.url">{{menu.value}}</a> -->
          <router-link class="nav-link" :to="menu.url">{{menu.value}}</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import { ref } from 'vue'
export default {
    name : 'NavVar',
    setup() {
        const curMenu = ref('home')
        const menus = [ 
            { key: 'home',    value: '홈',        url: '/home' },
            { key: 'info',    value: '소개',      url: '/info' },
            { key: 'board',   value: '게시판',    url: '/board'},
            { key: 'profile', value: 'Profile',   url: '/profile'},
        ]
        const onmovePage = (menu_object) => { menu.value = menu_object.key  }
        return {  curMenu, onmovePage ,menus }
    },
}
</script>
