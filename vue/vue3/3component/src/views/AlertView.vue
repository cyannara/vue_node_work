<script setup>
import { ref, reactive } from "vue";
import AlertComponent from "@/components/AlertComponent.vue";

const alertVisible = ref(false);
const msg = ref("");
const member = reactive({
  id: "",
  pass: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  center_no: 0,
  authority: "a1",
});

const showAlert = (message) => {
  msg.value = message;
  alertVisible.value = true;
  setTimeout(() => {
    alertVisible.value = false;
  }, 2000);
};

const idCheck = async () => {
  if (member.id == "") {
    showAlert("아이디가 입력되지 않았습니다. 아이디를 입력해주세요.");
    return;
  }
};
</script>

<template>
  <div>
    <h4>회원가입</h4>
    <div class="row m-2">
      <div class="col-auto">회원아디</div>
      <div class="col-auto">
        <input :model="member.id" class="form-control" />
      </div>
      <div class="col-auto">
        <button @click="idCheck()" class="btn btn-info">중복확인</button><br />
      </div>
    </div>
    <textarea class="form-control"></textarea>
    <textarea class="form-control"></textarea>
    <textarea class="form-control"></textarea>
    <textarea class="form-control"></textarea>
    <textarea class="form-control"></textarea>
    <textarea class="form-control"></textarea>
    <textarea class="form-control"></textarea>
  </div>
  <AlertComponent v-show="alertVisible" @close="alertVisible = false">{{
    msg
  }}</AlertComponent>
</template>

<style scoped></style>
