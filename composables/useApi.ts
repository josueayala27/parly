import type { FetchOptions } from "ofetch";

interface FetchOption extends FetchOptions {
  method: "POST" | "GET" | "PUT" | "DELETE";
}

/**
 *
 * @param path
 * @param opts
 * @returns
 */
export function useApi<T>(path: string, opts?: FetchOption): Promise<T> {
  const { token } = useAuth();

  /**
   * Composables.
   */
  const config = useRuntimeConfig();

  /**
   * Scoped variables.
   */
  const tokenType = "Bearer";
  const baseURL: string = config.public.API_URL + `/api`;

  /**
   * Headers.
   */
  let headers = {};
  if (token.value) {
    headers = { ...headers, Authorization: `${tokenType} ${token.value}` };
  }

  return $fetch<T>(path, {
    baseURL,
    headers: {
      ...headers,
      ...useRequestHeaders(["cookie", "referer"]),
    },
    onResponseError: ({ response }) => {
      console.error("Fetch Error", response._data?.message);
    },
    ...(opts && { ...opts }),
  });
}
