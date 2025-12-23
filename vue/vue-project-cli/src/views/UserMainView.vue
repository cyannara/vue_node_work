<template>
  <div class="container">
    <nav>
      <router-link to="/admin/one">관리자</router-link> |
      <router-link to="/user/one">로그인</router-link> |
      <router-link to="/user/two">회원가입</router-link> |
      <router-link to="/user/prod/list">상품</router-link> |
      <router-link to="/user/prod/cart">cart</router-link>
    </nav>
    <h1>user Main page</h1>
    <router-view/>
    <hr>
    <footer>
      user main footer
    </footer>
  </div>
</template>
