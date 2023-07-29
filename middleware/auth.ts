import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware(async (_, _from) => {
  const { user } = storeToRefs(useAuthStore());

  const cookie = useCookie("auth");

  if (process.client) return;

  if (!cookie.value) return navigateTo("/login");

  const userInfo = await useApi<{ full_name: string }>("user/me");
  user.value = userInfo;

  console.log(user.value);
});
