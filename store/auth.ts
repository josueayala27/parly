import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({ user: {} }),
  actions: {
    setUser(u: any) {
      this.user = u;
    },
  },
});
