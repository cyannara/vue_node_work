<script setup>
  import MenuItem from './MenuItem.vue'
  import {computed, ref, defineEmits} from 'vue';

  const emit = defineEmits(['menuSelect'])
  
const props = defineProps({
  items: { type: Array, required: true },
});


// 계산된 ref
const hasChildren = computed(() => {
  return item.children.length>0
})

function toggle(item) {
      if (item.children.length > 0 ) {
        item.isOpen = !item.isOpen;
      }
      //console.log(item.id, isOpen.value)
      // 클릭 시 이벤트 emit 등 추가 가능 (예: 메뉴 선택 처리)
}

function menuSelect(item) {

      // 클릭 시 이벤트 emit 등 추가 가능 (예: 메뉴 선택 처리)
      //console.log("menu select")
      emit('menuSelect', item);
}
</script>

<template>
  <ul class="menu">
  <li v-for="item in props.items" :key="item.id">
      <div @click="toggle(item, 't')">
        <span v-if="item.children.length>0">{{item.name}} {{ item.isOpen ? "▼" : "▶" }}</span>
        <span v-else @click="menuSelect(item)">{{item.name}}</span>
      </div>
      <MenuItem  v-if="item.children?.length>0 && item.isOpen"   
                 :items="item.children" 
                 @menuSelect="menuSelect"/>
  </li>
</ul>
</template>

<style scoped>
.pmenu {
  border : 1px solid blue;
}
</style>
