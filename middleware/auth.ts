export default defineNuxtRouteMiddleware(async (_, _from) => {
  const authCookie = useCookie("auth");
  const { me } = useAuth();

  /**
   * Skip client side.
   */
  if (process.client) return;

  if (!authCookie.value) return navigateTo("/login");

  await me();
});
