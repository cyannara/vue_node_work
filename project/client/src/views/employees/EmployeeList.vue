<script setup>
import { ref, watch } from "vue";
import { useEmployeeSyncStore } from "@/stores/employeeSyncStore";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const sync = useEmployeeSyncStore();
const list = ref([]);

function load() {
  list.value = JSON.parse(localStorage.getItem("employees") || "[]");
}
load();
watch(() => sync.reloadKey, load);

function rowSelect(e) {
  sync.select(e.data.id);
}
</script>

<template>
  <div>목록</div>
  <DataTable :value="list" @rowClick="rowSelect">
    <Column field="first_name" header="First" />
    <Column field="last_name" header="Last" />
    <Column field="email" header="Email" />
    <Column field="job_id" header="Job" />
  </DataTable>
</template>

<style scoped></style>
