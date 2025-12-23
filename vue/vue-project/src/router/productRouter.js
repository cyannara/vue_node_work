import productOne from '../views/ProductOne'

const productRouter = [
    {
      path: 'prod/list',
      component: productOne,
    },
    {
      path: 'prod/cart',
      component: () => import('../views/ProductTwo.vue') ,
    },
  ]
export default productRouter