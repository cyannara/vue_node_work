## [Vue UI 테마](https://ko.vuejs.org/ecosystem/themes)

1. Vuetify
2. Element Plus
3. Naive UI
4. PrimeVue
5. Argon
6. Quasar
7. BootstrapVue 3
8. Tailwind + Headless UI

#### 선택기준

- 회사/관리자 페이지 → Element Plus, Vuetify, PrimeVue
- 스타트업/개인 프로젝트 → Naive UI, Tailwind + Headless UI
- 모바일 앱까지 고려 → Quasar
- Bootstrap 좋아하면 → BootstrapVue 3

Vuetify, PrimeVue 컴포넌트는 무료이지만 테마나 템플릿은 유료가 있음

### vuetify

https://vuetifyjs.com/en/

### primevue

https://primevue.org/

### BootstrapVueNext

https://bootstrap-vue-next.github.io/bootstrap-vue-next/


## pinia

1. main.js : vue 인스턴스에 pinia 등록

```javascript
import { createPinia } from "pinia";

const pinia = createPinia();

app.use(pinia);
```

2. store 생성
   sotres/counter.js

```javascript
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
```

3. 컴포넌트에서 pinia 사용하기
   StoreView.vue

```javascript
<template>
  <h2>count: {{ count }}</h2>
  <h2>name: {{ name }}</h2>
  <button class="btn-success" @click="increment">증가</button>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  computed: {
    //computed()는 getters 프로퍼티가 됨.
    ...mapState(useCounterStore, ["name", "count"]),
  },
  //methods function()은 actions 프로퍼티가 됨.
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
};
</script>
// mapState는 Pinia 스토어의 state를 반응형으로 가져오는 헬퍼 함수입니다.
// useCounterStore: 우리가 만든 Pinia 스토어입니다.
// ["name", "count"]: 그 스토어에서 가져올 state 속성입니다.
// ...: 전개 연산자로, 반환되는 객체의 속성들을 개별로 꺼내 쓰기 위함입니다.
```

### dependency

sockjs-client  
vue-iamport  
webstomp-client

## 빌드도구 vite
https://ko.vuejs.org/guide/best-practices/production-deployment  

### vite cli
https://vite.dev/guide/cli 
- vite
- vite dev
- vite serve
- vite build

### vite config
[https://vite.dev/config/server-options](https://vite.dev/config/server-options)  
- server.proxy
```js
export default defineConfig({
  server: {
    proxy: {
      // string shorthand:
      // http://localhost:5173/foo
      //   -> http://localhost:4567/foo
      '/foo': 'http://localhost:4567',
      // with options:
      // http://localhost:5173/api/bar
      //   -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // with RegExp:
      // http://localhost:5173/fallback/
      //   -> http://jsonplaceholder.typicode.com/
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ''),
      },
      // Using the proxy instance
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy'
        },
      },
      // Proxying websockets or socket.io:
      // ws://localhost:5173/socket.io
      //   -> ws://localhost:5174/socket.io
      // Exercise caution using `rewriteWsOrigin` as it can leave the
      // proxying open to CSRF attacks.
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
})
```
