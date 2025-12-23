//component: Vue.defineAsyncComponent(() => loadModule('./components/my-signin.vue', options))

const routes = [{
  path: '/product',
  component: (() => loadModule('./components/my-product.vue', options))
},
{
  path: '/productState',
  component: (() => loadModule('./components/my-product-state.vue', options))
},
{
  path: '/signin',
  component: (() => loadModule('./components/my-signin.vue', options))
},
{
  path: '/',
  component: (() => loadModule('./components/my-main.vue', options))
},
]

const router = VueRouter.createRouter({
history: VueRouter.createWebHashHistory(),
routes,
});