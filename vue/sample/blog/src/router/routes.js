import Profile from '../components/Profile.vue'
import Applications from '../components/Applications.vue'
import HelloWorld from '../components/HelloWorld.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
  template: '<div>Not Found</div>',
})

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/info', name: 'application', component: Applications },
  { path: '/home', name: 'home', component: HelloWorld },
  { path: '/:catchAll(.*)+', component: NotFound },
]

export default routes