<script setup>
  import MenuItem from './MenuItem.vue'
  import {ref} from 'vue';

function buildTree(flatArray) {
  const map = new Map();
  const tree = [];

  // 1. 모든 항목을 맵에 저장
  flatArray.forEach(item => {
    map.set(item.id, { ...item, children: [] });
  });

  // 2. 부모-자식 관계를 설정
  flatArray.forEach(item => {
    if (item.parentId === null) {
      tree.push(map.get(item.id));  // 루트 노드
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(map.get(item.id));  // 부모의 children에 추가
      }
    }
  });

  return tree;
}


const data = [
  { id: 1, name: "Root1", parentId: null },
  { id: 2, name: "Child 1", parentId: 1 },
  { id: 3, name: "Child 2", parentId: 1 },
  { id: 4, name: "Subchild 1", parentId: 2 },
  { id: 5, name: "Subchild 2", parentId: 2 },
  { id: 6, name: "Subchild 3", parentId: 4 },
  { id: 7, name: "Subchild 4", parentId: 4 },
  { id: 8, name: "Root2", parentId: null },
  { id: 9, name: "Subchild 4", parentId: 8 },
];

// 변환 실행
const treeData = ref(buildTree(data));
//console.log(JSON.stringify(treeData, null, 2));

function menuSelect(item){
  console.log('parent', item);
}


</script>

<template>
   <ul>
    <MenuItem 
        :items="treeData"  
        @menuSelect="menuSelect" />
   </ul>
</template>

<style scoped>
</style>
