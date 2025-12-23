import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../views/BookList.vue';
import BookInfo from '../views/BookInfo.vue';
import BookForm from '../views/BookForm.vue';

const routes = [
  {
    path: '/',
    redirect : { name : 'bookList'}
    
  },
  {
    path: '/list',
    name: 'bookList',
    component: BookList
  },
  {
    path: '/info/:bno',
    name: 'bookInfo',
    component: BookInfo
  },
  {
    path: '/form',
    name: 'bookForm',
    component: BookForm
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
