import * as dayjs from "dayjs";

export default defineNuxtPlugin(() => {
  return {
    provide: { dayjs },
  };
});
