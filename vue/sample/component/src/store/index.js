import { createStore } from 'vuex'
import { userinfo } from './modules/component-a.js'
import { visitCount } from './modules/visitCount.js'

export const store = createStore({
  modules: {
    userinfo: userinfo,
    visitCount :visitCount
  },
})
