export default defineNuxtRouteMiddleware(async (_, _from) => {
  const cookie = useCookie("auth");
  const { me } = useAuth();

  if (process.client) return;

  if (!cookie.value) return navigateTo("/login");

  await me(() => {
    cookie.value = null;
    return navigateTo("/login");
  });
});
