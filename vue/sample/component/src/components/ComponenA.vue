<script>
import { useStore } from 'vuex'
const store = useStore();
export default {
    inject : ['provideMsg' ]
    ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    props: ['msg', 'count']
    ,
    emits: ['myEvent']
    ,
    data(){
        return {inputCnt : 0 }
    }
    ,
    computed: {

        // const user_data = store.getters['userinfo/user_data']
        // return {inputCnt : this.$props.count, storeMsg : user_data} 
        // doneTodosCount () {
        //     return this.$store.state.todos.filter(todo => todo.done).length
        // }
    }
    ,
 
    methods : {
        countChange(){
            this.$emit('myEvent', this.inputCnt)
        },
        idChange(){
            this.provideMsg.id='aaaa'
        },
        increment() {
            this.$store.commit('visitCount/increment')
            console.log(this.$store.state.visitCount.count)
        }
    },
    mounted(){
        console.log(this.$root.count)
        console.log(this.$parent.count)
    }
}
</script> 
<template>
    <div>

        <div>component A 입니다. {{msg}}</div>
        <div>부모에게서 받은 데이터 {{count}}</div>
        <div>inject: {{provideMsg}}</div>
        <slot></slot>
        <div>store: {{storeMsg}}</div>
        <input v-model="inputCnt" >  
        <button @click="countChange">커스턴이벤트로 데이터 전달</button>
        <button @click="idChange">프로바이더 리엑티브</button>
        <button @click="increment">store변경</button>

    </div>
</template>