export const userinfo = {
    state: () => ({
        name: 'choi',
        email: 'choi@yedam.ac',
        count : 0,
        msg : 'store에 저장된 메시지'
      }),
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
  ,
  getter: {
    user_data:(state) => { return { msg:state.msg}}
  }
}