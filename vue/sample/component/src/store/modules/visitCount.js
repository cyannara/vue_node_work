export const visitCount= { 
    namespaced: true,
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
          console.log('aaaa')
        state.count++
      }
    },

    getters: {
        doneTodosCount () {
          return state.count
        }
      }
  }