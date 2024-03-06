import { useQuery } from "@tanstack/react-query";
import AXIOS_INSTANCE from "api/axios";
import { createQueryParams } from "utils";

export const fetcher = (url: string, params = {}) => {
  if (!url) return null;

  return new Promise((resolve, reject) => {
    const queryUrl = url + createQueryParams(params);

    AXIOS_INSTANCE
      .get(queryUrl.toString() ?? url)
      .then(
        (res) => resolve(res?.data?.data ?? null),
        (err) => reject(err)
      )
      .catch((error) => reject(error));
  });
};

export const useReactQuery = (key: any, url: string, params = {}, config = {}) => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: key,
    queryFn: () => fetcher(url, params),
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    ...config,
  });

  return { isLoading, isError, isSuccess, data };
};
