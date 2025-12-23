import userOne from '../views/UserOne'

const userRouter = [
    {
      path: 'one',
      component: userOne,
    },
    {
      path: 'two',
      component: () => import('../views/UserTwo.vue') ,
    },
  ]
export default userRouter