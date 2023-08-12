export default defineNuxtPlugin(() => {
  console.log("Se me deben de cargar las notificaciones?");

  if (!Notification) {
    console.log("Desktop notifications are not available in your browser.");
    return;
  }

  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  function notify(message: string) {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      const options: NotificationOptions = {
        body: message,
        dir: "ltr",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
      };

      const notification = new Notification("Josué Ayala", options);

      notification.onclick = function () {
        window.open("http://localhost:3000/channels/24");
      };
    }
  }

  return {
    provide: {
      notify,
    },
  };
});
