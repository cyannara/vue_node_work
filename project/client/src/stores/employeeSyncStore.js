import { defineStore } from "pinia";
export const useEmployeeSyncStore = defineStore("employeeSync", {
  state: () => ({
    reloadKey: 0,
    selectedId: null,
  }),
  actions: {
    notifyReload() {
      this.reloadKey++;
    },
    select(id) {
      this.selectedId = id;
    },
  },
});
