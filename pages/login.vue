<template>
  <div class="h-screen grid place-items-center relative">
    <!-- <div class="bg-blue-50 absolute top-0 left-0 h-[100%] w-[50%] -z-10"></div> -->

    <div class="w-[25rem] shadow-lg rounded-lg p-4 bg-white text-gray-900">
      <h1 class="text-2xl font-semibold">Welcome to Parly!</h1>
      <UiCaption class="mt-2 text-gray-600">
        Connect with a community of friends, have fun, and engage in meaningful
        conversations.
      </UiCaption>

      <div
        role="button"
        class="p-4 bg-gray-100 hover:bg-gray-200 w-full rounded-lg mt-4 flex justify-center gap-4 items-center font-semibold text-gray-900"
        @click="handleAuth"
      >
        <GoogleIcon />
        Continue with Google
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import GoogleIcon from "@/assets/svg/login/google.svg";

const authCookie = useCookie("auth");
const router = useRouter();

/**
 * SignIn token generator.
 */
const signWithPopup = async (): Promise<string> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;

  return token as string;
};

/**
 * Handle authentication with google token.
 */
const handleAuth = async () => {
  const token: string = await signWithPopup();

  const appToken = await useApi<{ token: string }>("auth/google", {
    method: "POST",
    body: { token },
  });

  authCookie.value = appToken.token;
  router.push({ path: "/" });
};

definePageMeta({
  layout: "auth",
  middleware: function () {
    const cookie = useCookie("auth");

    if (cookie.value) {
      return navigateTo("/");
    }
  },
});
</script>
