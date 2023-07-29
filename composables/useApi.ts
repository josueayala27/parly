import type { FetchOptions } from "ofetch";

interface FetchOption extends FetchOptions {
  method: "POST" | "GET" | "PUT" | "DELETE";
}

export function useApi<T>(path: string, opts?: FetchOption): Promise<T> {
  const config = useRuntimeConfig();
  const authCookie = useCookie("auth");

  const tokenType = "Bearer";
  const baseURL: string = config.public.API_URL + `/api`;

  const headers: HeadersInit = [
    ["Authorization", `${tokenType} ${authCookie.value}`],
  ];

  return $fetch<T>(path, {
    baseURL,
    headers,
    onResponseError: ({ response }) => {
      console.error("Fetch Error", response._data?.message);
    },
    ...(opts && { ...opts }),
  });
}
