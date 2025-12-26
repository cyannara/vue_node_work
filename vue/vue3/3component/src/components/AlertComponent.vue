<script setup>
defineProps({
  color: {
    type: String,
    default: "success",
  },
});
</script>

<template>
  <div class="alertbody">
    <div class="alertmodal">
      <slot /><br />
      <button @click="$emit('close')" class="btn btn-success mt-2">확인</button>
    </div>
  </div>
</template>

<style scoped>
.alertbody {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.alertmodal {
  /* 모달의 스타일 */
  width: 300px;
  height: 150px;
  background-color: white;
  box-shadow: 3px 4px 11px 0px #00000040;
  border: 1px solid #ccc;
  text-align: center;
  margin: 0 auto;
  padding: 2em;
  /* 가운데 정렬을 위한 설정은 body에 적용 */
}
</style>
