export default defineNuxtRouteMiddleware(() => {
  if (process.server) return;

  const { init, socket } = useSocket();

  if (socket.value) return;

  init();
});
