import { User } from "@/interfaces/user.interface";

export default function () {
  /**
   * Composables.
   */
  const router = useRouter();
  const authCookie = useCookie("auth");
  const token = useState<string>("token", () => authCookie.value as string);
  const user = useState<User>("user", () => ({} as User));

  /**
   * Methods.
   */
  const me = async (onError?: Function): Promise<void> => {
    try {
      const userInfo = await useApi<User>("user/me", {
        method: "GET",
      });

      user.value = userInfo;
    } catch (error) {
      onError?.(error);
    }
  };

  const login = async (_token: string): Promise<void> => {
    try {
      const { token: responseToken } = await useApi<{ token: string }>(
        "auth/google",
        {
          method: "POST",
          body: { token: _token },
        }
      );

      authCookie.value = responseToken;
      token.value = authCookie.value;

      await me();

      router.push({ path: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  const getSocketIds = async () => {
    try {
      const ids = await useApi<number[]>("channels");
      console.log(ids);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, login, me, getSocketIds, token };
}
