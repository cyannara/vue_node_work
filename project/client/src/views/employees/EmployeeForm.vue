<template>
  <h3>{{ form.id ? "직원 수정" : "직원 등록" }}</h3>

  <input v-model="form.first_name" placeholder="First name" />
  <input v-model="form.last_name" placeholder="Last name" />
  <input v-model="form.email" placeholder="Email" />
  <input v-model="form.salary" placeholder="Salary" />
  <input v-model="form.job_id" placeholder="Job ID" />

  <button @click="save">저장</button>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useEmployeeSyncStore } from "@/stores/employeeSyncStore";

const sync = useEmployeeSyncStore();
const form = reactive({
  id: null,
  first_name: "",
  last_name: "",
  email: "",
  salary: "",
  job_id: "",
});

watch(
  () => sync.selectedId,
  (id) => {
    if (!id) return;
    const list = JSON.parse(localStorage.getItem("employees") || "[]");
    Object.assign(
      form,
      list.find((e) => e.id === id)
    );
  }
);

function save() {
  const list = JSON.parse(localStorage.getItem("employees") || "[]");
  if (form.id) {
    const i = list.findIndex((e) => e.id === form.id);
    list[i] = { ...form };
  } else {
    form.id = Date.now().toString();
    list.push({ ...form });
  }
  localStorage.setItem("employees", JSON.stringify(list));
  sync.notifyReload();
}
</script>
