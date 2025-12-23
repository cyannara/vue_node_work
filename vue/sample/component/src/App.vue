<script>
import ComponentA from './components/ComponenA.vue'

// import {provide } from 'vue'
// console.log()
export default {
  components: { ComponentA }
  ,
  //provide : { provideMsg : '프로바이드로 전달' + this.count}
  provide() {
    return {
      provideMsg: this.user
    }
  }
  ,
  data() {
    return { count: 15, user: { id: '', email: '' } }
  }
  ,
  methods: {
    countChange(cnt) {
      this.count = cnt;
    }
  }
} 
</script>
  
<template>

  <div>
    {{ count }}
    <component-a msg='hi scott' :count="count" @myEvent="countChange">
      <div>하위컴포넌트에 slot으로 전달</div>
    </component-a>
  </div>

</template>

<style scoped></style>