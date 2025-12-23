import aboutOne from '../views/AdminOne'

const adminRouter = [
    {
      path: 'one',
      component: aboutOne,
    },
    {
      path: 'two',
      component: () => import('../views/AdminTwo.vue') ,
    },
  ]
export default adminRouter